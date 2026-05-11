<script setup>
import RoundTableCard from "./cards/RoundTableCard.vue";
import OfficeChairCard from "./cards/OfficeChairCard.vue";
import RedOfficeChairCard from "./cards/RedOfficeChairCard.vue";
import ModernArmchairCard from "./cards/ModernArmchairCard.vue";
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
    <RoundTableCard />
    <OfficeChairCard />
    <RedOfficeChairCard />
    <ModernArmchairCard />
  </div>
</template>
