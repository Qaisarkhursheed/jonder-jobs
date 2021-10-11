export default [
  {
    path: "profile",
    name: "EmployerProfile",
    component: () => import("@/views/employer/Profile"),
    props: true,
    meta: {
      requiresAuth: true,
      requiresCompany: true,
      sidebar: false,
      showBackButton: true
    }
  },
  {
    path: "search",
    alias: "",
    name: "EmployerSearch",
    component: () => import("@/views/employer/Search"),
    meta: {
      requiresAuth: true,
      requiresCompany: true,
      sidebar: true
    }
  },
  {
    path: "selection-management",
    name: "EmployerSelectionManagement",
    component: () => import("@/views/employer/SelectionManagement"),
    props: true,
    meta: {
      requiresAuth: true,
      requiresCompany: true,
      sidebar: true
    }
  },
  {
    path: "messages",
    name: "EmployerMessages",
    component: () => import("@/views/employer/Messages"),
    props: true,
    meta: {
      requiresAuth: true,
      requiresCompany: true,
      sidebar: true
    }
  },
  {
    path: "message-templates",
    name: "EmployerMessageTemplates",
    component: () => import("@/views/employer/MessageTemplates"),
    props: true,
    meta: {
      requiresAuth: true,
      requiresCompany: true,
      sidebar: true
    }
  },
  {
    path: "team-management",
    name: "EmployerTeamManagement",
    component: () => import("@/views/employer/TeamManagement"),
    props: true,
    meta: {
      requiresAuth: true,
      requiresCompany: true,
      sidebar: true
    }
  },
  {
    path: "public-profile",
    name: "EmployerPublicProfile",
    component: () => import("@/views/employer/PublicProfile"),
    meta: {
      requiresAuth: true,
      requiresCompany: true,
      sidebar: true
    }
  },
  {
    path: "packages",
    name: "EmployerPackagesPricing",
    component: () => import("@/views/employer/PackagesPricing"),
    props: true,
    meta: {
      requiresAuth: true,
      requiresCompany: true,
      sidebar: true
    }
  },
  {
    path: "jobseeker/:id",
    name: "EmployerUserOverview",
    component: () => import("@/views/employer/UserOverview"),
    props: true,
    meta: {
      requiresAuth: true,
      requiresCompany: true,
      sidebar: true
    }
  },
  {
    path: "jobseeker/:id/personality-test/:id",
    name: "PersonalityTestResultEmployer",
    component: () => import("@/views/jobseeker/PersonalityTestResult"),
    props: true,
    meta: {
      requiresAuth: true
    }
  },
];
