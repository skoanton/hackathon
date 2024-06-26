import { UserEventsContext } from "@/Context/UserEventsContext/UserEventsContext";
import { ScrollArea } from "@/components/Scrollarea/Scrollarea";
import { useContext } from "react";

type SavedEventPageProps = {};

const SavedEventPage = ({}: SavedEventPageProps) => {
  const { userEventsState } = useContext(UserEventsContext);

  return (
    <>
      <h2 className="text-xl font-bold text-center">Sparade events</h2>
      <div
        className={`p-2 ${
          userEventsState.favorites.length < 1 ? "bg-primary" : "bg-transparent"
        }`}
      >
        {userEventsState.favorites.length > 0 ? (
          <ScrollArea currentEventState={userEventsState.favorites} />
        ) : (
          <p className="text-center font-semibold italic text-white">
            Du har inga sparade event ännu
          </p>
        )}
      </div>
      <h2 className="text-xl font-bold text-center">Kommande event</h2>
      <div
        className={`p-2 ${
          userEventsState.attending.length < 1 ? "bg-primary" : "bg-transparent"
        }`}
      >
        {userEventsState.attending.length > 0 ? (
          <ScrollArea currentEventState={userEventsState.attending} />
        ) : (
          <p className="text-center font-semibold italic text-white">
            Du har inga kommande event
          </p>
        )}
      </div>
    </>
  );
};

export default SavedEventPage;
