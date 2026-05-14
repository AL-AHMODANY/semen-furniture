<script setup>
import MembershipDiscountBanner from "./MembershipDiscountBanner.vue";
import LivingRoomPromo from "./LivingRoomPromo.vue";
import OutdoorFurniturePromo from "./OutdoorFurniturePromo.vue";
</script>

<template>
  <section class="site-shell w-full py-8 md:py-10">
    <div
      class="hidden md:grid gap-4 md:gap-6 auto-rows-[220px]"
      style="grid-template-columns: 2fr 1fr 1fr"
    >
      <div class="h-70 overflow-hidden">
        <MembershipDiscountBanner />
      </div>

      <div class="h-70 overflow-hidden">
        <LivingRoomPromo />
      </div>

      <div class="h-70 overflow-hidden">
        <OutdoorFurniturePromo />
      </div>
    </div>

    <!-- MOBILE -->
    <div class="flex flex-col gap-4 md:hidden">
      <div class="h-60 overflow-hidden">
        <MembershipDiscountBanner />
      </div>

      <div class="h-60 overflow-hidden">
        <LivingRoomPromo />
      </div>

      <div class="h-65 overflow-hidden">
        <OutdoorFurniturePromo />
      </div>
    </div>
  </section>
</template>
