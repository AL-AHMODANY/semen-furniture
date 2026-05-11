<script setup>
import { ref } from "vue";
const tabs = ["NEW", "SALE", "HOT DEAL"];
const activeTab = ref("NEW");
</script>

<template>
  <div class="flex items-center border-b border-[#e8e8e8] mb-8">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="activeTab = tab"
      :class="[
        'px-6 py-4 text-[12px] font-bold uppercase tracking-[1.2px] transition-all duration-300 cursor-pointer border-b-2 -mb-px relative',
        activeTab === tab
          ? 'text-[#c0392b] border-[#c0392b]'
          : 'text-[#999] border-transparent hover:text-[#c0392b]',
      ]"
    >
      {{ tab }}
    </button>
  </div>
</template>
