import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

interface IProps {
    children?: any | undefined
    center: any
}

const PageMap = ({ children, center }: IProps) => {
    const API_KEY = import.meta.env.VITE_SOME_API_KEY

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "XXX"//API_KEY
    })


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={16}>
            {children}
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(PageMap)