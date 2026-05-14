<script setup>
import ProductTabBar from "./ProductTabBar.vue";
import ProductGrid from "./ProductGrid.vue";
</script>

<template>
  <section class="bg-white border-b border-[#efefef] py-12 md:py-16">
    <div class="site-shell">
      <ProductTabBar />
      <ProductGrid />
    </div>
  </section>
</template>
