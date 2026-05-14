<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import BrandsSection from "../components/brands/BrandsSection.vue";
import { shopStore } from "../store/shop.js";

import heroMain from "../assets/images/image 001.jpg";
import heroSideTop from "../assets/images/image006.jpg";
import heroSideBottom from "../assets/images/image 003.jpg";
import promoLeft from "../assets/images/image0002.png";
import promoRight from "../assets/images/image0003.png";
import stripLeft from "../assets/images/image038.jpg";
import stripRight from "../assets/images/image040.jpg";
import blogImage from "../assets/images/image026.jpg";

import imgDesk from "../assets/images/image005.jpg";
import imgOfficeChair from "../assets/images/image006.jpg";
import imgWoodenChair from "../assets/images/image007.jpg";
import imgBrownDesk from "../assets/images/image008.jpg";
import imgClassicChair from "../assets/images/image009.jpg";
import imgLeatherSofa from "../assets/images/image010.jpg";
import imgAccentChair from "../assets/images/image011.jpg";
import imgBlueSofa from "../assets/images/image012.jpg";
import imgBlackStool from "../assets/images/image013.jpg";
import imgOrangeSofa from "../assets/images/image020.jpg";
import imgRoundTable from "../assets/images/image023.jpg";
import imgMostViewedOne from "../assets/images/image027.jpg";
import imgMostViewedTwo from "../assets/images/image24.jpg";
import imgMostViewedThree from "../assets/images/image030.jpg";
import imgMostViewedFour from "../assets/images/image022.jpg";
import imgMostViewedFive from "../assets/images/image031.jpg";
import imgMostViewedSix from "../assets/images/image032.jpg";

const heroSlides = [
  {
    id: 1,
    image: heroMain,
    eyebrow: "Furniture",
    title: "Wood Style",
    cta: "Shop Now",
    discount: "-30%",
  },
  {
    id: 2,
    image: promoLeft,
    eyebrow: "Living Room",
    title: "Modern Comfort",
    cta: "Explore",
    discount: "-20%",
  },
  {
    id: 3,
    image: promoRight,
    eyebrow: "Office Picks",
    title: "Work Smart",
    cta: "Discover",
    discount: "-15%",
  },
];

const categories = [
  "Sofas & Couches",
  "Living Room Furniture",
  "Television Stands",
  "Bedroom Furniture",
  "Coffee Tables",
  "Kitchen & Dining Room",
  "Chests of Drawers",
  "Ottomans",
  "Kids Furniture & Decor",
  "Media Storage",
];

function makeProduct(id, title, img, price, oldPrice = "", options = {}) {
  return {
    id,
    title,
    img,
    price,
    oldPrice,
    badge: options.badge || "",
  };
}

const productPool = [
  makeProduct("p-1", "Modular Modern", imgOrangeSofa, "$ 540.00", "$ 600.00", {
    badge: "sale",
  }),
  makeProduct("p-2", "Wood Modern", imgRoundTable, "$ 540.00", "$ 600.00", {
    badge: "new",
  }),
  makeProduct("p-3", "Modular Modern", imgBlueSofa, "$ 540.00", "$ 600.00", {
    badge: "new",
  }),
  makeProduct("p-4", "Modular Modern", imgLeatherSofa, "$ 540.00"),
  makeProduct("p-5", "Brown Desk", imgBrownDesk, "$ 540.00", "$ 600.00", {
    badge: "sale",
  }),
  makeProduct("p-6", "Classic Chair", imgClassicChair, "$ 540.00"),
  makeProduct("p-7", "Accent Chair", imgAccentChair, "$ 540.00"),
  makeProduct("p-8", "Black Stool", imgBlackStool, "$ 540.00", "$ 600.00", {
    badge: "new",
  }),
  makeProduct("p-9", "Modern Desk", imgDesk, "$ 540.00"),
  makeProduct("p-10", "Office Chair", imgOfficeChair, "$ 540.00"),
  makeProduct("p-11", "Wooden Chair", imgWoodenChair, "$ 540.00", "$ 600.00", {
    badge: "sale",
  }),
  makeProduct("p-12", "Leather Sofa", imgLeatherSofa, "$ 540.00"),
  makeProduct("p-13", "Round Table", imgRoundTable, "$ 540.00", "$ 600.00", {
    badge: "sale",
  }),
  makeProduct("p-14", "Blue Office Chair", imgOfficeChair, "$ 540.00"),
  makeProduct("p-15", "Blue Modern Sofa", imgBlueSofa, "$ 540.00", "$ 600.00", {
    badge: "new",
  }),
  makeProduct("p-16", "Modern Stool", imgBlackStool, "$ 540.00"),
  makeProduct("p-17", "Accent Sofa", imgMostViewedOne, "$ 540.00"),
  makeProduct(
    "p-18",
    "Coffee Table",
    imgMostViewedTwo,
    "$ 540.00",
    "$ 600.00",
    { badge: "sale" },
  ),
  makeProduct("p-19", "Executive Chair", imgMostViewedThree, "$ 540.00"),
  makeProduct("p-20", "Relax Chair", imgMostViewedFour, "$ 540.00"),
];

