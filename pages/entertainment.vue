<script setup lang="ts">
const contentQuery = queryContent("entertainment").find()
console.log(contentQuery)
// for (const item in contentQuery) {
//     console.log(item._path)
// }
</script>

<template>
  <main class="flex flex-col bg-white relative min-h-screen">
    <h1 class="text-3xl text-center font-extrabold ">Занятия</h1>
    <h1 class="text-lg text-center font-semibold font-mono mb-2 px-10">Чтобы поделать? Ну например:</h1>
    <div class="px-10 space-y-2 pb-2">
      <ContentList path="/entertainment" v-slot="{ list }">
        <div v-for="article in list" :key="article._path" class="p-8 border-2 border-black">
          <nuxt-link :href="article._path">
            <h2 class="text-xl font-bold italic">{{ article.title }}</h2>
            <p class="text-center">{{ article.description }}</p>
          </nuxt-link>
        </div>
      </ContentList>
    </div>     
    <Homebtn />  
   </main>
</template>