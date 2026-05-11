<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import slide1 from "../../assets/images/image 001.jpg";
import slide2 from "../../assets/images/image002.jpg";
import slide3 from "../../assets/images/image 003.jpg";

const slides = [{ img: slide1 }, { img: slide2 }, { img: slide3 }];
const current = ref(0);
let timer = null;

function goTo(i) {
  current.value = i;
  resetTimer();
}
function next() {
  current.value = (current.value + 1) % slides.length;
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(next, 4000);
}

onMounted(() => {
  timer = setInterval(next, 4000);
});
onUnmounted(() => clearInterval(timer));
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
        :src="s.img"
        :alt="`Slide ${i + 1}`"
        class="w-full h-full object-cover object-center"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"
      ></div>
      <div
        class="absolute inset-y-0 left-0 flex items-center px-6 md:px-14 lg:px-20"
      >
        <div class="max-w-xl text-white">
          <span
            class="inline-block mb-4 px-3 py-2 text-[11px] tracking-[0.32em] uppercase bg-white/10 rounded-full border border-white/15"
          >
            Premium Furniture
          </span>
          <h1
            class="text-[34px] md:text-[46px] lg:text-[56px] font-black leading-tight tracking-[-0.03em]"
          >
            Luxury furniture for a modern home
          </h1>
          <p
            class="mt-5 text-[14px] md:text-[15px] max-w-[520px] text-[#f3f3f2] leading-relaxed"
          >
            Discover designer sofas, chairs, and décor with soft curves, warm
            materials, and effortless style.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <UIButton text="Shop Now" variant="primary" size="lg" />
            <button
              class="h-[46px] px-6 border border-white text-white text-[12px] uppercase tracking-[1px] rounded transition-all duration-300 hover:bg-white hover:text-[#c0392b]"
            >
              View Collection
            </button>
          </div>
        </div>
      </div>
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
            ? 'w-[14px] h-[14px] bg-[#c0392b] border-[#c0392b]'
            : 'w-[11px] h-[11px] bg-transparent border-[#aaa] hover:border-[#c0392b]',
        ]"
      ></button>
    </div>
  </div>
</template>