const sofaTabs = [
  "Chair",
  "Table",
  "Outdoor",
  "Test Item",
  "Kitchen",
  "Living Room",
];
const activeSofaTab = ref("Chair");

const bestSellSidebar = [
  makeProduct("bs-1", "Modular Modern", imgBlackStool, "$ 540.00"),
  makeProduct("bs-2", "Modular Modern", imgOfficeChair, "$ 540.00"),
  makeProduct("bs-3", "Modular Modern", imgClassicChair, "$ 540.00"),
];

const bestSellMain = [
  makeProduct("bm-1", "Modular Modern", imgRoundTable, "$ 540.00", "$ 600.00", {
    badge: "sale",
  }),
  makeProduct("bm-2", "Wood Modern", imgBrownDesk, "$ 540.00", "$ 600.00", {
    badge: "sale",
  }),
  makeProduct("bm-3", "Modular Modern", imgMostViewedSix, "$ 540.00"),
  makeProduct("bm-4", "Modular Modern", heroSideTop, "$ 540.00", "$ 600.00", {
    badge: "new",
  }),
  makeProduct("bm-5", "Modular Modern", imgOfficeChair, "$ 540.00"),
  makeProduct("bm-6", "Modular Modern", imgRoundTable, "$ 540.00"),
  makeProduct("bm-7", "Wood Modern", imgBrownDesk, "$ 540.00", "$ 600.00"),
  makeProduct("bm-8", "Modern Chair", imgMostViewedSix, "$ 540.00"),
  makeProduct("bm-9", "Office Chair", heroSideTop, "$ 540.00"),
  makeProduct("bm-10", "Classic Chair", imgClassicChair, "$ 540.00"),
];

const suggestTabs = [
  { name: "Office View", icon: "desk" },
  { name: "Outdoor Table", icon: "table" },
  { name: "Coffee Chair", icon: "chair" },
  { name: "Decoration", icon: "box" },
  { name: "Leather Sofa", icon: "sofa" },
  { name: "Office View", icon: "chair" },
  { name: "Computer View", icon: "monitor" },
  { name: "Office View", icon: "box" },
];
const activeSuggestTab = ref("Office View");

const suggestItems = [
  makeProduct("sg-1", "Modular Modern", imgRoundTable, "$ 540.00", "$ 600.00", {
    badge: "sale",
  }),
  makeProduct("sg-2", "Wood Modern", imgBrownDesk, "$ 540.00", "$ 600.00", {
    badge: "sale",
  }),
  makeProduct("sg-3", "Modular Modern", imgMostViewedSix, "$ 540.00"),
  makeProduct("sg-4", "Modular Modern", heroSideTop, "$ 540.00"),
  makeProduct("sg-5", "Modular Modern", imgOfficeChair, "$ 540.00"),
];

const posts = [
  {
    id: "post-1",
    title: "Lorem Ipsum has been the industry's",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    day: "08",
    month: "Jan",
    image: blogImage,
  },
];

