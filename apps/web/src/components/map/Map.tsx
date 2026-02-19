// // "use client";

// // import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// // import L from "leaflet";
// // import "leaflet/dist/leaflet.css";

// // // Fix for default marker icons if they are missing
// // // (Optional but good for safety)
// // import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// // import markerIcon from "leaflet/dist/images/marker-icon.png";
// // import markerShadow from "leaflet/dist/images/marker-shadow.png";

// // import dynamic from "next/dynamic";

// // import { useMap } from "react-leaflet";
// // // import { useEffect } from "react";
// // import { useRef, useEffect } from "react";


// // const MarkerClusterGroup = dynamic(
// //   () => import("react-leaflet-cluster"),
// //   { ssr: false }
// // );

// // // CivicLoop glowing cluster icon
// // const createClusterIcon = (cluster: any) => {

// //   const count = cluster.getChildCount();

// //   return L.divIcon({
// //     html: `
// //       <div class="relative flex items-center justify-center">

// //         <!-- outer glow -->
// //         <div class="absolute w-14 h-14 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>

// //         <!-- main circle -->
// //         <div class="
// //           relative
// //           w-12 h-12
// //           rounded-full
// //           bg-gradient-to-br from-blue-500 to-blue-600
// //           border border-white/30
// //           flex items-center justify-center
// //           text-white font-bold text-sm
// //           shadow-lg shadow-blue-500/40
// //         ">
// //           ${count}
// //         </div>

// //       </div>
// //     `,
// //     className: "bg-transparent border-0",
// //     iconSize: [48, 48],
// //     iconAnchor: [24, 24],
// //   });

// // };




// // // @ts-ignore
// // delete L.Icon.Default.prototype._getIconUrl;
// // L.Icon.Default.mergeOptions({
// //   iconUrl: markerIcon.src,
// //   iconRetinaUrl: markerIcon2x.src,
// //   shadowUrl: markerShadow.src,
// // });

// // // Create the Pulse Icon
// // const pulseIcon = new L.DivIcon({
// //   html: `
// //     <div class="relative flex items-center justify-center w-6 h-6">
// //       <div class="absolute w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-75"></div>
// //       <div class="relative w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
// //     </div>
// //   `,
// //   className: "bg-transparent",
// //   iconSize: [24, 24],
// //   iconAnchor: [12, 12],
// // });

// // function FlyToComplaint({ complaint }: { complaint: any }) {

// //   const map = useMap();

// //   useEffect(() => {

// //     if (!complaint) return;

// //     map.flyTo(
// //       [complaint.lat, complaint.lng],
// //       17, // zoom level
// //       {
// //         duration: 1.5,
// //         easeLinearity: 0.25,
// //       }
// //     );

// //   }, [complaint, map]);

// //   return null;
// // }


// // export default function Map({
// //   complaints,
// //   selectedComplaint,
// //   onSelect
// // }: {
// //   complaints: any[]
// //   selectedComplaint?: any
// //   onSelect?: (c: any) => void
// // }) {

// //   return (
// //     <MapContainer
// //       center={[28.6139, 77.2090]} // New Delhi
// //       zoom={13}
// //       scrollWheelZoom={true}
// //       className="h-full w-full outline-none z-0" // z-0 keeps it behind your UI
// //       style={{ background: "#09090b" }} // Force black background to hide the grey loading state
// //     >
// //       {/* If CartoDB is blocked, swap this <TileLayer> block 
// //          with the standard OSM one below to test.
// //       */}
// //       <TileLayer
// //         attribution='&copy; <a href="https://carto.com/">CARTO</a>'
// //         url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
// //       />

// //       <FlyToComplaint complaint={selectedComplaint} />

// //       {/* <MarkerClusterGroup
// //         chunkedLoading
// //         maxClusterRadius={55}
// //         spiderfyOnMaxZoom={true}
// //         iconCreateFunction={createClusterIcon}
// //         polygonOptions={{
// //           fillColor: "#3b82f6",
// //           color: "#3b82f6",
// //           weight: 1,
// //           opacity: 1,
// //           fillOpacity: 0.3,
// //         }}
// //       >
// //         {complaints.map((c: any) => (
// //           <Marker
// //             key={c.id}
// //             position={[c.lat, c.lng]}
// //             icon={pulseIcon}
// //             eventHandlers={{
// //               click: () => onSelect?.(c),
// //             }}
// //           >
// //             <Popup>
// //               <div className="font-bold text-zinc-900">
// //                 {c.title}
// //               </div>
// //               <div className="text-xs text-zinc-600">
// //                 {c.category || "Issue"}
// //               </div>
// //             </Popup>
// //           </Marker>
// //         ))}
// //       </MarkerClusterGroup> */}

