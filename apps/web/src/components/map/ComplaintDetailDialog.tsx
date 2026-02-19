// // // // // // // // // "use client";

// // // // // // // // // import { useEffect } from "react";

// // // // // // // // // export default function ComplaintDetailDialog({
// // // // // // // // //   complaint,
// // // // // // // // //   onClose,
// // // // // // // // // }: {
// // // // // // // // //   complaint: any;
// // // // // // // // //   onClose: () => void;
// // // // // // // // // }) {

// // // // // // // // //   useEffect(() => {

// // // // // // // // //     const handler = (e: KeyboardEvent) => {
// // // // // // // // //       if (e.key === "Escape") onClose();
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener("keydown", handler);

// // // // // // // // //     return () => window.removeEventListener("keydown", handler);

// // // // // // // // //   }, [onClose]);

// // // // // // // // //   if (!complaint) return null;

// // // // // // // // //   const imageUrl =
// // // // // // // // //     complaint.images?.[0]?.url ||
// // // // // // // // //     complaint.imageUrl ||
// // // // // // // // //     null;

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       {/* CLICK OUTSIDE LAYER (NO BLUR) */}
// // // // // // // // //       <div
// // // // // // // // //         className="fixed inset-0 z-[1500]"
// // // // // // // // //         onClick={onClose}
// // // // // // // // //       />

// // // // // // // // //       {/* BOTTOM SHEET */}
// // // // // // // // //       <div className="
// // // // // // // // //         fixed bottom-0 left-0 right-0 z-[2000]
// // // // // // // // //         px-4 pb-4
// // // // // // // // //         animate-in slide-in-from-bottom duration-300
// // // // // // // // //       ">

// // // // // // // // //         <div className="
// // // // // // // // //           max-w-2xl mx-auto
// // // // // // // // //           rounded-3xl
// // // // // // // // //           overflow-hidden
// // // // // // // // //           border border-white/10
// // // // // // // // //           bg-zinc-900/80
// // // // // // // // //           backdrop-blur-xl
// // // // // // // // //           shadow-2xl shadow-black/60
// // // // // // // // //         ">

// // // // // // // // //           {/* HANDLE */}
// // // // // // // // //           <div className="flex justify-center pt-3 pb-2">
// // // // // // // // //             <div className="w-10 h-1 rounded-full bg-zinc-600" />
// // // // // // // // //           </div>

// // // // // // // // //           {/* IMAGE PREVIEW */}
// // // // // // // // //           {imageUrl && (
// // // // // // // // //             <div className="relative">

// // // // // // // // //               <img
// // // // // // // // //                 src={imageUrl}
// // // // // // // // //                 className="
// // // // // // // // //                   w-full h-48 object-cover
// // // // // // // // //                 "
// // // // // // // // //               />

// // // // // // // // //               {/* overlay gradient */}
// // // // // // // // //               <div className="
// // // // // // // // //                 absolute inset-0
// // // // // // // // //                 bg-gradient-to-t from-black/70 to-transparent
// // // // // // // // //               " />

// // // // // // // // //               {/* title over image */}
// // // // // // // // //               <div className="
// // // // // // // // //                 absolute bottom-3 left-4
// // // // // // // // //                 text-white font-semibold text-lg
// // // // // // // // //               ">
// // // // // // // // //                 {complaint.title}
// // // // // // // // //               </div>

// // // // // // // // //             </div>
// // // // // // // // //           )}

// // // // // // // // //           {/* CONTENT */}
// // // // // // // // //           <div className="p-4 space-y-3">

// // // // // // // // //             {!imageUrl && (
// // // // // // // // //               <h2 className="text-white text-lg font-semibold">
// // // // // // // // //                 {complaint.title}
// // // // // // // // //               </h2>
// // // // // // // // //             )}

// // // // // // // // //             <div className="grid grid-cols-2 gap-3 text-sm">

// // // // // // // // //               <Info label="Category" value={complaint.category} />

// // // // // // // // //               <Info label="Status" value={complaint.currentStatus} />

// // // // // // // // //               <Info label="Ward" value={complaint.ward?.name} />

// // // // // // // // //               <Info
// // // // // // // // //                 label="Location"
// // // // // // // // //                 value={complaint.address || "Unknown"}
// // // // // // // // //               />

// // // // // // // // //             </div>

// // // // // // // // //             {complaint.description && (
// // // // // // // // //               <div className="
// // // // // // // // //                 text-zinc-300 text-sm pt-2 border-t border-zinc-800
// // // // // // // // //               ">
// // // // // // // // //                 {complaint.description}
// // // // // // // // //               </div>
// // // // // // // // //             )}

// // // // // // // // //             {/* ACTION BUTTON */}
// // // // // // // // //             <button
// // // // // // // // //               className="
// // // // // // // // //                 w-full mt-3
// // // // // // // // //                 bg-blue-600 hover:bg-blue-700
// // // // // // // // //                 text-white
// // // // // // // // //                 py-3 rounded-xl
// // // // // // // // //                 font-medium
// // // // // // // // //                 transition
// // // // // // // // //               "
// // // // // // // // //             >
// // // // // // // // //               View Full Report
// // // // // // // // //             </button>

// // // // // // // // //           </div>

// // // // // // // // //         </div>

// // // // // // // // //       </div>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // function Info({ label, value }: any) {
// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <div className="text-zinc-500 text-xs">
// // // // // // // // //         {label}
// // // // // // // // //       </div>
// // // // // // // // //       <div className="text-white font-medium">
// // // // // // // // //         {value || "—"}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // "use client";

// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import { useRouter } from "next/navigation"; // 👈 Fixes navigation
// // // // // // // // import { X, MapPin, Calendar, Activity } from "lucide-react"; // install lucide-react if missing

// // // // // // // // export default function ComplaintDetailDialog({
// // // // // // // //   complaint,
// // // // // // // //   onClose,
// // // // // // // // }: {
// // // // // // // //   complaint: any;
// // // // // // // //   onClose: () => void;
// // // // // // // // }) {
// // // // // // // //   const router = useRouter();
// // // // // // // //   const [mounted, setMounted] = useState(false);

// // // // // // // //   useEffect(() => {
// // // // // // // //     setMounted(true);
// // // // // // // //   }, []);

// // // // // // // //   if (!complaint) return null;

// // // // // // // //   // 1. SMART IMAGE DETECTION
// // // // // // // //   // Checks array format (Prisma) OR string format (Direct)
// // // // // // // //   const imageUrl = 
// // // // // // // //     complaint.images?.[0]?.url || 
// // // // // // // //     complaint.images?.[0] || 
// // // // // // // //     complaint.imageUrl || 
// // // // // // // //     complaint.image || 
// // // // // // // //     null;

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       {/* CLICK OUTSIDE TO CLOSE */}
// // // // // // // //       <div
// // // // // // // //         className="fixed inset-0 z-[1500] bg-black/10 backdrop-blur-[2px]"
// // // // // // // //         onClick={onClose}
// // // // // // // //       />

// // // // // // // //       {/* GOOGLE MAPS STYLE SHEET */}
// // // // // // // //       <div className={`
// // // // // // // //         fixed bottom-0 left-0 right-0 z-[2000]
// // // // // // // //         flex justify-center px-4 pb-6
// // // // // // // //         transition-transform duration-300 cubic-bezier(0.32, 0.72, 0, 1)
// // // // // // // //         ${mounted ? "translate-y-0" : "translate-y-full"}
// // // // // // // //       `}>

// // // // // // // //         <div className="
// // // // // // // //           w-full max-w-lg
// // // // // // // //           bg-zinc-900 border border-white/10
// // // // // // // //           rounded-[2rem] shadow-2xl shadow-black
// // // // // // // //           overflow-hidden flex flex-col
// // // // // // // //         ">

// // // // // // // //           {/* DRAG HANDLE */}
// // // // // // // //           <div className="absolute top-3 left-0 right-0 flex justify-center z-20 pointer-events-none">
// // // // // // // //             <div className="w-12 h-1.5 rounded-full bg-white/20 backdrop-blur-md" />
// // // // // // // //           </div>

// // // // // // // //           {/* IMAGE HEADER (Dynamic) */}
// // // // // // // //           <div className="relative h-56 w-full bg-zinc-800">
// // // // // // // //             {imageUrl ? (
// // // // // // // //               <img
// // // // // // // //                 src={imageUrl}
// // // // // // // //                 alt="Complaint Proof"
// // // // // // // //                 className="w-full h-full object-cover"
// // // // // // // //               />
// // // // // // // //             ) : (
// // // // // // // //               // Fallback Gradient if no image
// // // // // // // //               <div className="w-full h-full bg-gradient-to-br from-blue-900 via-zinc-900 to-black flex items-center justify-center text-white/20">
// // // // // // // //                 <MapPin size={48} />
// // // // // // // //               </div>
// // // // // // // //             )}

// // // // // // // //             {/* Gradient Overlay for Text Readability */}
// // // // // // // //             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

// // // // // // // //             <div className="absolute bottom-4 left-6 right-6">
// // // // // // // //               <span className="inline-block px-2 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
// // // // // // // //                 {complaint.category || "General"}
// // // // // // // //               </span>
// // // // // // // //               <h2 className="text-white text-2xl font-bold leading-tight drop-shadow-md line-clamp-2">
// // // // // // // //                 {complaint.title}
// // // // // // // //               </h2>
// // // // // // // //             </div>

// // // // // // // //             {/* Close Button */}
// // // // // // // //             <button 
// // // // // // // //               onClick={onClose}
// // // // // // // //               className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition backdrop-blur-md"
// // // // // // // //             >
// // // // // // // //               <X size={20} />
// // // // // // // //             </button>
// // // // // // // //           </div>

// // // // // // // //           {/* BODY CONTENT */}
// // // // // // // //           <div className="p-6 space-y-6 bg-zinc-900">

// // // // // // // //             {/* Status Bar */}
// // // // // // // //             <div className="flex items-center gap-4 text-sm text-zinc-400">
// // // // // // // //               <div className="flex items-center gap-2">
// // // // // // // //                 <Calendar size={14} />
// // // // // // // //                 <span>{new Date(complaint.createdAt || Date.now()).toLocaleDateString()}</span>
// // // // // // // //               </div>
// // // // // // // //               <div className="w-px h-3 bg-zinc-700" />
// // // // // // // //               <div className="flex items-center gap-2">
// // // // // // // //                 <Activity size={14} />
// // // // // // // //                 <span className={getStatusColor(complaint.status)}>
// // // // // // // //                   {complaint.status || "PENDING"}
// // // // // // // //                 </span>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Description (Truncated) */}
// // // // // // // //             <p className="text-zinc-300 text-sm leading-relaxed line-clamp-3">
// // // // // // // //               {complaint.description || "No description provided by the citizen."}
// // // // // // // //             </p>

// // // // // // // //             {/* ACTION BUTTON - FIXED */}
// // // // // // // //             <button
// // // // // // // //               onClick={() => {
// // // // // // // //                 console.log("Navigating to:", complaint.id);
// // // // // // // //                 router.push(`/complaints/${complaint.id}`);
// // // // // // // //               }}
// // // // // // // //               className="
// // // // // // // //                 w-full py-4 rounded-xl
// // // // // // // //                 bg-white text-black font-bold text-lg
// // // // // // // //                 hover:bg-zinc-200 active:scale-[0.98]
// // // // // // // //                 transition-all shadow-lg shadow-white/5
// // // // // // // //                 flex items-center justify-center gap-2
// // // // // // // //               "
// // // // // // // //             >
// // // // // // // //               View Full Report →
// // // // // // // //             </button>
// // // // // // // //           </div>

// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // // Helper for status colors
// // // // // // // // function getStatusColor(status: string) {
// // // // // // // //   switch (status?.toUpperCase()) {
// // // // // // // //     case "RESOLVED": return "text-green-400 font-semibold";
// // // // // // // //     case "REJECTED": return "text-red-400 font-semibold";
// // // // // // // //     case "IN_PROGRESS": return "text-blue-400 font-semibold";
// // // // // // // //     default: return "text-yellow-400 font-semibold";
// // // // // // // //   }
// // // // // // // // }

// // // // // // // "use client";

// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import { useRouter } from "next/navigation";
// // // // // // // import { X, MapPin, Calendar, Activity, ArrowRight } from "lucide-react";

// // // // // // // export default function ComplaintDetailDialog({
// // // // // // //   complaint,
// // // // // // //   onClose,
// // // // // // // }: {
// // // // // // //   complaint: any;
// // // // // // //   onClose: () => void;
// // // // // // // }) {
// // // // // // //   const router = useRouter();
// // // // // // //   const [mounted, setMounted] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     setMounted(true);
// // // // // // //   }, []);

// // // // // // //   // Safe Image Logic
// // // // // // //   const imageUrl = 
// // // // // // //     complaint?.images?.[0]?.url || 
// // // // // // //     complaint?.images?.[0] || 
// // // // // // //     complaint?.imageUrl || 
// // // // // // //     complaint?.image || 
// // // // // // //     null;

// // // // // // //   // Render nothing if no complaint, but keep the container for animation logic if needed
// // // // // // //   // (Here we simply return null to unmount, usually managed by parent state)
// // // // // // //   if (!complaint) return null;

// // // // // // //   return (
// // // // // // //     // WRAPPER: Pointer events none allows clicking through the empty space to the map
// // // // // // //     <div className={`
// // // // // // //       fixed inset-y-4 right-4 z-[2000]
// // // // // // //       w-[400px] flex flex-col pointer-events-none
// // // // // // //       transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)
// // // // // // //       ${mounted ? "translate-x-0" : "translate-x-[120%]"}
// // // // // // //     `}>

// // // // // // //       {/* THE CARD: Pointer events auto to allow interaction inside the panel */}
// // // // // // //       <div className="
// // // // // // //         h-full w-full pointer-events-auto
// // // // // // //         bg-zinc-900/95 backdrop-blur-xl
// // // // // // //         border border-white/10
// // // // // // //         rounded-3xl shadow-2xl shadow-black/50
// // // // // // //         flex flex-col overflow-hidden
// // // // // // //       ">

// // // // // // //         {/* 1. IMAGE HEADER */}
// // // // // // //         <div className="relative h-48 shrink-0 bg-zinc-800">
// // // // // // //           {imageUrl ? (
// // // // // // //             <img
// // // // // // //               src={imageUrl}
// // // // // // //               alt="Evidence"
// // // // // // //               className="w-full h-full object-cover"
// // // // // // //             />
// // // // // // //           ) : (
// // // // // // //             // Fallback abstract gradient
// // // // // // //             <div className="w-full h-full bg-gradient-to-br from-blue-900 to-zinc-900 flex items-center justify-center">
// // // // // // //               <MapPin className="text-white/20" size={48} />
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {/* Gradient Overlay */}
// // // // // // //           <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

// // // // // // //           {/* Close Button (Floating) */}
// // // // // // //           <button
// // // // // // //             onClick={onClose}
// // // // // // //             className="
// // // // // // //               absolute top-4 right-4 z-10
// // // // // // //               p-2 rounded-full
// // // // // // //               bg-black/40 backdrop-blur-md
// // // // // // //               text-white/70 hover:text-white hover:bg-black/60
// // // // // // //               transition
// // // // // // //             "
// // // // // // //           >
// // // // // // //             <X size={20} />
// // // // // // //           </button>

// // // // // // //           {/* Title Overlay */}
// // // // // // //           <div className="absolute bottom-3 left-5 right-5">
// // // // // // //             <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white mb-1">
// // // // // // //               {complaint.category || "Issue"}
// // // // // // //             </span>
// // // // // // //             <h2 className="text-xl font-bold text-white leading-tight line-clamp-2 drop-shadow-md">
// // // // // // //               {complaint.title}
// // // // // // //             </h2>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* 2. SCROLLABLE CONTENT */}
// // // // // // //         <div className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar">

// // // // // // //           {/* Status Row */}
// // // // // // //           <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
// // // // // // //             <div className="flex items-center gap-3">
// // // // // // //               <div className={`p-2 rounded-lg ${getStatusBg(complaint.status)}`}>
// // // // // // //                 <Activity size={18} className={getStatusColor(complaint.status)} />
// // // // // // //               </div>
// // // // // // //               <div>
// // // // // // //                 <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Status</div>
// // // // // // //                 <div className={`text-sm font-bold ${getStatusColor(complaint.status)}`}>
// // // // // // //                   {complaint.status || "PENDING"}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             <div className="text-right">
// // // // // // //               <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Date</div>
// // // // // // //               <div className="text-sm text-zinc-200 font-medium">
// // // // // // //                  {new Date(complaint.createdAt || Date.now()).toLocaleDateString()}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Description */}
// // // // // // //           <div className="space-y-2">
// // // // // // //             <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">Description</h3>
// // // // // // //             <p className="text-sm text-zinc-400 leading-relaxed">
// // // // // // //               {complaint.description || "No description provided."}
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           {/* Location Info */}
// // // // // // //           <div className="space-y-2">
// // // // // // //             <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">Location</h3>
// // // // // // //             <div className="flex items-start gap-3 text-zinc-400 text-sm">
// // // // // // //               <MapPin size={16} className="mt-0.5 shrink-0 text-blue-500" />
// // // // // // //               <span>
// // // // // // //                 {complaint.address || `${complaint.lat.toFixed(4)}, ${complaint.lng.toFixed(4)}`}
// // // // // // //                 {complaint.ward && <span className="block text-xs text-zinc-500 mt-1">{complaint.ward.name}</span>}
// // // // // // //               </span>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //         </div>

// // // // // // //         {/* 3. FIXED FOOTER ACTION */}
// // // // // // //         <div className="p-5 pt-0 mt-auto bg-gradient-to-t from-zinc-900 to-zinc-900/0">
// // // // // // //           <button
// // // // // // //             onClick={() => router.push(`/complaints/${complaint.id}`)}
// // // // // // //             className="
// // // // // // //               w-full py-3.5 rounded-xl
// // // // // // //               bg-white text-black
// // // // // // //               font-bold text-sm
// // // // // // //               hover:bg-zinc-200 active:scale-[0.98]
// // // // // // //               transition-all shadow-lg shadow-white/5
// // // // // // //               flex items-center justify-center gap-2
// // // // // // //             "
// // // // // // //           >
// // // // // // //             Open Full Report <ArrowRight size={16} />
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // // Helpers
// // // // // // // function getStatusColor(status: string) {
// // // // // // //   switch (status?.toUpperCase()) {
// // // // // // //     case "RESOLVED": return "text-green-400";
// // // // // // //     case "REJECTED": return "text-red-400";
// // // // // // //     case "IN_PROGRESS": return "text-blue-400";
// // // // // // //     default: return "text-yellow-400";
// // // // // // //   }
// // // // // // // }

// // // // // // // function getStatusBg(status: string) {
// // // // // // //   switch (status?.toUpperCase()) {
// // // // // // //     case "RESOLVED": return "bg-green-400/10";
// // // // // // //     case "REJECTED": return "bg-red-400/10";
// // // // // // //     case "IN_PROGRESS": return "bg-blue-400/10";
// // // // // // //     default: return "bg-yellow-400/10";
// // // // // // //   }
// // // // // // // }

// // // // // // // "use client";

// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import { useRouter } from "next/navigation";
// // // // // // // import { X, MapPin, Activity, ArrowRight } from "lucide-react";
// // // // // // // import { API_BASE } from "@/lib/api"; // 👈 Import this to fix broken image links

