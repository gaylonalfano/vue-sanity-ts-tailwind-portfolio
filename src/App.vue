<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue"; // @ is short for src

export default defineComponent({
  name: "App",
  components: {
    NavBar
  }
});
</script>
