<script setup lang="ts">
const accordeonItems = [{ label: '1. Что это такое?', content: 'Это приложение - часть моего подарка тебе на НГ25. Я все еще работаю над ним!' }, 
                        { label: '2. Из чего это сделано?', content: 'Под капотом - фронтенд из Nuxt3 + tailwind + nuxt ui/nuxt content. Приложение скомпилировано tauri.' }, 
                        { label: '3. Как это работает?', content: 'На самом деле нажатие на кнопку отправляет запрос в телеграм бот, котрый высылает его мне.' }, 
                        { label: '4. Зачем это нужно?', content: 'Особого практического смысла в этом нет, я просто хотел чтобы в твоем телефоне было постоянное напоминание, что я тебя люблю' }]
</script>

<template>

    <main class="h-lvh bg-white p-6 space-y-4 font-mono">
        <h1 class="font-bold">Вопросы и ответы</h1>
        <UAccordion
            open-icon="i-heroicons-plus"
            close-icon="i-heroicons-minus"
            variant="solid"
            :items="accordeonItems"
        />
        <Homebtn />
    </main>
</template>