// //       {/* Cluster only NON-selected complaints */}
// //       <MarkerClusterGroup
// //         chunkedLoading
// //         maxClusterRadius={55}
// //         spiderfyOnMaxZoom={true}
// //         iconCreateFunction={createClusterIcon}
// //         polygonOptions={{
// //           fillColor: "#3b82f6",
// //           color: "#3b82f6",
// //           weight: 1,
// //           opacity: 1,
// //           fillOpacity: 0.3,
// //         }}
// //       >
// //         {complaints
// //           .filter((c: any) => c.id !== selectedComplaint?.id)
// //           .map((c: any) => (
// //             <Marker
// //               key={c.id}
// //               position={[c.lat, c.lng]}
// //               icon={pulseIcon}
// //               eventHandlers={{
// //                 click: () => onSelect?.(c),
// //               }}
// //             />
// //           ))}
// //       </MarkerClusterGroup>


// //       {/* Selected marker OUTSIDE cluster */}
// //       {selectedComplaint && (
// //         <Marker
// //           key={selectedComplaint.id}
// //           position={[selectedComplaint.lat, selectedComplaint.lng]}
// //           icon={pulseIcon}
// //           zIndexOffset={1000}
// //         >
// //           <Popup autoOpen={true}>
// //             <div className="font-bold text-zinc-900">
// //               {selectedComplaint.title}
// //             </div>
// //             <div className="text-xs text-zinc-600">
// //               {selectedComplaint.category || "Issue"}
// //             </div>
// //           </Popup>
// //         </Marker>
// //       )}


// //     </MapContainer>
// //   );
// // }

// "use client";

// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { useRef, useEffect } from "react";
// import dynamic from "next/dynamic";

// // Fix for default marker icons
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";
// import HeatmapLayer from "./HeatmapLayer"; // Ensure you created this file!

// import React, { useState, useMemo, useCallback } from "react";

// const MarkerClusterGroup = dynamic(
//   () => import("react-leaflet-cluster"),
//   { ssr: false }
// );

// // --- Icons & Config ---

// // @ts-ignore
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: markerIcon.src,
//   iconRetinaUrl: markerIcon2x.src,
//   shadowUrl: markerShadow.src,
// });

// // CivicLoop glowing cluster icon
// // const createClusterIcon = (cluster: any) => {
// //   const count = cluster.getChildCount();
// //   return L.divIcon({
// //     html: `
// //       <div class="relative flex items-center justify-center">
// //         <div class="absolute w-14 h-14 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
// //         <div class="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border border-white/30 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/40">
// //           ${count}
// //         </div>
// //       </div>
// //     `,
// //     className: "bg-transparent border-0",
// //     iconSize: [48, 48],
// //     iconAnchor: [24, 24],
// //   });
// // };

// const createClusterIcon = (cluster: any) => {

//   const markers = cluster.getAllChildMarkers();

//   let hasUrgent = false;
//   let hasActive = false;

//   markers.forEach((m: any) => {

//     const status = m.options?.complaintStatus;

//     if (status === "REOPENED") hasUrgent = true;
//     if (status === "WORK_IN_PROGRESS") hasActive = true;

//   });

//   let color = "#3b82f6";

//   if (hasUrgent) color = "#ef4444";
//   else if (hasActive) color = "#06b6d4";

//   return L.divIcon({

//     html: `
//       <div style="
//         width:48px;
//         height:48px;
//         border-radius:50%;
//         background:${color};
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         color:white;
//         font-weight:bold;
//         box-shadow:0 0 20px ${color};
//       ">
//         ${cluster.getChildCount()}
//       </div>
//     `,

//     className: "bg-transparent border-0",

//   });

// };


// const pulseIcon = new L.DivIcon({
//   html: `
//     <div class="relative flex items-center justify-center">

//       <!-- outer breathing glow -->
//       <div class="absolute w-14 h-14 rounded-full bg-blue-500/20 blur-2xl animate-pulse"></div>

//       <!-- mid glow ring -->
//       <div class="absolute w-10 h-10 rounded-full border border-blue-400/40 animate-ping"></div>

//       <!-- core -->
//       <div class="
//         relative
//         w-5 h-5
//         rounded-full
//         bg-gradient-to-br from-blue-400 to-blue-600
//         border border-white
//         shadow-lg shadow-blue-500/60
//       "></div>

//     </div>
//   `,
//   className: "bg-transparent border-0",
//   iconSize: [56, 56],
//   iconAnchor: [28, 28],
// });

