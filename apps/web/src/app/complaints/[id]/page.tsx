// // // // // // "use client";

// // // // // // import { useEffect, useState } from "react";
// // // // // // import { apiGet, apiPost, API_BASE } from "@/lib/api";

// // // // // // export default function ComplaintDetail({ params }: any) {
// // // // // //   const id = params.id;
// // // // // //   const [data, setData] = useState<any>(null);
// // // // // //   const [err, setErr] = useState<string | null>(null);
// // // // // //   const [voterKey, setVoterKey] = useState("u1");

// // // // // //   async function load() {
// // // // // //     setErr(null);
// // // // // //     try {
// // // // // //       const c = await apiGet<any>(`/complaints/${id}`);
// // // // // //       setData(c);
// // // // // //     } catch (e: any) {
// // // // // //       setErr(e.message);
// // // // // //     }
// // // // // //   }

// // // // // //   useEffect(() => { load(); }, []);

// // // // // //   async function vote(vote: "CONFIRMED" | "NOT_FIXED") {
// // // // // //     setErr(null);
// // // // // //     try {
// // // // // //       await apiPost(`/complaints/${id}/validate`, { vote, voterKey });
// // // // // //       await load();
// // // // // //     } catch (e: any) {
// // // // // //       setErr(e.message);
// // // // // //     }
// // // // // //   }

// // // // // //   if (err) return <main className="p-10">{err}</main>;
// // // // // //   if (!data) return <main className="p-10">Loading...</main>;

// // // // // //   return (
// // // // // //     <main className="min-h-screen p-10 max-w-3xl space-y-6">
// // // // // //       <a className="underline" href="/">← Back</a>

// // // // // //       <header className="space-y-1">
// // // // // //         <h1 className="text-2xl font-bold">{data.title}</h1>
// // // // // //         <div className="text-sm text-slate-600">
// // // // // //           {data.ward?.name} • {data.department?.name} • {data.category} • <b>{data.currentStatus}</b>
// // // // // //         </div>
// // // // // //       </header>

// // // // // //       <section className="rounded-xl border p-4 space-y-2">
// // // // // //         <div className="font-semibold">Timeline (Immutable Events)</div>
// // // // // //         <div className="space-y-2">
// // // // // //           {data.events.map((e: any) => (
// // // // // //             <div key={e.id} className="border rounded-xl p-3">
// // // // // //               <div className="text-sm font-semibold">{e.type}</div>
// // // // // //               <div className="text-xs text-slate-600">{new Date(e.createdAt).toLocaleString()}</div>
// // // // // //               <pre className="text-xs mt-2 overflow-auto">{JSON.stringify(e.data, null, 2)}</pre>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       <section className="rounded-xl border p-4 space-y-3">
// // // // // //         <div className="font-semibold">Citizen Validation</div>
// // // // // //         <div className="text-sm text-slate-600">
// // // // // //           Confirmed: {data.validationCounts?.confirmed ?? 0} • Not fixed: {data.validationCounts?.notFixed ?? 0}
// // // // // //         </div>

// // // // // //         <div className="flex gap-3 items-center">
// // // // // //           <span className="text-sm">voterKey:</span>
// // // // // //           <input className="border rounded-xl px-3 py-2 text-sm" value={voterKey} onChange={(e) => setVoterKey(e.target.value)} />
// // // // // //           <span className="text-xs text-slate-500">(use u1/u2/u3 to simulate multiple citizens)</span>
// // // // // //         </div>

// // // // // //         <div className="flex gap-3">
// // // // // //           <button className="border rounded-xl px-4 py-2" onClick={() => vote("CONFIRMED")}>
// // // // // //             ✅ Confirm Fixed
// // // // // //           </button>
// // // // // //           <button className="border rounded-xl px-4 py-2" onClick={() => vote("NOT_FIXED")}>
// // // // // //             ❌ Still Not Fixed
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       <section className="rounded-xl border p-4 space-y-2">
// // // // // //         <div className="font-semibold">Proof Media</div>
// // // // // //         <div className="grid gap-3">
// // // // // //           {data.media?.map((m: any) => (
// // // // // //             <div key={m.id} className="border rounded-xl p-3">
// // // // // //               <div className="text-xs text-slate-600">{m.url}</div>
// // // // // //               <img className="mt-2 rounded-xl max-w-full" src={`${API_BASE}${m.url}`} alt="proof" />
// // // // // //               <div className="text-xs text-slate-500 mt-2">sha256: {m.sha256.slice(0, 16)}…</div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //           {(!data.media || data.media.length === 0) && (
// // // // // //             <div className="text-sm text-slate-500">No media uploaded yet.</div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </section>
// // // // // //     </main>
// // // // // //   );
// // // // // // }


// // // // // // gemini code


// // // // // "use client";

// // // // // import { useEffect, useState, use } from "react"; // ✅ Added 'use'
// // // // // import { apiGet, apiPost, API_BASE } from "@/lib/api";

// // // // // // ✅ Type the params as a Promise
// // // // // export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
// // // // //   // ✅ Unwrap the params Promise
// // // // //   const { id } = use(params);

// // // // //   const [data, setData] = useState<any>(null);
// // // // //   const [err, setErr] = useState<string | null>(null);
// // // // //   const [voterKey, setVoterKey] = useState("u1");

// // // // //   const [activeImage, setActiveImage] = useState<string | null>(null);


// // // // //   async function load() {
// // // // //     if (!id) return; // Guard clause just in case
// // // // //     setErr(null);
// // // // //     try {
// // // // //       const c = await apiGet<any>(`/complaints/${id}`);
// // // // //       setData(c);
// // // // //     } catch (e: any) {
// // // // //       setErr(e.message);
// // // // //     }
// // // // //   }

// // // // //   // ✅ Add 'id' to dependency array
// // // // //   useEffect(() => { load(); }, [id]);

// // // // //   async function vote(vote: "CONFIRMED" | "NOT_FIXED") {
// // // // //     setErr(null);
// // // // //     try {
// // // // //       await apiPost(`/complaints/${id}/validate`, { vote, voterKey });
// // // // //       await load();
// // // // //     } catch (e: any) {
// // // // //       setErr(e.message);
// // // // //     }
// // // // //   }

// // // // //   if (err) return <main className="p-10">{err}</main>;
// // // // //   if (!data) return <main className="p-10">Loading...</main>;

// // // // //   // const citizenMedia =
// // // // //   //   data.media?.filter((m: any) => m.source === "CITIZEN") || [];

// // // // //   // const officerMedia =
// // // // //   //   data.media?.filter((m: any) => m.source === "OFFICER") || [];

// // // // //   const citizenMedia = data.media || [];
// // // // //   const officerMedia: any[] = [];

// // // // //   return (
// // // // //     <main className="min-h-screen p-10 max-w-3xl space-y-6">
// // // // //       <a className="underline" href="/">← Back</a>

// // // // //       <header className="space-y-1">
// // // // //         <h1 className="text-2xl font-bold">{data.title}</h1>
// // // // //         <div className="text-sm text-slate-600">
// // // // //           {data.ward?.name} • {data.department?.name} • {data.category} • <b>{data.currentStatus}</b>
// // // // //         </div>
// // // // //       </header>

// // // // //       <section className="rounded-xl border p-4 space-y-2">
// // // // //         <div className="font-semibold">Timeline (Immutable Events)</div>
// // // // //         <div className="space-y-2">
// // // // //           {data.events.map((e: any) => (
// // // // //             <div key={e.id} className="border rounded-xl p-3">
// // // // //               <div className="text-sm font-semibold">{e.type}</div>
// // // // //               <div className="text-xs text-slate-600">{new Date(e.createdAt).toLocaleString()}</div>
// // // // //               <pre className="text-xs mt-2 overflow-auto">{JSON.stringify(e.data, null, 2)}</pre>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </section>

// // // // //       <section className="rounded-xl border p-4 space-y-3">
// // // // //         <div className="font-semibold">Citizen Validation</div>
// // // // //         <div className="text-sm text-slate-600">
// // // // //           Confirmed: {data.validationCounts?.confirmed ?? 0} • Not fixed: {data.validationCounts?.notFixed ?? 0}
// // // // //         </div>

