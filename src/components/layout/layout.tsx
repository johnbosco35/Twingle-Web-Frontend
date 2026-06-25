import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/static/user/header";
import Footer from "@/components/static/user/footer";

const layout: React.FC = () => {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default layout;
