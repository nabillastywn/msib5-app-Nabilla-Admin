<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('sm'); // only smaller than lg
const isAsideOpen = ref(true);
const isMini = ref(true);
const ColorMode = useColorMode;

provide ('isMini', 'isMini')
watchEffect(() => {
  isAsideOpen.value = !isMobile.value;
});
function onMenuClick() {
  if (isMobile.value)
  isAsideOpen.value = false
}

</script>

<template>
  <VAppShell padded-container main-class="bg-slate-50 dark:bg-neutral-800" container-class="md:px-10">
    <!-- header -->
    <template #header>
      <VAppBar v-model="isMobile"
      color="white"
      shadow
      class="py-3 px-4 !z-[1]"
      size="auto"
      sticky>
      <VLogo :white="ColorMode.preference !== 'light'" @click="onMenuClick"/>
      <div class="flex-1" />
      <div class="flex items-center gap-3">
        <VBtn
        color="indigo"
        prefix-icon="ic:round-menu"
        @click="isAsideOpen = !isAsideOpen"/>
      </div>
    </VAppBar>
    </template>

    <!-- Navigation -->
    <template #navigation >
      <AppBreadcrumbs />
      </template>

    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model="isAsideOpen"
        v-model:mini="isMini"
        color="indigo"
        :fixed="isMobile"
        sticky
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :shadow="isMobile"
        :bordered="!isMobile"
        :class="[
          isMobile ? '[--nav-drawer-width:80%]' : '[--nav-drawer-width:300px]',
          { 'z-20': isMobile },
        ]"
      >
        <div class="flex items-center gap-2 pr-2 pl-4 p-3 justify-between">
          <NuxtLink to="/" class="font-semibold lg-h-[60px] pt-2 truncate">
            E-Commerce
          </NuxtLink>
          <VBtn
            v-if="!isMobile"
            color="indigo"
            prefix-icon="ic:round-menu"
            @click="isMini = !isMini"
          />
        </div>
        <div class="overflow-y-auto flex-1" color="indigo">
          <AppSideBarMenus @menu-click="onMenuClick" />
        </div>
      </VNavDrawer>
    </template>

    <!-- content -->
    <slot />

    <!-- footer -->
    <template #content.after>
      <VText variant="sm" color="gray.500" class="mt-4">
        Copyright &copy; 2023 &middot; All rights reserved.
      </VText>
    </template>

    <!-- content -->
    <MainContent />
    <VAppShell />
  </VAppShell>
</template>