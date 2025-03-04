<script setup lang="ts">
import { POSITION, useToast } from 'vue-toastification';
import UseComponents from './UseComponents.vue';

const toast = useToast();

const toastSuccess = () => {
  toast.success('Success', {
    timeout: 2000,
    position: POSITION.TOP_LEFT
  });
};
</script>
<template>
  <div class="m-10">
    <div class="">Frontend</div>
    <div class="mt-7">
      <button @click="toastSuccess" class="px-5 py-3 rounded-xl border-2 border-[#9b2fc1]">
        Click Toast
      </button>
      <UseComponents />
    </div>
  </div>
</template>
