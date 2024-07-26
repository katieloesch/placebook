import React, { useEffect, useRef, useCallback } from "react";

import "./Map.scss";

const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const Map = ({ className, style, center, zoom }) => {
  const mapRef = useRef();

  const initializeMap = useCallback(() => {
    if (mapRef.current && window.google && window.google.maps) {
      // Ensure lat and lng are numbers
      const validCenter = {
        lat: parseFloat(center.lat),
        lng: parseFloat(center.lng),
      };

      const map = new window.google.maps.Map(mapRef.current, {
        center: validCenter,
        zoom: zoom,
      });

      console.log(
        "Map initialized with center:",
        validCenter,
        "and zoom:",
        zoom
      );

      // Check if AdvancedMarkerElement is available
      if (
        window.google.maps.marker &&
        window.google.maps.marker.AdvancedMarkerElement
      ) {
        new window.google.maps.marker.AdvancedMarkerElement({
          position: validCenter,
          map: map,
        });
      } else {
        // Fallback to using google.maps.Marker
        new window.google.maps.Marker({
          position: validCenter,
          map: map,
        });
      }
    }
  }, [center, zoom]);

  useEffect(() => {
    const googleMapsScript = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCVCP3eNPnWibLCG8-AhQPHv27oZ3GniSY`;
    if (!window.google || !window.google.maps) {
      loadScript(googleMapsScript)
        .then(() => {
          initializeMap();
        })
        .catch((error) => {
          console.error("Error loading Google Maps script:", error);
        });
    } else {
      initializeMap();
    }

    // Copy mapRef.current to a local variable
    const currentMapRef = mapRef.current;

    return () => {
      if (currentMapRef) {
        currentMapRef.innerHTML = "";
      }
    };
  }, [center, zoom, initializeMap]);

  return <div ref={mapRef} className={`map ${className} style=${style}`}></div>;
};

export default Map;