// const selectedIcon = new L.DivIcon({
//   html: `
//     <div class="relative flex items-center justify-center">

//       <div class="absolute w-20 h-20 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

//       <div class="absolute w-14 h-14 border-2 border-blue-400 rounded-full animate-ping"></div>

//       <div class="
//         relative
//         w-7 h-7
//         rounded-full
//         bg-gradient-to-br from-blue-300 to-blue-600
//         border-2 border-white
//         shadow-2xl shadow-blue-500/80
//       "></div>

//     </div>
//   `,
//   className: "bg-transparent border-0",
//   iconSize: [72, 72],
//   iconAnchor: [36, 36],
// });
// // const selectedIcon = new L.DivIcon({
// //   html: `
// //     <div class="relative flex items-center justify-center">

// //       <div class="absolute w-20 h-20 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

// //       <div class="absolute w-14 h-14 border-2 border-blue-400 rounded-full animate-ping"></div>

// //       <div class="relative w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-2xl shadow-blue-500/80"></div>

// //     </div>
// //   `,
// //   className: "bg-transparent border-0",
// //   iconSize: [72,72],
// //   iconAnchor: [36,36],
// // });


// // --- Helper Component to Handle Map Movement ---
// // function FlyToComplaint({ complaint }: { complaint: any }) {
// //   const map = useMap();
// function FlyToComplaint({ complaint }: { complaint: any }) {

//   const map = useMap();

//   useEffect(() => {

//     if (!complaint?.lat || !complaint?.lng) return;

//     map.flyTo(
//       [complaint.lat, complaint.lng],
//       Math.max(map.getZoom(), 17),
//       {
//         duration: 1.5,
//         easeLinearity: 0.25,
//       }
//     );

//   }, [complaint, map]);

//   return null;
// }

// //   useEffect(() => {
// //     if (!complaint) return;
// //     map.flyTo([complaint.lat, complaint.lng], 18, {
// //       duration: 2,
// //       easeLinearity: 0.15,
// //     });
// //     // map.flyTo(cluster.getLatLng(), map.getZoom() + 1)

// //   }, [complaint, map]);

// //   return null;
// // }


// function ExpandClusterOnSelect({ complaint }: { complaint: any }) {

//   const map = useMap();

//   // useEffect(() => {

//   //   if (!complaint) return;

//   //   map.flyTo(
//   //     [complaint.lat, complaint.lng],
//   //     18,
//   //     { duration: 1.5 }
//   //   );

//   // }, [complaint]);

//   useEffect(() => {

//     if (!complaint) return;

//     map.flyTo(
//       [complaint.lat, complaint.lng],
//       18,
//       {
//         duration: 1.5,
//         easeLinearity: 0.25
//       }
//     );

//   }, [complaint, map]);


//   return null;
// }

// // function ResetClusterOnMapClick({ clusterRef }: any) {

// //   const map = useMap();

// //   useEffect(() => {

// //     const handler = () => {

// //       if (clusterRef.current) {
// //         clusterRef.current.refreshClusters();
// //       }

// //     };

// //     map.on("click", handler);

// //     return () => { map.off("click", handler); };

// //   }, [map]);

// //   return null;
// // }

// function ResetClusterOnMapClick({
//   clusterRef,
//   clearSelection,
// }: {
//   clusterRef: any;
//   clearSelection: () => void;
// }) {
//   const map = useMap();

//   useEffect(() => {

//     const handleMapClick = () => {

//       // Close spiderfied cluster
//       if (clusterRef.current) {
//         clusterRef.current.unspiderfy();
//         clusterRef.current.refreshClusters();
//       }

//       // Clear selected complaint
//       clearSelection();
//     };

//     map.on("click", handleMapClick);

//     return () => {
//       map.off("click", handleMapClick);
//     };

//   }, [map, clusterRef, clearSelection]);

//   return null;
// }


// // function getMarkerIcon(status: string, selected = false) {

// //   const config: Record<string, {
// //     color: string;
// //     glow: string;
// //     pulse: boolean;
// //   }> = {

// //     CREATED: {
// //       color: "#facc15",
// //       glow: "rgba(250,204,21,0.6)",
// //       pulse: true
// //     },

// //     ACKNOWLEDGED: {
// //       color: "#3b82f6",
// //       glow: "rgba(59,130,246,0.6)",
// //       pulse: true
// //     },

// //     ASSIGNED: {
// //       color: "#a855f7",
// //       glow: "rgba(168,85,247,0.6)",
// //       pulse: true
// //     },

// //     WORK_IN_PROGRESS: {
// //       color: "#06b6d4",
// //       glow: "rgba(6,182,212,0.6)",
// //       pulse: true
// //     },

