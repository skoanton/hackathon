import { UserEventsContext } from "@/Context/UserEventsContext/UserEventsContext";
import { ScrollArea } from "@/components/Scrollarea/Scrollarea";
import { useContext } from "react";

type SavedEventPageProps = {};

const SavedEventPage = ({}: SavedEventPageProps) => {
  const { userEventsState } = useContext(UserEventsContext);

  return (
    <>
      <h2 className="text-xl font-bold">Upcoming event for you</h2>
      <ScrollArea currentEventState={userEventsState.favorites} />
      <h2 className="text-xl font-bold">Upcoming event for you</h2>
      <ScrollArea currentEventState={userEventsState.attending} />
    </>
  );
};

export default SavedEventPage;
