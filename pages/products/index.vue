<script setup lang="ts">
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs';
import type { VDataTableHeader } from '@morpheme/table';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

useHead({
    title: 'Products',
})

definePageMeta({
    breadcrumbs: [
        {
            title: 'Products',
            to: '/products'
        },
    ] as VBreadcrumbItemProps[],
})
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')

const headers = ref<VDataTableHeader[]>([
    {
        text: 'Image',
        value: 'images',
    },
    {
        text: 'Name',
        value: 'name',
    },
    {
        text: 'Price',
        value: 'price',
    },
    {
        text: 'Category',
        value: 'category',
    },
    {
        text: 'Action',
        value: 'action',
        align: 'center',
        sortable: false,
    },
    
])

const items = ref([
    {
        id: 1,
        name: 'Television',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),   
    },
    {
        id: 3,
        name: 'Smart Watch',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 4,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 5,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 6,
        name: 'Smart Watch',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 7,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 8,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 9,
        name: 'Television',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 10,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 11,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 12,
        name: 'Television',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 13,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 14,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 15,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 16,
        name: 'Television',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 17,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 18,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 19,
        name: 'Smartphone',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
    {
        id: 20,
        name: 'Smart Watch',
        price: 599.99,
        category: 'Electronics',
        images: generateRandomPicsumImageLinks(2),
    },
])
const searchQuery = ref<string>(''); 

function generateRandomPicsumImageLinks(count: number) {
    const imageLinks = []
    for(let i = 0; i < count; i++) {
        const imageURL = `https://picsum.photos/300/300?random=${i}`
        imageLinks.push(imageURL)
    }
    return imageLinks
}
const filteredItems = computed(() => { 
    return items.value.filter((item) => {
        const search = searchQuery.value.toLowerCase();
        return (
            item.name.toLowerCase().includes(search) ||
            item.category.toLowerCase().includes(search)
        );
    });
});

</script>
<template>
    <div Class="text-3xl font-medium mb-2">
        Products
    </div>
    <div class="text-base font-normal mb-6">Manage your products here</div>

    <AppPageHeader title="Products" subtitle="Manage your products here" />
    <VCard>
        <div class="flex w-full md:flex-no-wrap flex-wrap justify-between items-center gap-2 mb-5">
            <div>
                <VInput
                prepend-icon="ri:search-line"
                placeholder="Search"
                v-model="searchQuery"
                />
            </div>
            <NuxtLink to="/products/create">
            <VBtn color="indigo" prefix-icon="heroicons:plus-small-solid" :block="isMobile">
            Tambah
        </VBtn>
    </NuxtLink>
        </div>
        <VDataTable :headers="headers" :items="filteredItems" hover>
            <template #item.images="{ item }">
                <div class="overflow-hidden rounded-md w-12 h-12 object-cover">
                    <NuxtImg :src="String(item.images[0])" />
                </div>
            </template>
            <template #item.action="{ item }">
            <TableActions :id="item.id" path="/products" />
        </template>
        </VDataTable>
    </VCard>
</template>



<style scoped>

</style>