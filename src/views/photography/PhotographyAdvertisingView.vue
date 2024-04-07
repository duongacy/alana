<template>
  <BaseContainer class="py-24 sm:py-20">
    <BaseSection>
      <BreadScrumb :pages="pages" />
      <h1 class="text-4xl font-bold tracking-tight sm:text-6xl mt-24 mb-16 text-neutral-800">
        Advertising
      </h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          :class="cn('flex gap-2 flex-col', { 'lg:col-span-2 self-start': product.span === 2 })"
          v-for="product in products1"
          :key="product.id"
        >
          <img
            :class="
              cn('aspect-[3/4] flex-grow object-cover', { 'aspect-[3/2]': product.span === 2 })
            "
            :src="product.imageSrc"
            :alt="product.imageAlt"
            v-if="!!product.imageSrc"
          />
          <video
            controls
            v-if="!!product.videoSrc"
            :class="
              cn('aspect-[3/4] bg-red-300 flex-grow object-cover', {
                'aspect-[3/2]': product.span === 2
              })
            "
          >
            <source :src="product.videoSrc" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <p class="font-bold text-neutral-800 line-clamp-1">{{ product.name }}</p>
            <p class="font-light text-neutral-600 line-clamp-1">{{ product.description }}</p>
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

const pages = [
  { name: 'Home', to: getRoute('home').path },
  { name: 'Photography/ Advertising', to: getRoute('photographyAdvertising').path, current: true }
]
const products1 = [
  {
    id: 1,
    name: 'Focus Paper Refill',
    description: '3 sizes available',
    imageSrc:
      'https://alanacompany.com/wp-content/uploads/2024/02/15122023_MONKI_05_223_resultado-768x1152.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    span: 1
  },
  {
    id: 2,
    name: 'Focus Card Holder',
    description: 'Walnut',
    imageSrc:
      'https://alanacompany.com/wp-content/uploads/2024/02/Captura-de-Pantalla-2024-02-16-a-las-10.40.31-768x567.png',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    span: 2
  },
  {
    id: 3,
    name: 'Focus Carry Pouch',
    description: 'Heather Gray',
    imageSrc:
      'https://alanacompany.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-16-at-14.01.28-768x924.jpeg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    span: 1
  },
  {
    id: 4,
    name: 'Focus Carry Pouch',
    description: 'Heather Gray',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/858938605/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c0d1f456e92b89f96e71c8a2742e5c213da6c0446073e01d96abfd8e946d6d2d',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    span: 2
  },
  {
    id: 5,
    name: 'Focus Carry Pouch',
    description: 'Heather Gray',
    imageSrc:
      'https://alanacompany.com/wp-content/uploads/2023/10/Captura-de-Pantalla-2023-10-19-a-las-13.45.28_resultado_resultado_resultado_resultado-1280x957.png',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    span: 2
  },
  {
    id: 6,
    name: 'Focus Carry Pouch',
    description: 'Heather Gray',
    imageSrc:
      'https://alanacompany.com/wp-content/uploads/2023/10/1080x1350-HighSummer_Model_21-768x960.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    span: 1
  },
  {
    id: 7,
    name: 'Focus Carry Pouch',
    description: 'Heather Gray',
    imageSrc:
      'https://alanacompany.com/wp-content/uploads/2023/10/358175086_2093730707706508_7089122351183206421_n-1.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    span: 2
  },
  {
    id: 8,
    name: 'Focus Carry Pouch',
    description: 'Heather Gray',
    imageSrc:
      'https://alanacompany.com/wp-content/uploads/2023/10/BURBERRY_2023_AW_PRODUCT_STORIES_SUMMER_CAPSULE_ON_MODEL_LOCATION_CROPPED_4X5_RGB_JPG_013_resultado-768x960.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    span: 1
  },
  {
    id: 9,
    name: 'Focus Carry Pouch',
    description: 'Heather Gray',
    imageSrc:
      'https://alanacompany.com/wp-content/uploads/2023/06/highxtar-loewe-paulas-ibiza-8-768x960.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    span: 1
  },
  {
    id: 10,
    name: 'Focus Carry Pouch',
    description: 'Heather Gray',
    videoSrc:
      'https://player.vimeo.com/progressive_redirect/playback/837863722/rendition/720p/file.mp4?loc=external&log_user=0&signature=2d99403036deedd397b0ca7d7890fb8f5b04f51ddd5eeb7ab81018c7beb41fa3',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    span: 2
  },
  {
    id: 11,
    name: 'Focus Carry Pouch',
    description: 'Heather Gray',
    imageSrc:
      'https://alanacompany.com/wp-content/uploads/2023/06/335982393_765074361626481_3484917898809757682_n_resultado.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    span: 1
  },
  {
    id: 12,
    name: 'Focus Carry Pouch',
    description: 'Heather Gray',
    imageSrc:
      'https://alanacompany.com/wp-content/uploads/2023/10/Captura-de-Pantalla-2023-10-19-a-las-13.45.28_resultado_resultado_resultado_resultado-768x574.png',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    span: 2
  },
  {
    id: 13,
    name: 'Focus Carry Pouch',
    description: 'Heather Gray',
    imageSrc:
      'https://alanacompany.com/wp-content/uploads/2024/02/NB-Travel_Phase_01_Look_02_1250_resultado-768x512.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    span: 2
  }
]
</script>
