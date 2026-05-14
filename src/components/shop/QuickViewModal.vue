<script setup>
import { computed, ref, watch } from "vue";
import { shopStore } from "../../store/shop.js";

const qty = ref(1);

const product = computed(() => shopStore.state.quickViewProduct);

watch(product, (value) => {
  qty.value = value?.qty || 1;
});

function addToCart() {
  if (!product.value) return;
  shopStore.addToCart(product.value, {
    qty: qty.value,
    size: product.value.size,
    color: product.value.color,
  });
  shopStore.closeQuickView();
}
</script>

<template>
  <Teleport to="body">
    <transition name="quick-view-fade">
      <div
        v-if="product"
        class="fixed inset-0 z-[9999] bg-black/55 px-5 py-10"
        @click.self="shopStore.closeQuickView()"
      >
        <div
          class="site-shell relative mx-auto grid max-w-[980px] gap-8 bg-white p-6 shadow-2xl md:grid-cols-[1.05fr_0.95fr] md:p-8"
        >
          <button
            class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#ddd] text-[#666] transition hover:border-[#c0392b] hover:text-[#c0392b]"
            @click="shopStore.closeQuickView()"
            aria-label="Close quick view"
          >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="flex items-center justify-center bg-[#f8f5f0] p-6">
            <img :src="product.image" :alt="product.title" class="max-h-[420px] object-contain" />
          </div>

          <div class="flex flex-col justify-center">
            <p class="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#c0392b]">
              Quick View
            </p>
            <h2 class="mb-3 text-[32px] font-black uppercase leading-none text-[#222]">
              {{ product.title }}
            </h2>
            <div class="mb-5 flex items-center gap-3">
              <span class="text-[24px] font-bold text-[#222]">{{ product.priceLabel }}</span>
              <span v-if="product.oldPriceLabel" class="text-[14px] text-[#999] line-through">
                {{ product.oldPriceLabel }}
              </span>
            </div>
            <p class="mb-6 text-[13px] leading-7 text-[#6f6f6f]">
              A closer look at one of your selected items. Add it to cart right away or keep browsing.
            </p>

            <div class="mb-6 flex flex-wrap gap-4 text-[12px] uppercase tracking-[0.12em] text-[#666]">
              <span v-if="product.size">Size: <strong class="text-[#222]">{{ product.size }}</strong></span>
              <span v-if="product.color">Color: <strong class="text-[#222]">{{ product.color }}</strong></span>
            </div>

            <div class="mb-6 flex items-center gap-3">
              <div class="flex items-center border border-[#ddd]">
                <button class="px-3 py-2 text-[18px] text-[#555]" @click="qty > 1 && qty--">-</button>
                <input
                  v-model.number="qty"
                  type="number"
                  min="1"
                  class="w-14 border-x border-[#ddd] py-2 text-center text-[13px] outline-none"
                />
                <button class="px-3 py-2 text-[18px] text-[#555]" @click="qty++">+</button>
              </div>
              <button
                class="bg-[#222] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#c0392b]"
                @click="addToCart"
              >
                Add To Cart
              </button>
            </div>

            <div class="flex flex-wrap gap-3">
              <button
                class="border border-[#ddd] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#555] transition hover:border-[#c0392b] hover:text-[#c0392b]"
                @click="shopStore.toggleWishlist(product)"
              >
                {{ shopStore.isInWishlist(product.id) ? "Remove Wishlist" : "Add Wishlist" }}
              </button>
              <button
                class="border border-[#ddd] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#555] transition hover:border-[#c0392b] hover:text-[#c0392b]"
                @click="shopStore.toggleCompare(product)"
              >
                {{ shopStore.isInCompare(product.id) ? "Remove Compare" : "Add Compare" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.quick-view-fade-enter-active,
.quick-view-fade-leave-active {
  transition: opacity 0.2s ease;
}

.quick-view-fade-enter-from,
.quick-view-fade-leave-to {
  opacity: 0;
}
</style>
