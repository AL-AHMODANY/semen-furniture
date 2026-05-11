<script setup>
// image03.jpg = OUTDOOR FURNITURE "Free delivery on weekend" banner (pre-made)
import bgImg from '../../assets/images/image03.jpg'
</script>

<template>
  <div class="relative overflow-hidden min-h-[260px] group cursor-pointer">
    <img :src="bgImg" alt="Outdoor Furniture"
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 min-h-[260px]" />
  </div>
</template>
