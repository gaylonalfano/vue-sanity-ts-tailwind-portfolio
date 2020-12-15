import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SinglePost from "../views/SinglePost.vue";
import Post from "../views/Post.vue";
import Project from "../views/Project.vue";

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
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
  // history: createWebHashHistory(), // BUGGY!
  history: createWebHistory(),
  routes
});

export default router;
