<script setup>
import UIPrice from "../ui/UIPrice.vue";

import img1 from "../../assets/images/image027.jpg"; // brown leather exec chair
import img2 from "../../assets/images/image24.jpg"; // wooden dining table
import img3 from "../../assets/images/image030.jpg"; // Eames lounge chair
import img4 from "../../assets/images/image022.jpg"; // white dining table
import img5 from "../../assets/images/image031.jpg"; // black office chair
import img6 from "../../assets/images/image032.jpg"; // wooden plywood chair
import img7 from "../../assets/images/image023.jpg"; // round iron table
import img8 from "../../assets/images/mage021.jpg"; // black exec chair

const items = [
  { name: "Modular Modern", price: "$ 540.00", img: img1 },
  { name: "Modular Modern", price: "$ 540.00", img: img2 },
  { name: "Modular Modern", price: "$ 540.00", img: img3 },
  { name: "Modular Modern", price: "$ 540.00", img: img4 },
  { name: "Modular Modern", price: "$ 540.00", img: img5 },
  { name: "Modular Modern", price: "$ 540.00", img: img6 },
  { name: "Modular Modern", price: "$ 540.00", img: img7 },
  { name: "Modular Modern", price: "$ 540.00", img: img8 },
];
</script>

<template>
  <section class="max-w-[1200px] mx-auto px-5 py-12 md:py-16">
    <div class="flex items-center justify-between mb-8">
      <h2
        class="text-[18px] font-black text-[#222] uppercase tracking-wide"
        style="font-family: &quot;Open Sans&quot;, Arial, sans-serif"
      >
        Most Viewed
      </h2>
      <div class="flex items-center gap-2">
        <button
          class="w-9 h-9 border border-[#ddd] flex items-center justify-center text-[#888] hover:border-[#c0392b] hover:text-[#c0392b] hover:bg-[#fafafa] transition-all duration-200"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          class="w-9 h-9 border border-[#ddd] flex items-center justify-center text-[#888] hover:border-[#c0392b] hover:text-[#c0392b] hover:bg-[#fafafa] transition-all duration-200"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-l border-[#e8e8e8]"
    >
      <div
        v-for="(item, i) in items"
        :key="i"
        class="group flex items-center gap-3 p-4 border-b border-r border-[#e8e8e8] bg-white transition-all duration-300 hover:shadow-md hover:bg-[#fafafa]"
      >
        <div
          class="w-[80px] h-[64px] flex-shrink-0 bg-[#f5f3ef] flex items-center justify-center overflow-hidden rounded"
        >
          <img
            :src="item.img"
            :alt="item.name"
            class="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-125"
          />
        </div>
        <div class="flex-1 min-w-0">
          <h4
            class="text-[12px] text-[#333] group-hover:text-[#c0392b] transition-colors duration-200 mb-1 truncate font-semibold"
          >
            {{ item.name }}
          </h4>
          <UIPrice :price="item.price" />
          <button
            class="flex items-center gap-1 text-[10px] text-[#888] hover:text-[#c0392b] transition-colors duration-200 mt-2 cursor-pointer font-semibold"
          >
            <svg
              class="w-3 h-3"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
