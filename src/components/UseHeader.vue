<script setup lang="ts">
import { useRoute } from 'vue-router'
import { routeUrl } from '../router/routes.ts'

const useClass = 'transition-all hover:font-bold'
const route = useRoute()

function isActive(path: string) {
  return route.path === path ? '!text-red-500 !font-bold' : ''
}

const items = [
  {
    id: 1,
    name: 'VueTest',
    pathItems: `${routeUrl[0].path}`,
  },
]
</script>

<template>
  <div
    class="max-w-[700px] bg-gradient-to-r from-[#4b4b4c] to-[#3e0b35] rounded-full shadow-lg mx-auto mt-5 flex place-content-center items-center px-4"
  >
    <div class="flex items-center gap-5 px-5 py-3 place-content-center">
      <div v-for="item in items" :key="item.id" class="">
        <RouterLink :to="item.pathItems" :class="[useClass, isActive(item.pathItems)]">{{
          item.name
        }}</RouterLink>
      </div>
    </div>
  </div>
</template>