// //     RESOLVED: {
// //       color: "#22c55e",
// //       glow: "rgba(34,197,94,0.6)",
// //       pulse: false
// //     },

// //     REOPENED: {
// //       color: "#ef4444",
// //       glow: "rgba(239,68,68,0.8)",
// //       pulse: true
// //     }

// //   };

// //   const s = config[status] ?? config.CREATED;

// //   const size = selected ? 24 : 16;
// //   const glowSize = selected ? 60 : 40;

// //   return new L.DivIcon({

// //     className: "bg-transparent border-0",

// //     html: `
// //       <div style="
// //         position: relative;
// //         width: ${glowSize}px;
// //         height: ${glowSize}px;
// //         display: flex;
// //         align-items: center;
// //         justify-content: center;
// //       ">

// //         ${s.pulse
// //         ? `<div style="
// //               position:absolute;
// //               width:${glowSize}px;
// //               height:${glowSize}px;
// //               border-radius:50%;
// //               background:${s.glow};
// //               filter:blur(12px);
// //               animation:pulse 2s infinite;
// //             "></div>`
// //         : ""
// //       }

// //         <div style="
// //           width:${size}px;
// //           height:${size}px;
// //           border-radius:50%;
// //           background:${s.color};
// //           border:2px solid white;
// //           box-shadow:0 0 20px ${s.glow};
// //         "></div>

// //       </div>

// //       <style>
// //         @keyframes pulse {
// //           0% { transform: scale(0.8); opacity:0.7 }
// //           50% { transform: scale(1.4); opacity:0.2 }
// //           100% { transform: scale(0.8); opacity:0.7 }
// //         }
// //       </style>
// //     `,

// //     iconSize: [glowSize, glowSize],
// //     iconAnchor: [glowSize / 2, glowSize / 2],

// //   });

// // }

// function getMarkerIcon(status: string, selected = false, isNew = false) {
//   const config: Record<string, { color: string; glow: string; pulse: boolean }> = {
//     CREATED: { color: "#facc15", glow: "rgba(250,204,21,0.6)", pulse: true },
//     ACKNOWLEDGED: { color: "#3b82f6", glow: "rgba(59,130,246,0.6)", pulse: true },
//     ASSIGNED: { color: "#a855f7", glow: "rgba(168,85,247,0.6)", pulse: true },
//     WORK_IN_PROGRESS: { color: "#06b6d4", glow: "rgba(6,182,212,0.6)", pulse: true },
//     RESOLVED: { color: "#22c55e", glow: "rgba(34,197,94,0.6)", pulse: false },
//     REOPENED: { color: "#ef4444", glow: "rgba(239,68,68,0.8)", pulse: true },
//   };

//   const s = config[status] ?? config.CREATED;
//   const size = selected ? 24 : 16;
//   const glowSize = selected ? 60 : 40;

//   // ✅ CSS Class for animation
//   const animClass = isNew ? "animate-spawn" : "";

//   return new L.DivIcon({
//     className: "bg-transparent border-0",
//     html: `
//       <div class="${animClass}" style="
//         position: relative;
//         width: ${glowSize}px;
//         height: ${glowSize}px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//       ">
//         ${s.pulse || isNew // 👈 Pulse if config says so OR if it's new
//         ? `<div style="
//               position:absolute;
//               width:${glowSize}px;
//               height:${glowSize}px;
//               border-radius:50%;
//               background:${s.glow};
//               filter:blur(12px);
//               animation:pulse 2s infinite;
//             "></div>`
//         : ""
//       }
//         <div style="
//           width:${size}px;
//           height:${size}px;
//           border-radius:50%;
//           background:${s.color};
//           border:2px solid white;
//           box-shadow:0 0 20px ${s.glow};
//         "></div>
//       </div>
//       <style>
//         @keyframes pulse {
//           0% { transform: scale(0.8); opacity:0.7 }
//           50% { transform: scale(1.4); opacity:0.2 }
//           100% { transform: scale(0.8); opacity:0.7 }
//         }
//         /* ✅ Add Global CSS support for this specific marker */
//         .animate-spawn {
//            animation: spawn-pulse 1.2s cubic-bezier(0, 0, 0.2, 1) forwards;
//         }
//       </style>
//     `,
//     iconSize: [glowSize, glowSize],
//     iconAnchor: [glowSize / 2, glowSize / 2],
//   });
// }

// // --- Viewport Tracker Component ---
// function ViewportTracker({ onChange }: { onChange: (bounds: L.LatLngBounds) => void }) {
//   const map = useMap();

//   useEffect(() => {
//     // Handler to update bounds
//     const updateBounds = () => {
//       onChange(map.getBounds());
//     };

