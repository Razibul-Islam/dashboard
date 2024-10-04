import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Main() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Dashboard />
      <Outlet />
    </div>
  );
}
