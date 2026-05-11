<script setup>
// 6 brand logos exactly as shown in the Simen demo screenshot
const brands = [
  {
    name: "Lamino",
    sub: "Bring Real Value of Clothes",
    style: "italic",
    color: "#c0392b",
    size: "26px",
    font: "Georgia, serif",
  },
  {
    name: "AVAN",
    sub: "",
    style: "normal",
    color: "#222",
    size: "22px",
    font: "'Open Sans', Arial, sans-serif",
  },
  {
    name: "AIO",
    sub: "ALL IN ONE THEME",
    style: "normal",
    color: "#333",
    size: "22px",
    font: "'Open Sans', Arial, sans-serif",
  },
  {
    name: "NOVA",
    sub: "DIGITAL ONLINE STORE",
    style: "normal",
    color: "#00aacc",
    size: "22px",
    font: "'Open Sans', Arial, sans-serif",
  },
  {
    name: "MBM",
    sub: "SHOPPING ONLINE",
    style: "normal",
    color: "#222",
    size: "22px",
    font: "'Open Sans', Arial, sans-serif",
  },
  {
    name: "NAZIC",
    sub: "",
    style: "normal",
    color: "#c0392b",
    size: "22px",
    font: "'Open Sans', Arial, sans-serif",
  },
];
</script>

<template>
  <section class="border-t border-[#e8e8e8] bg-white py-12 md:py-16">
    <div class="max-w-[1200px] mx-auto px-5">
      <div class="grid grid-cols-3 md:grid-cols-6 divide-x divide-[#e8e8e8]">
        <div
          v-for="brand in brands"
          :key="brand.name"
          class="flex flex-col items-center justify-center py-8 px-4 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group"
        >
          <span
            class="font-black leading-none group-hover:text-[#c0392b] transition-colors duration-300"
            :style="{
              fontStyle: brand.style,
              color: brand.color,
              fontSize: brand.size,
              fontFamily: brand.font,
            }"
          >
            {{ brand.name }}
          </span>
          <span
            v-if="brand.sub"
            class="text-[8px] text-[#aaa] tracking-wider uppercase mt-2 text-center"
          >
            {{ brand.sub }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
