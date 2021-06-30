import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

// Components
import Landing from "../views/Landing.vue";
import FAQ from "../views/FAQ.vue";
// import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register";
import RegisterCompany from "../views/auth/RegisterCompany";
import ResetPassword from "../views/auth/ResetPassword.vue";
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

// Company base view
import CompanyLayout from "@/layouts/CompanyLayout";
import CompanyDashboard from "@/views/company/Dashboard";
import CompanySearch from "@/views/company/Search";
import CompanyUser from "@/views/company/User";
import CompanyProfile from "@/views/company/Profile";
import CompanyProfileEdit from "@/views/company/ProfileEdit";
import CompanyProducts from "@/views/company/Products";
// import CompanyInbox from "@/views/company/Inbox";
import Qualifications from "@/views/dashboard/profile/Qualifications";
import ActualPosition from "@/views/dashboard/profile/ActualPosition";


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
    path: "/faq",
    name: "FAQ",
    component: FAQ,
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
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
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
          },
          {
            path: "qualifications",
            name: "Qualifications",
            component: Qualifications,
            meta: {
              requiresAuth: true,
              isAdmin: false
            }
          },
          {
            path: "actual-position",
            name: "ActualPosition",
            component: ActualPosition,
            meta: {
              requiresAuth: true,
              isAdmin: false
            }
          },
          {
            path: "*",
            redirect: "/dashboard/profile"
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
      },
      {
        path: "*",
        redirect: "/dashboard"
      }
    ]
  },
  {
    path: "/company-dashboard",
    component: CompanyLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "",
        name: "CompanyDashboard",
        component: CompanyDashboard,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: "profile",
        name: "CompanyProfile",
        component: CompanyProfile,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "profile/edit",
        name: "CompanyProfileEdit",
        component: CompanyProfileEdit,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "products",
        name: "CompanyProducts",
        component: CompanyProducts,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "search",
        name: "CompanySearch",
        component: CompanySearch,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "user/:id",
        name: "CompanyUser",
        component: CompanyUser,
        props: true,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: "inbox",
        name: "CompanyInbox",
        component: Chat,
        props: true,
        meta: {
          requiresAuth: true
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
