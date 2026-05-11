<script setup>
const year = new Date().getFullYear();

// Payment methods — styled to match the Simen demo badges
const payments = [
  {
    name: "PayPal",
    bg: "#fff",
    border: "#ddd",
    content: `<svg viewBox="0 0 48 16" width="38" height="13" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="13" font-family="Arial" font-weight="900" font-size="13" fill="#003087">Pay</text>
      <text x="18" y="13" font-family="Arial" font-weight="900" font-size="13" fill="#009cde">Pal</text>
    </svg>`,
  },
  {
    name: "Mastercard",
    bg: "#fff",
    border: "#ddd",
    content: `<svg viewBox="0 0 38 24" width="38" height="24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="12" r="10" fill="#eb001b"/>
      <circle cx="24" cy="12" r="10" fill="#f79e1b"/>
      <path d="M19 5.27a10 10 0 000 13.46A10 10 0 0019 5.27z" fill="#ff5f00"/>
    </svg>`,
  },
  {
    name: "Maestro",
    bg: "#fff",
    border: "#ddd",
    content: `<svg viewBox="0 0 38 24" width="38" height="24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="12" r="10" fill="#0099df"/>
      <circle cx="24" cy="12" r="10" fill="#cc0000" opacity="0.85"/>
      <path d="M19 5.27a10 10 0 000 13.46A10 10 0 0019 5.27z" fill="#6c0099" opacity="0.7"/>
    </svg>`,
  },
  {
    name: "Visa",
    bg: "#1a1f71",
    border: "#1a1f71",
    content: `<svg viewBox="0 0 48 16" width="38" height="13" xmlns="http://www.w3.org/2000/svg">
      <text x="2" y="13" font-family="Arial" font-weight="900" font-size="14" fill="white" letter-spacing="1">VISA</text>
    </svg>`,
  },
];
</script>

<template>
  <div class="bg-[#f5f4f0] border-t border-[#e8e8e8] py-5">
    <div
      class="max-w-[1200px] mx-auto px-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
    >
      <!-- Left: copyright -->
      <div class="space-y-1">
        <p class="text-[11px] text-[#888] leading-snug">
          © {{ year }} Magento Demo Store. All Rights Reserved. Developer by
          <a
            href="#"
            class="text-[#666] font-semibold hover:text-[#c0392b] transition-colors"
            >SNSTheme.Com</a
          >
        </p>
        <p class="text-[11px] text-[#aaa] flex items-center gap-1">
          <svg
            class="w-3 h-3"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253"
            />
          </svg>
          EN English (United States)
        </p>
      </div>

      <!-- Right: payment badges -->
      <div class="flex items-center gap-2.5 flex-wrap">
        <div
          v-for="p in payments"
          :key="p.name"
          :title="p.name"
          class="w-[52px] h-[34px] border rounded transition-shadow hover:shadow-md cursor-default flex items-center justify-center"
          :style="{ background: p.bg, borderColor: p.border }"
          v-html="p.content"
        ></div>
      </div>
    </div>
  </div>
</template>
