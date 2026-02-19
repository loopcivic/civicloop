// // "use client";

// // import dynamic from "next/dynamic";
// // import { useRouter } from "next/navigation";
// // import { useState } from "react";

// // const SnapMap = dynamic(() => import("@/components/map/SnapMap"), {
// //   ssr: false,
// //   loading: () => (
// //     <div className="h-screen w-screen flex items-center justify-center bg-black text-zinc-500">
// //       Loading Civic Map...
// //     </div>
// //   ),
// // });

// // export default function MapPage() {

// //   const router = useRouter();

// //   // selected complaint for preview
// //   const [selected, setSelected] = useState<any>(null);

// //   return (

// //     <main className="h-screen w-screen relative bg-black overflow-hidden">

// //       {/* Header */}
// //       <div className="absolute top-6 left-6 right-6 z-[1000] flex justify-between pointer-events-none">

// //         <button
// //           onClick={() => router.push("/")}
// //           className="
// //             pointer-events-auto
// //             bg-black/60 backdrop-blur-md
// //             border border-zinc-800
// //             text-white px-5 py-2
// //             rounded-full
// //             hover:bg-zinc-800
// //             transition
// //           "
// //         >
// //           ← Dashboard
// //         </button>

// //         <div
// //           className="
// //             bg-black/60 backdrop-blur-md
// //             border border-zinc-800
// //             text-white px-5 py-2
// //             rounded-full font-medium
// //           "
// //         >
// //           CivicLoop Live
// //         </div>

// //       </div>


// //       {/* Map */}
// //       <div className="absolute inset-0 z-0">
// //         <SnapMap onSelect={setSelected} />
// //       </div>


// //       {/* Bottom Sheet */}
// //       {/* {selected && (

// //         <div
// //           className="
// //             absolute bottom-0 left-0 right-0 z-[1000]
// //             bg-zinc-900/95 backdrop-blur-xl
// //             border-t border-zinc-800
// //             rounded-t-3xl
// //             p-6
// //             animate-in slide-in-from-bottom duration-300
// //           "
// //         >

// //           <div className="flex justify-between items-center">

// //             <div>

// //               <div className="text-white font-bold text-lg">
// //                 {selected.title}
// //               </div>

// //               <div className="text-zinc-400 text-sm">
// //                 {selected.category}
// //               </div>

// //             </div>

// //             <button
// //               onClick={() =>
// //                 router.push(`/complaints/${selected.id}`)
// //               }
// //               className="
// //                 bg-blue-600 hover:bg-blue-500
// //                 text-white px-4 py-2 rounded-lg
// //                 font-medium
// //               "
// //             >
// //               View →
// //             </button>

// //           </div>

// //         </div>

// //       )} */}

// //     </main>

// //   );

// // }


// "use client";

// import dynamic from "next/dynamic";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { ArrowLeft, ChevronRight, X } from "lucide-react";

// const SnapMap = dynamic(() => import("@/components/map/SnapMap"), {
//   ssr: false,
//   loading: () => (
//     <div className="h-[100dvh] w-full flex items-center justify-center bg-black text-zinc-500 text-sm sm:text-base">
//       <div className="flex flex-col items-center gap-3">
//         <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
//         Loading Civic Map...
//       </div>
//     </div>
//   ),
// });

// export default function MapPage() {
//   const router = useRouter();

//   // selected complaint for preview
//   const [selected, setSelected] = useState<any>(null);

//   return (
//     // Using 100dvh instead of h-screen fixes mobile browser address bar jumps
//     <main className="h-[100dvh] w-full relative bg-black overflow-hidden flex flex-col">
      
//       {/* Header */}
//       <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 z-[1000] flex justify-between pointer-events-none items-center gap-2">
//         <button
//           onClick={() => router.push("/")}
//           className="
//             pointer-events-auto flex items-center gap-1.5 sm:gap-2
//             bg-black/60 backdrop-blur-md border border-zinc-800
//             text-zinc-300 hover:text-white px-3 py-1.5 sm:px-5 sm:py-2
//             rounded-full hover:bg-zinc-800/80 transition-all text-xs sm:text-sm font-medium shadow-lg
//           "
//         >
//           <ArrowLeft size={16} strokeWidth={2.5} className="w-4 h-4" />
//           <span className="hidden xs:inline sm:inline">Dashboard</span>
//         </button>

