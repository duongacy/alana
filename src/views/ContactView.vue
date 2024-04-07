<template>
  <BaseContainer class="py-24 sm:py-20">
    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
      <BreadScrumb :pages="pages" />
      <h1 class="text-4xl font-bold tracking-tight sm:text-6xl mt-24 mb-16 text-neutral-800">
        Contact with us
      </h1>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-2 lg:gap-8">
        <div class="rounded-2xl bg-gray-50 p-10" v-for="contact in contacts" :key="contact.name">
          <h3 class="text-base font-semibold leading-7 text-neutral-800">{{ contact.role }}</h3>
          <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
            <div>
              <dt class="sr-only">{{ contact.name }}</dt>
              <dd>
                <a class="font-semibold text-indigo-600" href="mailto:collaborate@example.com">
                  {{ contact.email }}</a
                >
              </dd>
            </div>
            <div class="mt-1">
              <dt class="sr-only">Phone number</dt>
              <dd>{{ contact.phone }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script lang="ts" setup>
import BaseContainer from '@/components/layouts/BaseContainer.vue'
import BreadScrumb from '@/components/layouts/BreadScrumb.vue'

const pages = [{ name: 'Contact', to: '#', current: true }]
const contacts = [
  {
    role: 'EXECUTIVE PRODUCER',
    name: 'Alex González',
    phone: 'T (+34) 678 72 89 41',
    email: 'alex@alanacompany.com'
  },
  {
    role: 'EXECUTIVE PRODUCER',
    name: 'Ana Ramírez',
    phone: 'T (+34) 617 44 64 03',
    email: 'ana@alanacompany.com'
  },
  {
    role: 'EXECUTIVE PRODUCER',
    name: 'Alex González',
    phone: 'T (+34) 678 72 89 41',
    email: 'alex@alanacompany.com'
  },
  {
    role: 'EXECUTIVE PRODUCER',
    name: 'Alex González',
    phone: 'T (+34) 678 72 89 41',
    email: 'alex@alanacompany.com'
  },
  {
    role: 'EXECUTIVE PRODUCER',
    name: 'Alex González',
    phone: 'T (+34) 678 72 89 41',
    email: 'alex@alanacompany.com'
  },
  {
    role: 'EXECUTIVE PRODUCER',
    name: 'Alex González',
    phone: 'T (+34) 678 72 89 41',
    email: 'alex@alanacompany.com'
  },
  {
    role: 'EXECUTIVE PRODUCER',
    name: 'Alex González',
    phone: 'T (+34) 678 72 89 41',
    email: 'alex@alanacompany.com'
  },
  {
    role: 'EXECUTIVE PRODUCER',
    name: 'Alex González',
    phone: 'T (+34) 678 72 89 41',
    email: 'alex@alanacompany.com'
  },
  {
    role: 'EXECUTIVE PRODUCER',
    name: 'Alex González',
    phone: 'T (+34) 678 72 89 41',
    email: 'alex@alanacompany.com'
  }
]
</script>