const currentSlide = ref(0);
const hoveredProduct = ref(null);
const toast = ref("");
const countdowns = ref([
  { days: "365", hours: "24", mins: "59", secs: "28" },
  { days: "365", hours: "24", mins: "59", secs: "28" },
  { days: "365", hours: "24", mins: "59", secs: "28" },
]);

const sofaRows = computed(() => {
  const rows = [];
  for (let index = 0; index < productPool.length; index += 5) {
    rows.push(productPool.slice(index, index + 5));
  }
  return rows.slice(0, 3);
});

let slideTimer;
let countdownTimer;
let toastTimer;

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length;
}

function goToSlide(index) {
  currentSlide.value = index;
}

function tickCountdown(item) {
  let total =
    Number(item.days) * 86400 +
    Number(item.hours) * 3600 +
    Number(item.mins) * 60 +
    Number(item.secs);

  total = total <= 0 ? 365 * 86400 : total - 1;

  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const mins = Math.floor((total % 3600) / 60);
  const secs = total % 60;

  item.days = String(days).padStart(3, "0");
  item.hours = String(hours).padStart(2, "0");
  item.mins = String(mins).padStart(2, "0");
  item.secs = String(secs).padStart(2, "0");
}

function showToast(message) {
  toast.value = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.value = "";
  }, 2200);
}

function addToCart(product) {
  shopStore.addToCart(product);
  showToast(`${product.title} added to cart`);
}

function toggleWishlist(product) {
  const added = shopStore.toggleWishlist(product);
  showToast(
    added
      ? `${product.title} added to wishlist`
      : `${product.title} removed from wishlist`,
  );
}

function isWishlisted(productId) {
  return shopStore.isInWishlist(productId);
}

function iconPath(type) {
  if (type === "desk") {
    return "M4 6h16M6 10h12M7 14h10M8 18h8";
  }
  if (type === "table") {
    return "M4 8h16M7 8v10M17 8v10";
  }
  if (type === "monitor") {
    return "M4 6h16v10H4zM10 20h4M8 16h8";
  }
  if (type === "sofa") {
    return "M5 12h14v5H5zM7 9h10v3H7zM6 17v2M18 17v2";
  }
  if (type === "chair") {
    return "M8 5h8v6H8zM8 11l-2 8M16 11l2 8M8 14h8";
  }
  return "M6 6h12v12H6zM9 9h6v6H9z";
}

onMounted(() => {
  slideTimer = setInterval(nextSlide, 4500);
  countdownTimer = setInterval(() => {
    countdowns.value.forEach(tickCountdown);
  }, 1000);
});

onUnmounted(() => {
  clearInterval(slideTimer);
  clearInterval(countdownTimer);
  clearTimeout(toastTimer);
});
</script>

