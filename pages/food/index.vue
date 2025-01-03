<script setup>
const contentQuery = queryContent("food").find()
</script>

<template>
    <main class="h-screen bg-white text-black pt-10">
      <h1 class="text-3xl text-center font-extrabold ">ЕДА</h1>
      <h1 class="text-lg text-center font-semibold font-mono mb-10 px-10">я люблю готовить, с тобой и для тебя </h1>
      <div class="px-10 space-y-4">
      <ContentList ContentList :query="contentQuery" v-slot="{ list }">
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