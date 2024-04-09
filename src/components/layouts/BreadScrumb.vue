<!-- <template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
          <RouterLink :to="getRoute('home').path" class="text-gray-400 hover:text-gray-500">
            <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </RouterLink>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name">
        <div class="flex items-center">
          <svg
            class="h-5 w-5 flex-shrink-0 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
          </svg>
          <RouterLink
            v-slot="{ isActive }"
            :to="page.to"
            :aria-current="page.current ? 'page' : undefined"
          >
            <span
              :class="
                cn('ml-4 text-sm font-medium text-gray-500 hover:text-gray-700', {
                  'text-neutral-800 font-bold': isActive
                })
              "
            >
              {{ page.name }}
            </span>
          </RouterLink>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { getRoute } from '@/router'
import { cn } from '@/utils/cn'
import { HomeIcon } from '@heroicons/vue/24/solid'
import { RouterLink } from 'vue-router'

defineProps<{
  pages: {
    name: string
    to: string
    current?: boolean
  }[]
}>()
</script> -->
<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex space-x-4 rounded-md bg-white px-6 shadow">
      <li class="flex">
        <div class="flex items-center">
          <RouterLink :to="getRoute('home').path" class="text-gray-400 hover:text-gray-500">
            <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </RouterLink>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name" class="flex">
        <div class="flex items-center">
          <svg
            class="h-full w-6 flex-shrink-0 text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <RouterLink
            :to="page.to"
            :class="
              cn('ml-4 text-sm font-medium text-gray-500 hover:text-gray-700', {
                'text-neutral-800': page.current
              })
            "
            :aria-current="page.current ? 'page' : undefined"
            >{{ page.name }}</RouterLink
          >
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { getRoute } from '@/router'
import { cn } from '@/utils/cn'
import { HomeIcon } from '@heroicons/vue/20/solid'

defineProps<{
  pages: {
    name: string
    to: string
    current?: boolean
  }[]
}>()
</script>