<template>
  <main class="bg-white text-[#444]">
    <section class="border-b border-[#ececec] bg-[#fbfbfb]">
      <div class="site-shell py-5 lg:py-6">
        <div class="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside class="hidden lg:block border border-[#ececec] bg-white">
            <div
              class="border-b border-[#ececec] px-4 py-3 text-[13px] font-black uppercase text-[#222]"
            >
              All Categories
            </div>
            <ul class="py-1">
              <li v-for="category in categories" :key="category">
                <a
                  href="#"
                  class="flex items-center justify-between px-4 py-2 text-[12px] text-[#666] transition hover:bg-[#fafafa] hover:text-[#c0392b]"
                >
                  <span>{{ category }}</span>
                  <span class="text-[#bbb]">+</span>
                </a>
              </li>
            </ul>
          </aside>

          <div class="grid gap-4 lg:grid-cols-[minmax(0,1fr)_190px]">
            <div class="relative overflow-hidden bg-[#f6f3ef]">
              <img
                :src="heroSlides[currentSlide].image"
                :alt="heroSlides[currentSlide].title"
                class="h-[240px] w-full object-cover md:h-[320px]"
              />
              <div
                class="absolute inset-0 bg-gradient-to-r from-white/80 via-white/25 to-transparent"
              ></div>
              <div
                class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5"
              >
                <button
                  v-for="(slide, index) in heroSlides"
                  :key="slide.id"
                  class="h-2.5 w-2.5 border border-[#666] transition"
                  :class="index === currentSlide ? 'bg-[#c0392b]' : 'bg-white'"
                  @click="goToSlide(index)"
                ></button>
              </div>
            </div>

            <div class="grid gap-4">
              <article class="relative overflow-hidden bg-[#f8f3f1]">
                <img
                  :src="heroSideTop"
                  alt="Sofa Italia"
                  class="h-[152px] w-full object-cover"
                />
                <div class="absolute inset-0 bg-white/30"></div>
                <div
                  class="absolute right-3 top-3 flex h-13 w-13 items-center justify-center rounded-full bg-white/90 text-[14px] font-bold text-[#b0b0b0]"
                >
                  -15%
                </div>
              </article>

              <article class="relative overflow-hidden bg-[#efe7f0]">
                <img
                  :src="heroSideBottom"
                  alt="Purple sofa"
                  class="h-[152px] w-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[#4d284c]/45 to-transparent"
                ></div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="site-shell py-6">
      <div class="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside class="space-y-5">
          <div
            v-for="(timer, index) in countdowns"
            :key="index"
            class="border border-[#ececec] bg-white"
          >
            <div
              class="border-b border-[#ececec] px-4 py-3 text-[13px] font-black uppercase text-[#222]"
            >
              Deal Of Day
            </div>
            <div class="p-4">
              <img
                :src="imgBrownDesk"
                alt="Deal"
                class="mx-auto h-32 w-full object-contain"
              />
              <div
                class="mt-4 flex items-center justify-between gap-1 bg-[#d84c47] px-2 py-2 text-white"
              >
                <span class="text-[9px] font-bold uppercase"
                  >{{ timer.days }} days</span
                >
                <span class="text-[9px] font-bold uppercase"
                  >{{ timer.hours }} : {{ timer.mins }} : {{ timer.secs }}</span
                >
              </div>
              <button
                class="mt-3 w-full bg-[#2d2d2d] py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#c0392b]"
              >
                Click Here
              </button>
            </div>
          </div>

          <div class="border border-[#ececec] bg-white">
            <div
              class="border-b border-[#ececec] px-4 py-3 text-[13px] font-black uppercase text-[#222]"
            >
              Best Sell
            </div>
            <div class="divide-y divide-[#f0f0f0]">
              <div
                v-for="item in bestSellSidebar"
                :key="item.id"
                class="flex gap-3 p-4"
              >
                <img
                  :src="item.img"
                  :alt="item.title"
                  class="h-16 w-18 bg-[#fafafa] object-cover"
                />
                <div class="min-w-0">
                  <p class="text-[12px] text-[#555]">{{ item.title }}</p>
                  <p class="mt-1 text-[13px] font-bold text-[#222]">
                    {{ item.price }}
                  </p>
                  <button
                    class="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#999] transition hover:text-[#c0392b]"
                    @click="addToCart(item)"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="border border-[#ececec] bg-white">
            <div
              class="border-b border-[#ececec] px-4 py-3 text-[13px] font-black uppercase text-[#222]"
            >
              Latest Posts
            </div>
            <div class="p-4">
              <article
                v-for="post in posts"
                :key="post.id"
                class="group flex gap-3"
              >
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="h-20 w-20 object-cover"
                />
                <div class="min-w-0">
                  <div class="flex items-start gap-2">
                    <div class="bg-[#f5f5f5] px-2 py-1 text-center text-[#444]">
                      <div class="text-[16px] font-black leading-none">
                        {{ post.day }}
                      </div>
                      <div class="text-[9px] uppercase">{{ post.month }}</div>
                    </div>
                    <div>
                      <h3
                        class="text-[12px] font-bold leading-5 text-[#444] transition group-hover:text-[#c0392b]"
                      >
                        {{ post.title }}
                      </h3>
                      <p class="mt-1 text-[10px] leading-4 text-[#999]">
                        {{ post.excerpt }}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </aside>

        <div class="space-y-8">
          <section>
            <div
              class="flex flex-wrap items-center justify-between gap-4 border-b border-[#ededed] pb-3"
            >
              <h2
                class="text-[20px] font-black uppercase tracking-[0.04em] text-[#222]"
              >
                Sofas
              </h2>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="tab in sofaTabs"
                  :key="tab"
                  class="text-[10px] font-bold uppercase tracking-[0.16em] transition"
                  :class="
                    activeSofaTab === tab
                      ? 'text-[#c0392b]'
                      : 'text-[#999] hover:text-[#222]'
                  "
                  @click="activeSofaTab = tab"
                >
                  {{ tab }}
                </button>
              </div>
            </div>

            <div class="mt-4 space-y-4">
              <div
                v-for="(row, rowIndex) in sofaRows"
                :key="rowIndex"
                class="grid gap-4 sm:grid-cols-2 xl:grid-cols-5"
              >
                <article
                  v-for="product in row"
                  :key="product.id"
                  class="group relative overflow-hidden border border-[#ececec] bg-white"
                  @mouseenter="hoveredProduct = product.id"
                  @mouseleave="hoveredProduct = null"
                >
                  <div class="absolute left-2 top-2 z-10 flex flex-col gap-1">
                    <span
                      v-if="product.badge === 'new'"
                      class="bg-[#64a8f5] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white"
                    >
                      New
                    </span>
                    <span
                      v-if="product.badge === 'sale'"
                      class="bg-[#e25c57] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white"
                    >
                      Sale
                    </span>
                  </div>

                  <div
                    class="flex h-44 items-center justify-center bg-white p-4"
                  >
                    <img
                      :src="product.img"
                      :alt="product.title"
                      class="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div
                    class="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                  >
                    <div class="bg-white">
                      <button
                        class="w-full bg-[#2d2d2d] px-7 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#c0392b]"
                        @click.stop="addToCart(product)"
                      >
                        Add To Cart
                      </button>
                      <div class="flex bg-[#fafafa] border-t border-[#e8e8e8]">
                        <button
                          class="flex-1 h-[40px] flex items-center justify-center border-r border-[#e8e8e8] text-[#888] hover:text-[#c0392b] hover:bg-[#fafafa] transition-all duration-200"
                          :class="
                            isWishlisted(product.id) ? 'text-[#c0392b]' : ''
                          "
                          @click.stop="toggleWishlist(product)"
                          title="Add to Wishlist"
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
                          title="Add to Compare"
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
                          title="Quick view"
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

                  <div
                    class="border-t border-[#f2f2f2] px-4 pb-4 pt-3 text-center"
                  >
                    <h3
                      class="text-[12px] text-[#666] transition group-hover:text-[#c0392b]"
                    >
                      {{ product.title }}
                    </h3>
                    <div class="mt-2 flex items-center justify-center gap-2">
                      <span class="text-[16px] font-bold text-[#222]">{{
                        product.price
                      }}</span>
                      <span
                        v-if="product.oldPrice"
                        class="text-[11px] text-[#bbb] line-through"
                      >
                        {{ product.oldPrice }}
                      </span>
                    </div>
                    <div
                      class="mt-3 flex items-center justify-center gap-3 text-[#bbb]"
                    >
                      <button
                        class="transition hover:text-[#c0392b]"
                        :class="
                          isWishlisted(product.id) ? 'text-[#c0392b]' : ''
                        "
                        @click="toggleWishlist(product)"
                      >
                        <svg
                          class="h-3.5 w-3.5"
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
                      <button class="transition hover:text-[#c0392b]">
                        <svg
                          class="h-3.5 w-3.5"
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
                      <button class="transition hover:text-[#c0392b]">
                        <svg
                          class="h-3.5 w-3.5"
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
                </article>
              </div>
            </div>
          </section>

          <section>
            <div class="grid gap-4 md:grid-cols-2">
              <article class="relative overflow-hidden">
                <img
                  :src="promoLeft"
                  alt="United wood"
                  class="h-28 w-full object-cover"
                />
                <div class="absolute inset-0 bg-[#ad7e25]/55"></div>
                <div
                  class="absolute inset-0 flex items-center justify-between px-6 text-white"
                >
                  <div>
                    <p class="text-[22px] font-black uppercase">United Wood</p>
                    <p class="text-[11px] uppercase tracking-[0.18em]">
                      You get high quality
                    </p>
                  </div>
                </div>
              </article>
              <article class="relative overflow-hidden">
                <img
                  :src="promoRight"
                  alt="Furniture for you"
                  class="h-28 w-full object-cover"
                />
                <div class="absolute inset-0 bg-[#6e1c27]/55"></div>
                <div
                  class="absolute inset-0 flex items-center justify-between px-6 text-white"
                >
                  <div>
                    <p class="text-[22px] font-black uppercase">
                      Furniture For You
                    </p>
                    <p class="text-[11px] uppercase tracking-[0.18em]">
                      Soft and modern living
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section>
            <div class="border-b border-[#ededed] pb-3">
              <h2
                class="text-[20px] font-black uppercase tracking-[0.04em] text-[#222]"
              >
                Best Sell
              </h2>
            </div>
            <div class="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              <article
                v-for="product in bestSellMain"
                :key="product.id"
                class="group relative overflow-hidden border border-[#ececec] bg-white"
                @mouseenter="hoveredProduct = product.id"
                @mouseleave="hoveredProduct = null"
              >
                <span
                  v-if="product.badge"
                  class="absolute left-2 top-2 z-10 bg-[#e25c57] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white"
                >
                  {{ product.badge }}
                </span>
                <div class="flex h-44 items-center justify-center bg-white p-4">
                  <img
                    :src="product.img"
                    :alt="product.title"
                    class="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div
                  class="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                >
                  <div class="bg-white">
                    <button
                      class="w-full bg-[#2d2d2d] px-7 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#c0392b]"
                      @click.stop="addToCart(product)"
                    >
                      Add To Cart
                    </button>
                    <div class="flex bg-[#fafafa] border-t border-[#e8e8e8]">
                      <button
                        class="flex-1 h-[40px] flex items-center justify-center border-r border-[#e8e8e8] text-[#888] hover:text-[#c0392b] hover:bg-[#fafafa] transition-all duration-200"
                        :class="
                          isWishlisted(product.id) ? 'text-[#c0392b]' : ''
                        "
                        @click.stop="toggleWishlist(product)"
                        title="Add to Wishlist"
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
                        title="Add to Compare"
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
                        title="Quick view"
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
                <div
                  class="border-t border-[#f2f2f2] px-4 pb-4 pt-3 text-center"
                >
                  <h3
                    class="text-[12px] text-[#666] transition group-hover:text-[#c0392b]"
                  >
                    {{ product.title }}
                  </h3>
                  <div class="mt-2 flex items-center justify-center gap-2">
                    <span class="text-[16px] font-bold text-[#222]">{{
                      product.price
                    }}</span>
                    <span
                      v-if="product.oldPrice"
                      class="text-[11px] text-[#bbb] line-through"
                    >
                      {{ product.oldPrice }}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section>
            <div class="grid gap-4 md:grid-cols-2">
              <article class="relative overflow-hidden">
                <img
                  :src="stripLeft"
                  alt="New sofa 2015"
                  class="h-22 w-full object-cover"
                />
                <div class="absolute inset-0 bg-[#d25846]/35"></div>
                <div
                  class="absolute inset-0 flex items-center justify-between px-6"
                >
                  <div class="text-white">
                    <p class="text-[11px] uppercase tracking-[0.18em]">
                      New sofa 2015
                    </p>
                    <p class="text-[26px] font-black uppercase">25%</p>
                  </div>
                </div>
              </article>
              <article class="relative overflow-hidden">
                <img
                  :src="stripRight"
                  alt="Sofa design for you"
                  class="h-22 w-full object-cover"
                />
                <div class="absolute inset-0 bg-[#53aa3b]/40"></div>
                <div
                  class="absolute inset-0 flex items-center justify-between px-6"
                >
                  <div class="text-white">
                    <p class="text-[11px] uppercase tracking-[0.18em]">
                      Sofa design
                    </p>
                    <p class="text-[26px] font-black uppercase">
                      Design For You
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section>
            <div class="border-b border-[#ededed] pb-3">
              <h2
                class="text-[20px] font-black uppercase tracking-[0.04em] text-[#222]"
              >
                Suggest Collection
              </h2>
            </div>

            <div
              class="mt-5 flex flex-wrap justify-between gap-3 border-b border-[#efefef] pb-5"
            >
              <button
                v-for="tab in suggestTabs"
                :key="tab.name + tab.icon"
                class="group flex min-w-20 flex-col items-center gap-2"
                @click="activeSuggestTab = tab.name"
              >
                <div
                  class="flex h-14 w-14 items-center justify-center rounded-full border transition"
                  :class="
                    activeSuggestTab === tab.name
                      ? 'border-[#c0392b] text-[#c0392b]'
                      : 'border-[#e2e2e2] text-[#888] group-hover:border-[#c0392b] group-hover:text-[#c0392b]'
                  "
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      :d="iconPath(tab.icon)"
                    />
                  </svg>
                </div>
                <span
                  class="text-center text-[10px] font-bold uppercase tracking-[0.12em]"
                  :class="
                    activeSuggestTab === tab.name
                      ? 'text-[#c0392b]'
                      : 'text-[#888]'
                  "
                >
                  {{ tab.name }}
                </span>
              </button>
            </div>

            <div class="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              <article
                v-for="product in suggestItems"
                :key="product.id"
                class="group relative overflow-hidden border border-[#ececec] bg-white"
                @mouseenter="hoveredProduct = product.id"
                @mouseleave="hoveredProduct = null"
              >
                <span
                  v-if="product.badge"
                  class="absolute left-2 top-2 z-10 bg-[#e25c57] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white"
                >
                  {{ product.badge }}
                </span>
                <div class="flex h-44 items-center justify-center bg-white p-4">
                  <img
                    :src="product.img"
                    :alt="product.title"
                    class="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div
                  class="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                >
                  <div class="bg-white">
                    <button
                      class="w-full bg-[#2d2d2d] px-7 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#c0392b]"
                      @click.stop="addToCart(product)"
                    >
                      Add To Cart
                    </button>
                    <div class="flex bg-[#fafafa] border-t border-[#e8e8e8]">
                      <button
                        class="flex-1 h-[40px] flex items-center justify-center border-r border-[#e8e8e8] text-[#888] hover:text-[#c0392b] hover:bg-[#fafafa] transition-all duration-200"
                        :class="
                          isWishlisted(product.id) ? 'text-[#c0392b]' : ''
                        "
                        @click.stop="toggleWishlist(product)"
                        title="Add to Wishlist"
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
                        title="Add to Compare"
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
                        title="Quick view"
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
                <div
                  class="border-t border-[#f2f2f2] px-4 pb-4 pt-3 text-center"
                >
                  <h3
                    class="text-[12px] text-[#666] transition group-hover:text-[#c0392b]"
                  >
                    {{ product.title }}
                  </h3>
                  <div class="mt-2 flex items-center justify-center gap-2">
                    <span class="text-[16px] font-bold text-[#222]">{{
                      product.price
                    }}</span>
                    <span
                      v-if="product.oldPrice"
                      class="text-[11px] text-[#bbb] line-through"
                    >
                      {{ product.oldPrice }}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>

    <BrandsSection />

    <Transition name="toast">
      <div
        v-if="toast"
        class="fixed bottom-6 right-6 z-60 bg-[#222] px-5 py-3 text-[13px] font-semibold text-white shadow-xl"
      >
        {{ toast }}
      </div>
    </Transition>
  </main>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