// // // // // // // export default function ComplaintDetailDialog({
// // // // // // //   complaint,
// // // // // // //   onClose,
// // // // // // // }: {
// // // // // // //   complaint: any;
// // // // // // //   onClose: () => void;
// // // // // // // }) {
// // // // // // //   const router = useRouter();
// // // // // // //   const [mounted, setMounted] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     setMounted(true);
// // // // // // //   }, []);

// // // // // // //   if (!complaint) return null;

// // // // // // //   // --- SMART IMAGE LOGIC ---
// // // // // // //   // 1. Find the image string from any possible field
// // // // // // //   let rawPath =
// // // // // // //     complaint.media?.[0]?.url ||      // Check 'media' array (Your Backend Standard)
// // // // // // //     complaint.images?.[0]?.url ||     // Check 'images' array
// // // // // // //     complaint.imageUrl ||             // Check direct string
// // // // // // //     null;

// // // // // // //   // 2. Fix the URL (Add API_BASE if it's a relative path like "/uploads/...")
// // // // // // //   const imageUrl = rawPath
// // // // // // //     ? (rawPath.startsWith("http") ? rawPath : `${API_BASE}${rawPath}`)
// // // // // // //     : null;

// // // // // // //   return (
// // // // // // //     // WRAPPER: Pointer events none allows clicking through to map
// // // // // // //     <div className={`
// // // // // // //       fixed inset-y-4 right-4 z-[2000]
// // // // // // //       w-[400px] flex flex-col pointer-events-none
// // // // // // //       transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)
// // // // // // //       ${mounted ? "translate-x-0" : "translate-x-[120%]"}
// // // // // // //     `}>

// // // // // // //       {/* THE CARD */}
// // // // // // //       <div className="
// // // // // // //         h-full w-full pointer-events-auto
// // // // // // //         bg-zinc-900/95 backdrop-blur-xl
// // // // // // //         border border-white/10
// // // // // // //         rounded-3xl shadow-2xl shadow-black/50
// // // // // // //         flex flex-col overflow-hidden
// // // // // // //       ">

// // // // // // //         {/* 1. IMAGE HEADER (Replaces Location Logo) */}
// // // // // // //         <div className="relative h-56 shrink-0 bg-zinc-800 group">

// // // // // // //           {imageUrl ? (
// // // // // // //             <img
// // // // // // //               src={imageUrl}
// // // // // // //               alt="Evidence"
// // // // // // //               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// // // // // // //             />
// // // // // // //           ) : (
// // // // // // //             // Fallback if TRULY no image exists
// // // // // // //             <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex flex-col items-center justify-center text-zinc-600">
// // // // // // //               <MapPin size={48} className="mb-2 opacity-50" />
// // // // // // //               <span className="text-xs font-medium uppercase tracking-widest opacity-50">No Image Evidence</span>
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {/* Gradient Overlay for Text Readability */}
// // // // // // //           <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" />

// // // // // // //           {/* Close Button */}
// // // // // // //           <button
// // // // // // //             onClick={onClose}
// // // // // // //             className="
// // // // // // //               absolute top-4 right-4 z-20
// // // // // // //               p-2 rounded-full
// // // // // // //               bg-black/20 backdrop-blur-md border border-white/10
// // // // // // //               text-white/70 hover:text-white hover:bg-black/40
// // // // // // //               transition
// // // // // // //             "
// // // // // // //           >
// // // // // // //             <X size={20} />
// // // // // // //           </button>

// // // // // // //           {/* Title Overlay */}
// // // // // // //           <div className="absolute bottom-4 left-6 right-6 z-10">
// // // // // // //             <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white mb-2 shadow-lg shadow-blue-900/50">
// // // // // // //               {complaint.category || "Issue"}
// // // // // // //             </span>
// // // // // // //             <h2 className="text-2xl font-bold text-white leading-tight line-clamp-2 drop-shadow-md">
// // // // // // //               {complaint.title}
// // // // // // //             </h2>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* 2. SCROLLABLE CONTENT */}
// // // // // // //         <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">

// // // // // // //           {/* Status Row */}
// // // // // // //           <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
// // // // // // //             <div className="flex items-center gap-3">
// // // // // // //               <div className={`p-2.5 rounded-xl ${getStatusBg(complaint.currentStatus
// // // // // // //               )}`}>
// // // // // // //                 <Activity size={20} className={getStatusColor(complaint.currentStatus
// // // // // // //                 )} />
// // // // // // //               </div>
// // // // // // //               <div>
// // // // // // //                 <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Current Status</div>
// // // // // // //                 <div className={`text-sm font-bold ${getStatusColor(complaint.currentStatus
// // // // // // //                 )}`}>
// // // // // // //                   {complaint.currentStatus
// // // // // // //                     || "PENDING"}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             <div className="text-right">
// // // // // // //               <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Reported</div>
// // // // // // //               <div className="text-sm text-zinc-200 font-medium">
// // // // // // //                 {new Date(complaint.createdAt || Date.now()).toLocaleDateString()}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Description */}
// // // // // // //           <div className="space-y-2">
// // // // // // //             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Description</h3>
// // // // // // //             <p className="text-sm text-zinc-300 leading-relaxed">
// // // // // // //               {complaint.description || "No description provided by the citizen."}
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           {/* Location Info */}
// // // // // // //           <div className="space-y-2">
// // // // // // //             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Location</h3>
// // // // // // //             <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-800/50 border border-white/5">
// // // // // // //               <MapPin size={18} className="mt-0.5 shrink-0 text-blue-500" />
// // // // // // //               <div className="text-sm text-zinc-300">
// // // // // // //                 {complaint.address || (
// // // // // // //                   <span className="font-mono text-xs text-zinc-500">
// // // // // // //                     {complaint.lat.toFixed(6)}, {complaint.lng.toFixed(6)}
// // // // // // //                   </span>
// // // // // // //                 )}
// // // // // // //                 {complaint.ward && (
// // // // // // //                   <div className="mt-1 inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400">
// // // // // // //                     {complaint.ward.name}
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //         </div>

// // // // // // //         {/* 3. FIXED FOOTER ACTION */}
// // // // // // //         <div className="p-6 pt-0 mt-auto bg-zinc-900">
// // // // // // //           <button
// // // // // // //             onClick={() => router.push(`/complaints/${complaint.id}`)}
// // // // // // //             className="
// // // // // // //               w-full py-4 rounded-xl
// // // // // // //               bg-white text-black
// // // // // // //               font-bold text-sm tracking-wide
// // // // // // //               hover:bg-zinc-200 active:scale-[0.98]
// // // // // // //               transition-all shadow-lg shadow-white/5
// // // // // // //               flex items-center justify-center gap-2
// // // // // // //             "
// // // // // // //           >
// // // // // // //             Open Full Report <ArrowRight size={18} />
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // // Helpers
// // // // // // // function getStatusColor(status: string) {
// // // // // // //   switch (status?.toUpperCase()) {
// // // // // // //     case "RESOLVED": return "text-green-400";
// // // // // // //     case "REJECTED": return "text-red-400";
// // // // // // //     case "IN_PROGRESS": return "text-blue-400";
// // // // // // //     default: return "text-yellow-400";
// // // // // // //   }
// // // // // // // }

// // // // // // // function getStatusBg(status: string) {
// // // // // // //   switch (status?.toUpperCase()) {
// // // // // // //     case "RESOLVED": return "bg-green-500/20";
// // // // // // //     case "REJECTED": return "bg-red-500/20";
// // // // // // //     case "IN_PROGRESS": return "bg-blue-500/20";
// // // // // // //     default: return "bg-yellow-500/20";
// // // // // // //   }
// // // // // // // }
// // // // // // // "use client";

// // // // // // // import { useEffect, useState, useMemo } from "react";
// // // // // // // import { useRouter } from "next/navigation";
// // // // // // // import { X, MapPin, Activity, ArrowRight, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
// // // // // // // import { API_BASE } from "@/lib/api";

// // // // // // // export default function ComplaintDetailDialog({
// // // // // // //   complaint,
// // // // // // //   onClose,
// // // // // // // }: {
// // // // // // //   complaint: any;
// // // // // // //   onClose: () => void;
// // // // // // // }) {
// // // // // // //   const router = useRouter();
// // // // // // //   const [mounted, setMounted] = useState(false);
// // // // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// // // // // // //   useEffect(() => {
// // // // // // //     setMounted(true);
// // // // // // //   }, []);

// // // // // // //   // Reset image index when opening a new complaint
// // // // // // //   useEffect(() => {
// // // // // // //     setCurrentImageIndex(0);
// // // // // // //   }, [complaint?.id]);

// // // // // // //   // --- SMART IMAGE EXTRACTION (Moved ABOVE the early return) ---
// // // // // // //   const images = useMemo(() => {
// // // // // // //     // Safety check: if no complaint, return empty array immediately
// // // // // // //     if (!complaint) return [];

// // // // // // //     const list: string[] = [];

// // // // // // //     // 1. Check 'media' array (Standard Backend)
// // // // // // //     if (complaint.media && Array.isArray(complaint.media)) {
// // // // // // //       complaint.media.forEach((m: any) => {
// // // // // // //         if (m.url) list.push(m.url);
// // // // // // //       });
// // // // // // //     }

// // // // // // //     // 2. Fallback for legacy 'images' array or single 'imageUrl'
// // // // // // //     if (list.length === 0) {
// // // // // // //       if (complaint.images && Array.isArray(complaint.images)) {
// // // // // // //         complaint.images.forEach((img: any) => {
// // // // // // //           if (img?.url) list.push(img.url);
// // // // // // //           else if (typeof img === 'string') list.push(img);
// // // // // // //         });
// // // // // // //       } else if (complaint.imageUrl) {
// // // // // // //         list.push(complaint.imageUrl);
// // // // // // //       }
// // // // // // //     }

// // // // // // //     // 3. Normalize URLs (Add API_BASE if needed)
// // // // // // //     return list.map(url => url.startsWith("http") ? url : `${API_BASE}${url}`);
// // // // // // //   }, [complaint]);

// // // // // // //   // ✅ NOW we can check if complaint is null and return early
// // // // // // //   if (!complaint) return null;

// // // // // // //   const hasImages = images.length > 0;
// // // // // // //   const activeImage = hasImages ? images[currentImageIndex] : null;

// // // // // // //   // Navigation Handlers
// // // // // // //   const nextImage = (e: any) => {
// // // // // // //     e.stopPropagation();
// // // // // // //     setCurrentImageIndex((prev) => (prev + 1) % images.length);
// // // // // // //   };

// // // // // // //   const prevImage = (e: any) => {
// // // // // // //     e.stopPropagation();
// // // // // // //     setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     // WRAPPER: Pointer events none allows clicking through to map
// // // // // // //     <div className={`
// // // // // // //       fixed inset-y-4 right-4 z-[2000]
// // // // // // //       w-[400px] flex flex-col pointer-events-none
// // // // // // //       transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)
// // // // // // //       ${mounted ? "translate-x-0" : "translate-x-[120%]"}
// // // // // // //     `}>

// // // // // // //       {/* THE CARD */}
// // // // // // //       <div className="
// // // // // // //         h-full w-full pointer-events-auto
// // // // // // //         bg-zinc-950/95 backdrop-blur-2xl
// // // // // // //         border border-white/10
// // // // // // //         rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]
// // // // // // //         flex flex-col overflow-hidden
// // // // // // //       ">

// // // // // // //         {/* 1. CAROUSEL HEADER */}
// // // // // // //         <div className="relative h-64 shrink-0 bg-zinc-900 group">

// // // // // // //           {hasImages ? (
// // // // // // //             <>
// // // // // // //               {/* Image */}
// // // // // // //               <img
// // // // // // //                 key={activeImage}
// // // // // // //                 src={activeImage!}
// // // // // // //                 alt="Evidence"
// // // // // // //                 className="w-full h-full object-cover transition-transform duration-700"
// // // // // // //               />

// // // // // // //               {/* Navigation Arrows (Only if multiple images) */}
// // // // // // //               {images.length > 1 && (
// // // // // // //                 <>
// // // // // // //                   <button
// // // // // // //                     onClick={prevImage}
// // // // // // //                     className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
// // // // // // //                   >
// // // // // // //                     <ChevronLeft size={20} />
// // // // // // //                   </button>
// // // // // // //                   <button
// // // // // // //                     onClick={nextImage}
// // // // // // //                     className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
// // // // // // //                   >
// // // // // // //                     <ChevronRight size={20} />
// // // // // // //                   </button>

// // // // // // //                   {/* Dots Indicator */}
// // // // // // //                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
// // // // // // //                     {images.map((_, idx) => (
// // // // // // //                       <div
// // // // // // //                         key={idx}
// // // // // // //                         className={`
// // // // // // //                           h-1.5 rounded-full transition-all duration-300 shadow-sm
// // // // // // //                           ${idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/40"}
// // // // // // //                         `}
// // // // // // //                       />
// // // // // // //                     ))}
// // // // // // //                   </div>
// // // // // // //                 </>
// // // // // // //               )}
// // // // // // //             </>
// // // // // // //           ) : (
// // // // // // //             // Fallback: No Image
// // // // // // //             <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-600 border-b border-white/5">
// // // // // // //               <ImageIcon size={48} className="mb-2 opacity-20" />
// // // // // // //               <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">No Image Evidence</span>
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {/* Gradient Overlay for Text Readability */}
// // // // // // //           <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90" />

// // // // // // //           {/* Close Button */}
// // // // // // //           <button
// // // // // // //             onClick={onClose}
// // // // // // //             className="
// // // // // // //               absolute top-4 right-4 z-20
// // // // // // //               p-2 rounded-full
// // // // // // //               bg-black/20 backdrop-blur-md border border-white/10
// // // // // // //               text-white/70 hover:text-white hover:bg-black/40
// // // // // // //               transition
// // // // // // //             "
// // // // // // //           >
// // // // // // //             <X size={18} />
// // // // // // //           </button>

// // // // // // //           {/* Title Overlay */}
// // // // // // //           <div className="absolute bottom-4 left-6 right-6 z-10 pointer-events-none">
// // // // // // //             <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white mb-2 shadow-lg shadow-blue-900/50">
// // // // // // //               {complaint.category || "Issue"}
// // // // // // //             </span>
// // // // // // //             <h2 className="text-xl font-bold text-white leading-tight line-clamp-2 drop-shadow-md">
// // // // // // //               {complaint.title}
// // // // // // //             </h2>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* 2. SCROLLABLE CONTENT */}
// // // // // // //         <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">

// // // // // // //           {/* Status Row */}
// // // // // // //           <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
// // // // // // //             <div className="flex items-center gap-3">
// // // // // // //               <div className={`p-2.5 rounded-xl ${getStatusBg(complaint.currentStatus)}`}>
// // // // // // //                 <Activity size={18} className={getStatusColor(complaint.currentStatus)} />
// // // // // // //               </div>
// // // // // // //               <div>
// // // // // // //                 <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Current Status</div>
// // // // // // //                 <div className={`text-sm font-bold ${getStatusColor(complaint.currentStatus)}`}>
// // // // // // //                   {complaint.currentStatus?.replace(/_/g, " ") || "PENDING"}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             <div className="text-right">
// // // // // // //               <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Reported</div>
// // // // // // //               <div className="text-sm text-zinc-200 font-medium">
// // // // // // //                 {new Date(complaint.createdAt || Date.now()).toLocaleDateString()}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Description */}
// // // // // // //           <div className="space-y-2">
// // // // // // //             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Description</h3>
// // // // // // //             <p className="text-sm text-zinc-300 leading-relaxed">
// // // // // // //               {complaint.description || "No description provided by the citizen."}
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           {/* Location Info */}
// // // // // // //           <div className="space-y-2">
// // // // // // //             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Location</h3>
// // // // // // //             <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5">
// // // // // // //               <MapPin size={16} className="mt-0.5 shrink-0 text-blue-500" />
// // // // // // //               <div className="text-sm text-zinc-300">
// // // // // // //                 {complaint.locationText || (
// // // // // // //                   <span className="font-mono text-xs text-zinc-500">
// // // // // // //                     {complaint.lat.toFixed(6)}, {complaint.lng.toFixed(6)}
// // // // // // //                   </span>
// // // // // // //                 )}
// // // // // // //                 {complaint.ward && (
// // // // // // //                   <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">
// // // // // // //                     {complaint.ward.name}
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //         </div>

// // // // // // //         {/* 3. FIXED FOOTER ACTION */}
// // // // // // //         <div className="p-6 pt-0 mt-auto bg-zinc-950">
// // // // // // //           <button
// // // // // // //             onClick={() => router.push(`/complaints/${complaint.id}`)}
// // // // // // //             className="
// // // // // // //               w-full py-3.5 rounded-xl
// // // // // // //               bg-white text-black
// // // // // // //               font-bold text-sm tracking-wide
// // // // // // //               hover:bg-zinc-200 active:scale-[0.98]
// // // // // // //               transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]
// // // // // // //               flex items-center justify-center gap-2
// // // // // // //             "
// // // // // // //           >
// // // // // // //             Open Full Report <ArrowRight size={16} />
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // // Helpers
// // // // // // // function getStatusColor(status: string) {
// // // // // // //   switch (status?.toUpperCase()) {
// // // // // // //     case "RESOLVED": return "text-green-400";
// // // // // // //     case "REJECTED": return "text-red-400";
// // // // // // //     case "IN_PROGRESS": return "text-blue-400";
// // // // // // //     case "WORK_IN_PROGRESS": return "text-blue-400";
// // // // // // //     default: return "text-yellow-400";
// // // // // // //   }
// // // // // // // }

// // // // // // // function getStatusBg(status: string) {
// // // // // // //   switch (status?.toUpperCase()) {
// // // // // // //     case "RESOLVED": return "bg-green-500/20";
// // // // // // //     case "REJECTED": return "bg-red-500/20";
// // // // // // //     case "IN_PROGRESS": return "bg-blue-500/20";
// // // // // // //     case "WORK_IN_PROGRESS": return "bg-blue-500/20";
// // // // // // //     default: return "bg-yellow-500/20";
// // // // // // //   }
// // // // // // // }

// // // // // // // "use client";

// // // // // // // import { useEffect, useState, useMemo } from "react";
// // // // // // // import { useRouter } from "next/navigation";
// // // // // // // import { X, MapPin, Activity, ArrowRight, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
// // // // // // // import { API_BASE } from "@/lib/api";

// // // // // // // export default function ComplaintDetailDialog({
// // // // // // //   complaint,
// // // // // // //   onClose,
// // // // // // // }: {
// // // // // // //   complaint: any;
// // // // // // //   onClose: () => void;
// // // // // // // }) {
// // // // // // //   const router = useRouter();
// // // // // // //   const [mounted, setMounted] = useState(false);
// // // // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// // // // // // //   useEffect(() => {
// // // // // // //     setMounted(true);
// // // // // // //   }, []);

// // // // // // //   // Reset image index when opening a new complaint
// // // // // // //   useEffect(() => {
// // // // // // //     setCurrentImageIndex(0);
// // // // // // //   }, [complaint?.id]);

// // // // // // //   // --- SMART IMAGE EXTRACTION ---
// // // // // // //   const images = useMemo(() => {
// // // // // // //     if (!complaint) return [];

// // // // // // //     const list: string[] = [];

// // // // // // //     // 1. Check 'media' array (Standard Backend)
// // // // // // //     if (complaint.media && Array.isArray(complaint.media)) {
// // // // // // //       complaint.media.forEach((m: any) => {
// // // // // // //         if (m.url) list.push(m.url);
// // // // // // //       });
// // // // // // //     }

