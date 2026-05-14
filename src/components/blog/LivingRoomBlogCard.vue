<script setup>
import blogImg from '../../assets/images/image035.jpg'
</script>

<template>
  <article class="group cursor-pointer">
    <div class="overflow-hidden mb-4">
      <img :src="blogImg" alt="Leather Sofas Blog"
        class="w-full h-55 object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
    <div class="flex items-start gap-4 mb-2">
      <div class="shrink-0 text-center">
        <span class="block text-[22px] font-black text-[#222] leading-none">06</span>
        <span class="block text-[10px] font-bold uppercase text-[#888] tracking-wider">JAN</span>
      </div>
      <div class="flex-1">
        <p class="text-[11px] font-bold text-[#c0392b] uppercase tracking-wide mb-1">Leather Sofas</p>
        <h3 class="text-[14px] font-bold text-[#222] leading-snug group-hover:text-[#c0392b] transition-colors duration-200">
          When an unknown printer took galley
        </h3>
      </div>
    </div>
    <p class="text-[12px] text-[#888] leading-relaxed pl-13">
      When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ...
    </p>
  </article>
</template>
