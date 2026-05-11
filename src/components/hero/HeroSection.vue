<script setup>
import MainHeroBanner from "./MainHeroBanner.vue";
import SofaPromoBanner from "./SofaPromoBanner.vue";
import ChairDiscountBanner from "./ChairDiscountBanner.vue";
import livingRoomImg from "../../assets/images/image002.jpg";
</script>

<template>
  <!--
    4-panel hero — exactly like Simen demo:
    ┌──────────────────────┬──────────────────────┐
    │                      │  Living room photo   │
    │   Main hero slider   ├──────────┬───────────┤
    │   (spans 2 rows)     │  Sofa    │  Chair    │
    └──────────────────────┴──────────┴───────────┘
  -->
  <section class="w-full overflow-hidden bg-white">
    <!-- Desktop 4-panel grid -->
    <div
      class="hidden md:grid"
      style="grid-template-columns: 55% 45%; grid-template-rows: 300px 220px"
    >
      <!-- LEFT — slider, spans both rows -->
      <div
        style="grid-row: 1/3; grid-column: 1"
        class="border-r border-[#e8e8e8] overflow-hidden"
      >
        <MainHeroBanner />
      </div>

      <!-- RIGHT TOP — living room scene -->
      <div
        style="grid-row: 1; grid-column: 2"
        class="border-b border-[#e8e8e8] overflow-hidden group cursor-pointer"
      >
        <img
          :src="livingRoomImg"
          alt="Living Room"
          class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <!-- RIGHT BOTTOM — two equal panels -->
      <div style="grid-row: 2; grid-column: 2" class="grid grid-cols-2">
        <div class="border-r border-[#e8e8e8] h-full overflow-hidden">
          <SofaPromoBanner />
        </div>
        <div class="h-full overflow-hidden">
          <ChairDiscountBanner />
        </div>
      </div>
    </div>

    <!-- Mobile — stack vertically -->
    <div class="md:hidden flex flex-col">
      <div class="h-[260px]"><MainHeroBanner /></div>
      <div class="h-[180px] border-t border-[#e8e8e8] overflow-hidden">
        <img
          :src="livingRoomImg"
          alt="Living Room"
          class="w-full h-full object-cover object-center"
        />
      </div>
      <div class="grid grid-cols-2 h-[160px] border-t border-[#e8e8e8]">
        <div class="border-r border-[#e8e8e8] overflow-hidden">
          <SofaPromoBanner />
        </div>
        <div class="overflow-hidden"><ChairDiscountBanner /></div>
      </div>
    </div>
  </section>
</template>