// // // // // // //     // 2. Fallback for legacy 'images' array or single 'imageUrl'
// // // // // // //     if (list.length === 0) {
// // // // // // //       if (complaint.images && Array.isArray(complaint.images)) {
// // // // // // //         complaint.images.forEach((img: any) => {
// // // // // // //              if(img?.url) list.push(img.url);
// // // // // // //              else if(typeof img === 'string') list.push(img);
// // // // // // //         });
// // // // // // //       } else if (complaint.imageUrl) {
// // // // // // //         list.push(complaint.imageUrl);
// // // // // // //       }
// // // // // // //     }

// // // // // // //     // 3. Normalize URLs (Add API_BASE if needed)
// // // // // // //     return list.map(url => url.startsWith("http") ? url : `${API_BASE}${url}`);
// // // // // // //   }, [complaint]);

// // // // // // //   // Early return after hooks
// // // // // // //   if (!complaint) return null;

// // // // // // //   const hasImages = images.length > 0;
// // // // // // //   const activeImage = hasImages ? images[currentImageIndex] : null;

// // // // // // //   // Navigation Handlers
// // // // // // //   const nextImage = (e: any) => {
// // // // // // //     e.stopPropagation();
// // // // // // //     setCurrentImageIndex((prev) => (prev + 1) % images.length);
// // // // // // //   };

// // // // // // //   const prevImage = (e: any) => {
// // // // // // //     e.stopPropagation();
// // // // // // //     setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     // WRAPPER
// // // // // // //     <div className={`
// // // // // // //       fixed inset-y-4 right-4 z-[2000]
// // // // // // //       w-[400px] flex flex-col pointer-events-none
// // // // // // //       transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)
// // // // // // //       ${mounted ? "translate-x-0" : "translate-x-[120%]"}
// // // // // // //     `}>

// // // // // // //       {/* THE CARD */}
// // // // // // //       <div className="
// // // // // // //         h-full w-full pointer-events-auto
// // // // // // //         bg-zinc-950/95 backdrop-blur-2xl
// // // // // // //         border border-white/10
// // // // // // //         rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]
// // // // // // //         flex flex-col overflow-hidden
// // // // // // //       ">

// // // // // // //         {/* 1. CAROUSEL HEADER */}
// // // // // // //         <div className="relative h-64 shrink-0 bg-zinc-900 group overflow-hidden">

// // // // // // //           {hasImages ? (
// // // // // // //             <>
// // // // // // //               {/* Image with Cinematic Animation */}
// // // // // // //               <img
// // // // // // //                 key={activeImage} // 👈 Forces animation on change
// // // // // // //                 src={activeImage!}
// // // // // // //                 alt="Evidence"
// // // // // // //                 className="w-full h-full object-cover animate-in fade-in zoom-in-110 duration-700"
// // // // // // //               />

// // // // // // //               {/* Navigation Arrows (Z-Index Fixed) */}
// // // // // // //               {images.length > 1 && (
// // // // // // //                 <>
// // // // // // //                   <button 
// // // // // // //                     onClick={prevImage}
// // // // // // //                     className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
// // // // // // //                   >
// // // // // // //                     <ChevronLeft size={20} />
// // // // // // //                   </button>
// // // // // // //                   <button 
// // // // // // //                     onClick={nextImage}
// // // // // // //                     className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
// // // // // // //                   >
// // // // // // //                     <ChevronRight size={20} />
// // // // // // //                   </button>

// // // // // // //                   {/* Dots Indicator (Z-Index Fixed) */}
// // // // // // //                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
// // // // // // //                     {images.map((_, idx) => (
// // // // // // //                       <button
// // // // // // //                         key={idx}
// // // // // // //                         onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
// // // // // // //                         className={`
// // // // // // //                           h-1.5 rounded-full transition-all duration-300 shadow-sm
// // // // // // //                           ${idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}
// // // // // // //                         `}
// // // // // // //                       />
// // // // // // //                     ))}
// // // // // // //                   </div>
// // // // // // //                 </>
// // // // // // //               )}
// // // // // // //             </>
// // // // // // //           ) : (
// // // // // // //             // Fallback: No Image
// // // // // // //             <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-600 border-b border-white/5">
// // // // // // //               <ImageIcon size={48} className="mb-2 opacity-20" />
// // // // // // //               <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">No Image Evidence</span>
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {/* Gradient Overlay */}
// // // // // // //           <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 z-10 pointer-events-none" />

// // // // // // //           {/* Close Button (Z-Index Fixed) */}
// // // // // // //           <button
// // // // // // //             onClick={onClose}
// // // // // // //             className="
// // // // // // //               absolute top-4 right-4 z-30
// // // // // // //               p-2 rounded-full
// // // // // // //               bg-black/20 backdrop-blur-md border border-white/10
// // // // // // //               text-white/70 hover:text-white hover:bg-black/40
// // // // // // //               transition
// // // // // // //             "
// // // // // // //           >
// // // // // // //             <X size={18} />
// // // // // // //           </button>

// // // // // // //           {/* Title Overlay */}
// // // // // // //           <div className="absolute bottom-4 left-6 right-6 z-10 pointer-events-none">
// // // // // // //             <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white mb-2 shadow-lg shadow-blue-900/50">
// // // // // // //               {complaint.category || "Issue"}
// // // // // // //             </span>
// // // // // // //             <h2 className="text-xl font-bold text-white leading-tight line-clamp-2 drop-shadow-md">
// // // // // // //               {complaint.title}
// // // // // // //             </h2>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* 2. SCROLLABLE CONTENT */}
// // // // // // //         <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">

// // // // // // //           {/* Status Row */}
// // // // // // //           <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
// // // // // // //             <div className="flex items-center gap-3">
// // // // // // //               <div className={`p-2.5 rounded-xl ${getStatusBg(complaint.currentStatus)}`}>
// // // // // // //                 <Activity size={18} className={getStatusColor(complaint.currentStatus)} />
// // // // // // //               </div>
// // // // // // //               <div>
// // // // // // //                 <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Current Status</div>
// // // // // // //                 <div className={`text-sm font-bold ${getStatusColor(complaint.currentStatus)}`}>
// // // // // // //                   {complaint.currentStatus?.replace(/_/g, " ") || "PENDING"}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             <div className="text-right">
// // // // // // //               <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Reported</div>
// // // // // // //               <div className="text-sm text-zinc-200 font-medium">
// // // // // // //                  {new Date(complaint.createdAt || Date.now()).toLocaleDateString()}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Description */}
// // // // // // //           <div className="space-y-2">
// // // // // // //             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Description</h3>
// // // // // // //             <p className="text-sm text-zinc-300 leading-relaxed">
// // // // // // //               {complaint.description || "No description provided by the citizen."}
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           {/* Location Info */}
// // // // // // //           <div className="space-y-2">
// // // // // // //             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Location</h3>
// // // // // // //             <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5">
// // // // // // //               <MapPin size={16} className="mt-0.5 shrink-0 text-blue-500" />
// // // // // // //               <div className="text-sm text-zinc-300">
// // // // // // //                 {complaint.locationText || (
// // // // // // //                   <span className="font-mono text-xs text-zinc-500">
// // // // // // //                     {complaint.lat.toFixed(6)}, {complaint.lng.toFixed(6)}
// // // // // // //                   </span>
// // // // // // //                 )}
// // // // // // //                 {complaint.ward && (
// // // // // // //                   <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">
// // // // // // //                     {complaint.ward.name}
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //         </div>

// // // // // // //         {/* 3. FIXED FOOTER ACTION */}
// // // // // // //         <div className="p-6 pt-0 mt-auto bg-zinc-950">
// // // // // // //           <button
// // // // // // //             onClick={() => router.push(`/complaints/${complaint.id}`)}
// // // // // // //             className="
// // // // // // //               w-full py-3.5 rounded-xl
// // // // // // //               bg-white text-black
// // // // // // //               font-bold text-sm tracking-wide
// // // // // // //               hover:bg-zinc-200 active:scale-[0.98]
// // // // // // //               transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]
// // // // // // //               flex items-center justify-center gap-2
// // // // // // //             "
// // // // // // //           >
// // // // // // //             Open Full Report <ArrowRight size={16} />
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // // Helpers
// // // // // // // function getStatusColor(status: string) {
// // // // // // //   switch (status?.toUpperCase()) {
// // // // // // //     case "RESOLVED": return "text-green-400";
// // // // // // //     case "REJECTED": return "text-red-400";
// // // // // // //     case "IN_PROGRESS": return "text-blue-400";
// // // // // // //     case "WORK_IN_PROGRESS": return "text-blue-400";
// // // // // // //     default: return "text-yellow-400";
// // // // // // //   }
// // // // // // // }

// // // // // // // function getStatusBg(status: string) {
// // // // // // //   switch (status?.toUpperCase()) {
// // // // // // //     case "RESOLVED": return "bg-green-500/20";
// // // // // // //     case "REJECTED": return "bg-red-500/20";
// // // // // // //     case "IN_PROGRESS": return "bg-blue-500/20";
// // // // // // //     case "WORK_IN_PROGRESS": return "bg-blue-500/20";
// // // // // // //     default: return "bg-yellow-500/20";
// // // // // // //   }
// // // // // // // }

// // // // // // "use client";

// // // // // // import { useEffect, useState, useMemo } from "react";
// // // // // // import Image from "next/image";
// // // // // // import { useRouter } from "next/navigation";
// // // // // // import { X, MapPin, Activity, ArrowRight, ChevronLeft, ChevronRight, Image as ImageIcon, Loader2 } from "lucide-react";
// // // // // // import { API_BASE } from "@/lib/api";

// // // // // // export default function ComplaintDetailDialog({
// // // // // //   complaint,
// // // // // //   onClose,
// // // // // // }: {
// // // // // //   complaint: any;
// // // // // //   onClose: () => void;
// // // // // // }) {
// // // // // //   const router = useRouter();
// // // // // //   const [mounted, setMounted] = useState(false);
// // // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// // // // // //   const [isLoadingImage, setIsLoadingImage] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     setMounted(true);
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     setCurrentImageIndex(0);
// // // // // //     setIsLoadingImage(true);
// // // // // //   }, [complaint?.id]);

// // // // // //   const images = useMemo(() => {
// // // // // //     if (!complaint) return [];
// // // // // //     const list: string[] = [];

// // // // // //     if (complaint.media && Array.isArray(complaint.media)) {
// // // // // //       complaint.media.forEach((m: any) => { if (m.url) list.push(m.url); });
// // // // // //     }

// // // // // //     if (list.length === 0) {
// // // // // //       if (complaint.images && Array.isArray(complaint.images)) {
// // // // // //         complaint.images.forEach((img: any) => {
// // // // // //              if(img?.url) list.push(img.url);
// // // // // //              else if(typeof img === 'string') list.push(img);
// // // // // //         });
// // // // // //       } else if (complaint.imageUrl) {
// // // // // //         list.push(complaint.imageUrl);
// // // // // //       }
// // // // // //     }
// // // // // //     return list.map(url => url.startsWith("http") ? url : `${API_BASE}${url}`);
// // // // // //   }, [complaint]);

// // // // // //   if (!complaint) return null;

// // // // // //   const hasImages = images.length > 0;
// // // // // //   const activeImage = hasImages ? images[currentImageIndex] : null;

// // // // // //   const nextImage = (e: any) => {
// // // // // //     e.stopPropagation();
// // // // // //     setCurrentImageIndex((prev) => (prev + 1) % images.length);
// // // // // //     setIsLoadingImage(true);
// // // // // //   };

// // // // // //   const prevImage = (e: any) => {
// // // // // //     e.stopPropagation();
// // // // // //     setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// // // // // //     setIsLoadingImage(true);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={`
// // // // // //       fixed inset-y-4 right-4 z-[2000]
// // // // // //       w-[400px] flex flex-col pointer-events-none
// // // // // //       transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)
// // // // // //       ${mounted ? "translate-x-0" : "translate-x-[120%]"}
// // // // // //     `}>

// // // // // //       <div className="
// // // // // //         h-full w-full pointer-events-auto
// // // // // //         bg-zinc-950/95 backdrop-blur-2xl
// // // // // //         border border-white/10
// // // // // //         rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]
// // // // // //         flex flex-col overflow-hidden
// // // // // //       ">

// // // // // //         {/* 1. CAROUSEL HEADER (Clean Image Only) */}
// // // // // //         <div className="relative h-56 shrink-0 bg-zinc-900 group overflow-hidden border-b border-white/5">

// // // // // //           {hasImages ? (
// // // // // //             <>
// // // // // //               {isLoadingImage && (
// // // // // //                 <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
// // // // // //                    <Loader2 className="animate-spin text-blue-500" size={32} />
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               <div className="relative w-full h-full">
// // // // // //                 <Image
// // // // // //                   key={activeImage}
// // // // // //                   src={activeImage!}
// // // // // //                   alt="Evidence"
// // // // // //                   fill
// // // // // //                   unoptimized={true}
// // // // // //                   className={`
// // // // // //                      object-cover transition-opacity duration-500
// // // // // //                      ${isLoadingImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}
// // // // // //                   `}
// // // // // //                   sizes="(max-width: 400px) 100vw, 400px"
// // // // // //                   priority
// // // // // //                   onLoad={() => setIsLoadingImage(false)}
// // // // // //                 />
// // // // // //               </div>

// // // // // //               {images.length > 1 && (
// // // // // //                 <>
// // // // // //                   <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100">
// // // // // //                     <ChevronLeft size={20} />
// // // // // //                   </button>
// // // // // //                   <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100">
// // // // // //                     <ChevronRight size={20} />
// // // // // //                   </button>
// // // // // //                   <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
// // // // // //                     {images.map((_, idx) => (
// // // // // //                       <button
// // // // // //                         key={idx}
// // // // // //                         onClick={(e) => { e.stopPropagation(); if(idx !== currentImageIndex) { setCurrentImageIndex(idx); setIsLoadingImage(true); } }}
// // // // // //                         className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
// // // // // //                       />
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                   <div className="hidden">
// // // // // //                      <Image src={images[(currentImageIndex + 1) % images.length]} alt="preload" width={10} height={10} priority={false} unoptimized={true} />
// // // // // //                   </div>
// // // // // //                 </>
// // // // // //               )}
// // // // // //             </>
// // // // // //           ) : (
// // // // // //             <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-600">
// // // // // //               <ImageIcon size={48} className="mb-2 opacity-20" />
// // // // // //               <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">No Image Evidence</span>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {/* Close Button (Kept on Image for space efficiency) */}
// // // // // //           <button
// // // // // //             onClick={onClose}
// // // // // //             className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-black/60 transition"
// // // // // //           >
// // // // // //             <X size={18} />
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         {/* 2. SCROLLABLE CONTENT */}
// // // // // //         <div className="flex-1 overflow-y-auto custom-scrollbar">

// // // // // //           {/* ✅ NEW: Title & Category Section (Below Image) */}
// // // // // //           <div className="px-6 pt-6 pb-2">
// // // // // //             <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
// // // // // //               {complaint.category || "Issue"}
// // // // // //             </span>
// // // // // //             <h2 className="text-xl font-bold text-white leading-snug">
// // // // // //               {complaint.title}
// // // // // //             </h2>
// // // // // //           </div>

// // // // // //           <div className="p-6 pt-2 space-y-6">

// // // // // //             {/* Status Row */}
// // // // // //             <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
// // // // // //               <div className="flex items-center gap-3">
// // // // // //                 <div className={`p-2.5 rounded-xl ${getStatusBg(complaint.currentStatus)}`}>
// // // // // //                   <Activity size={18} className={getStatusColor(complaint.currentStatus)} />
// // // // // //                 </div>
// // // // // //                 <div>
// // // // // //                   <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Current Status</div>
// // // // // //                   <div className={`text-sm font-bold ${getStatusColor(complaint.currentStatus)}`}>
// // // // // //                     {complaint.currentStatus?.replace(/_/g, " ") || "PENDING"}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <div className="text-right">
// // // // // //                 <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Reported</div>
// // // // // //                 <div className="text-sm text-zinc-200 font-medium">
// // // // // //                    {new Date(complaint.createdAt || Date.now()).toLocaleDateString()}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Description */}
// // // // // //             <div className="space-y-2">
// // // // // //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Description</h3>
// // // // // //               <p className="text-sm text-zinc-300 leading-relaxed">
// // // // // //                 {complaint.description || "No description provided by the citizen."}
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             {/* Location Info */}
// // // // // //             <div className="space-y-2">
// // // // // //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Location</h3>
// // // // // //               <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5">
// // // // // //                 <MapPin size={16} className="mt-0.5 shrink-0 text-blue-500" />
// // // // // //                 <div className="text-sm text-zinc-300">
// // // // // //                   {complaint.locationText || (
// // // // // //                     <span className="font-mono text-xs text-zinc-500">
// // // // // //                       {complaint.lat.toFixed(6)}, {complaint.lng.toFixed(6)}
// // // // // //                     </span>
// // // // // //                   )}
// // // // // //                   {complaint.ward && (
// // // // // //                     <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">
// // // // // //                       {complaint.ward.name}
// // // // // //                     </div>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //         {/* 3. FIXED FOOTER ACTION */}
// // // // // //         <div className="p-6 pt-0 mt-auto bg-zinc-950">
// // // // // //           <button
// // // // // //             onClick={() => router.push(`/complaints/${complaint.id}`)}
// // // // // //             className="
// // // // // //               w-full py-3.5 rounded-xl
// // // // // //               bg-white text-black
// // // // // //               font-bold text-sm tracking-wide
// // // // // //               hover:bg-zinc-200 active:scale-[0.98]
// // // // // //               transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]
// // // // // //               flex items-center justify-center gap-2
// // // // // //             "
// // // // // //           >
// // // // // //             Open Full Report <ArrowRight size={16} />
// // // // // //           </button>
// // // // // //         </div>

// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // // Helpers
// // // // // // function getStatusColor(status: string) {
// // // // // //   switch (status?.toUpperCase()) {
// // // // // //     case "RESOLVED": return "text-green-400";
// // // // // //     case "REJECTED": return "text-red-400";
// // // // // //     case "IN_PROGRESS": return "text-blue-400";
// // // // // //     case "WORK_IN_PROGRESS": return "text-blue-400";
// // // // // //     default: return "text-yellow-400";
// // // // // //   }
// // // // // // }

// // // // // // function getStatusBg(status: string) {
// // // // // //   switch (status?.toUpperCase()) {
// // // // // //     case "RESOLVED": return "bg-green-500/20";
// // // // // //     case "REJECTED": return "bg-red-500/20";
// // // // // //     case "IN_PROGRESS": return "bg-blue-500/20";
// // // // // //     case "WORK_IN_PROGRESS": return "bg-blue-500/20";
// // // // // //     default: return "bg-yellow-500/20";
// // // // // //   }
// // // // // // }

// // // // // "use client";

// // // // // import { useEffect, useState, useMemo } from "react";
// // // // // import Image from "next/image";
// // // // // import { useRouter } from "next/navigation";
// // // // // import { 
// // // // //   X, MapPin, Activity, ArrowRight, ChevronLeft, ChevronRight, 
// // // // //   Image as ImageIcon, Loader2, Clock, CheckCircle2, User, 
// // // // //   Hammer, AlertTriangle, FileText
// // // // // } from "lucide-react";
// // // // // import { API_BASE, apiGet } from "@/lib/api";

