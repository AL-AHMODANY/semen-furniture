<script setup>
const features = [
  {
    title: 'FREE DELIVERY WORLDWIDE',
    subtitle: 'On order over $100',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.4" stroke="currentColor" width="28" height="28">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
    </svg>`,
  },
  {
    title: 'UP TO 20% OFF COSY LAYERS',
    subtitle: 'Lorem ipsum dolor sit amet',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.4" stroke="currentColor" width="28" height="28">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
    </svg>`,
  },
  {
    title: 'BUY 1 GET 1 FREE',
    subtitle: 'On order over $100',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.4" stroke="currentColor" width="28" height="28">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
    </svg>`,
  },
]
</script>

<template>
  <div class="bg-white border-b border-[#e8e8e8]">
    <div class="max-w-[1200px] mx-auto px-5 flex items-center justify-between py-5">

      <!-- LOGO -->
      <a
        href="/"
        class="text-[38px] font-black text-[#111] no-underline leading-none tracking-[-2px] hover:text-[#c0392b] transition-colors duration-200"
        style="font-family: 'Open Sans', 'Arial Black', Arial, sans-serif; font-weight: 800;"
      >
        SIMEN
      </a>

      <!-- FEATURE BADGES — hover: circle fills RED, icon turns WHITE, title darkens -->
      <div class="hidden lg:flex items-center divide-x divide-[#ebebeb]">
        <div
          v-for="(f, i) in features"
          :key="i"
          class="feature-badge flex items-center gap-4 px-8 py-3 cursor-default"
        >
          <!-- Circle — 70px so the red fill is clearly visible like the demo -->
          <div class="feature-circle w-[70px] h-[70px] rounded-full border-2 border-[#ddd] flex items-center justify-center text-[#aaa] flex-shrink-0">
            <span v-html="f.svg"></span>
          </div>
          <!-- Text -->
          <div class="flex flex-col gap-[4px]">
            <span class="feature-title text-[11px] font-bold text-[#333] uppercase tracking-[0.6px] leading-tight transition-colors duration-300">
              {{ f.title }}
            </span>
            <span class="text-[11px] text-[#999] font-normal">{{ f.subtitle }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/*
  The circle uses a clip-path wipe that reveals the red fill from bottom to top,
  giving the "ease-in-out from down" feel without moving the element or
  changing the header height.
*/
.feature-circle {
  position: relative;
  overflow: hidden;
  transition:
    border-color 0.35s ease-in-out,
    color        0.35s ease-in-out;
}

/* Pseudo-element is the red fill — starts fully below, slides up to cover */
.feature-circle::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background-color: #c0392b;
  transform: translateY(100%);
  transition: transform 0.35s ease-in-out;
  z-index: 0;
}

/* Icon sits above the pseudo fill */
.feature-circle > span {
  position: relative;
  z-index: 1;
  transition: color 0.35s ease-in-out;
}

/* On hover: slide the red fill up from bottom, turn icon white, red border */
.feature-badge:hover .feature-circle::before {
  transform: translateY(0%);
}
.feature-badge:hover .feature-circle {
  border-color: #c0392b;
  color: #ffffff;
}

/* Title turns red */
.feature-title {
  transition: color 0.35s ease-in-out;
}
.feature-badge:hover .feature-title {
  color: #c0392b;
}
</style>