//         <div className="
//             bg-black/60 backdrop-blur-md border border-zinc-800
//             text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-full
//             text-xs sm:text-sm font-medium shadow-lg flex items-center gap-2 whitespace-nowrap
//           "
//         >
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
//           </span>
//           CivicLoop Live
//         </div>
//       </div>

//       {/* Map */}
//       <div className="absolute inset-0 z-0">
//         <SnapMap onSelect={setSelected} />
//       </div>

//       {/* Bottom Sheet Preview */}
//       {/* {selected && (
//         <div className="
//             absolute bottom-0 left-0 right-0 z-[1000]
//             bg-zinc-950/90 sm:bg-zinc-900/95 backdrop-blur-xl
//             border-t border-zinc-800
//             rounded-t-3xl sm:rounded-t-none sm:rounded-xl sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 sm:w-[400px] sm:right-auto
//             p-4 sm:p-5
//             animate-in slide-in-from-bottom duration-300 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]
//           "
//         >
//           <div className="w-12 h-1.5 bg-zinc-800 rounded-full mx-auto mb-4 sm:hidden" />

//           <div className="flex justify-between items-start sm:items-center gap-3">
//             <div className="min-w-0 flex-1">
//               <div className="text-white font-bold text-base sm:text-lg truncate pr-2">
//                 {selected.title}
//               </div>
//               <div className="flex items-center gap-2 mt-1 sm:mt-1.5">
//                 <span className="px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-zinc-300 truncate">
//                   {selected.category}
//                 </span>

//                 {selected.currentStatus && (
//                   <span className={`px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wide border ${
//                     selected.currentStatus === 'RESOLVED' ? 'bg-green-900/30 border-green-800 text-green-400' : 'bg-blue-900/30 border-blue-800 text-blue-400'
//                   }`}>
//                     {selected.currentStatus.replace(/_/g, " ")}
//                   </span>
//                 )}
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 shrink-0">
//               <button
//                 onClick={() => setSelected(null)}
//                 className="p-1.5 sm:p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition hidden sm:flex"
//                 aria-label="Close details"
//               >
//                 <X size={16} />
//               </button>
              
//               <button
//                 onClick={() => router.push(`/complaints/${selected.id}`)}
//                 className="
//                   bg-blue-600 hover:bg-blue-500
//                   text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl
//                   text-xs sm:text-sm font-semibold flex items-center gap-1 transition active:scale-95 shadow-lg shadow-blue-900/20
//                 "
//               >
//                 View <ChevronRight size={16} className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )} */}
//     </main>
//   );
// }



"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const SnapMap = dynamic(() => import("@/components/map/SnapMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[100dvh] w-full flex items-center justify-center bg-black text-zinc-500 text-sm sm:text-base">
      <div className="flex flex-col items-center gap-3">
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        Loading Civic Map...
      </div>
    </div>
  ),
});

export default function MapPage() {
  const router = useRouter();

  // selected complaint for preview
  const [selected, setSelected] = useState<any>(null);

  return (
    <main className="h-[100dvh] w-full relative bg-black overflow-hidden flex flex-col">
      
      {/* HEADER: Redesigned to avoid Profile Widget collision */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-[1000] flex items-center gap-3 pointer-events-none">
        
        {/* Dashboard Back Button */}
        <button
          onClick={() => router.push("/")}
          className="
            pointer-events-auto flex items-center gap-2
            bg-zinc-950/80 backdrop-blur-2xl border border-white/10
            text-zinc-300 hover:text-white px-3 py-2 sm:px-5 sm:py-2.5
            rounded-full hover:bg-zinc-800/80 transition-all text-sm font-bold shadow-[0_8px_30px_rgba(0,0,0,0.5)]
          "
        >
          <ArrowLeft size={18} strokeWidth={2.5} />
          {/* Hide the word 'Dashboard' on extra small screens to save space */}
          <span className="hidden sm:inline">Dashboard</span>
        </button>

        {/* CivicLoop Live Badge: Hidden on mobile so it doesn't overlap the Profile Widget! */}
        <div className="
            hidden md:flex pointer-events-auto
            bg-zinc-950/80 backdrop-blur-2xl border border-white/10
            text-white px-4 py-2.5 rounded-full
            text-sm font-bold shadow-lg items-center gap-2
          "
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          CivicLoop Live
        </div>
      </div>

      {/* Map */}
      <div className="absolute inset-0 z-0">
        <SnapMap onSelect={setSelected} />
      </div>
      
    </main>
  );
}