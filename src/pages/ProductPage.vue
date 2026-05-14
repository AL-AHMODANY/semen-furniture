<script setup>
import { computed, ref } from "vue";
import ProductCard from "../components/products/ProductCard.vue";
import UIBadge from "../components/ui/UIBadge.vue";
import { shopStore } from "../store/shop.js";

import main1 from "../assets/images/image013.jpg";
import main2 from "../assets/images/image005.jpg";
import main3 from "../assets/images/image008.jpg";
import main4 from "../assets/images/image010.jpg";
import side1 from "../assets/images/image006.jpg";
import side2 from "../assets/images/image011.jpg";
import side3 from "../assets/images/image012.jpg";
import side4 from "../assets/images/image023.jpg";

const gallery = [main1, main2, main3, main4];
const mainImage = ref(gallery[0]);
const selectedSize = ref("M");
const selectedColor = ref("Walnut");
const qty = ref(1);
const activeTab = ref("description");
const reviewSubmitted = ref(false);
const review = ref({
  nickname: "",
  summary: "",
  body: "",
});

const product = computed(() => ({
  id: "modular-modern-main",
  title: "Modular Modern",
  img: mainImage.value,
  price: "$ 540.00",
  oldPrice: "$ 600.00",
  size: selectedSize.value,
  color: selectedColor.value,
}));

const bestSale = [
  { id: "best-1", title: "Modern Desk", img: side1, price: "$ 540.00" },
  { id: "best-2", title: "Accent Sofa", img: side2, price: "$ 540.00" },
  { id: "best-3", title: "Blue Sofa", img: side3, price: "$ 540.00" },
  { id: "best-4", title: "Round Table", img: side4, price: "$ 540.00" },
];

const upsellItems = [
  { id: "upsell-1", title: "Blue Office Chair", img: side1, price: "$ 540.00", showNew: true, bgColor: "bg-[#eef2f4]" },
  { id: "upsell-2", title: "Accent Sofa", img: side2, price: "$ 540.00", showSale: true, oldPrice: "$ 620.00", bgColor: "bg-[#f5f0ea]" },
  { id: "upsell-3", title: "Blue Modern Sofa", img: side3, price: "$ 540.00", showNew: true, showSale: true, oldPrice: "$ 600.00", bgColor: "bg-[#eef2f8]" },
  { id: "upsell-4", title: "Round Table", img: side4, price: "$ 540.00", bgColor: "bg-[#f5f2ee]" },
];

const relatedItems = [
  { id: "related-1", title: "Wooden Chair", img: main2, price: "$ 540.00", showSale: true, oldPrice: "$ 600.00", bgColor: "bg-[#f7f2eb]" },
  { id: "related-2", title: "Brown Desk", img: main3, price: "$ 540.00", bgColor: "bg-[#f5f0e8]" },
  { id: "related-3", title: "Leather Sofa", img: main4, price: "$ 540.00", showNew: true, bgColor: "bg-[#f5f0e8]" },
  { id: "related-4", title: "Blue Office Chair", img: side1, price: "$ 540.00", showNew: true, bgColor: "bg-[#eef2f4]" },
];

function addMainToCart() {
  shopStore.addToCart(product.value, {
    qty: qty.value,
    size: selectedSize.value,
    color: selectedColor.value,
  });
}

function submitReview() {
  if (!review.value.nickname || !review.value.summary || !review.value.body) return;
  reviewSubmitted.value = true;
  review.value = { nickname: "", summary: "", body: "" };
  setTimeout(() => {
    reviewSubmitted.value = false;
  }, 3000);
}
</script>

