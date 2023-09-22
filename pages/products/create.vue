<script setup lang="ts">
import type { VBreadcrumbItemProps } from '@morpheme/breadcrumbs';
import VEditor from '@morpheme/editor'
definePageMeta({
    breadcrumbs: [
    {
            title: 'Products',
            to: '/products'
        },
        {
            title: 'Create',
            to: '/products/create'
        },
    ] as VBreadcrumbItemProps[],
})

const value = ref();
import {ref} from 'vue';
import {useForm} from 'vee-validate';
import {object, mixed, string} from 'yup';

const schema = object({
  image: mixed().required().label('Image'),
  name: string().required().label('Name'),
  price: string().required().email().label('Price'),
  content: string().required().label('Content'),
});

const {handleSubmit, resetForm, values, errors} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

</script>

<template>
    <div Class="text-2xl font-medium mb-4">
        Create New Product
    </div>
    <ClientOnly>
    <form @submit="onSubmit" class="border-none">
    <v-file-upload
      wrapper-class="mb-4"
      theme="image"
      name="image"
      label="Image"
      placeholder="Pick your best photo"
      rounded
      image
    />
    <div class="grid grid-cols-2 gap-4">
    <VInput
      wrapper-class="mb-2"
      name="name"
      label="Name"
      placeholder="Product Name"
    />
    <VInput
      wrapper-class="mb-2"
      name="price"
      label="Price"
      placeholder="Product Price"
    />
</div>
<VEditor
      wrapper-class="mb-4"
      name="content"
      label="Content"
      placeholder="Content"
    />
<!-- <VQuillEditor
      name="content"
      label="Content"
      placeholder="Input your content"
    /> -->
    <div class="mt-4 space-x-5 justify-center">
      <v-btn type="submit" color="indigo">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
  </form>
</ClientOnly>
    <div>
</div>
</template>

<style scoped>

</style>