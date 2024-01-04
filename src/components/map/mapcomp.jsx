"use client";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
} from "@vis.gl/react-google-maps";

export default function Intro({ data }) {
    const position = { lat: data.lat, lng: data.lon };

    return (
        <APIProvider apiKey={'AIzaSyDYAIivmOhdBumCadpqryEkH8Lp1JccSns'}>
            <div className="map">
                <Map zoom={4} center={position} mapId={'31413c9dde1f7ffc'}>
                    <AdvancedMarker position={position}>
                        <Pin
                            background={"red"}
                            borderColor={"white"}
                            glyphColor={"white"}
                        />
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    );
}