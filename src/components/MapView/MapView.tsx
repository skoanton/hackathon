import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
type MapViewProps = {};

const MapView = ({}: MapViewProps) => {
  return (
    <>
      <APIProvider apiKey={"AIzaSyBqXU1I1OHvE5oUMPLmPom3yhfm0Aqb2cc"}>
        <Map
          className="w-full h-full"
          defaultCenter={{ lat: 57.72, lng: 12.93 }}
          defaultZoom={13}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
        <Marker position={{ lat: 57.72, lng: 12.94 }} />
        <Marker position={{ lat: 57.719, lng: 12.944 }} />
        <Marker position={{ lat: 57.718, lng: 12.948 }} />
        <Marker position={{ lat: 57.717, lng: 12.942 }} />
        <Marker position={{ lat: 57.716, lng: 12.946 }} />
        <Marker position={{ lat: 57.715, lng: 12.939 }} />
        <Marker position={{ lat: 57.714, lng: 12.945 }} />
        <Marker position={{ lat: 57.713, lng: 12.943 }} />
        <Marker position={{ lat: 57.722, lng: 12.947 }} />
        <Marker position={{ lat: 57.723, lng: 12.941 }} />
        <Marker position={{ lat: 57.724, lng: 12.949 }} />
        <Marker position={{ lat: 57.725, lng: 12.937 }} />
        <Marker position={{ lat: 57.726, lng: 12.95 }} />
        <Marker position={{ lat: 57.727, lng: 12.942 }} />
        <Marker position={{ lat: 57.728, lng: 12.944 }} />
        <Marker position={{ lat: 57.729, lng: 12.936 }} />
        <Marker position={{ lat: 57.73, lng: 12.948 }} />
        <Marker position={{ lat: 57.731, lng: 12.939 }} />
      </APIProvider>
    </>
  );
};

export default MapView;
