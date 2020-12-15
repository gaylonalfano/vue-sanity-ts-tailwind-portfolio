<template>
  <div class="post">
    <h1>These are my blog posts!</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface IPost {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
}

export default defineComponent({
  name: "Post",
});
</script>>