// // // // //         <div className="flex gap-3 items-center">
// // // // //           <span className="text-sm">voterKey:</span>
// // // // //           <input className="border rounded-xl px-3 py-2 text-sm" value={voterKey} onChange={(e) => setVoterKey(e.target.value)} />
// // // // //           <span className="text-xs text-slate-500">(use u1/u2/u3 to simulate multiple citizens)</span>
// // // // //         </div>

// // // // //         <div className="flex gap-3">
// // // // //           <button className="border rounded-xl px-4 py-2" onClick={() => vote("CONFIRMED")}>
// // // // //             ✅ Confirm Fixed
// // // // //           </button>
// // // // //           <button className="border rounded-xl px-4 py-2" onClick={() => vote("NOT_FIXED")}>
// // // // //             ❌ Still Not Fixed
// // // // //           </button>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* <section className="rounded-xl border p-4 space-y-2">
// // // // //         <div className="font-semibold">Proof Media</div>
// // // // //         <div className="grid gap-3">
// // // // //           {data.media?.map((m: any) => (
// // // // //             <div key={m.id} className="border rounded-xl p-3">
// // // // //               <div className="text-xs text-slate-600">{m.url}</div>
// // // // //               <img className="mt-2 rounded-xl max-w-full" src={`${API_BASE}${m.url}`} alt="proof" />
// // // // //               <div className="text-xs text-slate-500 mt-2">sha256: {m.sha256.slice(0, 16)}…</div>
// // // // //             </div>
// // // // //           ))}
// // // // //           {(!data.media || data.media.length === 0) && (
// // // // //             <div className="text-sm text-slate-500">No media uploaded yet.</div>
// // // // //           )}
// // // // //         </div>
// // // // //       </section> */}
// // // // //       {/* Citizen Evidence Cluster */}
// // // // //       <section className="rounded-xl border p-4 space-y-3">

// // // // //         <div className="font-semibold">Citizen Issue</div>

// // // // //         {citizenMedia.length > 0 ? (

// // // // //           <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

// // // // //             {citizenMedia.map((m: any) => (

// // // // //               <img
// // // // //                 key={m.id}
// // // // //                 src={`${API_BASE}${m.url}`}
// // // // //                 onClick={() => setActiveImage(`${API_BASE}${m.url}`)}
// // // // //                 className="
// // // // //                           w-full h-32 object-cover
// // // // //                           rounded-xl
// // // // //                           border border-zinc-700
// // // // //                           hover:border-blue-500
// // // // //                           cursor-pointer
// // // // //                           transition
// // // // //                         "
// // // // //               />


// // // // //             ))}

// // // // //           </div>

// // // // //         ) : (
// // // // //           <div className="text-sm text-zinc-500">
// // // // //             No citizen photos uploaded.
// // // // //           </div>
// // // // //         )}

// // // // //       </section>


// // // // //       {/* Officer Proof Cluster */}
// // // // //       <section className="rounded-xl border p-4 space-y-3">

// // // // //         <div className="font-semibold">Officer Proof</div>

// // // // //         {officerMedia.length > 0 ? (

// // // // //           <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

// // // // //             {officerMedia.map((m: any) => (

// // // // //               <img
// // // // //                 key={m.id}
// // // // //                 src={`${API_BASE}${m.url}`}
// // // // //                 onClick={() => setActiveImage(`${API_BASE}${m.url}`)}
// // // // //                 className="
// // // // //                           w-full h-32 object-cover
// // // // //                           rounded-xl
// // // // //                           border border-zinc-700
// // // // //                           hover:border-blue-500
// // // // //                           cursor-pointer
// // // // //                           transition
// // // // //                         "
// // // // //               />


// // // // //             ))}

// // // // //           </div>

// // // // //         ) : (
// // // // //           <div className="text-sm text-zinc-500">
// // // // //             No officer proof uploaded.
// // // // //           </div>
// // // // //         )}

// // // // //       </section>

// // // // //       {/* Fullscreen Image Viewer */}
// // // // //       {activeImage && (

// // // // //         <div
// // // // //           className="
// // // // //       fixed inset-0
// // // // //       bg-black/90
// // // // //       flex items-center justify-center
// // // // //       z-50
// // // // //     "
// // // // //           onClick={() => setActiveImage(null)}
// // // // //         >

// // // // //           {/* Close button */}
// // // // //           <button
// // // // //             className="
// // // // //         absolute top-6 right-6
// // // // //         text-white text-3xl
// // // // //         hover:text-red-500
// // // // //       "
// // // // //             onClick={() => setActiveImage(null)}
// // // // //           >
// // // // //             ✕
// // // // //           </button>

// // // // //           {/* Full image */}
// // // // //           <img
// // // // //             src={activeImage}
// // // // //             className="
// // // // //         max-h-[90%]
// // // // //         max-w-[90%]
// // // // //         rounded-xl
// // // // //         shadow-2xl
// // // // //       "
// // // // //           />

// // // // //         </div>

// // // // //       )}


// // // // //     </main>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { useEffect, useState, use } from "react";
// // // // import { apiGet, apiPost, API_BASE } from "@/lib/api";
// // // // import { ArrowLeft, CheckCircle, XCircle, Maximize2, X } from "lucide-react"; // Optional icons

// // // // export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
// // // //   // Unwrap params for Next.js 15+
// // // //   const { id } = use(params);

// // // //   const [data, setData] = useState<any>(null);
// // // //   const [err, setErr] = useState<string | null>(null);
// // // //   const [voterKey, setVoterKey] = useState("u1");
// // // //   const [activeImage, setActiveImage] = useState<string | null>(null);
// // // //   const [loadingVote, setLoadingVote] = useState(false);

// // // //   async function load() {
// // // //     if (!id) return;
// // // //     setErr(null);
// // // //     try {
// // // //       const c = await apiGet<any>(`/complaints/${id}`);
// // // //       setData(c);
// // // //     } catch (e: any) {
// // // //       setErr(e.message || "Failed to load complaint");
// // // //     }
// // // //   }

// // // //   useEffect(() => { load(); }, [id]);

// // // //   async function vote(voteType: "CONFIRMED" | "NOT_FIXED") {
// // // //     setLoadingVote(true);
// // // //     setErr(null);
// // // //     try {
// // // //       await apiPost(`/complaints/${id}/validate`, { vote: voteType, voterKey });
// // // //       await load(); // Refresh data to show new counts
// // // //     } catch (e: any) {
// // // //       setErr(e.message || "Failed to submit vote");
// // // //     } finally {
// // // //       setLoadingVote(false);
// // // //     }
// // // //   }

// // // //   // Helper to handle absolute vs relative URLs
// // // //   const getImgUrl = (url: string) => {
// // // //     if (!url) return "";
// // // //     return url.startsWith("http") ? url : `${API_BASE}${url}`;
// // // //   };

// // // //   if (err) return <div className="p-10 text-red-500">Error: {err}</div>;
// // // //   if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500">Loading details...</div>;

// // // //   // Filter Media (Safe Fallback)
// // // //   // If 'source' is missing, assume it's a CITIZEN upload
// // // //   const citizenMedia = data.media?.filter((m: any) => !m.source || m.source === "CITIZEN") || [];
// // // //   const officerMedia = data.media?.filter((m: any) => m.source === "OFFICER") || [];




// // // //   return (
// // // //     <main className="min-h-screen bg-black text-zinc-100 p-6 md:p-10 flex justify-center">
// // // //       <div className="w-full max-w-3xl space-y-8">

// // // //         {/* Header */}
// // // //         <div className="space-y-4">
// // // //           <a className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition" href="/map">
// // // //             <ArrowLeft size={16} className="mr-2" /> Back to Map
// // // //           </a>

// // // //           <header>
// // // //             <h1 className="text-3xl font-bold text-white">{data.title}</h1>
// // // //             <div className="flex items-center gap-2 mt-2 text-sm text-zinc-400">
// // // //               <span className="px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs">
// // // //                 {data.ward?.name || "Unknown Ward"}
// // // //               </span>
// // // //               <span>•</span>
// // // //               <span className="text-blue-400">{data.category}</span>
// // // //               <span>•</span>
// // // //               <span className={`font-bold ${data.currentStatus === 'RESOLVED' ? 'text-green-400' : 'text-yellow-400'}`}>
// // // //                 {data.currentStatus}
// // // //               </span>
// // // //             </div>
// // // //           </header>
// // // //         </div>

