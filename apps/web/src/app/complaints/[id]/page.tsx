// // // // // // // // // // "use client";

// // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // import { apiGet, apiPost, API_BASE } from "@/lib/api";

// // // // // // // // // // export default function ComplaintDetail({ params }: any) {
// // // // // // // // // //   const id = params.id;
// // // // // // // // // //   const [data, setData] = useState<any>(null);
// // // // // // // // // //   const [err, setErr] = useState<string | null>(null);
// // // // // // // // // //   const [voterKey, setVoterKey] = useState("u1");

// // // // // // // // // //   async function load() {
// // // // // // // // // //     setErr(null);
// // // // // // // // // //     try {
// // // // // // // // // //       const c = await apiGet<any>(`/complaints/${id}`);
// // // // // // // // // //       setData(c);
// // // // // // // // // //     } catch (e: any) {
// // // // // // // // // //       setErr(e.message);
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   useEffect(() => { load(); }, []);

// // // // // // // // // //   async function vote(vote: "CONFIRMED" | "NOT_FIXED") {
// // // // // // // // // //     setErr(null);
// // // // // // // // // //     try {
// // // // // // // // // //       await apiPost(`/complaints/${id}/validate`, { vote, voterKey });
// // // // // // // // // //       await load();
// // // // // // // // // //     } catch (e: any) {
// // // // // // // // // //       setErr(e.message);
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   if (err) return <main className="p-10">{err}</main>;
// // // // // // // // // //   if (!data) return <main className="p-10">Loading...</main>;

// // // // // // // // // //   return (
// // // // // // // // // //     <main className="min-h-screen p-10 max-w-3xl space-y-6">
// // // // // // // // // //       <a className="underline" href="/">← Back</a>

// // // // // // // // // //       <header className="space-y-1">
// // // // // // // // // //         <h1 className="text-2xl font-bold">{data.title}</h1>
// // // // // // // // // //         <div className="text-sm text-slate-600">
// // // // // // // // // //           {data.ward?.name} • {data.department?.name} • {data.category} • <b>{data.currentStatus}</b>
// // // // // // // // // //         </div>
// // // // // // // // // //       </header>

// // // // // // // // // //       <section className="rounded-xl border p-4 space-y-2">
// // // // // // // // // //         <div className="font-semibold">Timeline (Immutable Events)</div>
// // // // // // // // // //         <div className="space-y-2">
// // // // // // // // // //           {data.events.map((e: any) => (
// // // // // // // // // //             <div key={e.id} className="border rounded-xl p-3">
// // // // // // // // // //               <div className="text-sm font-semibold">{e.type}</div>
// // // // // // // // // //               <div className="text-xs text-slate-600">{new Date(e.createdAt).toLocaleString()}</div>
// // // // // // // // // //               <pre className="text-xs mt-2 overflow-auto">{JSON.stringify(e.data, null, 2)}</pre>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       <section className="rounded-xl border p-4 space-y-3">
// // // // // // // // // //         <div className="font-semibold">Citizen Validation</div>
// // // // // // // // // //         <div className="text-sm text-slate-600">
// // // // // // // // // //           Confirmed: {data.validationCounts?.confirmed ?? 0} • Not fixed: {data.validationCounts?.notFixed ?? 0}
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="flex gap-3 items-center">
// // // // // // // // // //           <span className="text-sm">voterKey:</span>
// // // // // // // // // //           <input className="border rounded-xl px-3 py-2 text-sm" value={voterKey} onChange={(e) => setVoterKey(e.target.value)} />
// // // // // // // // // //           <span className="text-xs text-slate-500">(use u1/u2/u3 to simulate multiple citizens)</span>
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="flex gap-3">
// // // // // // // // // //           <button className="border rounded-xl px-4 py-2" onClick={() => vote("CONFIRMED")}>
// // // // // // // // // //             ✅ Confirm Fixed
// // // // // // // // // //           </button>
// // // // // // // // // //           <button className="border rounded-xl px-4 py-2" onClick={() => vote("NOT_FIXED")}>
// // // // // // // // // //             ❌ Still Not Fixed
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       <section className="rounded-xl border p-4 space-y-2">
// // // // // // // // // //         <div className="font-semibold">Proof Media</div>
// // // // // // // // // //         <div className="grid gap-3">
// // // // // // // // // //           {data.media?.map((m: any) => (
// // // // // // // // // //             <div key={m.id} className="border rounded-xl p-3">
// // // // // // // // // //               <div className="text-xs text-slate-600">{m.url}</div>
// // // // // // // // // //               <img className="mt-2 rounded-xl max-w-full" src={`${API_BASE}${m.url}`} alt="proof" />
// // // // // // // // // //               <div className="text-xs text-slate-500 mt-2">sha256: {m.sha256.slice(0, 16)}…</div>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //           {(!data.media || data.media.length === 0) && (
// // // // // // // // // //             <div className="text-sm text-slate-500">No media uploaded yet.</div>
// // // // // // // // // //           )}
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>
// // // // // // // // // //     </main>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // // // gemini code


// // // // // // // // // "use client";

// // // // // // // // // import { useEffect, useState, use } from "react"; // ✅ Added 'use'
// // // // // // // // // import { apiGet, apiPost, API_BASE } from "@/lib/api";

// // // // // // // // // // ✅ Type the params as a Promise
// // // // // // // // // export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
// // // // // // // // //   // ✅ Unwrap the params Promise
// // // // // // // // //   const { id } = use(params);

// // // // // // // // //   const [data, setData] = useState<any>(null);
// // // // // // // // //   const [err, setErr] = useState<string | null>(null);
// // // // // // // // //   const [voterKey, setVoterKey] = useState("u1");

// // // // // // // // //   const [activeImage, setActiveImage] = useState<string | null>(null);


// // // // // // // // //   async function load() {
// // // // // // // // //     if (!id) return; // Guard clause just in case
// // // // // // // // //     setErr(null);
// // // // // // // // //     try {
// // // // // // // // //       const c = await apiGet<any>(`/complaints/${id}`);
// // // // // // // // //       setData(c);
// // // // // // // // //     } catch (e: any) {
// // // // // // // // //       setErr(e.message);
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   // ✅ Add 'id' to dependency array
// // // // // // // // //   useEffect(() => { load(); }, [id]);

// // // // // // // // //   async function vote(vote: "CONFIRMED" | "NOT_FIXED") {
// // // // // // // // //     setErr(null);
// // // // // // // // //     try {
// // // // // // // // //       await apiPost(`/complaints/${id}/validate`, { vote, voterKey });
// // // // // // // // //       await load();
// // // // // // // // //     } catch (e: any) {
// // // // // // // // //       setErr(e.message);
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   if (err) return <main className="p-10">{err}</main>;
// // // // // // // // //   if (!data) return <main className="p-10">Loading...</main>;

// // // // // // // // //   // const citizenMedia =
// // // // // // // // //   //   data.media?.filter((m: any) => m.source === "CITIZEN") || [];

// // // // // // // // //   // const officerMedia =
// // // // // // // // //   //   data.media?.filter((m: any) => m.source === "OFFICER") || [];

// // // // // // // // //   const citizenMedia = data.media || [];
// // // // // // // // //   const officerMedia: any[] = [];

// // // // // // // // //   return (
// // // // // // // // //     <main className="min-h-screen p-10 max-w-3xl space-y-6">
// // // // // // // // //       <a className="underline" href="/">← Back</a>

// // // // // // // // //       <header className="space-y-1">
// // // // // // // // //         <h1 className="text-2xl font-bold">{data.title}</h1>
// // // // // // // // //         <div className="text-sm text-slate-600">
// // // // // // // // //           {data.ward?.name} • {data.department?.name} • {data.category} • <b>{data.currentStatus}</b>
// // // // // // // // //         </div>
// // // // // // // // //       </header>

// // // // // // // // //       <section className="rounded-xl border p-4 space-y-2">
// // // // // // // // //         <div className="font-semibold">Timeline (Immutable Events)</div>
// // // // // // // // //         <div className="space-y-2">
// // // // // // // // //           {data.events.map((e: any) => (
// // // // // // // // //             <div key={e.id} className="border rounded-xl p-3">
// // // // // // // // //               <div className="text-sm font-semibold">{e.type}</div>
// // // // // // // // //               <div className="text-xs text-slate-600">{new Date(e.createdAt).toLocaleString()}</div>
// // // // // // // // //               <pre className="text-xs mt-2 overflow-auto">{JSON.stringify(e.data, null, 2)}</pre>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       <section className="rounded-xl border p-4 space-y-3">
// // // // // // // // //         <div className="font-semibold">Citizen Validation</div>
// // // // // // // // //         <div className="text-sm text-slate-600">
// // // // // // // // //           Confirmed: {data.validationCounts?.confirmed ?? 0} • Not fixed: {data.validationCounts?.notFixed ?? 0}
// // // // // // // // //         </div>

// // // // // // // // //         <div className="flex gap-3 items-center">
// // // // // // // // //           <span className="text-sm">voterKey:</span>
// // // // // // // // //           <input className="border rounded-xl px-3 py-2 text-sm" value={voterKey} onChange={(e) => setVoterKey(e.target.value)} />
// // // // // // // // //           <span className="text-xs text-slate-500">(use u1/u2/u3 to simulate multiple citizens)</span>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="flex gap-3">
// // // // // // // // //           <button className="border rounded-xl px-4 py-2" onClick={() => vote("CONFIRMED")}>
// // // // // // // // //             ✅ Confirm Fixed
// // // // // // // // //           </button>
// // // // // // // // //           <button className="border rounded-xl px-4 py-2" onClick={() => vote("NOT_FIXED")}>
// // // // // // // // //             ❌ Still Not Fixed
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* <section className="rounded-xl border p-4 space-y-2">
// // // // // // // // //         <div className="font-semibold">Proof Media</div>
// // // // // // // // //         <div className="grid gap-3">
// // // // // // // // //           {data.media?.map((m: any) => (
// // // // // // // // //             <div key={m.id} className="border rounded-xl p-3">
// // // // // // // // //               <div className="text-xs text-slate-600">{m.url}</div>
// // // // // // // // //               <img className="mt-2 rounded-xl max-w-full" src={`${API_BASE}${m.url}`} alt="proof" />
// // // // // // // // //               <div className="text-xs text-slate-500 mt-2">sha256: {m.sha256.slice(0, 16)}…</div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //           {(!data.media || data.media.length === 0) && (
// // // // // // // // //             <div className="text-sm text-slate-500">No media uploaded yet.</div>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       </section> */}
// // // // // // // // //       {/* Citizen Evidence Cluster */}
// // // // // // // // //       <section className="rounded-xl border p-4 space-y-3">

// // // // // // // // //         <div className="font-semibold">Citizen Issue</div>

// // // // // // // // //         {citizenMedia.length > 0 ? (

// // // // // // // // //           <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

// // // // // // // // //             {citizenMedia.map((m: any) => (

// // // // // // // // //               <img
// // // // // // // // //                 key={m.id}
// // // // // // // // //                 src={`${API_BASE}${m.url}`}
// // // // // // // // //                 onClick={() => setActiveImage(`${API_BASE}${m.url}`)}
// // // // // // // // //                 className="
// // // // // // // // //                           w-full h-32 object-cover
// // // // // // // // //                           rounded-xl
// // // // // // // // //                           border border-zinc-700
// // // // // // // // //                           hover:border-blue-500
// // // // // // // // //                           cursor-pointer
// // // // // // // // //                           transition
// // // // // // // // //                         "
// // // // // // // // //               />


// // // // // // // // //             ))}

// // // // // // // // //           </div>

// // // // // // // // //         ) : (
// // // // // // // // //           <div className="text-sm text-zinc-500">
// // // // // // // // //             No citizen photos uploaded.
// // // // // // // // //           </div>
// // // // // // // // //         )}

// // // // // // // // //       </section>


// // // // // // // // //       {/* Officer Proof Cluster */}
// // // // // // // // //       <section className="rounded-xl border p-4 space-y-3">

// // // // // // // // //         <div className="font-semibold">Officer Proof</div>

// // // // // // // // //         {officerMedia.length > 0 ? (

// // // // // // // // //           <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

// // // // // // // // //             {officerMedia.map((m: any) => (

// // // // // // // // //               <img
// // // // // // // // //                 key={m.id}
// // // // // // // // //                 src={`${API_BASE}${m.url}`}
// // // // // // // // //                 onClick={() => setActiveImage(`${API_BASE}${m.url}`)}
// // // // // // // // //                 className="
// // // // // // // // //                           w-full h-32 object-cover
// // // // // // // // //                           rounded-xl
// // // // // // // // //                           border border-zinc-700
// // // // // // // // //                           hover:border-blue-500
// // // // // // // // //                           cursor-pointer
// // // // // // // // //                           transition
// // // // // // // // //                         "
// // // // // // // // //               />


// // // // // // // // //             ))}

// // // // // // // // //           </div>

// // // // // // // // //         ) : (
// // // // // // // // //           <div className="text-sm text-zinc-500">
// // // // // // // // //             No officer proof uploaded.
// // // // // // // // //           </div>
// // // // // // // // //         )}

// // // // // // // // //       </section>

// // // // // // // // //       {/* Fullscreen Image Viewer */}
// // // // // // // // //       {activeImage && (

// // // // // // // // //         <div
// // // // // // // // //           className="
// // // // // // // // //       fixed inset-0
// // // // // // // // //       bg-black/90
// // // // // // // // //       flex items-center justify-center
// // // // // // // // //       z-50
// // // // // // // // //     "
// // // // // // // // //           onClick={() => setActiveImage(null)}
// // // // // // // // //         >

// // // // // // // // //           {/* Close button */}
// // // // // // // // //           <button
// // // // // // // // //             className="
// // // // // // // // //         absolute top-6 right-6
// // // // // // // // //         text-white text-3xl
// // // // // // // // //         hover:text-red-500
// // // // // // // // //       "
// // // // // // // // //             onClick={() => setActiveImage(null)}
// // // // // // // // //           >
// // // // // // // // //             ✕
// // // // // // // // //           </button>

// // // // // // // // //           {/* Full image */}
// // // // // // // // //           <img
// // // // // // // // //             src={activeImage}
// // // // // // // // //             className="
// // // // // // // // //         max-h-[90%]
// // // // // // // // //         max-w-[90%]
// // // // // // // // //         rounded-xl
// // // // // // // // //         shadow-2xl
// // // // // // // // //       "
// // // // // // // // //           />

// // // // // // // // //         </div>

// // // // // // // // //       )}


// // // // // // // // //     </main>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // "use client";

// // // // // // // // import { useEffect, useState, use } from "react";
// // // // // // // // import { apiGet, apiPost, API_BASE } from "@/lib/api";
// // // // // // // // import { ArrowLeft, CheckCircle, XCircle, Maximize2, X } from "lucide-react"; // Optional icons

// // // // // // // // export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
// // // // // // // //   // Unwrap params for Next.js 15+
// // // // // // // //   const { id } = use(params);

// // // // // // // //   const [data, setData] = useState<any>(null);
// // // // // // // //   const [err, setErr] = useState<string | null>(null);
// // // // // // // //   const [voterKey, setVoterKey] = useState("u1");
// // // // // // // //   const [activeImage, setActiveImage] = useState<string | null>(null);
// // // // // // // //   const [loadingVote, setLoadingVote] = useState(false);

// // // // // // // //   async function load() {
// // // // // // // //     if (!id) return;
// // // // // // // //     setErr(null);
// // // // // // // //     try {
// // // // // // // //       const c = await apiGet<any>(`/complaints/${id}`);
// // // // // // // //       setData(c);
// // // // // // // //     } catch (e: any) {
// // // // // // // //       setErr(e.message || "Failed to load complaint");
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   useEffect(() => { load(); }, [id]);

// // // // // // // //   async function vote(voteType: "CONFIRMED" | "NOT_FIXED") {
// // // // // // // //     setLoadingVote(true);
// // // // // // // //     setErr(null);
// // // // // // // //     try {
// // // // // // // //       await apiPost(`/complaints/${id}/validate`, { vote: voteType, voterKey });
// // // // // // // //       await load(); // Refresh data to show new counts
// // // // // // // //     } catch (e: any) {
// // // // // // // //       setErr(e.message || "Failed to submit vote");
// // // // // // // //     } finally {
// // // // // // // //       setLoadingVote(false);
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   // Helper to handle absolute vs relative URLs
// // // // // // // //   const getImgUrl = (url: string) => {
// // // // // // // //     if (!url) return "";
// // // // // // // //     return url.startsWith("http") ? url : `${API_BASE}${url}`;
// // // // // // // //   };

// // // // // // // //   if (err) return <div className="p-10 text-red-500">Error: {err}</div>;
// // // // // // // //   if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500">Loading details...</div>;

// // // // // // // //   // Filter Media (Safe Fallback)
// // // // // // // //   // If 'source' is missing, assume it's a CITIZEN upload
// // // // // // // //   const citizenMedia = data.media?.filter((m: any) => !m.source || m.source === "CITIZEN") || [];
// // // // // // // //   const officerMedia = data.media?.filter((m: any) => m.source === "OFFICER") || [];




// // // // // // // //   return (
// // // // // // // //     <main className="min-h-screen bg-black text-zinc-100 p-6 md:p-10 flex justify-center">
// // // // // // // //       <div className="w-full max-w-3xl space-y-8">

// // // // // // // //         {/* Header */}
// // // // // // // //         <div className="space-y-4">
// // // // // // // //           <a className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition" href="/map">
// // // // // // // //             <ArrowLeft size={16} className="mr-2" /> Back to Map
// // // // // // // //           </a>

// // // // // // // //           <header>
// // // // // // // //             <h1 className="text-3xl font-bold text-white">{data.title}</h1>
// // // // // // // //             <div className="flex items-center gap-2 mt-2 text-sm text-zinc-400">
// // // // // // // //               <span className="px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs">
// // // // // // // //                 {data.ward?.name || "Unknown Ward"}
// // // // // // // //               </span>
// // // // // // // //               <span>•</span>
// // // // // // // //               <span className="text-blue-400">{data.category}</span>
// // // // // // // //               <span>•</span>
// // // // // // // //               <span className={`font-bold ${data.currentStatus === 'RESOLVED' ? 'text-green-400' : 'text-yellow-400'}`}>
// // // // // // // //                 {data.currentStatus}
// // // // // // // //               </span>
// // // // // // // //             </div>
// // // // // // // //           </header>
// // // // // // // //         </div>

// // // // // // // //         {/* Action Card: Citizen Validation */}
// // // // // // // //         <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-4">
// // // // // // // //           <div className="flex justify-between items-start">
// // // // // // // //             <div>
// // // // // // // //               <h2 className="text-lg font-semibold text-white">Citizen Validation</h2>
// // // // // // // //               <p className="text-sm text-zinc-500">Is this issue actually resolved?</p>
// // // // // // // //             </div>
// // // // // // // //             <div className="text-right text-sm">
// // // // // // // //               <div className="text-green-400 font-medium">{data.validationCounts?.confirmed ?? 0} Confirmed</div>
// // // // // // // //               <div className="text-red-400 font-medium">{data.validationCounts?.notFixed ?? 0} Disputed</div>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           <div className="flex flex-col md:flex-row gap-4 items-center bg-black/20 p-3 rounded-xl border border-white/5">
// // // // // // // //             <input 
// // // // // // // //               className="bg-transparent border border-zinc-700 rounded-lg px-3 py-2 text-sm w-full md:w-32 focus:border-blue-500 outline-none transition" 
// // // // // // // //               value={voterKey} 
// // // // // // // //               onChange={(e) => setVoterKey(e.target.value)}
// // // // // // // //               placeholder="Voter ID"
// // // // // // // //             />
// // // // // // // //             <div className="flex gap-2 w-full">
// // // // // // // //               <button 
// // // // // // // //                 disabled={loadingVote}
// // // // // // // //                 className="flex-1 flex items-center justify-center gap-2 bg-green-900/30 border border-green-800 hover:bg-green-900/50 text-green-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// // // // // // // //                 onClick={() => vote("CONFIRMED")}
// // // // // // // //               >
// // // // // // // //                 <CheckCircle size={16} /> Fixed
// // // // // // // //               </button>
// // // // // // // //               <button 
// // // // // // // //                 disabled={loadingVote}
// // // // // // // //                 className="flex-1 flex items-center justify-center gap-2 bg-red-900/30 border border-red-800 hover:bg-red-900/50 text-red-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// // // // // // // //                 onClick={() => vote("NOT_FIXED")}
// // // // // // // //               >
// // // // // // // //                 <XCircle size={16} /> Not Fixed
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </section>

// // // // // // // //         {/* Media Grids */}
// // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// // // // // // // //           {/* Column 1: Citizen Evidence */}
// // // // // // // //           <section className="space-y-3">
// // // // // // // //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// // // // // // // //               Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span>
// // // // // // // //             </h3>
// // // // // // // //             {citizenMedia.length > 0 ? (
// // // // // // // //               <div className="grid grid-cols-2 gap-2">
// // // // // // // //                 {citizenMedia.map((m: any) => (
// // // // // // // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-zinc-800 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // // // // // // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="evidence" />
// // // // // // // //                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
// // // // // // // //                   </div>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             ) : (
// // // // // // // //                <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// // // // // // // //                  No citizen photos
// // // // // // // //                </div>
// // // // // // // //             )}
// // // // // // // //           </section>

