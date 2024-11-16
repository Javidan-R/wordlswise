import { Outlet } from "react-router-dom";
import { Map } from "../components/Map";
import { SideBar } from "../components/SideBar";
import style from "./AppLayout.module.css";
export default function AppLayout() {
  return (
    <div className={style.app}>
      <SideBar />
      <Map />
    </div>
  );
}
