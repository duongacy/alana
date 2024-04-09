<template>
  <button :class="navLinkButtonStyle($props.active)">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { navLinkButtonStyle } from '.'
defineOptions({
  inheritAttrs: false
})
defineProps<{
  active?: boolean
}>()
</script>