// // // //         {/* Action Card: Citizen Validation */}
// // // //         <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-4">
// // // //           <div className="flex justify-between items-start">
// // // //             <div>
// // // //               <h2 className="text-lg font-semibold text-white">Citizen Validation</h2>
// // // //               <p className="text-sm text-zinc-500">Is this issue actually resolved?</p>
// // // //             </div>
// // // //             <div className="text-right text-sm">
// // // //               <div className="text-green-400 font-medium">{data.validationCounts?.confirmed ?? 0} Confirmed</div>
// // // //               <div className="text-red-400 font-medium">{data.validationCounts?.notFixed ?? 0} Disputed</div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="flex flex-col md:flex-row gap-4 items-center bg-black/20 p-3 rounded-xl border border-white/5">
// // // //             <input 
// // // //               className="bg-transparent border border-zinc-700 rounded-lg px-3 py-2 text-sm w-full md:w-32 focus:border-blue-500 outline-none transition" 
// // // //               value={voterKey} 
// // // //               onChange={(e) => setVoterKey(e.target.value)}
// // // //               placeholder="Voter ID"
// // // //             />
// // // //             <div className="flex gap-2 w-full">
// // // //               <button 
// // // //                 disabled={loadingVote}
// // // //                 className="flex-1 flex items-center justify-center gap-2 bg-green-900/30 border border-green-800 hover:bg-green-900/50 text-green-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// // // //                 onClick={() => vote("CONFIRMED")}
// // // //               >
// // // //                 <CheckCircle size={16} /> Fixed
// // // //               </button>
// // // //               <button 
// // // //                 disabled={loadingVote}
// // // //                 className="flex-1 flex items-center justify-center gap-2 bg-red-900/30 border border-red-800 hover:bg-red-900/50 text-red-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// // // //                 onClick={() => vote("NOT_FIXED")}
// // // //               >
// // // //                 <XCircle size={16} /> Not Fixed
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* Media Grids */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// // // //           {/* Column 1: Citizen Evidence */}
// // // //           <section className="space-y-3">
// // // //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// // // //               Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span>
// // // //             </h3>
// // // //             {citizenMedia.length > 0 ? (
// // // //               <div className="grid grid-cols-2 gap-2">
// // // //                 {citizenMedia.map((m: any) => (
// // // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-zinc-800 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="evidence" />
// // // //                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             ) : (
// // // //                <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// // // //                  No citizen photos
// // // //                </div>
// // // //             )}
// // // //           </section>

