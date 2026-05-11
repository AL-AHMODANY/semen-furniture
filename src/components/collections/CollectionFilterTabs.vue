<script setup>
import { ref } from 'vue'

const tabs = ['Bedroom', 'Computer', 'Office', 'Sofa', 'Chair', 'Lamp Chair', 'Armchair']
const activeTab = ref('Bedroom')
</script>

<template>
  <div class="flex items-center gap-0 overflow-x-auto border-b border-[#e8e8e8] mb-6 scrollbar-hide">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="activeTab = tab"
      :class="[
        'px-5 py-3 text-[12px] font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer border-b-2 -mb-px flex-shrink-0',
        activeTab === tab
          ? 'text-[#c0392b] border-[#c0392b]'
          : 'text-[#999] border-transparent hover:text-[#c0392b]',
      ]"
    >
      {{ tab }}
    </button>
  </div>
</template>
