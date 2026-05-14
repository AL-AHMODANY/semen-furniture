<script setup>
import ChairBlogCard from "./ChairBlogCard.vue";
import LivingRoomBlogCard from "./LivingRoomBlogCard.vue";
import InteriorStoreBlogCard from "./InteriorStoreBlogCard.vue";
</script>

<template>
  <section class="site-shell py-12 md:py-16">
    <h2
      class="text-[18px] font-black text-[#222] uppercase tracking-wide mb-10"
      style='font-family: "Open Sans", Arial, sans-serif'
    >
      Latest Posts
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ChairBlogCard />
      <LivingRoomBlogCard />
      <InteriorStoreBlogCard />
    </div>
  </section>
</template>
