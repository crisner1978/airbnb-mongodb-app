import { LocationMarkerIcon } from "@heroicons/react/solid";
import { getCenter } from "geolib";
import { useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";


const Map = ({ newData }) => {
  const mapRef = useRef();
  const [viewport, setViewport] = useState("");
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const coordinates = newData.map((result) => ({
      longitude: result.address.location.coordinates[0],
      latitude: result.address.location.coordinates[1],
    }));
    const center = getCenter(coordinates);
    setViewport({
      container: mapRef.current,
      width: "100%",
      height: "90vh",
      longitude: center.longitude,
      latitude: center.latitude,
      zoom: 11,
    });
    return () => coordinates;
  }, [newData]);
  
  // transform newData in to the {latitude: 53.123456, longitude: 43.567456}
  return (
    <ReactMapGL
      ref={mapRef}
      mapStyle="mapbox://styles/crisner1978/ckvbronka1buu14pbzr9ta8kq"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {newData.map((result) => (
        <div key={result._id}>
          <Marker
            longitude={result.address.location.coordinates[0]}
            latitude={result.address.location.coordinates[1]}
            offsetLeft={-12}
          >
            <p
              className="cursor-pointer"
              onClick={() => setSelected(result)}
              aria-label="location-pin"
            >
              <LocationMarkerIcon className="h-6 text-red-500 animate-bounce" />
            </p>
          </Marker>
          {selected.name === result.name ? (
            <Popup
              className="z-50"
              onClose={() => setSelected({})}
              closeOnClick={true}
              longitude={result.address.location.coordinates[0]}
              latitude={result.address.location.coordinates[1]}
            >
                <div className="flex items-center gap-3 px-2">
                  <p className="text-gray-700 font-semibold">{result.name}</p>
                  {/* <button className="text-sm text-white font-semibold bg-red-400 p-2 rounded-full"> */}
                    {/* Go */}
                  {/* </button> */}
                </div>
              
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