<template>
  <main class="bg-white text-[#333]">
    <div class="border-b border-[#e8e8e8] bg-[#f7f7f7]">
      <div class="site-shell flex items-center gap-2 py-2 text-[12px] text-[#888]">
        <span>Home</span>
        <span class="text-[#ccc]">/</span>
        <span class="font-medium text-[#555]">Modular Modern</span>
      </div>
    </div>

    <section class="site-shell py-8 md:py-10">
      <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div class="relative flex h-[420px] items-center justify-center border border-[#e8e8e8] bg-white p-6">
            <UIBadge :show-sale="true" />
            <img :src="mainImage" alt="Modular Modern" class="max-h-full object-contain" />
          </div>

          <div class="mt-3 grid grid-cols-4 gap-3">
            <button
              v-for="image in gallery"
              :key="image"
              class="border p-2 transition"
              :class="mainImage === image ? 'border-[#c0392b]' : 'border-[#e8e8e8] hover:border-[#c0392b]'"
              @click="mainImage = image"
            >
              <img :src="image" alt="Product thumbnail" class="h-20 w-full object-contain" />
            </button>
          </div>
        </div>

        <div>
          <p class="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#c0392b]">
            Featured Product
          </p>
          <h1 class="text-[34px] font-black uppercase leading-none text-[#222] md:text-[42px]">
            Modular Modern
          </h1>
          <div class="mt-4 flex items-center gap-3">
            <span class="text-[26px] font-bold text-[#222]">$ 540.00</span>
            <span class="text-[15px] text-[#999] line-through">$ 600.00</span>
          </div>
          <p class="mt-3 text-[13px] text-[#6b6b6b]">
            Availability: <span class="font-semibold text-[#4f8a10]">In stock</span>
          </p>
          <p class="mt-5 max-w-[620px] text-[13px] leading-7 text-[#6f6f6f]">
            Lorem ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <label class="text-[12px] font-bold uppercase tracking-[0.12em] text-[#444]">
              Size
              <select v-model="selectedSize" class="mt-2 w-full border border-[#ddd] px-4 py-3 text-[13px] font-normal outline-none focus:border-[#c0392b]">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </label>
            <label class="text-[12px] font-bold uppercase tracking-[0.12em] text-[#444]">
              Color
              <select v-model="selectedColor" class="mt-2 w-full border border-[#ddd] px-4 py-3 text-[13px] font-normal outline-none focus:border-[#c0392b]">
                <option>Walnut</option>
                <option>Black</option>
                <option>Oak</option>
                <option>White</option>
              </select>
            </label>
          </div>

          <div class="mt-6 flex flex-wrap items-center gap-3">
            <div class="flex items-center border border-[#ddd]">
              <button class="px-3 py-2 text-[18px] text-[#555]" @click="qty > 1 && qty--">-</button>
              <input v-model.number="qty" type="number" min="1" class="w-14 border-x border-[#ddd] py-2 text-center text-[13px] outline-none" />
              <button class="px-3 py-2 text-[18px] text-[#555]" @click="qty++">+</button>
            </div>
            <button class="bg-[#222] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#c0392b]" @click="addMainToCart">
              Add To Cart
            </button>
            <button class="border border-[#ddd] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#555] transition hover:border-[#c0392b] hover:text-[#c0392b]" @click="shopStore.toggleWishlist(product)">
              {{ shopStore.isInWishlist(product.id) ? "Wishlisted" : "Wishlist" }}
            </button>
            <button class="border border-[#ddd] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#555] transition hover:border-[#c0392b] hover:text-[#c0392b]" @click="shopStore.openQuickView(product)">
              Quick View
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="site-shell pb-12">
      <div class="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside class="space-y-6">
          <div class="border border-[#e8e8e8] bg-white">
            <div class="border-b border-[#e8e8e8] px-4 py-4">
              <h2 class="text-[14px] font-bold uppercase tracking-[0.14em] text-[#222]">Best Sale</h2>
            </div>
            <div class="space-y-4 p-4">
              <div v-for="item in bestSale" :key="item.id" class="flex items-center gap-3">
                <div class="h-16 w-16 border border-[#e8e8e8] bg-[#faf8f5] p-2">
                  <img :src="item.img" :alt="item.title" class="h-full w-full object-contain" />
                </div>
                <div class="flex-1">
                  <p class="text-[13px] font-semibold text-[#444]">{{ item.title }}</p>
                  <p class="text-[12px] text-[#222]">{{ item.price }}</p>
                  <button class="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#888] transition hover:text-[#c0392b]" @click="shopStore.addToCart(item)">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="relative overflow-hidden bg-[#1f1f1f] px-6 py-10 text-center text-white">
            <p class="text-[13px]">Big deal</p>
            <p class="text-[46px] font-black leading-none">-30%</p>
            <p class="text-[11px] font-bold uppercase tracking-[0.3em]">On Weekend</p>
          </div>
        </aside>

        <div>
          <div class="mb-6 flex flex-wrap border-b border-[#e8e8e8]">
            <button
              v-for="tab in [
                { id: 'description', label: 'Product Description' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'tags', label: 'Product Tags' }
              ]"
              :key="tab.id"
              class="relative px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] transition"
              :class="activeTab === tab.id ? 'text-[#222]' : 'text-[#888] hover:text-[#c0392b]'"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
              <span v-if="activeTab === tab.id" class="absolute inset-x-0 bottom-0 h-0.5 bg-[#c0392b]"></span>
            </button>
          </div>

          <div class="border border-[#e8e8e8] bg-white p-6 text-[13px] leading-7 text-[#6f6f6f]">
            <div v-if="activeTab === 'description'">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
            <div v-else-if="activeTab === 'reviews'" class="max-w-xl">
              <div class="space-y-4">
                <input v-model="review.nickname" type="text" placeholder="Nickname" class="w-full border border-[#ddd] px-4 py-3 outline-none focus:border-[#c0392b]" />
                <input v-model="review.summary" type="text" placeholder="Summary" class="w-full border border-[#ddd] px-4 py-3 outline-none focus:border-[#c0392b]" />
                <textarea v-model="review.body" rows="4" placeholder="Review" class="w-full border border-[#ddd] px-4 py-3 outline-none focus:border-[#c0392b]"></textarea>
                <button class="bg-[#222] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#c0392b]" @click="submitReview">
                  Submit Review
                </button>
                <p v-if="reviewSubmitted" class="text-[12px] font-semibold text-[#4f8a10]">Review submitted.</p>
              </div>
            </div>
            <div v-else class="flex flex-wrap gap-2">
              <span v-for="tag in ['Modern', 'Chair', 'Furniture', 'Living Room', 'Wood']" :key="tag" class="border border-[#ddd] px-3 py-1 text-[12px] text-[#666]">
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="mb-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#222]">Upsell Products</h2>
            <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <ProductCard v-for="item in upsellItems" :key="item.id" v-bind="item" />
            </div>
          </div>

          <div class="mt-10">
            <h2 class="mb-4 text-[14px] font-bold uppercase tracking-[0.14em] text-[#222]">Related Products</h2>
            <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <ProductCard v-for="item in relatedItems" :key="item.id" v-bind="item" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
