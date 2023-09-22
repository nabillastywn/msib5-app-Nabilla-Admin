<template>
    <div>
    <div Class="text-3xl font-medium mb-2">
        Dashboard
    </div>
    <div class="text-base font-normal mb-6">Monitor your metrics for shipping, transactions, product and many more in here</div>
    <CardStatistic />
</div>
</template>

<script setup lang="ts">
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs';
definePageMeta({
    breadcrumbs: [
        {
            title: 'Home',
            to: '/'
        },
    ] as VBreadcrumbItemProps[],
})

</script>

<style scoped>

</style>