// // // // // // // //           {/* Column 2: Officer Proof */}
// // // // // // // //           <section className="space-y-3">
// // // // // // // //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// // // // // // // //               Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span>
// // // // // // // //             </h3>
// // // // // // // //             {officerMedia.length > 0 ? (
// // // // // // // //               <div className="grid grid-cols-2 gap-2">
// // // // // // // //                 {officerMedia.map((m: any) => (
// // // // // // // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-blue-900/50 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // // // // // // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="proof" />
// // // // // // // //                     <div className="absolute inset-0 border-2 border-blue-500/50 rounded-xl pointer-events-none" />
// // // // // // // //                   </div>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             ) : (
// // // // // // // //                <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// // // // // // // //                  Pending resolution
// // // // // // // //                </div>
// // // // // // // //             )}
// // // // // // // //           </section>

// // // // // // // //         </div>

// // // // // // // //         {/* Timeline */}
// // // // // // // //         <section className="pt-4 border-t border-zinc-800 space-y-4">
// // // // // // // //           <h3 className="font-semibold text-zinc-300">Activity Timeline</h3>
// // // // // // // //           <div className="space-y-0 relative border-l border-zinc-800 ml-2">
// // // // // // // //             {data.events.map((e: any) => (
// // // // // // // //               <div key={e.id} className="mb-6 ml-6 relative">
// // // // // // // //                 <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-zinc-900 border border-zinc-700" />
// // // // // // // //                 <div className="text-sm font-medium text-white">{e.type.replace(/_/g, " ")}</div>
// // // // // // // //                 <div className="text-xs text-zinc-500 mb-1">{new Date(e.createdAt).toLocaleString()}</div>
// // // // // // // //                 {e.data && Object.keys(e.data).length > 0 && (
// // // // // // // //                    <pre className="text-[10px] bg-zinc-900/50 p-2 rounded border border-zinc-800 overflow-x-auto text-zinc-400 mt-1 max-w-sm">
// // // // // // // //                      {JSON.stringify(e.data, null, 2)}
// // // // // // // //                    </pre>
// // // // // // // //                 )}
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </section>

// // // // // // // //       </div>

// // // // // // // //       {/* Fullscreen Lightbox */}
// // // // // // // //       {activeImage && (
// // // // // // // //         <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setActiveImage(null)}>
// // // // // // // //           <button className="absolute top-6 right-6 text-white/50 hover:text-white transition">
// // // // // // // //             <X size={32} />
// // // // // // // //           </button>
// // // // // // // //           <img src={activeImage} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //     </main>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // "use client";

// // // // // // // import { useEffect, useState, use } from "react";
// // // // // // // import { apiGet, apiPost, API_BASE } from "@/lib/api";
// // // // // // // import { ArrowLeft, CheckCircle, XCircle, Maximize2, X } from "lucide-react"; 

// // // // // // // export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
// // // // // // //   const { id } = use(params);

// // // // // // //   const [data, setData] = useState<any>(null);
// // // // // // //   const [err, setErr] = useState<string | null>(null);
// // // // // // //   const [voterKey, setVoterKey] = useState("u1");
// // // // // // //   const [activeImage, setActiveImage] = useState<string | null>(null);
// // // // // // //   const [loadingVote, setLoadingVote] = useState(false);

// // // // // // //   async function load() {
// // // // // // //     if (!id) return;
// // // // // // //     setErr(null);
// // // // // // //     try {
// // // // // // //       const c = await apiGet<any>(`/complaints/${id}`);
// // // // // // //       setData(c);
// // // // // // //     } catch (e: any) {
// // // // // // //       setErr(e.message || "Failed to load complaint");
// // // // // // //     }
// // // // // // //   }

// // // // // // //   useEffect(() => { load(); }, [id]);

// // // // // // //   async function vote(voteType: "CONFIRMED" | "NOT_FIXED") {
// // // // // // //     setLoadingVote(true);
// // // // // // //     setErr(null);
// // // // // // //     try {
// // // // // // //       await apiPost(`/complaints/${id}/validate`, { vote: voteType, voterKey });
// // // // // // //       await load(); 
// // // // // // //     } catch (e: any) {
// // // // // // //       setErr(e.message || "Failed to submit vote");
// // // // // // //     } finally {
// // // // // // //       setLoadingVote(false);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const getImgUrl = (url: string) => {
// // // // // // //     if (!url) return "";
// // // // // // //     return url.startsWith("http") ? url : `${API_BASE}${url}`;
// // // // // // //   };

// // // // // // //   if (err) return <div className="p-10 text-red-500">Error: {err}</div>;
// // // // // // //   if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500">Loading details...</div>;

// // // // // // //   // ✅ FIX: SPLIT MEDIA BASED ON RESOLUTION EVENT DATA
// // // // // // //   // 1. Find the resolution event to get officer proof URLs
// // // // // // //   const resolvedEvent = data.events?.find((e: any) => e.type === 'RESOLVED');

// // // // // // //   // 2. Build a list of Officer URLs (Handle both new 'proofUrls' array and old 'proofUrl' string)
// // // // // // //   const officerUrls = resolvedEvent?.data?.proofUrls || 
// // // // // // //                       (resolvedEvent?.data?.proofUrl ? [resolvedEvent.data.proofUrl] : []);

// // // // // // //   // 3. Filter the master media list
// // // // // // //   const officerMedia = data.media?.filter((m: any) => officerUrls.includes(m.url)) || [];
// // // // // // //   const citizenMedia = data.media?.filter((m: any) => !officerUrls.includes(m.url)) || [];

// // // // // // //   return (
// // // // // // //     <main className="min-h-screen bg-black text-zinc-100 p-6 md:p-10 flex justify-center">
// // // // // // //       <div className="w-full max-w-3xl space-y-8">

// // // // // // //         {/* Header */}
// // // // // // //         <div className="space-y-4">
// // // // // // //           <a className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition" href="/map">
// // // // // // //             <ArrowLeft size={16} className="mr-2" /> Back to Map
// // // // // // //           </a>

// // // // // // //           <header>
// // // // // // //             <h1 className="text-3xl font-bold text-white">{data.title}</h1>
// // // // // // //             <div className="flex items-center gap-2 mt-2 text-sm text-zinc-400">
// // // // // // //               <span className="px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs">
// // // // // // //                 {data.ward?.name || "Unknown Ward"}
// // // // // // //               </span>
// // // // // // //               <span>•</span>
// // // // // // //               <span className="text-blue-400">{data.category}</span>
// // // // // // //               <span>•</span>
// // // // // // //               <span className={`font-bold ${data.currentStatus === 'RESOLVED' ? 'text-green-400' : 'text-yellow-400'}`}>
// // // // // // //                 {data.currentStatus}
// // // // // // //               </span>
// // // // // // //             </div>
// // // // // // //           </header>
// // // // // // //         </div>

// // // // // // //         {/* Action Card: Citizen Validation */}
// // // // // // //         <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-4">
// // // // // // //           <div className="flex justify-between items-start">
// // // // // // //             <div>
// // // // // // //               <h2 className="text-lg font-semibold text-white">Citizen Validation</h2>
// // // // // // //               <p className="text-sm text-zinc-500">Is this issue actually resolved?</p>
// // // // // // //             </div>
// // // // // // //             <div className="text-right text-sm">
// // // // // // //               <div className="text-green-400 font-medium">{data.validationCounts?.confirmed ?? 0} Confirmed</div>
// // // // // // //               <div className="text-red-400 font-medium">{data.validationCounts?.notFixed ?? 0} Disputed</div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           <div className="flex flex-col md:flex-row gap-4 items-center bg-black/20 p-3 rounded-xl border border-white/5">
// // // // // // //             <input 
// // // // // // //               className="bg-transparent border border-zinc-700 rounded-lg px-3 py-2 text-sm w-full md:w-32 focus:border-blue-500 outline-none transition" 
// // // // // // //               value={voterKey} 
// // // // // // //               onChange={(e) => setVoterKey(e.target.value)}
// // // // // // //               placeholder="Voter ID"
// // // // // // //             />
// // // // // // //             <div className="flex gap-2 w-full">
// // // // // // //               <button 
// // // // // // //                 disabled={loadingVote}
// // // // // // //                 className="flex-1 flex items-center justify-center gap-2 bg-green-900/30 border border-green-800 hover:bg-green-900/50 text-green-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// // // // // // //                 onClick={() => vote("CONFIRMED")}
// // // // // // //               >
// // // // // // //                 <CheckCircle size={16} /> Fixed
// // // // // // //               </button>
// // // // // // //               <button 
// // // // // // //                 disabled={loadingVote}
// // // // // // //                 className="flex-1 flex items-center justify-center gap-2 bg-red-900/30 border border-red-800 hover:bg-red-900/50 text-red-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// // // // // // //                 onClick={() => vote("NOT_FIXED")}
// // // // // // //               >
// // // // // // //                 <XCircle size={16} /> Not Fixed
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </section>

// // // // // // //         {/* Media Grids */}
// // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// // // // // // //           {/* Column 1: Citizen Evidence */}
// // // // // // //           <section className="space-y-3">
// // // // // // //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// // // // // // //               Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span>
// // // // // // //             </h3>
// // // // // // //             {citizenMedia.length > 0 ? (
// // // // // // //               <div className="grid grid-cols-2 gap-2">
// // // // // // //                 {citizenMedia.map((m: any) => (
// // // // // // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-zinc-800 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // // // // // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="evidence" />
// // // // // // //                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
// // // // // // //                   </div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             ) : (
// // // // // // //                <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// // // // // // //                  No citizen photos
// // // // // // //                </div>
// // // // // // //             )}
// // // // // // //           </section>

// // // // // // //           {/* Column 2: Officer Proof */}
// // // // // // //           <section className="space-y-3">
// // // // // // //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// // // // // // //               Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span>
// // // // // // //             </h3>
// // // // // // //             {officerMedia.length > 0 ? (
// // // // // // //               <div className="grid grid-cols-2 gap-2">
// // // // // // //                 {officerMedia.map((m: any) => (
// // // // // // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-blue-900/50 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // // // // // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="proof" />
// // // // // // //                     <div className="absolute inset-0 border-2 border-blue-500/50 rounded-xl pointer-events-none" />
// // // // // // //                   </div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             ) : (
// // // // // // //                <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// // // // // // //                  Pending resolution
// // // // // // //                </div>
// // // // // // //             )}
// // // // // // //           </section>

// // // // // // //         </div>

// // // // // // //         {/* Timeline */}
// // // // // // //         <section className="pt-4 border-t border-zinc-800 space-y-4">
// // // // // // //           <h3 className="font-semibold text-zinc-300">Activity Timeline</h3>
// // // // // // //           <div className="space-y-0 relative border-l border-zinc-800 ml-2">
// // // // // // //             {data.events.map((e: any) => (
// // // // // // //               <div key={e.id} className="mb-6 ml-6 relative">
// // // // // // //                 <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-zinc-900 border border-zinc-700" />
// // // // // // //                 <div className="text-sm font-medium text-white">{e.type.replace(/_/g, " ")}</div>
// // // // // // //                 <div className="text-xs text-zinc-500 mb-1">{new Date(e.createdAt).toLocaleString()}</div>
// // // // // // //                 {e.data && Object.keys(e.data).length > 0 && (
// // // // // // //                    <pre className="text-[10px] bg-zinc-900/50 p-2 rounded border border-zinc-800 overflow-x-auto text-zinc-400 mt-1 max-w-sm">
// // // // // // //                      {JSON.stringify(e.data, null, 2)}
// // // // // // //                    </pre>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </section>

// // // // // // //       </div>

// // // // // // //       {/* Fullscreen Lightbox */}
// // // // // // //       {activeImage && (
// // // // // // //         <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setActiveImage(null)}>
// // // // // // //           <button className="absolute top-6 right-6 text-white/50 hover:text-white transition">
// // // // // // //             <X size={32} />
// // // // // // //           </button>
// // // // // // //           <img src={activeImage} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }

// // // // // // "use client";

// // // // // // import { useEffect, useState, use } from "react";
// // // // // // import { apiGet, apiPost, API_BASE } from "@/lib/api";
// // // // // // // ✅ UPDATED IMPORTS: Added User, Building2, MapPin, HelpCircle
// // // // // // import { ArrowLeft, CheckCircle, XCircle, Maximize2, X, User, Building2, MapPin, HelpCircle } from "lucide-react"; 

// // // // // // export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
// // // // // //   const { id } = use(params);

// // // // // //   const [data, setData] = useState<any>(null);
// // // // // //   const [err, setErr] = useState<string | null>(null);
// // // // // //   const [voterKey, setVoterKey] = useState("u1");
// // // // // //   const [activeImage, setActiveImage] = useState<string | null>(null);
// // // // // //   const [loadingVote, setLoadingVote] = useState(false);

// // // // // //   async function load() {
// // // // // //     if (!id) return;
// // // // // //     setErr(null);
// // // // // //     try {
// // // // // //       const c = await apiGet<any>(`/complaints/${id}`);
// // // // // //       setData(c);
// // // // // //     } catch (e: any) {
// // // // // //       setErr(e.message || "Failed to load complaint");
// // // // // //     }
// // // // // //   }

// // // // // //   useEffect(() => { load(); }, [id]);

// // // // // //   async function vote(voteType: "CONFIRMED" | "NOT_FIXED") {
// // // // // //     setLoadingVote(true);
// // // // // //     setErr(null);
// // // // // //     try {
// // // // // //       await apiPost(`/complaints/${id}/validate`, { vote: voteType, voterKey });
// // // // // //       await load(); 
// // // // // //     } catch (e: any) {
// // // // // //       setErr(e.message || "Failed to submit vote");
// // // // // //     } finally {
// // // // // //       setLoadingVote(false);
// // // // // //     }
// // // // // //   }

// // // // // //   const getImgUrl = (url: string) => {
// // // // // //     if (!url) return "";
// // // // // //     return url.startsWith("http") ? url : `${API_BASE}${url}`;
// // // // // //   };

// // // // // //   if (err) return <div className="p-10 text-red-500">Error: {err}</div>;
// // // // // //   if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500">Loading details...</div>;

// // // // // //   // 1. Find the resolution event to get officer proof URLs
// // // // // //   const resolvedEvent = data.events?.find((e: any) => e.type === 'RESOLVED');

// // // // // //   // 2. Build a list of Officer URLs
// // // // // //   const officerUrls = resolvedEvent?.data?.proofUrls || 
// // // // // //                       (resolvedEvent?.data?.proofUrl ? [resolvedEvent.data.proofUrl] : []);

// // // // // //   // 3. Filter the master media list
// // // // // //   const officerMedia = data.media?.filter((m: any) => officerUrls.includes(m.url)) || [];
// // // // // //   const citizenMedia = data.media?.filter((m: any) => !officerUrls.includes(m.url)) || [];

// // // // // //   return (
// // // // // //     <main className="min-h-screen bg-black text-zinc-100 p-6 md:p-10 flex justify-center">
// // // // // //       <div className="w-full max-w-3xl space-y-8">

// // // // // //         {/* Header */}
// // // // // //         <div className="space-y-4">
// // // // // //           <a className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition" href="/map">
// // // // // //             <ArrowLeft size={16} className="mr-2" /> Back to Map
// // // // // //           </a>

// // // // // //           <header>
// // // // // //             <h1 className="text-3xl font-bold text-white">{data.title}</h1>
// // // // // //             <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-zinc-400">

// // // // // //               {/* Status Badge */}
// // // // // //               <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide border ${
// // // // // //                   data.currentStatus === 'RESOLVED' 
// // // // // //                     ? 'bg-green-900/30 border-green-800 text-green-400' 
// // // // // //                     : 'bg-blue-900/30 border-blue-800 text-blue-400'
// // // // // //                 }`}>
// // // // // //                 {data.currentStatus.replace(/_/g, " ")}
// // // // // //               </span>

// // // // // //               <span>•</span>
// // // // // //               <span className="text-blue-400">{data.category}</span>
// // // // // //               <span>•</span>
// // // // // //               <span className="text-zinc-500">{new Date(data.createdAt).toLocaleDateString()}</span>

// // // // // //             </div>
// // // // // //           </header>

// // // // // //           {/* ✅ NEW SECTION: Context Cards (Ward, Dept, Officer) */}
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

// // // // // //             {/* Ward Card */}
// // // // // //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// // // // // //               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
// // // // // //                  <MapPin size={18} />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                  <div className="text-[10px] text-zinc-500 uppercase font-bold">Ward Zone</div>
// // // // // //                  <div className="text-sm font-medium text-white">{data.ward?.name || "Unknown"}</div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Dept Card */}
// // // // // //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// // // // // //               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
// // // // // //                  <Building2 size={18} />
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                  <div className="text-[10px] text-zinc-500 uppercase font-bold">Department</div>
// // // // // //                  <div className="text-sm font-medium text-white">{data.department?.name || "Unassigned"}</div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* ✅ OFFICER CARD */}
// // // // // //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// // // // // //               <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
// // // // // //                 ${data.assignedOfficer ? 'bg-purple-900/30 text-purple-400' : 'bg-zinc-800 text-zinc-600'}
// // // // // //               `}>
// // // // // //                 {data.assignedOfficer ? <User size={18} /> : <HelpCircle size={18} />}
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
// // // // // //                   Officer In-Charge
// // // // // //                 </div>
// // // // // //                 <div className="text-sm font-medium text-white">
// // // // // //                   {data.assignedOfficer?.name || "Pending..."}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Action Card: Citizen Validation */}
// // // // // //         <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-4">
// // // // // //           <div className="flex justify-between items-start">
// // // // // //             <div>
// // // // // //               <h2 className="text-lg font-semibold text-white">Citizen Validation</h2>
// // // // // //               <p className="text-sm text-zinc-500">Is this issue actually resolved?</p>
// // // // // //             </div>
// // // // // //             <div className="text-right text-sm">
// // // // // //               <div className="text-green-400 font-medium">{data.validationCounts?.confirmed ?? 0} Confirmed</div>
// // // // // //               <div className="text-red-400 font-medium">{data.validationCounts?.notFixed ?? 0} Disputed</div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div className="flex flex-col md:flex-row gap-4 items-center bg-black/20 p-3 rounded-xl border border-white/5">
// // // // // //             <input 
// // // // // //               className="bg-transparent border border-zinc-700 rounded-lg px-3 py-2 text-sm w-full md:w-32 focus:border-blue-500 outline-none transition" 
// // // // // //               value={voterKey} 
// // // // // //               onChange={(e) => setVoterKey(e.target.value)}
// // // // // //               placeholder="Voter ID"
// // // // // //             />
// // // // // //             <div className="flex gap-2 w-full">
// // // // // //               <button 
// // // // // //                 disabled={loadingVote}
// // // // // //                 className="flex-1 flex items-center justify-center gap-2 bg-green-900/30 border border-green-800 hover:bg-green-900/50 text-green-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// // // // // //                 onClick={() => vote("CONFIRMED")}
// // // // // //               >
// // // // // //                 <CheckCircle size={16} /> Fixed
// // // // // //               </button>
// // // // // //               <button 
// // // // // //                 disabled={loadingVote}
// // // // // //                 className="flex-1 flex items-center justify-center gap-2 bg-red-900/30 border border-red-800 hover:bg-red-900/50 text-red-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// // // // // //                 onClick={() => vote("NOT_FIXED")}
// // // // // //               >
// // // // // //                 <XCircle size={16} /> Not Fixed
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </section>

// // // // // //         {/* Media Grids */}
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// // // // // //           {/* Column 1: Citizen Evidence */}
// // // // // //           <section className="space-y-3">
// // // // // //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// // // // // //               Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span>
// // // // // //             </h3>
// // // // // //             {citizenMedia.length > 0 ? (
// // // // // //               <div className="grid grid-cols-2 gap-2">
// // // // // //                 {citizenMedia.map((m: any) => (
// // // // // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-zinc-800 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // // // // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="evidence" />
// // // // // //                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //                <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// // // // // //                  No citizen photos
// // // // // //                </div>
// // // // // //             )}
// // // // // //           </section>

// // // // // //           {/* Column 2: Officer Proof */}
// // // // // //           <section className="space-y-3">
// // // // // //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// // // // // //               Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span>
// // // // // //             </h3>
// // // // // //             {officerMedia.length > 0 ? (
// // // // // //               <div className="grid grid-cols-2 gap-2">
// // // // // //                 {officerMedia.map((m: any) => (
// // // // // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-blue-900/50 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // // // // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="proof" />
// // // // // //                     <div className="absolute inset-0 border-2 border-blue-500/50 rounded-xl pointer-events-none" />
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //                <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// // // // // //                  Pending resolution
// // // // // //                </div>
// // // // // //             )}
// // // // // //           </section>

// // // // // //         </div>