// // // // // export default function ComplaintDetailDialog({
// // // // //   complaint,
// // // // //   onClose,
// // // // // }: {
// // // // //   complaint: any;
// // // // //   onClose: () => void;
// // // // // }) {
// // // // //   const router = useRouter();
// // // // //   const [mounted, setMounted] = useState(false);

// // // // //   // Image States
// // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// // // // //   const [isLoadingImage, setIsLoadingImage] = useState(true);

// // // // //   // Timeline States
// // // // //   const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
// // // // //   const [timelineEvents, setTimelineEvents] = useState<any[]>([]);
// // // // //   const [isLoadingTimeline, setIsLoadingTimeline] = useState(false);

// // // // //   useEffect(() => {
// // // // //     setMounted(true);
// // // // //   }, []);

// // // // //   // Reset states when opening a new complaint
// // // // //   useEffect(() => {
// // // // //     setCurrentImageIndex(0);
// // // // //     setIsLoadingImage(true);
// // // // //     setIsTimelineExpanded(false);
// // // // //     setTimelineEvents([]);
// // // // //   }, [complaint?.id]);

// // // // //   // --- SMART IMAGE EXTRACTION ---
// // // // //   const images = useMemo(() => {
// // // // //     if (!complaint) return [];
// // // // //     const list: string[] = [];

// // // // //     if (complaint.media && Array.isArray(complaint.media)) {
// // // // //       complaint.media.forEach((m: any) => { if (m.url) list.push(m.url); });
// // // // //     }

// // // // //     if (list.length === 0) {
// // // // //       if (complaint.images && Array.isArray(complaint.images)) {
// // // // //         complaint.images.forEach((img: any) => {
// // // // //              if(img?.url) list.push(img.url);
// // // // //              else if(typeof img === 'string') list.push(img);
// // // // //         });
// // // // //       } else if (complaint.imageUrl) {
// // // // //         list.push(complaint.imageUrl);
// // // // //       }
// // // // //     }
// // // // //     return list.map(url => url.startsWith("http") ? url : `${API_BASE}${url}`);
// // // // //   }, [complaint]);

// // // // //   if (!complaint) return null;

// // // // //   const hasImages = images.length > 0;
// // // // //   const activeImage = hasImages ? images[currentImageIndex] : null;

// // // // //   // --- HANDLERS ---

// // // // //   const handleTimelineToggle = async () => {
// // // // //     if (isTimelineExpanded) {
// // // // //       setIsTimelineExpanded(false);
// // // // //       return;
// // // // //     }

// // // // //     setIsTimelineExpanded(true);

// // // // //     // Lazy Fetch Events
// // // // //     if (timelineEvents.length === 0) {
// // // // //       setIsLoadingTimeline(true);
// // // // //       try {
// // // // //         const fullDetails = await apiGet<any>(`/complaints/${complaint.id}`);
// // // // //         if (fullDetails && fullDetails.events) {
// // // // //           setTimelineEvents(fullDetails.events);
// // // // //         }
// // // // //       } catch (err) {
// // // // //         console.error("Failed to load timeline", err);
// // // // //       } finally {
// // // // //         setIsLoadingTimeline(false);
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const nextImage = (e: any) => {
// // // // //     e.stopPropagation();
// // // // //     setCurrentImageIndex((prev) => (prev + 1) % images.length);
// // // // //     setIsLoadingImage(true);
// // // // //   };

// // // // //   const prevImage = (e: any) => {
// // // // //     e.stopPropagation();
// // // // //     setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// // // // //     setIsLoadingImage(true);
// // // // //   };

// // // // //   return (
// // // // //     <div className={`
// // // // //       fixed inset-y-4 right-4 z-[2000]
// // // // //       w-[400px] flex flex-col pointer-events-none
// // // // //       transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)
// // // // //       ${mounted ? "translate-x-0" : "translate-x-[120%]"}
// // // // //     `}>

// // // // //       <div className="
// // // // //         h-full w-full pointer-events-auto
// // // // //         bg-zinc-950/95 backdrop-blur-2xl
// // // // //         border border-white/10
// // // // //         rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]
// // // // //         flex flex-col overflow-hidden
// // // // //       ">

// // // // //         {/* 1. CAROUSEL HEADER */}
// // // // //         <div className="relative h-56 shrink-0 bg-zinc-900 group overflow-hidden border-b border-white/5">
// // // // //           {hasImages ? (
// // // // //             <>
// // // // //               {isLoadingImage && (
// // // // //                 <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
// // // // //                    <Loader2 className="animate-spin text-blue-500" size={32} />
// // // // //                 </div>
// // // // //               )}
// // // // //               <div className="relative w-full h-full">
// // // // //                 <Image
// // // // //                   key={activeImage}
// // // // //                   src={activeImage!}
// // // // //                   alt="Evidence"
// // // // //                   fill
// // // // //                   unoptimized={true}
// // // // //                   className={`object-cover transition-opacity duration-500 ${isLoadingImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
// // // // //                   sizes="(max-width: 400px) 100vw, 400px"
// // // // //                   priority
// // // // //                   onLoad={() => setIsLoadingImage(false)}
// // // // //                 />
// // // // //               </div>
// // // // //               {images.length > 1 && (
// // // // //                 <>
// // // // //                   <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100">
// // // // //                     <ChevronLeft size={20} />
// // // // //                   </button>
// // // // //                   <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100">
// // // // //                     <ChevronRight size={20} />
// // // // //                   </button>
// // // // //                   <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
// // // // //                     {images.map((_, idx) => (
// // // // //                       <button
// // // // //                         key={idx}
// // // // //                         onClick={(e) => { e.stopPropagation(); if(idx !== currentImageIndex) { setCurrentImageIndex(idx); setIsLoadingImage(true); } }}
// // // // //                         className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
// // // // //                       />
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </>
// // // // //               )}
// // // // //             </>
// // // // //           ) : (
// // // // //             <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-600">
// // // // //               <ImageIcon size={48} className="mb-2 opacity-20" />
// // // // //               <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">No Image Evidence</span>
// // // // //             </div>
// // // // //           )}
// // // // //           <button onClick={onClose} className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-black/60 transition">
// // // // //             <X size={18} />
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* 2. SCROLLABLE CONTENT */}
// // // // //         <div className="flex-1 overflow-y-auto custom-scrollbar">

// // // // //           {/* Title */}
// // // // //           <div className="px-6 pt-6 pb-2">
// // // // //             <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
// // // // //               {complaint.category || "Issue"}
// // // // //             </span>
// // // // //             <h2 className="text-xl font-bold text-white leading-snug">
// // // // //               {complaint.title}
// // // // //             </h2>
// // // // //           </div>

// // // // //           <div className="p-6 pt-2 space-y-6">

// // // // //             {/* --- TIMELINE TOGGLE ROW --- */}
// // // // //             <div 
// // // // //                onClick={handleTimelineToggle}
// // // // //                className={`
// // // // //                  relative overflow-hidden flex flex-col
// // // // //                  rounded-2xl border transition-all duration-500 cursor-pointer group
// // // // //                  ${isTimelineExpanded 
// // // // //                     ? 'bg-zinc-900 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
// // // // //                     : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'}
// // // // //                `}
// // // // //             >
// // // // //               {/* Top Bar */}
// // // // //               <div className="flex items-center justify-between p-4 z-10">
// // // // //                 <div className="flex items-center gap-3">
// // // // //                   <div className={`p-2.5 rounded-xl transition-colors duration-500 ${getStatusBg(complaint.currentStatus)}`}>
// // // // //                     {isTimelineExpanded ? (
// // // // //                        <Clock size={18} className="text-blue-400 animate-spin-slow" />
// // // // //                     ) : (
// // // // //                        <Activity size={18} className={getStatusColor(complaint.currentStatus)} />
// // // // //                     )}
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold group-hover:text-blue-400 transition-colors">
// // // // //                       {isTimelineExpanded ? "SLA Timeline" : "Current Status"}
// // // // //                     </div>
// // // // //                     <div className={`text-sm font-bold ${getStatusColor(complaint.currentStatus)}`}>
// // // // //                       {complaint.currentStatus?.replace(/_/g, " ") || "PENDING"}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Indicator */}
// // // // //                 <div className="text-right">
// // // // //                    {isTimelineExpanded ? (
// // // // //                       <div className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full font-bold uppercase">
// // // // //                         History
// // // // //                       </div>
// // // // //                    ) : (
// // // // //                       <div className="flex flex-col items-end">
// // // // //                         <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Reported</div>
// // // // //                         <div className="text-sm text-zinc-200 font-medium">
// // // // //                           {new Date(complaint.createdAt || Date.now()).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
// // // // //                         </div>
// // // // //                       </div>
// // // // //                    )}
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* --- EXPANDED TIMELINE --- */}
// // // // //               <div className={`
// // // // //                  transition-all duration-500 ease-in-out overflow-hidden bg-black/40
// // // // //                  ${isTimelineExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
// // // // //               `}>
// // // // //                  <div className="p-4 pt-2 pl-6 border-t border-white/5">

// // // // //                     {isLoadingTimeline ? (
// // // // //                        <div className="flex items-center gap-2 text-xs text-zinc-500 py-6 justify-center">
// // // // //                           <Loader2 size={14} className="animate-spin" /> Fetching SLA logs...
// // // // //                        </div>
// // // // //                     ) : (
// // // // //                        <div className="relative space-y-0 pb-2">
// // // // //                           {/* Connector Line */}
// // // // //                           <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-zinc-800" />

// // // // //                           {timelineEvents.length === 0 ? (
// // // // //                             <div className="pl-10 text-xs text-zinc-500 py-2">No history recorded yet.</div>
// // // // //                           ) : (
// // // // //                             timelineEvents.map((event: any, idx) => {
// // // // //                               // Determine Icon & Color based on Event Type
// // // // //                               const isLast = idx === timelineEvents.length - 1;
// // // // //                               let Icon = Activity;
// // // // //                               let colorClass = "text-zinc-400 bg-zinc-800 border-zinc-700";

// // // // //                               switch(event.type) {
// // // // //                                 case 'CREATED': 
// // // // //                                   Icon = FileText; 
// // // // //                                   colorClass = "text-blue-400 bg-blue-900/20 border-blue-500/50";
// // // // //                                   break;
// // // // //                                 case 'ACKNOWLEDGED':
// // // // //                                 case 'ASSIGNED': 
// // // // //                                   Icon = User; 
// // // // //                                   colorClass = "text-purple-400 bg-purple-900/20 border-purple-500/50";
// // // // //                                   break;
// // // // //                                 case 'WORK_IN_PROGRESS': 
// // // // //                                   Icon = Hammer; 
// // // // //                                   colorClass = "text-orange-400 bg-orange-900/20 border-orange-500/50";
// // // // //                                   break;
// // // // //                                 case 'RESOLVED': 
// // // // //                                   Icon = CheckCircle2; 
// // // // //                                   colorClass = "text-green-400 bg-green-900/20 border-green-500/50";
// // // // //                                   break;
// // // // //                                 case 'REJECTED': 
// // // // //                                   Icon = AlertTriangle; 
// // // // //                                   colorClass = "text-red-400 bg-red-900/20 border-red-500/50";
// // // // //                                   break;
// // // // //                               }

// // // // //                               return (
// // // // //                                 <div key={idx} className="relative pl-10 py-3 group">
// // // // //                                    {/* Timeline Dot/Icon */}
// // // // //                                    <div className={`
// // // // //                                       absolute left-0 top-3 w-8 h-8 rounded-full border flex items-center justify-center z-10
// // // // //                                       ${colorClass} ${isLast ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-110' : ''}
// // // // //                                    `}>
// // // // //                                       <Icon size={14} />
// // // // //                                    </div>

// // // // //                                    {/* Content */}
// // // // //                                    <div className="flex flex-col">
// // // // //                                       <div className="flex justify-between items-center">
// // // // //                                         <span className={`text-xs font-bold ${isLast ? 'text-white' : 'text-zinc-400'}`}>
// // // // //                                           {event.type.replace(/_/g, " ")}
// // // // //                                         </span>
// // // // //                                         <span className="text-[10px] text-zinc-500 font-mono">
// // // // //                                           {new Date(event.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
// // // // //                                         </span>
// // // // //                                       </div>

// // // // //                                       <div className="text-[10px] text-zinc-500">
// // // // //                                          {new Date(event.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
// // // // //                                       </div>

// // // // //                                       {/* Event Details (Note or Officer) */}
// // // // //                                       {event.data && (
// // // // //                                         <div className="mt-1.5">
// // // // //                                           {event.data.note && (
// // // // //                                             <p className="text-[11px] text-zinc-300 bg-white/5 p-1.5 rounded border border-white/5 inline-block max-w-full">
// // // // //                                               "{event.data.note}"
// // // // //                                             </p>
// // // // //                                           )}
// // // // //                                         </div>
// // // // //                                       )}
// // // // //                                    </div>
// // // // //                                 </div>
// // // // //                               );
// // // // //                             })
// // // // //                           )}
// // // // //                        </div>
// // // // //                     )}
// // // // //                  </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Description */}
// // // // //             <div className="space-y-2">
// // // // //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Description</h3>
// // // // //               <p className="text-sm text-zinc-300 leading-relaxed">
// // // // //                 {complaint.description || "No description provided by the citizen."}
// // // // //               </p>
// // // // //             </div>

// // // // //             {/* Location Info */}
// // // // //             <div className="space-y-2">
// // // // //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Location</h3>
// // // // //               <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5">
// // // // //                 <MapPin size={16} className="mt-0.5 shrink-0 text-blue-500" />
// // // // //                 <div className="text-sm text-zinc-300">
// // // // //                   {complaint.locationText || (
// // // // //                     <span className="font-mono text-xs text-zinc-500">
// // // // //                       {complaint.lat.toFixed(6)}, {complaint.lng.toFixed(6)}
// // // // //                     </span>
// // // // //                   )}
// // // // //                   {complaint.ward && (
// // // // //                     <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">
// // // // //                       {complaint.ward.name}
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //           </div>
// // // // //         </div>

// // // // //         {/* 3. FIXED FOOTER ACTION */}
// // // // //         <div className="p-6 pt-0 mt-auto bg-zinc-950">
// // // // //           <button
// // // // //             onClick={() => router.push(`/complaints/${complaint.id}`)}
// // // // //             className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
// // // // //           >
// // // // //             Open Full Report <ArrowRight size={16} />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // // Helpers
// // // // // function getStatusColor(status: string) {
// // // // //   switch (status?.toUpperCase()) {
// // // // //     case "RESOLVED": return "text-green-400";
// // // // //     case "REJECTED": return "text-red-400";
// // // // //     case "IN_PROGRESS": return "text-blue-400";
// // // // //     case "WORK_IN_PROGRESS": return "text-blue-400";
// // // // //     default: return "text-yellow-400";
// // // // //   }
// // // // // }

// // // // // function getStatusBg(status: string) {
// // // // //   switch (status?.toUpperCase()) {
// // // // //     case "RESOLVED": return "bg-green-500/20";
// // // // //     case "REJECTED": return "bg-red-500/20";
// // // // //     case "IN_PROGRESS": return "bg-blue-500/20";
// // // // //     case "WORK_IN_PROGRESS": return "bg-blue-500/20";
// // // // //     default: return "bg-yellow-500/20";
// // // // //   }
// // // // // }

// // // // "use client";

// // // // import { useEffect, useState, useMemo } from "react";
// // // // import Image from "next/image";
// // // // import { useRouter } from "next/navigation";
// // // // import {
// // // //   X, MapPin, Activity, ArrowRight, ChevronLeft, ChevronRight,
// // // //   Image as ImageIcon, Loader2, Clock, CheckCircle2, User, // 👈 Added User icon
// // // //   Hammer, AlertTriangle, FileText
// // // // } from "lucide-react";
// // // // import { API_BASE, apiGet } from "@/lib/api";

// // // // export default function ComplaintDetailDialog({
// // // //   complaint,
// // // //   onClose,
// // // // }: {
// // // //   complaint: any;
// // // //   onClose: () => void;
// // // // }) {
// // // //   const router = useRouter();
// // // //   const [mounted, setMounted] = useState(false);

// // // //   // Image States
// // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// // // //   const [isLoadingImage, setIsLoadingImage] = useState(true);

// // // //   // Timeline States
// // // //   const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
// // // //   const [timelineEvents, setTimelineEvents] = useState<any[]>([]);
// // // //   const [isLoadingTimeline, setIsLoadingTimeline] = useState(false);

// // // //   useEffect(() => {
// // // //     setMounted(true);
// // // //   }, []);

// // // //   // Reset states when opening a new complaint
// // // //   useEffect(() => {
// // // //     setCurrentImageIndex(0);
// // // //     setIsLoadingImage(true);
// // // //     setIsTimelineExpanded(false);
// // // //     setTimelineEvents([]);
// // // //   }, [complaint?.id]);

// // // //   // --- SMART IMAGE EXTRACTION ---
// // // //   const images = useMemo(() => {
// // // //     if (!complaint) return [];
// // // //     const list: string[] = [];

// // // //     if (complaint.media && Array.isArray(complaint.media)) {
// // // //       complaint.media.forEach((m: any) => { if (m.url) list.push(m.url); });
// // // //     }

// // // //     if (list.length === 0) {
// // // //       if (complaint.images && Array.isArray(complaint.images)) {
// // // //         complaint.images.forEach((img: any) => {
// // // //           if (img?.url) list.push(img.url);
// // // //           else if (typeof img === 'string') list.push(img);
// // // //         });
// // // //       } else if (complaint.imageUrl) {
// // // //         list.push(complaint.imageUrl);
// // // //       }
// // // //     }
// // // //     return list.map(url => url.startsWith("http") ? url : `${API_BASE}${url}`);
// // // //   }, [complaint]);

// // // //   if (!complaint) return null;

// // // //   const hasImages = images.length > 0;
// // // //   const activeImage = hasImages ? images[currentImageIndex] : null;

// // // //   // --- HANDLERS ---

// // // //   const handleTimelineToggle = async () => {
// // // //     if (isTimelineExpanded) {
// // // //       setIsTimelineExpanded(false);
// // // //       return;
// // // //     }

// // // //     setIsTimelineExpanded(true);

// // // //     // Lazy Fetch Events
// // // //     if (timelineEvents.length === 0) {
// // // //       setIsLoadingTimeline(true);
// // // //       try {
// // // //         const fullDetails = await apiGet<any>(`/complaints/${complaint.id}`);
// // // //         if (fullDetails && fullDetails.events) {
// // // //           setTimelineEvents(fullDetails.events);
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("Failed to load timeline", err);
// // // //       } finally {
// // // //         setIsLoadingTimeline(false);
// // // //       }
// // // //     }
// // // //   };

// // // //   const nextImage = (e: any) => {
// // // //     e.stopPropagation();
// // // //     setCurrentImageIndex((prev) => (prev + 1) % images.length);
// // // //     setIsLoadingImage(true);
// // // //   };

// // // //   const prevImage = (e: any) => {
// // // //     e.stopPropagation();
// // // //     setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// // // //     setIsLoadingImage(true);
// // // //   };

// // // //   return (
// // // //     <div className={`
// // // //       fixed inset-y-4 right-4 z-[2000]
// // // //       w-[400px] flex flex-col pointer-events-none
// // // //       transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)
// // // //       ${mounted ? "translate-x-0" : "translate-x-[120%]"}
// // // //     `}>

