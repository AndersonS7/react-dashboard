import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

interface IProps {
    children?: React.ReactNode;
    center: google.maps.LatLngLiteral;
    getCoordinates?: (lat: number, long: number) => void
}

const PageMap = ({ children, center, getCoordinates }: IProps) => {
    const API_KEY = import.meta.env.VITE_SOME_API_KEY;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    });

    const mapClicked = (clickEvent: google.maps.MapMouseEvent) => {
        if (clickEvent.latLng && getCoordinates != undefined) {
            const lat = clickEvent.latLng.lat();
            const lng = clickEvent.latLng.lng();
            
            getCoordinates(lat, lng);
        }
    };

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={16}
            onClick={mapClicked}
        >
            {children}
            {/* Renderize outros marcadores aqui, se necessário */}
            
        </GoogleMap>
    ) : null;
};

export default React.memo(PageMap);


// import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// interface IProps {
//     children?: any | undefined
//     center: any
// }

// const PageMap = ({ children, center }: IProps) => {
//     const API_KEY = import.meta.env.VITE_SOME_API_KEY

//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: API_KEY
//     })
    
//     return isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={{ width: '100%', height: '100%' }}
//             center={center}
//             zoom={16}>
//             {children}
//             <></>
//         </GoogleMap>
//     ) : <></>
// }

// export default React.memo(PageMap)