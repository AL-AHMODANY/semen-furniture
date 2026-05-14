<script setup>
import { computed } from "vue";
import UIBadge from "../ui/UIBadge.vue";
import UIPrice from "../ui/UIPrice.vue";
import { shopStore } from "../../store/shop.js";

const props = defineProps({
  id: { type: String, default: "" },
  title: { type: String, required: true },
  img: { type: String, required: true },
  alt: { type: String, default: "" },
  price: { type: String, required: true },
  oldPrice: { type: String, default: "" },
  showNew: { type: Boolean, default: false },
  showSale: { type: Boolean, default: false },
  bgColor: { type: String, default: "bg-white" },
});

const imageAlt = computed(() => props.alt || props.title);
const product = computed(() => ({
  id: props.id || undefined,
  title: props.title,
  img: props.img,
  price: props.price,
  oldPrice: props.oldPrice,
}));
const normalizedId = computed(
  () => shopStore.normalizeProduct(product.value).id,
);
const isWishlisted = computed(() => shopStore.isInWishlist(normalizedId.value));
const isCompared = computed(() => shopStore.isInCompare(normalizedId.value));
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden border border-[#ececec] bg-white transition-all duration-300 hover:border-[#d7d7d7] hover:shadow-sm"
  >
    <div :class="[`relative h-55 shrink-0 overflow-hidden`, bgColor]">
      <UIBadge :show-new="showNew" :show-sale="showSale" />
      <img
        :src="img"
        :alt="imageAlt"
        class="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
      />
      <div
        class="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10"
      >
        <div class="bg-white">
          <button
            class="w-full bg-[#222] text-white text-[11px] font-bold uppercase tracking-widest py-3 hover:bg-[#c0392b] transition-colors duration-200"
            @click.stop="shopStore.addToCart(product)"
          >
            Add To Cart
          </button>
          <div class="flex bg-[#fafafa] border-t border-[#e8e8e8]">
            <button
              class="flex-1 h-[40px] flex items-center justify-center border-r border-[#e8e8e8] text-[#888] hover:text-[#c0392b] hover:bg-[#fafafa] transition-all duration-200"
              @click.stop="shopStore.toggleWishlist(product)"
            >
              <svg
                class="w-[16px] h-[16px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
              class="flex-1 h-[40px] flex items-center justify-center border-r border-[#e8e8e8] text-[#888] hover:text-[#c0392b] hover:bg-[#fafafa] transition-all duration-200"
              @click.stop="shopStore.toggleCompare(product)"
            >
              <svg
                class="w-[16px] h-[16px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </button>
            <button
              class="flex-1 h-[40px] flex items-center justify-center text-[#888] hover:text-[#c0392b] hover:bg-[#fafafa] transition-all duration-200"
              @click.stop="shopStore.openQuickView(product)"
            >
              <svg
                class="w-[16px] h-[16px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-1 flex-col border-t border-[#f3f3f3] bg-white px-4 pb-4 pt-3 text-center"
    >
      <h3
        class="cursor-pointer text-[12px] font-medium leading-snug text-[#666] transition-colors duration-200 line-clamp-2 hover:text-[#c0392b]"
      >
        {{ title }}
      </h3>

      <div class="mt-2 flex items-baseline justify-center gap-2">
        <UIPrice :price="price" :old-price="oldPrice" />
      </div>

      <div
        class="mt-3 flex items-center justify-center border-t border-[#f3f3f3] pt-3"
      >
        <div class="flex items-center gap-1.5 text-[#b9b9b9]">
          <button
            class="transition hover:text-[#c0392b]"
            :class="isWishlisted ? 'text-[#c0392b]' : ''"
            @click="shopStore.toggleWishlist(product)"
          >
            <svg
              class="h-[14px] w-[14px]"
              :fill="isWishlisted ? 'currentColor' : 'none'"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <span class="text-[#d9d9d9]">+</span>
          <button
            class="transition hover:text-[#c0392b]"
            :class="isCompared ? 'text-[#c0392b]' : ''"
            @click="shopStore.toggleCompare(product)"
          >
            <svg
              class="h-[14px] w-[14px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </button>
          <span class="text-[#d9d9d9]">+</span>
          <button
            class="transition hover:text-[#c0392b]"
            @click="shopStore.openQuickView(product)"
          >
            <svg
              class="h-[14px] w-[14px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>