// // // //       <div className="
// // // //         h-full w-full pointer-events-auto
// // // //         bg-zinc-950/95 backdrop-blur-2xl
// // // //         border border-white/10
// // // //         rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]
// // // //         flex flex-col overflow-hidden
// // // //       ">

// // // //         {/* 1. CAROUSEL HEADER */}
// // // //         <div className="relative h-56 shrink-0 bg-zinc-900 group overflow-hidden border-b border-white/5">
// // // //           {hasImages ? (
// // // //             <>
// // // //               {isLoadingImage && (
// // // //                 <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
// // // //                   <Loader2 className="animate-spin text-blue-500" size={32} />
// // // //                 </div>
// // // //               )}
// // // //               <div className="relative w-full h-full">
// // // //                 <Image
// // // //                   key={activeImage}
// // // //                   src={activeImage!}
// // // //                   alt="Evidence"
// // // //                   fill
// // // //                   unoptimized={true}
// // // //                   className={`object-cover transition-opacity duration-500 ${isLoadingImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
// // // //                   sizes="(max-width: 400px) 100vw, 400px"
// // // //                   priority
// // // //                   onLoad={() => setIsLoadingImage(false)}
// // // //                 />
// // // //               </div>
// // // //               {images.length > 1 && (
// // // //                 <>
// // // //                   <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100">
// // // //                     <ChevronLeft size={20} />
// // // //                   </button>
// // // //                   <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100">
// // // //                     <ChevronRight size={20} />
// // // //                   </button>
// // // //                   <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
// // // //                     {images.map((_, idx) => (
// // // //                       <button
// // // //                         key={idx}
// // // //                         onClick={(e) => { e.stopPropagation(); if (idx !== currentImageIndex) { setCurrentImageIndex(idx); setIsLoadingImage(true); } }}
// // // //                         className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
// // // //                       />
// // // //                     ))}
// // // //                   </div>
// // // //                 </>
// // // //               )}
// // // //             </>
// // // //           ) : (
// // // //             <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-600">
// // // //               <ImageIcon size={48} className="mb-2 opacity-20" />
// // // //               <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">No Image Evidence</span>
// // // //             </div>
// // // //           )}
// // // //           <button onClick={onClose} className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-black/60 transition">
// // // //             <X size={18} />
// // // //           </button>
// // // //         </div>

// // // //         {/* 2. SCROLLABLE CONTENT */}
// // // //         <div className="flex-1 overflow-y-auto custom-scrollbar">

// // // //           {/* Title */}
// // // //           <div className="px-6 pt-6 pb-2">
// // // //             <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
// // // //               {complaint.category || "Issue"}
// // // //             </span>
// // // //             <h2 className="text-xl font-bold text-white leading-snug">
// // // //               {complaint.title}
// // // //             </h2>
// // // //           </div>

// // // //           <div className="p-6 pt-2 space-y-6">

// // // //             {/* --- TIMELINE TOGGLE ROW --- */}
// // // //             <div
// // // //               onClick={handleTimelineToggle}
// // // //               className={`
// // // //                  relative overflow-hidden flex flex-col
// // // //                  rounded-2xl border transition-all duration-500 cursor-pointer group
// // // //                  ${isTimelineExpanded
// // // //                   ? 'bg-zinc-900 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]'
// // // //                   : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'}
// // // //                `}
// // // //             >
// // // //               {/* Top Bar */}
// // // //               <div className="flex items-center justify-between p-4 z-10">
// // // //                 <div className="flex items-center gap-3">
// // // //                   <div className={`p-2.5 rounded-xl transition-colors duration-500 ${getStatusBg(complaint.currentStatus)}`}>
// // // //                     {isTimelineExpanded ? (
// // // //                       <Clock size={18} className="text-blue-400 animate-spin-slow" />
// // // //                     ) : (
// // // //                       <Activity size={18} className={getStatusColor(complaint.currentStatus)} />
// // // //                     )}
// // // //                   </div>
// // // //                   <div>
// // // //                     <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold group-hover:text-blue-400 transition-colors">
// // // //                       {isTimelineExpanded ? "SLA Timeline" : "Current Status"}
// // // //                     </div>
// // // //                     <div className={`text-sm font-bold ${getStatusColor(complaint.currentStatus)}`}>
// // // //                       {complaint.currentStatus?.replace(/_/g, " ") || "PENDING"}
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Indicator */}
// // // //                 <div className="text-right">
// // // //                   {isTimelineExpanded ? (
// // // //                     <div className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full font-bold uppercase">
// // // //                       History
// // // //                     </div>
// // // //                   ) : (
// // // //                     <div className="flex flex-col items-end">
// // // //                       <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Reported</div>
// // // //                       <div className="text-sm text-zinc-200 font-medium">
// // // //                         {new Date(complaint.createdAt || Date.now()).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
// // // //                       </div>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>

// // // //               {/* --- EXPANDED TIMELINE --- */}
// // // //               <div className={`
// // // //                  transition-all duration-500 ease-in-out overflow-hidden bg-black/40
// // // //                  ${isTimelineExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
// // // //               `}>
// // // //                 <div className="p-4 pt-2 pl-6 border-t border-white/5">

// // // //                   {isLoadingTimeline ? (
// // // //                     <div className="flex items-center gap-2 text-xs text-zinc-500 py-6 justify-center">
// // // //                       <Loader2 size={14} className="animate-spin" /> Fetching SLA logs...
// // // //                     </div>
// // // //                   ) : (
// // // //                     <div className="relative space-y-0 pb-2">
// // // //                       {/* Connector Line */}
// // // //                       <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-zinc-800" />

// // // //                       {timelineEvents.length === 0 ? (
// // // //                         <div className="pl-10 text-xs text-zinc-500 py-2">No history recorded yet.</div>
// // // //                       ) : (
// // // //                         timelineEvents.map((event: any, idx) => {
// // // //                           // Determine Icon & Color based on Event Type
// // // //                           const isLast = idx === timelineEvents.length - 1;
// // // //                           let Icon = Activity;
// // // //                           let colorClass = "text-zinc-400 bg-zinc-800 border-zinc-700";

// // // //                           switch (event.type) {
// // // //                             case 'CREATED':
// // // //                               Icon = FileText;
// // // //                               colorClass = "text-blue-400 bg-blue-900/20 border-blue-500/50";
// // // //                               break;
// // // //                             case 'ACKNOWLEDGED':
// // // //                             case 'ASSIGNED':
// // // //                               Icon = User;
// // // //                               colorClass = "text-purple-400 bg-purple-900/20 border-purple-500/50";
// // // //                               break;
// // // //                             case 'WORK_IN_PROGRESS':
// // // //                               Icon = Hammer;
// // // //                               colorClass = "text-orange-400 bg-orange-900/20 border-orange-500/50";
// // // //                               break;
// // // //                             case 'RESOLVED':
// // // //                               Icon = CheckCircle2;
// // // //                               colorClass = "text-green-400 bg-green-900/20 border-green-500/50";
// // // //                               break;
// // // //                             case 'REJECTED':
// // // //                               Icon = AlertTriangle;
// // // //                               colorClass = "text-red-400 bg-red-900/20 border-red-500/50";
// // // //                               break;
// // // //                           }

// // // //                           return (
// // // //                             <div key={idx} className="relative pl-10 py-3 group">
// // // //                               {/* Timeline Dot/Icon */}
// // // //                               <div className={`
// // // //                                       absolute left-0 top-3 w-8 h-8 rounded-full border flex items-center justify-center z-10
// // // //                                       ${colorClass} ${isLast ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-110' : ''}
// // // //                                    `}>
// // // //                                 <Icon size={14} />
// // // //                               </div>

// // // //                               {/* Content */}
// // // //                               <div className="flex flex-col">
// // // //                                 <div className="flex justify-between items-center">
// // // //                                   <span className={`text-xs font-bold ${isLast ? 'text-white' : 'text-zinc-400'}`}>
// // // //                                     {event.type.replace(/_/g, " ")}
// // // //                                   </span>
// // // //                                   <span className="text-[10px] text-zinc-500 font-mono">
// // // //                                     {new Date(event.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
// // // //                                   </span>
// // // //                                 </div>

// // // //                                 <div className="text-[10px] text-zinc-500">
// // // //                                   {new Date(event.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
// // // //                                 </div>

// // // //                                 {/* Event Details (Note or Officer) */}
// // // //                                 {event.data && (
// // // //                                   <div className="mt-1.5">
// // // //                                     {event.data.note && (
// // // //                                       <p className="text-[11px] text-zinc-300 bg-white/5 p-1.5 rounded border border-white/5 inline-block max-w-full">
// // // //                                         "{event.data.note}"
// // // //                                       </p>
// // // //                                     )}
// // // //                                   </div>
// // // //                                 )}
// // // //                               </div>
// // // //                             </div>
// // // //                           );
// // // //                         })
// // // //                       )}
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Description */}
// // // //             <div className="space-y-2">
// // // //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Description</h3>
// // // //               <p className="text-sm text-zinc-300 leading-relaxed">
// // // //                 {complaint.description || "No description provided by the citizen."}
// // // //               </p>
// // // //             </div>

// // // //             {/* ✅ NEW: Assigned Officer */}
// // // //             {/* <div className="space-y-2">
// // // //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Assigned Officer</h3>
// // // //               <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5">
// // // //                 <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${complaint.assignedOfficer ? 'bg-purple-900/20 border-purple-500/30 text-purple-400' : 'bg-zinc-800 border-zinc-700 text-zinc-500'}`}>
// // // //                   <User size={14} />
// // // //                 </div>
// // // //                 <div className="flex flex-col">
// // // //                   <span className="text-sm font-medium text-zinc-200">
// // // //                     {complaint.assignedOfficer?.name || "Pending Assignment"}
// // // //                   </span>
// // // //                   {complaint.assignedOfficer && (
// // // //                     <span className="text-[10px] text-zinc-500">
// // // //                       {complaint.assignedOfficer.email}
// // // //                     </span>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </div> */}

// // // //             <div className="space-y-2">
// // // //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Assigned Officer</h3>

// // // //               <div
// // // //                 // ✅ NEW: Add onClick navigation
// // // //                 onClick={() => complaint.assignedOfficer && router.push(`/profile/${complaint.assignedOfficer.id}`)}
// // // //                 className={`
// // // //                   flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5 
// // // //                   ${complaint.assignedOfficer ? "cursor-pointer hover:bg-zinc-800 hover:border-zinc-700 transition" : "opacity-70"}
// // // //                 `}
// // // //               >
// // // //                 <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${complaint.assignedOfficer ? 'bg-purple-900/20 border-purple-500/30 text-purple-400' : 'bg-zinc-800 border-zinc-700 text-zinc-500'}`}>
// // // //                   <User size={14} />
// // // //                 </div>
// // // //                 <div className="flex flex-col">
// // // //                   <span className="text-sm font-medium text-zinc-200">
// // // //                     {complaint.assignedOfficer?.name || "Pending Assignment"}
// // // //                   </span>
// // // //                   {complaint.assignedOfficer && (
// // // //                     <span className="text-[10px] text-zinc-500 flex items-center gap-1">
// // // //                       {complaint.assignedOfficer.email} <ArrowRight size={10} className="opacity-50" />
// // // //                     </span>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Location Info */}
// // // //             <div className="space-y-2">
// // // //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Location</h3>
// // // //               <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5">
// // // //                 <MapPin size={16} className="mt-0.5 shrink-0 text-blue-500" />
// // // //                 <div className="text-sm text-zinc-300">
// // // //                   {complaint.locationText || (
// // // //                     <span className="font-mono text-xs text-zinc-500">
// // // //                       {complaint.lat.toFixed(6)}, {complaint.lng.toFixed(6)}
// // // //                     </span>
// // // //                   )}
// // // //                   {complaint.ward && (
// // // //                     <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">
// // // //                       {complaint.ward.name}
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //           </div>
// // // //         </div>

// // // //         {/* 3. FIXED FOOTER ACTION */}
// // // //         <div className="p-6 pt-0 mt-auto bg-zinc-950">
// // // //           <button
// // // //             onClick={() => router.push(`/complaints/${complaint.id}`)}
// // // //             className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
// // // //           >
// // // //             Open Full Report <ArrowRight size={16} />
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // Helpers
// // // // function getStatusColor(status: string) {
// // // //   switch (status?.toUpperCase()) {
// // // //     case "RESOLVED": return "text-green-400";
// // // //     case "REJECTED": return "text-red-400";
// // // //     case "IN_PROGRESS": return "text-blue-400";
// // // //     case "WORK_IN_PROGRESS": return "text-blue-400";
// // // //     default: return "text-yellow-400";
// // // //   }
// // // // }

// // // // function getStatusBg(status: string) {
// // // //   switch (status?.toUpperCase()) {
// // // //     case "RESOLVED": return "bg-green-500/20";
// // // //     case "REJECTED": return "bg-red-500/20";
// // // //     case "IN_PROGRESS": return "bg-blue-500/20";
// // // //     case "WORK_IN_PROGRESS": return "bg-blue-500/20";
// // // //     default: return "bg-yellow-500/20";
// // // //   }
// // // // }


// // // "use client";

// // // import { useEffect, useState, useMemo } from "react";
// // // import Image from "next/image";
// // // import { useRouter } from "next/navigation";
// // // import {
// // //   X, MapPin, Activity, ArrowRight, ChevronLeft, ChevronRight,
// // //   Image as ImageIcon, Loader2, Clock, CheckCircle2, User,
// // //   Hammer, AlertTriangle, FileText, ThumbsUp, XCircle // 👈 Added ThumbsUp icon
// // // } from "lucide-react";
// // // import { API_BASE, apiGet } from "@/lib/api";

// // // export default function ComplaintDetailDialog({
// // //   complaint,
// // //   onClose,
// // // }: {
// // //   complaint: any;
// // //   onClose: () => void;
// // // }) {
// // //   const router = useRouter();
// // //   const [mounted, setMounted] = useState(false);

// // //   // Image States
// // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// // //   const [isLoadingImage, setIsLoadingImage] = useState(true);

// // //   // Timeline States
// // //   const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
// // //   const [timelineEvents, setTimelineEvents] = useState<any[]>([]);
// // //   const [isLoadingTimeline, setIsLoadingTimeline] = useState(false);

// // //   useEffect(() => {
// // //     setMounted(true);
// // //   }, []);

// // //   // Reset states when opening a new complaint
// // //   useEffect(() => {
// // //     setCurrentImageIndex(0);
// // //     setIsLoadingImage(true);
// // //     setIsTimelineExpanded(false);
// // //     setTimelineEvents([]);
// // //   }, [complaint?.id]);

// // //   // --- SMART IMAGE EXTRACTION ---
// // //   const images = useMemo(() => {
// // //     if (!complaint) return [];
// // //     const list: string[] = [];

// // //     if (complaint.media && Array.isArray(complaint.media)) {
// // //       complaint.media.forEach((m: any) => { if (m.url) list.push(m.url); });
// // //     }

// // //     if (list.length === 0) {
// // //       if (complaint.images && Array.isArray(complaint.images)) {
// // //         complaint.images.forEach((img: any) => {
// // //           if (img?.url) list.push(img.url);
// // //           else if (typeof img === 'string') list.push(img);
// // //         });
// // //       } else if (complaint.imageUrl) {
// // //         list.push(complaint.imageUrl);
// // //       }
// // //     }
// // //     return list.map(url => url.startsWith("http") ? url : `${API_BASE}${url}`);
// // //   }, [complaint]);

// // //   if (!complaint) return null;

// // //   const hasImages = images.length > 0;
// // //   const activeImage = hasImages ? images[currentImageIndex] : null;

// // //   // --- HANDLERS ---
// // //   const handleTimelineToggle = async () => {
// // //     if (isTimelineExpanded) {
// // //       setIsTimelineExpanded(false);
// // //       return;
// // //     }

// // //     setIsTimelineExpanded(true);

// // //     // Lazy Fetch Events
// // //     if (timelineEvents.length === 0) {
// // //       setIsLoadingTimeline(true);
// // //       try {
// // //         const fullDetails = await apiGet<any>(`/complaints/${complaint.id}`);
// // //         // Filter out the 'UPVOTED' spam from the timeline visualization
// // //         if (fullDetails && fullDetails.events) {
// // //           const cleanEvents = fullDetails.events.filter((e: any) => e.type !== 'UPVOTED');
// // //           setTimelineEvents(cleanEvents);
// // //         }
// // //       } catch (err) {
// // //         console.error("Failed to load timeline", err);
// // //       } finally {
// // //         setIsLoadingTimeline(false);
// // //       }
// // //     }
// // //   };

// // //   const nextImage = (e: any) => {
// // //     e.stopPropagation();
// // //     setCurrentImageIndex((prev) => (prev + 1) % images.length);
// // //     setIsLoadingImage(true);
// // //   };

// // //   const prevImage = (e: any) => {
// // //     e.stopPropagation();
// // //     setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// // //     setIsLoadingImage(true);
// // //   };

// // //   return (
// // //     <div className={`
// // //       fixed inset-y-4 right-4 z-[2000]
// // //       w-[400px] flex flex-col pointer-events-none
// // //       transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)
// // //       ${mounted ? "translate-x-0" : "translate-x-[120%]"}
// // //     `}>

// // //       <div className="
// // //         h-full w-full pointer-events-auto
// // //         bg-zinc-950/95 backdrop-blur-2xl
// // //         border border-white/10
// // //         rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]
// // //         flex flex-col overflow-hidden
// // //       ">

// // //         {/* 1. CAROUSEL HEADER */}
// // //         <div className="relative h-56 shrink-0 bg-zinc-900 group overflow-hidden border-b border-white/5">
// // //           {hasImages ? (
// // //             <>
// // //               {isLoadingImage && (
// // //                 <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
// // //                   <Loader2 className="animate-spin text-blue-500" size={32} />
// // //                 </div>
// // //               )}
// // //               <div className="relative w-full h-full">
// // //                 <Image
// // //                   key={activeImage}
// // //                   src={activeImage!}
// // //                   alt="Evidence"
// // //                   fill
// // //                   unoptimized={true}
// // //                   className={`object-cover transition-opacity duration-500 ${isLoadingImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
// // //                   sizes="(max-width: 400px) 100vw, 400px"
// // //                   priority
// // //                   onLoad={() => setIsLoadingImage(false)}
// // //                 />
// // //               </div>
// // //               {images.length > 1 && (
// // //                 <>
// // //                   <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100">
// // //                     <ChevronLeft size={20} />
// // //                   </button>
// // //                   <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100">
// // //                     <ChevronRight size={20} />
// // //                   </button>
// // //                   <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
// // //                     {images.map((_, idx) => (
// // //                       <button
// // //                         key={idx}
// // //                         onClick={(e) => { e.stopPropagation(); if (idx !== currentImageIndex) { setCurrentImageIndex(idx); setIsLoadingImage(true); } }}
// // //                         className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
// // //                       />
// // //                     ))}
// // //                   </div>
// // //                 </>
// // //               )}
// // //             </>
// // //           ) : (
// // //             <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-600">
// // //               <ImageIcon size={48} className="mb-2 opacity-20" />
// // //               <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">No Image Evidence</span>
// // //             </div>
// // //           )}
// // //           <button onClick={onClose} className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-black/60 transition">
// // //             <X size={18} />
// // //           </button>
// // //         </div>

// // //         {/* 2. SCROLLABLE CONTENT */}
// // //         <div className="flex-1 overflow-y-auto custom-scrollbar">

