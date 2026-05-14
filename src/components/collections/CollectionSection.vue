<script setup>
import { ref } from "vue";
import CollectionGrid from "./CollectionGrid.vue";

import tab1 from "../../assets/images/image009.jpg";
import tab2 from "../../assets/images/image016.jpg";
import tab3 from "../../assets/images/image017.jpg";
import tab4 from "../../assets/images/image018.jpg";
import tab5 from "../../assets/images/image011.jpg";
import tab6 from "../../assets/images/image006.jpg";
import tab7 from "../../assets/images/image025.jpg";
import tab8 from "../../assets/images/image022.jpg";

const tabs = [
  { label: "Love furniture", img: tab1 },
  { label: "Outdoor table", img: tab2 },
  { label: "Coffee chair", img: tab3 },
  { label: "Occa chair", img: tab4 },
  { label: "Leather Sofa", img: tab5 },
  { label: "Computer chair", img: tab6 },
  { label: "Office sofa", img: tab7 },
  { label: "Office chair", img: tab8 },
];

const activeTab = ref(0);
</script>

<template>
  <section class="site-shell py-10 md:py-14">
    
    <!-- Title -->
    <h2 class="text-[18px] font-bold uppercase tracking-wide text-[#222]">
      SUGGEST COLLECTION
    </h2>

    <!-- Active label -->
    <p class="text-[12px] text-[#999] mt-1 mb-6">
      {{ tabs[activeTab].label }}
    </p>
<!-- Tabs -->
<div class="flex items-end border-b border-[#e8e8e8] overflow-x-auto">

  <button
    v-for="(tab, i) in tabs"
    :key="i"
    @click="activeTab = i"
    class="relative flex flex-col items-center px-5 pb-4 pt-3 shrink-0"
  >

    <!-- thumbnail box -->
    <div
      class="w-19.5 h-14.5 flex items-center justify-center rounded border transition-all duration-200"
      :class="activeTab === i
        ? 'border-[#c0392b] shadow-sm bg-white'
        : 'border-[#e5e5e5] bg-white hover:border-[#c0392b]'"
    >
      <img
        :src="tab.img"
        :alt="tab.label"
        class="w-17.5 h-12.5 object-cover rounded"
      />
    </div>

    <!-- label -->
    <span
      class="text-[10px] uppercase mt-2 whitespace-nowrap tracking-wide"
      :class="activeTab === i ? 'text-[#c0392b] font-bold' : 'text-[#888]'"
    >
      {{ tab.label }}
    </span>

    <!-- active red underline (full width like image) -->
    <div
      v-if="activeTab === i"
      class="absolute bottom-0 left-0 w-full h-0.5 bg-[#c0392b]"
    ></div>

    <!-- red triangle indicator -->
    <div
      v-if="activeTab === i"
      class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0
             border-l-[6px] border-r-[6px] border-t-[6px]
             border-l-transparent border-r-transparent border-t-[#c0392b]"
    ></div>

  </button>
</div>

    <!-- Products -->
    <CollectionGrid />
  </section>
</template>
