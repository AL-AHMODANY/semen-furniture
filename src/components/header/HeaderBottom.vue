<script setup>
import { ref, nextTick, onMounted, onUnmounted, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { shopStore } from "../../store/shop.js";

const searchOpen = ref(false);
const searchQuery = ref("");
const mobileMenuOpen = ref(false);
const activeItem = ref("HOME");
const hoveredItem = ref(null);
const route = useRoute();
const router = useRouter();

const navItems = [
  {
    label: "HOME",
    href: "/",
    dropdown: [
      { label: "Home Layout 1", href: "/" },
      { label: "Home Layout 2", href: "/homepage-2" },
    ],
  },
  {
    label: "FURNITURE",
    href: "/furniture",
  },
  { label: "ALL PRODUCTS", href: "/products" },
  { label: "MOBILE", href: "/mobile" },
  { label: "OFFER", href: "/offer" },
  { label: "DEAL", href: "/deal" },
  {
    label: "BLOG",
    href: "/blog",
  },
  { label: "CUSTOM MENU", href: "/custom" },
  {
    label: "SHOP",
    href: "/shop",
  },
  { label: "CONTACT US", href: "/contact" },
];

function syncActiveItem(path) {
  const currentItem = navItems.find((item) => item.href === path);
  activeItem.value = currentItem?.label ?? "HOME";
}

async function openSearch() {
  searchOpen.value = true;
  await nextTick();
  document.getElementById("nav-search-input")?.focus();
}

function closeSearch() {
  searchOpen.value = false;
  searchQuery.value = "";
}

function submitSearch() {
  const query = searchQuery.value.trim();
  if (!query) return;
  router.push({ name: "search", query: { q: query } });
  closeSearch();
}

function handleKeydown(e) {
  if (e.key === "Escape") closeSearch();
}

onMounted(() => document.addEventListener("keydown", handleKeydown));
onUnmounted(() => document.removeEventListener("keydown", handleKeydown));

watch(
  () => route.path,
  (path) => syncActiveItem(path),
  { immediate: true },
);
</script>

<template>
  <div
    class="bg-white border-t border-b border-[#e8e8e8] sticky top-0 z-50 shadow-sm"
    style="font-family: &quot;Open Sans&quot;, Arial, sans-serif"
  >
    <!-- ═══ NORMAL NAV BAR ═══ -->
    <div
      v-show="!searchOpen"
      class="site-shell flex items-center justify-between"
    >
      <!-- Hamburger (mobile) -->
      <button
        class="lg:hidden flex flex-col gap-1.25 py-4 pr-4"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Toggle menu"
      >
        <span
          class="block w-5.5 h-0.5 bg-[#333] transition-all duration-200"
          :class="mobileMenuOpen ? 'rotate-45 translate-y-1.75' : ''"
        ></span>
        <span
          class="block w-5.5 h-0.5 bg-[#333] transition-all duration-200"
          :class="mobileMenuOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="block w-5.5 h-0.5 bg-[#333] transition-all duration-200"
          :class="mobileMenuOpen ? '-rotate-45 -translate-y-1.75' : ''"
        ></span>
      </button>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center flex-1">
        <div
          v-for="item in navItems"
          :key="item.label"
          class="relative"
          @mouseenter="hoveredItem = item.label"
          @mouseleave="hoveredItem = null"
        >
          <RouterLink
            :to="item.href"
            :class="[
              'flex items-center gap-1 px-2.5 py-3.75 text-[12px] font-semibold uppercase tracking-[0.3px] whitespace-nowrap transition-colors duration-150',
              activeItem === item.label
                ? 'text-[#c0392b]'
                : 'text-[#444] hover:text-[#c0392b]',
            ]"
          >
            {{ item.label }}
            <svg
              v-if="item.dropdown"
              class="w-1.75 h-1.75 opacity-40 mt-px"
              fill="currentColor"
              viewBox="0 0 10 6"
            >
              <path d="M0 0l5 6 5-6z" />
            </svg>
          </RouterLink>

          <!-- Dropdown menu -->
          <Transition name="drop">
            <ul
              v-if="item.dropdown && hoveredItem === item.label"
              class="absolute top-full left-0 bg-white border border-[#e0e0e0] min-w-47.5 z-999 shadow-lg py-1"
            >
              <li v-for="sub in item.dropdown" :key="sub.label">
                <RouterLink
                  :to="sub.href"
                  class="flex items-center gap-2 px-4 py-2.25 text-[12px] text-[#555] hover:text-[#c0392b] hover:bg-[#f9f9f9] transition-all duration-150 border-b border-[#f5f5f5] last:border-0 group"
                >
                  <span
                    class="w-0 overflow-hidden group-hover:w-2 transition-all duration-150 text-[#c0392b] text-[10px]"
                    >›</span
                  >
                  {{ sub.label }}
                </RouterLink>
              </li>
            </ul>
          </Transition>
        </div>
      </nav>

      <!-- Right: search icon + cart -->
      <div class="flex items-center">
        <!-- Search icon button -->
        <button
          @click="openSearch"
          class="flex items-center justify-center w-10.5 h-11.5 text-[#666] hover:text-[#c0392b] hover:bg-[#f5f5f5] transition-all duration-150 border-l border-[#ebebeb]"
          aria-label="Open search"
        >
          <svg
            class="w-3.75 h-3.75"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        <!-- Cart -->
        <RouterLink
          to="/shop"
          class="flex items-center gap-2 px-4 h-11.5 text-[#555] hover:text-[#c0392b] transition-colors duration-150 text-[12px] font-semibold border-l border-[#ebebeb]"
        >
          <svg
            class="w-3.75 h-3.75"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            viewBox="0 0 24 24"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <span class="whitespace-nowrap hidden sm:inline">
            <span
              class="inline-flex items-center justify-center min-w-4.5 h-4.5 bg-[#c0392b] text-white text-[9px] font-bold rounded-full mr-0.5 px-1"
              >{{ shopStore.cartCount.value }}</span
            >
            ( items )
          </span>
        </RouterLink>
      </div>
    </div>

    <!-- ═══ SEARCH OVERLAY BAR — replaces the nav, full width, exactly like Simen demo ═══ -->
    <Transition name="search-bar">
      <div v-if="searchOpen" class="site-shell flex items-center h-11.5">
        <!-- Search icon (static, left side) -->
        <div
          class="flex items-center justify-center w-10.5 h-11.5 text-[#c0392b] shrink-0"
        >
          <svg
            class="w-3.75 h-3.75"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <!-- Full-width input -->
        <input
          id="nav-search-input"
          v-model="searchQuery"
          type="text"
          placeholder="Search entire store here..."
          class="flex-1 h-full px-3 text-[13px] text-[#333] outline-none border-none bg-transparent placeholder:text-[#bbb]"
          @keyup.enter="submitSearch"
        />

        <!-- Close / X button -->
        <button
          @click="closeSearch"
          class="flex items-center justify-center w-10.5 h-11.5 text-[#999] hover:text-[#c0392b] transition-colors shrink-0 border-l border-[#ebebeb]"
          aria-label="Close search"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </Transition>

    <!-- Mobile nav drawer -->
    <Transition name="slide">
      <div
        v-if="mobileMenuOpen && !searchOpen"
        class="lg:hidden border-t border-[#e8e8e8] bg-white"
      >
        <RouterLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.href"
          :class="[
            'flex items-center px-5 py-3 text-[12px] font-semibold uppercase border-b border-[#f0f0f0] transition-colors',
            activeItem === item.label
              ? 'text-[#c0392b] bg-[#fff8f8]'
              : 'text-[#444] hover:text-[#c0392b] hover:bg-[#fafafa]',
          ]"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Nav dropdown */
.drop-enter-active,
.drop-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

/* Search bar slide in */
.search-bar-enter-active,
.search-bar-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.search-bar-enter-from,
.search-bar-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Mobile drawer */
.slide-enter-active,
.slide-leave-active {
  transition:
    max-height 0.25s ease,
    opacity 0.2s ease;
  max-height: 600px;
  overflow: hidden;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
