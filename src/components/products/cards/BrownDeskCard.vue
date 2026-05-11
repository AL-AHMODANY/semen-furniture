<script setup>
import UIBadge from "../../ui/UIBadge.vue";
import UIPrice from "../../ui/UIPrice.vue";
import UIIconButton from "../../ui/UIIconButton.vue";
import img from "../../../assets/images/image008.jpg";
</script>
<template>
  <div
    class="group bg-white flex flex-col border border-[#f0f0f0] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
  >
    <div class="relative overflow-hidden bg-[#f5f0e8] h-[220px] flex-shrink-0">
      <UIBadge :show-new="false" :show-sale="false" />
      <img
        :src="img"
        alt="Brown Desk"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div
        class="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white"
      >
        <button
          class="w-full bg-[#222] text-white text-[11px] font-bold uppercase tracking-widest py-3 hover:bg-[#c0392b] transition-colors duration-200"
        >
          Add to Cart
        </button>
        <div class="flex bg-[#fafafa] border-t border-[#e8e8e8]">
          <UIIconButton icon="heart" label="Wishlist" /><UIIconButton
            icon="compare"
            label="Compare"
          /><UIIconButton icon="eye" label="Quick View" />
        </div>
      </div>
    </div>
    <div class="px-4 py-4 flex flex-col gap-2 flex-1 bg-white">
      <h3
        class="text-[13px] font-semibold text-[#333] hover:text-[#c0392b] cursor-pointer transition-colors duration-200 leading-snug line-clamp-2"
      >
        Brown Desk
      </h3>
      <UIPrice price="$ 299.00" />
    </div>
  </div>
</template>
