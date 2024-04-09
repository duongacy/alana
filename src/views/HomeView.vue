<template>
  <BaseContainer>
    <BaseSection>
      <div class="py-8 border-t border-b mt-6 mb-12 font-bold text-6xl text-center uppercase">
        Gallery
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16">
        <div
          :class="
            cn('flex gap-2 flex-col', {
              'lg:col-span-2 self-start': is3X2(album.cover)
            })
          "
          v-for="album in albums"
          :key="album.id"
        >
          <RouterLink
            :to="'/album/' + album.id"
            :class="
              cn('aspect-[3/4] flex-grow object-cover', {
                'aspect-[3/2]': is3X2(album.cover)
              })
            "
          >
            <img
              :class="cn(' w-full h-full object-cover')"
              :src="'http://localhost:1337' + album.cover.url"
              :alt="album.cover.alternativeText"
              v-if="!album.cover.mime.includes('video/')"
            />
            <video
              controls
              v-if="album.cover.mime.includes('video/')"
              :class="
                cn('aspect-[3/4] bg-red-300 flex-grow object-cover', {
                  'aspect-[3/2]': is3X2(album.cover)
                })
              "
            >
              <source :src="'http://localhost:1337' + album.cover.url" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </RouterLink>
          <div>
            <p class="font-bold text-neutral-800 line-clamp-1">{{ album.name }}</p>
            <p class="font-thin text-neutral-600 line-clamp-1">{{ album.description }}</p>
          </div>
        </div>
      </div>
    </BaseSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import { getAllAlbums } from '@/apis/album/request'
import type { Album, Media } from '@/apis/album/type'
import BaseContainer from '@/components/layouts/BaseContainer.vue'
import BaseSection from '@/components/layouts/BaseSection.vue'
import BreadScrumb from '@/components/layouts/BreadScrumb.vue'
import { getRoute } from '@/router'
import { cn } from '@/utils/cn'
import { onMounted, ref } from 'vue'

const albums = ref<Album[]>([])
onMounted(() => {
  getAllAlbums().then((rs) => {
    albums.value = rs
  })
})

const pages = [{ name: 'Home', to: getRoute('home').path, current: true }]

const is3X2 = (media: Media) => {
  return media.width / media.height > 1.3 || media.mime.includes('video/')
}
</script>
