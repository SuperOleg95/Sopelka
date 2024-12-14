<template>
            <h1>Здесь ты сможешь выбрать еду (и не только),и я сделаю её для тебя, например на завтрак,пока ты еще спишь, или ужин, пока ты работаешь </h1>
            <h1>Ты сможешь выбрать из карточек, которые я сделал, и отправить весточку мне, с помощью формы внизу!</h1>
            <div class="grid grid-cols-2 xl:grid-cols-3 gap-1 place-items-stretch pc:gap-3">

                <div class="border-2 border-black p-1 flex flex-col justify-center">
                    <h2>Салат из бекона</h2>
                    <NuxtImg src="/becon_salad.jpg"  class="justyfy-center"></NuxtImg>
                    <h2>Твой воторой любимый (первый ето я)</h2>
                </div>
                <div class="border-2 border-black p-1 flex flex-col justify-center">
                    <h2>Сырники</h2>
                    <NuxtImg src="/syrniki.jpg" class="justyfy-center"></NuxtImg>
                    <h2>Так и не приготовил себе, может тебе смогу?</h2>
                </div>

                <div class="border-2 border-black p-1 flex flex-col justify-center">
                    <h2>Сопение!</h2>
                    <NuxtImg src="sopenie.jpg" class="justyfy-center"></NuxtImg>
                    <h2>Лучшая часть дня</h2>
                </div>
                <div class="border-2 border-black p-1 flex flex-col justify-center">
                    <h2>На твой выбор</h2>
                    <NuxtImg src="/sec.png"  class="justyfy-center"></NuxtImg>
                    <h2>Самое интересное - делать что-то новое</h2>
                </div>
            </div>
</template>