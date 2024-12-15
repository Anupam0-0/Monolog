import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
        <Navbar /> 
        <Outlet /> 
    </div>
  );
};

export default MainLayout;
