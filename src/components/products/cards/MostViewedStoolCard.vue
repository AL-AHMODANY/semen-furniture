<script setup>
import UIPrice from '../../ui/UIPrice.vue'
</script>

<template>
  <div class="group flex items-center gap-3 bg-white border border-[#e8e8e8] p-3 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5">
    <div class="flex-shrink-0 overflow-hidden w-[90px] h-[72px]">
      <img
        src="https://placehold.co/200x160/e8e8e8/888?text=Viewed+Stool"
        alt="Bar Stool"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-[10px] text-[#aaa] uppercase tracking-wider mb-0.5">Stool</p>
      <h4 class="text-[12px] font-semibold text-[#333] hover:text-[#c0392b] cursor-pointer transition-colors duration-300 mb-1 truncate">Bar Stool</h4>
      <UIPrice price="$149.00" />
    </div>
  </div>
</template>
