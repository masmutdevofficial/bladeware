import { createRouter, createWebHistory } from "vue-router";
import { jwtDecode } from "jwt-decode";

import Home from "../views/landing/Home.vue";
import Example from "../views/landing/Example.vue";
import About from "../views/landing/About.vue";
import Service from "../views/landing/Service.vue";
import Solution from "../views/landing/Solution.vue";
import Register from "@/views/auth/Register.vue";
import Login from "@/views/auth/Login.vue";
import Profile from "@/views/landing/Profile.vue";
import Membership from "@/views/landing/Membership.vue";
import Apps from "@/views/landing/Apps.vue";
import Financial from "@/views/landing/Financial.vue";
import Boost from "@/views/landing/Boost.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/example",
    name: "example",
    component: Example,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/service",
    name: "service",
    component: Service,
  },
  {
    path: "/solution",
    name: "solution",
    component: Solution,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: "/membership",
    name: "membership",
    component: Membership,
    meta: { requiresAuth: true },
  },
  {
    path: "/apps-records",
    name: "apps-records",
    component: Apps,
    meta: { requiresAuth: true },
  },
  {
    path: "/financial-details",
    name: "financial-details",
    component: Financial,
    meta: { requiresAuth: true },
  },
  {
    path: "/boost",
    name: "boost",
    component: Boost,
    meta: { requiresAuth: true },
  },
];

// Buat router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("jwt_token");

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken.exp < currentTime) {
        // Token expired, hapus dan redirect ke login
        localStorage.removeItem("jwt_token");
        sessionStorage.setItem("redirectReason", "session_expired");
        next({ name: "login" });
        return;
      }

      // Jika pengguna sudah login dan mencoba akses halaman public, arahkan ke dashboard
      if (["landing", "login", "register"].includes(to.name)) {
        next({ name: "dashboard" });
        return;
      }
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("jwt_token");
      sessionStorage.setItem("redirectReason", "session_expired");
      next({ name: "login" });
      return;
    }
  }

  // Cek jika halaman butuh autentikasi tetapi user belum login
  if (to.meta.requiresAuth && !token) {
    sessionStorage.setItem("redirectReason", "auth_required");
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
