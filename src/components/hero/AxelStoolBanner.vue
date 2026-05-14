<script setup>
import UIButton from "../ui/UIButton.vue";
import stoolImg from "../../assets/images/image014.jpg";
</script>

<template>
  <section class="w-full bg-[#f3f0ea] border-y border-[#e5dfd5]">
    <div class="max-w-350 mx-auto px-6">
      <div
        class="flex flex-col md:flex-row items-center justify-between py-13.75 md:py-17.5 gap-10 md:gap-14"
      >
        <div class="w-full md:w-[62%] flex justify-center">
          <img
            :src="stoolImg"
            alt="Axel Stool"
            class="w-full max-w-125 md:max-w-170 object-contain"
          />
        </div>

        <div class="w-full md:w-[38%] max-w-107.5">
          <p
            class="uppercase text-[9px] tracking-[0.35em] font-bold text-[#c44b3b] mb-3"
          >
            New Product
          </p>

          <h2
            class="uppercase font-black text-[#1f1f1f] leading-[0.9] tracking-[-1px] text-[42px] md:text-[58px] mb-4"
          >
            AXEL -<br />
            STOOL
          </h2>

          <p class="text-[#7a7a7a] text-[12px] leading-[1.9] mb-6 max-w-80">
            Lorem ipsum has been the industry standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <UIButton
            variant="dark"
            text="BUY NOW"
            class="bg-[#222]! hover:bg-black! px-7! py-3! text-[11px]! font-bold! tracking-wide"
          />
        </div>
      </div>
    </div>
  </section>
</template>
