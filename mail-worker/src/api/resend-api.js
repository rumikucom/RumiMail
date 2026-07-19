import resendService from '../service/resend-service';
import app from '../hono/hono';

app.post('/webhooks',async (c) => {
	try {
		await resendService.webhooks(c, await c.req.json());
		return c.text('success', 200)
	} catch (e) {
		return  c.text(e.message, 500)
	}
})

/**
 * Fully decoupled outbound mail dispatch route.
 *
 * Dynamically resolves the Resend API key from c.env using the convention:
 *   RESEND_API_KEY_<DOMAIN_UPPERCASE_DOTS_TO_UNDERSCORES>
 *
 * Examples:
 *   'rumiku.com'   → c.env.RESEND_API_KEY_RUMIKU_COM
 *   'creedigo.com' → c.env.RESEND_API_KEY_CREEDIGO_COM
 *
 * No hardcoded domain logic — adding a new domain only requires setting
 * the corresponding environment variable in wrangler.toml or the dashboard.
 */
app.post('/outbound/send', async (c) => {
	try {
		const body = await c.req.json();
		const { from, to, subject, html, text, cc, bcc, reply_to } = body;

		if (!from || !to) {
			return c.json({ error: 'Missing required fields: from, to' }, 400);
		}

		// Parse the clean domain from the 'from' field.
		// Handles both bare addresses (user@domain.com) and
		// display-name wrappers ("Display Name <user@domain.com>").
		const match = from.match(/<([^>]+)>/);
		const address = match ? match[1] : from.trim();
		const atIndex = address.lastIndexOf('@');
		const domain = atIndex !== -1 ? address.substring(atIndex + 1).toLowerCase() : '';

		if (!domain) {
			return c.json({ error: 'Could not parse domain from the "from" field' }, 400);
		}

		// Programmatically construct the environment variable key string.
		const envKey = 'RESEND_API_KEY_' + domain.toUpperCase().replace(/\./g, '_');
		const apiKey = c.env[envKey];

		if (!apiKey) {
			return c.json({ error: 'Domain is not configured in environment variables' }, 400);
		}

		// Build the Resend payload, mapping all transactional email properties.
		const payload = { from, to, subject };
		if (html) payload.html = html;
		if (text) payload.text = text;
		if (cc) payload.cc = cc;
		if (bcc) payload.bcc = bcc;
		if (reply_to) payload.reply_to = reply_to;

		// Auto-archive: dynamically resolve per-domain backup Gmail from c.env
		const backupKey = 'BACKUP_GMAIL_' + domain.toUpperCase().replace(/\./g, '_');
		const backupEmail = c.env[backupKey];
		if (backupEmail) {
			payload.bcc = Array.isArray(payload.bcc) ? [...payload.bcc, backupEmail] : [backupEmail];
		}

		// Dispatch the outbound HTTPS POST to Resend's API.
		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${apiKey}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		const result = await response.json();

		if (!response.ok) {
			return c.json({ error: result.message || 'Resend API error', statusCode: response.status }, response.status);
		}

		return c.json({ id: result.id });
	} catch (e) {
		return c.json({ error: e.message }, 500);
	}
})
