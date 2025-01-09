<script setup lang="ts">
import { useInternalStore } from '~/stores/internal';

const isOpen = ref(false)
const internal = useInternalStore()

const links = computed(() => {
    return [{
    label: 'Занятия',
    icon: 'i-heroicons-light-bulb',
    to: '/entertainment',
    badge: internal.entertainmentCount
  }, {
    label: 'Еда',
    icon: 'i-heroicons-cake',
    to: '/food',
    badge: internal.foodCount
  }, {
    label: 'Как это сделано',
    icon: 'i-heroicons-window',
    to: '/faq',
    badge: internal.faqCount
  },
  {
    label: 'Мудрые мыли',
    icon: 'i-heroicons-numbered-list',
    to: '/thoughts',
    badge: internal.thoughtsCount
  },
  {
    label: 'Истории',
    icon: 'i-heroicons-pencil',
    to: '/stories',
    badge: internal.storyCount
  },  
]})

</script>

<template>
  <div>
    <UButton label="Меню" block @click="isOpen = true" />

    <USlideover v-model="isOpen">
      <div class="p-4 flex flex-col">
        <UButton
          color="gray"
          variant="ghost"
          size="sm"
          icon="i-heroicons-x-mark-20-solid"
          class="flex sm:hidden absolute end-5 top-5 z-10"
          square
          padded
          @click="isOpen = false"
        />
        <div class="mt-10 space-y-4">
            <h1 class="text-white font-mono">Содержание</h1>
            <UVerticalNavigation :links="links" />
        </div>
      </div>
    </USlideover>
  </div>
</template>

