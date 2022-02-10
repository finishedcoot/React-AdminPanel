import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import SideBar from "../sidebar/Sidebar";

export default function Layout() {
  return (
    <>
      <Topbar />
      <div style={{ display: "flex", marginTop: 10 }}>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}