// // // // // //         {/* Timeline */}
// // // // // //         <section className="pt-4 border-t border-zinc-800 space-y-4">
// // // // // //           <h3 className="font-semibold text-zinc-300">Activity Timeline</h3>
// // // // // //           <div className="space-y-0 relative border-l border-zinc-800 ml-2">
// // // // // //             {data.events.map((e: any) => (
// // // // // //               <div key={e.id} className="mb-6 ml-6 relative">
// // // // // //                 <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-zinc-900 border border-zinc-700" />
// // // // // //                 <div className="text-sm font-medium text-white">{e.type.replace(/_/g, " ")}</div>
// // // // // //                 <div className="text-xs text-zinc-500 mb-1">{new Date(e.createdAt).toLocaleString()}</div>
// // // // // //                 {e.data && Object.keys(e.data).length > 0 && (
// // // // // //                    <pre className="text-[10px] bg-zinc-900/50 p-2 rounded border border-zinc-800 overflow-x-auto text-zinc-400 mt-1 max-w-sm">
// // // // // //                      {JSON.stringify(e.data, null, 2)}
// // // // // //                    </pre>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </section>

// // // // // //       </div>

// // // // // //       {/* Fullscreen Lightbox */}
// // // // // //       {activeImage && (
// // // // // //         <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setActiveImage(null)}>
// // // // // //           <button className="absolute top-6 right-6 text-white/50 hover:text-white transition">
// // // // // //             <X size={32} />
// // // // // //           </button>
// // // // // //           <img src={activeImage} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
// // // // // //         </div>
// // // // // //       )}

// // // // // //     </main>
// // // // // //   );
// // // // // // }


// // // // // "use client";

// // // // // import { useEffect, useState, use } from "react";
// // // // // import { apiGet, apiPost, API_BASE } from "@/lib/api";
// // // // // import {
// // // // //   ArrowLeft, CheckCircle, XCircle, X, User,
// // // // //   Building2, MapPin, HelpCircle, ThumbsUp, AlertTriangle, Users,
// // // // //   Activity, FileText, Hammer, CheckCircle2 // 👈 Ensure these last 4 are added!
// // // // // } from "lucide-react";

// // // // // export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
// // // // //   const { id } = use(params);

// // // // //   const [data, setData] = useState<any>(null);
// // // // //   const [err, setErr] = useState<string | null>(null);
// // // // //   const [voterKey, setVoterKey] = useState("u1");
// // // // //   const [activeImage, setActiveImage] = useState<string | null>(null);

// // // // //   // Loading states
// // // // //   const [loadingVote, setLoadingVote] = useState(false);
// // // // //   const [loadingSignal, setLoadingSignal] = useState(false);

// // // // //   async function load() {
// // // // //     if (!id) return;
// // // // //     setErr(null);
// // // // //     try {
// // // // //       const c = await apiGet<any>(`/complaints/${id}`);
// // // // //       setData(c);
// // // // //     } catch (e: any) {
// // // // //       setErr(e.message || "Failed to load complaint");
// // // // //     }
// // // // //   }

// // // // //   useEffect(() => { load(); }, [id]);

// // // // //   // --- HANDLERS ---
// // // // //   async function vote(voteType: "CONFIRMED" | "NOT_FIXED") {
// // // // //     setLoadingVote(true);
// // // // //     setErr(null);
// // // // //     try {
// // // // //       await apiPost(`/complaints/${id}/validate`, { vote: voteType, voterKey });
// // // // //       await load();
// // // // //     } catch (e: any) {
// // // // //       setErr(e.message || "Failed to submit vote");
// // // // //     } finally {
// // // // //       setLoadingVote(false);
// // // // //     }
// // // // //   }

// // // // //   // ✅ NEW: Handler for Community Impact Poll
// // // // //   async function handleSignal(type: "UPVOTE" | "STILL_PRESENT") {
// // // // //     setLoadingSignal(true);
// // // // //     setErr(null);
// // // // //     try {
// // // // //       await apiPost(`/complaints/${id}/signal`, { type });
// // // // //       await load(); // Reload to get updated counts
// // // // //     } catch (e: any) {
// // // // //       setErr(e.message || "Failed to submit signal");
// // // // //     } finally {
// // // // //       setLoadingSignal(false);
// // // // //     }
// // // // //   }

// // // // //   const getImgUrl = (url: string) => {
// // // // //     if (!url) return "";
// // // // //     return url.startsWith("http") ? url : `${API_BASE}${url}`;
// // // // //   };

// // // // //   if (err) return <div className="p-10 text-red-500">Error: {err}</div>;
// // // // //   if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500">Loading details...</div>;

// // // // //   // 1. Calculate Media
// // // // //   const resolvedEvent = data.events?.find((e: any) => e.type === 'RESOLVED');
// // // // //   const officerUrls = resolvedEvent?.data?.proofUrls ||
// // // // //     (resolvedEvent?.data?.proofUrl ? [resolvedEvent.data.proofUrl] : []);
// // // // //   const officerMedia = data.media?.filter((m: any) => officerUrls.includes(m.url)) || [];
// // // // //   const citizenMedia = data.media?.filter((m: any) => !officerUrls.includes(m.url)) || [];

// // // // //   // 2. Calculate Signals (Poll Counts)
// // // // //   const upvotesCount = data.signals?.filter((s: any) => s.type === 'UPVOTE').length || 0;
// // // // //   const stillPresentCount = data.signals?.filter((s: any) => s.type === 'STILL_PRESENT').length || 0;

// // // // //   return (
// // // // //     <main className="min-h-screen bg-black text-zinc-100 p-6 md:p-10 flex justify-center">
// // // // //       <div className="w-full max-w-3xl space-y-8">

// // // // //         {/* Header */}
// // // // //         {/* Premium Navigation Pill */}
// // // // //         <div className="mb-6">
// // // // //           <div className="inline-flex items-center p-1.5 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl shadow-xl">
// // // // //             <a 
// // // // //               href="/" 
// // // // //               className="group flex items-center gap-2.5 px-4 py-2 rounded-xl text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300"
// // // // //             >
// // // // //               <span className="p-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition-all">
// // // // //                 <ArrowLeft size={14} strokeWidth={2.5} />
// // // // //               </span>
// // // // //               Dashboard
// // // // //             </a>

// // // // //             <div className="w-px h-6 bg-zinc-800 mx-2" />

// // // // //             <a 
// // // // //               href="/map" 
// // // // //               className="group flex items-center gap-2.5 px-4 py-2 rounded-xl text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300"
// // // // //             >
// // // // //               <span className="p-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
// // // // //                 <MapPin size={14} strokeWidth={2.5} />
// // // // //               </span>
// // // // //               Live Map
// // // // //             </a>
// // // // //           </div>

// // // // //           <header>
// // // // //             <h1 className="text-3xl font-bold text-white">{data.title}</h1>
// // // // //             <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-zinc-400">
// // // // //               <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide border ${data.currentStatus === 'RESOLVED'
// // // // //                 ? 'bg-green-900/30 border-green-800 text-green-400'
// // // // //                 : 'bg-blue-900/30 border-blue-800 text-blue-400'
// // // // //                 }`}>
// // // // //                 {data.currentStatus.replace(/_/g, " ")}
// // // // //               </span>
// // // // //               <span>•</span>
// // // // //               <span className="text-blue-400">{data.category}</span>
// // // // //               <span>•</span>
// // // // //               <span className="text-zinc-500">{new Date(data.createdAt).toLocaleDateString()}</span>
// // // // //             </div>
// // // // //           </header>

// // // // //           {/* Context Cards */}
// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // // //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// // // // //               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
// // // // //                 <MapPin size={18} />
// // // // //               </div>
// // // // //               <div>
// // // // //                 <div className="text-[10px] text-zinc-500 uppercase font-bold">Ward Zone</div>
// // // // //                 <div className="text-sm font-medium text-white">{data.ward?.name || "Unknown"}</div>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// // // // //               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
// // // // //                 <Building2 size={18} />
// // // // //               </div>
// // // // //               <div>
// // // // //                 <div className="text-[10px] text-zinc-500 uppercase font-bold">Department</div>
// // // // //                 <div className="text-sm font-medium text-white">{data.department?.name || "Unassigned"}</div>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// // // // //               <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
// // // // //                 ${data.assignedOfficer ? 'bg-purple-900/30 text-purple-400' : 'bg-zinc-800 text-zinc-600'}
// // // // //               `}>
// // // // //                 {data.assignedOfficer ? <User size={18} /> : <HelpCircle size={18} />}
// // // // //               </div>
// // // // //               <div>
// // // // //                 <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Officer In-Charge</div>
// // // // //                 <div className="text-sm font-medium text-white">{data.assignedOfficer?.name || "Pending..."}</div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* ✅ NEW SECTION: Community Impact Poll */}
// // // // //         {data.currentStatus !== 'RESOLVED' && (
// // // // //           <section className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 space-y-4">
// // // // //             <div>
// // // // //               <h2 className="text-lg font-semibold text-white flex items-center gap-2">
// // // // //                 <Users size={20} className="text-blue-400" />
// // // // //                 Community Impact
// // // // //               </h2>
// // // // //               <p className="text-sm text-zinc-500">Are you also affected by this issue? Your vote helps prioritize.</p>
// // // // //             </div>

// // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// // // // //               <button
// // // // //                 disabled={loadingSignal}
// // // // //                 onClick={() => handleSignal("UPVOTE")}
// // // // //                 className="group flex items-center justify-between p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-blue-500/50 transition-all active:scale-[0.98] disabled:opacity-50"
// // // // //               >
// // // // //                 <div className="flex items-center gap-3 text-zinc-300 group-hover:text-blue-400 transition">
// // // // //                   <ThumbsUp size={18} />
// // // // //                   <span className="font-medium text-sm">Experiencing this too</span>
// // // // //                 </div>
// // // // //                 <span className="bg-zinc-950 px-3 py-1 rounded-full text-sm font-bold text-zinc-400 border border-zinc-800">
// // // // //                   {upvotesCount}
// // // // //                 </span>
// // // // //               </button>

// // // // //               <button
// // // // //                 disabled={loadingSignal}
// // // // //                 onClick={() => handleSignal("STILL_PRESENT")}
// // // // //                 className="group flex items-center justify-between p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-orange-500/50 transition-all active:scale-[0.98] disabled:opacity-50"
// // // // //               >
// // // // //                 <div className="flex items-center gap-3 text-zinc-300 group-hover:text-orange-400 transition">
// // // // //                   <AlertTriangle size={18} />
// // // // //                   <span className="font-medium text-sm">Issue is still present</span>
// // // // //                 </div>
// // // // //                 <span className="bg-zinc-950 px-3 py-1 rounded-full text-sm font-bold text-zinc-400 border border-zinc-800">
// // // // //                   {stillPresentCount}
// // // // //                 </span>
// // // // //               </button>
// // // // //             </div>
// // // // //           </section>
// // // // //         )}

// // // // //         {/* Action Card: Citizen Validation (Only highly relevant if RESOLVED) */}
// // // // //         {data.currentStatus === 'RESOLVED' && (
// // // // //           <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-4">
// // // // //             <div className="flex justify-between items-start">
// // // // //               <div>
// // // // //                 <h2 className="text-lg font-semibold text-white">Citizen Validation</h2>
// // // // //                 <p className="text-sm text-zinc-500">Is this issue actually resolved?</p>
// // // // //               </div>
// // // // //               <div className="text-right text-sm">
// // // // //                 <div className="text-green-400 font-medium">{data.validationCounts?.confirmed ?? 0} Confirmed</div>
// // // // //                 <div className="text-red-400 font-medium">{data.validationCounts?.notFixed ?? 0} Disputed</div>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="flex flex-col md:flex-row gap-4 items-center bg-black/20 p-3 rounded-xl border border-white/5">
// // // // //               <input
// // // // //                 className="bg-transparent border border-zinc-700 rounded-lg px-3 py-2 text-sm w-full md:w-32 focus:border-blue-500 outline-none transition"
// // // // //                 value={voterKey}
// // // // //                 onChange={(e) => setVoterKey(e.target.value)}
// // // // //                 placeholder="Voter ID"
// // // // //               />
// // // // //               <div className="flex gap-2 w-full">
// // // // //                 <button
// // // // //                   disabled={loadingVote}
// // // // //                   className="flex-1 flex items-center justify-center gap-2 bg-green-900/30 border border-green-800 hover:bg-green-900/50 text-green-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// // // // //                   onClick={() => vote("CONFIRMED")}
// // // // //                 >
// // // // //                   <CheckCircle size={16} /> Fixed
// // // // //                 </button>
// // // // //                 <button
// // // // //                   disabled={loadingVote}
// // // // //                   className="flex-1 flex items-center justify-center gap-2 bg-red-900/30 border border-red-800 hover:bg-red-900/50 text-red-400 px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50"
// // // // //                   onClick={() => vote("NOT_FIXED")}
// // // // //                 >
// // // // //                   <XCircle size={16} /> Not Fixed
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </section>
// // // // //         )}

// // // // //         {/* Media Grids */}
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //           <section className="space-y-3">
// // // // //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// // // // //               Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span>
// // // // //             </h3>
// // // // //             {citizenMedia.length > 0 ? (
// // // // //               <div className="grid grid-cols-2 gap-2">
// // // // //                 {citizenMedia.map((m: any) => (
// // // // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-zinc-800 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // // // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="evidence" />
// // // // //                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// // // // //                 No citizen photos
// // // // //               </div>
// // // // //             )}
// // // // //           </section>

// // // // //           <section className="space-y-3">
// // // // //             <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
// // // // //               Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span>
// // // // //             </h3>
// // // // //             {officerMedia.length > 0 ? (
// // // // //               <div className="grid grid-cols-2 gap-2">
// // // // //                 {officerMedia.map((m: any) => (
// // // // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-blue-900/50 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // // // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="proof" />
// // // // //                     <div className="absolute inset-0 border-2 border-blue-500/50 rounded-xl pointer-events-none" />
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div className="h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm">
// // // // //                 Pending resolution
// // // // //               </div>
// // // // //             )}
// // // // //           </section>
// // // // //         </div>

// // // // //         {/* Timeline */}
// // // // //         <section className="pt-4 border-t border-zinc-800 space-y-4">
// // // // //           <h3 className="font-semibold text-zinc-300">Activity Timeline</h3>
// // // // //           <div className="space-y-0 relative border-l-2 border-zinc-800/50 ml-4 pl-8">

// // // // //             {data.events
// // // // //               .filter((e: any) => e.type !== 'UPVOTED')
// // // // //               .map((e: any, idx: number, arr: any[]) => {
// // // // //                 const isLast = idx === arr.length - 1;
// // // // //                 let Icon = Activity;
// // // // //                 let colorClass = "text-zinc-400 bg-zinc-900 border-zinc-700";

// // // // //                 // Determine icon and color based on event type
// // // // //                 switch (e.type) {
// // // // //                   case 'CREATED':
// // // // //                     Icon = FileText;
// // // // //                     colorClass = "text-blue-400 bg-blue-900/20 border-blue-500/50";
// // // // //                     break;
// // // // //                   case 'ACKNOWLEDGED':
// // // // //                   case 'ASSIGNED':
// // // // //                     Icon = User;
// // // // //                     colorClass = "text-purple-400 bg-purple-900/20 border-purple-500/50";
// // // // //                     break;
// // // // //                   case 'WORK_IN_PROGRESS':
// // // // //                     Icon = Hammer;
// // // // //                     colorClass = "text-orange-400 bg-orange-900/20 border-orange-500/50";
// // // // //                     break;
// // // // //                   case 'RESOLVED':
// // // // //                     Icon = CheckCircle2;
// // // // //                     colorClass = "text-green-400 bg-green-900/20 border-green-500/50";
// // // // //                     break;
// // // // //                   case 'REOPENED':
// // // // //                   case 'REJECTED':
// // // // //                     Icon = AlertTriangle;
// // // // //                     colorClass = "text-red-400 bg-red-900/20 border-red-500/50";
// // // // //                     break;
// // // // //                 }

// // // // //                 return (
// // // // //                   <div key={e.id} className="relative pb-8 group">
// // // // //                     {/* Timeline Dot/Icon */}
// // // // //                     <div className={`
// // // // //                       absolute -left-[49px] top-0 w-8 h-8 rounded-full border flex items-center justify-center z-10
// // // // //                       ${colorClass} ${isLast ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-110' : ''}
// // // // //                     `}>
// // // // //                       <Icon size={14} />
// // // // //                     </div>

// // // // //                     {/* Content Card */}
// // // // //                     <div className="flex flex-col bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-xl hover:bg-zinc-900/80 transition shadow-sm">
// // // // //                       <div className="flex justify-between items-start mb-2">
// // // // //                         <span className={`text-sm font-bold ${isLast ? 'text-white' : 'text-zinc-300'}`}>
// // // // //                           {e.type.replace(/_/g, " ")}
// // // // //                         </span>
// // // // //                         <span className="text-[11px] text-zinc-500 font-mono bg-black/30 px-2 py-1 rounded">
// // // // //                           {new Date(e.createdAt).toLocaleString(undefined, {
// // // // //                             month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
// // // // //                           })}
// // // // //                         </span>
// // // // //                       </div>

// // // // //                       {/* Smart Data Rendering (Instead of JSON) */}
// // // // //                       {e.data && (
// // // // //                         <div className="mt-1 text-sm text-zinc-400">
// // // // //                           {e.type === 'CREATED' && (
// // // // //                             <p>Report successfully logged into the system.</p>
// // // // //                           )}

// // // // //                           {e.data.note && (
// // // // //                             <div className="mt-2 text-zinc-300 bg-black/40 border-l-2 border-zinc-600 pl-3 py-2 rounded-r-md italic">
// // // // //                               "{e.data.note}"
// // // // //                             </div>
// // // // //                           )}

// // // // //                           {e.data.reason && (
// // // // //                             <p className="mt-2 text-red-400 font-medium">Reason: {e.data.reason}</p>
// // // // //                           )}
// // // // //                         </div>
// // // // //                       )}

// // // // //                       {/* Actor Badge */}
// // // // //                       {e.actorRole && e.type !== 'CREATED' && (
// // // // //                         <div className="mt-3 flex items-center">
// // // // //                           <span className="text-[9px] uppercase tracking-wider font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
// // // // //                             Action by {e.actorRole}
// // // // //                           </span>
// // // // //                         </div>
// // // // //                       )}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 );
// // // // //               })}
// // // // //           </div>
// // // // //         </section>

// // // // //       </div>

// // // // //       {/* Fullscreen Lightbox */}
// // // // //       {activeImage && (
// // // // //         <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setActiveImage(null)}>
// // // // //           <button className="absolute top-6 right-6 text-white/50 hover:text-white transition">
// // // // //             <X size={32} />
// // // // //           </button>
// // // // //           <img src={activeImage} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
// // // // //         </div>
// // // // //       )}
// // // // //     </main>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import { useEffect, useState, use } from "react";
// // // // import { apiGet, apiPost, API_BASE } from "@/lib/api";
// // // // import {
// // // //   ArrowLeft, CheckCircle, XCircle, X, User,
// // // //   Building2, MapPin, HelpCircle, ThumbsUp, AlertTriangle, Users,
// // // //   Activity, FileText, Hammer, CheckCircle2 
// // // // } from "lucide-react";

// // // // export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
// // // //   const { id } = use(params);

// // // //   const [data, setData] = useState<any>(null);
// // // //   const [err, setErr] = useState<string | null>(null);
// // // //   const [voterKey, setVoterKey] = useState("u1");
// // // //   const [activeImage, setActiveImage] = useState<string | null>(null);

// // // //   // Loading states
// // // //   const [loadingVote, setLoadingVote] = useState(false);
// // // //   const [loadingSignal, setLoadingSignal] = useState(false);

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

// // // //   // --- HANDLERS ---
// // // //   async function vote(voteType: "CONFIRMED" | "NOT_FIXED") {
// // // //     setLoadingVote(true);
// // // //     setErr(null);
// // // //     try {
// // // //       await apiPost(`/complaints/${id}/validate`, { vote: voteType, voterKey });
// // // //       await load();
// // // //     } catch (e: any) {
// // // //       setErr(e.message || "Failed to submit vote");
// // // //     } finally {
// // // //       setLoadingVote(false);
// // // //     }
// // // //   }

// // // //   async function handleSignal(type: "UPVOTE" | "STILL_PRESENT") {
// // // //     setLoadingSignal(true);
// // // //     setErr(null);
// // // //     try {
// // // //       await apiPost(`/complaints/${id}/signal`, { type });
// // // //       await load(); // Reload to get updated counts
// // // //     } catch (e: any) {
// // // //       setErr(e.message || "Failed to submit signal");
// // // //     } finally {
// // // //       setLoadingSignal(false);
// // // //     }
// // // //   }

// // // //   const getImgUrl = (url: string) => {
// // // //     if (!url) return "";
// // // //     return url.startsWith("http") ? url : `${API_BASE}${url}`;
// // // //   };

// // // //   if (err) return <div className="p-6 sm:p-10 text-red-500 text-sm sm:text-base">Error: {err}</div>;
// // // //   if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500 text-sm sm:text-base">Loading details...</div>;

// // // //   // 1. Calculate Media
// // // //   const resolvedEvent = data.events?.find((e: any) => e.type === 'RESOLVED');
// // // //   const officerUrls = resolvedEvent?.data?.proofUrls ||
// // // //     (resolvedEvent?.data?.proofUrl ? [resolvedEvent.data.proofUrl] : []);
// // // //   const officerMedia = data.media?.filter((m: any) => officerUrls.includes(m.url)) || [];
// // // //   const citizenMedia = data.media?.filter((m: any) => !officerUrls.includes(m.url)) || [];

