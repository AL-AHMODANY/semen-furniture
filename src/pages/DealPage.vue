<script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import BrandsSection from "../components/brands/BrandsSection.vue";
import ProductCard from "../components/products/ProductCard.vue";

import dealImage from "../assets/images/image008.jpg";
import imgOne from "../assets/images/image020.jpg";
import imgTwo from "../assets/images/image023.jpg";
import imgThree from "../assets/images/image012.jpg";
import imgFour from "../assets/images/image010.jpg";

const timer = reactive({
  days: 365,
  hours: 24,
  mins: 59,
  secs: 30,
});

const deals = [
  { id: "deal-1", title: "Orange Sofa", img: imgOne, price: "$ 549.00", oldPrice: "$ 680.00", showSale: true, bgColor: "bg-[#faf2e8]" },
  { id: "deal-2", title: "Round Table", img: imgTwo, price: "$ 540.00", oldPrice: "$ 600.00", showSale: true, bgColor: "bg-[#f5f2ee]" },
  { id: "deal-3", title: "Blue Modern Sofa", img: imgThree, price: "$ 599.00", oldPrice: "$ 750.00", showNew: true, bgColor: "bg-[#eef2f8]" },
  { id: "deal-4", title: "Leather Sofa", img: imgFour, price: "$ 649.00", bgColor: "bg-[#f5f0e8]" },
];

let countdown;

onMounted(() => {
  countdown = setInterval(() => {
    let total = timer.days * 86400 + timer.hours * 3600 + timer.mins * 60 + timer.secs;
    total = total <= 0 ? 365 * 86400 : total - 1;
    timer.days = Math.floor(total / 86400);
    timer.hours = Math.floor((total % 86400) / 3600);
    timer.mins = Math.floor((total % 3600) / 60);
    timer.secs = total % 60;
  }, 1000);
});

onUnmounted(() => {
  clearInterval(countdown);
});
</script>

<template>
  <main class="bg-white text-[#333]">
    <div class="border-b border-[#e8e8e8] bg-[#f7f7f7]">
      <div class="site-shell flex items-center gap-2 py-2 text-[12px] text-[#888]">
        <span>Home</span>
        <span class="text-[#ccc]">/</span>
        <span class="font-medium text-[#555]">Deal</span>
      </div>
    </div>

    <section class="site-shell py-8 md:py-10">
      <div class="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside class="border border-[#e8e8e8] bg-white">
          <div class="border-b border-[#ececec] px-5 py-4 text-[14px] font-black uppercase tracking-[0.14em] text-[#222]">
            Deal Of Day
          </div>
          <div class="p-5">
            <img :src="dealImage" alt="Deal item" class="h-50 w-full object-contain" />
            <div class="mt-5 grid grid-cols-4 gap-2 text-center">
              <div class="bg-[#f7f7f7] px-2 py-3">
                <p class="text-[18px] font-black text-[#222]">{{ String(timer.days).padStart(3, "0") }}</p>
                <p class="text-[9px] font-bold uppercase tracking-[0.12em] text-[#999]">Days</p>
              </div>
              <div class="bg-[#f7f7f7] px-2 py-3">
                <p class="text-[18px] font-black text-[#222]">{{ String(timer.hours).padStart(2, "0") }}</p>
                <p class="text-[9px] font-bold uppercase tracking-[0.12em] text-[#999]">Hours</p>
              </div>
              <div class="bg-[#f7f7f7] px-2 py-3">
                <p class="text-[18px] font-black text-[#222]">{{ String(timer.mins).padStart(2, "0") }}</p>
                <p class="text-[9px] font-bold uppercase tracking-[0.12em] text-[#999]">Mins</p>
              </div>
              <div class="bg-[#f7f7f7] px-2 py-3">
                <p class="text-[18px] font-black text-[#222]">{{ String(timer.secs).padStart(2, "0") }}</p>
                <p class="text-[9px] font-bold uppercase tracking-[0.12em] text-[#999]">Secs</p>
              </div>
            </div>
            <button class="mt-5 w-full bg-[#c0392b] py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#222]">
              Grab This Deal
            </button>
          </div>
        </aside>

        <div>
          <div class="mb-5 border-b border-[#ececec] pb-3">
            <h1 class="text-[28px] font-black uppercase text-[#222] md:text-[38px]">Today’s Top Deals</h1>
            <p class="mt-3 max-w-2xl text-[13px] leading-7 text-[#777]">
              A focused deal page with countdown urgency and the same Simen-style product interaction pattern.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ProductCard v-for="deal in deals" :key="deal.id" v-bind="deal" />
          </div>
        </div>
      </div>
    </section>

    <BrandsSection />
  </main>
</template>
