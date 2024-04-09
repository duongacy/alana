<template>
  <BaseContainer class="py-24 sm:py-20">
    <BaseSection>
      <BreadScrumb :pages="pages" />
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16 mt-6">
        <div
          :class="
            cn('flex gap-2 flex-col', {
              'lg:col-span-2 self-start': is3X2(media)
            })
          "
          v-for="media in album?.medias || []"
          :key="media.id"
        >
          <RouterLink
            :to="'/album/' + media.id"
            :class="
              cn('aspect-[3/4] flex-grow object-cover', {
                'aspect-[3/2]': is3X2(media)
              })
            "
          >
            <img
              :class="cn(' w-full h-full object-cover')"
              :src="'http://localhost:1337' + media.url"
              :alt="media.alternativeText"
              v-if="!media.mime.includes('video/')"
            />
            <video
              controls
              v-if="media.mime.includes('video/')"
              :class="
                cn('aspect-[3/4] bg-red-300 flex-grow object-cover', {
                  'aspect-[3/2]': is3X2(media)
                })
              "
            >
              <source :src="'http://localhost:1337' + media.url" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </RouterLink>
          <div>
            <p class="font-bold text-neutral-800 line-clamp-1">{{ media.name }}</p>
            <p class="font-light text-neutral-600 line-clamp-1">{{ media.alternativeText }}</p>
          </div>
        </div>
      </div>
    </BaseSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { getAlbumById } from '@/apis/album/request'
import type { Album, Media } from '@/apis/album/type'
import BaseContainer from '@/components/layouts/BaseContainer.vue'
import BaseSection from '@/components/layouts/BaseSection.vue'
import BreadScrumb from '@/components/layouts/BreadScrumb.vue'
import { cn } from '@/utils/cn'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  id: string
}>()

const album = ref<Album | null>(null)
const pages = computed(() => [{ name: album.value?.name || '', to: '', current: true }])

onMounted(() => {
  getAlbumById(props.id).then((rs) => {
    album.value = rs
  })
})
const is3X2 = (media: Media) => {
  return media.width / media.height > 1.3 || media.mime.includes('video/')
}
</script>
