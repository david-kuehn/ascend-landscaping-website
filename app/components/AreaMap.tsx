"use client"

// @ts-ignore
import mapboxgl from "mapbox-gl"; // tslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = "pk.eyJ1IjoiZG1rdWVobjYiLCJhIjoiY2xucGNhMjliMDlqMzJqcnJpMDAyb2JneSJ9.jhTKWoHdvdF-aE57QQLDuw";
import "mapbox-gl/dist/mapbox-gl.css";

import { useEffect, useMemo, useRef, useState } from "react";

export default function AreaMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-88.228535);
  const [lat, setLat] = useState(41.893248);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}
