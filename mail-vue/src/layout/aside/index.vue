<template>
  <el-scrollbar class="scroll">
    <div>
      <div class="title">
        <Icon icon="mdi:email-outline" width="24" height="24" style="color: #3E86F9" />
        <div>RumiMail</div>
      </div>
      <el-menu :collapse="false" text-color="#fff" active-text-color="#fff">
        <el-menu-item @click="router.push({name: 'email'})" index="email"
                      :class="route.meta.name === 'email' ? 'choose-item' : ''">
          <Icon icon="hugeicons:mailbox-01" width="20" height="20" />
          <span class="menu-name">{{$t('inbox')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'send'})" index="send" v-perm="'email:send'"
                      :class="route.meta.name === 'send' ? 'choose-item' : ''">
          <Icon icon="cil:send" width="20" height="20" />
          <span class="menu-name">{{$t('sent')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'draft'})" index="draft" v-perm="'email:send'"
                      :class="route.meta.name === 'draft' ? 'choose-item' : ''">
          <Icon icon="ep:document" width="19" height="19" />
          <span class="menu-name">{{$t('drafts')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'star'})" index="star"
                      :class="route.meta.name === 'star' ? 'choose-item' : ''">
          <Icon icon="solar:star-line-duotone" width="20" height="20" />
          <span class="menu-name">{{$t('starred')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'setting'})" index="setting"
                      :class="route.meta.name === 'setting' ? 'choose-item' : ''">
          <Icon icon="fluent:settings-48-regular" width="20" height="20" />
          <span class="menu-name">{{$t('settings')}}</span>
        </el-menu-item>
        <div class="manage-divider"></div>
        <div class="manage-title" v-perm="['all-email:query','user:query','role:query','setting:query','analysis:query','reg-key:query']">
          <div>{{$t('manage')}}</div>
        </div>
        <el-menu-item @click="router.push({name: 'analysis'})" index="analysis" v-perm="'analysis:query'"
                      :class="route.meta.name === 'analysis' ? 'choose-item' : ''">
          <Icon icon="fluent:data-pie-20-regular" width="24" height="24" />
          <span class="menu-name">{{$t('analytics')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'user'})" index="setting" v-perm="'user:query'"
                      :class="route.meta.name === 'user' ? 'choose-item' : ''">
          <Icon icon="si:user-alt-2-line" width="20" height="20" />
          <span class="menu-name">{{$t('allUsers')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'all-email'})" index="all-email" v-perm="'all-email:query'"
                      :class="route.meta.name === 'all-email' ? 'choose-item' : ''">
          <Icon icon="fluent:mail-list-28-regular" width="22" height="22" />
          <span class="menu-name">{{$t('allMail')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'role'})" index="setting" v-perm="'role:query'"
                      :class="route.meta.name === 'role' ? 'choose-item' : ''">
          <Icon icon="fluent:lock-closed-16-regular" width="22" height="22" />
          <span class="menu-name">{{$t('permissions')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'reg-key'})" index="reg-key" v-perm="'reg-key:query'"
                      :class="route.meta.name === 'reg-key' ? 'choose-item' : ''">
          <Icon icon="fluent:fingerprint-20-filled" width="22" height="22" />
          <span class="menu-name">{{$t('inviteCode')}}</span>
        </el-menu-item>
        <el-menu-item @click="router.push({name: 'sys-setting'})" index="sys-setting" v-perm="'setting:query'"
                      :class="route.meta.name === 'sys-setting' ? 'choose-item' : ''">
          <Icon icon="eos-icons:system-ok-outlined" width="18" height="18" />
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
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.02em;
  font-family: 'SF Pro Display', 'Geist Sans', 'Helvetica Neue', system-ui, sans-serif;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 8px;

  > div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.manage-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin: 12px 12px 0 12px;
}

.manage-title {
  padding: 10px 16px 4px 16px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
}

.el-menu-item {
  margin: 2px 12px !important;
  border-radius: 6px;
  height: 42px;
  padding: 0 16px !important;
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(255, 255, 255, 0.7) !important;
  transition: all 150ms ease;
  font-family: 'SF Pro Display', 'Geist Sans', 'Helvetica Neue', system-ui, sans-serif;
  font-size: 14px;
}

.choose-item {
  background: rgba(62, 134, 249, 0.15) !important;
  color: #ffffff !important;
  font-weight: 600;
  position: relative;
}

.choose-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 3px;
  background: #3E86F9;
  border-radius: 0 2px 2px 0;
}

@media (hover: hover) {
  .el-menu-item:hover {
    background: rgba(255, 255, 255, 0.05) !important;
    color: #ffffff !important;
  }
}

.menu-name {
  user-select: none;
  font-size: 14px;
}

:deep(.el-scrollbar__wrap--hidden-default) {
  background: #041133 !important;
}

:deep(.el-menu-item) {
  background: #041133;
}

:deep(.el-menu) {
  background: #041133;
}

.el-menu {
  border-right: 0;
  width: 260px;
  padding-top: 4px;
}

:deep(.el-divider__text) {
  background: #041133;
  color: #FFFFFF;
}

:deep(.el-scrollbar__bar.is-vertical .el-scrollbar__thumb) {
  background: rgba(255, 255, 255, 0.1);
}

:deep(.el-scrollbar__bar.is-horizontal .el-scrollbar__thumb) {
  background: rgba(255, 255, 255, 0.1);
}

.scroll {
  background: #041133;
}
</style>
