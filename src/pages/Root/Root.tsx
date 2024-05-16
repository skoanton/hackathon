import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import { ScrollArea } from "@/components/Scrollarea/Scrollarea";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div>ROOOT</div>
      <ScrollArea />
      <Outlet />
      <BottomNavbar />
    </>
  );
};

export default Root;
