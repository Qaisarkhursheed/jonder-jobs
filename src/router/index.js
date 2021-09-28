import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Landing from "@/views/Landing.vue";
import authRoutes from "./auth.routes";

Vue.use(VueRouter);

const routes = [
  // Auth
  {
    path: "/auth",
    component: () => import("@/views/auth/Index"),
    children: authRoutes
  },

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
    component: () => import(/* webpackChunkName: "FAQ" */ "@/views/FAQ"),
    meta: {
      guest: true
    }
  },
  {
    path: "/meet/:meet_id",
    name: "Meet",
    component: () => import("@/views/Meet"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/views/Dashboard"),
    meta: {
      requiresAuth: true,
      requiresUser: true,
      isAdmin: false
    },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () =>
          import(
            /* webpackChunkName: "DashboardDashboard" */ "@/views/dashboard/Dashboard"
          ),
        meta: {
          requiresAuth: true,
          requiresUser: true,
          isAdmin: false
        }
      },
      {
        path: "notepad/:id",
        name: "Notepad",
        component: () =>
          import(
            /* webpackChunkName: "EditNotepad" */ "@/views/dashboard/EditNotepad"
          ),
        meta: {
          requiresAuth: true,
          requiresUser: true,
          isAdmin: false
        }
      },
      {
        path: "profile",
        component: () =>
          import(
            /* webpackChunkName: "ProfileWrap" */ "@/views/dashboard/ProfileWrap"
          ),
        meta: {
          requiresAuth: true,
          requiresUser: true,
          isAdmin: false
        },
        children: [
          {
            path: "",
            name: "Profile",
            component: () =>
              import(
                /* webpackChunkName: "Profile" */ "@/views/dashboard/profile/Profile"
              ),
            meta: {
              requiresAuth: true,
              requiresUser: true,
              isAdmin: false
            }
          },
          {
            path: "view/:id",
            name: "ProfileView",
            component: () =>
              import(
                /* webpackChunkName: "ProfileView" */ "@/views/dashboard/profile/ProfileView"
              ),
            meta: {
              requiresAuth: true,
              requiresUser: true,
              isAdmin: false
            }
          },
          {
            path: "cv-maker",
            name: "CvMaker",
            component: () =>
              import(
                /* webpackChunkName: "CvMaker" */ "@/views/dashboard/profile/CvMaker"
              ),
            meta: {
              requiresAuth: true,
              requiresUser: true,
              isAdmin: false
            }
          },
          {
            path: "qualifications",
            name: "Qualifications",
            component: () =>
              import(
                /* webpackChunkName: "Qualifications" */ "@/views/dashboard/profile/Qualifications"
              ),
            meta: {
              requiresAuth: true,
              requiresUser: true,
              isAdmin: false
            }
          },
          {
            path: "actual-position",
            name: "ActualPosition",
            component: () =>
              import(
                /* webpackChunkName: "ActualPosition" */ "@/views/dashboard/profile/ActualPosition"
              ),
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
        component: () =>
          import(/* webpackChunkName: "Chat" */ "@/views/dashboard/Chat"),
        meta: {
          requiresAuth: true,
          isAdmin: false
        }
      },
      {
        path: "chat/:id/:type",
        name: "ChatDetail",
        component: () =>
          import(/* webpackChunkName: "Chat" */ "@/views/dashboard/Chat"),
        meta: {
          requiresAuth: true,
          isAdmin: false
        }
      },
      {
        path: "product-pricing",
        name: "ProductPricing",
        component: () =>
          import(
            /* webpackChunkName: "ProductPricing" */ "@/views/dashboard/ProductPricing"
          ),
        meta: {
          requiresAuth: true,
          isAdmin: false
        }
      },
      {
        path: "personality-test",
        name: "PersonalityTestJobseeker",
        component: () =>
          import(
            /* webpackChunkName: "PersonalityTestJobseeker" */ "@/views/dashboard/PersonalityTest"
          ),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "*",
        redirect: "/dashboard"
      }
    ]
  },
  {
    path: "/admin",
    component: () =>
      import(/* webpackChunkName: "AdminLayout" */ "@/layouts/AdminLayout"),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "dashboard",
        name: "AdminDashboard",
        component: () =>
          import(
            /* webpackChunkName: "AdminDashboard" */ "@/views/admin/Dashboard"
          )
      },
      {
        path: "company-management",
        name: "AdminCompanyManagement",
        component: () =>
          import(
            /* webpackChunkName: "CompanyManagement" */ "@/views/admin/CompanyManagement"
          )
      },
      {
        path: "company-management/:id",
        name: "AdminCompanyManagementUser",
        component: () =>
          import(
            /* webpackChunkName: "CompanyManagementUser" */ "@/views/admin/CompanyManagementUser"
          ),
        props: true
      },
      {
        path: "jobseeker-management",
        name: "AdminJobseekerManagement",
        component: () =>
          import(
            /* webpackChunkName: "JobseekerManagement" */ "@/views/admin/JobseekerManagement"
          )
      },
      {
        path: "jobseeker-management/:id",
        name: "AdminJobseekerManagementUser",
        component: () =>
          import(
            /* webpackChunkName: "JobseekerManagementUser" */ "@/views/admin/JobseekerManagementUser"
          ),
        props: true
      },
      {
        path: "cms",
        name: "AdminCMS",
        component: () =>
          import(/* webpackChunkName: "CMS" */ "@/views/admin/CMS")
      }
    ]
  },
  {
    path: "/company-dashboard/settings",
    name: "CompanySettings",
    component: () =>
      import(/* webpackChunkName: "Settings" */ "@/views/company/Settings"),
    props: true,
    meta: {
      requiresAuth: true,
      requiresCompany: true
    }
  },
  {
    path: "/company-dashboard",
    component: () =>
      import(/* webpackChunkName: "CompanyLayout" */ "@/layouts/CompanyLayout"),
    meta: {
      requiresAuth: true,
      requiresCompany: true
    },

    children: [
      {
        path: "",
        name: "CompanySearch",
        component: () =>
          import(/* webpackChunkName: "Search" */ "@/views/company/Search"),
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },
      {
        path: "selection-management",
        name: "CompanySelectionManagement",
        component: () =>
          import(
            /* webpackChunkName: "SelectionManagement" */ "@/views/company/SelectionManagement"
          ),
        props: true,
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },
      {
        path: "messages",
        name: "CompanyMessages",
        component: () =>
          import(/* webpackChunkName: "Messages" */ "@/views/company/Messages"),
        props: true,
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },
      {
        path: "message-templates",
        name: "CompanyMessageTemplates",
        component: () =>
          import(
            /* webpackChunkName: "MessageTemplates" */ "@/views/company/MessageTemplates"
          ),
        props: true,
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },
      {
        path: "team-management",
        name: "CompanyTeamManagement",
        component: () =>
          import(
            /* webpackChunkName: "TeamManagement" */ "@/views/company/TeamManagement"
          ),
        props: true,
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },
      {
        path: "profile",
        name: "CompanyPublicProfile",
        component: () =>
          import(
            /* webpackChunkName: "PublicProfile" */ "@/views/company/PublicProfile"
          ),
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },
      {
        path: "user/:id",
        name: "CompanyUserOverview",
        component: () =>
          import(
            /* webpackChunkName: "UserOverview" */ "@/views/company/UserOverview"
          ),
        props: true,
        meta: {
          requiresAuth: true,
          requiresCompany: true
        }
      },

      {
        path: "packages",
        name: "CompanyPackagesPricing",
        component: () =>
          import(
            /* webpackChunkName: "PackagesPricing" */ "@/views/company/PackagesPricing"
          ),
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
    component: () =>
      import(/* webpackChunkName: "Protected" */ "@/views/Protected"),
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
    case "Employee":
      return {
        name: "CompanySearch"
      };
    case "Admin":
      return {
        name: "AdminDashboard"
      };
    default:
      console.log("Err: Unsupported user role.");
      alert("Error");
      return {
        name: "Logout"
      };
  }
};

router.beforeEach(async (to, from, next) => {
  const isAuth = store.getters["auth/authenticated"];
  const user = store.getters["user/user"];

  // if(user.role === "Admin") {
  //   router.replace({ name: "AdminDashboard" });
  // }

  if (to.name === "Logout") {
    store.dispatch("auth/logout").finally(() => {
      store.commit("chat/CLEAR_SINGLE_CONVERSATION");
      router.replace({ name: "Home" });
    });
  }

  if (to.meta.requiresAuth && isAuth && !user.email_verified_at) {
    if (to.name !== "RegisterVerifyEmail") {
      return router.replace({ name: "RegisterVerifyEmail" });
    }
  }

  if (to.meta.requiresAuth && !isAuth) {
    return next({ name: "Login", query: { redirect: to.fullPath } });
  }

  if (to.meta.guest && isAuth) {
    return router.replace(getDashboardRoute());
  }

  if (to.name === "Home" && isAuth) {
    return router.replace(getDashboardRoute());
  }

  if (
    (to.meta.requiresCompany &&
      user.role !== "Employer" &&
      user.role !== "Employee") ||
    (to.meta.requiresUser && user.role !== "Jobseeker")
  ) {
    return next({ name: "Home" });
  }

  if (
    to.meta.requiresAuth &&
    !to.meta.isOnboarding &&
    user.email_verified_at &&
    !user.onboarding_finished
  ) {
    const userRole = store.getters["user/user"].role;

    if (userRole === "Jobseeker") {
      router.replace({ name: "ManualOnboarding" });
    } else if (userRole === "Employer") {
      router.replace({ name: "ManualOnboardingCompany" });
    } else {
      console.log("Err: Onboarding error for unsupported role.");
      alert("Error");
    }
  }

  return next();
});

export default router;
