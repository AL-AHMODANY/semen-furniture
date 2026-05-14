<script setup>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
import QuickViewModal from './components/shop/QuickViewModal.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[#f7f7f2] text-[#222]">
    <Header />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
    <QuickViewModal />
  </div>
</template>
