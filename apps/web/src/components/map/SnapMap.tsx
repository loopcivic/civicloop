// // "use client";

// // import { useEffect, useState } from "react";
// // import dynamic from "next/dynamic";
// // import { apiGet } from "@/lib/api";

// // // Load Leaflet ONLY on client (CRITICAL FIX for SSR)
// // const MapContainer = dynamic(
// //     () => import("react-leaflet").then(m => m.MapContainer),
// //     { ssr: false }
// // );

// // const TileLayer = dynamic(
// //     () => import("react-leaflet").then(m => m.TileLayer),
// //     { ssr: false }
// // );

// // const Marker = dynamic(
// //     () => import("react-leaflet").then(m => m.Marker),
// //     { ssr: false }
// // );

// // const Popup = dynamic(
// //     () => import("react-leaflet").then(m => m.Popup),
// //     { ssr: false }
// // );

// // export default function SnapMap() {
// //     const [complaints, setComplaints] = useState<any[]>([]);
// //     const [ready, setReady] = useState(false);

// //     useEffect(() => {
// //         // apiGet("/complaints")
// //         //   .then(setComplaints)
// //         apiGet<any[]>("/complaints")
// //             .then((data) => setComplaints(data))

// //             .catch(console.error);

// //         setReady(true);
// //     }, []);

// //     if (!ready) {
// //         return (
// //             <div className="h-screen flex items-center justify-center text-zinc-500">
// //                 Loading Map...
// //             </div>
// //         );
// //     }

// //     return (
// //   <div className="h-screen w-screen">

// //     <MapContainer
// //       center={[28.6139, 77.2090]}
// //       zoom={13}
// //       className="h-full w-full"
// //       zoomControl={false}
// //     >

// //       <TileLayer
// //         url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
// //       />

// //       {complaints.map((c) => (
// //         <Marker
// //           key={c.id}
// //           position={[c.lat, c.lng]}
// //         //   icon={pulseIcon}
// //         />
// //       ))}

// //     </MapContainer>

// //   </div>
// // );

// // }

// "use client";

// import { useEffect, useState } from "react";
// import { apiGet } from "@/lib/api";
// import Map from "./Map"; // Import the map directly (we handle SSR in the parent)
// import ComplaintDetailDialog from "./ComplaintDetailDialog";


// export default function SnapMap({
//   onSelect
// }: {
//   onSelect?: (c: any) => void
// }) {

//   const [complaints, setComplaints] = useState<any[]>([]);
//   const [selectedComplaint, setSelectedComplaint] = useState<any>(null);



//   useEffect(() => {
//     // 1. Fetch real data
//     apiGet<any[]>("/complaints")
//       .then((data) => {
//         if (data) setComplaints(data);
//       })
//       .catch(console.error);

//     // 2. (Optional) Add dummy data so you can SEE the map immediately
//     // Remove this block once your API is working perfectly
//     if (complaints.length === 0) {
//       setComplaints([
//         { id: "1", lat: 28.6139, lng: 77.2090, title: "Test Issue 1", category: "Roads" },
//         { id: "2", lat: 28.6200, lng: 77.2100, title: "Test Issue 2", category: "Water" },
//       ]);
//     }
//   }, []);

//   return (
//     <div className="h-full w-full">

//       <Map
//         complaints={complaints}
//         selectedComplaint={selectedComplaint}
//         onSelect={setSelectedComplaint}
//       />

//       <ComplaintDetailDialog
//         complaint={selectedComplaint}
//         onClose={() => setSelectedComplaint(null)}
//       />


//     </div>
//   );
// }


"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { apiGet } from "@/lib/api";
import Map from "./Map";
import ComplaintDetailDialog from "./ComplaintDetailDialog";
import { io } from "socket.io-client";
import { Filter, CheckCircle2, AlertCircle, Clock, RotateCcw, Layers, RefreshCw, X } from "lucide-react";
import { Flame } from "lucide-react"; // Import Flame icon


