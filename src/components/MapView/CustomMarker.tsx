import { Event } from "@/types/eventTypes";
import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { useState } from "react";

export const CustomMarker = ({ event }: any) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openEventModal = () => {
    console.log("Open ", event.title);
    setModalOpen(true);
  };

  const closeEventModal = () => {
    console.log("close ", event.title);
    setModalOpen(false);
  };

  return (
    <>
      <AdvancedMarker
        key={event.id}
        position={{ lat: event.latitude, lng: event.longitude }}
        onClick={() => openEventModal()}
        className="z-5"
      >
        {modalOpen && (
          <div className="w-64 h-44 bg-black opacity-80 p-2 -z-50">
            <header className="flex justify-between items-center text-white">
              <div>
                <h1 className="w-full h-6 text-lg">{event.title}</h1>
                <h2 className="2-full h-4 text-xs font-extralight">{event.date.toDateString()}</h2>
              </div>
              <p className="text-white text-xl" onClick={() => closeEventModal()}>
                🗙
              </p>
            </header>
            <img src={`${event.images}`} alt="" className="max-w-full max-h-28" />
            <a
              className="text-white font-lg"
              target="_blank"
              href={`https://www.google.com/maps/place/${event.latitude},${event.longitude}`}
            >
              Link to Google Maps
            </a>{" "}
          </div>
        )}

        <div className={`rounded-full bg-blue-300 ${!modalOpen && "w-6 h-6 border-blue-500 border-4 z-0"}`}></div>
      </AdvancedMarker>
    </>
  );
};
