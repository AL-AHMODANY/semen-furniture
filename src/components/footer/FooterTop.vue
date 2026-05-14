<script setup>
import { ref } from "vue";

const email = ref("");
const subscribed = ref(false);
const emailError = ref("");

function subscribe() {
  emailError.value = "";
  if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = "Please enter a valid email address.";
    return;
  }
  subscribed.value = true;
  email.value = "";
}

const contactItems = [
  {
    lines: ["8888 South Avenue Street,", "New York"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
    </svg>`,
  },
  {
    lines: ["(12) 3 456 7896", "(12) 3 456 7895"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
    </svg>`,
  },
  {
    lines: ["info@yourdomain.com", "info@yourdomain.com"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
    </svg>`,
  },
];

const linkColumns = [
  {
    title: "SERVICE",
    links: [
      { label: "Prices & Currencies", href: "#" },
      { label: "Secure Payment", href: "#" },
      { label: "Delivery Times & Costs", href: "#" },
      { label: "Returns & Exchanges", href: "#" },
      { label: "FAQ's", href: "#" },
    ],
  },
  {
    title: "ACCOUNT",
    links: [
      { label: "My account", href: "#" },
      { label: "Wishlist", href: "#" },
      { label: "Order history", href: "#" },
      { label: "Specials", href: "#" },
      { label: "Gift vouchers", href: "#" },
    ],
  },
  {
    title: "INFORMATION",
    links: [
      { label: "My account", href: "#" },
      { label: "Wishlist", href: "#" },
      { label: "Order history", href: "#" },
      { label: "Specials", href: "#" },
      { label: "Gift vouchers", href: "#" },
    ],
  },
];
</script>

<template>
  <div class="bg-[#f5f4f0] border-t-2 border-[#e8e8e8] pt-16 pb-12">
    <div class="site-shell">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10"
      >
        <!-- ── CONTACT US ── -->
        <div>
          <h4
            class="text-[14px] font-bold text-[#111] uppercase tracking-[1px] mb-6 pb-3 border-b border-[#ddd]"
          >
            CONTACT US
          </h4>
          <ul class="space-y-6">
            <li
              v-for="(item, i) in contactItems"
              :key="i"
              class="flex items-start gap-4 group"
            >
              <!-- Circle icon -->
              <div
                class="w-[36px] h-[36px] rounded-full border border-[#ccc] bg-white flex items-center justify-center flex-shrink-0 text-[#888] group-hover:border-[#c0392b] group-hover:text-[#c0392b] transition-all duration-200"
                v-html="item.svg"
              ></div>
              <div class="flex flex-col gap-1 pt-1">
                <span
                  v-for="(line, j) in item.lines"
                  :key="j"
                  class="text-[12px] text-[#666] leading-snug group-hover:text-[#555] transition-colors"
                >
                  {{ line }}
                </span>
              </div>
            </li>
          </ul>
        </div>

        <!-- ── SERVICE / ACCOUNT / INFORMATION ── -->
        <div v-for="col in linkColumns" :key="col.title">
          <h4
            class="text-[14px] font-bold text-[#111] uppercase tracking-[1px] mb-6 pb-3 border-b border-[#ddd]"
          >
            {{ col.title }}
          </h4>
          <ul class="space-y-[11px]">
            <li v-for="link in col.links" :key="link.label">
              <a
                :href="link.href"
                class="text-[12px] text-[#666] hover:text-[#c0392b] transition-colors relative group inline-flex items-center gap-1"
              >
                <span
                  class="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-[#c0392b]"
                  >›</span
                >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- ── NEWSLETTER ── -->
        <div>
          <h4
            class="text-[14px] font-bold text-[#111] uppercase tracking-[1px] mb-6 pb-3 border-b border-[#ddd]"
          >
            NEWSLETTER
          </h4>
          <p class="text-[12px] text-[#666] mb-5 leading-relaxed">
            Register your email for news and special offers
          </p>

          <div v-if="!subscribed" class="flex flex-col gap-3">
            <input
              v-model="email"
              type="email"
              placeholder="Your email here"
              class="w-full border border-[#ccc] bg-white px-4 py-3 text-[12px] text-[#555] outline-none focus:border-[#aaa] transition-colors placeholder:text-[#bbb]"
              @keyup.enter="subscribe"
            />
            <p v-if="emailError" class="text-[11px] text-[#c0392b] -mt-1">
              {{ emailError }}
            </p>
            <button
              @click="subscribe"
              class="bg-[#222] text-white text-[11px] font-bold tracking-[1.2px] uppercase px-6 py-3 hover:bg-[#c0392b] active:scale-95 transition-all duration-200 self-start"
            >
              SUBSCRIBE
            </button>
          </div>

          <div
            v-else
            class="flex items-center gap-2 text-[#27ae60] text-[13px] font-semibold"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Thank you for subscribing!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
