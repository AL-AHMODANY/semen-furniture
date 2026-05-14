<script setup>
import BrandsSection from "../components/brands/BrandsSection.vue";
import ProductCard from "../components/products/ProductCard.vue";

import hero from "../assets/images/image037.jpg";
import imgOne from "../assets/images/image023.jpg";
import imgTwo from "../assets/images/image008.jpg";
import imgThree from "../assets/images/image24.jpg";
import imgFour from "../assets/images/image026.jpg";

const columns = [
  {
    title: "Living Room",
    links: ["Featured Sofas", "Accent Chairs", "Coffee Tables", "Side Cabinets"],
  },
  {
    title: "Workspace",
    links: ["Office Chairs", "Desks", "Storage", "Lighting"],
  },
  {
    title: "Decor",
    links: ["Textiles", "Wall Art", "Mirrors", "Accessories"],
  },
];

const picks = [
  { id: "custom-1", title: "Round Table", img: imgOne, price: "$ 540.00", oldPrice: "$ 600.00", showSale: true, bgColor: "bg-[#f5f2ee]" },
  { id: "custom-2", title: "Brown Desk", img: imgTwo, price: "$ 299.00", bgColor: "bg-[#f5f0e8]" },
  { id: "custom-3", title: "Compact Accent Seat", img: imgThree, price: "$ 540.00", showNew: true, bgColor: "bg-[#f7f1f3]" },
  { id: "custom-4", title: "Red Office Chair", img: imgFour, price: "$ 540.00", showNew: true, bgColor: "bg-[#f3eef5]" },
];
</script>

<template>
  <main class="bg-white text-[#333]">
    <div class="border-b border-[#e8e8e8] bg-[#f7f7f7]">
      <div class="site-shell flex items-center gap-2 py-2 text-[12px] text-[#888]">
        <span>Home</span>
        <span class="text-[#ccc]">/</span>
        <span class="font-medium text-[#555]">Custom Menu</span>
      </div>
    </div>

    <section class="site-shell py-8 md:py-10">
      <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="relative overflow-hidden bg-[#f6f3ef]">
          <img :src="hero" alt="Custom menu showcase" class="h-full min-h-[320px] w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/45 to-transparent"></div>
          <div class="absolute inset-0 flex max-w-xl flex-col justify-center px-8">
            <p class="text-[11px] font-bold uppercase tracking-[0.28em] text-[#c0392b]">Custom Menu</p>
            <h1 class="mt-3 text-[34px] font-black uppercase leading-none text-[#222] md:text-[48px]">
              Build Rich Navigation Blocks
            </h1>
            <p class="mt-4 max-w-lg text-[13px] leading-7 text-[#666]">
              This page shows how custom menu destinations can hold grouped categories, editorial content, and featured product cards.
            </p>
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          <article
            v-for="column in columns"
            :key="column.title"
            class="border border-[#e8e8e8] bg-white p-6"
          >
            <h2 class="text-[14px] font-black uppercase tracking-[0.14em] text-[#222]">
              {{ column.title }}
            </h2>
            <ul class="mt-4 space-y-3">
              <li v-for="link in column.links" :key="link" class="text-[12px] text-[#666]">
                <a href="#" class="transition hover:text-[#c0392b]">{{ link }}</a>
              </li>
            </ul>
          </article>
        </div>
      </div>

      <div class="mt-10">
        <div class="mb-5 flex items-center justify-between gap-4 border-b border-[#ececec] pb-3">
          <h2 class="text-[20px] font-black uppercase text-[#222]">Featured Menu Picks</h2>
          <span class="text-[12px] text-[#999]">4 products</span>
        </div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <ProductCard v-for="pick in picks" :key="pick.id" v-bind="pick" />
        </div>
      </div>
    </section>

    <BrandsSection />
  </main>
</template>
