<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseHeader from './components/layouts/header/BaseHeader.vue'
import BaseFooter from './components/layouts/footer/BaseFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen font-serif">
    <BaseHeader />
    <div class="flex-grow">
      <RouterView />
    </div>
    <BaseFooter />
  </div>
</template>
