<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { searchWebsite } from "../data/searchCatalog.js";

const route = useRoute();

const searchTerm = computed(() => String(route.query.q || "").trim());
const results = computed(() => searchWebsite(searchTerm.value));
const pageResults = computed(() =>
  results.value.filter((item) => item.type === "page"),
);
const productResults = computed(() =>
  results.value.filter((item) => item.type === "product"),
);
</script>

<template>
  <main class="bg-white text-[#333]">
    <div class="border-b border-[#e8e8e8] bg-[#f7f7f7]">
      <div class="site-shell flex items-center gap-2 py-2 text-[12px] text-[#888]">
        <span>Home</span>
        <span class="text-[#ccc]">/</span>
        <span class="font-medium text-[#555]">Search</span>
      </div>
    </div>

    <section class="site-shell py-8 md:py-10">
      <div class="max-w-3xl">
        <p class="text-[11px] font-bold uppercase tracking-[0.24em] text-[#c0392b]">
          Site Search
        </p>
        <h1 class="mt-2 text-[28px] font-black uppercase text-[#222] md:text-[36px]">
          <template v-if="searchTerm">Results for "{{ searchTerm }}"</template>
          <template v-else>Search the website</template>
        </h1>
        <p class="mt-3 text-[13px] leading-6 text-[#777]">
          Find products, pages, cart tools, and store content from one place.
        </p>
      </div>

      <div v-if="!searchTerm" class="mt-8 border border-[#e8e8e8] bg-[#faf8f5] p-6 text-[13px] text-[#666]">
        Start with a keyword like <strong class="text-[#222]">sofa</strong>,
        <strong class="text-[#222]">desk</strong>,
        <strong class="text-[#222]">wishlist</strong>, or
        <strong class="text-[#222]">contact</strong>.
      </div>

      <div v-else-if="!results.length" class="mt-8 border border-[#e8e8e8] bg-[#faf8f5] p-6">
        <h2 class="text-[18px] font-bold uppercase text-[#222]">No results found</h2>
        <p class="mt-2 text-[13px] text-[#777]">
          Try a broader word like furniture, chair, sofa, blog, or cart.
        </p>
      </div>

      <div v-else class="mt-8 space-y-10">
        <div v-if="pageResults.length">
          <div class="mb-4 flex items-center justify-between gap-4">
            <h2 class="text-[16px] font-black uppercase tracking-[0.14em] text-[#222]">
              Pages
            </h2>
            <span class="text-[12px] text-[#999]">{{ pageResults.length }} result(s)</span>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <RouterLink
              v-for="item in pageResults"
              :key="item.id"
              :to="item.route"
              class="block border border-[#e8e8e8] bg-white p-5 transition hover:border-[#c0392b] hover:shadow-sm"
            >
              <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#c0392b]">
                {{ item.type }}
              </p>
              <h3 class="mt-2 text-[18px] font-bold uppercase text-[#222]">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-[13px] leading-6 text-[#777]">
                {{ item.description }}
              </p>
            </RouterLink>
          </div>
        </div>

        <div v-if="productResults.length">
          <div class="mb-4 flex items-center justify-between gap-4">
            <h2 class="text-[16px] font-black uppercase tracking-[0.14em] text-[#222]">
              Products
            </h2>
            <span class="text-[12px] text-[#999]">{{ productResults.length }} result(s)</span>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <RouterLink
              v-for="item in productResults"
              :key="item.id"
              :to="item.route"
              class="group overflow-hidden border border-[#e8e8e8] bg-white transition hover:border-[#c0392b] hover:shadow-sm"
            >
              <div class="flex h-56 items-center justify-center bg-[#faf8f5] p-4">
                <img
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.title"
                  class="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
              <div class="p-5">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#c0392b]">
                  {{ item.type }}
                </p>
                <h3 class="mt-2 text-[16px] font-bold uppercase text-[#222]">
                  {{ item.title }}
                </h3>
                <p class="mt-2 text-[13px] leading-6 text-[#777]">
                  {{ item.description }}
                </p>
                <p v-if="item.price" class="mt-3 text-[15px] font-bold text-[#222]">
                  {{ item.price }}
                </p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
