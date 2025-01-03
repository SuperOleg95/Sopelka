<template>
     <main class="h-screen bg-white text-black p-8 px-3">
    <ContentDoc v-slot="{ doc }">
      <article class="space-y-4">
        <h1 class="text-3xl font-bold text-center">{{ doc.title }}</h1>
        <ContentRenderer :value="doc" class="font-mono"/>
        <div class="text-xl text-slate-400 text-center italic !mt-10">by {{ doc.author }}, {{ doc.date }}</div>
      </article>
    </ContentDoc>
    <Backbtn />
  </main>
  </template>
  