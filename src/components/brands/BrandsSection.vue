<template>
  <section class="border-t border-b border-[#ececec] bg-white py-8">
    <div class="site-shell">
      <div class="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
        <div
          v-for="brand in brands"
          :key="brand.id"
          class="flex min-h-20 flex-col items-center justify-center px-4 text-center opacity-80 transition-opacity duration-200 hover:opacity-100"
        >
          <template v-if="brand.id === 'lamino'">
            <span style="font-family: Georgia, 'Times New Roman', serif; font-style: italic; font-weight: 700; font-size: 28px; color: #c0392b; letter-spacing: -0.5px; line-height:1;">
              Lamino
            </span>
            <span style="font-family: Georgia, serif; font-style: italic; font-size: 9px; color: #aaa; letter-spacing: 0.3px; margin-top: 4px; white-space: nowrap;">
              Bring Real Value of Clothes
            </span>
          </template>

          <template v-else-if="brand.id === 'avan'">
            <span style="font-family: 'Arial Black', Arial, sans-serif; font-weight: 900; font-size: 22px; color: #1a1a1a; letter-spacing: 4px; line-height:1;">
              AVAN
            </span>
          </template>

          <template v-else-if="brand.id === 'aio'">
            <div class="flex items-center gap-1.5">
              <svg width="20" height="24" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0C6.03 0 2 4.03 2 9c0 6.75 9 17 9 17s9-10.25 9-17c0-4.97-4.03-9-9-9z" fill="#ddd"/>
                <path d="M11 9 L11 3 A6 6 0 0 1 17 9 Z" fill="#e74c3c"/>
                <path d="M11 9 L17 9 A6 6 0 0 1 11 15 Z" fill="#2ecc71"/>
                <path d="M11 9 L11 15 A6 6 0 0 1 5 9 Z" fill="#3498db"/>
                <path d="M11 9 L5 9 A6 6 0 0 1 11 3 Z" fill="#f39c12"/>
                <circle cx="11" cy="9" r="2.2" fill="white"/>
              </svg>
              <span style="font-family: 'Arial Black', Arial, sans-serif; font-weight: 900; font-size: 22px; color: #222; letter-spacing: 1px; line-height:1;">
                AIO
              </span>
            </div>
            <span style="font-size: 8px; color: #aaa; letter-spacing: 2px; margin-top: 5px; white-space: nowrap;">
              ALL IN ONE THEME
            </span>
          </template>

          <template v-else-if="brand.id === 'nova'">
            <span style="font-family: 'Arial Black', Arial, sans-serif; font-weight: 900; font-size: 24px; color: #00aacc; letter-spacing: 5px; line-height:1;">
              NOVA
            </span>
            <span style="font-size: 7.5px; color: #00aacc; letter-spacing: 2px; margin-top: 5px; white-space: nowrap; opacity: 0.85;">
              DIGITAL ONLINE STORE
            </span>
          </template>

          <template v-else-if="brand.id === 'mbm'">
            <div style="font-family: 'Arial Black', Arial, sans-serif; font-weight: 900; font-size: 26px; letter-spacing: 2px; line-height:1;">
              <span style="color:#111;">M</span><span style="color:#c0392b;">B</span><span style="color:#111;">M</span>
            </div>
            <span style="font-size: 8px; color: #aaa; letter-spacing: 2px; margin-top: 5px; white-space: nowrap;">
              SHOPPING ONLINE
            </span>
          </template>

          <template v-else-if="brand.id === 'nazic'">
            <div class="flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="9.5" stroke="#c0392b" stroke-width="2" fill="none"/>
                <circle cx="11" cy="11" r="5.5" stroke="#c0392b" stroke-width="2" fill="none"/>
                <circle cx="11" cy="11" r="2.2" fill="#c0392b"/>
                <rect x="0" y="9.8" width="2.5" height="2.4" fill="white"/>
                <rect x="19.5" y="9.8" width="2.5" height="2.4" fill="white"/>
              </svg>
              <span style="font-family: 'Arial Black', Arial, sans-serif; font-weight: 900; font-size: 20px; color: #111; letter-spacing: 2px; line-height:1;">
                NAZIC
              </span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const brands = [
  { id: "lamino" },
  { id: "avan" },
  { id: "aio" },
  { id: "nova" },
  { id: "mbm" },
  { id: "nazic" },
];
</script>
