"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";

export default function HeatmapLayer({ points }: { points: any[] }) {
  const map = useMap();

  useEffect(() => {
    if (!points || points.length === 0) return;

    // Transform data for Leaflet.heat
    // Format: [lat, lng, intensity]
    const heatPoints = points.map((p) => [
      p.lat, 
      p.lng, 
      0.6 // Intensity (0.0 - 1.0)
    ]);

    // Create the Heat Layer
    const heat = (L as any).heatLayer(heatPoints, {
      radius: 25,       // Radius of each point
      blur: 20,         // Amount of blur
      maxZoom: 17,      // Zoom level where points reach max intensity
      minOpacity: 0.4,  // Minimum opacity of the heat
      gradient: {
        0.2: "#3b82f6", // Blue (Low)
        0.4: "#06b6d4", // Cyan
        0.6: "#22c55e", // Green (Medium)
        0.8: "#eab308", // Yellow
        1.0: "#ef4444"  // Red (Critical)
      }
    });

    // Add to map
    heat.addTo(map);

    // Cleanup: Remove layer when component unmounts or points change
    return () => {
      map.removeLayer(heat);
    };
  }, [points, map]);

  return null;
}