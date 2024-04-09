<template>
  <BaseContainer class="py-24 sm:py-20">
    <BaseSection>
      <BreadScrumb :pages="pages" />
      <h1 class="text-4xl font-bold tracking-tight sm:text-6xl mt-24 mb-16 text-neutral-800">
        Alana
      </h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16">
        <div
          :class="
            cn('flex gap-2 flex-col', {
              'lg:col-span-2 self-start': is3X2(album)
            })
          "
          v-for="album in albums"
          :key="album.id"
        >
          <img
            :class="
              cn('aspect-[3/4] flex-grow object-cover', {
                'aspect-[3/2]': is3X2(album)
              })
            "
            :src="'http://localhost:1337' + album.cover.url"
            :alt="album.cover.alternativeText"
            v-if="!album.cover.mime.includes('video/')"
          />
          <video
            controls
            v-if="album.cover.mime.includes('video/')"
            :class="
              cn('aspect-[3/4] bg-red-300 flex-grow object-cover', {
                'aspect-[3/2]': is3X2(album)
              })
            "
          >
            <source :src="'http://localhost:1337' + album.cover.url" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <p class="font-bold text-neutral-800 line-clamp-1">{{ album.name }}</p>
            <p class="font-light text-neutral-600 line-clamp-1">{{ album.description }}</p>
          </div>
        </div>
      </div>
    </BaseSection>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from '@/components/layouts/BaseContainer.vue'
import BaseSection from '@/components/layouts/BaseSection.vue'
import BreadScrumb from '@/components/layouts/BreadScrumb.vue'
import { getRoute } from '@/router'
import { cn } from '@/utils/cn'
import { onMounted, ref } from 'vue'

type Category = {
  id: number
  name: string
  description: string
  type: string
}

type Thumbnail = {
  name: string
  hash: string
  ext: string
  mime: string
  path: null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}
type Media = {
  id: number
  name: string
  alternativeText?: string
  caption?: string
  width: number
  height: number
  formats?: {
    thumbnail: Thumbnail
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: string
  provider: string
  provider_metadata?: string
  createdAt: string
  updatedAt: string
}

type Album = {
  id: number
  name: string
  description: string
  category: Category
  cover: Media
  medias: Media[]
}
const albums = ref<Album[]>([])

onMounted(() => {
  fetch('http://localhost:1337/api/albums?populate=deep').then(async (rs) => {
    albums.value = (await rs.json()) as Album[]
  })
})

const pages = [{ name: 'Home', to: getRoute('home').path, current: true }]

const is3X2 = (album: Album) => {
  return album.cover.width / album.cover.height > 1.3 || album.cover.mime.includes('video/')
}
</script>
