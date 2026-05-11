<script setup>
import Header from "../components/header/Header.vue";
import Footer from "../components/footer/Footer.vue";
import HeroSection from "../components/hero/HeroSection.vue";
import ProductsSection from "../components/products/ProductsSection.vue";
import AxelStoolBanner from "../components/hero/AxelStoolBanner.vue";
import CollectionSection from "../components/collections/CollectionSection.vue";
import PromoSection from "../components/promo/PromoSection.vue";
import MostViewedSection from "../components/products/MostViewedSection.vue";
import BlogSection from "../components/blog/BlogSection.vue";
import BrandsSection from "../components/brands/BrandsSection.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#f7f7f2] text-[#222]">
    <Header />
    <main class="flex-1">
      <HeroSection />
      <ProductsSection />
      <AxelStoolBanner />
      <CollectionSection />
      <PromoSection />
      <MostViewedSection />
      <BlogSection />
      <BrandsSection />
    </main>
    <Footer />
  </div>
</template>
