import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { getCenter } from 'geolib';
import { StarIcon } from '@heroicons/react/outline';

const Map = ({ newData }) => {
     const coordinates = newData.map(result => ({
        longitude: result.address.location.coordinates[0],
        latitude: result.address.location.coordinates[1],
    }))
     const center = getCenter(coordinates);
     const [ viewport, setViewport ] = useState({
        width: '100%',
        height: '100%',
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
    })

    // transform newData in the {latitude: 53.123456, longitude: 43.567456}
    
   

    
    console.log(viewport)
   

    return <ReactMapGL
        mapStyle="mapbox://styles/crisner1978/ckvb1v32s1y1e15nv74uzuwdl"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {newData.map(result => (
                <div key={result._id}>
                    <Marker
                        longitude={result.address.location.coordinates[0]}
                        latitude={result.address.location.coordinates[1]}
                        >
                            <p><StarIcon /></p>
                    </Marker>
                </div>
            ))}

        </ReactMapGL>

}

export default Map
