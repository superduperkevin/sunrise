import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: '100%'
}


const center = {
    lat: 37.903460,
    lng: -122.303790
}

// const options = {
//     styles: 
// }

export default function Map() {

    const {isLoaded, loadError} = useLoadScript({
        // googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
        googleMapsApiKey: "AIzaSyCdMHRYpC3xKRHwtLObtlNwGBDyJ-woiRI",
        libraries,

    });

    if(loadError) return "Error loading Maps";
    if(!isLoaded) return "Loading Maps";
        return (
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={13} center={center}>
                <Marker position={center} >
                    <InfoWindow position={center}><h3>Sunrise Tailors & Cleaners <br/>10160 San Pablo Ave, El Cerrito, CA 94530</h3></InfoWindow>
                </Marker>                
            </GoogleMap>
        )
}

