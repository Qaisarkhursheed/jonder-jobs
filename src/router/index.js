import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

// Components
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register";
import Dashboard from "../views/Dashboard";
import Protected from "../views/Protected";
import ManualOnboarding from "../views/auth/ManualOnboarding";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: "/logout",
    name: "Logout",
    meta: {
      requiresAuth: true,
      isAdmin: false
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: "/onboarding",
    name: "ManualOnboarding",
    component: ManualOnboarding,
    meta: {
      guest: true
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
      isAdmin: false
    }
  },
  {
    path: "/protected",
    name: "Protected",
    component: Protected,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("user-token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      let user = JSON.parse(localStorage.getItem("user"));

      if (to.matched.some(record => record.meta.isAdmin)) {
        if (user.role === "admin") {
          next();
        } else {
          next({ name: "Dashboard" });
        }
      } else {
        if (to.fullPath === "/logout") {
          store.dispatch("auth/logout");

          next({ name: "Home" });
        }
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("user-token") == null) {
      next();
    } else {
      next({ name: "Dashboard" });
    }
  } else {
    next();
  }
});

export default router;
