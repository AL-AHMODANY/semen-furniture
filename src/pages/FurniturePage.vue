<script setup>
import { computed, ref } from "vue";
import {
  ArrowsRightLeftIcon,
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
  HeartIcon,
  HomeIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  StarIcon,
} from "@heroicons/vue/24/outline";
import BrandsSection from "../components/brands/BrandsSection.vue";
import ProductCard from "../components/products/ProductCard.vue";
import { shopStore } from "../store/shop.js";

import heroBannerImage from "../assets/images/image041.jpg";
import rec1 from "../assets/images/image005.jpg";
import rec2 from "../assets/images/image006.jpg";
import rec3 from "../assets/images/image010.jpg";
import rec4 from "../assets/images/image023.jpg";

const viewMode = ref("grid");
const priceMin = ref(1250);
const priceMax = ref(16000);
const PRICE_TOTAL = 20000;

const sliderLeft = computed(() => (priceMin.value / PRICE_TOTAL) * 100);
const sliderRight = computed(() => (priceMax.value / PRICE_TOTAL) * 100);

const categories = ref([
  { name: "Sofas & Couches", count: 12, checked: false },
  { name: "Living Room Furniture", count: 12, checked: false },
  { name: "Television Stands", count: 12, checked: false },
  { name: "Bedroom Furniture", count: 12, checked: false },
  { name: "Coffee Tables", count: 12, checked: false },
]);

const manufacturers = ref([
  { name: "Lamino", count: 12, checked: false },
  { name: "NOVA", count: 12, checked: false },
  { name: "AIO", count: 12, checked: false },
  { name: "MBM", count: 12, checked: false },
]);

const colors = ref([
  { name: "Red", hex: "#c0392b", count: 12, checked: false },
  { name: "Yellow", hex: "#ecc94b", count: 12, checked: false },
  { name: "Blue", hex: "#4299e1", count: 12, checked: false },
  { name: "Green", hex: "#48bb78", count: 12, checked: false },
]);

const recommended = [
  { id: "rec-1", title: "Modular Modern", img: rec1, price: "$ 540.00" },
  { id: "rec-2", title: "Modular Modern", img: rec2, price: "$ 540.00" },
  { id: "rec-3", title: "Modular Modern", img: rec3, price: "$ 540.00" },
  { id: "rec-4", title: "Modular Modern", img: rec4, price: "$ 540.00" },
];

const description =
  "Ut metus. Maecenas dapibus nibh eu est. Proin faucibus pharetra nibh. Integer aliquet tellus in felis. Quisque mi pede, imperdiet a, dapibus vel, bibendum rhoncus, nulla.";

const products = [
  {
    id: "f-1",
    title: "Modular Modern",
    img: rec1,
    price: "$ 540.00",
    oldPrice: "$ 600.00",
    badge: "SALE",
    rating: 4,
    bgColor: "bg-white",
  },
  {
    id: "f-2",
    title: "Modular Modern",
    img: rec2,
    price: "$ 540.00",
    oldPrice: "$ 600.00",
    badge: "NEW",
    rating: 3,
    bgColor: "bg-white",
  },
  {
    id: "f-3",
    title: "Modular Modern",
    img: rec3,
    price: "$ 540.00",
    oldPrice: "$ 600.00",
    badge: null,
    rating: 3,
    bgColor: "bg-white",
  },
  {
    id: "f-4",
    title: "Modular Modern",
    img: rec4,
    price: "$ 540.00",
    oldPrice: "$ 600.00",
    badge: "SALE",
    rating: 4,
    bgColor: "bg-white",
  },
  {
    id: "f-5",
    title: "Modular Modern",
    img: rec1,
    price: "$ 540.00",
    oldPrice: "$ 600.00",
    badge: null,
    rating: 3,
    bgColor: "bg-white",
  },
  {
    id: "f-6",
    title: "Modular Modern",
    img: rec2,
    price: "$ 540.00",
    oldPrice: "$ 600.00",
    badge: "NEW",
    rating: 4,
    bgColor: "bg-white",
  },
  {
    id: "f-7",
    title: "Modular Modern",
    img: rec3,
    price: "$ 540.00",
    oldPrice: "$ 600.00",
    badge: null,
    rating: 3,
    bgColor: "bg-white",
  },
  {
    id: "f-8",
    title: "Modular Modern",
    img: rec4,
    price: "$ 540.00",
    oldPrice: "$ 600.00",
    badge: "SALE",
    rating: 4,
    bgColor: "bg-white",
  },
];

