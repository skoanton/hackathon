import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import EventCard from "@/components/EventCard/EventCard";
import { ScrollArea } from "@/components/Scrollarea/Scrollarea";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
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
