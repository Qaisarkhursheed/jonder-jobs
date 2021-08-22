import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

// Components
import Landing from "../views/Landing.vue";
import FAQ from "../views/FAQ.vue";
// import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import RegisterWelcome from "../views/auth/RegisterWelcome";
import RegisterUser from "../views/auth/RegisterUser";
import RegisterCompany from "../views/auth/RegisterCompany";
import RegisterVerifyEmail from "@/components/auth/AuthConfirmEmail";
import ForgotPassword from "../views/auth/ForgotPassword.vue";
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
import CompanySearch from "@/views/company/Search";
import CompanySelectionManagement from "@/views/company/SelectionManagement";
import CompanyTeamManagement from "@/views/company/TeamManagement";
import CompanyUser from "@/views/company/User";
import CompanyPublicProfile from "@/views/company/PublicProfile";
import CompanySettings from "@/views/company/Settings";
import CompanyPackagesPricing from "@/views/company/PackagesPricing";
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
      requiresAuth: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterWelcome,
    meta: {
      guest: true
    }
  },
  {
    path: "/register-user",
    name: "RegisterUser",
    component: RegisterUser,
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
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      guest: true
    }
  },
  {
    path: "/reset-password/:email/:expires/:token/:signature",
    name: "ResetPassword",
    component: ResetPassword,
    meta: {
      requiresAuth: false,
      guest: true
    }
  },
  {
    path: "/verify-email",
    name: "RegisterVerifyEmail",
    component: RegisterVerifyEmail,
    meta: {
      requiresAuth: true,
      verify: true,
      guest: false
    }
  },
  {
    path: "/onboarding",
    name: "ManualOnboarding",
    component: ManualOnboarding,
    meta: {
      requiresAuth: true,
      requiresUser: true,
      isOnboarding: true
    }
  },
  {
    path: "/onboarding-company",
    name: "ManualOnboardingCompany",
    component: ManualOnboardingCompany,
    meta: {
      requiresAuth: true,
      requiresCompany: true,
      isOnboarding: true
    }
  },
  {
    path: "/dashboard",
    component: DashboardWrap,
    meta: {
      requiresAuth: true,
      requiresUser: true,
      isAdmin: false
    },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard,
        meta: {
          requiresAuth: true,
          requiresUser: true,
          isAdmin: false
        }
      },
      {
        path: "notepad/:id",
        name: "Notepad",
        component: EditNotepad,
        meta: {
          requiresAuth: true,
          requiresUser: true,
          isAdmin: false
        }
      },
      {
        path: "profile",
        component: ProfileWrap,
        meta: {
          requiresAuth: true,
          requiresUser: true,
          isAdmin: false
        },
        children: [
          {
            path: "",
            name: "Profile",
            component: Profile,
            meta: {
              requiresAuth: true,
              requiresUser: true,
              isAdmin: false
            }
          },
          {
            path: "view/:id",
            name: "ProfileView",
            component: ProfileView,
            meta: {
              requiresAuth: true,
              requiresUser: true,
              isAdmin: false
            }
          },
          {
            path: "cv-maker",
            name: "CvMaker",
            component: CvMaker,
            meta: {
              requiresAuth: true,
              requiresUser: true,
              isAdmin: false
            }
          },
          {
            path: "qualifications",
            name: "Qualifications",
            component: Qualifications,
            meta: {
              requiresAuth: true,
              requiresUser: true,
              isAdmin: false
            }
          },
          {
            path: "actual-position",
            name: "ActualPosition",
            component: ActualPosition,
            meta: {
              requiresAuth: true,
              requiresUser: true,
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
    path: "/company-dashboard/settings",
    name: "CompanySettings",
    component: CompanySettings,
    props: true,
    meta: {
      requiresAuth: true,
      requiresCompany: true
    }
  },
  {
    path: "/company-dashboard",
    component: CompanyLayout,
    meta: {
      requiresAuth: true,
      requiresCompany: true
    },

    children: [
      {
        path: "",
        name: "CompanySearch",
        component: CompanySearch,
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },
      {
        path: "selection-management",
        name: "CompanySelectionManagement",
        component: CompanySelectionManagement,
        props: true,
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },
      {
        path: "messages",
        name: "CompanyMessages",
        component: Chat,
        props: true,
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },
      {
        path: "team-management",
        name: "CompanyTeamManagement",
        component: CompanyTeamManagement,
        props: true,
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },
      {
        path: "profile",
        name: "CompanyPublicProfile",
        component: CompanyPublicProfile,
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },
      {
        path: "user/:id",
        name: "CompanyUser",
        component: CompanyUser,
        props: true,
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },

      {
        path: "packages",
        name: "CompanyPackagesPricing",
        component: CompanyPackagesPricing,
        props: true,
        meta: {
          requiresAuth: true,
          requiresCompany: true
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
    redirect: { name: "Home" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const getDashboardRoute = () => {
  const user = store.getters["user/user"];

  if (!user) {
    return {
      name: "Login"
    };
  }

  switch (user.role) {
    case "Jobseeker":
      return {
        name: "Dashboard"
      };

    case "Employer":
      return {
        name: "CompanySearch"
      };

    default:
      console.log("Err: Unsupported user role.");
      alert("Error");
      return {
        name: "Login"
      };
  }
};

router.beforeEach(async (to, from, next) => {
  const isAuth = store.getters["auth/authenticated"];
  const user = store.getters["user/user"];
  
  if (to.meta.requiresAuth && isAuth && to.name != 'RegisterVerifyEmail') {
    if (!user.email_verified_at) {
      return router.replace({ name: "RegisterVerifyEmail"});
      }
  }

  if (to.name == "Logout") {
    store.dispatch("auth/logout").finally(() => {
      router.replace({ name: "Home" });
    });
  }

  if (to.meta.requiresAuth && !isAuth) {
    return next({ name: "Login", params: { nextUrl: to.fullPath } });
  }

  if (to.meta.guest && isAuth) {
    return router.replace(getDashboardRoute());
  }

  if (to.name == "Home" && isAuth) {
    return router.replace(getDashboardRoute());
  }

  if (
    (to.meta.requiresCompany && user.role != "Employer") ||
    (to.meta.requiresUser && user.role != "Jobseeker")
  ) {
    return next({ name: "Home" });
  }
  
  if (
    to.meta.requiresAuth &&
    !to.meta.isOnboarding &&
    !user.onboarding_finished
  ) {
    const userRole = store.getters["user/user"].role;
    
    if (userRole == "Jobseeker") {
      router.replace({ name: "ManualOnboarding" });
    } else if (userRole == "Employer") {
      router.replace({ name: "ManualOnboardingCompany" });
    } else {
      console.log("Err: Onboarding error for unsupported role.");
      alert("Error");
    }
  }

  return next();
});

export default router;
