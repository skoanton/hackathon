import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div>ROOOT</div>
      <Outlet />
      <BottomNavbar />
    </>
  );
};

export default Root;
