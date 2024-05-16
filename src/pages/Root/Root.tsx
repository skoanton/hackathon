import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import { Header } from "@/components/Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className=" flex-grow pb-12">
          <Outlet />
        </main>
        <BottomNavbar />
      </div>
    </>
  );
};

export default Root;
