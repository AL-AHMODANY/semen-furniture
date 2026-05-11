<script setup>
defineProps({
  price: { type: String, required: true },
  oldPrice: { type: String, default: "" },
});
</script>

<template>
  <div class="flex items-baseline gap-2.5 flex-wrap">
    <span class="text-[#222] font-black text-[16px]">{{ price }}</span>
    <span
      v-if="oldPrice"
      class="text-[#bbb] text-[13px] line-through font-normal"
      >{{ oldPrice }}</span
    >
  </div>
</template>