function toggleWishlist(product) {
  shopStore.toggleWishlist(product);
}

function toggleCompare(product) {
  shopStore.toggleCompare(product);
}

function addToCart(product) {
  shopStore.addToCart(product);
}

function openQuickView(product) {
  shopStore.openQuickView(product);
}
</script>

<template>
  <main class="bg-white">
    <div class="border-b border-[#e8e8e8] bg-[#f7f7f7]">
      <div
        class="site-shell flex items-center gap-2 py-2 text-[12px] text-[#888]"
      >
        <HomeIcon class="h-3 w-3" />
        <span class="text-[#ccc]">/</span>
        <span class="font-medium text-[#555]">Furniture</span>
      </div>
    </div>

    <div class="site-shell flex flex-col gap-6 py-6 lg:flex-row">
      <aside class="hidden w-full lg:w-64 shrink-0 lg:block">
        <div class="mb-4 border border-[#e8e8e8] p-5">
          <h2
            class="mb-3 border-b border-dashed border-[#d8d8d8] pb-3 text-xl font-black uppercase text-[#222]"
          >
            Shop By
          </h2>

          <div class="mb-5">
            <h4 class="mb-3 text-sm font-bold uppercase text-[#333]">
              Categories
            </h4>
            <ul class="space-y-2.5">
              <li
                v-for="cat in categories"
                :key="cat.name"
                class="flex items-center justify-between"
              >
                <label class="group flex cursor-pointer items-center gap-2.5">
                  <input
                    v-model="cat.checked"
                    type="checkbox"
                    class="h-4 w-4 accent-[#c0392b]"
                  />
                  <span
                    class="text-sm text-[#666] transition group-hover:text-[#c0392b]"
                    >{{ cat.name }}</span
                  >
                </label>
                <span class="text-sm text-[#aaa]">({{ cat.count }})</span>
              </li>
            </ul>
          </div>

          <div class="mb-5 border-t border-dashed border-[#e4e4e4] pt-4">
            <h4 class="mb-3 text-sm font-bold uppercase text-[#333]">Price</h4>
            <div class="mb-4 flex items-center gap-2">
              <input
                v-model.number="priceMin"
                type="number"
                class="w-20 border border-[#ddd] px-2 py-1.5 text-sm outline-none focus:border-[#c0392b]"
              />
              <input
                v-model.number="priceMax"
                type="number"
                class="w-20 border border-[#ddd] px-2 py-1.5 text-sm outline-none focus:border-[#c0392b]"
              />
              <button
                class="bg-[#222] px-3 py-2 text-xs font-bold tracking-[0.14em] text-white transition hover:bg-[#c0392b]"
              >
                FILTER
              </button>
            </div>
            <div class="relative mx-2 mb-1 h-1.5 bg-[#ebebeb]">
              <div
                class="absolute h-full rounded bg-[#c0392b]"
                :style="{
                  left: sliderLeft + '%',
                  right: 100 - sliderRight + '%',
                }"
              ></div>
              <input
                v-model.number="priceMin"
                type="range"
                min="0"
                :max="PRICE_TOTAL"
                class="dual-range absolute h-full w-full cursor-pointer opacity-0"
                style="z-index: 3"
              />
              <input
                v-model.number="priceMax"
                type="range"
                min="0"
                :max="PRICE_TOTAL"
                class="dual-range absolute h-full w-full cursor-pointer opacity-0"
                style="z-index: 4"
              />
              <div
                class="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-sm border-2 border-[#c0392b] bg-white shadow"
                :style="{ left: sliderLeft + '%' }"
              ></div>
              <div
                class="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-sm border-2 border-[#c0392b] bg-white shadow"
                :style="{ left: sliderRight + '%' }"
              ></div>
            </div>
          </div>

          <div class="mb-5 border-t border-dashed border-[#e4e4e4] pt-4">
            <h4 class="mb-3 text-sm font-bold uppercase text-[#333]">
              Manufacturer
            </h4>
            <ul class="space-y-2.5">
              <li
                v-for="manufacturer in manufacturers"
                :key="manufacturer.name"
                class="flex items-center justify-between"
              >
                <label class="group flex cursor-pointer items-center gap-2.5">
                  <input
                    v-model="manufacturer.checked"
                    type="checkbox"
                    class="h-4 w-4 accent-[#c0392b]"
                  />
                  <span
                    class="text-sm text-[#666] transition group-hover:text-[#c0392b]"
                    >{{ manufacturer.name }}</span
                  >
                </label>
                <span class="text-sm text-[#aaa]"
                  >({{ manufacturer.count }})</span
                >
              </li>
            </ul>
          </div>

          <div class="border-t border-dashed border-[#e4e4e4] pt-4">
            <h4 class="mb-3 text-sm font-bold uppercase text-[#333]">Colors</h4>
            <ul class="space-y-2.5">
              <li
                v-for="color in colors"
                :key="color.name"
                class="flex items-center justify-between"
              >
                <label class="group flex cursor-pointer items-center gap-2.5">
                  <input
                    v-model="color.checked"
                    type="checkbox"
                    class="h-4 w-4 accent-[#c0392b]"
                  />
                  <span
                    class="inline-block h-3.5 w-3.5"
                    :style="{ backgroundColor: color.hex }"
                  ></span>
                  <span
                    class="text-sm text-[#666] transition group-hover:text-[#c0392b]"
                    >{{ color.name }}</span
                  >
                </label>
                <span class="text-sm text-[#aaa]">({{ color.count }})</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="relative mb-4 overflow-hidden">
          <img
            :src="heroBannerImage"
            alt="Big deal banner"
            class="h-52 w-full object-cover"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center pl-7 text-white"
            style="
              background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.6) 50%,
                transparent 100%
              );
            "
          >
            <span class="mb-1 text-sm font-medium">Big deal</span>
            <span class="text-5xl font-black leading-none">-30%</span>
            <span class="mt-2 text-sm font-bold tracking-[0.3em]"
              >ON WEEKEND</span
            >
          </div>
        </div>

        <div class="border border-[#e8e8e8] p-5">
          <div
            class="mb-3 flex items-center justify-between border-b border-dashed border-[#e4e4e4] pb-3"
          >
            <h4 class="text-lg font-black uppercase text-[#222]">Recommend</h4>
            <div class="flex gap-1">
              <button
                class="flex h-7 w-7 items-center justify-center border border-[#ddd] transition hover:border-[#c0392b] hover:text-[#c0392b]"
              >
                <ChevronLeftIcon class="h-3.5 w-3.5 text-[#777]" />
              </button>
              <button
                class="flex h-7 w-7 items-center justify-center border border-[#ddd] transition hover:border-[#c0392b] hover:text-[#c0392b]"
              >
                <ChevronRightIcon class="h-3.5 w-3.5 text-[#777]" />
              </button>
            </div>
          </div>
          <ul class="space-y-4">
            <li
              v-for="item in recommended"
              :key="item.id"
              class="group flex items-center gap-3 border-b border-[#f1f1f1] pb-4 last:border-0 last:pb-0"
            >
              <div
                class="flex h-20 w-24 shrink-0 items-center justify-center border border-[#e8e8e8] bg-[#fafafa] p-1"
              >
                <img
                  :src="item.img"
                  :alt="item.title"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <p
                  class="mb-0.5 text-sm font-semibold text-[#666] transition group-hover:text-[#c0392b]"
                >
                  {{ item.title }}
                </p>
                <p class="mb-1 text-sm font-bold text-[#222]">
                  {{ item.price }}
                </p>
                <button
                  class="flex items-center gap-1 text-xs text-[#777] transition hover:text-[#c0392b]"
                  @click="addToCart(item)"
                >
                  <ShoppingCartIcon class="h-3 w-3" />
                  ADD TO CART
                </button>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div class="min-w-0 flex-1">
        <div class="mb-5 overflow-hidden">
          <img
            :src="heroBannerImage"
            alt="Furniture banner"
            class="h-52 w-full object-cover"
          />
        </div>

        <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <button
              class="flex h-8 w-8 items-center justify-center border-2 transition"
              :class="
                viewMode === 'grid'
                  ? 'border-[#c0392b] bg-[#c0392b] text-white'
                  : 'border-[#ddd] text-[#777] hover:border-[#c0392b]'
              "
              @click="viewMode = 'grid'"
            >
              <Squares2X2Icon class="h-4 w-4" />
            </button>
            <button
              class="flex h-8 w-8 items-center justify-center border-2 transition"
              :class="
                viewMode === 'list'
                  ? 'border-[#c0392b] bg-[#c0392b] text-white'
                  : 'border-[#ddd] text-[#777] hover:border-[#c0392b]'
              "
              @click="viewMode = 'list'"
            >
              <Bars3Icon class="h-4 w-4" />
            </button>
            <span class="ml-1 text-sm text-[#777]"
              >{{ products.length }} item(s)</span
            >
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <div class="flex items-center gap-2">
              <span class="text-sm text-[#777]">Sort by</span>
              <select
                class="border border-[#ddd] px-2 py-1.5 text-sm text-[#666] outline-none focus:border-[#c0392b]"
              >
                <option>Position</option>
                <option>Name</option>
                <option>Price</option>
              </select>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm text-[#777]">Show</span>
              <select
                class="border border-[#ddd] px-2 py-1.5 text-sm text-[#666] outline-none focus:border-[#c0392b]"
              >
                <option>20</option>
                <option>40</option>
                <option>60</option>
              </select>
            </div>
          </div>
        </div>

        <div
          v-if="viewMode === 'grid'"
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :id="product.id"
            :title="product.title"
            :img="product.img"
            :price="product.price"
            :old-price="product.oldPrice"
            :show-new="product.badge === 'NEW'"
            :show-sale="product.badge === 'SALE'"
            :bg-color="product.bgColor"
          />
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="product in products"
            :key="product.id"
            class="group flex flex-col gap-5 border border-[#e8e8e8] bg-white p-4 transition hover:border-[#d2d2d2] hover:shadow-sm sm:flex-row"
          >
            <div
              class="flex h-40 w-full sm:w-44 shrink-0 items-center justify-center border border-[#f0f0f0] bg-[#fafafa] p-3"
            >
              <img
                :src="product.img"
                :alt="product.title"
                class="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
            <div class="min-w-0 flex-1 py-1">
              <h3
                class="mb-1 text-base font-bold text-[#333] transition hover:text-[#c0392b]"
              >
                {{ product.title }}
              </h3>
              <div class="mb-1.5 flex items-center gap-2">
                <span class="text-base font-bold text-[#222]">{{
                  product.price
                }}</span>
                <span class="text-sm text-[#aaa] line-through">{{
                  product.oldPrice
                }}</span>
              </div>
              <div class="mb-2 flex items-center gap-1">
                <div class="flex">
                  <StarIcon
                    v-for="star in 5"
                    :key="star"
                    :class="
                      star <= product.rating
                        ? 'text-yellow-400'
                        : 'text-[#d7d7d7]'
                    "
                    class="h-3.5 w-3.5 fill-current"
                  />
                </div>
                <span class="text-xs text-[#aaa]">(1 Reviews)</span>
              </div>
              <p class="mb-3 max-w-xl text-sm leading-relaxed text-[#777]">
                {{ description }}
              </p>
              <div class="flex items-center gap-3">
                <button
                  class="border border-[#ddd] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#444] transition hover:border-[#c0392b] hover:bg-[#c0392b] hover:text-white"
                  @click="addToCart(product)"
                >
                  Add To Cart
                </button>
                <button
                  class="flex h-8 w-8 items-center justify-center border border-[#ddd] text-[#888] transition hover:border-[#c0392b] hover:text-[#c0392b]"
                  @click="toggleWishlist(product)"
                >
                  <HeartIcon class="h-4 w-4" />
                </button>
                <button
                  class="flex h-8 w-8 items-center justify-center border border-[#ddd] text-[#888] transition hover:border-[#c0392b] hover:text-[#c0392b]"
                  @click="toggleCompare(product)"
                >
                  <ArrowsRightLeftIcon class="h-4 w-4" />
                </button>
                <button
                  class="flex h-8 w-8 items-center justify-center border border-[#ddd] text-[#888] transition hover:border-[#c0392b] hover:text-[#c0392b]"
                  @click="openQuickView(product)"
                >
                  <EyeIcon class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BrandsSection />
  </main>
</template>

<style scoped>
.dual-range {
  pointer-events: none;
}

.dual-range::-webkit-slider-thumb {
  pointer-events: all;
}

.dual-range::-moz-range-thumb {
  pointer-events: all;
}
</style>
