<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <RouterLink :to="getRoute('home').path" class="-m-1.5 p-1.5">
          <span class="sr-only">Home</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton :class="navLinkButtonStyle(isPhotography)">
            Photography
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="p-4" @click="handleClick">
                <div
                  v-for="item in photography"
                  :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-xl leading-6 hover:bg-gray-50"
                >
                  <div
                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="flex-auto">
                    <RouterLink :to="item.to" class="block font-semibold text-gray-800">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </RouterLink>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <RouterLink
                  v-for="item in callsToAction"
                  :key="item.name"
                  :to="item.to"
                  class="flex items-center justify-center gap-x-2.5 p-3 text-xl font-semibold leading-6 text-gray-800 hover:bg-gray-100"
                >
                  <component
                    :is="item.icon"
                    class="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </RouterLink>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <Popover class="relative">
          <PopoverButton :class="navLinkButtonStyle(isContent)">
            Content
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="p-4" @click="handleClick">
                <div
                  v-for="item in content"
                  :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-xl leading-6 hover:bg-gray-50"
                >
                  <div
                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="flex-auto">
                    <RouterLink :to="item.to" class="block font-semibold text-gray-800">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </RouterLink>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <RouterLink v-slot="{ isActive }" :to="getRoute('about').path">
          <span :class="navLinkButtonStyle(isActive)"> About </span>
        </RouterLink>
        <RouterLink v-slot="{ isActive }" :to="getRoute('sustainability').path">
          <span :class="navLinkButtonStyle(isActive)"> Sustainability </span>
        </RouterLink>
        <RouterLink v-slot="{ isActive }" :to="getRoute('contact').path">
          <span :class="navLinkButtonStyle(isActive)"> Contact </span>
        </RouterLink>
      </PopoverGroup>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden font-serif"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <RouterLink :to="getRoute('home').path" class="-m-1.5 p-1.5">
            <span class="sr-only">Home</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </RouterLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6 [&_button]:w-full">
              <Disclosure as="div" class="-mx-3" :default-open="isPhotography" v-slot="{ open }">
                <DisclosureButton :class="navLinkButtonStyle(isPhotography)">
                  Photography
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <RouterLink
                    v-slot="{ isActive }"
                    v-for="item in [...photography]"
                    :key="item.name"
                    :to="item.to"
                    :class="['indent-5', navLinkButtonStyle()]"
                  >
                    <span :class="cn({ 'underline ': isActive })">{{ item.name }}</span>
                  </RouterLink>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" class="-mx-3" :default-open="isContent" v-slot="{ open }">
                <DisclosureButton :class="navLinkButtonStyle(isContent)">
                  Content
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <RouterLink
                    v-slot="{ isActive }"
                    v-for="item in [...content]"
                    :key="item.name"
                    :to="item.to"
                    :class="['indent-5', navLinkButtonStyle()]"
                  >
                    <span :class="cn({ 'underline ': isActive })">{{ item.name }}</span>
                  </RouterLink>
                </DisclosurePanel>
              </Disclosure>
              <RouterLink v-slot="{ isActive }" :to="getRoute('about').path"
                ><span :class="cn(navLinkButtonStyle(isActive), '-ml-3')"> About </span>
              </RouterLink>
              <RouterLink v-slot="{ isActive }" :to="getRoute('sustainability').path">
                <span :class="cn(navLinkButtonStyle(isActive), '-ml-3')"> Sustainability </span>
              </RouterLink>
              <RouterLink v-slot="{ isActive }" :to="getRoute('contact').path">
                <span :class="cn(navLinkButtonStyle(isActive), '-ml-3')">
                  Contact
                </span></RouterLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
    <button class="absolute w-0" ref="divRef"></button>
  </header>
</template>

<script setup lang="ts">
import { navLinkButtonStyle } from '@/components/button'
import { getRoute } from '@/router'
import { cn } from '@/utils/cn'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/vue'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const photography = [
  {
    name: 'Fashion',
    description: 'Get a better understanding of your traffic',
    to: '/photography/fashion',
    icon: ChartPieIcon
  },
  {
    name: 'Advertising',
    description: 'Speak directly to your customers',
    to: '/photography/advertising',
    icon: CursorArrowRaysIcon
  },
  {
    name: 'Editorials',
    description: 'Your customers’ data will be safe and secure',
    to: '/photography/editorials',
    icon: FingerPrintIcon
  }
]
const content = [
  {
    name: 'Fashion',
    description: 'Get a better understanding of your traffic',
    to: '/content/fashion',
    icon: ChartPieIcon
  },
  {
    name: 'Advertising',
    description: 'Speak directly to your customers',
    to: '/content/advertising',
    icon: CursorArrowRaysIcon
  },
  {
    name: 'Editorials',
    description: 'Your customers’ data will be safe and secure',
    to: '/content/editorials',
    icon: FingerPrintIcon
  }
]

const callsToAction = [
  { name: 'Watch demo', to: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', to: '#', icon: PhoneIcon }
]
const handleClick = (event: Event) => {
  // document.getElementById('photography')?.click()
  console.log(
    (event.currentTarget as HTMLElement).parentElement?.parentElement?.querySelector('button')
  )
  ;(event.currentTarget as HTMLElement).parentElement?.parentElement
    ?.querySelector('button')
    ?.click()
}
const route = useRoute()
const isPhotography = computed(() => route.path.includes('/photography'))
const isContent = computed(() => route.path.includes('/content'))
const divRef = ref<HTMLElement | null>(null)

const mobileMenuOpen = ref(false)
watch(route, () => {
  mobileMenuOpen.value = false
})
</script>
