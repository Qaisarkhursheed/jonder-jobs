import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

// Components
import Landing from "../views/Landing.vue";
// import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register";
import RegisterCompany from "../views/auth/RegisterCompany";
import Protected from "../views/Protected";
import ManualOnboarding from "../views/auth/ManualOnboarding";
import ManualOnboardingCompany from "../views/auth/ManualOnboardingCompany";
import DashboardWrap from "../views/Dashboard";
import Dashboard from "../views/dashboard/Dashboard";
import ProfileWrap from "../views/dashboard/ProfileWrap";
import Profile from "../views/dashboard/profile/Profile";
import ProfileView from "../views/dashboard/profile/ProfileView";
import EditNotepad from "../views/dashboard/EditNotepad";
import Chat from "../views/dashboard/Chat";
import ProductPricing from "../views/dashboard/ProductPricing";
import CvMaker from "../views/dashboard/profile/CvMaker";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Landing,
    meta: {
      guest: true
    }
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
    path: "/register-company",
    name: "RegisterCompany",
    component: RegisterCompany,
    meta: {
      guest: true
    }
  },
  {
    path: "/onboarding",
    name: "ManualOnboarding",
    component: ManualOnboarding,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/onboarding-company",
    name: "ManualOnboardingCompany",
    component: ManualOnboardingCompany,
    meta: {
      requiresAuth: true
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
            path: "view/:id",
            name: "ProfileView",
            component: ProfileView,
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
        path: "chat/:id/:type",
        name: "ChatDetail",
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

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("user-token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      let user = await store.dispatch("user/me");

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
        } else {
          next();
        }
      }
    }
  } else if (
    to.matched.some(
      record => record.name === "Login" || record.name === "Register"
    )
  ) {
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
