import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import SinglePost from "@/views/SinglePost.vue";
import Post from "@/views/Post.vue";
import Project from "@/views/Project.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/post/:id",
    name: "SinglePost",
    component: SinglePost
  },
  {
    path: "/post",
    name: "Post",
    component: Post
  },
  {
    path: "/project",
    name: "Project",
    component: Project
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
