<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="flex flex-col items-center container">
    <img src="/404.svg" alt="" class="mx-auto">
    <h3 class="font-semibold text-2xl">
      Austronaut in the ocean...!
    </h3>
    <p class="max-w-lg mt-6 text-lg font-thin">
      Sorry... seems like the page you are searching for is still under construction or probrably have been remove.
    </p>
    <button class="uppercase text-sm m-2 py-2 px-4 rounded bg-pink-600" @click="router.back()">
      back
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
