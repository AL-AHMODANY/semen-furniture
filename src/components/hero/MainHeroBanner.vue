<script setup>
import { ref } from "vue";
import slide1 from "../../assets/images/image 001.jpg";
import slide2 from "../../assets/images/image0002.png";
import slide3 from "../../assets/images/image0003.png";

const current = ref(0);

const slides = [
  {
    image: slide1,
  },
  {
    image: slide2, // replace with real images later
  },
  {
    image: slide3,
  },
];

function goTo(i) {
  current.value = i;
}
</script>

<template>
  <div class="relative w-full h-full overflow-hidden bg-[#f5f3ef] group">
    <!-- Slides -->
    <div
      v-for="(s, i) in slides"
      :key="i"
      class="absolute inset-0 transition-opacity duration-700"
      :class="current === i ? 'opacity-100 z-10' : 'opacity-0 z-0'"
    >
      <img
        :src="s.image"
        :alt="imageAlt"
        class="w-full h-full object-cover object-center"
      />
      <div
        class="absolute inset-y-0 left-0 flex items-center px-6 md:px-14 lg:px-20"
      ></div>
    </div>

    <!-- Dots -->
    <div class="absolute bottom-5 left-8 z-20 flex items-center gap-2">
      <button
        v-for="(s, i) in slides"
        :key="i"
        @click="goTo(i)"
        :class="[
          'transition-all duration-300 border-2 cursor-pointer',
          current === i
            ? 'w-3.5 h-3.5 bg-[#c0392b] border-[#c0392b]'
            : 'w-2.75 h-2.75 bg-transparent border-[#aaa] hover:border-[#c0392b]',
        ]"
      ></button>
    </div>
  </div>
</template>
