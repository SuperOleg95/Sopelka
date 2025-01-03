<script setup>
const props = defineProps({
  img: String,
  label: String,
  position: String, 
});
</script>

<template>
 <div v-if="props.position === 'right'" class="item float-right rotate-[4deg]">
    <div class="polaroid"><img :src="props.img">
        <div class="text-base px-5 py-3 text-center">{{ props.label }}</div>
    </div>
  </div>
  <div v-else-if="props.position === 'left'" class="item float-left rotate-[-4deg]">
    <div class="polaroid"><img :src="props.img">
        <div class="text-base px-5 py-3 text-center">{{ props.label }}</div>
    </div>
  </div>
</template>