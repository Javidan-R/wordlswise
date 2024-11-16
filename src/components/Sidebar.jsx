import React from "react";
import style from "./Sidebar.module.css";
import Logo from "./Logo";
import { AppNav } from "./AppNav";
import { Outlet } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      <p>
        This is the sidebar component. It includes a logo and a navigation menu.
      </p>
      <div className={style.content}>
        <Outlet />
      </div>
      <footer className={style.footer}>
        <p className={style.copyright}>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
