import { lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "@/components/layout/layout";
import { withSuspense } from "@/router/withSuspense";
import LoginPage from "@/components/auth/userAuth/login";
import SignupPage from "@/components/auth/userAuth/signup";
import ForgotPasswordPage from "@/components/auth/userAuth/forgotPassword";
import VerifyOtpPage from "@/components/auth/userAuth/verifyOtp";
import Signupvendor from "@/components/auth/vendor/Signupvendor";
import Loginvendor from "@/components/auth/vendor/loginvendor";
import ForgotPasswordvendor from "@/components/auth/vendor/forgotPasswordvendor";

const Home = lazy(() => import("@/pages/homePage"));

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtpPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: withSuspense(Home) }],
  },



  //vendorRouter
  {
      path: "/vendor-signup",
      element: <Signupvendor />,
  },
   {
    path: "/vendor-login",
    element: <Loginvendor />,
  },
    {
    path: "/vendor-forgot",
    element: <ForgotPasswordvendor />,
  },
  {
    path: "/vendor-verify",
    element: <VerifyOtpPage />,
  },
];

export const router = createBrowserRouter(routes);
