import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import { Header } from "@/components/Header/Header";
import { ScrollArea } from "@/components/Scrollarea/Scrollarea";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <ScrollArea />
      <Outlet />
      <BottomNavbar />
    </>
  );
};

export default Root;