// // // //   // 2. Calculate Signals (Poll Counts)
// // // //   const upvotesCount = data.signals?.filter((s: any) => s.type === 'UPVOTE').length || 0;
// // // //   const stillPresentCount = data.signals?.filter((s: any) => s.type === 'STILL_PRESENT').length || 0;

// // // //   return (
// // // //     <main className="min-h-screen bg-black text-zinc-100 p-4 sm:p-6 md:p-10 flex justify-center">
// // // //       <div className="w-full max-w-3xl space-y-6 sm:space-y-8">

// // // //         {/* Header */}
// // // //         <div className="mb-4 sm:mb-6">
// // // //           {/* Premium Navigation Pill */}
// // // //           <div className="inline-flex items-center p-1 sm:p-1.5 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-xl sm:rounded-2xl shadow-xl mb-4 sm:mb-6 overflow-x-auto max-w-full">
// // // //             <a 
// // // //               href="/" 
// // // //               className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300 whitespace-nowrap"
// // // //             >
// // // //               <span className="p-1 rounded-md sm:rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition-all">
// // // //                 <ArrowLeft size={14} strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
// // // //               </span>
// // // //               Dashboard
// // // //             </a>

// // // //             <div className="w-px h-5 sm:h-6 bg-zinc-800 mx-1 sm:mx-2 shrink-0" />

// // // //             <a 
// // // //               href="/map" 
// // // //               className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300 whitespace-nowrap"
// // // //             >
// // // //               <span className="p-1 rounded-md sm:rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
// // // //                 <MapPin size={14} strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
// // // //               </span>
// // // //               Live Map
// // // //             </a>
// // // //           </div>

// // // //           <header>
// // // //             <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{data.title}</h1>
// // // //             <div className="flex flex-wrap items-center gap-2 mt-3 text-xs sm:text-sm text-zinc-400">
// // // //               <span className={`px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wide border ${data.currentStatus === 'RESOLVED'
// // // //                 ? 'bg-green-900/30 border-green-800 text-green-400'
// // // //                 : 'bg-blue-900/30 border-blue-800 text-blue-400'
// // // //                 }`}>
// // // //                 {data.currentStatus.replace(/_/g, " ")}
// // // //               </span>
// // // //               <span className="hidden sm:inline">•</span>
// // // //               <span className="text-blue-400 font-medium">{data.category}</span>
// // // //               <span className="hidden sm:inline">•</span>
// // // //               <span className="text-zinc-500">{new Date(data.createdAt).toLocaleDateString()}</span>
// // // //             </div>
// // // //           </header>

// // // //           {/* Context Cards */}
// // // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6">
// // // //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// // // //               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
// // // //                 <MapPin size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
// // // //               </div>
// // // //               <div className="min-w-0">
// // // //                 <div className="text-[10px] text-zinc-500 uppercase font-bold truncate">Ward Zone</div>
// // // //                 <div className="text-sm font-medium text-white truncate">{data.ward?.name || "Unknown"}</div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// // // //               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
// // // //                 <Building2 size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
// // // //               </div>
// // // //               <div className="min-w-0">
// // // //                 <div className="text-[10px] text-zinc-500 uppercase font-bold truncate">Department</div>
// // // //                 <div className="text-sm font-medium text-white truncate">{data.department?.name || "Unassigned"}</div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3 sm:col-span-2 md:col-span-1">
// // // //               <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0
// // // //                 ${data.assignedOfficer ? 'bg-purple-900/30 text-purple-400' : 'bg-zinc-800 text-zinc-600'}
// // // //               `}>
// // // //                 {data.assignedOfficer ? <User size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> : <HelpCircle size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
// // // //               </div>
// // // //               <div className="min-w-0">
// // // //                 <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider truncate">Officer In-Charge</div>
// // // //                 <div className="text-sm font-medium text-white truncate">{data.assignedOfficer?.name || "Pending..."}</div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Community Impact Poll */}
// // // //         {data.currentStatus !== 'RESOLVED' && (
// // // //           <section className="bg-zinc-900/30 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4">
// // // //             <div>
// // // //               <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
// // // //                 <Users size={20} className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
// // // //                 Community Impact
// // // //               </h2>
// // // //               <p className="text-xs sm:text-sm text-zinc-500 mt-1">Are you also affected by this issue? Your vote helps prioritize.</p>
// // // //             </div>

// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// // // //               <button
// // // //                 disabled={loadingSignal}
// // // //                 onClick={() => handleSignal("UPVOTE")}
// // // //                 className="group flex items-center justify-between p-3 sm:p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-blue-500/50 transition-all active:scale-[0.98] disabled:opacity-50"
// // // //               >
// // // //                 <div className="flex items-center gap-2.5 sm:gap-3 text-zinc-300 group-hover:text-blue-400 transition">
// // // //                   <ThumbsUp size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
// // // //                   <span className="font-medium text-xs sm:text-sm">Experiencing this too</span>
// // // //                 </div>
// // // //                 <span className="bg-zinc-950 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold text-zinc-400 border border-zinc-800">
// // // //                   {upvotesCount}
// // // //                 </span>
// // // //               </button>

// // // //               <button
// // // //                 disabled={loadingSignal}
// // // //                 onClick={() => handleSignal("STILL_PRESENT")}
// // // //                 className="group flex items-center justify-between p-3 sm:p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-orange-500/50 transition-all active:scale-[0.98] disabled:opacity-50"
// // // //               >
// // // //                 <div className="flex items-center gap-2.5 sm:gap-3 text-zinc-300 group-hover:text-orange-400 transition">
// // // //                   <AlertTriangle size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
// // // //                   <span className="font-medium text-xs sm:text-sm">Issue is still present</span>
// // // //                 </div>
// // // //                 <span className="bg-zinc-950 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold text-zinc-400 border border-zinc-800">
// // // //                   {stillPresentCount}
// // // //                 </span>
// // // //               </button>
// // // //             </div>
// // // //           </section>
// // // //         )}

// // // //         {/* Action Card: Citizen Validation */}
// // // //         {data.currentStatus === 'RESOLVED' && (
// // // //           <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4">
// // // //             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
// // // //               <div>
// // // //                 <h2 className="text-base sm:text-lg font-semibold text-white">Citizen Validation</h2>
// // // //                 <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">Is this issue actually resolved?</p>
// // // //               </div>
// // // //               <div className="text-left sm:text-right text-xs sm:text-sm flex gap-3 sm:block">
// // // //                 <div className="text-green-400 font-medium">{data.validationCounts?.confirmed ?? 0} Confirmed</div>
// // // //                 <div className="text-red-400 font-medium">{data.validationCounts?.notFixed ?? 0} Disputed</div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-center bg-black/20 p-3 rounded-xl border border-white/5">
// // // //               <input
// // // //                 className="bg-transparent border border-zinc-700 rounded-lg px-3 py-2 text-xs sm:text-sm w-full md:w-32 focus:border-blue-500 outline-none transition"
// // // //                 value={voterKey}
// // // //                 onChange={(e) => setVoterKey(e.target.value)}
// // // //                 placeholder="Voter ID"
// // // //               />
// // // //               <div className="flex flex-row gap-2 w-full">
// // // //                 <button
// // // //                   disabled={loadingVote}
// // // //                   className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-green-900/30 border border-green-800 hover:bg-green-900/50 text-green-400 px-3 sm:px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50 text-xs sm:text-sm font-medium"
// // // //                   onClick={() => vote("CONFIRMED")}
// // // //                 >
// // // //                   <CheckCircle size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Fixed
// // // //                 </button>
// // // //                 <button
// // // //                   disabled={loadingVote}
// // // //                   className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-red-900/30 border border-red-800 hover:bg-red-900/50 text-red-400 px-3 sm:px-4 py-2 rounded-lg transition active:scale-95 disabled:opacity-50 text-xs sm:text-sm font-medium"
// // // //                   onClick={() => vote("NOT_FIXED")}
// // // //                 >
// // // //                   <XCircle size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Not Fixed
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </section>
// // // //         )}

// // // //         {/* Media Grids */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
// // // //           <section className="space-y-3">
// // // //             <h3 className="font-semibold text-sm sm:text-base text-zinc-300 flex items-center gap-2">
// // // //               Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span>
// // // //             </h3>
// // // //             {citizenMedia.length > 0 ? (
// // // //               <div className="grid grid-cols-2 gap-2 sm:gap-3">
// // // //                 {citizenMedia.map((m: any) => (
// // // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-zinc-800 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="evidence" />
// // // //                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             ) : (
// // // //               <div className="h-24 sm:h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-xs sm:text-sm">
// // // //                 No citizen photos
// // // //               </div>
// // // //             )}
// // // //           </section>

// // // //           <section className="space-y-3">
// // // //             <h3 className="font-semibold text-sm sm:text-base text-zinc-300 flex items-center gap-2">
// // // //               Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span>
// // // //             </h3>
// // // //             {officerMedia.length > 0 ? (
// // // //               <div className="grid grid-cols-2 gap-2 sm:gap-3">
// // // //                 {officerMedia.map((m: any) => (
// // // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-blue-900/50 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="proof" />
// // // //                     <div className="absolute inset-0 border-2 border-blue-500/50 rounded-xl pointer-events-none" />
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             ) : (
// // // //               <div className="h-24 sm:h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-xs sm:text-sm">
// // // //                 Pending resolution
// // // //               </div>
// // // //             )}
// // // //           </section>
// // // //         </div>

// // // //         {/* Timeline */}
// // // //         <section className="pt-4 sm:pt-6 border-t border-zinc-800 space-y-4">
// // // //           <h3 className="font-semibold text-sm sm:text-base text-zinc-300">Activity Timeline</h3>
// // // //           <div className="space-y-0 relative border-l-2 border-zinc-800/50 ml-3 sm:ml-4 pl-6 sm:pl-8">

// // // //             {data.events
// // // //               .filter((e: any) => e.type !== 'UPVOTED')
// // // //               .map((e: any, idx: number, arr: any[]) => {
// // // //                 const isLast = idx === arr.length - 1;
// // // //                 let Icon = Activity;
// // // //                 let colorClass = "text-zinc-400 bg-zinc-900 border-zinc-700";

// // // //                 // Determine icon and color based on event type
// // // //                 switch (e.type) {
// // // //                   case 'CREATED':
// // // //                     Icon = FileText;
// // // //                     colorClass = "text-blue-400 bg-blue-900/20 border-blue-500/50";
// // // //                     break;
// // // //                   case 'ACKNOWLEDGED':
// // // //                   case 'ASSIGNED':
// // // //                     Icon = User;
// // // //                     colorClass = "text-purple-400 bg-purple-900/20 border-purple-500/50";
// // // //                     break;
// // // //                   case 'WORK_IN_PROGRESS':
// // // //                     Icon = Hammer;
// // // //                     colorClass = "text-orange-400 bg-orange-900/20 border-orange-500/50";
// // // //                     break;
// // // //                   case 'RESOLVED':
// // // //                     Icon = CheckCircle2;
// // // //                     colorClass = "text-green-400 bg-green-900/20 border-green-500/50";
// // // //                     break;
// // // //                   case 'REOPENED':
// // // //                   case 'REJECTED':
// // // //                     Icon = AlertTriangle;
// // // //                     colorClass = "text-red-400 bg-red-900/20 border-red-500/50";
// // // //                     break;
// // // //                 }

// // // //                 return (
// // // //                   <div key={e.id} className="relative pb-6 sm:pb-8 group">
// // // //                     {/* Timeline Dot/Icon */}
// // // //                     <div className={`
// // // //                       absolute -left-[41px] sm:-left-[49px] top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center z-10
// // // //                       ${colorClass} ${isLast ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-110' : ''}
// // // //                     `}>
// // // //                       <Icon size={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
// // // //                     </div>

// // // //                     {/* Content Card */}
// // // //                     <div className="flex flex-col bg-zinc-900/30 border border-zinc-800/50 p-3 sm:p-4 rounded-xl hover:bg-zinc-900/80 transition shadow-sm">
// // // //                       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
// // // //                         <span className={`text-xs sm:text-sm font-bold ${isLast ? 'text-white' : 'text-zinc-300'}`}>
// // // //                           {e.type.replace(/_/g, " ")}
// // // //                         </span>
// // // //                         <span className="text-[10px] sm:text-[11px] text-zinc-500 font-mono bg-black/30 px-1.5 sm:px-2 py-1 rounded w-fit">
// // // //                           {new Date(e.createdAt).toLocaleString(undefined, {
// // // //                             month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
// // // //                           })}
// // // //                         </span>
// // // //                       </div>

// // // //                       {/* Smart Data Rendering (Instead of JSON) */}
// // // //                       {e.data && (
// // // //                         <div className="mt-1 text-xs sm:text-sm text-zinc-400">
// // // //                           {e.type === 'CREATED' && (
// // // //                             <p>Report successfully logged into the system.</p>
// // // //                           )}

// // // //                           {e.data.note && (
// // // //                             <div className="mt-2 text-zinc-300 bg-black/40 border-l-2 border-zinc-600 pl-3 py-2 rounded-r-md italic">
// // // //                               "{e.data.note}"
// // // //                             </div>
// // // //                           )}

// // // //                           {e.data.reason && (
// // // //                             <p className="mt-2 text-red-400 font-medium">Reason: {e.data.reason}</p>
// // // //                           )}
// // // //                         </div>
// // // //                       )}

// // // //                       {/* Actor Badge */}
// // // //                       {e.actorRole && e.type !== 'CREATED' && (
// // // //                         <div className="mt-2 sm:mt-3 flex items-center">
// // // //                           <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
// // // //                             Action by {e.actorRole}
// // // //                           </span>
// // // //                         </div>
// // // //                       )}
// // // //                     </div>
// // // //                   </div>
// // // //                 );
// // // //               })}
// // // //           </div>
// // // //         </section>

// // // //       </div>

// // // //       {/* Fullscreen Lightbox */}
// // // //       {activeImage && (
// // // //         <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setActiveImage(null)}>
// // // //           <button className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/50 hover:text-white transition bg-black/50 p-2 rounded-full sm:bg-transparent sm:p-0">
// // // //             <X size={24} className="sm:w-8 sm:h-8" />
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
// // // import {
// // //   ArrowLeft, CheckCircle, XCircle, X, User,
// // //   Building2, MapPin, HelpCircle, ThumbsUp, AlertTriangle, Users,
// // //   Activity, FileText, Hammer, CheckCircle2, MessageSquare, Send 
// // // } from "lucide-react";

// // // export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
// // //   const { id } = use(params);

// // //   const [data, setData] = useState<any>(null);
// // //   const [err, setErr] = useState<string | null>(null);
// // //   const [voterKey, setVoterKey] = useState("u1");
// // //   const [activeImage, setActiveImage] = useState<string | null>(null);

// // //   // Loading states
// // //   const [loadingVote, setLoadingVote] = useState(false);
// // //   const [loadingSignal, setLoadingSignal] = useState(false);
// // //   const [hasVoted, setHasVoted] = useState(false);

// // //   // ✅ NEW: State for Community Updates
// // //   const [updateText, setUpdateText] = useState("");
// // //   const [loadingUpdate, setLoadingUpdate] = useState(false);

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

// // //   // --- HANDLERS ---
// // //   async function vote(voteType: "CONFIRMED" | "NOT_FIXED") {
// // //     setLoadingVote(true);
// // //     setErr(null);
// // //     try {
// // //       // Auto-generate a dummy voter ID for now so the user doesn't have to type it!
// // //       const autoVoterId = `citizen_${Math.floor(Math.random() * 10000)}`; 
// // //       await apiPost(`/complaints/${id}/validate`, { vote: voteType, voterKey: autoVoterId });

// // //       setHasVoted(true); // Trigger the success animation
// // //       await load(); // Reload the data to update the meter
// // //     } catch (e: any) {
// // //       setErr(e.message || "Failed to submit vote");
// // //     } finally {
// // //       setLoadingVote(false);
// // //     }
// // //   }

// // //   async function handleSignal(type: "UPVOTE" | "STILL_PRESENT") {
// // //     setLoadingSignal(true);
// // //     setErr(null);
// // //     try {
// // //       await apiPost(`/complaints/${id}/signal`, { type });
// // //       await load(); // Reload to get updated counts
// // //     } catch (e: any) {
// // //       setErr(e.message || "Failed to submit signal");
// // //     } finally {
// // //       setLoadingSignal(false);
// // //     }
// // //   }

// // //   // ✅ NEW: Handler to post a community update
// // //   async function handleAddUpdate(e: React.FormEvent) {
// // //     e.preventDefault();
// // //     if (!updateText.trim()) return;
// // //     setLoadingUpdate(true);
// // //     setErr(null);
// // //     try {
// // //       await apiPost(`/complaints/${id}/update`, { text: updateText });
// // //       setUpdateText(""); // Clear the input field
// // //       await load(); // Reload to show the new comment
// // //     } catch (e: any) {
// // //       setErr(e.message || "Failed to post update");
// // //     } finally {
// // //       setLoadingUpdate(false);
// // //     }
// // //   }

// // //   const getImgUrl = (url: string) => {
// // //     if (!url) return "";
// // //     return url.startsWith("http") ? url : `${API_BASE}${url}`;
// // //   };

// // //   if (err) return <div className="p-6 sm:p-10 text-red-500 text-sm sm:text-base">Error: {err}</div>;
// // //   if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500 text-sm sm:text-base">Loading details...</div>;

// // //   // 1. Calculate Media
// // //   const resolvedEvent = data.events?.find((e: any) => e.type === 'RESOLVED');
// // //   const officerUrls = resolvedEvent?.data?.proofUrls ||
// // //     (resolvedEvent?.data?.proofUrl ? [resolvedEvent.data.proofUrl] : []);
// // //   const officerMedia = data.media?.filter((m: any) => officerUrls.includes(m.url)) || [];
// // //   const citizenMedia = data.media?.filter((m: any) => !officerUrls.includes(m.url)) || [];

// // //   // 2. Calculate Signals (Poll Counts)
// // //   const upvotesCount = data.signals?.filter((s: any) => s.type === 'UPVOTE').length || 0;
// // //   const stillPresentCount = data.signals?.filter((s: any) => s.type === 'STILL_PRESENT').length || 0;

// // //   return (
// // //     <main className="min-h-screen bg-black text-zinc-100 p-4 sm:p-6 md:p-10 flex justify-center">
// // //       <div className="w-full max-w-3xl space-y-6 sm:space-y-8">

// // //         {/* Header */}
// // //         <div className="mb-4 sm:mb-6">
// // //           <div className="inline-flex items-center p-1 sm:p-1.5 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-xl sm:rounded-2xl shadow-xl mb-4 sm:mb-6 overflow-x-auto max-w-full">
// // //             <a href="/" className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300 whitespace-nowrap">
// // //               <span className="p-1 rounded-md sm:rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition-all">
// // //                 <ArrowLeft size={14} strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
// // //               </span>
// // //               Dashboard
// // //             </a>
// // //             <div className="w-px h-5 sm:h-6 bg-zinc-800 mx-1 sm:mx-2 shrink-0" />
// // //             <a href="/map" className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300 whitespace-nowrap">
// // //               <span className="p-1 rounded-md sm:rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
// // //                 <MapPin size={14} strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
// // //               </span>
// // //               Live Map
// // //             </a>
// // //           </div>

// // //           <header>
// // //             <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{data.title}</h1>
// // //             <div className="flex flex-wrap items-center gap-2 mt-3 text-xs sm:text-sm text-zinc-400">
// // //               <span className={`px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wide border ${data.currentStatus === 'RESOLVED' ? 'bg-green-900/30 border-green-800 text-green-400' : 'bg-blue-900/30 border-blue-800 text-blue-400'}`}>
// // //                 {data.currentStatus.replace(/_/g, " ")}
// // //               </span>
// // //               <span className="hidden sm:inline">•</span>
// // //               <span className="text-blue-400 font-medium">{data.category}</span>
// // //               <span className="hidden sm:inline">•</span>
// // //               <span className="text-zinc-500">{new Date(data.createdAt).toLocaleDateString()}</span>
// // //             </div>
// // //           </header>

// // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6">
// // //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// // //               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
// // //                 <MapPin size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
// // //               </div>
// // //               <div className="min-w-0">
// // //                 <div className="text-[10px] text-zinc-500 uppercase font-bold truncate">Ward Zone</div>
// // //                 <div className="text-sm font-medium text-white truncate">{data.ward?.name || "Unknown"}</div>
// // //               </div>
// // //             </div>

// // //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// // //               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
// // //                 <Building2 size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
// // //               </div>
// // //               <div className="min-w-0">
// // //                 <div className="text-[10px] text-zinc-500 uppercase font-bold truncate">Department</div>
// // //                 <div className="text-sm font-medium text-white truncate">{data.department?.name || "Unassigned"}</div>
// // //               </div>
// // //             </div>

// // //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3 sm:col-span-2 md:col-span-1">
// // //               <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${data.assignedOfficer ? 'bg-purple-900/30 text-purple-400' : 'bg-zinc-800 text-zinc-600'}`}>
// // //                 {data.assignedOfficer ? <User size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> : <HelpCircle size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
// // //               </div>
// // //               <div className="min-w-0">
// // //                 <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider truncate">Officer In-Charge</div>
// // //                 <div className="text-sm font-medium text-white truncate">{data.assignedOfficer?.name || "Pending..."}</div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {data.currentStatus !== 'RESOLVED' && (
// // //           <section className="bg-zinc-900/30 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4">
// // //             <div>
// // //               <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
// // //                 <Users size={20} className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
// // //                 Community Impact
// // //               </h2>
// // //               <p className="text-xs sm:text-sm text-zinc-500 mt-1">Are you also affected by this issue? Your vote helps prioritize.</p>
// // //             </div>

// // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// // //               <button disabled={loadingSignal} onClick={() => handleSignal("UPVOTE")} className="group flex items-center justify-between p-3 sm:p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-blue-500/50 transition-all active:scale-[0.98] disabled:opacity-50">
// // //                 <div className="flex items-center gap-2.5 sm:gap-3 text-zinc-300 group-hover:text-blue-400 transition">
// // //                   <ThumbsUp size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
// // //                   <span className="font-medium text-xs sm:text-sm">Experiencing this too</span>
// // //                 </div>
// // //                 <span className="bg-zinc-950 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold text-zinc-400 border border-zinc-800">{upvotesCount}</span>
// // //               </button>

// // //               <button disabled={loadingSignal} onClick={() => handleSignal("STILL_PRESENT")} className="group flex items-center justify-between p-3 sm:p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-orange-500/50 transition-all active:scale-[0.98] disabled:opacity-50">
// // //                 <div className="flex items-center gap-2.5 sm:gap-3 text-zinc-300 group-hover:text-orange-400 transition">
// // //                   <AlertTriangle size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
// // //                   <span className="font-medium text-xs sm:text-sm">Issue is still present</span>
// // //                 </div>
// // //                 <span className="bg-zinc-950 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold text-zinc-400 border border-zinc-800">{stillPresentCount}</span>
// // //               </button>
// // //             </div>
// // //           </section>
// // //         )}

// // //         {/* 🔥 NEXT LEVEL CITIZEN VALIDATION 🔥 */}
// // //         {data.currentStatus === 'RESOLVED' && (
// // //           <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-5 sm:p-7 shadow-2xl">
// // //             {/* Background Glow */}
// // //             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

// // //             <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
// // //               <div>
// // //                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
// // //                   <Activity size={12} className="animate-pulse" />
// // //                   Community Verification
// // //                 </div>
// // //                 <h2 className="text-xl sm:text-2xl font-bold text-white">Is this actually fixed?</h2>
// // //                 <p className="text-sm text-zinc-400 mt-1">The officer marked this as resolved. We need your eyes on the ground.</p>
// // //               </div>

// // //               {/* The Consensus Stats */}
// // //               <div className="flex gap-4 text-sm font-bold bg-black/40 px-4 py-2 rounded-xl border border-white/5">
// // //                 <div className="flex flex-col items-center">
// // //                   <span className="text-green-400 text-lg">{data.validationCounts?.confirmed ?? 0}</span>
// // //                   <span className="text-[10px] text-zinc-500 uppercase">Fixed</span>
// // //                 </div>
// // //                 <div className="w-px bg-zinc-800" />
// // //                 <div className="flex flex-col items-center">
// // //                   <span className="text-red-400 text-lg">{data.validationCounts?.notFixed ?? 0}</span>
// // //                   <span className="text-[10px] text-zinc-500 uppercase">Broken</span>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* The Consensus Meter */}
// // //             <div className="mb-6 space-y-2 relative z-10">
// // //               <div className="flex justify-between text-xs font-bold text-zinc-500 mb-1">
// // //                 <span className="text-green-500/80">Consensus</span>
// // //                 <span className="text-red-500/80">Disputed</span>
// // //               </div>
// // //               <div className="h-2.5 sm:h-3 w-full bg-zinc-900 rounded-full overflow-hidden flex shadow-inner">
// // //                 {/* Dynamically calculate the widths based on votes */}
// // //                 <div 
// // //                   className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-1000 ease-out"
// // //                   style={{ 
// // //                     width: `${((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0)) === 0 
// // //                       ? 50 
// // //                       : ((data.validationCounts?.confirmed ?? 0) / ((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0))) * 100}%` 
// // //                   }}
// // //                 />
// // //                 <div 
// // //                   className="h-full bg-gradient-to-l from-red-600 to-red-400 transition-all duration-1000 ease-out"
// // //                   style={{ 
// // //                     width: `${((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0)) === 0 
// // //                       ? 50 
// // //                       : ((data.validationCounts?.notFixed ?? 0) / ((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0))) * 100}%` 
// // //                   }}
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Action Area */}
// // //             <div className="relative z-10 mt-6 pt-6 border-t border-zinc-800/80">
// // //               {hasVoted ? (
// // //                 <div className="flex items-center justify-center gap-3 py-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl animate-in fade-in slide-in-from-bottom-2">
// // //                   <CheckCircle2 className="w-6 h-6" />
// // //                   <span className="font-bold text-sm sm:text-base">Your vote has been recorded!</span>
// // //                 </div>
// // //               ) : (
// // //                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
// // //                   <button
// // //                     disabled={loadingVote}
// // //                     className="group flex-1 relative overflow-hidden flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] text-zinc-300 hover:text-green-400 px-4 py-3 sm:py-4 rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 font-bold text-sm sm:text-base"
// // //                     onClick={() => vote("CONFIRMED")}
// // //                   >
// // //                     <div className="absolute inset-0 bg-green-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
// // //                     <CheckCircle className="w-5 h-5 relative z-10" /> 
// // //                     <span className="relative z-10">Yes, it's fixed</span>
// // //                   </button>

