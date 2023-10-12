"use client"
import { Circle, GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

export default function AreaMap() {
  const { isLoaded } = useLoadScript({
    // @ts-ignore
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(() => ({ lat: 41.893248, lng: -88.228535 }), []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
      options={{
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
      }}
    >
      <Circle
        options={{fillColor: "plum", strokeColor: "purple"}}
        center={center}
        radius={20000}
      />
    </GoogleMap>
  )
}