// // //           {/* Title */}
// // //           <div className="px-6 pt-6 pb-2">
// // //             <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
// // //               {complaint.category || "Issue"}
// // //             </span>
// // //             <h2 className="text-xl font-bold text-white leading-snug">
// // //               {complaint.title}
// // //             </h2>
// // //           </div>

// // //           <div className="p-6 pt-2 space-y-6">

// // //             {/* --- TIMELINE TOGGLE ROW --- */}
// // //             <div
// // //               onClick={handleTimelineToggle}
// // //               className={`
// // //                  relative overflow-hidden flex flex-col
// // //                  rounded-2xl border transition-all duration-500 cursor-pointer group
// // //                  ${isTimelineExpanded
// // //                   ? 'bg-zinc-900 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]'
// // //                   : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'}
// // //                `}
// // //             >
// // //               {/* Top Bar */}
// // //               <div className="flex items-center justify-between p-4 z-10">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className={`p-2.5 rounded-xl transition-colors duration-500 ${getStatusBg(complaint.currentStatus)}`}>
// // //                     {isTimelineExpanded ? (
// // //                       <Clock size={18} className="text-blue-400 animate-spin-slow" />
// // //                     ) : (
// // //                       <Activity size={18} className={getStatusColor(complaint.currentStatus)} />
// // //                     )}
// // //                   </div>
// // //                   <div>
// // //                     <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold group-hover:text-blue-400 transition-colors">
// // //                       {isTimelineExpanded ? "SLA Timeline" : "Current Status"}
// // //                     </div>
// // //                     <div className={`text-sm font-bold ${getStatusColor(complaint.currentStatus)}`}>
// // //                       {complaint.currentStatus?.replace(/_/g, " ") || "PENDING"}
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Indicator */}
// // //                 <div className="text-right">
// // //                   {isTimelineExpanded ? (
// // //                     <div className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full font-bold uppercase">
// // //                       History
// // //                     </div>
// // //                   ) : (
// // //                     <div className="flex flex-col items-end">
// // //                       <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Reported</div>
// // //                       <div className="text-sm text-zinc-200 font-medium">
// // //                         {new Date(complaint.createdAt || Date.now()).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>

// // //               {/* --- EXPANDED TIMELINE --- */}
// // //               <div className={`
// // //                  transition-all duration-500 ease-in-out overflow-hidden bg-black/40
// // //                  ${isTimelineExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
// // //               `}>
// // //                 <div className="p-4 pt-2 pl-6 border-t border-white/5">

// // //                   {isLoadingTimeline ? (
// // //                     <div className="flex items-center gap-2 text-xs text-zinc-500 py-6 justify-center">
// // //                       <Loader2 size={14} className="animate-spin" /> Fetching SLA logs...
// // //                     </div>
// // //                   ) : (
// // //                     <div className="relative space-y-0 pb-2">
// // //                       {/* Connector Line */}
// // //                       <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-zinc-800" />

// // //                       {timelineEvents.length === 0 ? (
// // //                         <div className="pl-10 text-xs text-zinc-500 py-2">No history recorded yet.</div>
// // //                       ) : (
// // //                         timelineEvents.map((event: any, idx) => {
// // //                           const isLast = idx === timelineEvents.length - 1;
// // //                           let Icon = Activity;
// // //                           let colorClass = "text-zinc-400 bg-zinc-800 border-zinc-700";

// // //                           switch (event.type) {
// // //                             case 'CREATED':
// // //                               Icon = FileText;
// // //                               colorClass = "text-blue-400 bg-blue-900/20 border-blue-500/50";
// // //                               break;
// // //                             case 'ACKNOWLEDGED':
// // //                             case 'ASSIGNED':
// // //                               Icon = User;
// // //                               colorClass = "text-purple-400 bg-purple-900/20 border-purple-500/50";
// // //                               break;
// // //                             case 'WORK_IN_PROGRESS':
// // //                               Icon = Hammer;
// // //                               colorClass = "text-orange-400 bg-orange-900/20 border-orange-500/50";
// // //                               break;
// // //                             case 'RESOLVED':
// // //                               Icon = CheckCircle2;
// // //                               colorClass = "text-green-400 bg-green-900/20 border-green-500/50";
// // //                               break;
// // //                             case 'REJECTED':
// // //                               Icon = AlertTriangle;
// // //                               colorClass = "text-red-400 bg-red-900/20 border-red-500/50";
// // //                               break;
// // //                           }

// // //                           return (
// // //                             <div key={idx} className="relative pl-10 py-3 group">
// // //                               <div className={`
// // //                                       absolute left-0 top-3 w-8 h-8 rounded-full border flex items-center justify-center z-10
// // //                                       ${colorClass} ${isLast ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-110' : ''}
// // //                                      `}>
// // //                                 <Icon size={14} />
// // //                               </div>

// // //                               <div className="flex flex-col">
// // //                                 <div className="flex justify-between items-center">
// // //                                   <span className={`text-xs font-bold ${isLast ? 'text-white' : 'text-zinc-400'}`}>
// // //                                     {event.type.replace(/_/g, " ")}
// // //                                   </span>
// // //                                   <span className="text-[10px] text-zinc-500 font-mono">
// // //                                     {new Date(event.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
// // //                                   </span>
// // //                                 </div>

// // //                                 <div className="text-[10px] text-zinc-500">
// // //                                   {new Date(event.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
// // //                                 </div>

// // //                                 {event.data && (
// // //                                   <div className="mt-1.5">
// // //                                     {event.data.note && (
// // //                                       <p className="text-[11px] text-zinc-300 bg-white/5 p-1.5 rounded border border-white/5 inline-block max-w-full">
// // //                                         "{event.data.note}"
// // //                                       </p>
// // //                                     )}
// // //                                   </div>
// // //                                 )}
// // //                               </div>
// // //                             </div>
// // //                           );
// // //                         })
// // //                       )}
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             {/* ✅ UPDATED: Community Impact & Validation Badges */}
// // //             {(complaint.signals?.length > 0 || complaint.validations?.length > 0) && (
// // //               <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">

// // //                 {/* 1. UPVOTES (Show if NOT resolved) */}
// // //                 {complaint.currentStatus !== 'RESOLVED' && complaint.signals && (() => {
// // //                   const upvotesCount = complaint.signals.filter((s: any) => s.type === 'UPVOTE').length;
// // //                   const stillPresentCount = complaint.signals.filter((s: any) => s.type === 'STILL_PRESENT').length;

// // //                   return (
// // //                     <>
// // //                       {upvotesCount > 0 && (
// // //                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 text-[11px] font-bold shadow-sm">
// // //                           <ThumbsUp size={12} className="text-blue-400" />
// // //                           {upvotesCount} {upvotesCount === 1 ? 'Person' : 'People'} affected
// // //                         </div>
// // //                       )}
// // //                       {stillPresentCount > 0 && (
// // //                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 text-[11px] font-bold shadow-sm">
// // //                           <AlertTriangle size={12} className="text-orange-400" />
// // //                           {stillPresentCount} Still Present
// // //                         </div>
// // //                       )}
// // //                     </>
// // //                   );
// // //                 })()}

// // //                 {/* 2. VALIDATIONS (Show if RESOLVED) */}
// // //                 {complaint.currentStatus === 'RESOLVED' && complaint.validations && (() => {
// // //                   const confirmedCount = complaint.validations.filter((v: any) => v.vote === 'CONFIRMED').length;
// // //                   const disputedCount = complaint.validations.filter((v: any) => v.vote === 'NOT_FIXED').length;

// // //                   return (
// // //                     <>
// // //                       {confirmedCount > 0 && (
// // //                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-900/20 border border-green-800/50 text-green-400 text-[11px] font-bold shadow-sm">
// // //                           <CheckCircle2 size={12} />
// // //                           {confirmedCount} Confirmed
// // //                         </div>
// // //                       )}
// // //                       {disputedCount > 0 && (
// // //                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-900/20 border border-red-800/50 text-red-400 text-[11px] font-bold shadow-sm">
// // //                           <XCircle size={12} />
// // //                           {disputedCount} Disputed
// // //                         </div>
// // //                       )}
// // //                     </>
// // //                   );
// // //                 })()}

// // //               </div>
// // //             )}

// // //             {/* Description */}
// // //             <div className="space-y-2">
// // //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Description</h3>
// // //               <p className="text-sm text-zinc-300 leading-relaxed">
// // //                 {complaint.description || "No description provided by the citizen."}
// // //               </p>
// // //             </div>

// // //             <div className="space-y-2">
// // //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Assigned Officer</h3>

// // //               <div
// // //                 onClick={() => complaint.assignedOfficer && router.push(`/profile/${complaint.assignedOfficer.id}`)}
// // //                 className={`
// // //                   flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5 
// // //                   ${complaint.assignedOfficer ? "cursor-pointer hover:bg-zinc-800 hover:border-zinc-700 transition" : "opacity-70"}
// // //                 `}
// // //               >
// // //                 <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${complaint.assignedOfficer ? 'bg-purple-900/20 border-purple-500/30 text-purple-400' : 'bg-zinc-800 border-zinc-700 text-zinc-500'}`}>
// // //                   <User size={14} />
// // //                 </div>
// // //                 <div className="flex flex-col">
// // //                   <span className="text-sm font-medium text-zinc-200">
// // //                     {complaint.assignedOfficer?.name || "Pending Assignment"}
// // //                   </span>
// // //                   {complaint.assignedOfficer && (
// // //                     <span className="text-[10px] text-zinc-500 flex items-center gap-1">
// // //                       {complaint.assignedOfficer.email} <ArrowRight size={10} className="opacity-50" />
// // //                     </span>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Location Info */}
// // //             <div className="space-y-2">
// // //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Location</h3>
// // //               <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5">
// // //                 <MapPin size={16} className="mt-0.5 shrink-0 text-blue-500" />
// // //                 <div className="text-sm text-zinc-300 w-full">
                  
// // //                   {/* Location Text */}
// // //                   <div className="font-medium text-zinc-200">
// // //                     {complaint.locationText || "Pinned Location"}
// // //                   </div>
                  
// // //                   {/* ✅ ALWAYS show GPS Coordinates */}
// // //                   {complaint.lat && complaint.lng && (
// // //                     <div className="font-mono text-[11px] text-zinc-500 mt-1 bg-black/20 inline-block px-1.5 py-0.5 rounded border border-white/5">
// // //                       {complaint.lat.toFixed(6)}, {complaint.lng.toFixed(6)}
// // //                     </div>
// // //                   )}

// // //                   {/* Ward Badge */}
// // //                   {complaint.ward && (
// // //                     <div className="mt-2 block">
// // //                       <span className="inline-flex items-center px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">
// // //                         {complaint.ward.name}
// // //                       </span>
// // //                     </div>
// // //                   )}
                  
// // //                 </div>
// // //               </div>
// // //             </div>

// // //           </div>
// // //         </div>

// // //         {/* 3. FIXED FOOTER ACTION */}
// // //         <div className="p-6 pt-0 mt-auto bg-zinc-950">
// // //           <button
// // //             onClick={() => router.push(`/complaints/${complaint.id}`)}
// // //             className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
// // //           >
// // //             Open Full Report <ArrowRight size={16} />
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // Helpers
// // // function getStatusColor(status: string) {
// // //   switch (status?.toUpperCase()) {
// // //     case "RESOLVED": return "text-green-400";
// // //     case "REJECTED": return "text-red-400";
// // //     case "IN_PROGRESS": return "text-blue-400";
// // //     case "WORK_IN_PROGRESS": return "text-blue-400";
// // //     default: return "text-yellow-400";
// // //   }
// // // }

// // // function getStatusBg(status: string) {
// // //   switch (status?.toUpperCase()) {
// // //     case "RESOLVED": return "bg-green-500/20";
// // //     case "REJECTED": return "bg-red-500/20";
// // //     case "IN_PROGRESS": return "bg-blue-500/20";
// // //     case "WORK_IN_PROGRESS": return "bg-blue-500/20";
// // //     default: return "bg-yellow-500/20";
// // //   }
// // // }


// // "use client";

// // import { useEffect, useState, useMemo } from "react";
// // import Image from "next/image";
// // import { useRouter } from "next/navigation";
// // import {
// //   X, MapPin, Activity, ArrowRight, ChevronLeft, ChevronRight,
// //   Image as ImageIcon, Loader2, Clock, CheckCircle2, User,
// //   Hammer, AlertTriangle, FileText, ThumbsUp, XCircle
// // } from "lucide-react";
// // import { API_BASE, apiGet } from "@/lib/api";

// // export default function ComplaintDetailDialog({
// //   complaint,
// //   onClose,
// // }: {
// //   complaint: any;
// //   onClose: () => void;
// // }) {
// //   const router = useRouter();
// //   const [mounted, setMounted] = useState(false);
// //   const [isMobile, setIsMobile] = useState(false);

// //   // Image States
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// //   const [isLoadingImage, setIsLoadingImage] = useState(true);

// //   // Timeline States
// //   const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
// //   const [timelineEvents, setTimelineEvents] = useState<any[]>([]);
// //   const [isLoadingTimeline, setIsLoadingTimeline] = useState(false);

// //   useEffect(() => {
// //     setMounted(true);
    
// //     // Check window size on mount and resize
// //     const checkMobile = () => {
// //       setIsMobile(window.innerWidth < 768);
// //     };
// //     checkMobile(); 
    
// //     window.addEventListener('resize', checkMobile);
// //     return () => window.removeEventListener('resize', checkMobile);
// //   }, []);

// //   // Reset states when opening a new complaint
// //   useEffect(() => {
// //     setCurrentImageIndex(0);
// //     setIsLoadingImage(true);
// //     setIsTimelineExpanded(false);
// //     setTimelineEvents([]);
// //   }, [complaint?.id]);

// //   // --- SMART IMAGE EXTRACTION ---
// //   const images = useMemo(() => {
// //     if (!complaint) return [];
// //     const list: string[] = [];

// //     if (complaint.media && Array.isArray(complaint.media)) {
// //       complaint.media.forEach((m: any) => { if (m.url) list.push(m.url); });
// //     }

// //     if (list.length === 0) {
// //       if (complaint.images && Array.isArray(complaint.images)) {
// //         complaint.images.forEach((img: any) => {
// //           if (img?.url) list.push(img.url);
// //           else if (typeof img === 'string') list.push(img);
// //         });
// //       } else if (complaint.imageUrl) {
// //         list.push(complaint.imageUrl);
// //       }
// //     }
// //     return list.map(url => url.startsWith("http") ? url : `${API_BASE}${url}`);
// //   }, [complaint]);

// //   // ✅ Removed isMobile from here, so it renders the content!
// //   if (!complaint) return null;

// //   const hasImages = images.length > 0;
// //   const activeImage = hasImages ? images[currentImageIndex] : null;

// //   // --- HANDLERS ---
// //   const handleTimelineToggle = async () => {
// //     if (isTimelineExpanded) {
// //       setIsTimelineExpanded(false);
// //       return;
// //     }

// //     setIsTimelineExpanded(true);

// //     if (timelineEvents.length === 0) {
// //       setIsLoadingTimeline(true);
// //       try {
// //         const fullDetails = await apiGet<any>(`/complaints/${complaint.id}`);
// //         if (fullDetails && fullDetails.events) {
// //           const cleanEvents = fullDetails.events.filter((e: any) => e.type !== 'UPVOTED');
// //           setTimelineEvents(cleanEvents);
// //         }
// //       } catch (err) {
// //         console.error("Failed to load timeline", err);
// //       } finally {
// //         setIsLoadingTimeline(false);
// //       }
// //     }
// //   };

// //   const nextImage = (e: any) => {
// //     e.stopPropagation();
// //     setCurrentImageIndex((prev) => (prev + 1) % images.length);
// //     setIsLoadingImage(true);
// //   };

// //   const prevImage = (e: any) => {
// //     e.stopPropagation();
// //     setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// //     setIsLoadingImage(true);
// //   };

// //   return (
// //     // ✅ RESPONSIVE OUTER WRAPPER: Transforms between mobile bottom-sheet and desktop side-panel
// //     <div className={
// //       isMobile 
// //         ? `fixed inset-x-0 bottom-0 z-[2000] w-full h-[85vh] flex flex-col pointer-events-none transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${mounted ? "translate-y-0" : "translate-y-[100%]"}`
// //         : `fixed inset-y-4 right-4 z-[2000] w-[400px] flex flex-col pointer-events-none transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${mounted ? "translate-x-0" : "translate-x-[120%]"}`
// //     }>

// //       {/* ✅ RESPONSIVE INNER WRAPPER */}
// //       <div className={
// //         isMobile
// //           ? "h-full w-full pointer-events-auto bg-zinc-950 border-t border-white/10 rounded-t-3xl shadow-[0_-10px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
// //           : "h-full w-full pointer-events-auto bg-zinc-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
// //       }>

// //         {/* 1. CAROUSEL HEADER */}
// //         <div className="relative h-56 shrink-0 bg-zinc-900 group overflow-hidden border-b border-white/5">
// //           {hasImages ? (
// //             <>
// //               {isLoadingImage && (
// //                 <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
// //                   <Loader2 className="animate-spin text-blue-500" size={32} />
// //                 </div>
// //               )}
// //               <div className="relative w-full h-full">
// //                 <Image
// //                   key={activeImage}
// //                   src={activeImage!}
// //                   alt="Evidence"
// //                   fill
// //                   unoptimized={true}
// //                   className={`object-cover transition-opacity duration-500 ${isLoadingImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
// //                   sizes={isMobile ? "100vw" : "(max-width: 400px) 100vw, 400px"}
// //                   priority
// //                   onLoad={() => setIsLoadingImage(false)}
// //                 />
// //               </div>
// //               {images.length > 1 && (
// //                 <>
// //                   <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100">
// //                     <ChevronLeft size={20} />
// //                   </button>
// //                   <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100">
// //                     <ChevronRight size={20} />
// //                   </button>
// //                   <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
// //                     {images.map((_, idx) => (
// //                       <button
// //                         key={idx}
// //                         onClick={(e) => { e.stopPropagation(); if (idx !== currentImageIndex) { setCurrentImageIndex(idx); setIsLoadingImage(true); } }}
// //                         className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
// //                       />
// //                     ))}
// //                   </div>
// //                 </>
// //               )}
// //             </>
// //           ) : (
// //             <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-600">
// //               <ImageIcon size={48} className="mb-2 opacity-20" />
// //               <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">No Image Evidence</span>
// //             </div>
// //           )}
// //           <button onClick={onClose} className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-black/60 transition">
// //             <X size={18} />
// //           </button>
// //         </div>

// //         {/* 2. SCROLLABLE CONTENT */}
// //         <div className="flex-1 overflow-y-auto custom-scrollbar">

// //           {/* Title */}
// //           <div className="px-6 pt-6 pb-2">
// //             <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
// //               {complaint.category || "Issue"}
// //             </span>
// //             <h2 className="text-xl font-bold text-white leading-snug">
// //               {complaint.title}
// //             </h2>
// //           </div>

// //           <div className="p-6 pt-2 space-y-6">

