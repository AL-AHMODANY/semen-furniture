<script setup>
import ProductTabBar from "./ProductTabBar.vue";
import ProductGrid from "./ProductGrid.vue";
</script>

<template>
  <section class="bg-white border-b border-[#efefef] py-12 md:py-16">
    <div class="container">
      <div
        class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 mb-8"
      >
        <h2
          class="text-[18px] md:text-[20px] font-bold uppercase tracking-[0.18em] text-[#111]"
        >
          PRODUCT TAPS
        </h2>
        <ProductTabBar />
      </div>
      <ProductGrid />
    </div>
  </section>
</template>
