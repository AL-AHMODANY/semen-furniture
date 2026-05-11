<script setup>
// image 003.jpg = "SOFA ITALIA" banner with purple sofa
import sofaImg from '../../assets/images/image 003.jpg'
</script>

<template>
  <div class="relative w-full h-full overflow-hidden group cursor-pointer">
    <img :src="sofaImg" alt="Sofa Italia"
      class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
  </div>
</template>
