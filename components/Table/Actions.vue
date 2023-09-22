<script setup lang="ts">
const { path } = defineProps<{
    id?: string | number
    path?: string
}>()

const modalDeleteIsOpen = ref(false)
const modalEditIsOpen = ref(false)

function onConfirm() {
    alert('Delete')
}

import {VQuillEditor} from '@morpheme/quill-editor'
import {ref} from 'vue';
import {useForm} from 'vee-validate';
import {object, mixed, string} from 'yup';
import VEditor from '@morpheme/editor'

const schema = object({
  image: mixed().required().label('Image'),
  name: string().required().label('Name'),
  price: string().required().email().label('Price'),
  content: string().required().label('Content'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

const value = ref();
</script>
<template>
    <ClientOnly>
        <div class="flex items-center justify-center gap-2">
            <VBtn text fab :to="`${path}`"
            prefix-icon="untitled:eye" />

            <VBtn text fab :to="`${path}`"
            prefix-icon="prime:pencil" 
            @click="modalEditIsOpen = !modalEditIsOpen"/>

            <VBtn text fab :to="`${path}`"
            prefix-icon="untitled:trash-01"
            @click="modalDeleteIsOpen = !modalDeleteIsOpen" />
            
            

        </div>

        <VModal
        v-model="modalDeleteIsOpen"
        title="Delete Item"
        confirm
        confirm-text="Delete"
        confirm-color="error"
        centered
        footer-class="flex-row-reverse"
        close-text="cancel"
        @confirm="onConfirm">
        <p>Are you sure want to delete this item?</p>
    </VModal>

    <!-- edit -->
    <VModal v-model="modalEditIsOpen" width="800px" max-width="100%" title="Edit Product">
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
    <div class="mt-4 space-x-5">
      <v-btn type="submit" color="indigo">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
  </form>
</ClientOnly>
  </VModal>

    </ClientOnly>
</template>



<style scoped>

</style>