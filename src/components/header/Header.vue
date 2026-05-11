<script setup>
import HeaderTop from './HeaderTop.vue'
import HeaderMiddle from './HeaderMiddle.vue'
import HeaderBottom from './HeaderBottom.vue'
import LoginModal from '../auth/LoginModal.vue'
import AccountModal from '../auth/AccountModal.vue'
</script>

<template>
  <header class="w-full font-sans">
    <HeaderTop />
    <HeaderMiddle />
    <HeaderBottom />
    <!-- Modals live here, teleported to body -->
    <LoginModal />
    <AccountModal />
  </header>
</template>
