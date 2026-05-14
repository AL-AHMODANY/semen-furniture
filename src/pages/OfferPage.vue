<script setup>
import BrandsSection from "../components/brands/BrandsSection.vue";
import ProductCard from "../components/products/ProductCard.vue";

import bannerLeft from "../assets/images/image029.jpg";
import bannerRight from "../assets/images/image030.jpg";
import imgDesk from "../assets/images/image005.jpg";
import imgChair from "../assets/images/image006.jpg";
import imgWood from "../assets/images/image009.jpg";
import imgSofa from "../assets/images/image010.jpg";
import imgRound from "../assets/images/image023.jpg";
import imgRed from "../assets/images/image026.jpg";

const highlights = [
  { title: "Weekend Save", value: "-30%" },
  { title: "Member Bonus", value: "2-for-1" },
  { title: "Free Delivery", value: "Orders $800+" },
];

const offers = [
  { id: "offer-1", title: "Modern Desk", img: imgDesk, price: "$ 349.00", oldPrice: "$ 420.00", showSale: true, bgColor: "bg-[#f8f7f5]" },
  { id: "offer-2", title: "Blue Office Chair", img: imgChair, price: "$ 249.00", showNew: true, bgColor: "bg-[#eef2f4]" },
  { id: "offer-3", title: "Classic Wood Chair", img: imgWood, price: "$ 159.00", oldPrice: "$ 200.00", showSale: true, bgColor: "bg-[#f5f0e8]" },
  { id: "offer-4", title: "Leather Sofa", img: imgSofa, price: "$ 649.00", bgColor: "bg-[#f5f0e8]" },
  { id: "offer-5", title: "Round Table", img: imgRound, price: "$ 540.00", oldPrice: "$ 600.00", showSale: true, bgColor: "bg-[#faf2e8]" },
  { id: "offer-6", title: "Accent Chair", img: imgRed, price: "$ 540.00", showNew: true, bgColor: "bg-[#f7f1f3]" },
];
</script>

<template>
  <main class="bg-white text-[#333]">
    <div class="border-b border-[#e8e8e8] bg-[#f7f7f7]">
      <div class="site-shell flex items-center gap-2 py-2 text-[12px] text-[#888]">
        <span>Home</span>
        <span class="text-[#ccc]">/</span>
        <span class="font-medium text-[#555]">Offer</span>
      </div>
    </div>

    <section class="site-shell py-8 md:py-10">
      <div class="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <article class="relative overflow-hidden">
          <img :src="bannerLeft" alt="Offer banner" class="h-[240px] w-full object-cover" />
          <div class="absolute inset-0 bg-[#8a6320]/45"></div>
          <div class="absolute inset-0 flex items-center px-8">
            <div class="text-white">
              <p class="text-[12px] font-bold uppercase tracking-[0.28em]">Limited Offer</p>
              <h1 class="mt-3 text-[34px] font-black uppercase leading-none">United Wood</h1>
              <p class="mt-3 text-[13px] uppercase tracking-[0.18em]">You Get High Quality</p>
            </div>
          </div>
        </article>
        <article class="relative overflow-hidden">
          <img :src="bannerRight" alt="Offer banner" class="h-[240px] w-full object-cover" />
          <div class="absolute inset-0 bg-[#4e8d2d]/40"></div>
          <div class="absolute inset-0 flex items-center px-8">
            <div class="text-white">
              <p class="text-[12px] font-bold uppercase tracking-[0.28em]">Hot Deal</p>
              <h2 class="mt-3 text-[34px] font-black uppercase leading-none">Design For You</h2>
              <p class="mt-3 text-[13px] uppercase tracking-[0.18em]">Soft, Modern, Practical</p>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-8 grid gap-4 md:grid-cols-3">
        <div
          v-for="highlight in highlights"
          :key="highlight.title"
          class="border border-[#e8e8e8] bg-[#faf8f5] p-6 text-center"
        >
          <p class="text-[12px] font-bold uppercase tracking-[0.2em] text-[#999]">{{ highlight.title }}</p>
          <p class="mt-3 text-[28px] font-black uppercase text-[#222]">{{ highlight.value }}</p>
        </div>
      </div>

      <div class="mt-10">
        <div class="mb-5 flex items-center justify-between gap-4 border-b border-[#ececec] pb-3">
          <h2 class="text-[20px] font-black uppercase text-[#222]">Offer Picks</h2>
          <span class="text-[12px] text-[#999]">6 products</span>
        </div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          <ProductCard v-for="item in offers" :key="item.id" v-bind="item" />
        </div>
      </div>
    </section>

    <BrandsSection />
  </main>
</template>
