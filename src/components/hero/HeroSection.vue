<script setup>
import MainHeroBanner from "./MainHeroBanner.vue";
import SofaPromoBanner from "./SofaPromoBanner.vue";
import ChairDiscountBanner from "./ChairDiscountBanner.vue";
import livingRoomImg from "../../assets/images/image002.jpg";
</script>

<template>
  <section class="w-full bg-white py-4 md:py-5">
    <div class="site-shell">
    <!-- DESKTOP -->
    <div
      class="hidden md:grid gap-3"
      style="
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 320px 220px;
      "
    >
      <!-- LEFT -->
      <div
        class="overflow-hidden bg-white"
        style="grid-row: 1 / 3"
      >
        <MainHeroBanner />
      </div>

      <!-- RIGHT TOP -->
      <div class="overflow-hidden bg-white group cursor-pointer">
        <img
          :src="livingRoomImg"
          alt="Living Room"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

        <!-- RIGHT BOTTOM -->
        <div class="grid grid-cols-2 gap-3">
        <div class="overflow-hidden bg-white">
          <SofaPromoBanner />
        </div>

        <div class="overflow-hidden bg-white">
          <ChairDiscountBanner />
        </div>
      </div>
    </div>

    <!-- MOBILE -->
    <div class="flex flex-col gap-3 md:hidden">
      <!-- HERO -->
      <div class="h-60 overflow-hidden bg-white">
        <MainHeroBanner />
      </div>

      <!-- IMAGE -->
      <div class="h-42.5 overflow-hidden bg-white">
        <img
          :src="livingRoomImg"
          alt="Living Room"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- BOTTOM -->
      <div class="grid grid-cols-2 gap-3">
        <div class="h-37.5 overflow-hidden bg-white">
          <SofaPromoBanner />
        </div>

        <div class="h-37.5 overflow-hidden bg-white">
          <ChairDiscountBanner />
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
