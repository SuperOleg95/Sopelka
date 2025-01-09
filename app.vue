<script setup lang="ts">
  const colorMode = useColorMode()
  colorMode.preference = 'light'
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage class="min-w-[300px] min-h-[150px]" />
    </NuxtLayout>
  </div>
</template>
