<template>
  <header class="bg-gray-800">
    <div class="container mx-auto flex justify-between">
      <nav class="flex">
        <router-link
          to="/"
          exact
          class="inline-flex items-center py-6 px-3 mr-4 rounded-md text-gray-300 hover:text-white text-4xl font-bold cursive tracking-widest"
          active-class="text-white"
          >Gaylon</router-link
        >
        <router-link
          to="/post"
          class="inline-flex items-center py-3 px-3 my-6 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
          active-class="bg-gray-900 text-white"
          >Blog Posts</router-link
        >
        <router-link
          to="/project"
          class="inline-flex items-center py-3 px-3 my-6 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
          active-class="bg-gray-900 text-white"
          >Projects</router-link
        >
        <router-link
          to="/about"
          class="inline-flex items-center py-3 px-3 my-6 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
          active-class="bg-gray-900 text-white"
          >About me!</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>
