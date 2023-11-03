"use client"

// @ts-ignore
import mapboxgl from "mapbox-gl"; // tslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = "pk.eyJ1IjoiZG1rdWVobjYiLCJhIjoiY2xucGNhMjliMDlqMzJqcnJpMDAyb2JneSJ9.jhTKWoHdvdF-aE57QQLDuw";
import "mapbox-gl/dist/mapbox-gl.css";
// @ts-ignore
import MapboxCircle from "mapbox-gl-circle"; // tslint-disable-line import/no-webpack-loader-syntax

import { useEffect, useRef, useState } from "react";

const lng = -88.228535;
const lat = 41.893248;
const zoom = 8;

export default function AreaMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    var myCircle = new MapboxCircle({lat: lat, lng: lng}, 25000, {
        minRadius: 1500,
        fillColor: '#29AB87'
    }).addTo(map.current);
  });

  return (
    <div>
      <div ref={mapContainer} className="w-full h-[240px] sm:h-[480px]" />
    </div>
  )
}
