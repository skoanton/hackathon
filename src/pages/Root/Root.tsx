import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import EventCard from "@/components/EventCard/EventCard";
import { Header } from "@/components/Header/Header";
import { ScrollArea } from "@/components/Scrollarea/Scrollarea";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <ScrollArea />
      <div>ROOOT</div>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />

      <Outlet />
      <BottomNavbar />
    </>
  );
};

export default Root;