//     // Listen to move and zoom events
//     map.on("moveend", updateBounds);
//     map.on("zoomend", updateBounds);

//     // Initial set
//     updateBounds();

//     return () => {
//       map.off("moveend", updateBounds);
//       map.off("zoomend", updateBounds);
//     };
//   }, [map, onChange]);

//   return null;
// }

// // --- Main Map Component ---
// export default function Map({
//   complaints,
//   selectedComplaint,
//   newIds,
//   isHeatmapMode,
//   onSelect
// }: {
//   complaints: any[]
//   selectedComplaint?: any
//   onSelect?: (c: any) => void;
//   newIds?: Set<string>; // Optional prop
//   isHeatmapMode?: boolean;
// }) {

//   // 1. Create a Ref to hold the selected marker
//   const selectedMarkerRef = useRef<any>(null);
//   const clusterRef = useRef<any>(null);



//   // 2. Automatically open the popup when selectedComplaint changes
//   useEffect(() => {
//     if (selectedComplaint && selectedMarkerRef.current) {
//       // Small timeout ensures the marker is fully rendered before opening
//       setTimeout(() => {
//         selectedMarkerRef.current.openPopup();
//       }, 100);
//     }
//   }, [selectedComplaint]);

//   // useEffect(() => {

//   //   if (!selectedComplaint) return;

//   //   if (clusterRef.current) {

//   //     // closes spiderfied cluster
//   //     clusterRef.current._map?.closePopup();

//   //     clusterRef.current._featureGroup?.eachLayer((layer: any) => {

//   //       if (layer.closePopup) layer.closePopup();

//   //     });

//   //     // Force redraw cluster
//   //     clusterRef.current.refreshClusters();

//   //   }

//   // }, [selectedComplaint]);

//   useEffect(() => {

//     if (!selectedComplaint) return;

//     const timer = setTimeout(() => {

//       if (selectedMarkerRef.current) {
//         selectedMarkerRef.current.openPopup();
//       }

//     }, 200);

//     return () => clearTimeout(timer);

//   }, [selectedComplaint]);


//   useEffect(() => {
//     if (!clusterRef.current) return;

//     // Small delay ensures DOM is updated first
//     const timer = setTimeout(() => {
//       clusterRef.current.refreshClusters();
//     }, 100);

//     return () => clearTimeout(timer);

//   }, [selectedComplaint, complaints]);



//   //   return (
//   //     <MapContainer
//   //       center={[28.6139, 77.2090]}
//   //       zoom={13}
//   //       scrollWheelZoom={true}
//   //       className="h-full w-full outline-none z-0"
//   //       style={{ background: "#09090b" }}
//   //     >
//   //       <TileLayer
//   //         attribution='&copy; <a href="https://carto.com/">CARTO</a>'
//   //         url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
//   //       />

//   //       <FlyToComplaint complaint={selectedComplaint} />
//   //       <ExpandClusterOnSelect complaint={selectedComplaint} />
//   //       {/* <ResetClusterOnMapClick clusterRef={clusterRef} /> */}
//   //       <ResetClusterOnMapClick
//   //         clusterRef={clusterRef}
//   //         clearSelection={() => onSelect?.(null)}
//   //       />



//   //       {/* CLUSTER GROUP (Hides selected item so it doesn't get grouped) */}
//   //       <MarkerClusterGroup
//   //         ref={clusterRef}
//   //         chunkedLoading
//   //         maxClusterRadius={55}
//   //         spiderfyOnMaxZoom={true}
//   //         spiderfyDistanceMultiplier={1.2}
//   //         showCoverageOnHover={false}
//   //         zoomToBoundsOnClick={true}
//   //         // disableClusteringAtZoom={17}
//   //         animate={true}
//   //         animateAddingMarkers={true}
//   //         iconCreateFunction={createClusterIcon}
//   //         polygonOptions={{
//   //           fillColor: "#3b82f6",
//   //           color: "#3b82f6",
//   //           weight: 1,
//   //           opacity: 1,
//   //           fillOpacity: 0.3,
//   //         }}
//   //       >
//   //         {complaints
//   //           .filter((c: any) => c.id !== selectedComplaint?.id)
//   //           .map((c: any) => (
//   //             <Marker
//   //               key={c.id}
//   //               position={[c.lat, c.lng]}
//   //               // icon={getMarkerIcon(c?.currentStatus ?? "CREATED", true)}
//   //               icon={getMarkerIcon(
//   //                  c?.currentStatus ?? "CREATED", 
//   //                  false, 
//   //                  newIds?.has(c.id) // 👈 Check if ID is in the set
//   //               )}


