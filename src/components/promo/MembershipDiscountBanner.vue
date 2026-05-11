<script setup>
// image028.jpg = -20% FOR OUR MEMBER banner (pre-made with text)
import bgImg from '../../assets/images/image028.jpg'
</script>

<template>
  <div class="relative overflow-hidden min-h-[260px] group cursor-pointer">
    <img :src="bgImg" alt="Member Discount"
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 min-h-[260px]" />
  </div>
</template>
