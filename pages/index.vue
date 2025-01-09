<script setup lang="ts">
import FoodCard from '~/components/foodCard.vue';
import type { FormSubmitEvent } from '#ui/types'
import type { RefSymbol } from '@vue/reactivity';

const token = '7640119131:AAHd4bQ-tvIqRr0w2pD_if2yNKGS94F4ypk';
const chatId = '475478346';

const toast = useToast()

const state = reactive({
  textMessage: undefined,
})

async function onSubmit(event: FormSubmitEvent<any>) {
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(event.data.textMessage)}`;
  fetch(url)
        .then(response => {
                if (!response.ok) {
                        throw new Error('Network response was not ok');
                }
                state.textMessage = undefined
                return response.json();
        })
        .then(data => {
                toast.add({ title: 'Ответ записан!' })
        })
        .catch(error => {
                toast.add({ title: 'Fetch-запрос поломался. Несите чинилку!' })
        });
}

const internal = useInternalStore()
const ent = await queryContent('entertainment').count()
const food = await queryContent('/food').count()
const stories = await queryContent('/stories').count()
const thoughts = await queryContent('/thoughts').find()

internal.entertainmentCount = ent
internal.foodCount = food
internal.faqCount = 4
internal.storyCount = stories
internal.thoughtsCount = thoughts[0].count

</script>

<template>
<head>
  <meta name="color-scheme" content="light">
</head>
<main class="flex bg-white h-lvh">
    <div class="flex flex-col grow px-4 space-y-4">
        <hero />
        <div class="flex justify-center space-x-4">
                <UIcon name="i-heroicons-arrow-uturn-down" class="w-8 h-8 text-black" />
                <span class="text-black font-mono">Здесь посмотри все то, что эта штука умеет делать</span>
        </div>
        <NavTab />

        <UForm :state="state" @submit="onSubmit" class="mt-2 space-y-4">

                <div class="flex justify-center space-x-4">                        
                        <span class="text-black font-mono">И пиши что ты выбрала в окошке</span>
                        <UIcon name="i-heroicons-arrow-uturn-down" class="w-8 h-8 text-black" />
                </div>
                <UFormGroup name="password" class="dark:text-dark">
                        <UInput color="emerald" variant="outline" size="xl" placeholder="Например, Хочу барни" v-model="state.textMessage" />
                </UFormGroup>

                <div class="flex justify-center space-x-4">  
                        <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-black" />                      
                        <span class="text-black font-mono">Написав, жми сюда</span>
                </div>

                <UButton block type="submit">Отправить</UButton>

                <div class="flex justify-center space-x-4">                          
                        <span class="text-black font-mono">И я получу твою весточку</span>
                        <UIcon name="i-heroicons-envelope-open" class="w-6 h-6 text-black" />                      
                </div>
        </UForm>
        <span class="absolute bottom-2 right-2">Version 1.20, 09.01.25</span>
        <UNotifications />
    </div>    
</main>
</template>