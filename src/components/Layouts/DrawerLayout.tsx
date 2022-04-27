import React from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "./MainLayout";

const DrawerLayout = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default DrawerLayout;
