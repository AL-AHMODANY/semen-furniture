<script setup>
import UIPrice from "../ui/UIPrice.vue";
import { shopStore } from "../../store/shop.js";

import img1 from "../../assets/images/image027.jpg";
import img2 from "../../assets/images/image24.jpg";
import img3 from "../../assets/images/image030.jpg";
import img4 from "../../assets/images/image022.jpg";
import img5 from "../../assets/images/image031.jpg";
import img6 from "../../assets/images/image032.jpg";
import img7 from "../../assets/images/image023.jpg";
import img8 from "../../assets/images/mage021.jpg";

const items = [
  { id: "most-viewed-1", name: "Modular Modern", price: "$ 540.00", img: img1 },
  { id: "most-viewed-2", name: "Modular Modern", price: "$ 540.00", img: img2 },
  { id: "most-viewed-3", name: "Modular Modern", price: "$ 540.00", img: img3 },
  { id: "most-viewed-4", name: "Modular Modern", price: "$ 540.00", img: img4 },
  { id: "most-viewed-5", name: "Modular Modern", price: "$ 540.00", img: img5 },
  { id: "most-viewed-6", name: "Modular Modern", price: "$ 540.00", img: img6 },
  { id: "most-viewed-7", name: "Modular Modern", price: "$ 540.00", img: img7 },
  { id: "most-viewed-8", name: "Modular Modern", price: "$ 540.00", img: img8 },
];
</script>

<template>
  <section class="site-shell w-full py-10 md:py-14">
    <!-- HEADER -->
    <div class="flex items-center justify-between mb-6">
      <h2
        class="text-[16px] md:text-[18px] font-bold uppercase tracking-wide text-[#222]"
        style="font-family: 'Open Sans', sans-serif"
      >
        Most Viewed
      </h2>

      <!-- arrows -->
      <div class="flex items-center gap-1">
        <button
          class="w-8 h-8 border border-[#e5e5e5] flex items-center justify-center text-[#888] hover:text-[#222] hover:border-[#d5d5d5] transition"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
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
          class="w-8 h-8 border border-[#e5e5e5] flex items-center justify-center text-[#888] hover:text-[#222] hover:border-[#d5d5d5] transition"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
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

    <!-- BIG ORIGINAL STYLE GRID -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#ebebeb]"
    >
      <div
        v-for="(item, i) in items"
        :key="i"
        class="flex items-center gap-4 p-5 md:p-6 border-r border-b border-[#ebebeb] bg-white min-h-35 hover:bg-[#fcfcfc] transition"
      >
        <!-- BIG IMAGE -->
        <div
          class="w-27.5 h-22.5 shrink-0 bg-[#fafafa] overflow-hidden flex items-center justify-center"
        >
          <img
            :src="item.img"
            :alt="item.name"
            class="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>

        <!-- CONTENT -->
        <div class="flex-1 min-w-0">
          <h4
            class="text-[13px] uppercase text-[#444] leading-4.5 hover:text-[#c0392b] transition"
            style="font-family: 'Open Sans', sans-serif"
          >
            {{ item.name }}
          </h4>

          <div class="mt-2">
            <UIPrice :price="item.price" />
          </div>

          <button
            class="mt-3 text-[11px] text-[#999] hover:text-[#c0392b] transition"
            @click="shopStore.addToCart({ id: item.id, title: item.name, img: item.img, price: item.price })"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
