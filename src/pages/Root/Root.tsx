import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import { Header } from "@/components/Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div>
        {/* <Header /> */}
        <main className="pb-14">
          <Outlet />
        </main>
        <BottomNavbar />
      </div>
    </>
  );
};

export default Root;
