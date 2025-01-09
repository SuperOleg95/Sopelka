<script setup lang="ts">
</script>

<template>
  <main class="flex flex-col bg-white relative min-h-screen">
    <h1 class="text-3xl text-center font-extrabold ">ЕДА</h1>
    <h1 class="text-lg text-center font-semibold font-mono mb-2 px-10">я люблю готовить, с тобой и для тебя </h1>
    <div class="px-10 space-y-2 pb-2">
      <ContentList path="/food" v-slot="{ list }">
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