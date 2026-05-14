<script setup>
import BrandsSection from "../components/brands/BrandsSection.vue";
import ProductCard from "../components/products/ProductCard.vue";

import heroImage from "../assets/images/image039.jpg";
import imgOne from "../assets/images/image006.jpg";
import imgTwo from "../assets/images/image24.jpg";
import imgThree from "../assets/images/image026.jpg";
import imgFour from "../assets/images/image013.jpg";
import imgFive from "../assets/images/image032.jpg";
import imgSix from "../assets/images/image022.jpg";

const features = [
  { title: "Compact Picks", text: "Furniture and accessories sized for tighter mobile-first spaces." },
  { title: "Fast Browsing", text: "Quick, visual shopping blocks with clear actions and pricing." },
  { title: "Clean Layout", text: "Simple sections that keep focus on product imagery and offers." },
];

const products = [
  { id: "mobile-1", title: "Blue Office Chair", img: imgOne, price: "$ 540.00", oldPrice: "$ 600.00", showNew: true, bgColor: "bg-[#eef2f4]" },
  { id: "mobile-2", title: "Compact Lounge Seat", img: imgTwo, price: "$ 540.00", showSale: true, bgColor: "bg-[#f6f0ea]" },
  { id: "mobile-3", title: "Accent Chair", img: imgThree, price: "$ 540.00", bgColor: "bg-[#f7f1f3]" },
  { id: "mobile-4", title: "Black Stool", img: imgFour, price: "$ 540.00", showNew: true, bgColor: "bg-[#f0f0f0]" },
  { id: "mobile-5", title: "Soft Relax Chair", img: imgFive, price: "$ 540.00", bgColor: "bg-[#f4f1eb]" },
  { id: "mobile-6", title: "Modern Side Seat", img: imgSix, price: "$ 540.00", oldPrice: "$ 600.00", showSale: true, bgColor: "bg-[#f8f5f0]" },
];
</script>

<template>
  <main class="bg-white text-[#333]">
    <div class="border-b border-[#e8e8e8] bg-[#f7f7f7]">
      <div class="site-shell flex items-center gap-2 py-2 text-[12px] text-[#888]">
        <span>Home</span>
        <span class="text-[#ccc]">/</span>
        <span class="font-medium text-[#555]">Mobile</span>
      </div>
    </div>

    <section class="site-shell py-8 md:py-10">
      <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="relative overflow-hidden bg-[#f6f2ec]">
          <img :src="heroImage" alt="Mobile collection" class="h-full min-h-[320px] w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-transparent"></div>
          <div class="absolute inset-0 flex max-w-xl flex-col justify-center px-8">
            <p class="text-[11px] font-bold uppercase tracking-[0.28em] text-[#c0392b]">Mobile Collection</p>
            <h1 class="mt-3 text-[34px] font-black uppercase leading-none text-[#222] md:text-[48px]">
              Flexible Furniture For Smaller Screens
            </h1>
            <p class="mt-4 max-w-lg text-[13px] leading-7 text-[#666]">
              A cleaner catalog page for compact browsing, fast add-to-cart actions, and visual-first furniture discovery.
            </p>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <article
            v-for="feature in features"
            :key="feature.title"
            class="border border-[#e8e8e8] bg-white p-6"
          >
            <h2 class="text-[14px] font-black uppercase tracking-[0.14em] text-[#222]">
              {{ feature.title }}
            </h2>
            <p class="mt-3 text-[13px] leading-6 text-[#777]">
              {{ feature.text }}
            </p>
          </article>
        </div>
      </div>

      <div class="mt-10">
        <div class="mb-5 flex items-center justify-between gap-4 border-b border-[#ececec] pb-3">
          <h2 class="text-[20px] font-black uppercase text-[#222]">Mobile Favorites</h2>
          <span class="text-[12px] text-[#999]">6 items</span>
        </div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          <ProductCard v-for="product in products" :key="product.id" v-bind="product" />
        </div>
      </div>
    </section>

    <BrandsSection />
  </main>
</template>
