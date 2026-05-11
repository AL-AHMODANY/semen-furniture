<script setup>
/**
 * UIBadge — corner ribbon badge exactly like the Simen demo
 * showNew  — blue ribbon top-left
 * showSale — red ribbon top-right
 * If only one is true, only that corner shows.
 */
defineProps({
  showNew:  { type: Boolean, default: false },
  showSale: { type: Boolean, default: false },
})
</script>

<template>
  <!-- NEW — top-left blue diagonal ribbon -->
  <div
    v-if="showNew"
    class="absolute top-0 left-0 w-[64px] h-[64px] overflow-hidden z-20 pointer-events-none"
  >
    <span
      class="absolute top-[14px] left-[-18px] w-[80px] text-center text-white text-[10px] font-black uppercase tracking-wider py-[3px] bg-[#4a90d9] rotate-[-45deg] shadow-sm"
    >
      NEW
    </span>
  </div>

  <!-- SALE — top-right red diagonal ribbon -->
  <div
    v-if="showSale"
    class="absolute top-0 right-0 w-[64px] h-[64px] overflow-hidden z-20 pointer-events-none"
  >
    <span
      class="absolute top-[14px] right-[-18px] w-[80px] text-center text-white text-[10px] font-black uppercase tracking-wider py-[3px] bg-[#c0392b] rotate-[45deg] shadow-sm"
    >
      SALE
    </span>
  </div>
</template>