//   //               eventHandlers={{
//   //                 click: () => onSelect?.(c),
//   //               }}

//   //               {...({
//   //                 complaintStatus: c?.currentStatus ?? "CREATED"
//   //               } as any)}
//   //             />
//   //           ))}
//   //       </MarkerClusterGroup>

//   //       {/* SELECTED MARKER (Rendered separately with Ref) */}
//   //       {selectedComplaint && (
//   //         <Marker
//   //           key={selectedComplaint.id}
//   //           position={[selectedComplaint.lat, selectedComplaint.lng]}
//   //           icon={getMarkerIcon(selectedComplaint.currentStatus, true)}
//   //           zIndexOffset={1000}
//   //           ref={selectedMarkerRef} // 3. Attach the ref here
//   //         >
//   //           {/* 4. Removed invalid `autoOpen` prop */}
//   //           <Popup>
//   //             <div className="font-bold text-zinc-900">
//   //               {selectedComplaint.title}
//   //             </div>
//   //             <div className="text-xs text-zinc-600">
//   //               {selectedComplaint.category || "Issue"}
//   //             </div>
//   //           </Popup>
//   //         </Marker>
//   //       )}

//   //     </MapContainer>
//   //   );
//   // }

//   // ✅ 1. Add State for Visible Bounds
//   const [bounds, setBounds] = useState<L.LatLngBounds | null>(null);

//   // ✅ 2. Filter Complaints based on Viewport (Performance Magic)
//   // If in Heatmap mode, we usually want ALL points for accurate density.
//   // If in Marker mode, we ONLY want visible points to save RAM.
//   const visibleComplaints = useMemo(() => {
//     if (isHeatmapMode || !bounds) return complaints;

//     return complaints.filter(c =>
//       // Simple check: Is this point inside the box?
//       bounds.contains([c.lat, c.lng])
//     );
//   }, [complaints, bounds, isHeatmapMode]);

//   // ✅ 3. Memoize the Icon Generator to prevent garbage collection churn
//   // (We defined getMarkerIcon outside, so it's already stable, but let's be safe)

//   return (
//     <MapContainer
//       center={[28.6139, 77.2090]}
//       zoom={13}
//       scrollWheelZoom={true}
//       className="h-full w-full outline-none z-0"
//       style={{ background: "#09090b" }}
//     >
//       <TileLayer
//         attribution='&copy; CARTO'
//         url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
//       />

//       <ViewportTracker onChange={setBounds} />

//       <FlyToComplaint complaint={selectedComplaint} />
//       <ExpandClusterOnSelect complaint={selectedComplaint} />
//       <ResetClusterOnMapClick clusterRef={clusterRef} clearSelection={() => onSelect?.(null)} />

//       {/* --- LAYER SWITCHER LOGIC --- */}

//       {isHeatmapMode ? (
//         // 1. HEATMAP LAYER (No Markers)
//         <HeatmapLayer points={complaints} />
//       ) : (
//         // 2. CLUSTER LAYER (Standard Markers)
//         <MarkerClusterGroup
//           ref={clusterRef}
//           chunkedLoading
//           chunkInterval={50} // Process 50ms at a time
//           chunkDelay={10}    // Wait 10ms between chunks
//           maxClusterRadius={55}
//           spiderfyOnMaxZoom={true}
//           animate={true}
//           iconCreateFunction={createClusterIcon}
//           polygonOptions={{
//             fillColor: "#3b82f6", color: "#3b82f6", weight: 1, opacity: 1, fillOpacity: 0.3
//           }}
//         >
//           {visibleComplaints // 👈 USING FILTERED LIST
//             .filter((c: any) => c.id !== selectedComplaint?.id)
//             .map((c: any) => (
//               <Marker
//                 key={c.id}
//                 position={[c.lat, c.lng]}
//                 icon={getMarkerIcon(
//                   c?.currentStatus ?? "CREATED",
//                   false,
//                   newIds?.has(c.id)
//                 )}
//                 eventHandlers={{ click: () => onSelect?.(c) }}
//               />
//             ))}
//         </MarkerClusterGroup>
//       )}

//       {/* SELECTED MARKER (Always visible) */}
//       {selectedComplaint && (
//         <Marker
//           key={selectedComplaint.id}
//           position={[selectedComplaint.lat, selectedComplaint.lng]}
//           icon={getMarkerIcon(selectedComplaint.currentStatus, true)}
//           zIndexOffset={1000}
//           ref={selectedMarkerRef}
//         >
//           <Popup>
//             <div className="font-bold text-zinc-900">{selectedComplaint.title}</div>
//             <div className="text-xs text-zinc-600">{selectedComplaint.category || "Issue"}</div>
//           </Popup>
//         </Marker>
//       )}

