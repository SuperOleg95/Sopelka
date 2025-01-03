<script setup>
const contentQuery = queryContent("stories").find()
</script>

<template>
    <main class="h-screen bg-white text-black pt-20">
       <!-- <h1 class="text-3xl text-center mb-20 font-extrabold ">This is news</h1>
       <div class="px-20 space-y-4">
            <ContentList ContentList :query="contentQuery" v-slot="{ list }">
        <div v-for="article in list" :key="article._path" class="p-8 border-2 border-black">
          <nuxt-link :href="article._path">
            <h1>BLABLABLA</h1>
            <h2 class="text-xl font-bold">{{ article.title }}</h2>
            <p>{{ article.description }}</p>

            <span class="italic">by {{ article.author }}, {{ article.date }}</span>
          </nuxt-link>
        </div>
            </ContentList>
       </div> -->

       
    </main>
</template>