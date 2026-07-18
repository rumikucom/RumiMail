# Product Requirement Document (PRD) - RumiMail Modern UI Redesign

## 1. Overview
The goal of this project is to overhaul the default visual styling of the Cloud Mail open-source webmail client into a premium, minimalist, and tech-corporate ecosystem branded as RumiMail. The UI must follow strict modern layout principles, emphasizing clean whitespace, precise alignments, and a refined dark interface using the `minimalist-skill` framework rules.

## 2. Core Design System & Guidelines (minimalist-skill)
* **Primary Background Color:** `#041133` (Deep Navy Blue) for structural navigation, sidebars, main layout backgrounds, and major containers.
* **Accent / Call-To-Action (CTA) Color:** `#3E86F9` (Electric Blue) for active links, buttons, selected states, highlights, and primary system indicators.
* **Typography & Text Color:** High-contrast pure white or very light gray text elements to ensure optimal legibility over dark backgrounds.
* **Layout Geometry:** Grid-based and flex-based layouts using minimal 1px borders for component separation. Avoid heavy dropshadows or bulky borders.

## 3. Scope of Modifications
* **Sidebar Layout (`mail-vue/src/layout/aside/index.vue`):** Change the solid background to `#041133`. Implement clean 1px borders for containment. Update all default branding typography and text references from "Cloud Mail" to "RumiMail".
* **App Header Component (`mail-vue/src/layout/header/index.vue`):** Streamline iconography, optimize spacing around search bars, and apply a minimalist dropdown panel for user profiles.
* **Email Inbox Views (`mail-vue/src/views/email/index.vue` & components):** Restyle email item lists. Remove heavy borders and opt for clean padding dividers with increased line-height for a breathable, un-cluttered reading experience.

## 4. Engineering Guardrails (Critical)
* All modifications must be restricted strictly to the `<template>` and Tailwind CSS utility classes within the target Vue files.
* Do not alter, delete, or restructure any `<script>` blocks, Vue lifecycle methods, Pinia stores, reactive states, or imports from `src/request/` and `src/store/`. Functionality must remain untouched.