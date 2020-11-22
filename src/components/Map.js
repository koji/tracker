import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { LocationMarker } from './LocationMarker';
import { LocationInfoBox } from './LocationInfoBox';

export const Map = ({ eventsData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);
    const makers = eventsData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker
                     key={`event-${ev.id}`}
                     lat={ev.geometries[0].coordinates[1]} 
                     lng={ev.geometries[0].coordinates[0]} 
                     onClick={()=>setLocationInfo({id: ev.id, title: ev.title})}
                    />
        }
        return null
    } )
    return (
        <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_TOML_ENV_VAR }}
              defaultCenter={center}
              defaultZoom={zoom}
            //   yesIWantToUseGoogleMapApiInternals
            //   onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                {makers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 40.758896,
        lng: -73.985130
    },
    zoom: 6
}
