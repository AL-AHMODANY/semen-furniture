<script setup>
import { ref } from "vue";
import CollectionGrid from "./CollectionGrid.vue";

import tab1 from "../../assets/images/image009.jpg"; // brown sofa
import tab2 from "../../assets/images/image016.jpg"; // grey wingback chair
import tab3 from "../../assets/images/image017.jpg"; // wooden windsor chair
import tab4 from "../../assets/images/image018.jpg"; // grey cube armchair
import tab5 from "../../assets/images/image011.jpg"; // caramel sofa
import tab6 from "../../assets/images/image006.jpg"; // blue office chair
import tab7 from "../../assets/images/image025.jpg"; // black exec chair
import tab8 from "../../assets/images/image022.jpg"; // white table

const tabs = [
  { label: "Lorem ipsum is", img: tab1 },
  { label: "Outdoor table", img: tab2 },
  { label: "Coffee chair", img: tab3 },
  { label: "Good chair", img: tab4 },
  { label: "Leather Sofa", img: tab5 },
  { label: "Office chair", img: tab6 },
  { label: "Computer chair", img: tab7 },
  { label: "Office chair", img: tab8 },
];
const activeTab = ref(0);
</script>

<template>
  <section class="max-w-[1200px] mx-auto px-5 py-12 md:py-16">
    <h2
      class="text-[18px] font-black text-[#222] uppercase tracking-wide mb-2"
      style="font-family: &quot;Open Sans&quot;, Arial, sans-serif"
    >
      Suggest Collection
    </h2>
    <p class="text-[12px] text-[#999] mb-8">{{ tabs[activeTab].label }}</p>

    <!-- Thumbnail filter tabs -->
    <div
      class="flex items-end gap-0 border-b border-[#e8e8e8] mb-8 overflow-x-auto"
    >
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        @click="activeTab = i"
        :class="[
          'flex flex-col items-center gap-2 px-3 pb-4 pt-2 flex-shrink-0 transition-all duration-200 border-b-2 -mb-px',
          activeTab === i
            ? 'border-[#c0392b]'
            : 'border-transparent hover:border-[#c0392b]',
        ]"
      >
        <img
          :src="tab.img"
          :alt="tab.label"
          :class="[
            'w-[72px] h-[56px] object-contain transition-all duration-200 rounded',
            activeTab === i ? 'opacity-100' : 'opacity-50 hover:opacity-80',
          ]"
        />
        <span
          :class="[
            'text-[10px] uppercase tracking-wide whitespace-nowrap',
            activeTab === i ? 'text-[#c0392b] font-bold' : 'text-[#888]',
          ]"
        >
          {{ tab.label }}
        </span>
      </button>
    </div>

    <CollectionGrid />
  </section>
</template>
