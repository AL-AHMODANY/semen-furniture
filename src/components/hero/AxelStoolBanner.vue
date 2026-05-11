<script setup>
import UIButton from '../ui/UIButton.vue'
import stoolImg from '../../assets/images/image033.jpg'
</script>

<template>
  <section class="w-full bg-[#f0ede8] border-t border-b border-[#e0dbd2]">
    <div class="section-inner">
      <div class="flex flex-col md:flex-row items-center gap-8 py-12">

        <!-- Image -->
        <div class="flex-1 flex items-center justify-center">
          <img :src="stoolImg" alt="Axel Stool"
               class="max-h-[260px] w-auto object-contain drop-shadow-lg" />
        </div>

        <!-- Text -->
        <div class="flex-1 text-center md:text-left">
          <p class="text-[11px] font-bold text-[#c0392b] uppercase tracking-[0.3em] mb-3">
            New Product
          </p>
          <h2 class="font-black uppercase leading-none text-[#1a1a1a] mb-4 tracking-tight"
              style="font-size:clamp(32px,4vw,50px);">
            Axel –<br />Stool
          </h2>
          <p class="text-[13px] text-[#777] leading-relaxed mb-7 max-w-[340px] mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <UIButton variant="dark" text="Buy Now" size="lg" />
        </div>

      </div>
    </div>
  </section>
</template>
