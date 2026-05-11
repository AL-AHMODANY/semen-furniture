<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (v) =>
      ["primary", "outline", "dark", "outline-dark"].includes(v),
  },
  size: {
    type: String,
    default: "md",
    validator: (v) => ["sm", "md", "lg"].includes(v),
  },
  text: { type: String, default: "" },
});
const emit = defineEmits(["click"]);
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer rounded',
      size === 'sm'
        ? 'px-4 py-2 text-[11px]'
        : size === 'lg'
          ? 'px-8 py-4 text-[12px]'
          : 'px-6 py-3 text-[12px]',
      variant === 'primary'
        ? 'bg-[#c0392b] text-white hover:bg-[#a93226] shadow-md hover:shadow-lg'
        : '',
      variant === 'outline'
        ? 'border-2 border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white'
        : '',
      variant === 'dark'
        ? 'bg-[#222] text-white hover:bg-[#c0392b] shadow-md hover:shadow-lg'
        : '',
      variant === 'outline-dark'
        ? 'border-2 border-[#222] text-[#222] hover:bg-[#222] hover:text-white'
        : '',
    ]"
    @click="emit('click')"
  >
    {{ text }}
  </button>
</template>
