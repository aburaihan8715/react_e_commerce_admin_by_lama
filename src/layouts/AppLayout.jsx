import { Outlet } from "react-router-dom";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./appLayout.css";

const AppLayout = () => {
  return (
    <div>
      <Topbar />
      <main className="container">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
