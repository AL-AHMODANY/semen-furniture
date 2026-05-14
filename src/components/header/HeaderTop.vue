<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { authStore } from '../../store/auth.js'
import { shopStore } from '../../store/shop.js'

const langOpen = ref(false)
const currOpen = ref(false)

const languages = [
  { code: 'us', label: 'English',    flag: 'https://flagcdn.com/w40/us.png' },
  { code: 'fr', label: 'French',     flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'de', label: 'German',     flag: 'https://flagcdn.com/w40/de.png' },
  { code: 'es', label: 'Spanish',    flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'it', label: 'Italian',    flag: 'https://flagcdn.com/w40/it.png' },
  { code: 'cn', label: 'Chinese',    flag: 'https://flagcdn.com/w40/cn.png' },
]

const currencies = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
  { code: 'AUD', symbol: 'A$' },
  { code: 'JPY', symbol: '¥' },
]

const selectedLang = ref(languages[0])
const selectedCurrency = ref(currencies[0])

function selectLang(lang) {
  selectedLang.value = lang
  langOpen.value = false
}
function selectCurr(curr) {
  selectedCurrency.value = curr
  currOpen.value = false
}

function handleOutside() {
  langOpen.value = false
  currOpen.value = false
}
onMounted(() => document.addEventListener('click', handleOutside))
onUnmounted(() => document.removeEventListener('click', handleOutside))
</script>

<template>
  <div class="bg-[#222] text-[#999] text-[11px]" style="font-family: 'Open Sans', Arial, sans-serif;">
    <div class="site-shell flex items-center justify-between h-[36px]">

      <!-- ── LEFT: Language + Currency ── -->
      <div class="flex items-center">

        <!-- Language -->
        <div class="relative" @click.stop>
          <button
            @click="langOpen = !langOpen; currOpen = false"
            class="flex items-center gap-1.5 px-3 h-[36px] hover:text-[#c0392b] hover:bg-[#2e2e2e] transition-all border-r border-[#3a3a3a]"
          >
            <img
              :src="selectedLang.flag"
              :alt="selectedLang.label"
              class="w-[18px] h-[13px] object-cover rounded-[1px] shadow-sm"
            />
            <span>{{ selectedLang.label }}</span>
            <svg class="w-[7px] h-[7px] opacity-50" fill="currentColor" viewBox="0 0 10 6"><path d="M0 0l5 6 5-6z"/></svg>
          </button>

          <Transition name="dd">
            <ul v-if="langOpen" class="absolute top-full left-0 bg-[#2a2a2a] border border-[#3a3a3a] min-w-[160px] z-[9999] shadow-xl py-1">
              <li
                v-for="lang in languages"
                :key="lang.code"
                @click="selectLang(lang)"
                class="flex items-center gap-2.5 px-3 py-2 cursor-pointer transition-colors"
                :class="selectedLang.code === lang.code
                  ? 'bg-[#c0392b] text-white'
                  : 'text-[#bbb] hover:bg-[#333] hover:text-white'"
              >
                <img :src="lang.flag" :alt="lang.label" class="w-[20px] h-[14px] object-cover rounded-[1px] shadow-sm flex-shrink-0"/>
                <span>{{ lang.label }}</span>
              </li>
            </ul>
          </Transition>
        </div>

        <!-- Currency -->
        <div class="relative" @click.stop>
          <button
            @click="currOpen = !currOpen; langOpen = false"
            class="flex items-center gap-1.5 px-3 h-[36px] hover:text-[#c0392b] hover:bg-[#2e2e2e] transition-all border-r border-[#3a3a3a]"
          >
            <span>{{ selectedCurrency.code }}</span>
            <svg class="w-[7px] h-[7px] opacity-50" fill="currentColor" viewBox="0 0 10 6"><path d="M0 0l5 6 5-6z"/></svg>
          </button>

          <Transition name="dd">
            <ul v-if="currOpen" class="absolute top-full left-0 bg-[#2a2a2a] border border-[#3a3a3a] min-w-[110px] z-[9999] shadow-xl py-1">
              <li
                v-for="curr in currencies"
                :key="curr.code"
                @click="selectCurr(curr)"
                class="flex items-center justify-between px-3 py-2 cursor-pointer transition-colors"
                :class="selectedCurrency.code === curr.code
                  ? 'bg-[#c0392b] text-white'
                  : 'text-[#bbb] hover:bg-[#333] hover:text-white'"
              >
                <span>{{ curr.code }}</span>
                <span class="opacity-60 text-[10px]">{{ curr.symbol }}</span>
              </li>
            </ul>
          </Transition>
        </div>
      </div>

      <!-- ── RIGHT: Account links ── -->
      <div class="flex items-center">

        <!-- My Account — shows name when logged in -->
        <button
          @click="authStore.state.isLoggedIn ? authStore.openAccount() : authStore.openLogin()"
          class="flex items-center gap-1.5 px-3 h-[36px] hover:text-[#c0392b] hover:bg-[#2e2e2e] transition-all border-l border-[#3a3a3a]"
        >
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"/>
          </svg>
          <span v-if="authStore.state.isLoggedIn" class="text-white font-semibold max-w-[90px] truncate">
            {{ authStore.state.user?.name.split(' ')[0] }}
          </span>
          <span v-else>My Account</span>
        </button>

        <!-- Wishlist -->
        <RouterLink to="/shop" class="flex items-center gap-1.5 px-3 h-[36px] hover:text-[#c0392b] hover:bg-[#2e2e2e] transition-all border-l border-[#3a3a3a]">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
          </svg>
          <span>My Wishlist</span>
          <span v-if="shopStore.wishlistCount.value" class="text-white">({{ shopStore.wishlistCount.value }})</span>
        </RouterLink>

        <!-- Checkout -->
        <RouterLink to="/shop" class="flex items-center gap-1.5 px-3 h-[36px] hover:text-[#c0392b] hover:bg-[#2e2e2e] transition-all border-l border-[#3a3a3a]">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>Checkout</span>
        </RouterLink>

        <!-- Login / Logout -->
        <button
          v-if="!authStore.state.isLoggedIn"
          @click="authStore.openLogin()"
          class="flex items-center gap-1.5 px-3 h-[36px] hover:text-[#c0392b] hover:bg-[#2e2e2e] transition-all border-l border-[#3a3a3a]"
        >
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
          </svg>
          <span>Login</span>
        </button>
        <button
          v-else
          @click="authStore.logout()"
          class="flex items-center gap-1.5 px-3 h-[36px] hover:text-[#c0392b] hover:bg-[#2e2e2e] transition-all border-l border-[#3a3a3a]"
        >
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
          </svg>
          <span>Logout</span>
        </button>

      </div>
    </div>
  </div>
</template>

<style scoped>
.dd-enter-active, .dd-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.dd-enter-from, .dd-leave-to { opacity: 0; transform: translateY(-5px); }
</style>
