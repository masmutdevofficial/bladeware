<script setup>
import { RouterView } from "vue-router";
import LandingLayout from "@/views/layouts/LandingLayout.vue";
</script>

<template>
  <LandingLayout>
    <RouterView />
  </LandingLayout>
</template>

<style>
::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
}
</style>
