<template>
  <main class="home">
    <img
      src="../assets/joe-woods-4Zaq5xY5M_c-unsplash.jpg"
      alt="Textured Brick Wall"
      class="absolute object-cover w-full h-full"
    />
    <section
      class="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8"
    >
      <h1
        class="text-6xl text-gray-600 font-bold cursive leading-none lg:leading-snug home-name"
      >
        好
      </h1>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home"
});
</script>
