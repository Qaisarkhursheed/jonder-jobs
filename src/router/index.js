import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Landing from "@/views/Landing.vue";
import authRoutes from "./auth.routes";
import jobseekerRoutes from "./jobseeker.routes";
import employerRoutes from "./employer.routes";

Vue.use(VueRouter);

const routes = [
  // Auth
  {
    path: "/auth",
    component: () => import("@/views/auth/Index"),
    children: authRoutes
  },

  // Jobseeker
  {
    path: "/jobseeker",
    component: () => import("@/layouts/jobseeker/JobseekerLayout"),
    children: jobseekerRoutes
  },

  // Employer
  {
    path: "/employer",
    component: () => import("@/layouts/employer/EmployerLayout"),
    children: employerRoutes
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
        name: "JobseekerHome"
      };

    case "Employer":
    case "Employee":
      return {
        name: "EmployerSearch"
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
