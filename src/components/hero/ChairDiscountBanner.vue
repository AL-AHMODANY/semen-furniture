<script setup>
// image004.jpg = burgundy chair with -15% badge already on it
import chairImg from '../../assets/images/image004.jpg'
</script>

<template>
  <div class="relative w-full h-full overflow-hidden group cursor-pointer">
    <img :src="chairImg" alt="Chair -15%"
      class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
  </div>
</template>
