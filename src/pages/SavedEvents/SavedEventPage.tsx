import { UserEventsContext } from "@/Context/UserEventsContext/UserEventsContext";
import EventCard from "@/components/EventCard/EventCard";
import { useContext } from "react";

type SavedEventPageProps = {};

const SavedEventPage = ({}: SavedEventPageProps) => {
  const { userEventsState } = useContext(UserEventsContext);

  return (
    <>
      <h2 className="text-xl font-bold">Upcoming event for you</h2>
      <ul>
        {userEventsState.favorites.length > 0 ? (
          <ul>
            {userEventsState.favorites.map((favEvent) => {
              return (
                <li>
                  <EventCard event={favEvent} />
                </li>
              );
            })}
          </ul>
        ) : (
          <div>inga events</div>
        )}
      </ul>
      <h2 className="text-xl font-bold">Upcoming event for you</h2>
      {userEventsState.attending.length > 0 ? (
        <ul>
          {userEventsState.favorites.map((favEvent) => {
            return (
              <li>
                <EventCard event={favEvent} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div>inga events</div>
      )}
    </>
  );
};

export default SavedEventPage;