// //             {/* --- TIMELINE TOGGLE ROW --- */}
// //             <div
// //               onClick={handleTimelineToggle}
// //               className={`
// //                  relative overflow-hidden flex flex-col
// //                  rounded-2xl border transition-all duration-500 cursor-pointer group
// //                  ${isTimelineExpanded
// //                   ? 'bg-zinc-900 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]'
// //                   : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'}
// //                `}
// //             >
// //               {/* Top Bar */}
// //               <div className="flex items-center justify-between p-4 z-10">
// //                 <div className="flex items-center gap-3">
// //                   <div className={`p-2.5 rounded-xl transition-colors duration-500 ${getStatusBg(complaint.currentStatus)}`}>
// //                     {isTimelineExpanded ? (
// //                       <Clock size={18} className="text-blue-400 animate-spin-slow" />
// //                     ) : (
// //                       <Activity size={18} className={getStatusColor(complaint.currentStatus)} />
// //                     )}
// //                   </div>
// //                   <div>
// //                     <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold group-hover:text-blue-400 transition-colors">
// //                       {isTimelineExpanded ? "SLA Timeline" : "Current Status"}
// //                     </div>
// //                     <div className={`text-sm font-bold ${getStatusColor(complaint.currentStatus)}`}>
// //                       {complaint.currentStatus?.replace(/_/g, " ") || "PENDING"}
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Indicator */}
// //                 <div className="text-right">
// //                   {isTimelineExpanded ? (
// //                     <div className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full font-bold uppercase">
// //                       History
// //                     </div>
// //                   ) : (
// //                     <div className="flex flex-col items-end">
// //                       <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Reported</div>
// //                       <div className="text-sm text-zinc-200 font-medium">
// //                         {new Date(complaint.createdAt || Date.now()).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>

// //               {/* --- EXPANDED TIMELINE --- */}
// //               <div className={`
// //                  transition-all duration-500 ease-in-out overflow-hidden bg-black/40
// //                  ${isTimelineExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
// //               `}>
// //                 <div className="p-4 pt-2 pl-6 border-t border-white/5">

// //                   {isLoadingTimeline ? (
// //                     <div className="flex items-center gap-2 text-xs text-zinc-500 py-6 justify-center">
// //                       <Loader2 size={14} className="animate-spin" /> Fetching SLA logs...
// //                     </div>
// //                   ) : (
// //                     <div className="relative space-y-0 pb-2">
// //                       {/* Connector Line */}
// //                       <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-zinc-800" />

// //                       {timelineEvents.length === 0 ? (
// //                         <div className="pl-10 text-xs text-zinc-500 py-2">No history recorded yet.</div>
// //                       ) : (
// //                         timelineEvents.map((event: any, idx) => {
// //                           const isLast = idx === timelineEvents.length - 1;
// //                           let Icon = Activity;
// //                           let colorClass = "text-zinc-400 bg-zinc-800 border-zinc-700";

// //                           switch (event.type) {
// //                             case 'CREATED':
// //                               Icon = FileText;
// //                               colorClass = "text-blue-400 bg-blue-900/20 border-blue-500/50";
// //                               break;
// //                             case 'ACKNOWLEDGED':
// //                             case 'ASSIGNED':
// //                               Icon = User;
// //                               colorClass = "text-purple-400 bg-purple-900/20 border-purple-500/50";
// //                               break;
// //                             case 'WORK_IN_PROGRESS':
// //                               Icon = Hammer;
// //                               colorClass = "text-orange-400 bg-orange-900/20 border-orange-500/50";
// //                               break;
// //                             case 'RESOLVED':
// //                               Icon = CheckCircle2;
// //                               colorClass = "text-green-400 bg-green-900/20 border-green-500/50";
// //                               break;
// //                             case 'REJECTED':
// //                               Icon = AlertTriangle;
// //                               colorClass = "text-red-400 bg-red-900/20 border-red-500/50";
// //                               break;
// //                           }

// //                           return (
// //                             <div key={idx} className="relative pl-10 py-3 group">
// //                               <div className={`
// //                                       absolute left-0 top-3 w-8 h-8 rounded-full border flex items-center justify-center z-10
// //                                       ${colorClass} ${isLast ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-110' : ''}
// //                                      `}>
// //                                 <Icon size={14} />
// //                               </div>

// //                               <div className="flex flex-col">
// //                                 <div className="flex justify-between items-center">
// //                                   <span className={`text-xs font-bold ${isLast ? 'text-white' : 'text-zinc-400'}`}>
// //                                     {event.type.replace(/_/g, " ")}
// //                                   </span>
// //                                   <span className="text-[10px] text-zinc-500 font-mono">
// //                                     {new Date(event.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
// //                                   </span>
// //                                 </div>

// //                                 <div className="text-[10px] text-zinc-500">
// //                                   {new Date(event.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
// //                                 </div>

// //                                 {event.data && (
// //                                   <div className="mt-1.5">
// //                                     {event.data.note && (
// //                                       <p className="text-[11px] text-zinc-300 bg-white/5 p-1.5 rounded border border-white/5 inline-block max-w-full">
// //                                         "{event.data.note}"
// //                                       </p>
// //                                     )}
// //                                   </div>
// //                                 )}
// //                               </div>
// //                             </div>
// //                           );
// //                         })
// //                       )}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Community Impact & Validation Badges */}
// //             {(complaint.signals?.length > 0 || complaint.validations?.length > 0) && (
// //               <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">

// //                 {/* 1. UPVOTES (Show if NOT resolved) */}
// //                 {complaint.currentStatus !== 'RESOLVED' && complaint.signals && (() => {
// //                   const upvotesCount = complaint.signals.filter((s: any) => s.type === 'UPVOTE').length;
// //                   const stillPresentCount = complaint.signals.filter((s: any) => s.type === 'STILL_PRESENT').length;

// //                   return (
// //                     <>
// //                       {upvotesCount > 0 && (
// //                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 text-[11px] font-bold shadow-sm">
// //                           <ThumbsUp size={12} className="text-blue-400" />
// //                           {upvotesCount} {upvotesCount === 1 ? 'Person' : 'People'} affected
// //                         </div>
// //                       )}
// //                       {stillPresentCount > 0 && (
// //                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 text-[11px] font-bold shadow-sm">
// //                           <AlertTriangle size={12} className="text-orange-400" />
// //                           {stillPresentCount} Still Present
// //                         </div>
// //                       )}
// //                     </>
// //                   );
// //                 })()}

// //                 {/* 2. VALIDATIONS (Show if RESOLVED) */}
// //                 {complaint.currentStatus === 'RESOLVED' && complaint.validations && (() => {
// //                   const confirmedCount = complaint.validations.filter((v: any) => v.vote === 'CONFIRMED').length;
// //                   const disputedCount = complaint.validations.filter((v: any) => v.vote === 'NOT_FIXED').length;

// //                   return (
// //                     <>
// //                       {confirmedCount > 0 && (
// //                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-900/20 border border-green-800/50 text-green-400 text-[11px] font-bold shadow-sm">
// //                           <CheckCircle2 size={12} />
// //                           {confirmedCount} Confirmed
// //                         </div>
// //                       )}
// //                       {disputedCount > 0 && (
// //                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-900/20 border border-red-800/50 text-red-400 text-[11px] font-bold shadow-sm">
// //                           <XCircle size={12} />
// //                           {disputedCount} Disputed
// //                         </div>
// //                       )}
// //                     </>
// //                   );
// //                 })()}

// //               </div>
// //             )}

// //             {/* Description */}
// //             <div className="space-y-2">
// //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Description</h3>
// //               <p className="text-sm text-zinc-300 leading-relaxed">
// //                 {complaint.description || "No description provided by the citizen."}
// //               </p>
// //             </div>

// //             <div className="space-y-2">
// //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Assigned Officer</h3>

// //               <div
// //                 onClick={() => complaint.assignedOfficer && router.push(`/profile/${complaint.assignedOfficer.id}`)}
// //                 className={`
// //                   flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5 
// //                   ${complaint.assignedOfficer ? "cursor-pointer hover:bg-zinc-800 hover:border-zinc-700 transition" : "opacity-70"}
// //                 `}
// //               >
// //                 <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${complaint.assignedOfficer ? 'bg-purple-900/20 border-purple-500/30 text-purple-400' : 'bg-zinc-800 border-zinc-700 text-zinc-500'}`}>
// //                   <User size={14} />
// //                 </div>
// //                 <div className="flex flex-col">
// //                   <span className="text-sm font-medium text-zinc-200">
// //                     {complaint.assignedOfficer?.name || "Pending Assignment"}
// //                   </span>
// //                   {complaint.assignedOfficer && (
// //                     <span className="text-[10px] text-zinc-500 flex items-center gap-1">
// //                       {complaint.assignedOfficer.email} <ArrowRight size={10} className="opacity-50" />
// //                     </span>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Location Info */}
// //             <div className="space-y-2">
// //               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Location</h3>
// //               <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5">
// //                 <MapPin size={16} className="mt-0.5 shrink-0 text-blue-500" />
// //                 <div className="text-sm text-zinc-300 w-full">
                  
// //                   {/* Location Text */}
// //                   <div className="font-medium text-zinc-200">
// //                     {complaint.locationText || "Pinned Location"}
// //                   </div>
                  
// //                   {/* GPS Coordinates */}
// //                   {complaint.lat && complaint.lng && (
// //                     <div className="font-mono text-[11px] text-zinc-500 mt-1 bg-black/20 inline-block px-1.5 py-0.5 rounded border border-white/5">
// //                       {complaint.lat.toFixed(6)}, {complaint.lng.toFixed(6)}
// //                     </div>
// //                   )}

// //                   {/* Ward Badge */}
// //                   {complaint.ward && (
// //                     <div className="mt-2 block">
// //                       <span className="inline-flex items-center px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">
// //                         {complaint.ward.name}
// //                       </span>
// //                     </div>
// //                   )}
                  
// //                 </div>
// //               </div>
// //             </div>

// //           </div>
// //         </div>

// //         {/* 3. FIXED FOOTER ACTION */}
// //         <div className="p-6 pt-0 mt-auto bg-zinc-950 pb-8 md:pb-6">
// //           <button
// //             onClick={() => router.push(`/complaints/${complaint.id}`)}
// //             className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
// //           >
// //             Open Full Report <ArrowRight size={16} />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // Helpers
// // function getStatusColor(status: string) {
// //   switch (status?.toUpperCase()) {
// //     case "RESOLVED": return "text-green-400";
// //     case "REJECTED": return "text-red-400";
// //     case "IN_PROGRESS": return "text-blue-400";
// //     case "WORK_IN_PROGRESS": return "text-blue-400";
// //     default: return "text-yellow-400";
// //   }
// // }

// // function getStatusBg(status: string) {
// //   switch (status?.toUpperCase()) {
// //     case "RESOLVED": return "bg-green-500/20";
// //     case "REJECTED": return "bg-red-500/20";
// //     case "IN_PROGRESS": return "bg-blue-500/20";
// //     case "WORK_IN_PROGRESS": return "bg-blue-500/20";
// //     default: return "bg-yellow-500/20";
// //   }
// // }


// "use client";

// import { useEffect, useState, useMemo } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import {
//   X, MapPin, Activity, ArrowRight, ChevronLeft, ChevronRight,
//   Image as ImageIcon, Loader2, Clock, CheckCircle2, User,
//   Hammer, AlertTriangle, FileText, ThumbsUp, XCircle
// } from "lucide-react";
// import { API_BASE, apiGet } from "@/lib/api";

// export default function ComplaintDetailDialog({
//   complaint,
//   onClose,
// }: {
//   complaint: any;
//   onClose: () => void;
// }) {
//   const router = useRouter();
//   const [mounted, setMounted] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
  
//   // ✅ NEW: State for Mobile Bottom Sheet Expansion
//   const [isMobileExpanded, setIsMobileExpanded] = useState(false);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);

//   // Image States
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isLoadingImage, setIsLoadingImage] = useState(true);

//   // Timeline States
//   const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
//   const [timelineEvents, setTimelineEvents] = useState<any[]>([]);
//   const [isLoadingTimeline, setIsLoadingTimeline] = useState(false);

//   useEffect(() => {
//     setMounted(true);
    
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile(); 
    
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Reset states when opening a new complaint
//   useEffect(() => {
//     setCurrentImageIndex(0);
//     setIsLoadingImage(true);
//     setIsTimelineExpanded(false);
//     setTimelineEvents([]);
//     setIsMobileExpanded(false); // ✅ Start collapsed on new pin tap
//   }, [complaint?.id]);

//   const images = useMemo(() => {
//     if (!complaint) return [];
//     const list: string[] = [];

//     if (complaint.media && Array.isArray(complaint.media)) {
//       complaint.media.forEach((m: any) => { if (m.url) list.push(m.url); });
//     }

//     if (list.length === 0) {
//       if (complaint.images && Array.isArray(complaint.images)) {
//         complaint.images.forEach((img: any) => {
//           if (img?.url) list.push(img.url);
//           else if (typeof img === 'string') list.push(img);
//         });
//       } else if (complaint.imageUrl) {
//         list.push(complaint.imageUrl);
//       }
//     }
//     return list.map(url => url.startsWith("http") ? url : `${API_BASE}${url}`);
//   }, [complaint]);

//   if (!complaint) return null;

//   const hasImages = images.length > 0;
//   const activeImage = hasImages ? images[currentImageIndex] : null;

//   // --- TOUCH SWIPE HANDLERS FOR MOBILE ---
//   const handleTouchStart = (e: any) => setTouchStart(e.targetTouches[0].clientY);
//   const handleTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientY);
//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
//     const distance = touchStart - touchEnd;
//     const isSwipeUp = distance > 50;
//     const isSwipeDown = distance < -50;
    
//     if (isSwipeUp && !isMobileExpanded) setIsMobileExpanded(true);
//     if (isSwipeDown && isMobileExpanded) setIsMobileExpanded(false);
    
//     setTouchStart(0);
//     setTouchEnd(0);
//   };

//   const handleTimelineToggle = async () => {
//     if (isTimelineExpanded) {
//       setIsTimelineExpanded(false);
//       return;
//     }
//     setIsTimelineExpanded(true);
//     if (timelineEvents.length === 0) {
//       setIsLoadingTimeline(true);
//       try {
//         const fullDetails = await apiGet<any>(`/complaints/${complaint.id}`);
//         if (fullDetails && fullDetails.events) {
//           const cleanEvents = fullDetails.events.filter((e: any) => e.type !== 'UPVOTED');
//           setTimelineEvents(cleanEvents);
//         }
//       } catch (err) {
//         console.error("Failed to load timeline", err);
//       } finally {
//         setIsLoadingTimeline(false);
//       }
//     }
//   };

//   const nextImage = (e: any) => {
//     e.stopPropagation();
//     setCurrentImageIndex((prev) => (prev + 1) % images.length);
//     setIsLoadingImage(true);
//   };

//   const prevImage = (e: any) => {
//     e.stopPropagation();
//     setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//     setIsLoadingImage(true);
//   };

//   return (
//     <div className={
//       isMobile 
//         // ✅ On Mobile: Height changes based on isMobileExpanded
//         ? `fixed inset-x-0 bottom-0 z-[2000] w-full flex flex-col pointer-events-none transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${mounted ? "translate-y-0" : "translate-y-[100%]"} ${isMobileExpanded ? 'h-[85vh]' : 'h-[32vh]'}`
//         : `fixed inset-y-4 right-4 z-[2000] w-[400px] flex flex-col pointer-events-none transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${mounted ? "translate-x-0" : "translate-x-[120%]"}`
//     }>

//       <div className={
//         isMobile
//           ? "h-full w-full pointer-events-auto bg-zinc-950 border-t border-white/10 rounded-t-3xl shadow-[0_-10px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
//           : "h-full w-full pointer-events-auto bg-zinc-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
//       }>

//         {/* ✅ DRAG HANDLE & SWIPE AREA (Mobile Only) */}
//         {isMobile && (
//           <div 
//             className="w-full pt-3 pb-2 flex justify-center bg-zinc-900 cursor-grab active:cursor-grabbing z-40"
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//             onClick={() => setIsMobileExpanded(!isMobileExpanded)}
//           >
//             <div className="w-12 h-1.5 bg-zinc-700 rounded-full" />
//           </div>
//         )}

//         {/* 1. CAROUSEL HEADER (Swipeable on mobile) */}
//         <div 
//           className="relative shrink-0 bg-zinc-900 group overflow-hidden border-b border-white/5 transition-all duration-500"
//           style={{ height: isMobile && !isMobileExpanded ? '120px' : '224px' }}
//           onTouchStart={isMobile ? handleTouchStart : undefined}
//           onTouchMove={isMobile ? handleTouchMove : undefined}
//           onTouchEnd={isMobile ? handleTouchEnd : undefined}
//           onClick={() => isMobile && !isMobileExpanded && setIsMobileExpanded(true)}
//         >
//           {hasImages ? (
//             <>
//               {isLoadingImage && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
//                   <Loader2 className="animate-spin text-blue-500" size={32} />
//                 </div>
//               )}
//               <div className="relative w-full h-full">
//                 <Image
//                   key={activeImage}
//                   src={activeImage!}
//                   alt="Evidence"
//                   fill
//                   unoptimized={true}
//                   className={`object-cover transition-opacity duration-500 ${isLoadingImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
//                   sizes={isMobile ? "100vw" : "(max-width: 400px) 100vw, 400px"}
//                   priority
//                   onLoad={() => setIsLoadingImage(false)}
//                 />
//               </div>
//               {(images.length > 1 && (!isMobile || isMobileExpanded)) && (
//                 <>
//                   <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100">
//                     <ChevronLeft size={20} />
//                   </button>
//                   <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100">
//                     <ChevronRight size={20} />
//                   </button>
//                   <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
//                     {images.map((_, idx) => (
//                       <button
//                         key={idx}
//                         onClick={(e) => { e.stopPropagation(); if (idx !== currentImageIndex) { setCurrentImageIndex(idx); setIsLoadingImage(true); } }}
//                         className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
//                       />
//                     ))}
//                   </div>
//                 </>
//               )}
//             </>
//           ) : (
//             <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-600">
//               <ImageIcon size={48} className="mb-2 opacity-20" />
//               <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">No Image Evidence</span>
//             </div>
//           )}
          
//           <button 
//             onClick={(e) => { e.stopPropagation(); onClose(); }} 
//             className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-black/60 transition"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         {/* 2. SCROLLABLE CONTENT (Hidden when collapsed on mobile) */}
//         <div 
//           className={`flex-1 overflow-y-auto custom-scrollbar transition-opacity duration-300 ${isMobile && !isMobileExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
//         >
//           {/* Title */}
//           <div className="px-6 pt-6 pb-2">
//             <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
//               {complaint.category || "Issue"}
//             </span>
//             <h2 className="text-xl font-bold text-white leading-snug">
//               {complaint.title}
//             </h2>
//           </div>

//           <div className="p-6 pt-2 space-y-6">