// // //                   <button
// // //                     disabled={loadingVote}
// // //                     className="group flex-1 relative overflow-hidden flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] text-zinc-300 hover:text-red-400 px-4 py-3 sm:py-4 rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 font-bold text-sm sm:text-base"
// // //                     onClick={() => vote("NOT_FIXED")}
// // //                   >
// // //                     <div className="absolute inset-0 bg-red-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
// // //                     <XCircle className="w-5 h-5 relative z-10" /> 
// // //                     <span className="relative z-10">No, still broken</span>
// // //                   </button>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </section>
// // //         )}

// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
// // //           <section className="space-y-3">
// // //             <h3 className="font-semibold text-sm sm:text-base text-zinc-300 flex items-center gap-2">
// // //               Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span>
// // //             </h3>
// // //             {citizenMedia.length > 0 ? (
// // //               <div className="grid grid-cols-2 gap-2 sm:gap-3">
// // //                 {citizenMedia.map((m: any) => (
// // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-zinc-800 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="evidence" />
// // //                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             ) : (
// // //               <div className="h-24 sm:h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-xs sm:text-sm">
// // //                 No citizen photos
// // //               </div>
// // //             )}
// // //           </section>

// // //           <section className="space-y-3">
// // //             <h3 className="font-semibold text-sm sm:text-base text-zinc-300 flex items-center gap-2">
// // //               Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span>
// // //             </h3>
// // //             {officerMedia.length > 0 ? (
// // //               <div className="grid grid-cols-2 gap-2 sm:gap-3">
// // //                 {officerMedia.map((m: any) => (
// // //                   <div key={m.id} className="relative group aspect-square rounded-xl overflow-hidden border border-blue-900/50 cursor-pointer" onClick={() => setActiveImage(getImgUrl(m.url))}>
// // //                     <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" alt="proof" />
// // //                     <div className="absolute inset-0 border-2 border-blue-500/50 rounded-xl pointer-events-none" />
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             ) : (
// // //               <div className="h-24 sm:h-32 rounded-xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-xs sm:text-sm">
// // //                 Pending resolution
// // //               </div>
// // //             )}
// // //           </section>
// // //         </div>

// // //         {/* ✅ NEW: Community Updates Section */}
// // //         <section className="pt-4 sm:pt-6 border-t border-zinc-800 space-y-4">
// // //           <h3 className="font-semibold text-sm sm:text-base text-zinc-300 flex items-center gap-2">
// // //             <MessageSquare size={18} className="text-blue-400" />
// // //             Community Updates
// // //           </h3>

// // //           <div className="space-y-3 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
// // //             {data.updates?.map((u: any) => (
// // //               <div key={u.id} className="bg-zinc-900/40 p-3 sm:p-4 rounded-xl border border-white/5 relative">
// // //                 <div className="flex justify-between items-center mb-1.5">
// // //                   <span className="text-xs sm:text-sm font-bold text-blue-400">{u.user?.name || "Citizen"}</span>
// // //                   <span className="text-[10px] sm:text-xs text-zinc-500">
// // //                     {new Date(u.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
// // //                   </span>
// // //                 </div>
// // //                 <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{u.text}</p>
// // //                 {u.mediaUrl && (
// // //                   <img 
// // //                     src={getImgUrl(u.mediaUrl)} 
// // //                     alt="Update proof" 
// // //                     className="mt-3 rounded-lg w-full max-w-xs border border-white/10 cursor-pointer hover:opacity-80 transition" 
// // //                     onClick={() => setActiveImage(getImgUrl(u.mediaUrl))}
// // //                   />
// // //                 )}
// // //               </div>
// // //             ))}
// // //             {(!data.updates || data.updates.length === 0) && (
// // //               <div className="text-xs sm:text-sm text-zinc-500 italic p-4 text-center bg-zinc-900/20 rounded-xl border border-zinc-800/50">
// // //                 No updates yet. Be the first to add context to this issue.
// // //               </div>
// // //             )}
// // //           </div>

// // //           <form onSubmit={handleAddUpdate} className="flex gap-2 sm:gap-3 mt-4">
// // //             <input
// // //               type="text"
// // //               placeholder="Add an update or context (e.g. 'Pothole is getting deeper')..."
// // //               value={updateText}
// // //               onChange={(e) => setUpdateText(e.target.value)}
// // //               disabled={loadingUpdate}
// // //               className="flex-1 bg-zinc-950 border border-zinc-700 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:border-blue-500 outline-none transition disabled:opacity-50"
// // //             />
// // //             <button
// // //               type="submit"
// // //               disabled={loadingUpdate || !updateText.trim()}
// // //               className="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold transition-colors text-xs sm:text-sm flex items-center justify-center gap-2"
// // //             >
// // //               <Send size={16} className="hidden sm:block" />
// // //               Post
// // //             </button>
// // //           </form>
// // //         </section>

// // //         {/* Timeline */}
// // //         <section className="pt-4 sm:pt-6 border-t border-zinc-800 space-y-4">
// // //           <h3 className="font-semibold text-sm sm:text-base text-zinc-300">Activity Timeline</h3>
// // //           <div className="space-y-0 relative border-l-2 border-zinc-800/50 ml-3 sm:ml-4 pl-6 sm:pl-8">

// // //             {data.events
// // //               .filter((e: any) => e.type !== 'UPVOTED')
// // //               .map((e: any, idx: number, arr: any[]) => {
// // //                 const isLast = idx === arr.length - 1;
// // //                 let Icon = Activity;
// // //                 let colorClass = "text-zinc-400 bg-zinc-900 border-zinc-700";

// // //                 switch (e.type) {
// // //                   case 'CREATED':
// // //                     Icon = FileText;
// // //                     colorClass = "text-blue-400 bg-blue-900/20 border-blue-500/50";
// // //                     break;
// // //                   case 'ACKNOWLEDGED':
// // //                   case 'ASSIGNED':
// // //                     Icon = User;
// // //                     colorClass = "text-purple-400 bg-purple-900/20 border-purple-500/50";
// // //                     break;
// // //                   case 'WORK_IN_PROGRESS':
// // //                     Icon = Hammer;
// // //                     colorClass = "text-orange-400 bg-orange-900/20 border-orange-500/50";
// // //                     break;
// // //                   case 'RESOLVED':
// // //                     Icon = CheckCircle2;
// // //                     colorClass = "text-green-400 bg-green-900/20 border-green-500/50";
// // //                     break;
// // //                   case 'REOPENED':
// // //                   case 'REJECTED':
// // //                     Icon = AlertTriangle;
// // //                     colorClass = "text-red-400 bg-red-900/20 border-red-500/50";
// // //                     break;
// // //                 }

// // //                 return (
// // //                   <div key={e.id} className="relative pb-6 sm:pb-8 group">
// // //                     <div className={`
// // //                       absolute -left-[41px] sm:-left-[49px] top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center z-10
// // //                       ${colorClass} ${isLast ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-110' : ''}
// // //                     `}>
// // //                       <Icon size={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
// // //                     </div>

// // //                     <div className="flex flex-col bg-zinc-900/30 border border-zinc-800/50 p-3 sm:p-4 rounded-xl hover:bg-zinc-900/80 transition shadow-sm">
// // //                       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
// // //                         <span className={`text-xs sm:text-sm font-bold ${isLast ? 'text-white' : 'text-zinc-300'}`}>
// // //                           {e.type.replace(/_/g, " ")}
// // //                         </span>
// // //                         <span className="text-[10px] sm:text-[11px] text-zinc-500 font-mono bg-black/30 px-1.5 sm:px-2 py-1 rounded w-fit">
// // //                           {new Date(e.createdAt).toLocaleString(undefined, {
// // //                             month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
// // //                           })}
// // //                         </span>
// // //                       </div>

// // //                       {e.data && (
// // //                         <div className="mt-1 text-xs sm:text-sm text-zinc-400">
// // //                           {e.type === 'CREATED' && (
// // //                             <p>Report successfully logged into the system.</p>
// // //                           )}

// // //                           {e.data.note && (
// // //                             <div className="mt-2 text-zinc-300 bg-black/40 border-l-2 border-zinc-600 pl-3 py-2 rounded-r-md italic">
// // //                               "{e.data.note}"
// // //                             </div>
// // //                           )}

// // //                           {e.data.reason && (
// // //                             <p className="mt-2 text-red-400 font-medium">Reason: {e.data.reason}</p>
// // //                           )}
// // //                         </div>
// // //                       )}

// // //                       {e.actorRole && e.type !== 'CREATED' && (
// // //                         <div className="mt-2 sm:mt-3 flex items-center">
// // //                           <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
// // //                             Action by {e.actorRole}
// // //                           </span>
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //           </div>
// // //         </section>

// // //       </div>

// // //       {activeImage && (
// // //         <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setActiveImage(null)}>
// // //           <button className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/50 hover:text-white transition bg-black/50 p-2 rounded-full sm:bg-transparent sm:p-0">
// // //             <X size={24} className="sm:w-8 sm:h-8" />
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
// // import {
// //   ArrowLeft, CheckCircle, XCircle, X, User,
// //   Building2, MapPin, HelpCircle, ThumbsUp, AlertTriangle, Users,
// //   Activity, FileText, Hammer, CheckCircle2, MessageSquare, Send, History 
// // } from "lucide-react";

// // export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
// //   const { id } = use(params);

// //   const [data, setData] = useState<any>(null);
// //   const [err, setErr] = useState<string | null>(null);
// //   const [activeImage, setActiveImage] = useState<string | null>(null);

// //   // Loading states
// //   const [loadingVote, setLoadingVote] = useState(false);
// //   const [loadingSignal, setLoadingSignal] = useState(false);
// //   const [hasVoted, setHasVoted] = useState(false);

// //   // State for Community Updates
// //   const [updateText, setUpdateText] = useState("");
// //   const [loadingUpdate, setLoadingUpdate] = useState(false);

// //   // State for Mobile Timeline Drawer
// //   const [showMobileTimeline, setShowMobileTimeline] = useState(false);

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

// //   // --- HANDLERS ---
// //   async function vote(voteType: "CONFIRMED" | "NOT_FIXED") {
// //     setLoadingVote(true);
// //     setErr(null);
// //     try {
// //       const autoVoterId = `citizen_${Math.floor(Math.random() * 10000)}`; 
// //       await apiPost(`/complaints/${id}/validate`, { vote: voteType, voterKey: autoVoterId });
// //       setHasVoted(true);
// //       await load();
// //     } catch (e: any) {
// //       setErr(e.message || "Failed to submit vote");
// //     } finally {
// //       setLoadingVote(false);
// //     }
// //   }

// //   async function handleSignal(type: "UPVOTE" | "STILL_PRESENT") {
// //     setLoadingSignal(true);
// //     setErr(null);
// //     try {
// //       await apiPost(`/complaints/${id}/signal`, { type });
// //       await load(); 
// //     } catch (e: any) {
// //       setErr(e.message || "Failed to submit signal");
// //     } finally {
// //       setLoadingSignal(false);
// //     }
// //   }

// //   async function handleAddUpdate(e: React.FormEvent) {
// //     e.preventDefault();
// //     if (!updateText.trim()) return;
// //     setLoadingUpdate(true);
// //     setErr(null);
// //     try {
// //       await apiPost(`/complaints/${id}/update`, { text: updateText });
// //       setUpdateText(""); 
// //       await load(); 
// //     } catch (e: any) {
// //       setErr(e.message || "Failed to post update");
// //     } finally {
// //       setLoadingUpdate(false);
// //     }
// //   }

// //   const getImgUrl = (url: string) => {
// //     if (!url) return "";
// //     return url.startsWith("http") ? url : `${API_BASE}${url}`;
// //   };

// //   // 🔥 ULTRA PREMIUM TIMELINE RENDERER 🔥
// //   const renderTimeline = () => (
// //     <div className="relative ml-4 sm:ml-6 border-l-2 border-zinc-800/60 space-y-8 pb-4 mt-4">
// //       {data.events
// //         .filter((e: any) => e.type !== 'UPVOTED')
// //         .map((e: any, idx: number, arr: any[]) => {
// //           const isLast = idx === arr.length - 1;

// //           let Icon = Activity;
// //           let colorTheme = { text: "text-zinc-400", border: "border-zinc-700", shadow: "shadow-zinc-500/20", bgLight: "bg-zinc-500/10" };

// //           switch (e.type) {
// //             case 'CREATED':
// //               Icon = FileText;
// //               colorTheme = { text: "text-blue-400", border: "border-blue-500/50", shadow: "shadow-blue-500/30", bgLight: "bg-blue-500/10" };
// //               break;
// //             case 'ACKNOWLEDGED':
// //             case 'ASSIGNED':
// //               Icon = User;
// //               colorTheme = { text: "text-purple-400", border: "border-purple-500/50", shadow: "shadow-purple-500/30", bgLight: "bg-purple-500/10" };
// //               break;
// //             case 'WORK_IN_PROGRESS':
// //               Icon = Hammer;
// //               colorTheme = { text: "text-orange-400", border: "border-orange-500/50", shadow: "shadow-orange-500/30", bgLight: "bg-orange-500/10" };
// //               break;
// //             case 'RESOLVED':
// //               Icon = CheckCircle2;
// //               colorTheme = { text: "text-green-400", border: "border-green-500/50", shadow: "shadow-green-500/30", bgLight: "bg-green-500/10" };
// //               break;
// //             case 'REOPENED':
// //             case 'REJECTED':
// //               Icon = AlertTriangle;
// //               colorTheme = { text: "text-red-400", border: "border-red-500/50", shadow: "shadow-red-500/30", bgLight: "bg-red-500/10" };
// //               break;
// //           }

// //           return (
// //             <div key={e.id} className="relative group pl-8 sm:pl-10">

// //               {/* Premium Glowing Node */}
// //               <div className={`
// //                 absolute -left-[17px] sm:-left-[21px] top-1 sm:top-2 
// //                 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 bg-black flex items-center justify-center z-10
// //                 ${colorTheme.text} ${colorTheme.border} transition-all duration-500
// //                 ${isLast ? `shadow-[0_0_20px_var(--tw-shadow-color)] ${colorTheme.shadow} scale-110 ring-4 ring-black` : 'group-hover:scale-110 group-hover:bg-zinc-900'}
// //               `}>
// //                 <Icon size={16} strokeWidth={2.5} />
// //               </div>

// //               {/* Premium Glass Card */}
// //               <div className="bg-gradient-to-br from-zinc-900/80 to-black/40 border border-white/5 rounded-2xl p-4 sm:p-5 hover:bg-zinc-900/90 transition-all duration-300 shadow-xl backdrop-blur-md relative overflow-hidden group-hover:border-white/10 group-hover:-translate-y-0.5">

// //                 {/* Glossy top highlight for depth */}
// //                 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

// //                 <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-1 xl:gap-2 mb-3">
// //                   <span className={`text-xs sm:text-sm font-black tracking-wide ${isLast ? 'text-white' : colorTheme.text}`}>
// //                     {e.type.replace(/_/g, " ")}
// //                   </span>
// //                   <span className="text-[10px] sm:text-xs text-zinc-500 font-mono flex items-center">
// //                     {new Date(e.createdAt).toLocaleString(undefined, {
// //                       month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
// //                     })}
// //                   </span>
// //                 </div>

// //                 {e.data && (
// //                   <div className="mt-1 text-sm text-zinc-300">
// //                     {e.type === 'CREATED' && <p className="text-zinc-400">System logged the report securely.</p>}
// //                     {e.data.note && (
// //                       <div className="mt-3 text-zinc-300 bg-black/50 border-l-2 border-zinc-600 pl-4 py-3 rounded-r-xl italic shadow-inner">
// //                         "{e.data.note}"
// //                       </div>
// //                     )}
// //                     {e.data.reason && <p className="mt-3 px-3 py-2 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20 text-xs font-medium">Reason: {e.data.reason}</p>}
// //                   </div>
// //                 )}

// //                 {/* Ultra-sleek Officer Badge */}
// //                 {e.actorRole && e.type !== 'CREATED' && (
// //                   <div className="mt-4 flex items-center">
// //                     <span className="text-[9px] uppercase tracking-widest font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
// //                       <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
// //                       Action by {e.actorRole}
// //                     </span>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           );
// //         })}
// //     </div>
// //   );

// //   if (err) return <div className="p-6 sm:p-10 text-red-500 text-sm sm:text-base">Error: {err}</div>;
// //   if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500 text-sm sm:text-base">Loading details...</div>;

// //   const resolvedEvent = data.events?.find((e: any) => e.type === 'RESOLVED');
// //   const officerUrls = resolvedEvent?.data?.proofUrls || (resolvedEvent?.data?.proofUrl ? [resolvedEvent.data.proofUrl] : []);
// //   const officerMedia = data.media?.filter((m: any) => officerUrls.includes(m.url)) || [];
// //   const citizenMedia = data.media?.filter((m: any) => !officerUrls.includes(m.url)) || [];
// //   const upvotesCount = data.signals?.filter((s: any) => s.type === 'UPVOTE').length || 0;
// //   const stillPresentCount = data.signals?.filter((s: any) => s.type === 'STILL_PRESENT').length || 0;

// //   return (
// //     <main className="min-h-screen bg-black text-zinc-100 p-4 sm:p-6 md:p-10 flex justify-center pb-24 lg:pb-10">
// //       {/* 🚀 EXPANDED CONTAINER MAX WIDTH FOR DESKTOP SPLIT 🚀 */}
// //       <div className="w-full max-w-7xl space-y-6 sm:space-y-8">

// //         {/* Header */}
// //         <div className="mb-4 sm:mb-6 max-w-4xl">
// //           <div className="inline-flex items-center p-1 sm:p-1.5 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-xl sm:rounded-2xl shadow-xl mb-4 sm:mb-6 overflow-x-auto max-w-full">
// //             <a href="/" className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300 whitespace-nowrap">
// //               <span className="p-1 rounded-md sm:rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition-all">
// //                 <ArrowLeft size={14} strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
// //               </span>
// //               Dashboard
// //             </a>
// //             <div className="w-px h-5 sm:h-6 bg-zinc-800 mx-1 sm:mx-2 shrink-0" />
// //             <a href="/map" className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300 whitespace-nowrap">
// //               <span className="p-1 rounded-md sm:rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
// //                 <MapPin size={14} strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
// //               </span>
// //               Live Map
// //             </a>
// //           </div>

// //           <header>
// //             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">{data.title}</h1>
// //             <div className="flex flex-wrap items-center gap-2 mt-3 text-xs sm:text-sm text-zinc-400">
// //               <span className={`px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wide border ${data.currentStatus === 'RESOLVED' ? 'bg-green-900/30 border-green-800 text-green-400' : 'bg-blue-900/30 border-blue-800 text-blue-400'}`}>
// //                 {data.currentStatus.replace(/_/g, " ")}
// //               </span>
// //               <span className="hidden sm:inline">•</span>
// //               <span className="text-blue-400 font-medium">{data.category}</span>
// //               <span className="hidden sm:inline">•</span>
// //               <span className="text-zinc-500">{new Date(data.createdAt).toLocaleDateString()}</span>
// //             </div>
// //           </header>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6">
// //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// //               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
// //                 <MapPin size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
// //               </div>
// //               <div className="min-w-0">
// //                 <div className="text-[10px] text-zinc-500 uppercase font-bold truncate">Ward Zone</div>
// //                 <div className="text-sm font-medium text-white truncate">{data.ward?.name || "Unknown"}</div>
// //               </div>
// //             </div>

// //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
// //               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
// //                 <Building2 size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
// //               </div>
// //               <div className="min-w-0">
// //                 <div className="text-[10px] text-zinc-500 uppercase font-bold truncate">Department</div>
// //                 <div className="text-sm font-medium text-white truncate">{data.department?.name || "Unassigned"}</div>
// //               </div>
// //             </div>

// //             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3 sm:col-span-2 md:col-span-1">
// //               <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${data.assignedOfficer ? 'bg-purple-900/30 text-purple-400' : 'bg-zinc-800 text-zinc-600'}`}>
// //                 {data.assignedOfficer ? <User size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> : <HelpCircle size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
// //               </div>
// //               <div className="min-w-0">
// //                 <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider truncate">Officer In-Charge</div>
// //                 <div className="text-sm font-medium text-white truncate">{data.assignedOfficer?.name || "Pending..."}</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* 🔥 THE SPLIT LAYOUT (COMMUNITY VS TIMELINE) 🔥 */}
// //         <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 pt-6 sm:pt-8 border-t border-zinc-800/80 relative">

// //           {/* LEFT COLUMN: Polls, Validation, Photos, and Comments */}
// //           <section className="flex-1 min-w-0 flex flex-col gap-6 sm:gap-8">

// //             {/* Polls & Validation */}
// //             {data.currentStatus !== 'RESOLVED' && (
// //               <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-lg">
// //                 <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-1">
// //                   <Users size={20} className="text-blue-400" />
// //                   Community Impact
// //                 </h2>
// //                 <p className="text-sm text-zinc-500 mb-4">Are you also affected by this issue? Your vote helps prioritize.</p>

// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// //                   <button disabled={loadingSignal} onClick={() => handleSignal("UPVOTE")} className="group flex items-center justify-between p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-blue-500/50 transition-all active:scale-[0.98] disabled:opacity-50">
// //                     <div className="flex items-center gap-3 text-zinc-300 group-hover:text-blue-400 transition">
// //                       <ThumbsUp size={18} />
// //                       <span className="font-bold text-sm">Experiencing this too</span>
// //                     </div>
// //                     <span className="bg-zinc-950 px-3 py-1 rounded-full text-sm font-bold text-zinc-400 border border-zinc-800">{upvotesCount}</span>
// //                   </button>

// //                   <button disabled={loadingSignal} onClick={() => handleSignal("STILL_PRESENT")} className="group flex items-center justify-between p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-orange-500/50 transition-all active:scale-[0.98] disabled:opacity-50">
// //                     <div className="flex items-center gap-3 text-zinc-300 group-hover:text-orange-400 transition">
// //                       <AlertTriangle size={18} />
// //                       <span className="font-bold text-sm">Issue is still present</span>
// //                     </div>
// //                     <span className="bg-zinc-950 px-3 py-1 rounded-full text-sm font-bold text-zinc-400 border border-zinc-800">{stillPresentCount}</span>
// //                   </button>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Gamified Validation */}
// //             {data.currentStatus === 'RESOLVED' && (
// //               <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
// //                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
// //                 <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
// //                   <div>
// //                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
// //                       <Activity size={12} className="animate-pulse" /> Community Verification
// //                     </div>
// //                     <h2 className="text-xl sm:text-2xl font-bold text-white">Is this actually fixed?</h2>
// //                     <p className="text-sm text-zinc-400 mt-1">The officer marked this as resolved. We need your eyes on the ground.</p>
// //                   </div>
// //                   <div className="flex gap-4 text-sm font-bold bg-black/40 px-4 py-2 rounded-xl border border-white/5">
// //                     <div className="flex flex-col items-center">
// //                       <span className="text-green-400 text-lg">{data.validationCounts?.confirmed ?? 0}</span>
// //                       <span className="text-[10px] text-zinc-500 uppercase">Fixed</span>
// //                     </div>
// //                     <div className="w-px bg-zinc-800" />
// //                     <div className="flex flex-col items-center">
// //                       <span className="text-red-400 text-lg">{data.validationCounts?.notFixed ?? 0}</span>
// //                       <span className="text-[10px] text-zinc-500 uppercase">Broken</span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="mb-6 space-y-2 relative z-10">
// //                   <div className="flex justify-between text-xs font-bold text-zinc-500 mb-1">
// //                     <span className="text-green-500/80">Consensus</span>
// //                     <span className="text-red-500/80">Disputed</span>
// //                   </div>
// //                   <div className="h-3 w-full bg-zinc-950 rounded-full overflow-hidden flex shadow-inner border border-zinc-800/50">
// //                     <div className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-1000 ease-out" style={{ width: `${((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0)) === 0 ? 50 : ((data.validationCounts?.confirmed ?? 0) / ((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0))) * 100}%` }} />
// //                     <div className="h-full bg-gradient-to-l from-red-600 to-red-400 transition-all duration-1000 ease-out" style={{ width: `${((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0)) === 0 ? 50 : ((data.validationCounts?.notFixed ?? 0) / ((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0))) * 100}%` }} />
// //                   </div>
// //                 </div>

// //                 <div className="relative z-10 mt-6 pt-6 border-t border-zinc-800/80">
// //                   {hasVoted ? (
// //                     <div className="flex items-center justify-center gap-3 py-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl animate-in fade-in slide-in-from-bottom-2">
// //                       <CheckCircle2 className="w-6 h-6" /> <span className="font-bold text-base">Your vote has been recorded!</span>
// //                     </div>
// //                   ) : (
// //                     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
// //                       <button disabled={loadingVote} className="group flex-1 relative overflow-hidden flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] text-zinc-300 hover:text-green-400 px-4 py-4 rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 font-bold text-base" onClick={() => vote("CONFIRMED")}>
// //                         <div className="absolute inset-0 bg-green-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
// //                         <CheckCircle className="w-5 h-5 relative z-10" /> <span className="relative z-10">Yes, it's fixed</span>
// //                       </button>
// //                       <button disabled={loadingVote} className="group flex-1 relative overflow-hidden flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] text-zinc-300 hover:text-red-400 px-4 py-4 rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 font-bold text-base" onClick={() => vote("NOT_FIXED")}>
// //                         <div className="absolute inset-0 bg-red-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
// //                         <XCircle className="w-5 h-5 relative z-10" /> <span className="relative z-10">No, still broken</span>
// //                       </button>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             )}

// //             {/* Media Grids */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
// //               <div className="space-y-3">
// //                 <h3 className="font-bold text-base text-zinc-300 flex items-center gap-2">Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span></h3>
// //                 {citizenMedia.length > 0 ? (
// //                   <div className="grid grid-cols-2 gap-3">
// //                     {citizenMedia.map((m: any) => (
// //                       <div key={m.id} className="relative group aspect-square rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer shadow-lg" onClick={() => setActiveImage(getImgUrl(m.url))}>
// //                         <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="evidence" />
// //                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
// //                       </div>
// //                     ))}
// //                   </div>
// //                 ) : (
// //                   <div className="h-32 rounded-2xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm bg-zinc-900/20">No citizen photos</div>
// //                 )}
// //               </div>

// //               <div className="space-y-3">
// //                 <h3 className="font-bold text-base text-zinc-300 flex items-center gap-2">Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span></h3>
// //                 {officerMedia.length > 0 ? (
// //                   <div className="grid grid-cols-2 gap-3">
// //                     {officerMedia.map((m: any) => (
// //                       <div key={m.id} className="relative group aspect-square rounded-2xl overflow-hidden border border-blue-900/50 cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.1)]" onClick={() => setActiveImage(getImgUrl(m.url))}>
// //                         <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="proof" />
// //                         <div className="absolute inset-0 border-2 border-blue-500/50 rounded-2xl pointer-events-none" />
// //                       </div>
// //                     ))}
// //                   </div>
// //                 ) : (
// //                   <div className="h-32 rounded-2xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm bg-zinc-900/20">Pending resolution</div>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Community Discussion Box */}
// //             <div className="mt-4 bg-zinc-950 border border-zinc-800/80 rounded-3xl p-5 sm:p-8 shadow-2xl flex flex-col h-[500px]">
// //               <h3 className="font-bold text-xl text-white flex items-center gap-3 mb-6">
// //                 <MessageSquare size={22} className="text-blue-400" /> Community Discussion
// //               </h3>

// //               <div className="flex-1 space-y-4 pr-2 overflow-y-auto custom-scrollbar">
// //                 {data.updates?.map((u: any) => (
// //                   <div key={u.id} className="bg-zinc-900/60 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
// //                     <div className="flex justify-between items-center mb-3">
// //                       <span className="text-sm font-bold text-blue-400 flex items-center gap-2">
// //                         <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center text-xs text-blue-300 shadow-inner">
// //                           {u.user?.name?.charAt(0).toUpperCase() || "C"}
// //                         </div>
// //                         {u.user?.name || "Citizen"}
// //                       </span>
// //                       <span className="text-xs text-zinc-500 font-mono">
// //                         {new Date(u.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
// //                       </span>
// //                     </div>
// //                     <p className="text-zinc-300 text-sm leading-relaxed ml-9">{u.text}</p>
// //                   </div>
// //                 ))}
// //                 {(!data.updates || data.updates.length === 0) && (
// //                   <div className="text-sm text-zinc-500 italic p-8 text-center bg-zinc-900/30 rounded-2xl border border-zinc-800/50 h-full flex items-center justify-center">
// //                     No updates yet. Be the first to add context to this issue.
// //                   </div>
// //                 )}
// //               </div>

// //               <form onSubmit={handleAddUpdate} className="flex gap-3 mt-6 pt-6 border-t border-zinc-800/50 shrink-0">
// //                 <input
// //                   type="text"
// //                   placeholder="Add context to this issue..."
// //                   value={updateText}
// //                   onChange={(e) => setUpdateText(e.target.value)}
// //                   disabled={loadingUpdate}
// //                   className="flex-1 bg-black border border-zinc-700 rounded-xl px-5 py-3.5 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition disabled:opacity-50 shadow-inner"
// //                 />
// //                 <button type="submit" disabled={loadingUpdate || !updateText.trim()} className="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] disabled:shadow-none hover:-translate-y-0.5">
// //                   <Send size={18} />
// //                   <span className="hidden sm:inline">Post</span>
// //                 </button>
// //               </form>
// //             </div>
// //           </section>

// //           {/* RIGHT COLUMN: Desktop Sticky Ultra-Premium Timeline */}
// //           <aside className="hidden lg:block w-[380px] xl:w-[440px] shrink-0">
// //             <div className="sticky top-8 rounded-[2rem] p-6 xl:p-8 bg-zinc-950 border border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
// //               {/* Abstract Glassmorphic Glows */}
// //               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
// //               <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

// //               <h3 className="font-bold text-xl text-white mb-8 flex items-center gap-3 relative z-10 border-b border-zinc-800/80 pb-6">
// //                 <History className="text-zinc-400" size={24} /> System Timeline
// //               </h3>

// //               <div className="relative z-10">
// //                 {renderTimeline()}
// //               </div>
// //             </div>
// //           </aside>
// //         </div>
// //       </div>

// //       {/* MOBILE TIMELINE FAB */}
// //       <button onClick={() => setShowMobileTimeline(true)} className="lg:hidden fixed bottom-6 right-6 z-40 bg-zinc-900 border border-zinc-700 shadow-[0_0_30px_rgba(0,0,0,0.8)] text-zinc-300 hover:text-white p-4 rounded-full flex items-center justify-center transition-transform active:scale-95">
// //         <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-600 opacity-20 animate-ping" />
// //         <History size={24} />
// //       </button>

// //       {/* MOBILE TIMELINE SLIDE-OVER DRAWER */}
// //       {showMobileTimeline && (
// //         <div 
// //           className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 lg:hidden"
// //           onClick={() => setShowMobileTimeline(false)}
// //         >
// //           <div 
// //             className="w-[85vw] sm:w-96 h-full bg-zinc-950 border-l border-zinc-800 shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col relative overflow-hidden"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
// //             <div className="p-6 border-b border-zinc-800 flex items-center justify-between relative z-10 bg-zinc-950/80 backdrop-blur-md">
// //               <h3 className="font-bold text-xl text-white flex items-center gap-2"><History size={20} className="text-zinc-400" /> Timeline</h3>
// //               <button onClick={() => setShowMobileTimeline(false)} className="p-2.5 bg-zinc-900 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition active:scale-95">
// //                 <X size={18} />
// //               </button>
// //             </div>
// //             <div className="p-6 overflow-y-auto flex-1 custom-scrollbar relative z-10">
// //               {renderTimeline()}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Fullscreen Lightbox */}
// //       {activeImage && (
// //         <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-200" onClick={() => setActiveImage(null)}>
// //           <button className="absolute top-6 right-6 text-white/50 hover:text-white transition bg-black/50 p-2.5 rounded-full hover:bg-white/10 backdrop-blur-md">
// //             <X size={24} />
// //           </button>
// //           <img src={activeImage} className="max-w-full max-h-[90vh] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]" onClick={(e) => e.stopPropagation()} />
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
//   Activity, FileText, Hammer, CheckCircle2, MessageSquare, Send, History
// } from "lucide-react";

// export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params);

//   const [data, setData] = useState<any>(null);
//   const [err, setErr] = useState<string | null>(null);
//   const [activeImage, setActiveImage] = useState<string | null>(null);

//   // Loading states
//   const [loadingVote, setLoadingVote] = useState(false);
//   const [loadingSignal, setLoadingSignal] = useState(false);
//   const [hasVoted, setHasVoted] = useState(false);
//   const [localVerified, setLocalVerified] = useState(false);

//   // State for Community Updates
//   const [updateText, setUpdateText] = useState("");
//   const [loadingUpdate, setLoadingUpdate] = useState(false);

//   // State for Mobile Timeline Drawer
//   const [showMobileTimeline, setShowMobileTimeline] = useState(false);

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
//       let currentLat: number | undefined;
//       let currentLng: number | undefined;

//       if ("geolocation" in navigator) {
//         try {
//           const position = await new Promise<GeolocationPosition>((resolve, reject) => {
//             navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 4000 });
//           });
//           currentLat = position.coords.latitude;
//           currentLng = position.coords.longitude;
//         } catch (e) {
//           console.warn("Could not get fast GPS lock, voting without geo-badge.");
//         }
//       }

//       const autoVoterId = `citizen_${Math.floor(Math.random() * 10000)}`;
//       const response: any = await apiPost(`/complaints/${id}/validate`, {
//         vote: voteType,
//         voterKey: autoVoterId,
//         lat: currentLat,
//         lng: currentLng
//       });

//       if (response.isLocal) {
//         setLocalVerified(true);
//       }

//       setHasVoted(true);
//       await load();
//     } catch (e: any) {
//       setErr(e.message || "Failed to submit vote");
//     } finally {
//       setLoadingVote(false);
//     }
//   }

//   async function handleSignal(type: "UPVOTE" | "STILL_PRESENT") {
//     setLoadingSignal(true);
//     setErr(null);
//     try {
//       await apiPost(`/complaints/${id}/signal`, { type });
//       await load();
//     } catch (e: any) {
//       setErr(e.message || "Failed to submit signal");
//     } finally {
//       setLoadingSignal(false);
//     }
//   }

//   async function handleAddUpdate(e: React.FormEvent) {
//     e.preventDefault();
//     if (!updateText.trim()) return;
//     setLoadingUpdate(true);
//     setErr(null);
//     try {
//       await apiPost(`/complaints/${id}/update`, { text: updateText });
//       setUpdateText("");
//       await load();
//     } catch (e: any) {
//       setErr(e.message || "Failed to post update");
//     } finally {
//       setLoadingUpdate(false);
//     }
//   }

//   const getImgUrl = (url: string) => {
//     if (!url) return "";
//     return url.startsWith("http") ? url : `${API_BASE}${url}`;
//   };

//   // 🔥 ULTRA PREMIUM TIMELINE RENDERER 🔥
//   const renderTimeline = () => (
//     <div className="relative ml-4 sm:ml-6 border-l-2 border-zinc-800/60 space-y-8 pb-4 mt-4">
//       {data.events
//         .filter((e: any) => e.type !== 'UPVOTED')
//         .map((e: any, idx: number, arr: any[]) => {
//           const isLast = idx === arr.length - 1;

//           let Icon = Activity;
//           let colorTheme = { text: "text-zinc-400", border: "border-zinc-700", shadow: "shadow-zinc-500/20", bgLight: "bg-zinc-500/10" };

//           switch (e.type) {
//             case 'CREATED':
//               Icon = FileText;
//               colorTheme = { text: "text-blue-400", border: "border-blue-500/50", shadow: "shadow-blue-500/30", bgLight: "bg-blue-500/10" };
//               break;
//             case 'ACKNOWLEDGED':
//             case 'ASSIGNED':
//               Icon = User;
//               colorTheme = { text: "text-purple-400", border: "border-purple-500/50", shadow: "shadow-purple-500/30", bgLight: "bg-purple-500/10" };
//               break;
//             case 'WORK_IN_PROGRESS':
//               Icon = Hammer;
//               colorTheme = { text: "text-orange-400", border: "border-orange-500/50", shadow: "shadow-orange-500/30", bgLight: "bg-orange-500/10" };
//               break;
//             case 'RESOLVED':
//               Icon = CheckCircle2;
//               colorTheme = { text: "text-green-400", border: "border-green-500/50", shadow: "shadow-green-500/30", bgLight: "bg-green-500/10" };
//               break;
//             case 'REOPENED':
//             case 'REJECTED':
//               Icon = AlertTriangle;
//               colorTheme = { text: "text-red-400", border: "border-red-500/50", shadow: "shadow-red-500/30", bgLight: "bg-red-500/10" };
//               break;
//           }

//           return (
//             <div key={e.id} className="relative group pl-8 sm:pl-10">

//               <div className={`
//                 absolute -left-[17px] sm:-left-[21px] top-1 sm:top-2 
//                 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 bg-black flex items-center justify-center z-10
//                 ${colorTheme.text} ${colorTheme.border} transition-all duration-500
//                 ${isLast ? `shadow-[0_0_20px_var(--tw-shadow-color)] ${colorTheme.shadow} scale-110 ring-4 ring-black` : 'group-hover:scale-110 group-hover:bg-zinc-900'}
//               `}>
//                 <Icon size={16} strokeWidth={2.5} />
//               </div>

//               <div className="bg-gradient-to-br from-zinc-900/80 to-black/40 border border-white/5 rounded-2xl p-4 sm:p-5 hover:bg-zinc-900/90 transition-all duration-300 shadow-xl backdrop-blur-md relative overflow-hidden group-hover:border-white/10 group-hover:-translate-y-0.5">

//                 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

//                 <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-1 xl:gap-2 mb-3">
//                   <span className={`text-xs sm:text-sm font-black tracking-wide ${isLast ? 'text-white' : colorTheme.text}`}>
//                     {e.type.replace(/_/g, " ")}
//                   </span>
//                   <span className="text-[10px] sm:text-xs text-zinc-500 font-mono flex items-center">
//                     {new Date(e.createdAt).toLocaleString(undefined, {
//                       month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
//                     })}
//                   </span>
//                 </div>

//                 {e.data && (
//                   <div className="mt-1 text-sm text-zinc-300">
//                     {e.type === 'CREATED' && <p className="text-zinc-400">System logged the report securely.</p>}
//                     {e.data.note && (
//                       <div className="mt-3 text-zinc-300 bg-black/50 border-l-2 border-zinc-600 pl-4 py-3 rounded-r-xl italic shadow-inner">
//                         "{e.data.note}"
//                       </div>
//                     )}
//                     {e.data.reason && <p className="mt-3 px-3 py-2 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20 text-xs font-medium">Reason: {e.data.reason}</p>}
//                   </div>
//                 )}

//                 {e.actorRole && e.type !== 'CREATED' && (
//                   <div className="mt-4 flex items-center">
//                     <span className="text-[9px] uppercase tracking-widest font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
//                       <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
//                       Action by {e.actorRole}
//                     </span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );

//   if (err) return <div className="p-6 sm:p-10 text-red-500 text-sm sm:text-base">Error: {err}</div>;
//   if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500 text-sm sm:text-base">Loading details...</div>;

//   const resolvedEvent = data.events?.find((e: any) => e.type === 'RESOLVED');
//   const officerUrls = resolvedEvent?.data?.proofUrls || (resolvedEvent?.data?.proofUrl ? [resolvedEvent.data.proofUrl] : []);
//   const officerMedia = data.media?.filter((m: any) => officerUrls.includes(m.url)) || [];
//   const citizenMedia = data.media?.filter((m: any) => !officerUrls.includes(m.url)) || [];
//   const upvotesCount = data.signals?.filter((s: any) => s.type === 'UPVOTE').length || 0;
//   const stillPresentCount = data.signals?.filter((s: any) => s.type === 'STILL_PRESENT').length || 0;

//   return (
//     <main className="min-h-screen bg-black text-zinc-100 p-4 sm:p-6 md:p-10 flex justify-center pb-24 lg:pb-10">
//       <div className="w-full max-w-7xl space-y-6 sm:space-y-8">

//         {/* Header */}
//         <div className="mb-4 sm:mb-6 max-w-4xl">
//           <div className="inline-flex items-center p-1 sm:p-1.5 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-xl sm:rounded-2xl shadow-xl mb-4 sm:mb-6 overflow-x-auto max-w-full">
//             <a href="/" className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300 whitespace-nowrap">
//               <span className="p-1 rounded-md sm:rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition-all">
//                 <ArrowLeft size={14} strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//               </span>
//               Dashboard
//             </a>
//             <div className="w-px h-5 sm:h-6 bg-zinc-800 mx-1 sm:mx-2 shrink-0" />
//             <a href="/map" className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300 whitespace-nowrap">
//               <span className="p-1 rounded-md sm:rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
//                 <MapPin size={14} strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//               </span>
//               Live Map
//             </a>
//           </div>

//           <header>
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">{data.title}</h1>
//             <div className="flex flex-wrap items-center gap-2 mt-3 text-xs sm:text-sm text-zinc-400">
//               <span className={`px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wide border ${data.currentStatus === 'RESOLVED' ? 'bg-green-900/30 border-green-800 text-green-400' : 'bg-blue-900/30 border-blue-800 text-blue-400'}`}>
//                 {data.currentStatus.replace(/_/g, " ")}
//               </span>
//               <span className="hidden sm:inline">•</span>
//               <span className="text-blue-400 font-medium">{data.category}</span>
//               <span className="hidden sm:inline">•</span>
//               <span className="text-zinc-500">{new Date(data.createdAt).toLocaleDateString()}</span>
//             </div>
//           </header>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6">
//             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
//                 <MapPin size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
//               </div>
//               <div className="min-w-0">
//                 <div className="text-[10px] text-zinc-500 uppercase font-bold truncate">Ward Zone</div>
//                 <div className="text-sm font-medium text-white truncate">{data.ward?.name || "Unknown"}</div>
//               </div>
//             </div>

//             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
//                 <Building2 size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
//               </div>
//               <div className="min-w-0">
//                 <div className="text-[10px] text-zinc-500 uppercase font-bold truncate">Department</div>
//                 <div className="text-sm font-medium text-white truncate">{data.department?.name || "Unassigned"}</div>
//               </div>
//             </div>

//             <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3 sm:col-span-2 md:col-span-1">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${data.assignedOfficer ? 'bg-purple-900/30 text-purple-400' : 'bg-zinc-800 text-zinc-600'}`}>
//                 {data.assignedOfficer ? <User size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> : <HelpCircle size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
//               </div>
//               <div className="min-w-0">
//                 <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider truncate">Officer In-Charge</div>
//                 <div className="text-sm font-medium text-white truncate">{data.assignedOfficer?.name || "Pending..."}</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 🔥 THE SPLIT LAYOUT (COMMUNITY VS TIMELINE) 🔥 */}
//         <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 pt-6 sm:pt-8 border-t border-zinc-800/80 relative">

//           {/* LEFT COLUMN: Polls, Validation, Photos, and Comments */}
//           <section className="flex-1 min-w-0 flex flex-col gap-6 sm:gap-8">

//             {/* Polls & Validation */}
//             {data.currentStatus !== 'RESOLVED' && (
//               <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-lg">
//                 <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-1">
//                   <Users size={20} className="text-blue-400" />
//                   Community Impact
//                 </h2>
//                 <p className="text-sm text-zinc-500 mb-4">Are you also affected by this issue? Your vote helps prioritize.</p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   <button disabled={loadingSignal} onClick={() => handleSignal("UPVOTE")} className="group flex items-center justify-between p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-blue-500/50 transition-all active:scale-[0.98] disabled:opacity-50">
//                     <div className="flex items-center gap-3 text-zinc-300 group-hover:text-blue-400 transition">
//                       <ThumbsUp size={18} />
//                       <span className="font-bold text-sm">Experiencing this too</span>
//                     </div>
//                     <span className="bg-zinc-950 px-3 py-1 rounded-full text-sm font-bold text-zinc-400 border border-zinc-800">{upvotesCount}</span>
//                   </button>

//                   <button disabled={loadingSignal} onClick={() => handleSignal("STILL_PRESENT")} className="group flex items-center justify-between p-4 rounded-xl border border-zinc-700 bg-zinc-800/40 hover:bg-zinc-800 hover:border-orange-500/50 transition-all active:scale-[0.98] disabled:opacity-50">
//                     <div className="flex items-center gap-3 text-zinc-300 group-hover:text-orange-400 transition">
//                       <AlertTriangle size={18} />
//                       <span className="font-bold text-sm">Issue is still present</span>
//                     </div>
//                     <span className="bg-zinc-950 px-3 py-1 rounded-full text-sm font-bold text-zinc-400 border border-zinc-800">{stillPresentCount}</span>
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Gamified Validation */}
//             {data.currentStatus === 'RESOLVED' && (
//               <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
//                 <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
//                   <div>
//                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
//                       <Activity size={12} className="animate-pulse" /> Community Verification
//                     </div>
//                     <h2 className="text-xl sm:text-2xl font-bold text-white">Is this actually fixed?</h2>
//                     <p className="text-sm text-zinc-400 mt-1">The officer marked this as resolved. We need your eyes on the ground.</p>
//                   </div>
//                   <div className="flex gap-4 text-sm font-bold bg-black/40 px-4 py-2 rounded-xl border border-white/5">
//                     <div className="flex flex-col items-center">
//                       <span className="text-green-400 text-lg">{data.validationCounts?.confirmed ?? 0}</span>
//                       <span className="text-[10px] text-zinc-500 uppercase">Fixed</span>
//                     </div>
//                     <div className="w-px bg-zinc-800" />
//                     <div className="flex flex-col items-center">
//                       <span className="text-red-400 text-lg">{data.validationCounts?.notFixed ?? 0}</span>
//                       <span className="text-[10px] text-zinc-500 uppercase">Broken</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-6 space-y-2 relative z-10">
//                   <div className="flex justify-between text-xs font-bold text-zinc-500 mb-1">
//                     <span className="text-green-500/80">Consensus</span>
//                     <span className="text-red-500/80">Disputed</span>
//                   </div>
//                   <div className="h-3 w-full bg-zinc-950 rounded-full overflow-hidden flex shadow-inner border border-zinc-800/50">
//                     <div className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-1000 ease-out" style={{ width: `${((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0)) === 0 ? 50 : ((data.validationCounts?.confirmed ?? 0) / ((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0))) * 100}%` }} />
//                     <div className="h-full bg-gradient-to-l from-red-600 to-red-400 transition-all duration-1000 ease-out" style={{ width: `${((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0)) === 0 ? 50 : ((data.validationCounts?.notFixed ?? 0) / ((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0))) * 100}%` }} />
//                   </div>
//                 </div>

