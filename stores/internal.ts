import type Entertainment from "~/pages/entertainment.vue";

export const useInternalStore = defineStore('InternalStore', {
    state: () => ({
      entertainmentCount: 1,
      faqCount: 1,
      foodCount: 1,
      thoughtsCount: 1,
      storyCount: 1,
    }),
  })
  