// // // //           {/* Column 2: Officer Proof */}
// // // //           <section className="space-y-3">
// // // //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// // // //               Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span>
// // // //             </h3>
// // // //             {officerMedia.length > 0 ? (
// // // //               <div className="grid grid-cols-2 gap-2">
// // // //                 {officerMedia.map((m: any) => (
// // // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-blue-900/50 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="proof" />
// // // //                     <div className="absolute inset-0 border-2 border-blue-500/50 rounded-xl pointer-events-none" />
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             ) : (
// // // //                <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// // // //                  Pending resolution
// // // //                </div>
// // // //             )}
// // // //           </section>

// // // //         </div>

// // // //         {/* Timeline */}
// // // //         <section className="pt-4 border-t border-zinc-800 space-y-4">
// // // //           <h3 className="font-semibold text-zinc-300">Activity Timeline</h3>
// // // //           <div className="space-y-0 relative border-l border-zinc-800 ml-2">
// // // //             {data.events.map((e: any) => (
// // // //               <div key={e.id} className="mb-6 ml-6 relative">
// // // //                 <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-zinc-900 border border-zinc-700" />
// // // //                 <div className="text-sm font-medium text-white">{e.type.replace(/_/g, " ")}</div>
// // // //                 <div className="text-xs text-zinc-500 mb-1">{new Date(e.createdAt).toLocaleString()}</div>
// // // //                 {e.data && Object.keys(e.data).length > 0 && (
// // // //                    <pre className="text-[10px] bg-zinc-900/50 p-2 rounded border border-zinc-800 overflow-x-auto text-zinc-400 mt-1 max-w-sm">
// // // //                      {JSON.stringify(e.data, null, 2)}
// // // //                    </pre>
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </section>

// // // //       </div>

// // // //       {/* Fullscreen Lightbox */}
// // // //       {activeImage && (
// // // //         <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setActiveImage(null)}>
// // // //           <button className="absolute top-6 right-6 text-white/50 hover:text-white transition">
// // // //             <X size={32} />
// // // //           </button>
// // // //           <img src={activeImage} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
// // // //         </div>
// // // //       )}

// // // //     </main>
// // // //   );
// // // // }

// // // "use client";

// // // import { useEffect, useState, use } from "react";
// // // import { apiGet, apiPost, API_BASE } from "@/lib/api";
// // // import { ArrowLeft, CheckCircle, XCircle, Maximize2, X } from "lucide-react"; 

// // // export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
// // //   const { id } = use(params);

// // //   const [data, setData] = useState<any>(null);
// // //   const [err, setErr] = useState<string | null>(null);
// // //   const [voterKey, setVoterKey] = useState("u1");
// // //   const [activeImage, setActiveImage] = useState<string | null>(null);
// // //   const [loadingVote, setLoadingVote] = useState(false);

// // //   async function load() {
// // //     if (!id) return;
// // //     setErr(null);
// // //     try {
// // //       const c = await apiGet<any>(`/complaints/${id}`);
// // //       setData(c);
// // //     } catch (e: any) {
// // //       setErr(e.message || "Failed to load complaint");
// // //     }
// // //   }

// // //   useEffect(() => { load(); }, [id]);

// // //   async function vote(voteType: "CONFIRMED" | "NOT_FIXED") {
// // //     setLoadingVote(true);
// // //     setErr(null);
// // //     try {
// // //       await apiPost(`/complaints/${id}/validate`, { vote: voteType, voterKey });
// // //       await load(); 
// // //     } catch (e: any) {
// // //       setErr(e.message || "Failed to submit vote");
// // //     } finally {
// // //       setLoadingVote(false);
// // //     }
// // //   }

// // //   const getImgUrl = (url: string) => {
// // //     if (!url) return "";
// // //     return url.startsWith("http") ? url : `${API_BASE}${url}`;
// // //   };

// // //   if (err) return <div className="p-10 text-red-500">Error: {err}</div>;
// // //   if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500">Loading details...</div>;

// // //   // ✅ FIX: SPLIT MEDIA BASED ON RESOLUTION EVENT DATA
// // //   // 1. Find the resolution event to get officer proof URLs
// // //   const resolvedEvent = data.events?.find((e: any) => e.type === 'RESOLVED');

// // //   // 2. Build a list of Officer URLs (Handle both new 'proofUrls' array and old 'proofUrl' string)
// // //   const officerUrls = resolvedEvent?.data?.proofUrls || 
// // //                       (resolvedEvent?.data?.proofUrl ? [resolvedEvent.data.proofUrl] : []);

// // //   // 3. Filter the master media list
// // //   const officerMedia = data.media?.filter((m: any) => officerUrls.includes(m.url)) || [];
// // //   const citizenMedia = data.media?.filter((m: any) => !officerUrls.includes(m.url)) || [];

// // //   return (
// // //     <main className="min-h-screen bg-black text-zinc-100 p-6 md:p-10 flex justify-center">
// // //       <div className="w-full max-w-3xl space-y-8">

// // //         {/* Header */}
// // //         <div className="space-y-4">
// // //           <a className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition" href="/map">
// // //             <ArrowLeft size={16} className="mr-2" /> Back to Map
// // //           </a>

// // //           <header>
// // //             <h1 className="text-3xl font-bold text-white">{data.title}</h1>
// // //             <div className="flex items-center gap-2 mt-2 text-sm text-zinc-400">
// // //               <span className="px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs">
// // //                 {data.ward?.name || "Unknown Ward"}
// // //               </span>
// // //               <span>•</span>
// // //               <span className="text-blue-400">{data.category}</span>
// // //               <span>•</span>
// // //               <span className={`font-bold ${data.currentStatus === 'RESOLVED' ? 'text-green-400' : 'text-yellow-400'}`}>
// // //                 {data.currentStatus}
// // //               </span>
// // //             </div>
// // //           </header>
// // //         </div>

// // //         {/* Action Card: Citizen Validation */}
// // //         <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-4">
// // //           <div className="flex justify-between items-start">
// // //             <div>
// // //               <h2 className="text-lg font-semibold text-white">Citizen Validation</h2>
// // //               <p className="text-sm text-zinc-500">Is this issue actually resolved?</p>
// // //             </div>
// // //             <div className="text-right text-sm">
// // //               <div className="text-green-400 font-medium">{data.validationCounts?.confirmed ?? 0} Confirmed</div>
// // //               <div className="text-red-400 font-medium">{data.validationCounts?.notFixed ?? 0} Disputed</div>
// // //             </div>
// // //           </div>

// // //           <div className="flex flex-col md:flex-row gap-4 items-center bg-black/20 p-3 rounded-xl border border-white/5">
// // //             <input 
// // //               className="bg-transparent border border-zinc-700 rounded-lg px-3 py-2 text-sm w-full md:w-32 focus:border-blue-500 outline-none transition" 
// // //               value={voterKey} 
// // //               onChange={(e) => setVoterKey(e.target.value)}
// // //               placeholder="Voter ID"
// // //             />
// // //             <div className="flex gap-2 w-full">
// // //               <button 
// // //                 disabled={loadingVote}
// // //                 className="flex-1 flex items-center justify-center gap-2 bg-green-900/30 border border-green-800 hover:bg-green-900/50 text-green-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// // //                 onClick={() => vote("CONFIRMED")}
// // //               >
// // //                 <CheckCircle size={16} /> Fixed
// // //               </button>
// // //               <button 
// // //                 disabled={loadingVote}
// // //                 className="flex-1 flex items-center justify-center gap-2 bg-red-900/30 border border-red-800 hover:bg-red-900/50 text-red-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// // //                 onClick={() => vote("NOT_FIXED")}
// // //               >
// // //                 <XCircle size={16} /> Not Fixed
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Media Grids */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// // //           {/* Column 1: Citizen Evidence */}
// // //           <section className="space-y-3">
// // //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// // //               Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span>
// // //             </h3>
// // //             {citizenMedia.length > 0 ? (
// // //               <div className="grid grid-cols-2 gap-2">
// // //                 {citizenMedia.map((m: any) => (
// // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-zinc-800 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="evidence" />
// // //                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             ) : (
// // //                <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// // //                  No citizen photos
// // //                </div>
// // //             )}
// // //           </section>

// // //           {/* Column 2: Officer Proof */}
// // //           <section className="space-y-3">
// // //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// // //               Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span>
// // //             </h3>
// // //             {officerMedia.length > 0 ? (
// // //               <div className="grid grid-cols-2 gap-2">
// // //                 {officerMedia.map((m: any) => (
// // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-blue-900/50 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="proof" />
// // //                     <div className="absolute inset-0 border-2 border-blue-500/50 rounded-xl pointer-events-none" />
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             ) : (
// // //                <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// // //                  Pending resolution
// // //                </div>
// // //             )}
// // //           </section>

// // //         </div>

// // //         {/* Timeline */}
// // //         <section className="pt-4 border-t border-zinc-800 space-y-4">
// // //           <h3 className="font-semibold text-zinc-300">Activity Timeline</h3>
// // //           <div className="space-y-0 relative border-l border-zinc-800 ml-2">
// // //             {data.events.map((e: any) => (
// // //               <div key={e.id} className="mb-6 ml-6 relative">
// // //                 <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-zinc-900 border border-zinc-700" />
// // //                 <div className="text-sm font-medium text-white">{e.type.replace(/_/g, " ")}</div>
// // //                 <div className="text-xs text-zinc-500 mb-1">{new Date(e.createdAt).toLocaleString()}</div>
// // //                 {e.data && Object.keys(e.data).length > 0 && (
// // //                    <pre className="text-[10px] bg-zinc-900/50 p-2 rounded border border-zinc-800 overflow-x-auto text-zinc-400 mt-1 max-w-sm">
// // //                      {JSON.stringify(e.data, null, 2)}
// // //                    </pre>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </section>

// // //       </div>

// // //       {/* Fullscreen Lightbox */}
// // //       {activeImage && (
// // //         <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setActiveImage(null)}>
// // //           <button className="absolute top-6 right-6 text-white/50 hover:text-white transition">
// // //             <X size={32} />
// // //           </button>
// // //           <img src={activeImage} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
// // //         </div>
// // //       )}

// // //     </main>
// // //   );
// // // }

// // "use client";

// // import { useEffect, useState, use } from "react";
// // import { apiGet, apiPost, API_BASE } from "@/lib/api";
// // // ✅ UPDATED IMPORTS: Added User, Building2, MapPin, HelpCircle
// // import { ArrowLeft, CheckCircle, XCircle, Maximize2, X, User, Building2, MapPin, HelpCircle } from "lucide-react"; 

// // export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
// //   const { id } = use(params);

// //   const [data, setData] = useState<any>(null);
// //   const [err, setErr] = useState<string | null>(null);
// //   const [voterKey, setVoterKey] = useState("u1");
// //   const [activeImage, setActiveImage] = useState<string | null>(null);
// //   const [loadingVote, setLoadingVote] = useState(false);

// //   async function load() {
// //     if (!id) return;
// //     setErr(null);
// //     try {
// //       const c = await apiGet<any>(`/complaints/${id}`);
// //       setData(c);
// //     } catch (e: any) {
// //       setErr(e.message || "Failed to load complaint");
// //     }
// //   }

// //   useEffect(() => { load(); }, [id]);

// //   async function vote(voteType: "CONFIRMED" | "NOT_FIXED") {
// //     setLoadingVote(true);
// //     setErr(null);
// //     try {
// //       await apiPost(`/complaints/${id}/validate`, { vote: voteType, voterKey });
// //       await load(); 
// //     } catch (e: any) {
// //       setErr(e.message || "Failed to submit vote");
// //     } finally {
// //       setLoadingVote(false);
// //     }
// //   }

// //   const getImgUrl = (url: string) => {
// //     if (!url) return "";
// //     return url.startsWith("http") ? url : `${API_BASE}${url}`;
// //   };

// //   if (err) return <div className="p-10 text-red-500">Error: {err}</div>;
// //   if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500">Loading details...</div>;

// //   // 1. Find the resolution event to get officer proof URLs
// //   const resolvedEvent = data.events?.find((e: any) => e.type === 'RESOLVED');

// //   // 2. Build a list of Officer URLs
// //   const officerUrls = resolvedEvent?.data?.proofUrls || 
// //                       (resolvedEvent?.data?.proofUrl ? [resolvedEvent.data.proofUrl] : []);

// //   // 3. Filter the master media list
// //   const officerMedia = data.media?.filter((m: any) => officerUrls.includes(m.url)) || [];
// //   const citizenMedia = data.media?.filter((m: any) => !officerUrls.includes(m.url)) || [];

// //   return (
// //     <main className="min-h-screen bg-black text-zinc-100 p-6 md:p-10 flex justify-center">
// //       <div className="w-full max-w-3xl space-y-8">

// //         {/* Header */}
// //         <div className="space-y-4">
// //           <a className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition" href="/map">
// //             <ArrowLeft size={16} className="mr-2" /> Back to Map
// //           </a>

// //           <header>
// //             <h1 className="text-3xl font-bold text-white">{data.title}</h1>
// //             <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-zinc-400">

// //               {/* Status Badge */}
// //               <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide border ${
// //                   data.currentStatus === 'RESOLVED' 
// //                     ? 'bg-green-900/30 border-green-800 text-green-400' 
// //                     : 'bg-blue-900/30 border-blue-800 text-blue-400'
// //                 }`}>
// //                 {data.currentStatus.replace(/_/g, " ")}
// //               </span>

// //               <span>•</span>
// //               <span className="text-blue-400">{data.category}</span>
// //               <span>•</span>
// //               <span className="text-zinc-500">{new Date(data.createdAt).toLocaleDateString()}</span>

// //             </div>
// //           </header>

// //           {/* ✅ NEW SECTION: Context Cards (Ward, Dept, Officer) */}
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

// //             {/* Ward Card */}
// //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// //               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
// //                  <MapPin size={18} />
// //               </div>
// //               <div>
// //                  <div className="text-[10px] text-zinc-500 uppercase font-bold">Ward Zone</div>
// //                  <div className="text-sm font-medium text-white">{data.ward?.name || "Unknown"}</div>
// //               </div>
// //             </div>

// //             {/* Dept Card */}
// //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// //               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
// //                  <Building2 size={18} />
// //               </div>
// //               <div>
// //                  <div className="text-[10px] text-zinc-500 uppercase font-bold">Department</div>
// //                  <div className="text-sm font-medium text-white">{data.department?.name || "Unassigned"}</div>
// //               </div>
// //             </div>

// //             {/* ✅ OFFICER CARD */}
// //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// //               <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
// //                 ${data.assignedOfficer ? 'bg-purple-900/30 text-purple-400' : 'bg-zinc-800 text-zinc-600'}
// //               `}>
// //                 {data.assignedOfficer ? <User size={18} /> : <HelpCircle size={18} />}
// //               </div>
// //               <div>
// //                 <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
// //                   Officer In-Charge
// //                 </div>
// //                 <div className="text-sm font-medium text-white">
// //                   {data.assignedOfficer?.name || "Pending..."}
// //                 </div>
// //               </div>
// //             </div>

// //           </div>
// //         </div>

// //         {/* Action Card: Citizen Validation */}
// //         <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-4">
// //           <div className="flex justify-between items-start">
// //             <div>
// //               <h2 className="text-lg font-semibold text-white">Citizen Validation</h2>
// //               <p className="text-sm text-zinc-500">Is this issue actually resolved?</p>
// //             </div>
// //             <div className="text-right text-sm">
// //               <div className="text-green-400 font-medium">{data.validationCounts?.confirmed ?? 0} Confirmed</div>
// //               <div className="text-red-400 font-medium">{data.validationCounts?.notFixed ?? 0} Disputed</div>
// //             </div>
// //           </div>

// //           <div className="flex flex-col md:flex-row gap-4 items-center bg-black/20 p-3 rounded-xl border border-white/5">
// //             <input 
// //               className="bg-transparent border border-zinc-700 rounded-lg px-3 py-2 text-sm w-full md:w-32 focus:border-blue-500 outline-none transition" 
// //               value={voterKey} 
// //               onChange={(e) => setVoterKey(e.target.value)}
// //               placeholder="Voter ID"
// //             />
// //             <div className="flex gap-2 w-full">
// //               <button 
// //                 disabled={loadingVote}
// //                 className="flex-1 flex items-center justify-center gap-2 bg-green-900/30 border border-green-800 hover:bg-green-900/50 text-green-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// //                 onClick={() => vote("CONFIRMED")}
// //               >
// //                 <CheckCircle size={16} /> Fixed
// //               </button>
// //               <button 
// //                 disabled={loadingVote}
// //                 className="flex-1 flex items-center justify-center gap-2 bg-red-900/30 border border-red-800 hover:bg-red-900/50 text-red-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// //                 onClick={() => vote("NOT_FIXED")}
// //               >
// //                 <XCircle size={16} /> Not Fixed
// //               </button>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Media Grids */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// //           {/* Column 1: Citizen Evidence */}
// //           <section className="space-y-3">
// //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// //               Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span>
// //             </h3>
// //             {citizenMedia.length > 0 ? (
// //               <div className="grid grid-cols-2 gap-2">
// //                 {citizenMedia.map((m: any) => (
// //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-zinc-800 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="evidence" />
// //                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //                <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// //                  No citizen photos
// //                </div>
// //             )}
// //           </section>

// //           {/* Column 2: Officer Proof */}
// //           <section className="space-y-3">
// //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// //               Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span>
// //             </h3>
// //             {officerMedia.length > 0 ? (
// //               <div className="grid grid-cols-2 gap-2">
// //                 {officerMedia.map((m: any) => (
// //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-blue-900/50 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="proof" />
// //                     <div className="absolute inset-0 border-2 border-blue-500/50 rounded-xl pointer-events-none" />
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //                <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// //                  Pending resolution
// //                </div>
// //             )}
// //           </section>

// //         </div>

// //         {/* Timeline */}
// //         <section className="pt-4 border-t border-zinc-800 space-y-4">
// //           <h3 className="font-semibold text-zinc-300">Activity Timeline</h3>
// //           <div className="space-y-0 relative border-l border-zinc-800 ml-2">
// //             {data.events.map((e: any) => (
// //               <div key={e.id} className="mb-6 ml-6 relative">
// //                 <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-zinc-900 border border-zinc-700" />
// //                 <div className="text-sm font-medium text-white">{e.type.replace(/_/g, " ")}</div>
// //                 <div className="text-xs text-zinc-500 mb-1">{new Date(e.createdAt).toLocaleString()}</div>
// //                 {e.data && Object.keys(e.data).length > 0 && (
// //                    <pre className="text-[10px] bg-zinc-900/50 p-2 rounded border border-zinc-800 overflow-x-auto text-zinc-400 mt-1 max-w-sm">
// //                      {JSON.stringify(e.data, null, 2)}
// //                    </pre>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //       </div>

// //       {/* Fullscreen Lightbox */}
// //       {activeImage && (
// //         <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setActiveImage(null)}>
// //           <button className="absolute top-6 right-6 text-white/50 hover:text-white transition">
// //             <X size={32} />
// //           </button>
// //           <img src={activeImage} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
// //         </div>
// //       )}

// //     </main>
// //   );
// // }


// "use client";

// import { useEffect, useState, use } from "react";
// import { apiGet, apiPost, API_BASE } from "@/lib/api";
// import {
//   ArrowLeft, CheckCircle, XCircle, X, User,
//   Building2, MapPin, HelpCircle, ThumbsUp, AlertTriangle, Users,
//   Activity, FileText, Hammer, CheckCircle2 // 👈 Ensure these last 4 are added!
// } from "lucide-react";

// export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params);

//   const [data, setData] = useState<any>(null);
//   const [err, setErr] = useState<string | null>(null);
//   const [voterKey, setVoterKey] = useState("u1");
//   const [activeImage, setActiveImage] = useState<string | null>(null);

//   // Loading states
//   const [loadingVote, setLoadingVote] = useState(false);
//   const [loadingSignal, setLoadingSignal] = useState(false);

//   async function load() {
//     if (!id) return;
//     setErr(null);
//     try {
//       const c = await apiGet<any>(`/complaints/${id}`);
//       setData(c);
//     } catch (e: any) {
//       setErr(e.message || "Failed to load complaint");
//     }
//   }

//   useEffect(() => { load(); }, [id]);

//   // --- HANDLERS ---
//   async function vote(voteType: "CONFIRMED" | "NOT_FIXED") {
//     setLoadingVote(true);
//     setErr(null);
//     try {
//       await apiPost(`/complaints/${id}/validate`, { vote: voteType, voterKey });
//       await load();
//     } catch (e: any) {
//       setErr(e.message || "Failed to submit vote");
//     } finally {
//       setLoadingVote(false);
//     }
//   }

//   // ✅ NEW: Handler for Community Impact Poll
//   async function handleSignal(type: "UPVOTE" | "STILL_PRESENT") {
//     setLoadingSignal(true);
//     setErr(null);
//     try {
//       await apiPost(`/complaints/${id}/signal`, { type });
//       await load(); // Reload to get updated counts
//     } catch (e: any) {
//       setErr(e.message || "Failed to submit signal");
//     } finally {
//       setLoadingSignal(false);
//     }
//   }

//   const getImgUrl = (url: string) => {
//     if (!url) return "";
//     return url.startsWith("http") ? url : `${API_BASE}${url}`;
//   };

//   if (err) return <div className="p-10 text-red-500">Error: {err}</div>;
//   if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500">Loading details...</div>;

//   // 1. Calculate Media
//   const resolvedEvent = data.events?.find((e: any) => e.type === 'RESOLVED');
//   const officerUrls = resolvedEvent?.data?.proofUrls ||
//     (resolvedEvent?.data?.proofUrl ? [resolvedEvent.data.proofUrl] : []);
//   const officerMedia = data.media?.filter((m: any) => officerUrls.includes(m.url)) || [];
//   const citizenMedia = data.media?.filter((m: any) => !officerUrls.includes(m.url)) || [];

//   // 2. Calculate Signals (Poll Counts)
//   const upvotesCount = data.signals?.filter((s: any) => s.type === 'UPVOTE').length || 0;
//   const stillPresentCount = data.signals?.filter((s: any) => s.type === 'STILL_PRESENT').length || 0;

//   return (
//     <main className="min-h-screen bg-black text-zinc-100 p-6 md:p-10 flex justify-center">
//       <div className="w-full max-w-3xl space-y-8">

//         {/* Header */}
//         {/* Premium Navigation Pill */}
//         <div className="mb-6">
//           <div className="inline-flex items-center p-1.5 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl shadow-xl">
//             <a 
//               href="/" 
//               className="group flex items-center gap-2.5 px-4 py-2 rounded-xl text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300"
//             >
//               <span className="p-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition-all">
//                 <ArrowLeft size={14} strokeWidth={2.5} />
//               </span>
//               Dashboard
//             </a>
            
//             <div className="w-px h-6 bg-zinc-800 mx-2" />
            
//             <a 
//               href="/map" 
//               className="group flex items-center gap-2.5 px-4 py-2 rounded-xl text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300"
//             >
//               <span className="p-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
//                 <MapPin size={14} strokeWidth={2.5} />
//               </span>
//               Live Map
//             </a>
//           </div>

//           <header>
//             <h1 className="text-3xl font-bold text-white">{data.title}</h1>
//             <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-zinc-400">
//               <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide border ${data.currentStatus === 'RESOLVED'
//                 ? 'bg-green-900/30 border-green-800 text-green-400'
//                 : 'bg-blue-900/30 border-blue-800 text-blue-400'
//                 }`}>
//                 {data.currentStatus.replace(/_/g, " ")}
//               </span>
//               <span>•</span>
//               <span className="text-blue-400">{data.category}</span>
//               <span>•</span>
//               <span className="text-zinc-500">{new Date(data.createdAt).toLocaleDateString()}</span>
//             </div>
//           </header>

//           {/* Context Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
//                 <MapPin size={18} />
//               </div>
//               <div>
//                 <div className="text-[10px] text-zinc-500 uppercase font-bold">Ward Zone</div>
//                 <div className="text-sm font-medium text-white">{data.ward?.name || "Unknown"}</div>
//               </div>
//             </div>

//             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
//                 <Building2 size={18} />
//               </div>
//               <div>
//                 <div className="text-[10px] text-zinc-500 uppercase font-bold">Department</div>
//                 <div className="text-sm font-medium text-white">{data.department?.name || "Unassigned"}</div>
//               </div>
//             </div>

//             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
//                 ${data.assignedOfficer ? 'bg-purple-900/30 text-purple-400' : 'bg-zinc-800 text-zinc-600'}
//               `}>
//                 {data.assignedOfficer ? <User size={18} /> : <HelpCircle size={18} />}
//               </div>
//               <div>
//                 <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Officer In-Charge</div>
//                 <div className="text-sm font-medium text-white">{data.assignedOfficer?.name || "Pending..."}</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ✅ NEW SECTION: Community Impact Poll */}
//         {data.currentStatus !== 'RESOLVED' && (
//           <section className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 space-y-4">
//             <div>
//               <h2 className="text-lg font-semibold text-white flex items-center gap-2">
//                 <Users size={20} className="text-blue-400" />
//                 Community Impact
//               </h2>
//               <p className="text-sm text-zinc-500">Are you also affected by this issue? Your vote helps prioritize.</p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               <button
//                 disabled={loadingSignal}
//                 onClick={() => handleSignal("UPVOTE")}
//                 className="group flex items-center justify-between p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-blue-500/50 transition-all active:scale-[0.98] disabled:opacity-50"
//               >
//                 <div className="flex items-center gap-3 text-zinc-300 group-hover:text-blue-400 transition">
//                   <ThumbsUp size={18} />
//                   <span className="font-medium text-sm">Experiencing this too</span>
//                 </div>
//                 <span className="bg-zinc-950 px-3 py-1 rounded-full text-sm font-bold text-zinc-400 border border-zinc-800">
//                   {upvotesCount}
//                 </span>
//               </button>

//               <button
//                 disabled={loadingSignal}
//                 onClick={() => handleSignal("STILL_PRESENT")}
//                 className="group flex items-center justify-between p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-orange-500/50 transition-all active:scale-[0.98] disabled:opacity-50"
//               >
//                 <div className="flex items-center gap-3 text-zinc-300 group-hover:text-orange-400 transition">
//                   <AlertTriangle size={18} />
//                   <span className="font-medium text-sm">Issue is still present</span>
//                 </div>
//                 <span className="bg-zinc-950 px-3 py-1 rounded-full text-sm font-bold text-zinc-400 border border-zinc-800">
//                   {stillPresentCount}
//                 </span>
//               </button>
//             </div>
//           </section>
//         )}

//         {/* Action Card: Citizen Validation (Only highly relevant if RESOLVED) */}
//         {data.currentStatus === 'RESOLVED' && (
//           <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-4">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h2 className="text-lg font-semibold text-white">Citizen Validation</h2>
//                 <p className="text-sm text-zinc-500">Is this issue actually resolved?</p>
//               </div>
//               <div className="text-right text-sm">
//                 <div className="text-green-400 font-medium">{data.validationCounts?.confirmed ?? 0} Confirmed</div>
//                 <div className="text-red-400 font-medium">{data.validationCounts?.notFixed ?? 0} Disputed</div>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row gap-4 items-center bg-black/20 p-3 rounded-xl border border-white/5">
//               <input
//                 className="bg-transparent border border-zinc-700 rounded-lg px-3 py-2 text-sm w-full md:w-32 focus:border-blue-500 outline-none transition"
//                 value={voterKey}
//                 onChange={(e) => setVoterKey(e.target.value)}
//                 placeholder="Voter ID"
//               />
//               <div className="flex gap-2 w-full">
//                 <button
//                   disabled={loadingVote}
//                   className="flex-1 flex items-center justify-center gap-2 bg-green-900/30 border border-green-800 hover:bg-green-900/50 text-green-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
//                   onClick={() => vote("CONFIRMED")}
//                 >
//                   <CheckCircle size={16} /> Fixed
//                 </button>
//                 <button
//                   disabled={loadingVote}
//                   className="flex-1 flex items-center justify-center gap-2 bg-red-900/30 border border-red-800 hover:bg-red-900/50 text-red-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
//                   onClick={() => vote("NOT_FIXED")}
//                 >
//                   <XCircle size={16} /> Not Fixed
//                 </button>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* Media Grids */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <section className="space-y-3">
//             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
//               Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span>
//             </h3>
//             {citizenMedia.length > 0 ? (
//               <div className="grid grid-cols-2 gap-2">
//                 {citizenMedia.map((m: any) => (
//                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-zinc-800 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
//                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="evidence" />
//                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
//                 No citizen photos
//               </div>
//             )}
//           </section>

//           <section className="space-y-3">
//             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
//               Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span>
//             </h3>
//             {officerMedia.length > 0 ? (
//               <div className="grid grid-cols-2 gap-2">
//                 {officerMedia.map((m: any) => (
//                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-blue-900/50 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
//                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="proof" />
//                     <div className="absolute inset-0 border-2 border-blue-500/50 rounded-xl pointer-events-none" />
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
//                 Pending resolution
//               </div>
//             )}
//           </section>
//         </div>

//         {/* Timeline */}
//         <section className="pt-4 border-t border-zinc-800 space-y-4">
//           <h3 className="font-semibold text-zinc-300">Activity Timeline</h3>
//           <div className="space-y-0 relative border-l-2 border-zinc-800/50 ml-4 pl-8">

//             {data.events
//               .filter((e: any) => e.type !== 'UPVOTED')
//               .map((e: any, idx: number, arr: any[]) => {
//                 const isLast = idx === arr.length - 1;
//                 let Icon = Activity;
//                 let colorClass = "text-zinc-400 bg-zinc-900 border-zinc-700";

//                 // Determine icon and color based on event type
//                 switch (e.type) {
//                   case 'CREATED':
//                     Icon = FileText;
//                     colorClass = "text-blue-400 bg-blue-900/20 border-blue-500/50";
//                     break;
//                   case 'ACKNOWLEDGED':
//                   case 'ASSIGNED':
//                     Icon = User;
//                     colorClass = "text-purple-400 bg-purple-900/20 border-purple-500/50";
//                     break;
//                   case 'WORK_IN_PROGRESS':
//                     Icon = Hammer;
//                     colorClass = "text-orange-400 bg-orange-900/20 border-orange-500/50";
//                     break;
//                   case 'RESOLVED':
//                     Icon = CheckCircle2;
//                     colorClass = "text-green-400 bg-green-900/20 border-green-500/50";
//                     break;
//                   case 'REOPENED':
//                   case 'REJECTED':
//                     Icon = AlertTriangle;
//                     colorClass = "text-red-400 bg-red-900/20 border-red-500/50";
//                     break;
//                 }

//                 return (
//                   <div key={e.id} className="relative pb-8 group">
//                     {/* Timeline Dot/Icon */}
//                     <div className={`
//                       absolute -left-[49px] top-0 w-8 h-8 rounded-full border flex items-center justify-center z-10
//                       ${colorClass} ${isLast ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-110' : ''}
//                     `}>
//                       <Icon size={14} />
//                     </div>

//                     {/* Content Card */}
//                     <div className="flex flex-col bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-xl hover:bg-zinc-900/80 transition shadow-sm">
//                       <div className="flex justify-between items-start mb-2">
//                         <span className={`text-sm font-bold ${isLast ? 'text-white' : 'text-zinc-300'}`}>
//                           {e.type.replace(/_/g, " ")}
//                         </span>
//                         <span className="text-[11px] text-zinc-500 font-mono bg-black/30 px-2 py-1 rounded">
//                           {new Date(e.createdAt).toLocaleString(undefined, {
//                             month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
//                           })}
//                         </span>
//                       </div>

//                       {/* Smart Data Rendering (Instead of JSON) */}
//                       {e.data && (
//                         <div className="mt-1 text-sm text-zinc-400">
//                           {e.type === 'CREATED' && (
//                             <p>Report successfully logged into the system.</p>
//                           )}

//                           {e.data.note && (
//                             <div className="mt-2 text-zinc-300 bg-black/40 border-l-2 border-zinc-600 pl-3 py-2 rounded-r-md italic">
//                               "{e.data.note}"
//                             </div>
//                           )}

//                           {e.data.reason && (
//                             <p className="mt-2 text-red-400 font-medium">Reason: {e.data.reason}</p>
//                           )}
//                         </div>
//                       )}

//                       {/* Actor Badge */}
//                       {e.actorRole && e.type !== 'CREATED' && (
//                         <div className="mt-3 flex items-center">
//                           <span className="text-[9px] uppercase tracking-wider font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
//                             Action by {e.actorRole}
//                           </span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//           </div>
//         </section>

//       </div>

//       {/* Fullscreen Lightbox */}
//       {activeImage && (
//         <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setActiveImage(null)}>
//           <button className="absolute top-6 right-6 text-white/50 hover:text-white transition">
//             <X size={32} />
//           </button>
//           <img src={activeImage} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
//         </div>
//       )}
//     </main>
//   );
// }


"use client";

import { useEffect, useState, use } from "react";
import { apiGet, apiPost, API_BASE } from "@/lib/api";
import {
  ArrowLeft, CheckCircle, XCircle, X, User,
  Building2, MapPin, HelpCircle, ThumbsUp, AlertTriangle, Users,
  Activity, FileText, Hammer, CheckCircle2 
} from "lucide-react";

export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);
  const [voterKey, setVoterKey] = useState("u1");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Loading states
  const [loadingVote, setLoadingVote] = useState(false);
  const [loadingSignal, setLoadingSignal] = useState(false);

  async function load() {
    if (!id) return;
    setErr(null);
    try {
      const c = await apiGet<any>(`/complaints/${id}`);
      setData(c);
    } catch (e: any) {
      setErr(e.message || "Failed to load complaint");
    }
  }

  useEffect(() => { load(); }, [id]);

  // --- HANDLERS ---
  async function vote(voteType: "CONFIRMED" | "NOT_FIXED") {
    setLoadingVote(true);
    setErr(null);
    try {
      await apiPost(`/complaints/${id}/validate`, { vote: voteType, voterKey });
      await load();
    } catch (e: any) {
      setErr(e.message || "Failed to submit vote");
    } finally {
      setLoadingVote(false);
    }
  }

  async function handleSignal(type: "UPVOTE" | "STILL_PRESENT") {
    setLoadingSignal(true);
    setErr(null);
    try {
      await apiPost(`/complaints/${id}/signal`, { type });
      await load(); // Reload to get updated counts
    } catch (e: any) {
      setErr(e.message || "Failed to submit signal");
    } finally {
      setLoadingSignal(false);
    }
  }

  const getImgUrl = (url: string) => {
    if (!url) return "";
    return url.startsWith("http") ? url : `${API_BASE}${url}`;
  };

  if (err) return <div className="p-6 sm:p-10 text-red-500 text-sm sm:text-base">Error: {err}</div>;
  if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500 text-sm sm:text-base">Loading details...</div>;

  // 1. Calculate Media
  const resolvedEvent = data.events?.find((e: any) => e.type === 'RESOLVED');
  const officerUrls = resolvedEvent?.data?.proofUrls ||
    (resolvedEvent?.data?.proofUrl ? [resolvedEvent.data.proofUrl] : []);
  const officerMedia = data.media?.filter((m: any) => officerUrls.includes(m.url)) || [];
  const citizenMedia = data.media?.filter((m: any) => !officerUrls.includes(m.url)) || [];

  // 2. Calculate Signals (Poll Counts)
  const upvotesCount = data.signals?.filter((s: any) => s.type === 'UPVOTE').length || 0;
  const stillPresentCount = data.signals?.filter((s: any) => s.type === 'STILL_PRESENT').length || 0;

  return (
    <main className="min-h-screen bg-black text-zinc-100 p-4 sm:p-6 md:p-10 flex justify-center">
      <div className="w-full max-w-3xl space-y-6 sm:space-y-8">

        {/* Header */}
        <div className="mb-4 sm:mb-6">
          {/* Premium Navigation Pill */}
          <div className="inline-flex items-center p-1 sm:p-1.5 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-xl sm:rounded-2xl shadow-xl mb-4 sm:mb-6 overflow-x-auto max-w-full">
            <a 
              href="/" 
              className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300 whitespace-nowrap"
            >
              <span className="p-1 rounded-md sm:rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition-all">
                <ArrowLeft size={14} strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
              Dashboard
            </a>
            
            <div className="w-px h-5 sm:h-6 bg-zinc-800 mx-1 sm:mx-2 shrink-0" />
            
            <a 
              href="/map" 
              className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300 whitespace-nowrap"
            >
              <span className="p-1 rounded-md sm:rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
                <MapPin size={14} strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
              Live Map
            </a>
          </div>

          <header>
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{data.title}</h1>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-xs sm:text-sm text-zinc-400">
              <span className={`px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wide border ${data.currentStatus === 'RESOLVED'
                ? 'bg-green-900/30 border-green-800 text-green-400'
                : 'bg-blue-900/30 border-blue-800 text-blue-400'
                }`}>
                {data.currentStatus.replace(/_/g, " ")}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="text-blue-400 font-medium">{data.category}</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-zinc-500">{new Date(data.createdAt).toLocaleDateString()}</span>
            </div>
          </header>

          {/* Context Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
                <MapPin size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-zinc-500 uppercase font-bold truncate">Ward Zone</div>
                <div className="text-sm font-medium text-white truncate">{data.ward?.name || "Unknown"}</div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
                <Building2 size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-zinc-500 uppercase font-bold truncate">Department</div>
                <div className="text-sm font-medium text-white truncate">{data.department?.name || "Unassigned"}</div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3 sm:col-span-2 md:col-span-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0
                ${data.assignedOfficer ? 'bg-purple-900/30 text-purple-400' : 'bg-zinc-800 text-zinc-600'}
              `}>
                {data.assignedOfficer ? <User size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> : <HelpCircle size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider truncate">Officer In-Charge</div>
                <div className="text-sm font-medium text-white truncate">{data.assignedOfficer?.name || "Pending..."}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Impact Poll */}
        {data.currentStatus !== 'RESOLVED' && (
          <section className="bg-zinc-900/30 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4">
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                <Users size={20} className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                Community Impact
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">Are you also affected by this issue? Your vote helps prioritize.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                disabled={loadingSignal}
                onClick={() => handleSignal("UPVOTE")}
                className="group flex items-center justify-between p-3 sm:p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-blue-500/50 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 text-zinc-300 group-hover:text-blue-400 transition">
                  <ThumbsUp size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  <span className="font-medium text-xs sm:text-sm">Experiencing this too</span>
                </div>
                <span className="bg-zinc-950 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold text-zinc-400 border border-zinc-800">
                  {upvotesCount}
                </span>
              </button>

              <button
                disabled={loadingSignal}
                onClick={() => handleSignal("STILL_PRESENT")}
                className="group flex items-center justify-between p-3 sm:p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-orange-500/50 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 text-zinc-300 group-hover:text-orange-400 transition">
                  <AlertTriangle size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  <span className="font-medium text-xs sm:text-sm">Issue is still present</span>
                </div>
                <span className="bg-zinc-950 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold text-zinc-400 border border-zinc-800">
                  {stillPresentCount}
                </span>
              </button>
            </div>
          </section>
        )}

        {/* Action Card: Citizen Validation */}
        {data.currentStatus === 'RESOLVED' && (
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-white">Citizen Validation</h2>
                <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">Is this issue actually resolved?</p>
              </div>
              <div className="text-left sm:text-right text-xs sm:text-sm flex gap-3 sm:block">
                <div className="text-green-400 font-medium">{data.validationCounts?.confirmed ?? 0} Confirmed</div>
                <div className="text-red-400 font-medium">{data.validationCounts?.notFixed ?? 0} Disputed</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-center bg-black/20 p-3 rounded-xl border border-white/5">
              <input
                className="bg-transparent border border-zinc-700 rounded-lg px-3 py-2 text-xs sm:text-sm w-full md:w-32 focus:border-blue-500 outline-none transition"
                value={voterKey}
                onChange={(e) => setVoterKey(e.target.value)}
                placeholder="Voter ID"
              />
              <div className="flex flex-row gap-2 w-full">
                <button
                  disabled={loadingVote}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-green-900/30 border border-green-800 hover:bg-green-900/50 text-green-400 px-3 sm:px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50 text-xs sm:text-sm font-medium"
                  onClick={() => vote("CONFIRMED")}
                >
                  <CheckCircle size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Fixed
                </button>
                <button
                  disabled={loadingVote}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-red-900/30 border border-red-800 hover:bg-red-900/50 text-red-400 px-3 sm:px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50 text-xs sm:text-sm font-medium"
                  onClick={() => vote("NOT_FIXED")}
                >
                  <XCircle size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Not Fixed
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Media Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <section className="space-y-3">
            <h3 className="font-semibold text-sm sm:text-base text-zinc-300 flex items-center gap-2">
              Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span>
            </h3>
            {citizenMedia.length > 0 ? (
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {citizenMedia.map((m: any) => (
                  <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-zinc-800 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
                    <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="evidence" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-24 sm:h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-xs sm:text-sm">
                No citizen photos
              </div>
            )}
          </section>

          <section className="space-y-3">
            <h3 className="font-semibold text-sm sm:text-base text-zinc-300 flex items-center gap-2">
              Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span>
            </h3>
            {officerMedia.length > 0 ? (
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {officerMedia.map((m: any) => (
                  <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-blue-900/50 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
                    <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="proof" />
                    <div className="absolute inset-0 border-2 border-blue-500/50 rounded-xl pointer-events-none" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-24 sm:h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-xs sm:text-sm">
                Pending resolution
              </div>
            )}
          </section>
        </div>

        {/* Timeline */}
        <section className="pt-4 sm:pt-6 border-t border-zinc-800 space-y-4">
          <h3 className="font-semibold text-sm sm:text-base text-zinc-300">Activity Timeline</h3>
          <div className="space-y-0 relative border-l-2 border-zinc-800/50 ml-3 sm:ml-4 pl-6 sm:pl-8">

            {data.events
              .filter((e: any) => e.type !== 'UPVOTED')
              .map((e: any, idx: number, arr: any[]) => {
                const isLast = idx === arr.length - 1;
                let Icon = Activity;
                let colorClass = "text-zinc-400 bg-zinc-900 border-zinc-700";

                // Determine icon and color based on event type
                switch (e.type) {
                  case 'CREATED':
                    Icon = FileText;
                    colorClass = "text-blue-400 bg-blue-900/20 border-blue-500/50";
                    break;
                  case 'ACKNOWLEDGED':
                  case 'ASSIGNED':
                    Icon = User;
                    colorClass = "text-purple-400 bg-purple-900/20 border-purple-500/50";
                    break;
                  case 'WORK_IN_PROGRESS':
                    Icon = Hammer;
                    colorClass = "text-orange-400 bg-orange-900/20 border-orange-500/50";
                    break;
                  case 'RESOLVED':
                    Icon = CheckCircle2;
                    colorClass = "text-green-400 bg-green-900/20 border-green-500/50";
                    break;
                  case 'REOPENED':
                  case 'REJECTED':
                    Icon = AlertTriangle;
                    colorClass = "text-red-400 bg-red-900/20 border-red-500/50";
                    break;
                }

                return (
                  <div key={e.id} className="relative pb-6 sm:pb-8 group">
                    {/* Timeline Dot/Icon */}
                    <div className={`
                      absolute -left-[41px] sm:-left-[49px] top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center z-10
                      ${colorClass} ${isLast ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-110' : ''}
                    `}>
                      <Icon size={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>

                    {/* Content Card */}
                    <div className="flex flex-col bg-zinc-900/30 border border-zinc-800/50 p-3 sm:p-4 rounded-xl hover:bg-zinc-900/80 transition shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                        <span className={`text-xs sm:text-sm font-bold ${isLast ? 'text-white' : 'text-zinc-300'}`}>
                          {e.type.replace(/_/g, " ")}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-zinc-500 font-mono bg-black/30 px-1.5 sm:px-2 py-1 rounded w-fit">
                          {new Date(e.createdAt).toLocaleString(undefined, {
                            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                          })}
                        </span>
                      </div>

                      {/* Smart Data Rendering (Instead of JSON) */}
                      {e.data && (
                        <div className="mt-1 text-xs sm:text-sm text-zinc-400">
                          {e.type === 'CREATED' && (
                            <p>Report successfully logged into the system.</p>
                          )}

                          {e.data.note && (
                            <div className="mt-2 text-zinc-300 bg-black/40 border-l-2 border-zinc-600 pl-3 py-2 rounded-r-md italic">
                              "{e.data.note}"
                            </div>
                          )}

                          {e.data.reason && (
                            <p className="mt-2 text-red-400 font-medium">Reason: {e.data.reason}</p>
                          )}
                        </div>
                      )}

                      {/* Actor Badge */}
                      {e.actorRole && e.type !== 'CREATED' && (
                        <div className="mt-2 sm:mt-3 flex items-center">
                          <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                            Action by {e.actorRole}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

      </div>

      {/* Fullscreen Lightbox */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setActiveImage(null)}>
          <button className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/50 hover:text-white transition bg-black/50 p-2 rounded-full sm:bg-transparent sm:p-0">
            <X size={24} className="sm:w-8 sm:h-8" />
          </button>
          <img src={activeImage} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}