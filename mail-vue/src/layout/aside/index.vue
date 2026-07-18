<template>
  <el-scrollbar class="scroll bg-layout-card text-primary">
    <div>
      <div class="title text-primary border-b border-[#E0E4EA] dark:border-[#414243]">
        <Icon icon="material-symbols:mail-outline-rounded" width="24" height="24" style="color: #3E86F9" />
        <div>RumiMail</div>
      </div>
      <el-menu :collapse="false" text-color="#fff" active-text-color="#fff">
        <el-menu-item @click="router.push({name: 'email'})" index="email"
                      :class="route.meta.name === 'email' ? 'choose-item' : ''">
          <Icon icon="material-symbols:inbox-outline-rounded" width="20" height="20" />
          <span class="menu-name">{{$t('inbox')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'send'})" index="send" v-perm="'email:send'"
                      :class="route.meta.name === 'send' ? 'choose-item' : ''">
          <Icon icon="material-symbols:send-outline-rounded" width="20" height="20" />
          <span class="menu-name">{{$t('sent')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'draft'})" index="draft" v-perm="'email:send'"
                      :class="route.meta.name === 'draft' ? 'choose-item' : ''">
          <Icon icon="material-symbols:draft-outline-rounded" width="19" height="19" />
          <span class="menu-name">{{$t('drafts')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'star'})" index="star"
                      :class="route.meta.name === 'star' ? 'choose-item' : ''">
          <Icon icon="material-symbols:star-outline-rounded" width="20" height="20" />
          <span class="menu-name">{{$t('starred')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'setting'})" index="setting"
                      :class="route.meta.name === 'setting' ? 'choose-item' : ''">
          <Icon icon="material-symbols:settings-outline-rounded" width="20" height="20" />
          <span class="menu-name">{{$t('settings')}}</span>
        </el-menu-item>
        <div class="manage-divider border-t border-[#E0E4EA] dark:border-[#414243]"></div>
        <div class="manage-title text-secondary" v-perm="['all-email:query','user:query','role:query','setting:query','analysis:query','reg-key:query']">
          <div>{{$t('manage')}}</div>
        </div>
        <el-menu-item @click="router.push({name: 'analysis'})" index="analysis" v-perm="'analysis:query'"
                      :class="route.meta.name === 'analysis' ? 'choose-item' : ''">
          <Icon icon="material-symbols:analytics-outline-rounded" width="24" height="24" />
          <span class="menu-name">{{$t('analytics')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'user'})" index="setting" v-perm="'user:query'"
                      :class="route.meta.name === 'user' ? 'choose-item' : ''">
          <Icon icon="material-symbols:group-outline-rounded" width="20" height="20" />
          <span class="menu-name">{{$t('allUsers')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'all-email'})" index="all-email" v-perm="'all-email:query'"
                      :class="route.meta.name === 'all-email' ? 'choose-item' : ''">
          <Icon icon="material-symbols:mark-email-read-outline-rounded" width="22" height="22" />
          <span class="menu-name">{{$t('allMail')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'role'})" index="setting" v-perm="'role:query'"
                      :class="route.meta.name === 'role' ? 'choose-item' : ''">
          <Icon icon="material-symbols:admin-panel-settings-outline-rounded" width="22" height="22" />
          <span class="menu-name">{{$t('permissions')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'reg-key'})" index="reg-key" v-perm="'reg-key:query'"
                      :class="route.meta.name === 'reg-key' ? 'choose-item' : ''">
          <Icon icon="material-symbols:vpn-key-outline-rounded" width="22" height="22" />
          <span class="menu-name">{{$t('inviteCode')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'sys-setting'})" index="sys-setting" v-perm="'setting:query'"
                      :class="route.meta.name === 'sys-setting' ? 'choose-item' : ''">
          <Icon icon="material-symbols:tune-rounded" width="18" height="18" />
          <span class="menu-name">{{$t('SystemSettings')}}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </el-scrollbar>
</template>

<script setup>
import router from "@/router/index.js";
import { useRoute } from "vue-router";
import {Icon} from "@iconify/vue";
import {useSettingStore} from "@/store/setting.js";

const settingStore = useSettingStore();
const route = useRoute();

</script>

<style lang="scss" scoped>

.title {
  padding: 20px 20px 16px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.02em;
  font-family: 'Inter', system-ui, sans-serif;
  margin-bottom: 8px;

  > div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.manage-divider {
  margin: 12px 12px 0 12px;
}

.manage-title {
  padding: 10px 16px 4px 16px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
}

.el-menu-item {
  margin: 2px 12px !important;
  border-radius: 20px;
  height: 42px;
  padding: 0 16px !important;
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--text-main) !important;
  transition: all 150ms ease;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 14px;
}

.choose-item {
  background-color: var(--active-pill) !important;
  color: var(--text-main) !important;
  font-weight: 600;
  position: relative;
}

@media (hover: hover) {
  .el-menu-item:hover {
    background-color: rgba(0,0,0,0.05) !important;
    color: var(--text-main) !important;
    .dark & {
      background-color: rgba(255,255,255,0.05) !important;
    }
  }
}

.menu-name {
  user-select: none;
  font-size: 14px;
}

:deep(.el-scrollbar__wrap--hidden-default) {
  background-color: var(--bg-card) !important;
}

:deep(.el-menu-item) {
  background: transparent;
}

:deep(.el-menu) {
  background: transparent;
}

.el-menu {
  border-right: 0;
  width: 260px;
  padding-top: 4px;
}

:deep(.el-divider__text) {
  background-color: var(--bg-card);
  color: var(--text-main);
}

:deep(.el-scrollbar__bar.is-vertical .el-scrollbar__thumb) {
  background: rgba(0, 0, 0, 0.15);
}

:deep(.el-scrollbar__bar.is-horizontal .el-scrollbar__thumb) {
  background: rgba(0, 0, 0, 0.15);
}

.scroll {
  background-color: var(--bg-card);
}
</style>
