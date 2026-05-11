<script setup>
defineProps({
  icon: { type: String, required: true },
  label: { type: String, default: "" },
});
</script>

<template>
  <button
    :title="label"
    class="flex-1 h-[40px] flex items-center justify-center border-r border-[#e8e8e8] last:border-r-0 text-[#888] hover:text-[#c0392b] hover:bg-[#fafafa] transition-all duration-200 cursor-pointer group"
  >
    <!-- Heart / Wishlist -->
    <svg
      v-if="icon === 'heart'"
      class="w-[16px] h-[16px] transition-transform duration-200 group-hover:scale-110"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
    <!-- Compare -->
    <svg
      v-if="icon === 'compare'"
      class="w-[16px] h-[16px] transition-transform duration-200 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      stroke-width="2.2"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    </svg>
    <!-- Eye / Quick View -->
    <svg
      v-if="icon === 'eye'"
      class="w-[16px] h-[16px] transition-transform duration-200 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      stroke-width="2.2"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
    <!-- Cart -->
    <svg
      v-if="icon === 'cart'"
      class="w-[16px] h-[16px] transition-transform duration-200 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      stroke-width="2.2"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg>
  </button>
</template>
