<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  align: {
    type: String,
    default: 'left',
    validator: (v) => ['left', 'center'].includes(v),
  },
})
</script>

<template>
  <div :class="['mb-6', align === 'center' ? 'text-center' : 'text-left']">
    <div :class="['flex items-center gap-3', align === 'center' ? 'justify-center' : 'justify-start']">
      <!-- Red accent bar -->
      <span class="block w-1 h-6 bg-[#c0392b] flex-shrink-0" v-if="align !== 'center'"></span>
      <h2 class="text-xl font-bold uppercase tracking-widest text-[#222]">{{ title }}</h2>
    </div>
    <p v-if="subtitle" class="mt-1.5 text-[13px] text-[#888]" :class="align === 'center' ? 'text-center' : ''">
      {{ subtitle }}
    </p>
  </div>
</template>
