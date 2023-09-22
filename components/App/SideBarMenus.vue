<script setup lang="ts">
import { VList, VListItem, VListCollapse } from "@morpheme/ui";
import { ref } from "vue";
const route = useRoute();
const isOpen = ref(false);
const isMini = ref(false);
const menus = ref([
  {
    title: "Home",
    to: "/",
    prependIcon: "ri:home-2-line",
  },
  {
    title: "Products",
    prependIcon: "material-symbols:package-2-outline",
    items: [
      {
        title: " All Products",
        to: "/products",
        prependIcon: "eos-icons:products",
      },
      {
        title: " Category",
        to: "/",
        prependIcon: "iconamoon:category-bold",
        
      },
    ],
  },
  {
    title: "Transactions",
    to: "/transactions",
    prependIcon: "akar-icons:wallet",
  },
]);
</script>

<template>
      <VList hover class="custom-list">
        <template v-for="menu in menus" :key="menu.text">
          <VListCollapse v-if="menu.items">
            <template #activator="{ isOpen, toggle }">
              <VListItem
                v-bind="menu"
                :class="isMini ? 'justify-center' : ''"
                :hide-text="isMini"
                :hide-append="isMini"
                exact-active-class="active"
                color="indigo"
                append-icon="ri:arrow-down-s-line"
                :append-icon-class="isOpen ? 'rotate-180' : ''"
                @click="toggle"
              >
                {{ menu.title }}
              </VListItem>
            </template>
            <VList>
              <VListItem
                v-for="child in menu.items"
                :key="child.text"
                v-bind="child"
                :class="isMini ? 'justify-center' : ''"
                :hide-text="isMini"
                :hide-append="isMini"
              >
                {{ child.title }}
              </VListItem>
            </VList>
          </VListCollapse>
          <VListItem
            v-else
            v-bind="menu"
            :class="isMini ? 'justify-center' : ''"
            :hide-text="isMini"
            :hide-append="isMini"
          >
            {{ menu.title }}
          </VListItem>
        </template>
      </VList>
</template>

<style lang="scss">
:root{
--v-list-item-color: var(--color-white);
--v-list-item-hover-bg-color: var(--color-indigo-500);
--v-list-item-hover-color: var(--color-white);
--v-list-item-active-bg-color: var(--color-indigo-500);
--v-list-item-active-border-color: var(--color-indigo-600);
--v-list-item-active-color: var(--color-indigo-500);
--v-list-item-icon-width: var(--size-spacing-8);
--v-list-item-icon-height: var(--size-spacing-8);
}
// .router-link-exact-active {
//   background-color: var(--color-indigo-500);
// }
</style>