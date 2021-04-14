import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

// Components
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register";
import Protected from "../views/Protected";
import ManualOnboarding from "../views/auth/ManualOnboarding";
import DashboardWrap from "../views/Dashboard";
import Dashboard from "../views/dashboard/Dashboard";
import ProfileWrap from "../views/dashboard/ProfileWrap";
import Profile from "../views/dashboard/profile/Profile";
import EditNotepad from "../views/dashboard/EditNotepad";
import Chat from "../views/dashboard/Chat";
import ProductPricing from "../views/dashboard/ProductPricing";
import CvMaker from "../views/dashboard/profile/CvMaker";

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
    component: DashboardWrap,
    meta: {
      requiresAuth: true,
      isAdmin: false
    },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard,
        meta: {
          requiresAuth: true,
          isAdmin: false
        }
      },
      {
        path: "notepad/:id",
        name: "Notepad",
        component: EditNotepad,
        meta: {
          requiresAuth: true,
          isAdmin: false
        }
      },
      {
        path: "profile",
        name: "ProfileWrap",
        component: ProfileWrap,
        meta: {
          requiresAuth: true,
          isAdmin: false
        },
        children: [
          {
            path: "",
            name: "Profile",
            component: Profile,
            meta: {
              requiresAuth: true,
              isAdmin: false
            }
          },
          {
            path: "cv-maker",
            name: "CvMaker",
            component: CvMaker,
            meta: {
              requiresAuth: true,
              isAdmin: false
            }
          }
        ]
      },
      {
        path: "chat",
        name: "Chat",
        component: Chat,
        meta: {
          requiresAuth: true,
          isAdmin: false
        }
      },
      {
        path: "product-pricing",
        name: "ProductPricing",
        component: ProductPricing,
        meta: {
          requiresAuth: true,
          isAdmin: false
        }
      }
    ]
  },
  {
    path: "/protected",
    name: "Protected",
    component: Protected,
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    // will match everything
    path: "*",
    redirect: "/home"
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
      store.dispatch("user/me");
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
