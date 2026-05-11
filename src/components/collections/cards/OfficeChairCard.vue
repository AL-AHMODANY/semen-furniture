<script setup>
// image24.jpg = wooden dining/office table
import UIBadge from "../../ui/UIBadge.vue";
import UIPrice from "../../ui/UIPrice.vue";
import UIIconButton from "../../ui/UIIconButton.vue";
import img from "../../../assets/images/image24.jpg";
</script>

<template>
  <div
    class="group relative bg-white border border-[#e8e8e8] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
  >
    <div class="relative overflow-hidden bg-[#eef2f4]">
      <UIBadge :show-new="true" :show-sale="false" />
      <img
        :src="img"
        alt="Office Chair"
        class="w-full h-[240px] object-contain p-3 transition-transform duration-300 group-hover:scale-110"
      />
      <div
        class="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white"
      >
        <button
          class="w-full bg-[#222] text-white text-[11px] font-bold uppercase tracking-widest py-3 hover:bg-[#c0392b] transition-colors duration-200 cursor-pointer"
        >
          Add to Cart
        </button>
        <div class="flex w-full bg-[#fafafa] border-t border-[#e8e8e8]">
          <UIIconButton icon="heart" label="Wishlist" />
          <UIIconButton icon="compare" label="Compare" />
          <UIIconButton icon="eye" label="Quick View" />
        </div>
      </div>
    </div>
    <div class="p-4">
      <h3
        class="text-[13px] font-semibold text-[#333] hover:text-[#c0392b] cursor-pointer transition-colors duration-200 mb-2 line-clamp-2"
      >
        Modular Modern
      </h3>
      <UIPrice price="$ 540.00" />
    </div>
  </div>
</template>
