<template>
  <div :class="cn('mx-auto max-w-7xl px-6 lg:px-8', $props.class)">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { cn } from '@/utils/cn'

defineOptions({ inheritAttrs: false })
defineProps<{
  class?: string
}>()
</script>
