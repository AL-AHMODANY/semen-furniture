<script setup>
import MembershipDiscountBanner from "./MembershipDiscountBanner.vue";
import LivingRoomPromo from "./LivingRoomPromo.vue";
import OutdoorFurniturePromo from "./OutdoorFurniturePromo.vue";
</script>

<template>
  <section class="max-w-[1200px] mx-auto px-5 py-12 md:py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <MembershipDiscountBanner />
      <LivingRoomPromo />
      <OutdoorFurniturePromo />
    </div>
  </section>
</template>
