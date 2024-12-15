<script setup lang="ts">
import FoodCard from '~/components/foodCard.vue';
import type { FormSubmitEvent } from '#ui/types'

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
                return response.json();
        })
        .then(data => {
                toast.add({ title: 'Ответ записан!' })
        })
        .catch(error => {
                toast.add({ title: 'Fetch-запрос поломался. Несите чинилку!' })
        });
}

</script>

<template>
<main class="bg-white">
    <UNotifications />
    <div class="flex justify-center p-1.5">
        <div class="flex flex-col max-w-2xl gap-2">
            <NuxtImg src="elka.jpg"></NuxtImg>
            <h1 class="elka_title text-white text-nowrap top-8 font-bold">&#9924; Привет, Сопелка! &#9924;</h1>
            <h1 class="elka_title text-white text-nowrap top-8 font-bold">&#9924; Привет, Сопелка! &#9924;</h1>
            <h1 class="absolute text-white top-20 text-wrap px-2 text-sm font-bold">Здесь ты сможешь выбрать еду (и не только),и я сделаю её для тебя, например на завтрак,пока ты еще спишь, или ужин, пока ты работаешь </h1>
            <h1 class="absolute text-white top-40 text-wrap px-2 text-sm font-bold">Ты сможешь выбрать из карточек, которые я сделал, и отправить весточку мне, с помощью формы внизу!</h1>

            <div class="border-4 border-gray-300 border-solid p-1 flex flex-col justify-center">
                    <h2 class="text-xl font-bold">English Breakfast</h2>
                    <NuxtImg src="eng_breakfast.jpg" class="justyfy-center"></NuxtImg>
                    <h3>Наедаемся яйцами и сосисками на весь день &#128519;	</h3>
                    <h3 class="font-bold">$Price - 1 поцелуйчик</h3>
            </div>

            <div class="border-4 border-gray-300 border-solid p-1 flex flex-col justify-center">
                    <h2 class="text-xl font-bold">Bruschetta</h2>
                    <NuxtImg src="bruschetas.jpg" class="justyfy-center"></NuxtImg>
                    <h3>За базиликом придется идти в грин  &#128517;</h3>
                    <h3 class="font-bold">$Price - 2 поцелуйчика</h3>
            </div>

            <div class="border-4 border-gray-300 border-solid p-1 flex flex-col justify-center">
                    <h2 class="text-xl font-bold">Caesar</h2>
                    <NuxtImg src="caesar.jpg" class="justyfy-center"></NuxtImg>
                    <h3>Надо кушац больше салатов  &#128528;</h3>
                    <h3 class="font-bold">$Price - 1 поцелуйчик</h3>
            </div>

            <div class="border-4 border-gray-300 border-solid p-1 flex flex-col justify-center">
                    <h2 class="text-xl font-bold text-black">Creamation</h2>
                    <NuxtImg src="cream.jpg" class="justyfy-center"></NuxtImg>
                    <h3>Оформлю твой полный намаз  &#128563;</h3>
                    <h3 class="font-bold">$Price - бесплатно! (Акция)</h3>
            </div>
   
            <div class="border-4 border-gray-300 border-solid p-1 flex flex-col justify-center">
                    <h2 class="text-xl font-bold">Fizics!</h2>
                    <NuxtImg src="jakov.jpg" class="justyfy-center"></NuxtImg>
                    <h3>Почитаю с тобой книжку &#129488;</h3>
                    <h3 class="font-bold">$Price - 2 поцелуйчика</h3>
            </div>

               
            <div class="border-4 border-gray-300 border-solid p-1 flex flex-col justify-center">
                    <h2 class="text-xl font-bold">Something new</h2>
                    <NuxtImg src="sec.png" class="justyfy-center"></NuxtImg>
                    <h3>Сделаем что-то другое &#128128;</h3>
                    <h3 class="font-bold">$Price - 1 поцелуйчик</h3>
            </div>
            <h2>Список будет пополняться. А пока...</h2>

            <UForm :state="state" @submit="onSubmit" class="mt-2 space-y-2">
                    <h2>Пиши что ты выбрала в окошке↓</h2>
                    <UFormGroup name="password">
                        <UInput v-model="state.textMessage" />
                    </UFormGroup>
                    <UButton block type="submit">и жми сюда чтобы отправить мне!</UButton>
            </UForm>
        </div>
    </div>
</main>
</template>