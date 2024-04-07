<template>
  <div :class="cn('mx-auto max-w-2xl lg:mx-0 lg:max-w-none', $props.class)">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { cn } from '@/utils/cn'

defineOptions({ inheritAttrs: false })
defineProps<{
  class?: string
}>()
</script>
