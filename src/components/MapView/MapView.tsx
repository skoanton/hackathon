import { EventsContext } from "@/Context/EventsContext/EventsContext";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { useContext } from "react";
import { CustomMarker } from "./CustomMarker";

type MapViewProps = {};

const MapView = ({}: MapViewProps) => {
  const { eventsState } = useContext(EventsContext);

  return (
    <>
      <APIProvider apiKey={"AIzaSyBqXU1I1OHvE5oUMPLmPom3yhfm0Aqb2cc"}>
        <Map
          className="w-full h-full"
          defaultCenter={{ lat: 57.72, lng: 12.93 }}
          defaultZoom={13}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId={"MapViewMap"}
        >
          {eventsState.event.map((event) => (
            <CustomMarker event={event} key={event.id} />
          ))}
        </Map>
      </APIProvider>
    </>
  );
};

export default MapView;