//                 <div className="relative z-10 mt-6 pt-6 border-t border-zinc-800/80">
//                   {hasVoted ? (
//                     <div className="flex flex-col items-center justify-center gap-3 py-6 bg-green-500/10 border border-green-500/20 rounded-2xl animate-in fade-in slide-in-from-bottom-2 shadow-inner">
//                       <div className="flex items-center gap-2 text-green-400">
//                         <CheckCircle2 className="w-7 h-7" />
//                         <span className="font-bold text-lg">Your vote has been recorded!</span>
//                       </div>
//                       {/* 🔥 GEOLOCATED PREMIUM BADGE 🔥 */}
//                       {localVerified && (
//                         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-in zoom-in duration-500">
//                           <MapPin size={14} className="animate-bounce" /> 📍 Verified Local Vote (2x Weight)
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                       <button disabled={loadingVote} className="group flex-1 relative overflow-hidden flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] text-zinc-300 hover:text-green-400 px-4 py-4 rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 font-bold text-base" onClick={() => vote("CONFIRMED")}>
//                         <div className="absolute inset-0 bg-green-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//                         <CheckCircle className="w-5 h-5 relative z-10" /> <span className="relative z-10">Yes, it's fixed</span>
//                       </button>
//                       <button disabled={loadingVote} className="group flex-1 relative overflow-hidden flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] text-zinc-300 hover:text-red-400 px-4 py-4 rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 font-bold text-base" onClick={() => vote("NOT_FIXED")}>
//                         <div className="absolute inset-0 bg-red-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//                         <XCircle className="w-5 h-5 relative z-10" /> <span className="relative z-10">No, still broken</span>
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}

