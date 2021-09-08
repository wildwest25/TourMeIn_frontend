import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { hideNavigation: true },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: { hideNavigation: true },
    component: () => import("../views/Register.vue"),
  },

  {
    path: "/registracija_uspjesna",
    name: "Registracija_uspjesna",
    meta: { hideNavigation: true },
    component: () => import("../views/Registracija_uspjesna.vue"),
  },

  {
    path: "/guide_profile",
    name: "Guide_profile",
    meta: {},
    component: () => import("../views/Guide_profile.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/my_previous_tours_guide",
    name: "My_previous_tours_guide",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/My_previous_tours-guide.vue"),
  },
  {
    path: "/notifications",
    name: "Notifications",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/Notifications.vue"),
  },
  {
    path: "/messages",
    name: "Messages",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/Messages.vue"),
  },
  {
    path: "/msg_preview",
    name: "Msg_preview",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/Msg_preview.vue"),
  },
  {
    path: "/user_profile",
    name: "User_profile",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/UserProfile.vue"),
  },
  {
    path: "/UserPage",
    name: "UserPage",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/UserPage.vue"),
  },
  {
    path: "/my_guides",
    name: "My_Guides",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/My_guides.vue"),
  },
  {
    path: "/events",
    name: "Events",
    meta: {
      needsUser: true,
    },
    component: () => import("../views/Events.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
