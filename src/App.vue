<script setup>
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics />
  <Menu />
  <router-view />
  <Footer />
</template>
