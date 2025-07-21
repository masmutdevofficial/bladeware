<template>
  <div class="fixed top-0 w-full h-screen overflow-hidden">
    <!-- Latar belakang -->
    <div class="daun"></div>

    <!-- Gambar jatuh -->
    <div
      v-for="(image, index) in fallingImages"
      :key="index"
      class="falling-image"
      :style="image.style"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import fyicon from "@/assets/img/fyicon.png"; // Import gambar

const randomRange = (min, max) => Math.random() * (max - min) + min;

// Buat 15 daun jatuh dengan posisi dan ukuran acak
const fallingImages = ref(
  Array.from({ length: 35 }).map(() => {
    const size = randomRange(15, 30); // Ukuran antara 20px - 40px
    return {
      style: {
        top: `${randomRange(-100, -100)}px`, // Muncul dari atas acak (-50px s.d. 200px)
        right: `${randomRange(-200, window.innerWidth)}px`, // Muncul di posisi horizontal acak
        width: `${size}px`, // Ukuran acak
        height: `${size}px`, // Menjaga rasio
        backgroundImage: `url(${fyicon})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        animation: `falling-animation ${randomRange(5, 10)}s linear infinite`, // Durasi animasi acak
      },
    };
  })
);
</script>

<style>
.daun {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -1;
}

/* Animasi jatuh */
@keyframes falling-animation {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(-100vw, 100vh);
    opacity: 1;
  }
}

.falling-image {
  position: absolute;
}
</style>