//             {/* Media Grids */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//               <div className="space-y-3">
//                 <h3 className="font-bold text-base text-zinc-300 flex items-center gap-2">Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span></h3>
//                 {citizenMedia.length > 0 ? (
//                   <div className="grid grid-cols-2 gap-3">
//                     {citizenMedia.map((m: any) => (
//                       <div key={m.id} className="relative group aspect-square rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer shadow-lg" onClick={() => setActiveImage(getImgUrl(m.url))}>
//                         <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="evidence" />
//                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="h-32 rounded-2xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm bg-zinc-900/20">No citizen photos</div>
//                 )}
//               </div>

//               <div className="space-y-3">
//                 <h3 className="font-bold text-base text-zinc-300 flex items-center gap-2">Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span></h3>
//                 {officerMedia.length > 0 ? (
//                   <div className="grid grid-cols-2 gap-3">
//                     {officerMedia.map((m: any) => (
//                       <div key={m.id} className="relative group aspect-square rounded-2xl overflow-hidden border border-blue-900/50 cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.1)]" onClick={() => setActiveImage(getImgUrl(m.url))}>
//                         <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="proof" />
//                         <div className="absolute inset-0 border-2 border-blue-500/50 rounded-2xl pointer-events-none" />
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="h-32 rounded-2xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm bg-zinc-900/20">Pending resolution</div>
//                 )}
//               </div>
//             </div>

//             {/* Community Discussion Box */}
//             <div className="mt-4 bg-zinc-950 border border-zinc-800/80 rounded-3xl p-5 sm:p-8 shadow-2xl flex flex-col h-[500px]">
//               <h3 className="font-bold text-xl text-white flex items-center gap-3 mb-6">
//                 <MessageSquare size={22} className="text-blue-400" /> Community Discussion
//               </h3>

//               <div className="flex-1 space-y-4 pr-2 overflow-y-auto custom-scrollbar">
//                 {data.updates?.map((u: any) => (
//                   <div key={u.id} className="bg-zinc-900/60 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
//                     <div className="flex justify-between items-center mb-3">
//                       <span className="text-sm font-bold text-blue-400 flex items-center gap-2">
//                         <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center text-xs text-blue-300 shadow-inner">
//                           {u.user?.name?.charAt(0).toUpperCase() || "C"}
//                         </div>
//                         {u.user?.name || "Citizen"}
//                       </span>
//                       <span className="text-xs text-zinc-500 font-mono">
//                         {new Date(u.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
//                       </span>
//                     </div>
//                     <p className="text-zinc-300 text-sm leading-relaxed ml-9">{u.text}</p>
//                   </div>
//                 ))}
//                 {(!data.updates || data.updates.length === 0) && (
//                   <div className="text-sm text-zinc-500 italic p-8 text-center bg-zinc-900/30 rounded-2xl border border-zinc-800/50 h-full flex items-center justify-center">
//                     No updates yet. Be the first to add context to this issue.
//                   </div>
//                 )}
//               </div>

//               <form onSubmit={handleAddUpdate} className="flex gap-3 mt-6 pt-6 border-t border-zinc-800/50 shrink-0">
//                 <input
//                   type="text"
//                   placeholder="Add context to this issue..."
//                   value={updateText}
//                   onChange={(e) => setUpdateText(e.target.value)}
//                   disabled={loadingUpdate}
//                   className="flex-1 bg-black border border-zinc-700 rounded-xl px-5 py-3.5 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition disabled:opacity-50 shadow-inner"
//                 />
//                 <button type="submit" disabled={loadingUpdate || !updateText.trim()} className="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] disabled:shadow-none hover:-translate-y-0.5">
//                   <Send size={18} />
//                   <span className="hidden sm:inline">Post</span>
//                 </button>
//               </form>
//             </div>
//           </section>

//           {/* RIGHT COLUMN: Desktop Sticky Ultra-Premium Timeline */}
//           <aside className="hidden lg:block w-[380px] xl:w-[440px] shrink-0">
//             <div className="sticky top-8 rounded-[2rem] p-6 xl:p-8 bg-zinc-950 border border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
//               <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

//               <h3 className="font-bold text-xl text-white mb-8 flex items-center gap-3 relative z-10 border-b border-zinc-800/80 pb-6">
//                 <History className="text-zinc-400" size={24} /> System Timeline
//               </h3>

//               <div className="relative z-10">
//                 {renderTimeline()}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>

//       {/* MOBILE TIMELINE FAB */}
//       <button onClick={() => setShowMobileTimeline(true)} className="lg:hidden fixed bottom-6 right-6 z-40 bg-zinc-900 border border-zinc-700 shadow-[0_0_30px_rgba(0,0,0,0.8)] text-zinc-300 hover:text-white p-4 rounded-full flex items-center justify-center transition-transform active:scale-95">
//         <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-600 opacity-20 animate-ping" />
//         <History size={24} />
//       </button>

//       {/* MOBILE TIMELINE SLIDE-OVER DRAWER */}
//       {showMobileTimeline && (
//         <div
//           className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 lg:hidden"
//           onClick={() => setShowMobileTimeline(false)}
//         >
//           <div
//             className="w-[85vw] sm:w-96 h-full bg-zinc-950 border-l border-zinc-800 shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col relative overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
//             <div className="p-6 border-b border-zinc-800 flex items-center justify-between relative z-10 bg-zinc-950/80 backdrop-blur-md">
//               <h3 className="font-bold text-xl text-white flex items-center gap-2"><History size={20} className="text-zinc-400" /> Timeline</h3>
//               <button onClick={() => setShowMobileTimeline(false)} className="p-2.5 bg-zinc-900 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition active:scale-95">
//                 <X size={18} />
//               </button>
//             </div>
//             <div className="p-6 overflow-y-auto flex-1 custom-scrollbar relative z-10">
//               {renderTimeline()}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Fullscreen Lightbox */}
//       {activeImage && (
//         <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-200" onClick={() => setActiveImage(null)}>
//           <button className="absolute top-6 right-6 text-white/50 hover:text-white transition bg-black/50 p-2.5 rounded-full hover:bg-white/10 backdrop-blur-md">
//             <X size={24} />
//           </button>
//           <img src={activeImage} className="max-w-full max-h-[90vh] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]" onClick={(e) => e.stopPropagation()} />
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
  Activity, FileText, Hammer, CheckCircle2, MessageSquare, Send, History,
  Flame, BellRing, Car, Wind, Coins, AlertOctagon
} from "lucide-react";

