<script setup>
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <Menu />
  <router-view />
  <Footer />
</template>