//     </MapContainer>
//   );
// }


"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Fix for default marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import HeatmapLayer from "./HeatmapLayer"; 

import React, { useState, useMemo, useCallback } from "react";

const MarkerClusterGroup = dynamic(
  () => import("react-leaflet-cluster"),
  { ssr: false }
);

// --- Icons & Config ---

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const createClusterIcon = (cluster: any) => {
  const markers = cluster.getAllChildMarkers();

  let hasUrgent = false;
  let hasActive = false;

  markers.forEach((m: any) => {
    const status = m.options?.complaintStatus;
    if (status === "REOPENED") hasUrgent = true;
    if (status === "WORK_IN_PROGRESS") hasActive = true;
  });

  let color = "#3b82f6";
  if (hasUrgent) color = "#ef4444";
  else if (hasActive) color = "#06b6d4";

  return L.divIcon({
    html: `
      <div style="
        width:48px;
        height:48px;
        border-radius:50%;
        background:${color};
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
        font-weight:bold;
        box-shadow:0 0 20px ${color};
      ">
        ${cluster.getChildCount()}
      </div>
    `,
    className: "bg-transparent border-0",
  });
};

function FlyToComplaint({ complaint }: { complaint: any }) {
  const map = useMap();
  useEffect(() => {
    if (!complaint?.lat || !complaint?.lng) return;
    map.flyTo(
      [complaint.lat, complaint.lng],
      Math.max(map.getZoom(), 17),
      {
        duration: 1.5,
        easeLinearity: 0.25,
      }
    );
  }, [complaint, map]);
  return null;
}

function ExpandClusterOnSelect({ complaint }: { complaint: any }) {
  const map = useMap();
  useEffect(() => {
    if (!complaint) return;
    map.flyTo(
      [complaint.lat, complaint.lng],
      18,
      {
        duration: 1.5,
        easeLinearity: 0.25
      }
    );
  }, [complaint, map]);
  return null;
}

function ResetClusterOnMapClick({
  clusterRef,
  clearSelection,
}: {
  clusterRef: any;
  clearSelection: () => void;
}) {
  const map = useMap();
  useEffect(() => {
    const handleMapClick = () => {
      if (clusterRef.current) {
        clusterRef.current.unspiderfy();
        clusterRef.current.refreshClusters();
      }
      clearSelection();
    };
    map.on("click", handleMapClick);
    return () => {
      map.off("click", handleMapClick);
    };
  }, [map, clusterRef, clearSelection]);
  return null;
}

