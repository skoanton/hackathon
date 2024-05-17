import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import { Header } from "@/components/Header/Header";
import MapView from "@/components/MapView/MapView";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="h-screen">
        {/* <Header /> */}
        <main className="pb-16 h-screen  overflow-y-auto overflow-x-hidden ">
          <Outlet />
        </main>
        <BottomNavbar />
      </div>
    </>
  );
};

export default Root;