export default function SnapMap({
  onSelect,
}: {
  onSelect?: (c: any) => void;
}) {

  const [complaints, setComplaints] = useState<any[]>([]);
  const [selectedComplaint, setSelectedComplaint] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  // const [statusFilter, setStatusFilter] = useState<string>("ALL");
  // STEP 4.1 — Status filter state
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [newIds, setNewIds] = useState<Set<string>>(new Set());
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isHeatmapMode, setIsHeatmapMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  // STEP 4.1 — Memoized counts
  const counts = useMemo(() => {

    const stats: any = {
      ALL: 0,
      CREATED: 0,
      WORK_IN_PROGRESS: 0,
      RESOLVED: 0,
      REOPENED: 0
    };

    complaints.forEach(c => {

      stats.ALL++;

      const s = c.currentStatus || "CREATED";

      if (stats[s] !== undefined)
        stats[s]++;

    });

    return stats;

  }, [complaints]);


  // STEP 4.1 — Memoized filter
  const filteredData = useMemo(() => {

    if (statusFilter === "ALL")
      return complaints;

    return complaints.filter(
      c => c.currentStatus === statusFilter
    );

  }, [complaints, statusFilter]);


  // STEP 4.1 — Filter config
  const FILTERS = [

    {
      id: "ALL",
      label: "All",
      icon: Layers,
      color: "text-white",
      bg: "bg-white/10"
    },

    {
      id: "CREATED",
      label: "New",
      icon: AlertCircle,
      color: "text-red-400",
      bg: "bg-red-500/20"
    },

    {
      id: "WORK_IN_PROGRESS",
      label: "In Progress",
      icon: Clock,
      color: "text-blue-400",
      bg: "bg-blue-500/20"
    },

    {
      id: "RESOLVED",
      label: "Resolved",
      icon: CheckCircle2,
      color: "text-green-400",
      bg: "bg-green-500/20"
    }

  ];





  // PRODUCTION-GRADE FETCH FUNCTION
  // PRODUCTION-GRADE FETCH FUNCTION
  const fetchComplaints = useCallback(async () => {
    try {
      const data = await apiGet<any[]>("/complaints");
      if (!data) return;

      setComplaints((prev) => {
        // 1. If it's the very first load, just return data (No Animation)
        if (prev.length === 0 && isInitialLoad) {
          setIsInitialLoad(false);
          return data;
        }

        // 2. Find NEW IDs that weren't in the previous list
        const existingIds = new Set(prev.map((p) => p.id));
        const freshIds = data.filter((d) => !existingIds.has(d.id)).map((d) => d.id);

        // 3. Trigger Animation for new items
        if (freshIds.length > 0) {
          setNewIds((prevSet) => {
            const next = new Set(prevSet);
            freshIds.forEach((id) => next.add(id));
            return next;
          });

          // Cleanup animation after 2 seconds
          setTimeout(() => {
            setNewIds((prevSet) => {
              const next = new Set(prevSet);
              freshIds.forEach((id) => next.delete(id));
              return next;
            });
          }, 2000);
        }

        return data;
      });

      // Update selected complaint ref if exists
      setSelectedComplaint((prev: any) => {
        if (!prev) return null;
        return data.find((c) => c.id === prev.id) || null;
      });

    } catch (err) {
      console.error("Map fetch failed:", err);
    } finally {
      setLoading(false);
    }
  }, [isInitialLoad]); // Dependency on isInitialLoad

  // INITIAL LOAD
  useEffect(() => {
    fetchComplaints();
  }, [fetchComplaints]);

  // REALTIME LIVE UPDATES (WebSocket)
  useEffect(() => {

    // const socket = io("http://localhost:4000", {//process.env.NEXT_PUBLIC_API_BASE
    const socket = io(process.env.NEXT_PUBLIC_API_BASE, {
      withCredentials: true,
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("Connected to CivicLoop Live:", socket.id);
    });

    socket.on("complaintUpdated", (updatedComplaint: any) => {
      console.log("Live update received:", updatedComplaint.id);

      setComplaints((prev: any[]) => {
        const exists = prev.some((c: any) => c.id === updatedComplaint.id);

        if (!exists) {
          // ✅ NEW COMPLAINT -> Trigger Animation
          setNewIds((prevSet) => {
            const next = new Set(prevSet);
            next.add(updatedComplaint.id);
            // Cleanup
            setTimeout(() => {
              setNewIds((current) => {
                const copy = new Set(current);
                copy.delete(updatedComplaint.id);
                return copy;
              });
            }, 2000);
            return next;
          });

          return [updatedComplaint, ...prev];
        }

        // EXISTING complaint -> update
        return prev.map((c: any) =>
          c.id === updatedComplaint.id ? updatedComplaint : c
        );
      });

      setSelectedComplaint(updatedComplaint);
    });

    return () => {
      socket.disconnect();
    };

  }, []);


  // // LIVE AUTO REFRESH (every 10 seconds)
  // useEffect(() => {

  //   const interval = setInterval(fetchComplaints, 10000);

  //   return () => clearInterval(interval);

  // }, [fetchComplaints]);

  if (loading)
    return (
      <div className="h-full w-full flex items-center justify-center text-zinc-500">
        Loading CivicLoop Live Map...
      </div>
    );

  return (
    <div className="h-full w-full">
      {/* FILTER BAR */}
      {/* =========================================
          CIVICLOOP COMMAND BAR (SMART SIDEBAR) 
      ========================================= */}

      {/* MOBILE TOGGLE BUTTON (Floating Filter Icon) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="
          md:hidden absolute top-20 right-4 z-[1001]
          flex items-center justify-center w-12 h-12 rounded-full
          bg-zinc-950/90 backdrop-blur-2xl border border-white/10 
          text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)]
          transition-all active:scale-95
        "
      >
        {isSidebarOpen ? <X size={20} /> : <Filter size={20} />}
      </button>

      {/* COMMAND BAR (Vertical Sidebar on Mobile, Horizontal Pill on Desktop) */}
      <div className={`
        absolute z-[1000] transition-all duration-300 ease-out flex
        
        /* 💻 DESKTOP: Always Centered, Always Horizontal, Always Visible */
        md:top-6 md:left-1/2 md:-translate-x-1/2 md:right-auto md:w-auto md:flex-row
        md:opacity-100 md:pointer-events-auto md:items-center
        
        /* 📱 MOBILE: Positioned on the right, vertical layout */
        top-36 right-4 w-[220px] flex-col gap-2 md:gap-4
        
        /* 📱 MOBILE TOGGLE LOGIC: Strictly scoped so it NEVER breaks desktop */
        ${isSidebarOpen 
          ? 'max-md:opacity-100 max-md:translate-x-0 max-md:pointer-events-auto' 
          : 'max-md:opacity-0 max-md:translate-x-8 max-md:pointer-events-none'}
          
        /* SHARED STYLES */
        p-3 md:px-3 md:py-2
        rounded-3xl md:rounded-full
        bg-zinc-950/95 backdrop-blur-3xl
        border border-white/10
        shadow-[0_20px_40px_rgba(0,0,0,0.7)]
      `}>

        {/* STATUS FILTERS */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-1.5 md:gap-2 shrink-0">
          {FILTERS.map((f) => {
            const isActive = statusFilter === f.id;
            const Icon = f.icon;

            return (
              <button
                key={f.id}
                onClick={() => {
                  setStatusFilter(f.id);
                  setIsSidebarOpen(false); // Auto-close menu on mobile
                }}
                className={`
                  group relative flex items-center justify-between md:justify-start gap-3
                  px-4 py-3 md:px-4 md:py-2.5 rounded-2xl md:rounded-full
                  transition-all duration-300
                  ${isActive
                    ? "bg-zinc-800 text-white shadow-md ring-1 ring-white/10"
                    : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"}
                `}
              >
                <div className="flex items-center gap-2">
                  <Icon size={16} className={`relative z-10 ${isActive ? f.color : ""}`} />
                  <span className="relative z-10 text-xs font-bold tracking-wide">
                    {f.label}
                  </span>
                </div>

                <span className={`
                  relative z-10 text-[10px] font-mono px-1.5 py-0.5 rounded-md
                  ${isActive
                    ? f.bg + " " + f.color + " border border-" + f.color.split('-')[1] + "-500/30"
                    : "bg-zinc-900/50 border border-zinc-800 text-zinc-600"}
                `}>
                  {counts[f.id as keyof typeof counts] || 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full md:h-6 md:w-px bg-white/10 shrink-0 my-1 md:my-0" />

        {/* TOOLS: Heatmap & Sync */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-1.5 md:gap-2 shrink-0">
          
          {/* Heatmap Toggle */}
          <button
            onClick={() => {
              setIsHeatmapMode(!isHeatmapMode);
              setIsSidebarOpen(false);
            }}
            className={`
              group flex items-center justify-between md:justify-start gap-2 
              px-4 py-3 md:px-3 md:py-2.5 rounded-2xl md:rounded-full transition-all duration-300
              ${isHeatmapMode
                ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                : 'bg-transparent text-zinc-500 hover:text-orange-400 hover:bg-orange-500/10 border border-transparent'}
            `}
          >
            <div className="flex items-center gap-2">
              <Flame size={16} className={isHeatmapMode ? "animate-pulse" : ""} />
              <span className="text-xs font-bold uppercase tracking-wide md:hidden xl:block">Heatmap</span>
            </div>
            {/* Mobile status indicator */}
            <div className={`md:hidden w-2 h-2 rounded-full ${isHeatmapMode ? 'bg-orange-500 animate-pulse' : 'bg-zinc-800'}`} />
          </button>

          {/* Sync Button */}
          <button
            onClick={() => {
              fetchComplaints();
              setIsSidebarOpen(false);
            }}
            className="
              group flex items-center justify-center gap-2 md:gap-0
              w-full md:w-10 px-4 py-3 md:p-0 h-auto md:h-10 
              rounded-2xl md:rounded-full
              bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/20
              text-zinc-400 hover:text-white transition-all duration-300
            "
          >
            <span className="text-xs font-bold uppercase tracking-wide md:hidden">Sync Live Data</span>
            <div className={`transition-transform duration-700 ${loading ? 'animate-spin' : 'group-hover:rotate-180'}`}>
              <RefreshCw size={16} />
            </div>
          </button>
        </div>

      </div>



      {/* <Map
        complaints={complaints} */}
      <Map
        complaints={filteredData}

        selectedComplaint={selectedComplaint}
        newIds={newIds}
        isHeatmapMode={isHeatmapMode}
        onSelect={(c) => {

          setSelectedComplaint(c);

          if (onSelect) onSelect(c);

        }}
      />

      <ComplaintDetailDialog
        complaint={selectedComplaint}
        onClose={() => setSelectedComplaint(null)}
      />

    </div>
  );

}