//             {/* --- TIMELINE TOGGLE ROW --- */}
//             <div
//               onClick={handleTimelineToggle}
//               className={`
//                  relative overflow-hidden flex flex-col
//                  rounded-2xl border transition-all duration-500 cursor-pointer group
//                  ${isTimelineExpanded
//                   ? 'bg-zinc-900 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]'
//                   : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'}
//                `}
//             >
//               <div className="flex items-center justify-between p-4 z-10">
//                 <div className="flex items-center gap-3">
//                   <div className={`p-2.5 rounded-xl transition-colors duration-500 ${getStatusBg(complaint.currentStatus)}`}>
//                     {isTimelineExpanded ? (
//                       <Clock size={18} className="text-blue-400 animate-spin-slow" />
//                     ) : (
//                       <Activity size={18} className={getStatusColor(complaint.currentStatus)} />
//                     )}
//                   </div>
//                   <div>
//                     <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold group-hover:text-blue-400 transition-colors">
//                       {isTimelineExpanded ? "SLA Timeline" : "Current Status"}
//                     </div>
//                     <div className={`text-sm font-bold ${getStatusColor(complaint.currentStatus)}`}>
//                       {complaint.currentStatus?.replace(/_/g, " ") || "PENDING"}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="text-right">
//                   {isTimelineExpanded ? (
//                     <div className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full font-bold uppercase">
//                       History
//                     </div>
//                   ) : (
//                     <div className="flex flex-col items-end">
//                       <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Reported</div>
//                       <div className="text-sm text-zinc-200 font-medium">
//                         {new Date(complaint.createdAt || Date.now()).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* --- EXPANDED TIMELINE --- */}
//               <div className={`
//                  transition-all duration-500 ease-in-out overflow-hidden bg-black/40
//                  ${isTimelineExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
//               `}>
//                 <div className="p-4 pt-2 pl-6 border-t border-white/5">
//                   {isLoadingTimeline ? (
//                     <div className="flex items-center gap-2 text-xs text-zinc-500 py-6 justify-center">
//                       <Loader2 size={14} className="animate-spin" /> Fetching SLA logs...
//                     </div>
//                   ) : (
//                     <div className="relative space-y-0 pb-2">
//                       <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-zinc-800" />
//                       {timelineEvents.length === 0 ? (
//                         <div className="pl-10 text-xs text-zinc-500 py-2">No history recorded yet.</div>
//                       ) : (
//                         timelineEvents.map((event: any, idx) => {
//                           const isLast = idx === timelineEvents.length - 1;
//                           let Icon = Activity;
//                           let colorClass = "text-zinc-400 bg-zinc-800 border-zinc-700";

//                           switch (event.type) {
//                             case 'CREATED':
//                               Icon = FileText;
//                               colorClass = "text-blue-400 bg-blue-900/20 border-blue-500/50";
//                               break;
//                             case 'ACKNOWLEDGED':
//                             case 'ASSIGNED':
//                               Icon = User;
//                               colorClass = "text-purple-400 bg-purple-900/20 border-purple-500/50";
//                               break;
//                             case 'WORK_IN_PROGRESS':
//                               Icon = Hammer;
//                               colorClass = "text-orange-400 bg-orange-900/20 border-orange-500/50";
//                               break;
//                             case 'RESOLVED':
//                               Icon = CheckCircle2;
//                               colorClass = "text-green-400 bg-green-900/20 border-green-500/50";
//                               break;
//                             case 'REJECTED':
//                               Icon = AlertTriangle;
//                               colorClass = "text-red-400 bg-red-900/20 border-red-500/50";
//                               break;
//                           }

//                           return (
//                             <div key={idx} className="relative pl-10 py-3 group">
//                               <div className={`
//                                       absolute left-0 top-3 w-8 h-8 rounded-full border flex items-center justify-center z-10
//                                       ${colorClass} ${isLast ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-110' : ''}
//                                      `}>
//                                 <Icon size={14} />
//                               </div>
//                               <div className="flex flex-col">
//                                 <div className="flex justify-between items-center">
//                                   <span className={`text-xs font-bold ${isLast ? 'text-white' : 'text-zinc-400'}`}>
//                                     {event.type.replace(/_/g, " ")}
//                                   </span>
//                                   <span className="text-[10px] text-zinc-500 font-mono">
//                                     {new Date(event.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                                   </span>
//                                 </div>
//                                 <div className="text-[10px] text-zinc-500">
//                                   {new Date(event.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
//                                 </div>
//                                 {event.data && (
//                                   <div className="mt-1.5">
//                                     {event.data.note && (
//                                       <p className="text-[11px] text-zinc-300 bg-white/5 p-1.5 rounded border border-white/5 inline-block max-w-full">
//                                         "{event.data.note}"
//                                       </p>
//                                     )}
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           );
//                         })
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
            
//             {/* Community Impact & Validation Badges */}
//             {(complaint.signals?.length > 0 || complaint.validations?.length > 0) && (
//               <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
//                 {complaint.currentStatus !== 'RESOLVED' && complaint.signals && (() => {
//                   const upvotesCount = complaint.signals.filter((s: any) => s.type === 'UPVOTE').length;
//                   const stillPresentCount = complaint.signals.filter((s: any) => s.type === 'STILL_PRESENT').length;

//                   return (
//                     <>
//                       {upvotesCount > 0 && (
//                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 text-[11px] font-bold shadow-sm">
//                           <ThumbsUp size={12} className="text-blue-400" />
//                           {upvotesCount} {upvotesCount === 1 ? 'Person' : 'People'} affected
//                         </div>
//                       )}
//                       {stillPresentCount > 0 && (
//                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 text-[11px] font-bold shadow-sm">
//                           <AlertTriangle size={12} className="text-orange-400" />
//                           {stillPresentCount} Still Present
//                         </div>
//                       )}
//                     </>
//                   );
//                 })()}

//                 {complaint.currentStatus === 'RESOLVED' && complaint.validations && (() => {
//                   const confirmedCount = complaint.validations.filter((v: any) => v.vote === 'CONFIRMED').length;
//                   const disputedCount = complaint.validations.filter((v: any) => v.vote === 'NOT_FIXED').length;

//                   return (
//                     <>
//                       {confirmedCount > 0 && (
//                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-900/20 border border-green-800/50 text-green-400 text-[11px] font-bold shadow-sm">
//                           <CheckCircle2 size={12} />
//                           {confirmedCount} Confirmed
//                         </div>
//                       )}
//                       {disputedCount > 0 && (
//                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-900/20 border border-red-800/50 text-red-400 text-[11px] font-bold shadow-sm">
//                           <XCircle size={12} />
//                           {disputedCount} Disputed
//                         </div>
//                       )}
//                     </>
//                   );
//                 })()}
//               </div>
//             )}

//             {/* Description */}
//             <div className="space-y-2">
//               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Description</h3>
//               <p className="text-sm text-zinc-300 leading-relaxed">
//                 {complaint.description || "No description provided by the citizen."}
//               </p>
//             </div>

//             <div className="space-y-2">
//               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Assigned Officer</h3>
//               <div
//                 onClick={() => complaint.assignedOfficer && router.push(`/profile/${complaint.assignedOfficer.id}`)}
//                 className={`
//                   flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5 
//                   ${complaint.assignedOfficer ? "cursor-pointer hover:bg-zinc-800 hover:border-zinc-700 transition" : "opacity-70"}
//                 `}
//               >
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${complaint.assignedOfficer ? 'bg-purple-900/20 border-purple-500/30 text-purple-400' : 'bg-zinc-800 border-zinc-700 text-zinc-500'}`}>
//                   <User size={14} />
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="text-sm font-medium text-zinc-200">
//                     {complaint.assignedOfficer?.name || "Pending Assignment"}
//                   </span>
//                   {complaint.assignedOfficer && (
//                     <span className="text-[10px] text-zinc-500 flex items-center gap-1">
//                       {complaint.assignedOfficer.email} <ArrowRight size={10} className="opacity-50" />
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Location Info */}
//             <div className="space-y-2">
//               <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Location</h3>
//               <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5">
//                 <MapPin size={16} className="mt-0.5 shrink-0 text-blue-500" />
//                 <div className="text-sm text-zinc-300 w-full">
//                   <div className="font-medium text-zinc-200">
//                     {complaint.locationText || "Pinned Location"}
//                   </div>
//                   {complaint.lat && complaint.lng && (
//                     <div className="font-mono text-[11px] text-zinc-500 mt-1 bg-black/20 inline-block px-1.5 py-0.5 rounded border border-white/5">
//                       {complaint.lat.toFixed(6)}, {complaint.lng.toFixed(6)}
//                     </div>
//                   )}
//                   {complaint.ward && (
//                     <div className="mt-2 block">
//                       <span className="inline-flex items-center px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">
//                         {complaint.ward.name}
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* 3. FIXED FOOTER ACTION (Hidden when collapsed on mobile) */}
//         {(!isMobile || isMobileExpanded) && (
//           <div className="p-6 pt-0 mt-auto bg-zinc-950 pb-8 md:pb-6">
//             <button
//               onClick={() => router.push(`/complaints/${complaint.id}`)}
//               className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
//             >
//               Open Full Report <ArrowRight size={16} />
//             </button>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// // Helpers
// function getStatusColor(status: string) {
//   switch (status?.toUpperCase()) {
//     case "RESOLVED": return "text-green-400";
//     case "REJECTED": return "text-red-400";
//     case "IN_PROGRESS": return "text-blue-400";
//     case "WORK_IN_PROGRESS": return "text-blue-400";
//     default: return "text-yellow-400";
//   }
// }

// function getStatusBg(status: string) {
//   switch (status?.toUpperCase()) {
//     case "RESOLVED": return "bg-green-500/20";
//     case "REJECTED": return "bg-red-500/20";
//     case "IN_PROGRESS": return "bg-blue-500/20";
//     case "WORK_IN_PROGRESS": return "bg-blue-500/20";
//     default: return "bg-yellow-500/20";
//   }
// }


"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  X, MapPin, Activity, ArrowRight, ChevronLeft, ChevronRight,
  Image as ImageIcon, Loader2, Clock, CheckCircle2, User,
  Hammer, AlertTriangle, FileText, ThumbsUp, XCircle
} from "lucide-react";
import { API_BASE, apiGet } from "@/lib/api";

export default function ComplaintDetailDialog({
  complaint,
  onClose,
}: {
  complaint: any;
  onClose: () => void;
}) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Mobile Bottom Sheet Expansion
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Image & Timeline States
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
  const [timelineEvents, setTimelineEvents] = useState<any[]>([]);
  const [isLoadingTimeline, setIsLoadingTimeline] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsLoadingImage(true);
    setIsTimelineExpanded(false);
    setTimelineEvents([]);
    setIsMobileExpanded(false); 
  }, [complaint?.id]);

  const images = useMemo(() => {
    if (!complaint) return [];
    const list: string[] = [];
    if (complaint.media && Array.isArray(complaint.media)) {
      complaint.media.forEach((m: any) => { if (m.url) list.push(m.url); });
    }
    if (list.length === 0) {
      if (complaint.images && Array.isArray(complaint.images)) {
        complaint.images.forEach((img: any) => {
          if (img?.url) list.push(img.url);
          else if (typeof img === 'string') list.push(img);
        });
      } else if (complaint.imageUrl) list.push(complaint.imageUrl);
    }
    return list.map(url => url.startsWith("http") ? url : `${API_BASE}${url}`);
  }, [complaint]);

  if (!complaint) return null;

  const hasImages = images.length > 0;
  const activeImage = hasImages ? images[currentImageIndex] : null;

  // --- ✅ SWIPE LOGIC FIXED ---
  const handleTouchStart = (e: any) => setTouchStart(e.targetTouches[0].clientY);
  const handleTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientY);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipeUp = distance > 50;
    const isSwipeDown = distance < -50;
    
    if (isSwipeUp && !isMobileExpanded) {
      setIsMobileExpanded(true); // Expand up
    } else if (isSwipeDown) {
      if (isMobileExpanded) {
        setIsMobileExpanded(false); // Collapse to peek
      } else {
        onClose(); // ✅ Close entirely if already peeking
      }
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleTimelineToggle = async () => {
    if (isTimelineExpanded) return setIsTimelineExpanded(false);
    setIsTimelineExpanded(true);
    if (timelineEvents.length === 0) {
      setIsLoadingTimeline(true);
      try {
        const fullDetails = await apiGet<any>(`/complaints/${complaint.id}`);
        if (fullDetails?.events) {
          setTimelineEvents(fullDetails.events.filter((e: any) => e.type !== 'UPVOTED'));
        }
      } catch (err) {
        console.error("Failed to load timeline", err);
      } finally {
        setIsLoadingTimeline(false);
      }
    }
  };

  const nextImage = (e: any) => { e.stopPropagation(); setCurrentImageIndex((p) => (p + 1) % images.length); setIsLoadingImage(true); };
  const prevImage = (e: any) => { e.stopPropagation(); setCurrentImageIndex((p) => (p === 0 ? images.length - 1 : p - 1)); setIsLoadingImage(true); };

  return (
    <div className={
      isMobile 
        // ✅ Fixed heights: 38vh for peek (shows image + title nicely)
        ? `fixed inset-x-0 bottom-0 z-[2000] w-full flex flex-col pointer-events-none transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${mounted ? "translate-y-0" : "translate-y-[100%]"} ${isMobileExpanded ? 'h-[85vh]' : 'h-[38vh]'}`
        : `fixed inset-y-4 right-4 z-[2000] w-[400px] flex flex-col pointer-events-none transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${mounted ? "translate-x-0" : "translate-x-[120%]"}`
    }>

      <div className={
        isMobile
          ? "h-full w-full pointer-events-auto bg-zinc-950 border-t border-white/10 rounded-t-3xl shadow-[0_-10px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          : "h-full w-full pointer-events-auto bg-zinc-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
      }>

        {/* DRAG HANDLE (Mobile Only) */}
        {isMobile && (
          <div 
            className="w-full pt-3 pb-2 flex justify-center bg-zinc-900 cursor-grab active:cursor-grabbing z-40"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          >
            <div className="w-12 h-1.5 bg-zinc-700 rounded-full" />
          </div>
        )}

        {/* 1. CAROUSEL HEADER */}
        <div 
          className="relative shrink-0 bg-zinc-900 group overflow-hidden border-b border-white/5 transition-all duration-500"
          style={{ height: isMobile && !isMobileExpanded ? '140px' : '224px' }}
          onTouchStart={isMobile ? handleTouchStart : undefined}
          onTouchMove={isMobile ? handleTouchMove : undefined}
          onTouchEnd={isMobile ? handleTouchEnd : undefined}
          onClick={() => isMobile && !isMobileExpanded && setIsMobileExpanded(true)}
        >
          {hasImages ? (
            <>
              {isLoadingImage && (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
                  <Loader2 className="animate-spin text-blue-500" size={32} />
                </div>
              )}
              <div className="relative w-full h-full">
                <Image
                  key={activeImage}
                  src={activeImage!}
                  alt="Evidence"
                  fill
                  unoptimized={true}
                  className={`object-cover transition-opacity duration-500 ${isLoadingImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
                  sizes={isMobile ? "100vw" : "(max-width: 400px) 100vw, 400px"}
                  priority
                  onLoad={() => setIsLoadingImage(false)}
                />
              </div>
              {(images.length > 1 && (!isMobile || isMobileExpanded)) && (
                <>
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100"><ChevronLeft size={20} /></button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100"><ChevronRight size={20} /></button>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-600">
              <ImageIcon size={48} className="mb-2 opacity-20" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">No Image Evidence</span>
            </div>
          )}
          <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-black/60 transition">
            <X size={18} />
          </button>
        </div>

        {/* 2. SCROLLABLE CONTENT */}
        {/* ✅ REMOVED opacity-0 so title shows in peek mode! */}
        <div 
          className={`flex-1 custom-scrollbar transition-all duration-300 ${isMobile && !isMobileExpanded ? 'overflow-hidden' : 'overflow-y-auto'}`}
          onClick={() => isMobile && !isMobileExpanded && setIsMobileExpanded(true)}
        >
          {/* Title Area (Always visible) */}
          <div className="px-6 pt-5 pb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
              {complaint.category || "Issue"}
            </span>
            <h2 className="text-xl font-bold text-white leading-snug truncate">
              {complaint.title}
            </h2>
          </div>

          <div className="p-6 pt-0 space-y-6">
            {/* --- STATUS ROW --- */}
            <div
              onClick={handleTimelineToggle}
              className={`relative overflow-hidden flex flex-col rounded-2xl border transition-all duration-500 cursor-pointer group ${isTimelineExpanded ? 'bg-zinc-900 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : 'bg-white/5 border-white/5'}`}
            >
              <div className="flex items-center justify-between p-4 z-10">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl transition-colors duration-500 ${getStatusBg(complaint.currentStatus)}`}>
                    {isTimelineExpanded ? <Clock size={18} className="text-blue-400 animate-spin-slow" /> : <Activity size={18} className={getStatusColor(complaint.currentStatus)} />}
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold group-hover:text-blue-400 transition-colors">Current Status</div>
                    <div className={`text-sm font-bold ${getStatusColor(complaint.currentStatus)}`}>{complaint.currentStatus?.replace(/_/g, " ") || "PENDING"}</div>
                  </div>
                </div>
              </div>

              {/* TIMELINE DROPDOWN */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden bg-black/40 ${isTimelineExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 pt-2 pl-6 border-t border-white/5">
                  {isLoadingTimeline ? (
                    <div className="flex items-center gap-2 text-xs text-zinc-500 py-6 justify-center"><Loader2 size={14} className="animate-spin" /> Fetching SLA logs...</div>
                  ) : (
                    <div className="relative space-y-0 pb-2">
                      <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-zinc-800" />
                      {timelineEvents.map((event: any, idx) => {
                        const isLast = idx === timelineEvents.length - 1;
                        return (
                          <div key={idx} className="relative pl-10 py-3 group">
                            <div className={`absolute left-0 top-3 w-8 h-8 rounded-full border flex items-center justify-center z-10 bg-zinc-800 border-zinc-700 text-zinc-400`}><Activity size={14} /></div>
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-white">{event.type.replace(/_/g, " ")}</span>
                              <span className="text-[10px] text-zinc-500">{new Date(event.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Description</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{complaint.description || "No description provided."}</p>
            </div>

            {/* Assigned Officer */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Assigned Officer</h3>
              <div onClick={() => complaint.assignedOfficer && router.push(`/profile/${complaint.assignedOfficer.id}`)} className={`flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5 ${complaint.assignedOfficer ? "cursor-pointer hover:bg-zinc-800 transition" : "opacity-70"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${complaint.assignedOfficer ? 'bg-purple-900/20 border-purple-500/30 text-purple-400' : 'bg-zinc-800 border-zinc-700 text-zinc-500'}`}><User size={14} /></div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-200">{complaint.assignedOfficer?.name || "Pending Assignment"}</span>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Location</h3>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900 border border-white/5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-blue-500" />
                <div className="text-sm text-zinc-300 w-full">
                  <div className="font-medium text-zinc-200">{complaint.locationText || "Pinned Location"}</div>
                  {complaint.lat && complaint.lng && (
                    <div className="font-mono text-[11px] text-zinc-500 mt-1 bg-black/20 inline-block px-1.5 py-0.5 rounded border border-white/5">
                      {complaint.lat.toFixed(6)}, {complaint.lng.toFixed(6)}
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. FIXED FOOTER ACTION */}
        {(!isMobile || isMobileExpanded) && (
          <div className="p-6 pt-0 mt-auto bg-zinc-950 pb-8 md:pb-6">
            <button
              onClick={() => router.push(`/complaints/${complaint.id}`)}
              className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
            >
              Open Full Report <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

// Helpers
function getStatusColor(status: string) {
  switch (status?.toUpperCase()) {
    case "RESOLVED": return "text-green-400";
    case "REJECTED": return "text-red-400";
    case "WORK_IN_PROGRESS": return "text-blue-400";
    default: return "text-yellow-400";
  }
}
function getStatusBg(status: string) {
  switch (status?.toUpperCase()) {
    case "RESOLVED": return "bg-green-500/20";
    case "REJECTED": return "bg-red-500/20";
    case "WORK_IN_PROGRESS": return "bg-blue-500/20";
    default: return "bg-yellow-500/20";
  }
}