export default function ComplaintDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Loading states
  const [loadingVote, setLoadingVote] = useState(false);
  const [loadingSignal, setLoadingSignal] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [localVerified, setLocalVerified] = useState(false);
  
  // Expressive Validation States
  const [severityLevel, setSeverityLevel] = useState<number>(2); // 1=Minor, 2=Inconvenience, 3=Danger
  const [loadingNudge, setLoadingNudge] = useState(false);
  const [hasNudged, setHasNudged] = useState(false);

  // State for Community Updates
  const [updateText, setUpdateText] = useState("");
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  // State for Mobile Timeline Drawer
  const [showMobileTimeline, setShowMobileTimeline] = useState(false);

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
      let currentLat: number | undefined;
      let currentLng: number | undefined;

      if ("geolocation" in navigator) {
        try {
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 4000 });
          });
          currentLat = position.coords.latitude;
          currentLng = position.coords.longitude;
        } catch (e) {
          console.warn("Could not get fast GPS lock, voting without geo-badge.");
        }
      }

      const autoVoterId = `citizen_${Math.floor(Math.random() * 10000)}`; 
      const response: any = await apiPost(`/complaints/${id}/validate`, { 
        vote: voteType, 
        voterKey: autoVoterId,
        lat: currentLat,
        lng: currentLng
      });
      
      if (response.isLocal) {
        setLocalVerified(true);
      }
      
      setHasVoted(true);
      await load();
    } catch (e: any) {
      setErr(e.message || "Failed to submit vote");
    } finally {
      setLoadingVote(false);
    }
  }

  // ✅ UPGRADED: Handles civic emojis and severity levels
  async function handleSignal(type: string) {
    setLoadingSignal(true);
    setErr(null);
    try {
      await apiPost(`/complaints/${id}/signal`, { type, severity: severityLevel });
      await load(); 
    } catch (e: any) {
      setErr(e.message || "Failed to submit signal");
    } finally {
      setLoadingSignal(false);
    }
  }

  // ✅ NEW: Handles the 24hr "Urge Action" Nudge
  async function handleNudge() {
    setLoadingNudge(true);
    setErr(null);
    try {
      await apiPost(`/complaints/${id}/nudge`, {});
      setHasNudged(true);
      await load();
    } catch (e: any) {
      // If backend throws 400 because they already nudged today, show alert
      setErr(e.message || "Failed to nudge issue");
    } finally {
      setLoadingNudge(false);
    }
  }

  async function handleAddUpdate(e: React.FormEvent) {
    e.preventDefault();
    if (!updateText.trim()) return;
    setLoadingUpdate(true);
    setErr(null);
    try {
      await apiPost(`/complaints/${id}/update`, { text: updateText });
      setUpdateText(""); 
      await load(); 
    } catch (e: any) {
      setErr(e.message || "Failed to post update");
    } finally {
      setLoadingUpdate(false);
    }
  }

  const getImgUrl = (url: string) => {
    if (!url) return "";
    return url.startsWith("http") ? url : `${API_BASE}${url}`;
  };

  // Timeline Renderer
  const renderTimeline = () => (
    <div className="relative ml-4 sm:ml-6 border-l-2 border-zinc-800/60 space-y-8 pb-4 mt-4">
      {data.events?.filter((e: any) => e.type !== 'UPVOTED').map((e: any, idx: number, arr: any[]) => {
          const isLast = idx === arr.length - 1;
          
          let Icon = Activity;
          let colorTheme = { text: "text-zinc-400", border: "border-zinc-700", shadow: "shadow-zinc-500/20" };

          switch (e.type) {
            case 'CREATED':
              Icon = FileText;
              colorTheme = { text: "text-blue-400", border: "border-blue-500/50", shadow: "shadow-blue-500/30" };
              break;
            case 'ACKNOWLEDGED':
            case 'ASSIGNED':
              Icon = User;
              colorTheme = { text: "text-purple-400", border: "border-purple-500/50", shadow: "shadow-purple-500/30" };
              break;
            case 'WORK_IN_PROGRESS':
              Icon = Hammer;
              colorTheme = { text: "text-orange-400", border: "border-orange-500/50", shadow: "shadow-orange-500/30" };
              break;
            case 'RESOLVED':
              Icon = CheckCircle2;
              colorTheme = { text: "text-green-400", border: "border-green-500/50", shadow: "shadow-green-500/30" };
              break;
            case 'REOPENED':
            case 'REJECTED':
              Icon = AlertTriangle;
              colorTheme = { text: "text-red-400", border: "border-red-500/50", shadow: "shadow-red-500/30" };
              break;
          }

          return (
            <div key={e.id} className="relative group pl-8 sm:pl-10">
              <div className={`absolute -left-[17px] sm:-left-[21px] top-1 sm:top-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 bg-black flex items-center justify-center z-10 ${colorTheme.text} ${colorTheme.border} transition-all duration-500 ${isLast ? `shadow-[0_0_20px_var(--tw-shadow-color)] ${colorTheme.shadow} scale-110 ring-4 ring-black` : 'group-hover:scale-110 group-hover:bg-zinc-900'}`}>
                <Icon size={16} strokeWidth={2.5} />
              </div>

              <div className="bg-gradient-to-br from-zinc-900/80 to-black/40 border border-white/5 rounded-2xl p-4 sm:p-5 hover:bg-zinc-900/90 transition-all duration-300 shadow-xl backdrop-blur-md relative overflow-hidden group-hover:border-white/10 group-hover:-translate-y-0.5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-1 xl:gap-2 mb-3">
                  <span className={`text-xs sm:text-sm font-black tracking-wide ${isLast ? 'text-white' : colorTheme.text}`}>
                    {e.type.replace(/_/g, " ")}
                  </span>
                  <span className="text-[10px] sm:text-xs text-zinc-500 font-mono flex items-center">
                    {new Date(e.createdAt).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                {e.data && (
                  <div className="mt-1 text-sm text-zinc-300">
                    {e.type === 'CREATED' && <p className="text-zinc-400">System logged the report securely.</p>}
                    {e.data.note && <div className="mt-3 text-zinc-300 bg-black/50 border-l-2 border-zinc-600 pl-4 py-3 rounded-r-xl italic shadow-inner">"{e.data.note}"</div>}
                    {e.data.reason && <p className="mt-3 px-3 py-2 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20 text-xs font-medium">Reason: {e.data.reason}</p>}
                  </div>
                )}

                {e.actorRole && e.type !== 'CREATED' && (
                  <div className="mt-4 flex items-center">
                    <span className="text-[9px] uppercase tracking-widest font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" /> Action by {e.actorRole}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );

  if (err) return <div className="p-6 sm:p-10 text-red-500 text-sm sm:text-base">Error: {err}</div>;
  if (!data) return <div className="min-h-screen flex items-center justify-center text-zinc-500 text-sm sm:text-base">Loading details...</div>;

  const resolvedEvent = data.events?.find((e: any) => e.type === 'RESOLVED');
  const officerUrls = resolvedEvent?.data?.proofUrls || (resolvedEvent?.data?.proofUrl ? [resolvedEvent.data.proofUrl] : []);
  const officerMedia = data.media?.filter((m: any) => officerUrls.includes(m.url)) || [];
  const citizenMedia = data.media?.filter((m: any) => !officerUrls.includes(m.url)) || [];
  
  // 🔥 New Dynamic Signal Counts
  const sigs = data.signals || [];
  const hazardCount = sigs.filter((s: any) => s.type === 'SAFETY_HAZARD').length;
  const trafficCount = sigs.filter((s: any) => s.type === 'TRAFFIC_BLOCKER').length;
  const smellCount = sigs.filter((s: any) => s.type === 'BAD_SMELL').length;
  const moneyCount = sigs.filter((s: any) => s.type === 'COSTING_MONEY').length;
  const nudgeCount = data.nudges?.length || 0;

  return (
    <main className="min-h-screen bg-black text-zinc-100 p-4 sm:p-6 md:p-10 flex justify-center pb-24 lg:pb-10">
      <div className="w-full max-w-7xl space-y-6 sm:space-y-8">

        {/* Header */}
        <div className="mb-4 sm:mb-6 max-w-4xl">
          <div className="inline-flex items-center p-1 sm:p-1.5 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-xl sm:rounded-2xl shadow-xl mb-4 sm:mb-6 overflow-x-auto max-w-full">
            <a href="/" className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300 whitespace-nowrap">
              <span className="p-1 rounded-md sm:rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition-all">
                <ArrowLeft size={14} strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
              Dashboard
            </a>
            <div className="w-px h-5 sm:h-6 bg-zinc-800 mx-1 sm:mx-2 shrink-0" />
            <a href="/map" className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:shadow-md transition-all duration-300 whitespace-nowrap">
              <span className="p-1 rounded-md sm:rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
                <MapPin size={14} strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
              Live Map
            </a>
          </div>

          <header>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">{data.title}</h1>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-xs sm:text-sm text-zinc-400">
              <span className={`px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wide border ${data.currentStatus === 'RESOLVED' ? 'bg-green-900/30 border-green-800 text-green-400' : 'bg-blue-900/30 border-blue-800 text-blue-400'}`}>
                {data.currentStatus.replace(/_/g, " ")}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="text-blue-400 font-medium">{data.category}</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-zinc-500">{new Date(data.createdAt).toLocaleDateString()}</span>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0"><MapPin size={18} /></div>
              <div className="min-w-0">
                <div className="text-[10px] text-zinc-500 uppercase font-bold truncate">Ward Zone</div>
                <div className="text-sm font-medium text-white truncate">{data.ward?.name || "Unknown"}</div>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0"><Building2 size={18} /></div>
              <div className="min-w-0">
                <div className="text-[10px] text-zinc-500 uppercase font-bold truncate">Department</div>
                <div className="text-sm font-medium text-white truncate">{data.department?.name || "Unassigned"}</div>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3 sm:col-span-2 md:col-span-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${data.assignedOfficer ? 'bg-purple-900/30 text-purple-400' : 'bg-zinc-800 text-zinc-600'}`}>
                {data.assignedOfficer ? <User size={18} /> : <HelpCircle size={18} />}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider truncate">Officer In-Charge</div>
                <div className="text-sm font-medium text-white truncate">{data.assignedOfficer?.name || "Pending..."}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 THE SPLIT LAYOUT (COMMUNITY VS TIMELINE) 🔥 */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 pt-6 sm:pt-8 border-t border-zinc-800/80 relative">
          
          {/* LEFT COLUMN: Polls, Validation, Photos, and Comments */}
          <section className="flex-1 min-w-0 flex flex-col gap-6 sm:gap-8">
            
            {/* 🔥 NEW EXPRESSIVE VALIDATION UI 🔥 */}
            {data.currentStatus !== 'RESOLVED' && (
              <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-[2rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
                
                <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-2">
                  <Activity size={22} className="text-blue-400" /> Community Impact
                </h2>
                <p className="text-sm text-zinc-400 mb-8">Tell the city exactly how this is affecting the neighborhood.</p>

                {/* 1. SEVERITY SLIDER */}
                <div className="mb-8">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4 block">1. How severe is this?</label>
                  <div className="flex bg-black/50 p-1.5 rounded-2xl border border-white/5 relative">
                    {/* Sliding Background Highlight */}
                    <div 
                      className="absolute top-1.5 bottom-1.5 rounded-xl transition-all duration-300 ease-out z-0"
                      style={{ 
                        width: 'calc(33.333% - 4px)', 
                        left: `calc(${(severityLevel - 1) * 33.333}% + 2px)`,
                        backgroundColor: severityLevel === 1 ? 'rgba(59,130,246,0.2)' : severityLevel === 2 ? 'rgba(249,115,22,0.2)' : 'rgba(239,68,68,0.2)',
                        border: `1px solid ${severityLevel === 1 ? 'rgba(59,130,246,0.5)' : severityLevel === 2 ? 'rgba(249,115,22,0.5)' : 'rgba(239,68,68,0.5)'}`
                      }}
                    />
                    <button onClick={() => setSeverityLevel(1)} className={`flex-1 relative z-10 py-3 text-sm font-bold rounded-xl transition-colors ${severityLevel === 1 ? 'text-blue-400' : 'text-zinc-500 hover:text-zinc-300'}`}>Minor</button>
                    <button onClick={() => setSeverityLevel(2)} className={`flex-1 relative z-10 py-3 text-sm font-bold rounded-xl transition-colors ${severityLevel === 2 ? 'text-orange-400' : 'text-zinc-500 hover:text-zinc-300'}`}>Inconvenience</button>
                    <button onClick={() => setSeverityLevel(3)} className={`flex-1 relative z-10 py-3 text-sm font-bold rounded-xl transition-colors ${severityLevel === 3 ? 'text-red-400' : 'text-zinc-500 hover:text-zinc-300'}`}>Danger</button>
                  </div>
                </div>

                {/* 2. CIVIC EMOJI REACTIONS */}
                <div className="mb-8">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4 block">2. Tag the impact (Click to vote)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <button disabled={loadingSignal} onClick={() => handleSignal("SAFETY_HAZARD")} className="group bg-zinc-950 border border-zinc-800 hover:border-red-500/50 hover:bg-red-500/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50">
                      <AlertOctagon size={24} className="text-zinc-400 group-hover:text-red-400 transition-colors" />
                      <span className="text-xs font-bold text-zinc-300">Hazard</span>
                      <span className="text-[10px] font-mono bg-zinc-900 px-2 py-0.5 rounded-full text-zinc-500">{hazardCount}</span>
                    </button>
                    <button disabled={loadingSignal} onClick={() => handleSignal("TRAFFIC_BLOCKER")} className="group bg-zinc-950 border border-zinc-800 hover:border-yellow-500/50 hover:bg-yellow-500/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50">
                      <Car size={24} className="text-zinc-400 group-hover:text-yellow-400 transition-colors" />
                      <span className="text-xs font-bold text-zinc-300">Traffic</span>
                      <span className="text-[10px] font-mono bg-zinc-900 px-2 py-0.5 rounded-full text-zinc-500">{trafficCount}</span>
                    </button>
                    <button disabled={loadingSignal} onClick={() => handleSignal("BAD_SMELL")} className="group bg-zinc-950 border border-zinc-800 hover:border-green-500/50 hover:bg-green-500/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50">
                      <Wind size={24} className="text-zinc-400 group-hover:text-green-400 transition-colors" />
                      <span className="text-xs font-bold text-zinc-300">Smell</span>
                      <span className="text-[10px] font-mono bg-zinc-900 px-2 py-0.5 rounded-full text-zinc-500">{smellCount}</span>
                    </button>
                    <button disabled={loadingSignal} onClick={() => handleSignal("COSTING_MONEY")} className="group bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 hover:bg-purple-500/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50">
                      <Coins size={24} className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
                      <span className="text-xs font-bold text-zinc-300">Costing $</span>
                      <span className="text-[10px] font-mono bg-zinc-900 px-2 py-0.5 rounded-full text-zinc-500">{moneyCount}</span>
                    </button>
                  </div>
                </div>

                {/* 3. URGE ACTION NUDGE */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <BellRing size={16} className="text-orange-400" /> Taking too long?
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">Nudge the department. High nudges flag issues red for officers.</p>
                  </div>
                  <button 
                    disabled={loadingNudge || hasNudged} 
                    onClick={handleNudge}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-6 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.3)] disabled:opacity-50 disabled:grayscale disabled:shadow-none"
                  >
                    <Flame size={18} className={hasNudged ? "" : "animate-pulse"} />
                    {hasNudged ? "Nudged Today" : "Urge Action"}
                    <span className="bg-black/30 px-2 py-0.5 rounded-full text-xs ml-2">{nudgeCount + (hasNudged ? 1 : 0)}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Gamified Validation */}
            {data.currentStatus === 'RESOLVED' && (
              <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
                      <Activity size={12} className="animate-pulse" /> Community Verification
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Is this actually fixed?</h2>
                    <p className="text-sm text-zinc-400 mt-1">The officer marked this as resolved. We need your eyes on the ground.</p>
                  </div>
                  <div className="flex gap-4 text-sm font-bold bg-black/40 px-4 py-2 rounded-xl border border-white/5">
                    <div className="flex flex-col items-center">
                      <span className="text-green-400 text-lg">{data.validationCounts?.confirmed ?? 0}</span>
                      <span className="text-[10px] text-zinc-500 uppercase">Fixed</span>
                    </div>
                    <div className="w-px bg-zinc-800" />
                    <div className="flex flex-col items-center">
                      <span className="text-red-400 text-lg">{data.validationCounts?.notFixed ?? 0}</span>
                      <span className="text-[10px] text-zinc-500 uppercase">Broken</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6 space-y-2 relative z-10">
                  <div className="flex justify-between text-xs font-bold text-zinc-500 mb-1">
                    <span className="text-green-500/80">Consensus</span>
                    <span className="text-red-500/80">Disputed</span>
                  </div>
                  <div className="h-3 w-full bg-zinc-950 rounded-full overflow-hidden flex shadow-inner border border-zinc-800/50">
                    <div className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-1000 ease-out" style={{ width: `${((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0)) === 0 ? 50 : ((data.validationCounts?.confirmed ?? 0) / ((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0))) * 100}%` }} />
                    <div className="h-full bg-gradient-to-l from-red-600 to-red-400 transition-all duration-1000 ease-out" style={{ width: `${((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0)) === 0 ? 50 : ((data.validationCounts?.notFixed ?? 0) / ((data.validationCounts?.confirmed ?? 0) + (data.validationCounts?.notFixed ?? 0))) * 100}%` }} />
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-6 border-t border-zinc-800/80">
                  {hasVoted ? (
                    <div className="flex flex-col items-center justify-center gap-3 py-6 bg-green-500/10 border border-green-500/20 rounded-2xl animate-in fade-in slide-in-from-bottom-2 shadow-inner">
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle2 className="w-7 h-7" /> 
                        <span className="font-bold text-lg">Your vote has been recorded!</span>
                      </div>
                      {localVerified && (
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-in zoom-in duration-500">
                          <MapPin size={14} className="animate-bounce" /> 📍 Verified Local Vote (2x Weight)
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button disabled={loadingVote} className="group flex-1 relative overflow-hidden flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] text-zinc-300 hover:text-green-400 px-4 py-4 rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 font-bold text-base" onClick={() => vote("CONFIRMED")}>
                        <div className="absolute inset-0 bg-green-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <CheckCircle className="w-5 h-5 relative z-10" /> <span className="relative z-10">Yes, it's fixed</span>
                      </button>
                      <button disabled={loadingVote} className="group flex-1 relative overflow-hidden flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] text-zinc-300 hover:text-red-400 px-4 py-4 rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 font-bold text-base" onClick={() => vote("NOT_FIXED")}>
                        <div className="absolute inset-0 bg-red-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <XCircle className="w-5 h-5 relative z-10" /> <span className="relative z-10">No, still broken</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Media Grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-base text-zinc-300 flex items-center gap-2">Citizen Uploads <span className="text-zinc-600 text-xs">({citizenMedia.length})</span></h3>
                {citizenMedia.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {citizenMedia.map((m: any) => (
                      <div key={m.id} className="relative group aspect-square rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer shadow-lg" onClick={() => setActiveImage(getImgUrl(m.url))}>
                        <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="evidence" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-32 rounded-2xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm bg-zinc-900/20">No citizen photos</div>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-base text-zinc-300 flex items-center gap-2">Officer Proof <span className="text-zinc-600 text-xs">({officerMedia.length})</span></h3>
                {officerMedia.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {officerMedia.map((m: any) => (
                      <div key={m.id} className="relative group aspect-square rounded-2xl overflow-hidden border border-blue-900/50 cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.1)]" onClick={() => setActiveImage(getImgUrl(m.url))}>
                        <img src={getImgUrl(m.url)} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="proof" />
                        <div className="absolute inset-0 border-2 border-blue-500/50 rounded-2xl pointer-events-none" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-32 rounded-2xl border border-zinc-800 border-dashed flex items-center justify-center text-zinc-600 text-sm bg-zinc-900/20">Pending resolution</div>
                )}
              </div>
            </div>

            {/* Community Discussion Box */}
            <div className="mt-4 bg-zinc-950 border border-zinc-800/80 rounded-3xl p-5 sm:p-8 shadow-2xl flex flex-col h-[500px]">
              <h3 className="font-bold text-xl text-white flex items-center gap-3 mb-6">
                <MessageSquare size={22} className="text-blue-400" /> Community Discussion
              </h3>
              
              <div className="flex-1 space-y-4 pr-2 overflow-y-auto custom-scrollbar">
                {data.updates?.map((u: any) => (
                  <div key={u.id} className="bg-zinc-900/60 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-bold text-blue-400 flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center text-xs text-blue-300 shadow-inner">
                          {u.user?.name?.charAt(0).toUpperCase() || "C"}
                        </div>
                        {u.user?.name || "Citizen"}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">
                        {new Date(u.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed ml-9">{u.text}</p>
                  </div>
                ))}
                {(!data.updates || data.updates.length === 0) && (
                  <div className="text-sm text-zinc-500 italic p-8 text-center bg-zinc-900/30 rounded-2xl border border-zinc-800/50 h-full flex items-center justify-center">
                    No updates yet. Be the first to add context to this issue.
                  </div>
                )}
              </div>

              <form onSubmit={handleAddUpdate} className="flex gap-3 mt-6 pt-6 border-t border-zinc-800/50 shrink-0">
                <input
                  type="text"
                  placeholder="Add context to this issue..."
                  value={updateText}
                  onChange={(e) => setUpdateText(e.target.value)}
                  disabled={loadingUpdate}
                  className="flex-1 bg-black border border-zinc-700 rounded-xl px-5 py-3.5 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition disabled:opacity-50 shadow-inner"
                />
                <button type="submit" disabled={loadingUpdate || !updateText.trim()} className="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] disabled:shadow-none hover:-translate-y-0.5">
                  <Send size={18} />
                  <span className="hidden sm:inline">Post</span>
                </button>
              </form>
            </div>
          </section>

          {/* RIGHT COLUMN: Desktop Sticky Ultra-Premium Timeline */}
          <aside className="hidden lg:block w-[380px] xl:w-[440px] shrink-0">
            <div className="sticky top-8 rounded-[2rem] p-6 xl:p-8 bg-zinc-950 border border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
              
              <h3 className="font-bold text-xl text-white mb-8 flex items-center gap-3 relative z-10 border-b border-zinc-800/80 pb-6">
                <History className="text-zinc-400" size={24} /> System Timeline
              </h3>
              
              <div className="relative z-10">
                {renderTimeline()}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* MOBILE TIMELINE FAB */}
      <button onClick={() => setShowMobileTimeline(true)} className="lg:hidden fixed bottom-6 right-6 z-40 bg-zinc-900 border border-zinc-700 shadow-[0_0_30px_rgba(0,0,0,0.8)] text-zinc-300 hover:text-white p-4 rounded-full flex items-center justify-center transition-transform active:scale-95">
        <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-600 opacity-20 animate-ping" />
        <History size={24} />
      </button>

      {/* MOBILE TIMELINE SLIDE-OVER DRAWER */}
      {showMobileTimeline && (
        <div 
          className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 lg:hidden"
          onClick={() => setShowMobileTimeline(false)}
        >
          <div 
            className="w-[85vw] sm:w-96 h-full bg-zinc-950 border-l border-zinc-800 shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between relative z-10 bg-zinc-950/80 backdrop-blur-md">
              <h3 className="font-bold text-xl text-white flex items-center gap-2"><History size={20} className="text-zinc-400" /> Timeline</h3>
              <button onClick={() => setShowMobileTimeline(false)} className="p-2.5 bg-zinc-900 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition active:scale-95">
                <X size={18} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar relative z-10">
              {renderTimeline()}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-200" onClick={() => setActiveImage(null)}>
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition bg-black/50 p-2.5 rounded-full hover:bg-white/10 backdrop-blur-md">
            <X size={24} />
          </button>
          <img src={activeImage} className="max-w-full max-h-[90vh] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}