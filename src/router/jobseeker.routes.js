export default [
  {
    path: "home",
    alias: "",
    name: "JobseekerHome",
    component: () => import("@/views/jobseeker/Home"),
    meta: {
      requiresAuth: true,
      requiresUser: true
    }
  },
  {
    path: "profile",
    name: "JobseekerProfile",
    component: () => import("@/views/jobseeker/Profile"),
    meta: {
      requiresAuth: true,
      requiresUser: true,
      showBackButton: true
    }
  },
  {
    path: "personality-test",
    name: "PersonalityTestJobseeker",
    component: () => import("@/views/jobseeker/PersonalityTest"),
    meta: {
      requiresAuth: true,
      requiresUser: true
    }
  },
  {
    path: "personality-test/:id",
    name: "PersonalityTestJobseekerResult",
    component: () => import("@/views/jobseeker/PersonalityTestResult"),
    props: true,
    meta: {
      requiresAuth: true
    }
  },
];
