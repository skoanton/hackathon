import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import { StartpageCarousel } from "@/components/Carousel/Carousel";
import { Header } from "@/components/Header/Header";
import { ScrollArea } from "@/components/Scrollarea/Scrollarea";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <StartpageCarousel />
      <ScrollArea />
      <Outlet />
      <BottomNavbar />
    </>
  );
};

export default Root;