function getMarkerIcon(status: string, selected = false, isNew = false) {
  const config: Record<string, { color: string; glow: string; pulse: boolean }> = {
    CREATED: { color: "#facc15", glow: "rgba(250,204,21,0.6)", pulse: true },
    ACKNOWLEDGED: { color: "#3b82f6", glow: "rgba(59,130,246,0.6)", pulse: true },
    ASSIGNED: { color: "#a855f7", glow: "rgba(168,85,247,0.6)", pulse: true },
    WORK_IN_PROGRESS: { color: "#06b6d4", glow: "rgba(6,182,212,0.6)", pulse: true },
    RESOLVED: { color: "#22c55e", glow: "rgba(34,197,94,0.6)", pulse: false },
    REOPENED: { color: "#ef4444", glow: "rgba(239,68,68,0.8)", pulse: true },
  };

  const s = config[status] ?? config.CREATED;
  const size = selected ? 24 : 16;
  const glowSize = selected ? 60 : 40;
  const animClass = isNew ? "animate-spawn" : "";

  return new L.DivIcon({
    className: "bg-transparent border-0",
    html: `
      <div class="${animClass}" style="
        position: relative;
        width: ${glowSize}px;
        height: ${glowSize}px;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        ${s.pulse || isNew
        ? `<div style="
              position:absolute;
              width:${glowSize}px;
              height:${glowSize}px;
              border-radius:50%;
              background:${s.glow};
              filter:blur(12px);
              animation:pulse 2s infinite;
            "></div>`
        : ""
      }
        <div style="
          width:${size}px;
          height:${size}px;
          border-radius:50%;
          background:${s.color};
          border:2px solid white;
          box-shadow:0 0 20px ${s.glow};
        "></div>
      </div>
      <style>
        @keyframes pulse {
          0% { transform: scale(0.8); opacity:0.7 }
          50% { transform: scale(1.4); opacity:0.2 }
          100% { transform: scale(0.8); opacity:0.7 }
        }
        .animate-spawn {
           animation: spawn-pulse 1.2s cubic-bezier(0, 0, 0.2, 1) forwards;
        }
      </style>
    `,
    iconSize: [glowSize, glowSize],
    iconAnchor: [glowSize / 2, glowSize / 2],
  });
}

// --- Viewport Tracker Component ---
function ViewportTracker({ onChange }: { onChange: (bounds: L.LatLngBounds) => void }) {
  const map = useMap();
  useEffect(() => {
    const updateBounds = () => {
      onChange(map.getBounds());
    };
    map.on("moveend", updateBounds);
    map.on("zoomend", updateBounds);
    updateBounds();
    return () => {
      map.off("moveend", updateBounds);
      map.off("zoomend", updateBounds);
    };
  }, [map, onChange]);
  return null;
}

// --- Main Map Component ---
export default function Map({
  complaints,
  selectedComplaint,
  newIds,
  isHeatmapMode,
  onSelect
}: {
  complaints: any[]
  selectedComplaint?: any
  onSelect?: (c: any) => void;
  newIds?: Set<string>;
  isHeatmapMode?: boolean;
}) {

  const selectedMarkerRef = useRef<any>(null);
  const clusterRef = useRef<any>(null);
  
  // ✅ Detect if the user is on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Typical tailwind md breakpoint
    };
    
    // Check initially
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only try to open the popup if we have a selected complaint AND we are NOT on mobile
    if (selectedComplaint && selectedMarkerRef.current && !isMobile) {
      setTimeout(() => {
        if (selectedMarkerRef.current) {
           selectedMarkerRef.current.openPopup();
        }
      }, 200);
    }
  }, [selectedComplaint, isMobile]);

  useEffect(() => {
    if (!clusterRef.current) return;
    const timer = setTimeout(() => {
      clusterRef.current.refreshClusters();
    }, 100);
    return () => clearTimeout(timer);
  }, [selectedComplaint, complaints]);

  const [bounds, setBounds] = useState<L.LatLngBounds | null>(null);

  const visibleComplaints = useMemo(() => {
    if (isHeatmapMode || !bounds) return complaints;
    return complaints.filter(c => bounds.contains([c.lat, c.lng]));
  }, [complaints, bounds, isHeatmapMode]);

  return (
    <MapContainer
      center={[28.6139, 77.2090]}
      zoom={13}
      scrollWheelZoom={true}
      className="h-full w-full outline-none z-0"
      style={{ background: "#09090b" }}
    >
      <TileLayer
        attribution='&copy; CARTO'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      <ViewportTracker onChange={setBounds} />

      <FlyToComplaint complaint={selectedComplaint} />
      <ExpandClusterOnSelect complaint={selectedComplaint} />
      <ResetClusterOnMapClick clusterRef={clusterRef} clearSelection={() => onSelect?.(null)} />

      {/* --- LAYER SWITCHER LOGIC --- */}

      {isHeatmapMode ? (
        <HeatmapLayer points={complaints} />
      ) : (
        <MarkerClusterGroup
          ref={clusterRef}
          chunkedLoading
          chunkInterval={50}
          chunkDelay={10}  
          maxClusterRadius={55}
          spiderfyOnMaxZoom={true}
          animate={true}
          iconCreateFunction={createClusterIcon}
          polygonOptions={{
            fillColor: "#3b82f6", color: "#3b82f6", weight: 1, opacity: 1, fillOpacity: 0.3
          }}
        >
          {visibleComplaints
            .filter((c: any) => c.id !== selectedComplaint?.id)
            .map((c: any) => (
              <Marker
                key={c.id}
                position={[c.lat, c.lng]}
                icon={getMarkerIcon(
                  c?.currentStatus ?? "CREATED",
                  false,
                  newIds?.has(c.id)
                )}
                eventHandlers={{ click: () => onSelect?.(c) }}
              />
            ))}
        </MarkerClusterGroup>
      )}

      {/* SELECTED MARKER (Always visible) */}
      {selectedComplaint && (
        <Marker
          key={selectedComplaint.id}
          position={[selectedComplaint.lat, selectedComplaint.lng]}
          icon={getMarkerIcon(selectedComplaint.currentStatus, true)}
          zIndexOffset={1000}
          ref={selectedMarkerRef}
        >
          {/* ✅ Conditionally render the popup only if NOT on mobile */}
          {!isMobile && (
            <Popup>
              <div className="font-bold text-zinc-900">{selectedComplaint.title}</div>
              <div className="text-xs text-zinc-600">{selectedComplaint.category || "Issue"}</div>
            </Popup>
          )}
        </Marker>
      )}

    </MapContainer>
  );
}