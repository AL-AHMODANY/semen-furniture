<script setup>
import { ref } from "vue";
const tabs = ["LATEST", "SALE OFF", "BEST SALE"];
const activeTab = ref("LATEST");
</script>

<template>
  <div class="mb-8 flex items-center gap-0 border-b border-[#e8e8e8]">
    <template v-for="(tab, index) in tabs" :key="tab">
      <button
        @click="activeTab = tab"
        :class="[
          'relative py-3 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200',
          index === 0 ? 'pr-5' : 'px-5',
          activeTab === tab ? 'text-[#222]' : 'text-[#999] hover:text-[#c0392b]',
        ]"
      >
        {{ tab }}
        <span
          v-if="activeTab === tab"
          class="absolute inset-x-0 -bottom-px h-0.5 bg-[#c0392b]"
        ></span>
      </button>
      <span v-if="index < tabs.length - 1" class="pb-3 text-[#d5d5d5]">|</span>
    </template>
  </div>
</template>
