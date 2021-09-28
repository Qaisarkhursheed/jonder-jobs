export default [
  {
    path: "login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/auth/Login"),
    meta: {
      guest: true
    }
  },
  {
    path: "logout",
    name: "Logout",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "register",
    name: "Register",
    component: () =>
      import(
        /* webpackChunkName: "RegisterWelcome" */ "@/views/auth/RegisterWelcome"
      ),
    meta: {
      guest: true
    }
  },
  {
    path: "register-user",
    name: "RegisterUser",
    component: () =>
      import(
        /* webpackChunkName: "RegisterUser" */ "@/views/auth/RegisterUser"
      ),
    meta: {
      guest: true
    }
  },
  {
    path: "register-company",
    name: "RegisterCompany",
    component: () =>
      import(
        /* webpackChunkName: "RegisterCompany" */ "@/views/auth/RegisterCompany"
      ),
    meta: {
      guest: true
    }
  },
  {
    path: "forgot-password",
    name: "ForgotPassword",
    component: () =>
      import(
        /* webpackChunkName: "ForgotPassword" */ "@/views/auth/ForgotPassword"
      ),
    meta: {
      guest: true
    }
  },
  {
    path: "reset-password/:email/:expires/:token/:signature",
    name: "ResetPassword",
    component: () =>
      import(
        /* webpackChunkName: "ResetPassword" */ "@/views/auth/ResetPassword"
      ),
    meta: {
      requiresAuth: false,
      guest: true
    }
  },
  {
    path: "set-password/:token/:expires/:signature",
    name: "SetPassword",
    component: () =>
      import(/* webpackChunkName: "SetPassword" */ "@/views/auth/SetPassword"),
    meta: {
      requiresAuth: false,
      guest: true
    }
  },
  {
    path: "verify-email",
    name: "RegisterVerifyEmail",
    component: () =>
      import(
        /* webpackChunkName: "AuthConfirmEmail" */ "@/components/auth/AuthConfirmEmail"
      ),
    meta: {
      requiresAuth: false,
      verify: true,
      guest: true
    }
  },
  {
    path: "/onboarding",
    name: "ManualOnboarding",
    component: () =>
      import(
        /* webpackChunkName: "ManualOnboarding" */ "@/views/auth/ManualOnboarding"
      ),
    meta: {
      requiresAuth: true,
      requiresUser: true,
      isOnboarding: true
    }
  },
  {
    path: "/onboarding-company",
    name: "ManualOnboardingCompany",
    component: () =>
      import(
        /* webpackChunkName: "ManualOnboardingCompany" */ "@/views/auth/ManualOnboardingCompany"
      ),
    meta: {
      requiresAuth: true,
      requiresCompany: true,
      isOnboarding: true
    }
  }
];
