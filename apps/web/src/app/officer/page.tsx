// // // // // // // "use client";

// // // // // // // import { useState } from "react";
// // // // // // // import { apiPost } from "@/lib/api";

// // // // // // // function fileToBase64(file: File): Promise<string> {
// // // // // // //   return new Promise((resolve, reject) => {
// // // // // // //     const reader = new FileReader();
// // // // // // //     reader.onload = () => resolve(String(reader.result));
// // // // // // //     reader.onerror = reject;
// // // // // // //     reader.readAsDataURL(file);
// // // // // // //   });
// // // // // // // }

// // // // // // // export default function OfficerPage() {
// // // // // // //   const [id, setId] = useState("");
// // // // // // //   const [err, setErr] = useState<string | null>(null);
// // // // // // //   const [nextStatus, setNextStatus] = useState("ASSIGNED");
// // // // // // //   const [note, setNote] = useState("");
// // // // // // //   const [file, setFile] = useState<File | null>(null);
// // // // // // //   const [loc, setLoc] = useState<{lat:number;lng:number} | null>(null);

// // // // // // //   function getLocation() {
// // // // // // //     setErr(null);
// // // // // // //     navigator.geolocation.getCurrentPosition(
// // // // // // //       (pos) => setLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
// // // // // // //       () => setErr("Location permission denied"),
// // // // // // //       { enableHighAccuracy: true }
// // // // // // //     );
// // // // // // //   }

// // // // // // //   async function ack() {
// // // // // // //     setErr(null);
// // // // // // //     try { await apiPost(`/complaints/${id}/ack`, {}); alert("ACK done"); }
// // // // // // //     catch (e: any) { setErr(e.message); }
// // // // // // //   }

// // // // // // //   async function advance() {
// // // // // // //     setErr(null);
// // // // // // //     try { await apiPost(`/complaints/${id}/advance`, { nextStatus, note }); alert("Advance done"); }
// // // // // // //     catch (e: any) { setErr(e.message); }
// // // // // // //   }

// // // // // // //   async function resolve() {
// // // // // // //     setErr(null);
// // // // // // //     try {
// // // // // // //       if (!file) throw new Error("Upload proof photo");
// // // // // // //       if (!loc) throw new Error("Get your location first");
// // // // // // //       const mediaBase64 = await fileToBase64(file);
// // // // // // //       const ext = (file.name.split(".").pop() || "jpg").toLowerCase();

// // // // // // //       await apiPost(`/complaints/${id}/resolve`, {
// // // // // // //         lat: loc.lat,
// // // // // // //         lng: loc.lng,
// // // // // // //         mediaBase64,
// // // // // // //         ext,
// // // // // // //         note,
// // // // // // //       });
// // // // // // //       alert("Resolved with proof");
// // // // // // //     } catch (e: any) {
// // // // // // //       setErr(e.message);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <main className="min-h-screen p-10 max-w-2xl space-y-4">
// // // // // // //       <a className="underline" href="/">← Back</a>
// // // // // // //       <h1 className="text-2xl font-bold">Officer Console (Pilot)</h1>
// // // // // // //       {err && <div className="border rounded-xl p-3 text-red-600">{err}</div>}

// // // // // // //       <input className="w-full border rounded-xl p-3"
// // // // // // //         placeholder="Complaint ID"
// // // // // // //         value={id} onChange={(e) => setId(e.target.value)} />

// // // // // // //       <div className="flex gap-3">
// // // // // // //         <button className="border rounded-xl px-4 py-2" onClick={ack}>ACK</button>
// // // // // // //         <a className="border rounded-xl px-4 py-2" href={id ? `/complaints/${id}` : "#"}>Open</a>
// // // // // // //       </div>

// // // // // // //       <section className="border rounded-xl p-4 space-y-3">
// // // // // // //         <div className="font-semibold">Advance Status</div>
// // // // // // //         <select className="w-full border rounded-xl p-3"
// // // // // // //           value={nextStatus} onChange={(e) => setNextStatus(e.target.value)}>
// // // // // // //           {["ASSIGNED","INSPECTION","WORK_IN_PROGRESS"].map(s => <option key={s} value={s}>{s}</option>)}
// // // // // // //         </select>
// // // // // // //         <input className="w-full border rounded-xl p-3" placeholder="Note"
// // // // // // //           value={note} onChange={(e) => setNote(e.target.value)} />
// // // // // // //         <button className="rounded-xl bg-black text-white px-4 py-3" onClick={advance}>
// // // // // // //           Advance
// // // // // // //         </button>
// // // // // // //       </section>

// // // // // // //       <section className="border rounded-xl p-4 space-y-3">
// // // // // // //         <div className="font-semibold">Resolve with Proof</div>
// // // // // // //         <button className="border rounded-xl px-4 py-2" onClick={getLocation}>
// // // // // // //           Get location
// // // // // // //         </button>
// // // // // // //         <div className="text-sm text-slate-600">
// // // // // // //           {loc ? `${loc.lat.toFixed(5)}, ${loc.lng.toFixed(5)}` : "No location yet"}
// // // // // // //         </div>
// // // // // // //         <input type="file" accept="image/*"
// // // // // // //           onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
// // // // // // //         <button className="rounded-xl bg-black text-white px-4 py-3" onClick={resolve}>
// // // // // // //           Resolve (requires geo + photo)
// // // // // // //         </button>
// // // // // // //       </section>
// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }

// // // // // // // gemini

// // // // // // // "use client";

// // // // // // // import { useState, useEffect } from "react";
// // // // // // // import { apiPost, apiGet } from "@/lib/api";

// // // // // // // function fileToBase64(file: File): Promise<string> {
// // // // // // //   return new Promise((resolve, reject) => {
// // // // // // //     const reader = new FileReader();
// // // // // // //     reader.onload = () => resolve(String(reader.result));
// // // // // // //     reader.onerror = reject;
// // // // // // //     reader.readAsDataURL(file);
// // // // // // //   });
// // // // // // // }

// // // // // // // export default function OfficerPage() {
// // // // // // //   const [id, setId] = useState("");
// // // // // // //   const [recentIds, setRecentIds] = useState<any[]>([]); // Helper list
// // // // // // //   const [err, setErr] = useState<string | null>(null);
// // // // // // //   const [nextStatus, setNextStatus] = useState("ASSIGNED");
// // // // // // //   const [note, setNote] = useState("");
// // // // // // //   const [file, setFile] = useState<File | null>(null);
// // // // // // //   const [loc, setLoc] = useState<{lat:number;lng:number} | null>(null);

// // // // // // //   // Helper: Fetch recent complaints to make testing easier
// // // // // // //   useEffect(() => {
// // // // // // //     apiGet<any[]>("/complaints").then(data => {
// // // // // // //       setRecentIds(data.slice(0, 5)); // Keep top 5
// // // // // // //       if (data.length > 0 && !id) setId(data[0].id); // Auto-fill latest
// // // // // // //     }).catch(() => {});
// // // // // // //   }, []);

// // // // // // //   function getLocation() {
// // // // // // //     setErr(null);
// // // // // // //     navigator.geolocation.getCurrentPosition(
// // // // // // //       (pos) => setLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
// // // // // // //       () => setErr("Location permission denied"),
// // // // // // //       { enableHighAccuracy: true }
// // // // // // //     );
// // // // // // //   }

// // // // // // //   async function ack() {
// // // // // // //     setErr(null);
// // // // // // //     try { await apiPost(`/complaints/${id}/ack`, {}); alert("ACK done"); }
// // // // // // //     catch (e: any) { setErr(e.message); }
// // // // // // //   }

// // // // // // //   async function advance() {
// // // // // // //     setErr(null);
// // // // // // //     try { await apiPost(`/complaints/${id}/advance`, { nextStatus, note }); alert("Advance done"); }
// // // // // // //     catch (e: any) { setErr(e.message); }
// // // // // // //   }

// // // // // // //   async function resolve() {
// // // // // // //     setErr(null);
// // // // // // //     try {
// // // // // // //       if (!file) throw new Error("Upload proof photo");
// // // // // // //       if (!loc) throw new Error("Get your location first");

// // // // // // //       const fullBase64 = await fileToBase64(file);
// // // // // // //       // ✅ FIX: Remove the "data:image/xyz;base64," prefix
// // // // // // //       const mediaBase64 = fullBase64.split(",")[1]; 

// // // // // // //       await apiPost(`/complaints/${id}/resolve`, {
// // // // // // //         lat: loc.lat,
// // // // // // //         lng: loc.lng,
// // // // // // //         mediaBase64, // Send clean base64
// // // // // // //         note: note || "Resolved via Officer Console",
// // // // // // //       });
// // // // // // //       alert("✅ Resolved with proof!");
// // // // // // //     } catch (e: any) {
// // // // // // //       setErr(e.message);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <main className="min-h-screen p-10 max-w-2xl space-y-6 font-sans">
// // // // // // //       <div className="flex justify-between items-center">
// // // // // // //         <h1 className="text-2xl font-bold">👮 Officer Console (Pilot)</h1>
// // // // // // //         <a className="underline text-sm" href="/">← Back</a>
// // // // // // //       </div>

// // // // // // //       {err && <div className="border border-red-200 bg-red-50 rounded-xl p-3 text-red-600">{err}</div>}

// // // // // // //       {/* Quick Select for Testing */}
// // // // // // //       {recentIds.length > 0 && (
// // // // // // //         <div className="text-sm space-x-2">
// // // // // // //           <span className="text-slate-500">Quick Select:</span>
// // // // // // //           {recentIds.map(c => (
// // // // // // //             <button key={c.id} onClick={() => setId(c.id)} className="underline text-blue-600 hover:text-blue-800">
// // // // // // //               {c.title.substring(0, 15)}...
// // // // // // //             </button>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       <div className="space-y-2">
// // // // // // //         <label className="text-xs font-bold text-slate-500 uppercase">Target Complaint ID</label>
// // // // // // //         <input className="w-full border rounded-xl p-3 font-mono text-sm"
// // // // // // //           placeholder="Paste UUID here..."
// // // // // // //           value={id} onChange={(e) => setId(e.target.value)} />
// // // // // // //       </div>

// // // // // // //       <div className="flex gap-3">
// // // // // // //         <button className="flex-1 bg-blue-100 text-blue-800 border border-blue-200 rounded-xl px-4 py-3 font-bold hover:bg-blue-200" onClick={ack}>
// // // // // // //           1. ACKNOWLEDGE
// // // // // // //         </button>
// // // // // // //         <a className="flex-none flex items-center justify-center border rounded-xl px-4 py-2 hover:bg-slate-50" href={id ? `/complaints/${id}` : "#"} target="_blank">
// // // // // // //           View ↗
// // // // // // //         </a>
// // // // // // //       </div>

// // // // // // //       <section className="border rounded-xl p-5 space-y-3 bg-slate-50">
// // // // // // //         <div className="font-bold text-slate-700">2. Move Workflow</div>
// // // // // // //         <select className="w-full border rounded-xl p-3 bg-white"
// // // // // // //           value={nextStatus} onChange={(e) => setNextStatus(e.target.value)}>
// // // // // // //           {["ASSIGNED","INSPECTION","WORK_IN_PROGRESS"].map(s => <option key={s} value={s}>{s}</option>)}
// // // // // // //         </select>
// // // // // // //         <input className="w-full border rounded-xl p-3" placeholder="Add a note (e.g. 'Crew arrived')"
// // // // // // //           value={note} onChange={(e) => setNote(e.target.value)} />
// // // // // // //         <button className="w-full rounded-xl bg-slate-800 text-white px-4 py-3 font-bold hover:bg-black transition" onClick={advance}>
// // // // // // //           Update Status
// // // // // // //         </button>
// // // // // // //       </section>

// // // // // // //       <section className="border-2 border-dashed border-green-300 rounded-xl p-5 space-y-4 bg-green-50">
// // // // // // //         <div className="font-bold text-green-800">3. Final Resolution</div>

// // // // // // //         <div className="flex justify-between items-center">
// // // // // // //             <button className="bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm font-semibold hover:bg-slate-100" onClick={getLocation}>
// // // // // // //             📍 Get GPS
// // // // // // //             </button>
// // // // // // //             <span className="text-xs font-mono text-slate-600">
// // // // // // //             {loc ? `${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}` : "No GPS data"}
// // // // // // //             </span>
// // // // // // //         </div>

// // // // // // //         <input type="file" accept="image/*"
// // // // // // //           className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
// // // // // // //           onChange={(e) => setFile(e.target.files?.[0] ?? null)} />

// // // // // // //         <button className="w-full rounded-xl bg-green-600 text-white px-4 py-3 font-bold shadow-lg hover:bg-green-700 transition" onClick={resolve}>
// // // // // // //           ✅ Mark Resolved
// // // // // // //         </button>
// // // // // // //       </section>
// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }
// // // // // // // "use client";

// // // // // // // import { useState, useEffect } from "react";
// // // // // // // import { apiPost, apiGet } from "@/lib/api";
// // // // // // // import Link from "next/link";

// // // // // // // // Helper: Convert File to Base64
// // // // // // // function fileToBase64(file: File): Promise<string> {
// // // // // // //   return new Promise((resolve, reject) => {
// // // // // // //     const reader = new FileReader();
// // // // // // //     reader.onload = () => resolve(String(reader.result));
// // // // // // //     reader.onerror = reject;
// // // // // // //     reader.readAsDataURL(file);
// // // // // // //   });
// // // // // // // }

// // // // // // // export default function OfficerPage() {
// // // // // // //   const [id, setId] = useState("");
// // // // // // //   const [recentIds, setRecentIds] = useState<any[]>([]);
// // // // // // //   const [err, setErr] = useState<string | null>(null);
// // // // // // //   const [nextStatus, setNextStatus] = useState("ASSIGNED");
// // // // // // //   const [note, setNote] = useState("");
// // // // // // //   const [file, setFile] = useState<File | null>(null);
// // // // // // //   const [loc, setLoc] = useState<{lat:number;lng:number} | null>(null);
// // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // //   // Load recent complaints for "Quick Select"
// // // // // // //   useEffect(() => {
// // // // // // //     apiGet<any[]>("/complaints").then(data => {
// // // // // // //       // Filter for active issues only
// // // // // // //       const active = data.filter(c => c.currentStatus !== 'RESOLVED');
// // // // // // //       setRecentIds(active.slice(0, 6)); 
// // // // // // //       if (active.length > 0 && !id) setId(active[0].id);
// // // // // // //     }).catch(() => {});
// // // // // // //   }, []);

// // // // // // //   function getLocation() {
// // // // // // //     setErr(null);
// // // // // // //     navigator.geolocation.getCurrentPosition(
// // // // // // //       (pos) => setLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
// // // // // // //       () => setErr("Location permission denied"),
// // // // // // //       { enableHighAccuracy: true }
// // // // // // //     );
// // // // // // //   }

// // // // // // //   async function ack() {
// // // // // // //     setErr(null);
// // // // // // //     try { await apiPost(`/complaints/${id}/ack`, {}); alert("✅ Acknowledged"); }
// // // // // // //     catch (e: any) { setErr(e.message); }
// // // // // // //   }

// // // // // // //   async function advance() {
// // // // // // //     setErr(null);
// // // // // // //     try { await apiPost(`/complaints/${id}/advance`, { nextStatus, note }); alert("✅ Status Updated"); }
// // // // // // //     catch (e: any) { setErr(e.message); }
// // // // // // //   }

// // // // // // //   async function resolve() {
// // // // // // //     setErr(null);
// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       if (!file) throw new Error("⚠️ Please upload a proof photo.");
// // // // // // //       if (!loc) throw new Error("⚠️ Please get GPS location first.");

// // // // // // //       const fullBase64 = await fileToBase64(file);
// // // // // // //       const mediaBase64 = fullBase64.split(",")[1]; // Remove prefix

// // // // // // //       await apiPost(`/complaints/${id}/resolve`, {
// // // // // // //         lat: loc.lat,
// // // // // // //         lng: loc.lng,
// // // // // // //         mediaBase64, 
// // // // // // //         note: note || "Resolved via Officer Console",
// // // // // // //       });
// // // // // // //       alert("🎉 Complaint Resolved Successfully!");
// // // // // // //       setFile(null); // Reset
// // // // // // //       // Refresh list
// // // // // // //       const data = await apiGet<any[]>("/complaints");
// // // // // // //       setRecentIds(data.filter(c => c.currentStatus !== 'RESOLVED').slice(0, 6));

// // // // // // //     } catch (e: any) {
// // // // // // //       setErr(e.message);
// // // // // // //     } finally {
// // // // // // //         setLoading(false);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <main className="min-h-screen bg-black text-zinc-200 font-sans p-6 md:p-12">
// // // // // // //       <div className="max-w-3xl mx-auto space-y-8">

// // // // // // //         {/* Header */}
// // // // // // //         <div className="flex justify-between items-center border-b border-zinc-800 pb-6">
// // // // // // //             <div>
// // // // // // //                 <h1 className="text-3xl font-bold text-white tracking-tight">👮 Officer Console</h1>
// // // // // // //                 <p className="text-zinc-500 text-sm mt-1">Field Operations Unit • Zone 1</p>
// // // // // // //             </div>
// // // // // // //             <Link href="/" className="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition">
// // // // // // //                 &larr; Dashboard
// // // // // // //             </Link>
// // // // // // //         </div>

// // // // // // //         {/* Error Banner */}
// // // // // // //         {err && (
// // // // // // //             <div className="bg-red-900/20 border border-red-800 text-red-200 p-4 rounded-xl text-sm flex items-center gap-2">
// // // // // // //             <span>🚨</span> {err}
// // // // // // //             </div>
// // // // // // //         )}

// // // // // // //         {/* Quick Select Bar */}
// // // // // // //         {recentIds.length > 0 && (
// // // // // // //             <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
// // // // // // //                 <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-3">Active Assignments</span>
// // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // //                     {recentIds.map(c => (
// // // // // // //                         <button 
// // // // // // //                             key={c.id} 
// // // // // // //                             onClick={() => setId(c.id)} 
// // // // // // //                             className={`text-xs px-3 py-1.5 rounded-full border transition truncate max-w-[150px] ${
// // // // // // //                                 id === c.id 
// // // // // // //                                 ? "bg-blue-600 border-blue-500 text-white" 
// // // // // // //                                 : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500"
// // // // // // //                             }`}
// // // // // // //                         >
// // // // // // //                             {c.title}
// // // // // // //                         </button>
// // // // // // //                     ))}
// // // // // // //                 </div>
// // // // // // //             </div>
// // // // // // //         )}

// // // // // // //         {/* Main Work Area */}
// // // // // // //         <div className="space-y-6">

// // // // // // //             {/* Target Input */}
// // // // // // //             <div>
// // // // // // //                 <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 block">Target Complaint ID</label>
// // // // // // //                 <div className="flex gap-2">
// // // // // // //                     <input 
// // // // // // //                         className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl p-4 font-mono text-sm text-white focus:ring-2 focus:ring-blue-600 outline-none transition"
// // // // // // //                         placeholder="Select from above or paste UUID..."
// // // // // // //                         value={id} onChange={(e) => setId(e.target.value)} 
// // // // // // //                     />
// // // // // // //                     <Link 
// // // // // // //                         href={id ? `/complaints/${id}` : "#"} 
// // // // // // //                         target="_blank"
// // // // // // //                         className="px-6 flex items-center bg-zinc-800 border border-zinc-700 rounded-xl hover:bg-zinc-700 transition font-bold text-zinc-300"
// // // // // // //                     >
// // // // // // //                         View ↗
// // // // // // //                     </Link>
// // // // // // //                 </div>
// // // // // // //             </div>

// // // // // // //             {/* Workflow Step 1 */}
// // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // //                 <div className="md:col-span-1">
// // // // // // //                     <button 
// // // // // // //                         onClick={ack}
// // // // // // //                         className="w-full h-full bg-blue-900/20 border border-blue-800 text-blue-300 hover:bg-blue-900/40 font-bold py-4 rounded-xl transition flex flex-col items-center justify-center gap-2"
// // // // // // //                     >
// // // // // // //                         <span>📩</span>
// // // // // // //                         Acknowledge
// // // // // // //                     </button>
// // // // // // //                 </div>

// // // // // // //                 {/* Workflow Step 2 */}
// // // // // // //                 <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4">
// // // // // // //                      <div className="flex justify-between items-center">
// // // // // // //                         <span className="text-sm font-bold text-zinc-400">Update Status</span>
// // // // // // //                         <select 
// // // // // // //                             className="bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-1 text-sm text-white outline-none"
// // // // // // //                             value={nextStatus} onChange={(e) => setNextStatus(e.target.value)}
// // // // // // //                         >
// // // // // // //                             {["ASSIGNED","INSPECTION","WORK_IN_PROGRESS"].map(s => <option key={s} value={s}>{s}</option>)}
// // // // // // //                         </select>
// // // // // // //                      </div>
// // // // // // //                      <div className="flex gap-2">
// // // // // // //                         <input 
// // // // // // //                             className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg p-3 text-sm text-white focus:ring-1 focus:ring-blue-500 outline-none" 
// // // // // // //                             placeholder="Add a status note (e.g. 'Team Arrived')"
// // // // // // //                             value={note} onChange={(e) => setNote(e.target.value)} 
// // // // // // //                         />
// // // // // // //                         <button 
// // // // // // //                             onClick={advance}
// // // // // // //                             className="px-4 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg font-bold text-sm transition"
// // // // // // //                         >
// // // // // // //                             Save
// // // // // // //                         </button>
// // // // // // //                      </div>
// // // // // // //                 </div>
// // // // // // //             </div>

// // // // // // //             {/* Workflow Step 3: Resolution */}
// // // // // // //             <div className="border border-green-900/50 bg-green-950/10 p-6 rounded-2xl space-y-6 relative overflow-hidden">
// // // // // // //                 <div className="absolute top-0 left-0 w-1 h-full bg-green-600"></div>

// // // // // // //                 <div className="flex justify-between items-center">
// // // // // // //                     <h3 className="text-lg font-bold text-green-400">✅ Final Resolution</h3>
// // // // // // //                     <div className="flex items-center gap-3">
// // // // // // //                          <span className="text-xs font-mono text-zinc-500">
// // // // // // //                             {loc ? `${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}` : "GPS Required"}
// // // // // // //                         </span>
// // // // // // //                         <button 
// // // // // // //                             onClick={getLocation}
// // // // // // //                             className="bg-green-900/30 text-green-400 border border-green-800 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-green-900/50 transition"
// // // // // // //                         >
// // // // // // //                             📍 Get GPS
// // // // // // //                         </button>
// // // // // // //                     </div>
// // // // // // //                 </div>

// // // // // // //                 <div className="space-y-4">
// // // // // // //                     <div className="relative">
// // // // // // //                         <input 
// // // // // // //                             type="file" 
// // // // // // //                             accept="image/*"
// // // // // // //                             onChange={(e) => setFile(e.target.files?.[0] ?? null)} 
// // // // // // //                             className="block w-full text-sm text-zinc-400
// // // // // // //                             file:mr-4 file:py-2.5 file:px-4
// // // // // // //                             file:rounded-lg file:border-0
// // // // // // //                             file:text-xs file:font-bold
// // // // // // //                             file:bg-zinc-800 file:text-zinc-300
// // // // // // //                             hover:file:bg-zinc-700
// // // // // // //                             cursor-pointer"
// // // // // // //                         />
// // // // // // //                     </div>

// // // // // // //                     <button 
// // // // // // //                         onClick={resolve}
// // // // // // //                         disabled={loading}
// // // // // // //                         className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/20 transition disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // // //                     >
// // // // // // //                         {loading ? "Processing..." : "Upload Proof & Close Ticket"}
// // // // // // //                     </button>
// // // // // // //                 </div>
// // // // // // //             </div>

// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }

// // // // // // // "use client";

// // // // // // // import { useState, useEffect } from "react";
// // // // // // // import { apiPost, apiGet } from "@/lib/api";
// // // // // // // import Link from "next/link";

// // // // // // // // Helper: Convert File to Base64
// // // // // // // function fileToBase64(file: File): Promise<string> {
// // // // // // //   return new Promise((resolve, reject) => {
// // // // // // //     const reader = new FileReader();
// // // // // // //     reader.onload = () => resolve(String(reader.result));
// // // // // // //     reader.onerror = reject;
// // // // // // //     reader.readAsDataURL(file);
// // // // // // //   });
// // // // // // // }

// // // // // // // export default function OfficerPage() {
// // // // // // //   const [id, setId] = useState("");
// // // // // // //   const [recentIds, setRecentIds] = useState<any[]>([]);
// // // // // // //   const [queue, setQueue] = useState<any[]>([]);
// // // // // // //   const [err, setErr] = useState<string | null>(null);
// // // // // // //   const [nextStatus, setNextStatus] = useState("ASSIGNED");
// // // // // // //   const [note, setNote] = useState("");
// // // // // // //   const [file, setFile] = useState<File | null>(null);
// // // // // // //   const [loc, setLoc] = useState<{lat:number;lng:number} | null>(null);
// // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // //   // Load officer queue
// // // // // // //   async function loadQueue() {
// // // // // // //     try {
// // // // // // //       setQueue(await apiGet<any[]>("/officer/queue"));
// // // // // // //     } catch {}
// // // // // // //   }

// // // // // // //   // Load recent complaints + queue
// // // // // // //   useEffect(() => {
// // // // // // //     apiGet<any[]>("/complaints").then(data => {
// // // // // // //       const active = data.filter(c => c.currentStatus !== 'RESOLVED');
// // // // // // //       setRecentIds(active.slice(0, 6)); 
// // // // // // //       if (active.length > 0 && !id) setId(active[0].id);
// // // // // // //     }).catch(() => {});
// // // // // // //     loadQueue();
// // // // // // //   }, []);

// // // // // // //   function getLocation() {
// // // // // // //     setErr(null);
// // // // // // //     navigator.geolocation.getCurrentPosition(
// // // // // // //       (pos) => setLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
// // // // // // //       () => setErr("Location permission denied"),
// // // // // // //       { enableHighAccuracy: true }
// // // // // // //     );
// // // // // // //   }

// // // // // // //   async function ack() {
// // // // // // //     setErr(null);
// // // // // // //     try { await apiPost(`/complaints/${id}/ack`, {}); alert("✅ Acknowledged"); loadQueue(); }
// // // // // // //     catch (e: any) { setErr(e.message); }
// // // // // // //   }

// // // // // // //   async function advance() {
// // // // // // //     setErr(null);
// // // // // // //     try { await apiPost(`/complaints/${id}/advance`, { nextStatus, note }); alert("✅ Status Updated"); loadQueue(); }
// // // // // // //     catch (e: any) { setErr(e.message); }
// // // // // // //   }

// // // // // // //   async function resolve() {
// // // // // // //     setErr(null);
// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       if (!file) throw new Error("⚠️ Please upload a proof photo.");
// // // // // // //       if (!loc) throw new Error("⚠️ Please get GPS location first.");

// // // // // // //       const fullBase64 = await fileToBase64(file);
// // // // // // //       const mediaBase64 = fullBase64.split(",")[1];

// // // // // // //       await apiPost(`/complaints/${id}/resolve`, {
// // // // // // //         lat: loc.lat,
// // // // // // //         lng: loc.lng,
// // // // // // //         mediaBase64, 
// // // // // // //         note: note || "Resolved via Officer Console",
// // // // // // //       });
// // // // // // //       alert("🎉 Complaint Resolved Successfully!");
// // // // // // //       setFile(null);
// // // // // // //       loadQueue();
// // // // // // //     } catch (e: any) {
// // // // // // //       setErr(e.message);
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <main className="min-h-screen bg-black text-zinc-200 font-sans p-6 md:p-12">
// // // // // // //       <div className="max-w-3xl mx-auto space-y-8">

// // // // // // //         {/* Header */}
// // // // // // //         <div className="flex justify-between items-center border-b border-zinc-800 pb-6">
// // // // // // //           <div>
// // // // // // //             <h1 className="text-3xl font-bold text-white tracking-tight">👮 Officer Console</h1>
// // // // // // //             <p className="text-zinc-500 text-sm mt-1">Field Operations Unit • Zone 1</p>
// // // // // // //           </div>
// // // // // // //           <Link href="/" className="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition">
// // // // // // //             &larr; Dashboard
// // // // // // //           </Link>
// // // // // // //         </div>

// // // // // // //         {/* 🔥 My Queue Panel */}
// // // // // // //         <section className="border border-zinc-800 rounded-xl p-4 space-y-2 bg-zinc-900">
// // // // // // //           <div className="font-semibold text-white">My Queue</div>
// // // // // // //           <div className="text-sm text-zinc-500">Login as Officer from /login.</div>
// // // // // // //           <div className="grid gap-2">
// // // // // // //             {queue.map(q => (
// // // // // // //               <button key={q.id}
// // // // // // //                 className="text-left border border-zinc-700 rounded-xl p-3 hover:bg-zinc-800 transition"
// // // // // // //                 onClick={() => setId(q.id)}>
// // // // // // //                 <div className="font-semibold text-white">{q.title}</div>
// // // // // // //                 <div className="text-xs text-zinc-400">{q.category} • {q.currentStatus}</div>
// // // // // // //               </button>
// // // // // // //             ))}
// // // // // // //             {queue.length === 0 && <div className="text-sm text-zinc-500">No complaints in queue.</div>}
// // // // // // //           </div>
// // // // // // //         </section>

// // // // // // //         {/* (Everything below remains unchanged UI-wise) */}
// // // // // // //         {/* Quick Select Bar, Workflow, GPS, Resolve, etc remain exactly as before */}

// // // // // // //         {/* ... your existing JSX below continues unchanged ... */}

// // // // // // //       </div>
// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }

// // // // // // "use client";

// // // // // // import { useState, useEffect } from "react";
// // // // // // import { useRouter } from "next/navigation";
// // // // // // import Link from "next/link";

// // // // // // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // // // // // Helper: Convert File to Base64
// // // // // // function fileToBase64(file: File): Promise<string> {
// // // // // //   return new Promise((resolve, reject) => {
// // // // // //     const reader = new FileReader();
// // // // // //     reader.onload = () => resolve(String(reader.result));
// // // // // //     reader.onerror = reject;
// // // // // //     reader.readAsDataURL(file);
// // // // // //   });
// // // // // // }

// // // // // // // Helper: API Fetcher
// // // // // // async function apiGet<T>(url: string): Promise<T> {
// // // // // //   const token = localStorage.getItem("civic_token");
// // // // // //   const res = await fetch(`${API}${url}`, {
// // // // // //     headers: { "Authorization": `Bearer ${token}` }
// // // // // //   });
// // // // // //   if (!res.ok) throw new Error(await res.text());
// // // // // //   return res.json();
// // // // // // }

// // // // // // async function apiPost(url: string, body: any) {
// // // // // //   const token = localStorage.getItem("civic_token");
// // // // // //   const res = await fetch(`${API}${url}`, {
// // // // // //     method: "POST",
// // // // // //     headers: { 
// // // // // //       "Content-Type": "application/json",
// // // // // //       "Authorization": `Bearer ${token}` 
// // // // // //     },
// // // // // //     body: JSON.stringify(body),
// // // // // //   });
// // // // // //   if (!res.ok) throw new Error(await res.text());
// // // // // //   return res.json();
// // // // // // }

// // // // // // export default function OfficerPage() {
// // // // // //   const router = useRouter();
// // // // // //   const [complaints, setComplaints] = useState<any[]>([]);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   // Load ALL complaints (God Mode for Officers)
// // // // // //   async function loadComplaints() {
// // // // // //     try {
// // // // // //       const data = await apiGet<any[]>("/complaints");
// // // // // //       setComplaints(data);
// // // // // //     } catch (e) {
// // // // // //       console.error("Failed to load complaints", e);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   }

// // // // // //   useEffect(() => {
// // // // // //     loadComplaints();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <main className="min-h-screen bg-black text-zinc-200 font-sans p-6 md:p-12">
// // // // // //       <div className="max-w-4xl mx-auto space-y-8">

// // // // // //         {/* Header */}
// // // // // //         <div className="flex justify-between items-center border-b border-zinc-800 pb-6">
// // // // // //           <div>
// // // // // //             <h1 className="text-3xl font-bold text-white tracking-tight">👮 Officer Console</h1>
// // // // // //             <p className="text-zinc-500 text-sm mt-1">Field Operations Unit • Zone 1</p>
// // // // // //           </div>
// // // // // //           <button 
// // // // // //             onClick={() => {
// // // // // //               localStorage.removeItem("civic_token");
// // // // // //               document.cookie = "civic_session=; Max-Age=0; path=/;";
// // // // // //               router.push("/login");
// // // // // //             }}
// // // // // //             className="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition text-red-400"
// // // // // //           >
// // // // // //             Log Out
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         {/* Queue List */}
// // // // // //         <section>
// // // // // //           <div className="flex justify-between items-center mb-4">
// // // // // //             <h2 className="text-xl font-semibold text-white">Active Queue</h2>
// // // // // //             <button onClick={loadComplaints} className="text-xs text-blue-400 hover:text-blue-300">
// // // // // //               Refresh ↻
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           {loading ? (
// // // // // //             <div className="text-zinc-500">Loading assignments...</div>
// // // // // //           ) : complaints.length === 0 ? (
// // // // // //             <div className="p-8 border border-zinc-800 rounded-xl bg-zinc-900 text-center text-zinc-500">
// // // // // //               No active complaints found in the system.
// // // // // //             </div>
// // // // // //           ) : (
// // // // // //             <div className="grid gap-4">
// // // // // //               {complaints.map((c) => (
// // // // // //                 <ComplaintCard key={c.id} c={c} refresh={loadComplaints} />
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </section>

// // // // // //       </div>
// // // // // //     </main>
// // // // // //   );
// // // // // // }

// // // // // // // --- SUB-COMPONENTS ---

// // // // // // function ComplaintCard({ c, refresh }: { c: any, refresh: () => void }) {
// // // // // //   // 🛡️ Safe Access to Validations
// // // // // //   const validations = c.validations || [];
// // // // // //   const confirmed = validations.filter((v: any) => v.vote === 'CONFIRMED').length;
// // // // // //   const notFixed = validations.filter((v: any) => v.vote === 'NOT_FIXED').length;

// // // // // //   const [expanded, setExpanded] = useState(false);

// // // // // //   return (
// // // // // //     <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-lg hover:border-zinc-700 transition">
// // // // // //       <div className="flex justify-between items-start">
// // // // // //         <div className="space-y-1">
// // // // // //           <div className="flex items-center gap-2 mb-2">
// // // // // //             <StatusBadge status={c.currentStatus} />
// // // // // //             <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{c.category}</span>
// // // // // //           </div>
// // // // // //           <h3 className="font-semibold text-lg text-white">{c.title}</h3>
// // // // // //           <p className="text-zinc-400 text-sm">{c.description || "No description provided."}</p>
// // // // // //         </div>

// // // // // //         <button 
// // // // // //           onClick={() => setExpanded(!expanded)}
// // // // // //           className="text-sm bg-zinc-800 hover:bg-zinc-700 px-3 py-1 rounded-md text-zinc-300 transition"
// // // // // //         >
// // // // // //           {expanded ? "Close" : "Actions"}
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       <div className="flex items-center gap-4 text-xs text-zinc-500 mt-4 border-t border-zinc-800 pt-3">
// // // // // //         <span>📍 {c.wardId || 'Unknown Ward'}</span>
// // // // // //         <span>📅 {new Date(c.createdAt).toLocaleDateString()}</span>
// // // // // //         {(confirmed > 0 || notFixed > 0) && (
// // // // // //           <span className="ml-auto flex gap-3 font-mono">
// // // // // //              <span className="text-green-500">✅ {confirmed}</span>
// // // // // //              <span className="text-red-500">❌ {notFixed}</span>
// // // // // //           </span>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       {/* Action Panel */}
// // // // // //       {expanded && (
// // // // // //         <div className="mt-4 pt-4 border-t border-zinc-800 animate-in fade-in slide-in-from-top-2">
// // // // // //           <ActionPanel c={c} refresh={refresh} />
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // function StatusBadge({ status }: { status: string }) {
// // // // // //   const styles: Record<string, string> = {
// // // // // //     CREATED: "bg-blue-900/30 text-blue-400 border-blue-800",
// // // // // //     ACKNOWLEDGED: "bg-yellow-900/30 text-yellow-400 border-yellow-800",
// // // // // //     RESOLVED: "bg-green-900/30 text-green-400 border-green-800",
// // // // // //     REOPENED: "bg-red-900/30 text-red-400 border-red-800",
// // // // // //   };

// // // // // //   return (
// // // // // //     <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${styles[status] || "bg-zinc-800 text-zinc-400 border-zinc-700"}`}>
// // // // // //       {status}
// // // // // //     </span>
// // // // // //   );
// // // // // // }

// // // // // // // function ActionPanel({ c, refresh }: { c: any, refresh: () => void }) {
// // // // // // //   const [file, setFile] = useState<File | null>(null);
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [note, setNote] = useState("");

// // // // // // //   async function handleAck() {
// // // // // // //     if (!confirm("Acknowledge this complaint?")) return;
// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       await apiPost(`/complaints/${c.id}/ack`, {});
// // // // // // //       alert("✅ Acknowledged");
// // // // // // //       refresh();
// // // // // // //     } catch (e: any) {
// // // // // // //       alert("Error: " + e.message);
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   async function handleResolve() {
// // // // // // //     if (!file) return alert("📸 Photo proof is required to resolve.");
// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       // Get Location
// // // // // // //       const pos: any = await new Promise((resolve, reject) => {
// // // // // // //         navigator.geolocation.getCurrentPosition(resolve, reject);
// // // // // // //       });

// // // // // // //       const fullBase64 = await fileToBase64(file);
// // // // // // //       const mediaBase64 = fullBase64.split(",")[1];

// // // // // // //       await apiPost(`/complaints/${c.id}/resolve`, {
// // // // // // //         lat: pos.coords.latitude,
// // // // // // //         lng: pos.coords.longitude,
// // // // // // //         mediaBase64,
// // // // // // //         note: note || "Resolved via Console",
// // // // // // //       });

// // // // // // //       alert("🎉 Mark Resolved!");
// // // // // // //       refresh();
// // // // // // //     } catch (e: any) {
// // // // // // //       alert("Error: " + e.message);
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   if (c.currentStatus === 'CREATED') {
// // // // // // //     return (
// // // // // // //       <button 
// // // // // // //         onClick={handleAck} 
// // // // // // //         disabled={loading}
// // // // // // //         className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
// // // // // // //       >
// // // // // // //         {loading ? "Processing..." : "Assign to Me (Acknowledge)"}
// // // // // // //       </button>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   if (c.currentStatus === 'ACKNOWLEDGED' || c.currentStatus === 'IN_PROGRESS' || c.currentStatus === 'REOPENED') {
// // // // // // //     return (
// // // // // // //       <div className="space-y-3">
// // // // // // //         <textarea 
// // // // // // //           placeholder="Resolution notes..." 
// // // // // // //           className="w-full bg-black border border-zinc-700 rounded-lg p-2 text-sm text-white focus:border-green-500 outline-none"
// // // // // // //           value={note}
// // // // // // //           onChange={(e) => setNote(e.target.value)}
// // // // // // //         />
// // // // // // //         <div className="flex items-center gap-2">
// // // // // // //           <input 
// // // // // // //             type="file" 
// // // // // // //             accept="image/*"
// // // // // // //             onChange={(e) => setFile(e.target.files?.[0] || null)}
// // // // // // //             className="text-xs text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-zinc-800 file:text-white hover:file:bg-zinc-700"
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //         <button 
// // // // // // //           onClick={handleResolve} 
// // // // // // //           disabled={loading}
// // // // // // //           className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
// // // // // // //         >
// // // // // // //           {loading ? "Uploading Proof..." : "✅ Mark Resolved"}
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return <div className="text-sm text-zinc-500 italic">No actions available for this status.</div>;
// // // // // // // }
// // // // // // function ActionPanel({ c, refresh }: { c: any, refresh: () => void }) {
// // // // // //   const [file, setFile] = useState<File | null>(null);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [note, setNote] = useState("");

// // // // // //   // 1. ACKNOWLEDGE (Assign to Me)
// // // // // //   async function handleAck() {
// // // // // //     if (!confirm("Acknowledge and assign this complaint to yourself?")) return;
// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       await apiPost(`/complaints/${c.id}/ack`, {});
// // // // // //       refresh();
// // // // // //     } catch (e: any) {
// // // // // //       alert("Error: " + e.message);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   }

// // // // // //   // 2. START WORK (Move to In Progress)
// // // // // //   async function handleStartWork() {
// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       // We use the generic 'advance' endpoint for status changes
// // // // // //       await apiPost(`/complaints/${c.id}/advance`, { 
// // // // // //         nextStatus: "IN_PROGRESS",
// // // // // //         note: "Officer started field inspection."
// // // // // //       });
// // // // // //       refresh();
// // // // // //     } catch (e: any) {
// // // // // //       alert("Error: " + e.message);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   }

// // // // // //   // 3. RESOLVE (Finish Job)
// // // // // //   async function handleResolve() {
// // // // // //     if (!file) return alert("📸 Photo proof is required to resolve.");
// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       // Get Location
// // // // // //       const pos: any = await new Promise((resolve, reject) => {
// // // // // //         navigator.geolocation.getCurrentPosition(resolve, reject);
// // // // // //       });

// // // // // //       const fullBase64 = await fileToBase64(file);
// // // // // //       const mediaBase64 = fullBase64.split(",")[1];

// // // // // //       await apiPost(`/complaints/${c.id}/resolve`, {
// // // // // //         lat: pos.coords.latitude,
// // // // // //         lng: pos.coords.longitude,
// // // // // //         mediaBase64,
// // // // // //         note: note || "Resolved via Console",
// // // // // //       });

// // // // // //       alert("🎉 Job Closed & Resolved!");
// // // // // //       refresh();
// // // // // //     } catch (e: any) {
// // // // // //       alert("Error: " + e.message);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   }

// // // // // //   // --- RENDER LOGIC ---

// // // // // //   // STEP 1: Created -> Acknowledge
// // // // // //   if (c.currentStatus === 'CREATED') {
// // // // // //     return (
// // // // // //       <button 
// // // // // //         onClick={handleAck} 
// // // // // //         disabled={loading}
// // // // // //         className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 shadow-lg shadow-blue-900/20"
// // // // // //       >
// // // // // //         {loading ? "Processing..." : "🙋‍♂️ Assign to Me"}
// // // // // //       </button>
// // // // // //     );
// // // // // //   }

// // // // // //   // STEP 2: Acknowledged -> Start Work
// // // // // //   if (c.currentStatus === 'ACKNOWLEDGED') {
// // // // // //     return (
// // // // // //       <div className="space-y-3 animate-in fade-in">
// // // // // //         <div className="p-3 bg-yellow-900/20 border border-yellow-800 rounded-lg text-yellow-200 text-sm">
// // // // // //           ℹ️ You have accepted this ticket. Start the inspection when you arrive on site.
// // // // // //         </div>
// // // // // //         <button 
// // // // // //           onClick={handleStartWork} 
// // // // // //           disabled={loading}
// // // // // //           className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 shadow-lg shadow-yellow-900/20"
// // // // // //         >
// // // // // //           {loading ? "Updating..." : "🚧 Start Field Inspection"}
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   // STEP 3: In Progress -> Resolve
// // // // // //   if (c.currentStatus === 'IN_PROGRESS' || c.currentStatus === 'REOPENED') {
// // // // // //     return (
// // // // // //       <div className="space-y-3 animate-in fade-in">
// // // // // //         <div className="p-3 bg-blue-900/20 border border-blue-800 rounded-lg text-blue-200 text-sm mb-2">
// // // // // //           🛠️ Work in progress. Upload proof when finished.
// // // // // //         </div>
// // // // // //         <textarea 
// // // // // //           placeholder="Resolution notes (e.g. 'Filled pothole with asphalt')..." 
// // // // // //           className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-sm text-white focus:border-green-500 outline-none"
// // // // // //           value={note}
// // // // // //           onChange={(e) => setNote(e.target.value)}
// // // // // //         />
// // // // // //         <div className="flex items-center gap-2">
// // // // // //           <label className="flex-1 cursor-pointer bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white py-3 rounded-lg text-center text-sm transition font-medium">
// // // // // //              📸 Upload Proof Photo
// // // // // //              <input 
// // // // // //               type="file" 
// // // // // //               accept="image/*"
// // // // // //               onChange={(e) => setFile(e.target.files?.[0] || null)}
// // // // // //               className="hidden"
// // // // // //             />
// // // // // //           </label>
// // // // // //         </div>
// // // // // //         {file && <div className="text-xs text-green-400 text-center">Selected: {file.name}</div>}

// // // // // //         <button 
// // // // // //           onClick={handleResolve} 
// // // // // //           disabled={loading}
// // // // // //           className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 shadow-lg shadow-green-900/20"
// // // // // //         >
// // // // // //           {loading ? "Uploading..." : "✅ Mark Job Complete"}
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return <div className="text-sm text-zinc-500 italic text-center">Ticket is closed.</div>;
// // // // // // }


// // // // // "use client";

// // // // // import { useState, useEffect } from "react";
// // // // // import { useRouter } from "next/navigation";
// // // // // import Link from "next/link";

// // // // // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // // // // Helper: API Fetcher
// // // // // async function apiGet<T>(url: string): Promise<T> {
// // // // //   const token = localStorage.getItem("civic_token");
// // // // //   const res = await fetch(`${API}${url}`, {
// // // // //     headers: { "Authorization": `Bearer ${token}` }
// // // // //   });
// // // // //   if (!res.ok) throw new Error(await res.text());
// // // // //   return res.json();
// // // // // }

// // // // // async function apiPost(url: string, body: any) {
// // // // //   const token = localStorage.getItem("civic_token");
// // // // //   const res = await fetch(`${API}${url}`, {
// // // // //     method: "POST",
// // // // //     headers: {
// // // // //       "Content-Type": "application/json",
// // // // //       "Authorization": `Bearer ${token}`
// // // // //     },
// // // // //     body: JSON.stringify(body),
// // // // //   });
// // // // //   if (!res.ok) throw new Error(await res.text());
// // // // //   return res.json();
// // // // // }

// // // // // export default function OfficerPage() {
// // // // //   const router = useRouter();
// // // // //   const [complaints, setComplaints] = useState<any[]>([]);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   // Load ALL complaints
// // // // //   async function loadComplaints() {
// // // // //     try {
// // // // //       const data = await apiGet<any[]>("/complaints");
// // // // //       setComplaints(data);
// // // // //     } catch (e) {
// // // // //       console.error("Failed to load complaints", e);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }

// // // // //   useEffect(() => {
// // // // //     loadComplaints();
// // // // //   }, []);

// // // // //   return (
// // // // //     <main className="min-h-screen bg-black text-zinc-200 font-sans p-6 md:p-12">
// // // // //       <div className="max-w-4xl mx-auto space-y-8">

// // // // //         {/* Header */}
// // // // //         <div className="flex justify-between items-center border-b border-zinc-800 pb-6">
// // // // //           <div>
// // // // //             <h1 className="text-3xl font-bold text-white tracking-tight">👮 Officer Console</h1>
// // // // //             <p className="text-zinc-500 text-sm mt-1">Field Operations Unit • Zone 1</p>
// // // // //           </div>
// // // // //           <button
// // // // //             onClick={() => {
// // // // //               localStorage.removeItem("civic_token");
// // // // //               document.cookie = "civic_session=; Max-Age=0; path=/;";
// // // // //               router.push("/login");
// // // // //             }}
// // // // //             className="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition text-red-400"
// // // // //           >
// // // // //             Log Out
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Queue List */}
// // // // //         <section>
// // // // //           <div className="flex justify-between items-center mb-4">
// // // // //             <h2 className="text-xl font-semibold text-white">Active Queue</h2>
// // // // //             <button onClick={loadComplaints} className="text-xs text-blue-400 hover:text-blue-300">
// // // // //               Refresh ↻
// // // // //             </button>
// // // // //           </div>

// // // // //           {loading ? (
// // // // //             <div className="text-zinc-500">Loading assignments...</div>
// // // // //           ) : complaints.length === 0 ? (
// // // // //             <div className="p-8 border border-zinc-800 rounded-xl bg-zinc-900 text-center text-zinc-500">
// // // // //               No active complaints found in the system.
// // // // //             </div>
// // // // //           ) : (
// // // // //             <div className="grid gap-4">
// // // // //               {complaints.map((c) => (
// // // // //                 <ComplaintCard key={c.id} c={c} refresh={loadComplaints} />
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </section>

// // // // //       </div>
// // // // //     </main>
// // // // //   );
// // // // // }

// // // // // // --- SUB-COMPONENTS ---

// // // // // // function ComplaintCard({ c, refresh }: { c: any, refresh: () => void }) {
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   // 1. ACKNOWLEDGE (Assign to Me)
// // // // // //   async function handleAck() {
// // // // // //     if (!confirm("Acknowledge and assign this complaint to yourself?")) return;
// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       await apiPost(`/complaints/${c.id}/ack`, {});
// // // // // //       refresh();
// // // // // //     } catch (e: any) {
// // // // // //       alert("Error: " + e.message);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-lg hover:border-zinc-700 transition">
// // // // // //       <div className="flex justify-between items-start">

// // // // // //         {/* Info Section */}
// // // // // //         <div className="space-y-1">
// // // // // //           <div className="flex items-center gap-2 mb-2">
// // // // // //             <StatusBadge status={c.currentStatus} />
// // // // // //             <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{c.category}</span>
// // // // // //           </div>
// // // // // //           <h3 className="font-semibold text-lg text-white">{c.title}</h3>
// // // // // //           <p className="text-zinc-400 text-sm">{c.description || "No description provided."}</p>
// // // // // //         </div>

// // // // // //         {/* Action Button Logic */}
// // // // // //         <div className="flex flex-col gap-2">

// // // // // //           {/* If CREATED -> Show 'Assign Me' */}
// // // // // //           {c.currentStatus === 'CREATED' && (
// // // // // //             <button
// // // // // //               onClick={handleAck}
// // // // // //               disabled={loading}
// // // // // //               className="bg-blue-900/30 hover:bg-blue-900/50 text-blue-400 border border-blue-800 text-sm font-medium px-4 py-2 rounded-lg transition disabled:opacity-50"
// // // // // //             >
// // // // // //               {loading ? "..." : "Assign Me"}
// // // // // //             </button>
// // // // // //           )}

// // // // // //           {/* If ACKNOWLEDGED or WORK_IN_PROGRESS -> Link to Detail Page */}
// // // // // //           {(c.currentStatus === 'ACKNOWLEDGED' || c.currentStatus === 'WORK_IN_PROGRESS' || c.currentStatus === 'REOPENED') && (
// // // // // //             <Link
// // // // // //               href={`/officer/resolve/${c.id}`}
// // // // // //               className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg transition text-center"
// // // // // //             >
// // // // // //               Manage &rarr;
// // // // // //             </Link>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div className="flex items-center gap-4 text-xs text-zinc-500 mt-4 border-t border-zinc-800 pt-3">
// // // // // //         <span>📍 {c.wardId || 'Unknown Ward'}</span>
// // // // // //         <span>📅 {new Date(c.createdAt).toLocaleDateString()}</span>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // function StatusBadge({ status }: { status: string }) {
// // // // // //   const styles: Record<string, string> = {
// // // // // //     CREATED: "bg-blue-900/30 text-blue-400 border-blue-800",
// // // // // //     ACKNOWLEDGED: "bg-yellow-900/30 text-yellow-400 border-yellow-800",
// // // // // //     WORK_IN_PROGRESS: "bg-purple-900/30 text-purple-400 border-purple-800",
// // // // // //     RESOLVED: "bg-green-900/30 text-green-400 border-green-800",
// // // // // //     REOPENED: "bg-red-900/30 text-red-400 border-red-800",
// // // // // //   };

// // // // // //   // Format the text to be readable (e.g. WORK_IN_PROGRESS -> WORK IN PROGRESS)
// // // // // //   const display = status.replace(/_/g, " ");

// // // // // //   return (
// // // // // //     <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${styles[status] || "bg-zinc-800 text-zinc-400 border-zinc-700"}`}>
// // // // // //       {display}
// // // // // //     </span>
// // // // // //   );
// // // // // // --- SUB-COMPONENTS ---

// // // // // function ComplaintCard({ c, refresh }: { c: any, refresh: () => void }) {
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const API = process.env.NEXT_PUBLIC_API_BASE!; // Ensure API is accessible here

// // // // //   // 🛑 STRICT PROTOCOL HANDLER
// // // // //   async function handleStrictAssign() {
// // // // //     if (!confirm("Accept strict assignment for this complaint?")) return;
// // // // //     setLoading(true);

// // // // //     try {
// // // // //       const token = localStorage.getItem("civic_token");
// // // // //       const headers = {
// // // // //         "Authorization": `Bearer ${token}`,
// // // // //         "Content-Type": "application/json"
// // // // //       };

// // // // //       // STEP 1: If status is CREATED, we must ACKNOWLEDGE it first
// // // // //       if (c.currentStatus === 'CREATED') {
// // // // //         console.log("Protocol: Acknowledging...");
// // // // //         const ackRes = await fetch(`${API}/complaints/${c.id}/ack`, {
// // // // //           method: "POST",
// // // // //           headers
// // // // //         });
// // // // //         if (!ackRes.ok) throw new Error("Failed to Acknowledge. Protocol halted.");
// // // // //       }

// // // // //       // STEP 2: Execute Assignment (Writes the 'Person A is assigned' note)
// // // // //       console.log("Protocol: Assigning...");
// // // // //       const assignRes = await fetch(`${API}/complaints/${c.id}/assign`, {
// // // // //         method: "PATCH",
// // // // //         headers
// // // // //       });

// // // // //       if (!assignRes.ok) {
// // // // //         const err = await assignRes.json();
// // // // //         throw new Error(err.message || "Assignment failed");
// // // // //       }

// // // // //       // Success!
// // // // //       refresh();

// // // // //     } catch (e: any) {
// // // // //       alert("Error: " + e.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-lg hover:border-zinc-700 transition">
// // // // //       <div className="flex justify-between items-start">

// // // // //         {/* Info Section */}
// // // // //         <div className="space-y-1">
// // // // //           <div className="flex items-center gap-2 mb-2">
// // // // //             <StatusBadge status={c.currentStatus} />
// // // // //             <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{c.category}</span>
// // // // //           </div>
// // // // //           <h3 className="font-semibold text-lg text-white">{c.title}</h3>
// // // // //           <p className="text-zinc-400 text-sm">{c.description || "No description provided."}</p>
// // // // //         </div>

// // // // //         {/* Action Button Logic */}
// // // // //         <div className="flex flex-col gap-2">

// // // // //           {/* If CREATED -> Show 'Accept Assignment' (Strict Mode) */}
// // // // //           {c.currentStatus === 'CREATED' && (
// // // // //             <button
// // // // //               onClick={handleStrictAssign}
// // // // //               disabled={loading}
// // // // //               className="bg-blue-600 hover:bg-blue-500 text-white border border-blue-500 text-sm font-bold px-4 py-2 rounded-lg transition disabled:opacity-50 shadow-lg shadow-blue-900/20"
// // // // //             >
// // // // //               {loading ? "Processing..." : "Accept Assignment"}
// // // // //             </button>
// // // // //           )}

// // // // //           {/* If ASSIGNED, ACKNOWLEDGED, or WIP -> Show 'Manage' */}
// // // // //           {/* We added ASSIGNED to this list so the button appears after you accept */}
// // // // //           {['ACKNOWLEDGED', 'ASSIGNED', 'INSPECTION', 'WORK_IN_PROGRESS', 'REOPENED'].includes(c.currentStatus) && (
// // // // //             <Link
// // // // //               href={`/officer/resolve/${c.id}`}
// // // // //               className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg transition text-center border border-zinc-700"
// // // // //             >
// // // // //               Manage &rarr;
// // // // //             </Link>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="flex items-center gap-4 text-xs text-zinc-500 mt-4 border-t border-zinc-800 pt-3">
// // // // //         <span>📍 {c.ward?.name || c.wardId || 'Unknown Ward'}</span>
// // // // //         <span>📅 {new Date(c.createdAt).toLocaleDateString()}</span>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // function StatusBadge({ status }: { status: string }) {
// // // // //   const styles: Record<string, string> = {
// // // // //     CREATED: "bg-blue-900/30 text-blue-400 border-blue-800",
// // // // //     ACKNOWLEDGED: "bg-yellow-900/30 text-yellow-400 border-yellow-800",
// // // // //     ASSIGNED: "bg-orange-900/30 text-orange-400 border-orange-800", // 👈 Added ASSIGNED style
// // // // //     INSPECTION: "bg-indigo-900/30 text-indigo-400 border-indigo-800", // 👈 Added INSPECTION style
// // // // //     WORK_IN_PROGRESS: "bg-purple-900/30 text-purple-400 border-purple-800",
// // // // //     RESOLVED: "bg-green-900/30 text-green-400 border-green-800",
// // // // //     REOPENED: "bg-red-900/30 text-red-400 border-red-800",
// // // // //   };

// // // // //   const display = status.replace(/_/g, " ");

// // // // //   return (
// // // // //     <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${styles[status] || "bg-zinc-800 text-zinc-400 border-zinc-700"}`}>
// // // // //       {display}
// // // // //     </span>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { useState, useEffect } from "react";
// // // // import { useRouter } from "next/navigation";
// // // // import Link from "next/link";
// // // // import { 
// // // //   LayoutDashboard, 
// // // //   LogOut, 
// // // //   Search, 
// // // //   Filter, 
// // // //   Clock, 
// // // //   Hammer, 
// // // //   CheckCircle2, 
// // // //   MapPin, 
// // // //   ChevronRight,
// // // //   AlertCircle
// // // // } from "lucide-react";

// // // // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // // // --- HELPER TYPES & MAPPINGS ---
// // // // type TabType = 'PENDING' | 'PROGRESS' | 'RESOLVED';

// // // // const STATUS_BUCKETS: Record<TabType, string[]> = {
// // // //   PENDING: ['CREATED', 'ACKNOWLEDGED', 'ASSIGNED', 'REOPENED'],
// // // //   PROGRESS: ['INSPECTION', 'WORK_IN_PROGRESS'],
// // // //   RESOLVED: ['RESOLVED', 'REJECTED']
// // // // };

// // // // export default function OfficerPage() {
// // // //   const router = useRouter();
// // // //   const [complaints, setComplaints] = useState<any[]>([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [activeTab, setActiveTab] = useState<TabType>('PENDING');
// // // //   const [searchQuery, setSearchQuery] = useState("");

// // // //   // Load Data
// // // //   async function loadComplaints() {
// // // //     try {
// // // //       const token = localStorage.getItem("civic_token");
// // // //       if (!token) return router.push("/login");

// // // //       const res = await fetch(`${API}/complaints`, {
// // // //         headers: { "Authorization": `Bearer ${token}` }
// // // //       });
// // // //       if (!res.ok) throw new Error("Failed");
// // // //       const data = await res.json();
// // // //       setComplaints(data);
// // // //     } catch (e) {
// // // //       console.error(e);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   }

// // // //   useEffect(() => { loadComplaints(); }, []);

// // // //   // --- DERIVED STATE (COUNTS) ---
// // // //   const pendingCount = complaints.filter(c => STATUS_BUCKETS.PENDING.includes(c.currentStatus)).length;
// // // //   const progressCount = complaints.filter(c => STATUS_BUCKETS.PROGRESS.includes(c.currentStatus)).length;
// // // //   const resolvedCount = complaints.filter(c => STATUS_BUCKETS.RESOLVED.includes(c.currentStatus)).length;

// // // //   // --- FILTERING LOGIC ---
// // // //   const filteredComplaints = complaints
// // // //     .filter(c => STATUS_BUCKETS[activeTab].includes(c.currentStatus))
// // // //     .filter(c => 
// // // //       c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
// // // //       c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //       c.ward?.name?.toLowerCase().includes(searchQuery.toLowerCase())
// // // //     );

// // // //   return (
// // // //     <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">
      
// // // //       {/* 1. TOP HEADER */}
// // // //       <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-zinc-800">
// // // //         <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
// // // //           <div className="flex items-center gap-3">
// // // //             <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
// // // //               <LayoutDashboard className="text-white" size={20} />
// // // //             </div>
// // // //             <div>
// // // //               <h1 className="text-xl font-bold text-white leading-none">Officer Console</h1>
// // // //               <p className="text-xs text-zinc-500 font-medium mt-1">Zone 1 Operations</p>
// // // //             </div>
// // // //           </div>
// // // //           <button 
// // // //             onClick={() => {
// // // //               localStorage.removeItem("civic_token");
// // // //               router.push("/login");
// // // //             }}
// // // //             className="p-2 hover:bg-zinc-800 rounded-full text-zinc-500 hover:text-red-400 transition"
// // // //           >
// // // //             <LogOut size={20} />
// // // //           </button>
// // // //         </div>
// // // //       </header>

// // // //       <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">

// // // //         {/* 2. CLASSY METRIC CARDS (TABS) */}
// // // //         <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
// // // //           {/* RED CARD: PENDING */}
// // // //           <MetricCard 
// // // //             label="Pending Action"
// // // //             count={pendingCount}
// // // //             icon={AlertCircle}
// // // //             active={activeTab === 'PENDING'}
// // // //             onClick={() => setActiveTab('PENDING')}
// // // //             colorClass="text-red-400"
// // // //             bgClass="from-red-900/20 to-zinc-900"
// // // //             borderClass="border-red-900/50"
// // // //           />

// // // //           {/* BLUE CARD: IN PROGRESS */}
// // // //           <MetricCard 
// // // //             label="Work In Progress"
// // // //             count={progressCount}
// // // //             icon={Hammer}
// // // //             active={activeTab === 'PROGRESS'}
// // // //             onClick={() => setActiveTab('PROGRESS')}
// // // //             colorClass="text-blue-400"
// // // //             bgClass="from-blue-900/20 to-zinc-900"
// // // //             borderClass="border-blue-900/50"
// // // //           />

// // // //           {/* GREEN CARD: RESOLVED */}
// // // //           <MetricCard 
// // // //             label="Resolved Jobs"
// // // //             count={resolvedCount}
// // // //             icon={CheckCircle2}
// // // //             active={activeTab === 'RESOLVED'}
// // // //             onClick={() => setActiveTab('RESOLVED')}
// // // //             colorClass="text-green-400"
// // // //             bgClass="from-green-900/20 to-zinc-900"
// // // //             borderClass="border-green-900/50"
// // // //           />

// // // //         </section>

// // // //         {/* 3. SEARCH & LIST HEADER */}
// // // //         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
// // // //           <h2 className="text-xl font-bold text-white flex items-center gap-2">
// // // //             {activeTab === 'PENDING' && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/>}
// // // //             {activeTab === 'PROGRESS' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"/>}
// // // //             {activeTab === 'RESOLVED' && <span className="w-2 h-2 rounded-full bg-green-500"/>}
// // // //             {activeTab === 'PENDING' ? 'Tasks Awaiting Action' : activeTab === 'PROGRESS' ? 'Active Jobs' : 'Completed History'}
// // // //           </h2>

// // // //           <div className="relative group w-full md:w-64">
// // // //             <Search className="absolute left-3 top-3 text-zinc-600 group-focus-within:text-zinc-400 transition" size={16} />
// // // //             <input 
// // // //               type="text" 
// // // //               placeholder="Search ID or Street..." 
// // // //               value={searchQuery}
// // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // //               className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2.5 pl-10 pr-4 text-sm text-zinc-300 focus:border-zinc-600 focus:outline-none transition"
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* 4. THE LIST */}
// // // //         <section className="space-y-3">
// // // //           {loading ? (
// // // //             <div className="text-center py-20 text-zinc-600">Loading Dashboard...</div>
// // // //           ) : filteredComplaints.length === 0 ? (
// // // //             <div className="text-center py-20 border border-dashed border-zinc-800 rounded-2xl">
// // // //               <p className="text-zinc-500">No complaints found in this category.</p>
// // // //             </div>
// // // //           ) : (
// // // //             filteredComplaints.map(c => (
// // // //               <ComplaintRow key={c.id} c={c} tab={activeTab} />
// // // //             ))
// // // //           )}
// // // //         </section>

// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }

// // // // // --- SUB-COMPONENTS ---

// // // // function MetricCard({ label, count, icon: Icon, active, onClick, colorClass, bgClass, borderClass }: any) {
// // // //   return (
// // // //     <button 
// // // //       onClick={onClick}
// // // //       className={`
// // // //         relative overflow-hidden text-left p-6 rounded-2xl border transition-all duration-300 group
// // // //         ${active ? `bg-gradient-to-br ${bgClass} ${borderClass} scale-[1.02] shadow-xl` : 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900'}
// // // //       `}
// // // //     >
// // // //       <div className="flex justify-between items-start mb-4">
// // // //         <div className={`p-3 rounded-xl bg-black/40 ${active ? colorClass : 'text-zinc-500 group-hover:text-zinc-300'}`}>
// // // //           <Icon size={24} />
// // // //         </div>
// // // //         <div className={`text-3xl font-bold tracking-tight ${active ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
// // // //           {count}
// // // //         </div>
// // // //       </div>
// // // //       <div className={`text-sm font-medium uppercase tracking-wider ${active ? 'text-zinc-300' : 'text-zinc-600'}`}>
// // // //         {label}
// // // //       </div>
// // // //       {/* Active Indicator Bar */}
// // // //       {active && <div className={`absolute bottom-0 left-0 right-0 h-1 ${colorClass.replace('text-', 'bg-')}`} />}
// // // //     </button>
// // // //   );
// // // // }

// // // // function ComplaintRow({ c, tab }: { c: any, tab: TabType }) {
// // // //   const isPending = tab === 'PENDING';
// // // //   const isProgress = tab === 'PROGRESS';
// // // //   const isResolved = tab === 'RESOLVED';

// // // //   return (
// // // //     <Link href={`/officer/resolve/${c.id}`}>
// // // //       <div className="group relative bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl p-5 transition-all duration-200 flex items-center justify-between">
        
// // // //         {/* Left Info */}
// // // //         <div className="flex items-center gap-5">
// // // //           {/* Status Icon */}
// // // //           <div className={`
// // // //             w-12 h-12 rounded-full flex items-center justify-center shrink-0
// // // //             ${isPending ? 'bg-red-500/10 text-red-500' : isProgress ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}
// // // //           `}>
// // // //              {isPending ? <Clock size={20} /> : isProgress ? <Hammer size={20} /> : <CheckCircle2 size={20} />}
// // // //           </div>

// // // //           <div className="space-y-1">
// // // //             <h3 className="font-semibold text-zinc-200 group-hover:text-white transition">
// // // //               {c.title}
// // // //             </h3>
// // // //             <div className="flex items-center gap-3 text-xs text-zinc-500">
// // // //               <span className="flex items-center gap-1">
// // // //                 <MapPin size={12} /> {c.ward?.name || "Zone 1"}
// // // //               </span>
// // // //               <span>•</span>
// // // //               <span className="font-mono opacity-70">ID: {c.id.slice(0,6)}</span>
// // // //               <span>•</span>
// // // //               <span className={`font-bold ${
// // // //                 isPending ? 'text-red-400' : isProgress ? 'text-blue-400' : 'text-green-400'
// // // //               }`}>
// // // //                 {c.currentStatus.replace(/_/g, " ")}
// // // //               </span>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Right Action Button (Quick Actions) */}
// // // //         <div className="flex items-center gap-4">
// // // //           <div className="text-right hidden md:block">
// // // //             <div className="text-xs text-zinc-600 font-medium uppercase tracking-wider">Date</div>
// // // //             <div className="text-xs text-zinc-400">{new Date(c.createdAt).toLocaleDateString()}</div>
// // // //           </div>
          
// // // //           <div className={`
// // // //             px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition
// // // //             ${isPending ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/20' : ''}
// // // //             ${isProgress ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20' : ''}
// // // //             ${isResolved ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300' : ''}
// // // //           `}>
// // // //             {isPending && "Start"}
// // // //             {isProgress && "Update"}
// // // //             {isResolved && "View"}
// // // //             <ChevronRight size={16} />
// // // //           </div>
// // // //         </div>

// // // //       </div>
// // // //     </Link>
// // // //   );
// // // // }

// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { useRouter } from "next/navigation";
// // // import Link from "next/link";
// // // import { 
// // //   LayoutDashboard, 
// // //   LogOut, 
// // //   Search, 
// // //   Map, // 👈 New Import
// // //   Hammer, 
// // //   CheckCircle2, 
// // //   MapPin, 
// // //   ChevronRight,
// // //   AlertCircle,
// // //   Filter
// // // } from "lucide-react";

// // // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // // --- HELPER TYPES & MAPPINGS ---
// // // type TabType = 'PENDING' | 'PROGRESS' | 'RESOLVED';

// // // const STATUS_BUCKETS: Record<TabType, string[]> = {
// // //   PENDING: ['CREATED', 'ACKNOWLEDGED', 'ASSIGNED', 'REOPENED'],
// // //   PROGRESS: ['INSPECTION', 'WORK_IN_PROGRESS'],
// // //   RESOLVED: ['RESOLVED', 'REJECTED']
// // // };

// // // // 1. DEPARTMENT LIST (Customize as needed)
// // // const DEPARTMENTS = ["ALL", "ROAD", "WATER", "ELECTRICITY", "PWD", "SANITATION", "OTHER"];

// // // export default function OfficerPage() {
// // //   const router = useRouter();
// // //   const [complaints, setComplaints] = useState<any[]>([]);
// // //   const [loading, setLoading] = useState(true);
  
// // //   // 2. NEW STATES
// // //   const [activeTab, setActiveTab] = useState<TabType>('PENDING');
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [selectedDept, setSelectedDept] = useState("ALL");

// // //   // Load Data
// // //   async function loadComplaints() {
// // //     try {
// // //       const token = localStorage.getItem("civic_token");
// // //       if (!token) return router.push("/login");

// // //       const res = await fetch(`${API}/complaints`, {
// // //         headers: { "Authorization": `Bearer ${token}` }
// // //       });
// // //       if (!res.ok) throw new Error("Failed");
// // //       const data = await res.json();
// // //       setComplaints(data);
// // //     } catch (e) {
// // //       console.error(e);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }

// // //   useEffect(() => { loadComplaints(); }, []);

// // //   // --- DERIVED STATE (COUNTS) ---
// // //   const pendingCount = complaints.filter(c => STATUS_BUCKETS.PENDING.includes(c.currentStatus)).length;
// // //   const progressCount = complaints.filter(c => STATUS_BUCKETS.PROGRESS.includes(c.currentStatus)).length;
// // //   const resolvedCount = complaints.filter(c => STATUS_BUCKETS.RESOLVED.includes(c.currentStatus)).length;

// // //   // --- FILTERING LOGIC (Updated with Dept) ---
// // //   const filteredComplaints = complaints
// // //     .filter(c => STATUS_BUCKETS[activeTab].includes(c.currentStatus))
// // //     .filter(c => {
// // //       // Dept Filter
// // //       if (selectedDept !== "ALL") {
// // //         // Checks if category matches directly OR if assigned department matches
// // //         const catMatch = c.category?.toUpperCase() === selectedDept;
// // //         const deptMatch = c.department?.name?.toUpperCase() === selectedDept;
// // //         if (!catMatch && !deptMatch) return false;
// // //       }
// // //       return true;
// // //     })
// // //     .filter(c => 
// // //       // Search Filter
// // //       c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
// // //       c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //       c.ward?.name?.toLowerCase().includes(searchQuery.toLowerCase())
// // //     );

// // //   return (
// // //     <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">
      
// // //       {/* 1. TOP HEADER (Updated with Map Button) */}
// // //       <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-zinc-800">
// // //         <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
// // //           <div className="flex items-center gap-3">
// // //             <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
// // //               <LayoutDashboard className="text-white" size={20} />
// // //             </div>
// // //             <div>
// // //               <h1 className="text-xl font-bold text-white leading-none">Officer Console</h1>
// // //               <p className="text-xs text-zinc-500 font-medium mt-1">Zone 1 Operations</p>
// // //             </div>
// // //           </div>

// // //           <div className="flex items-center gap-3">
// // //             {/* NEW: LIVE MAP BUTTON */}
// // //             <Link href="/map">
// // //               <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 hover:border-blue-500/50 hover:bg-zinc-800 rounded-lg text-sm font-medium transition text-zinc-300 hover:text-white">
// // //                 <Map size={16} className="text-blue-500" />
// // //                 <span className="hidden md:inline">Live Map</span>
// // //               </button>
// // //             </Link>

// // //             <button 
// // //               onClick={() => {
// // //                 localStorage.removeItem("civic_token");
// // //                 router.push("/login");
// // //               }}
// // //               className="p-2 hover:bg-zinc-800 rounded-full text-zinc-500 hover:text-red-400 transition"
// // //               title="Log Out"
// // //             >
// // //               <LogOut size={20} />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">

// // //         {/* 2. CLASSY METRIC CARDS */}
// // //         <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // //           <MetricCard 
// // //             label="Pending Action"
// // //             count={pendingCount}
// // //             icon={AlertCircle}
// // //             active={activeTab === 'PENDING'}
// // //             onClick={() => setActiveTab('PENDING')}
// // //             colorClass="text-red-400"
// // //             bgClass="from-red-900/20 to-zinc-900"
// // //             borderClass="border-red-900/50"
// // //           />
// // //           <MetricCard 
// // //             label="Work In Progress"
// // //             count={progressCount}
// // //             icon={Hammer}
// // //             active={activeTab === 'PROGRESS'}
// // //             onClick={() => setActiveTab('PROGRESS')}
// // //             colorClass="text-blue-400"
// // //             bgClass="from-blue-900/20 to-zinc-900"
// // //             borderClass="border-blue-900/50"
// // //           />
// // //           <MetricCard 
// // //             label="Resolved Jobs"
// // //             count={resolvedCount}
// // //             icon={CheckCircle2}
// // //             active={activeTab === 'RESOLVED'}
// // //             onClick={() => setActiveTab('RESOLVED')}
// // //             colorClass="text-green-400"
// // //             bgClass="from-green-900/20 to-zinc-900"
// // //             borderClass="border-green-900/50"
// // //           />
// // //         </section>

// // //         {/* 3. TOOLBAR: SEARCH & DEPARTMENT FILTER */}
// // //         <div className="space-y-4">
// // //           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
// // //             <h2 className="text-xl font-bold text-white flex items-center gap-2">
// // //               {activeTab === 'PENDING' && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/>}
// // //               {activeTab === 'PROGRESS' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"/>}
// // //               {activeTab === 'RESOLVED' && <span className="w-2 h-2 rounded-full bg-green-500"/>}
// // //               {activeTab === 'PENDING' ? 'Tasks Awaiting Action' : activeTab === 'PROGRESS' ? 'Active Jobs' : 'Completed History'}
// // //             </h2>

// // //             <div className="relative group w-full md:w-64">
// // //               <Search className="absolute left-3 top-3 text-zinc-600 group-focus-within:text-zinc-400 transition" size={16} />
// // //               <input 
// // //                 type="text" 
// // //                 placeholder="Search ID or Street..." 
// // //                 value={searchQuery}
// // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // //                 className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2.5 pl-10 pr-4 text-sm text-zinc-300 focus:border-zinc-600 focus:outline-none transition"
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* NEW: DEPARTMENT FILTER PILLS */}
// // //           <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
// // //             <div className="flex items-center text-zinc-500 text-xs font-bold uppercase tracking-wider mr-2">
// // //               <Filter size={14} className="mr-1" />
// // //               Dept:
// // //             </div>
// // //             {DEPARTMENTS.map((dept) => (
// // //               <button
// // //                 key={dept}
// // //                 onClick={() => setSelectedDept(dept)}
// // //                 className={`
// // //                   whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-bold border transition-all
// // //                   ${selectedDept === dept 
// // //                     ? "bg-white text-black border-white" 
// // //                     : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200"}
// // //                 `}
// // //               >
// // //                 {dept}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* 4. THE LIST */}
// // //         <section className="space-y-3">
// // //           {loading ? (
// // //             <div className="text-center py-20 text-zinc-600">Loading Dashboard...</div>
// // //           ) : filteredComplaints.length === 0 ? (
// // //             <div className="text-center py-20 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30">
// // //               <p className="text-zinc-500">No {selectedDept !== 'ALL' ? selectedDept.toLowerCase() : ''} complaints found in this category.</p>
// // //             </div>
// // //           ) : (
// // //             filteredComplaints.map(c => (
// // //               <ComplaintRow key={c.id} c={c} tab={activeTab} />
// // //             ))
// // //           )}
// // //         </section>

// // //       </div>
// // //     </main>
// // //   );
// // // }

// // // // --- SUB-COMPONENTS ---

// // // function MetricCard({ label, count, icon: Icon, active, onClick, colorClass, bgClass, borderClass }: any) {
// // //   return (
// // //     <button 
// // //       onClick={onClick}
// // //       className={`
// // //         relative overflow-hidden text-left p-6 rounded-2xl border transition-all duration-300 group
// // //         ${active ? `bg-gradient-to-br ${bgClass} ${borderClass} scale-[1.02] shadow-xl` : 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900'}
// // //       `}
// // //     >
// // //       <div className="flex justify-between items-start mb-4">
// // //         <div className={`p-3 rounded-xl bg-black/40 ${active ? colorClass : 'text-zinc-500 group-hover:text-zinc-300'}`}>
// // //           <Icon size={24} />
// // //         </div>
// // //         <div className={`text-3xl font-bold tracking-tight ${active ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
// // //           {count}
// // //         </div>
// // //       </div>
// // //       <div className={`text-sm font-medium uppercase tracking-wider ${active ? 'text-zinc-300' : 'text-zinc-600'}`}>
// // //         {label}
// // //       </div>
// // //       {active && <div className={`absolute bottom-0 left-0 right-0 h-1 ${colorClass.replace('text-', 'bg-')}`} />}
// // //     </button>
// // //   );
// // // }

// // // function ComplaintRow({ c, tab }: { c: any, tab: TabType }) {
// // //   const isPending = tab === 'PENDING';
// // //   const isProgress = tab === 'PROGRESS';
// // //   const isResolved = tab === 'RESOLVED';

// // //   return (
// // //     <Link href={`/officer/resolve/${c.id}`}>
// // //       <div className="group relative bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl p-5 transition-all duration-200 flex items-center justify-between">
        
// // //         {/* Left Info */}
// // //         <div className="flex items-center gap-5">
// // //           <div className={`
// // //             w-12 h-12 rounded-full flex items-center justify-center shrink-0
// // //             ${isPending ? 'bg-red-500/10 text-red-500' : isProgress ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}
// // //           `}>
// // //              {isPending ? <AlertCircle size={20} /> : isProgress ? <Hammer size={20} /> : <CheckCircle2 size={20} />}
// // //           </div>

// // //           <div className="space-y-1">
// // //             <div className="flex items-center gap-2">
// // //                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700 uppercase">
// // //                   {c.category}
// // //                </span>
// // //                <h3 className="font-semibold text-zinc-200 group-hover:text-white transition">
// // //                  {c.title}
// // //                </h3>
// // //             </div>
// // //             <div className="flex items-center gap-3 text-xs text-zinc-500">
// // //               <span className="flex items-center gap-1">
// // //                 <MapPin size={12} /> {c.ward?.name || "Zone 1"}
// // //               </span>
// // //               <span>•</span>
// // //               <span className="font-mono opacity-70">ID: {c.id.slice(0,6)}</span>
// // //               <span>•</span>
// // //               <span className={`font-bold ${
// // //                 isPending ? 'text-red-400' : isProgress ? 'text-blue-400' : 'text-green-400'
// // //               }`}>
// // //                 {c.currentStatus.replace(/_/g, " ")}
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Right Action Button */}
// // //         <div className="flex items-center gap-4">
// // //           <div className="text-right hidden md:block">
// // //             <div className="text-xs text-zinc-600 font-medium uppercase tracking-wider">Date</div>
// // //             <div className="text-xs text-zinc-400">{new Date(c.createdAt).toLocaleDateString()}</div>
// // //           </div>
          
// // //           <div className={`
// // //             px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition
// // //             ${isPending ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/20' : ''}
// // //             ${isProgress ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20' : ''}
// // //             ${isResolved ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300' : ''}
// // //           `}>
// // //             {isPending && "Start"}
// // //             {isProgress && "Update"}
// // //             {isResolved && "View"}
// // //             <ChevronRight size={16} />
// // //           </div>
// // //         </div>

// // //       </div>
// // //     </Link>
// // //   );
// // // }

// // "use client";

// // import { useState, useEffect } from "react";
// // import { useRouter } from "next/navigation";
// // import Link from "next/link";
// // import { 
// //   LayoutDashboard, 
// //   LogOut, 
// //   Search, 
// //   Map, 
// //   Hammer, 
// //   CheckCircle2, 
// //   MapPin, 
// //   ChevronRight,
// //   AlertCircle,
// //   Filter
// // } from "lucide-react";

// // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // --- HELPER TYPES & MAPPINGS ---
// // type TabType = 'PENDING' | 'PROGRESS' | 'RESOLVED';

// // const STATUS_BUCKETS: Record<TabType, string[]> = {
// //   PENDING: ['CREATED', 'ACKNOWLEDGED', 'ASSIGNED', 'REOPENED'],
// //   PROGRESS: ['INSPECTION', 'WORK_IN_PROGRESS'],
// //   RESOLVED: ['RESOLVED', 'REJECTED']
// // };

// // const DEPARTMENTS = ["ALL", "ROAD", "WATER", "ELECTRICITY", "PWD", "SANITATION", "OTHER"];

// // export default function OfficerPage() {
// //   const router = useRouter();
// //   const [complaints, setComplaints] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(true);
  
// //   const [activeTab, setActiveTab] = useState<TabType>('PENDING');
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [selectedDept, setSelectedDept] = useState("ALL");

// //   async function loadComplaints() {
// //     try {
// //       const token = localStorage.getItem("civic_token");
// //       if (!token) return router.push("/login");

// //       const res = await fetch(`${API}/complaints`, {
// //         headers: { "Authorization": `Bearer ${token}` }
// //       });
// //       if (!res.ok) throw new Error("Failed");
// //       const data = await res.json();
// //       setComplaints(data);
// //     } catch (e) {
// //       console.error(e);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   useEffect(() => { loadComplaints(); }, []);

// //   const pendingCount = complaints.filter(c => STATUS_BUCKETS.PENDING.includes(c.currentStatus)).length;
// //   const progressCount = complaints.filter(c => STATUS_BUCKETS.PROGRESS.includes(c.currentStatus)).length;
// //   const resolvedCount = complaints.filter(c => STATUS_BUCKETS.RESOLVED.includes(c.currentStatus)).length;

// //   const filteredComplaints = complaints
// //     .filter(c => STATUS_BUCKETS[activeTab].includes(c.currentStatus))
// //     .filter(c => {
// //       if (selectedDept !== "ALL") {
// //         const catMatch = c.category?.toUpperCase() === selectedDept;
// //         const deptMatch = c.department?.name?.toUpperCase() === selectedDept;
// //         if (!catMatch && !deptMatch) return false;
// //       }
// //       return true;
// //     })
// //     .filter(c => 
// //       c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
// //       c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //       c.ward?.name?.toLowerCase().includes(searchQuery.toLowerCase())
// //     );

// //   return (
// //     <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">
      
// //       {/* 1. TOP HEADER */}
// //       <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-zinc-800">
// //         <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
// //           <div className="flex items-center gap-3">
// //             <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20 shrink-0">
// //               <LayoutDashboard className="text-white" size={18} />
// //             </div>
// //             <div>
// //               <h1 className="text-lg sm:text-xl font-bold text-white leading-none">Officer Console</h1>
// //               <p className="text-[10px] sm:text-xs text-zinc-500 font-medium mt-1">Zone 1 Operations</p>
// //             </div>
// //           </div>

// //           <div className="flex items-center gap-2 sm:gap-3">
// //             <Link href="/map">
// //               <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-zinc-900 border border-zinc-700 hover:border-blue-500/50 hover:bg-zinc-800 rounded-lg text-xs sm:text-sm font-medium transition text-zinc-300 hover:text-white">
// //                 <Map size={14} className="text-blue-500 sm:w-4 sm:h-4" />
// //                 <span className="hidden sm:inline">Live Map</span>
// //               </button>
// //             </Link>

// //             <button 
// //               onClick={() => {
// //                 localStorage.removeItem("civic_token");
// //                 router.push("/login");
// //               }}
// //               className="p-1.5 sm:p-2 hover:bg-zinc-800 rounded-full text-zinc-500 hover:text-red-400 transition"
// //               title="Log Out"
// //             >
// //               <LogOut size={18} className="sm:w-5 sm:h-5" />
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">

// //         {/* 2. CLASSY METRIC CARDS */}
// //         <section className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
// //           <MetricCard 
// //             label="Pending Action"
// //             count={pendingCount}
// //             icon={AlertCircle}
// //             active={activeTab === 'PENDING'}
// //             onClick={() => setActiveTab('PENDING')}
// //             colorClass="text-red-400"
// //             bgClass="from-red-900/20 to-zinc-900"
// //             borderClass="border-red-900/50"
// //           />
// //           <MetricCard 
// //             label="Work In Progress"
// //             count={progressCount}
// //             icon={Hammer}
// //             active={activeTab === 'PROGRESS'}
// //             onClick={() => setActiveTab('PROGRESS')}
// //             colorClass="text-blue-400"
// //             bgClass="from-blue-900/20 to-zinc-900"
// //             borderClass="border-blue-900/50"
// //           />
// //           <MetricCard 
// //             label="Resolved Jobs"
// //             count={resolvedCount}
// //             icon={CheckCircle2}
// //             active={activeTab === 'RESOLVED'}
// //             onClick={() => setActiveTab('RESOLVED')}
// //             colorClass="text-green-400"
// //             bgClass="from-green-900/20 to-zinc-900"
// //             borderClass="border-green-900/50"
// //           />
// //         </section>

// //         {/* 3. TOOLBAR: SEARCH & DEPARTMENT FILTER */}
// //         <div className="space-y-4">
// //           <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
// //             <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
// //               {activeTab === 'PENDING' && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/>}
// //               {activeTab === 'PROGRESS' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"/>}
// //               {activeTab === 'RESOLVED' && <span className="w-2 h-2 rounded-full bg-green-500"/>}
// //               {activeTab === 'PENDING' ? 'Tasks Awaiting Action' : activeTab === 'PROGRESS' ? 'Active Jobs' : 'Completed History'}
// //             </h2>

// //             <div className="relative group w-full md:w-64">
// //               <Search className="absolute left-3 top-2.5 sm:top-3 text-zinc-600 group-focus-within:text-zinc-400 transition" size={16} />
// //               <input 
// //                 type="text" 
// //                 placeholder="Search ID or Street..." 
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 sm:py-2.5 pl-10 pr-4 text-xs sm:text-sm text-zinc-300 focus:border-zinc-600 focus:outline-none transition"
// //               />
// //             </div>
// //           </div>

// //           {/* DEPARTMENT FILTER PILLS */}
// //           <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
// //             <div className="flex items-center text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mr-1 sm:mr-2 shrink-0">
// //               <Filter size={12} className="mr-1 sm:w-3.5 sm:h-3.5" />
// //               Dept:
// //             </div>
// //             {DEPARTMENTS.map((dept) => (
// //               <button
// //                 key={dept}
// //                 onClick={() => setSelectedDept(dept)}
// //                 className={`
// //                   shrink-0 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold border transition-all
// //                   ${selectedDept === dept 
// //                     ? "bg-white text-black border-white" 
// //                     : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200"}
// //                 `}
// //               >
// //                 {dept}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* 4. THE LIST */}
// //         <section className="space-y-3">
// //           {loading ? (
// //             <div className="text-center py-20 text-zinc-600 text-sm">Loading Dashboard...</div>
// //           ) : filteredComplaints.length === 0 ? (
// //             <div className="text-center py-16 sm:py-20 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30">
// //               <p className="text-zinc-500 text-xs sm:text-sm px-4">No {selectedDept !== 'ALL' ? selectedDept.toLowerCase() : ''} complaints found in this category.</p>
// //             </div>
// //           ) : (
// //             filteredComplaints.map(c => (
// //               <ComplaintRow key={c.id} c={c} tab={activeTab} />
// //             ))
// //           )}
// //         </section>

// //       </div>
// //     </main>
// //   );
// // }

// // // --- SUB-COMPONENTS ---

// // function MetricCard({ label, count, icon: Icon, active, onClick, colorClass, bgClass, borderClass }: any) {
// //   return (
// //     <button 
// //       onClick={onClick}
// //       className={`
// //         relative overflow-hidden text-left p-4 sm:p-6 rounded-2xl border transition-all duration-300 group
// //         ${active ? `bg-gradient-to-br ${bgClass} ${borderClass} scale-[1.02] shadow-xl` : 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900'}
// //       `}
// //     >
// //       <div className="flex justify-between items-start mb-3 sm:mb-4">
// //         <div className={`p-2.5 sm:p-3 rounded-xl bg-black/40 ${active ? colorClass : 'text-zinc-500 group-hover:text-zinc-300'}`}>
// //           <Icon size={20} className="sm:w-6 sm:h-6" />
// //         </div>
// //         <div className={`text-2xl sm:text-3xl font-bold tracking-tight ${active ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
// //           {count}
// //         </div>
// //       </div>
// //       <div className={`text-xs sm:text-sm font-medium uppercase tracking-wider ${active ? 'text-zinc-300' : 'text-zinc-600'}`}>
// //         {label}
// //       </div>
// //       {active && <div className={`absolute bottom-0 left-0 right-0 h-1 ${colorClass.replace('text-', 'bg-')}`} />}
// //     </button>
// //   );
// // }

// // function ComplaintRow({ c, tab }: { c: any, tab: TabType }) {
// //   const isPending = tab === 'PENDING';
// //   const isProgress = tab === 'PROGRESS';
// //   const isResolved = tab === 'RESOLVED';

// //   return (
// //     <Link href={`/officer/resolve/${c.id}`} className="block">
// //       <div className="group relative bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl p-3.5 sm:p-5 transition-all duration-200 flex flex-row items-center justify-between gap-3">
        
// //         {/* Left Info */}
// //         <div className="flex items-center gap-3 sm:gap-5 min-w-0 flex-1">
// //           <div className={`
// //             w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0
// //             ${isPending ? 'bg-red-500/10 text-red-500' : isProgress ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}
// //           `}>
// //              {isPending ? <AlertCircle size={18} className="sm:w-5 sm:h-5" /> : isProgress ? <Hammer size={18} className="sm:w-5 sm:h-5" /> : <CheckCircle2 size={18} className="sm:w-5 sm:h-5" />}
// //           </div>

// //           <div className="space-y-1.5 min-w-0">
// //             <div className="flex items-center gap-2 flex-wrap">
// //                <span className="text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700 uppercase shrink-0">
// //                   {c.category}
// //                </span>
// //                <h3 className="font-semibold text-sm sm:text-base text-zinc-200 group-hover:text-white transition truncate">
// //                  {c.title}
// //                </h3>
// //             </div>
            
// //             {/* Metadata wraps cleanly on small screens */}
// //             <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-xs text-zinc-500">
// //               <span className="flex items-center gap-1 shrink-0">
// //                 <MapPin size={10} className="sm:w-3 sm:h-3" /> {c.ward?.name || "Zone 1"}
// //               </span>
// //               <span className="hidden xs:inline text-zinc-700">•</span>
// //               <span className="font-mono opacity-70 shrink-0">ID: {c.id.slice(0,6)}</span>
// //               <span className="hidden xs:inline text-zinc-700">•</span>
// //               <span className={`font-bold shrink-0 ${
// //                 isPending ? 'text-red-400' : isProgress ? 'text-blue-400' : 'text-green-400'
// //               }`}>
// //                 {c.currentStatus.replace(/_/g, " ")}
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Action Button */}
// //         <div className="flex items-center gap-4 shrink-0">
// //           <div className="text-right hidden md:block">
// //             <div className="text-xs text-zinc-600 font-medium uppercase tracking-wider">Date</div>
// //             <div className="text-xs text-zinc-400">{new Date(c.createdAt).toLocaleDateString()}</div>
// //           </div>
          
// //           <div className={`
// //             px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 transition
// //             ${isPending ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/20' : ''}
// //             ${isProgress ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20' : ''}
// //             ${isResolved ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300' : ''}
// //           `}>
// //             <span className="hidden xs:inline">
// //               {isPending && "Start"}
// //               {isProgress && "Update"}
// //               {isResolved && "View"}
// //             </span>
// //             <ChevronRight size={14} className="sm:w-4 sm:h-4" />
// //           </div>
// //         </div>

// //       </div>
// //     </Link>
// //   );
// // }


// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { 
//   LayoutDashboard, 
//   LogOut, 
//   Search, 
//   Map, 
//   Hammer, 
//   CheckCircle2, 
//   MapPin, 
//   ChevronRight,
//   AlertCircle,
//   Filter,
//   Flame,
//   AlertOctagon,
//   Car,
//   Wind,
//   Coins,
//   ArrowUpDown
// } from "lucide-react";

// const API = process.env.NEXT_PUBLIC_API_BASE!;

// // --- HELPER TYPES & MAPPINGS ---
// type TabType = 'PENDING' | 'PROGRESS' | 'RESOLVED';

// const STATUS_BUCKETS: Record<TabType, string[]> = {
//   PENDING: ['CREATED', 'ACKNOWLEDGED', 'ASSIGNED', 'REOPENED'],
//   PROGRESS: ['INSPECTION', 'WORK_IN_PROGRESS'],
//   RESOLVED: ['RESOLVED', 'REJECTED']
// };

// const DEPARTMENTS = ["ALL", "ROAD", "WATER", "ELECTRICITY", "PWD", "SANITATION", "OTHER"];

// // 🔥 PRIORITY ALGORITHM 🔥
// const calculatePriority = (c: any) => {
//   const nudges = c.nudges?.length || 0;
//   const sigs = c.signals || [];
//   const maxSeverity = sigs.reduce((max: number, s: any) => Math.max(max, s.severity || 1), 1);
//   const hazards = sigs.filter((s: any) => s.type === 'SAFETY_HAZARD').length;
  
//   return (maxSeverity * 10) + (nudges * 5) + (hazards * 2);
// };

// export default function OfficerPage() {
//   const router = useRouter();
//   const [complaints, setComplaints] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
  
//   const [activeTab, setActiveTab] = useState<TabType>('PENDING');
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedDept, setSelectedDept] = useState("ALL");
//   const [sortByPriority, setSortByPriority] = useState(true); // ✅ NEW STATE

//   async function loadComplaints() {
//     try {
//       const token = localStorage.getItem("civic_token");
//       if (!token) return router.push("/login");

//       const res = await fetch(`${API}/complaints`, {
//         headers: { "Authorization": `Bearer ${token}` }
//       });
//       if (!res.ok) throw new Error("Failed");
//       const data = await res.json();
//       setComplaints(data);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => { loadComplaints(); }, []);

//   const pendingCount = complaints.filter(c => STATUS_BUCKETS.PENDING.includes(c.currentStatus)).length;
//   const progressCount = complaints.filter(c => STATUS_BUCKETS.PROGRESS.includes(c.currentStatus)).length;
//   const resolvedCount = complaints.filter(c => STATUS_BUCKETS.RESOLVED.includes(c.currentStatus)).length;

//   // 1. Filter
//   let filteredComplaints = complaints
//     .filter(c => STATUS_BUCKETS[activeTab].includes(c.currentStatus))
//     .filter(c => {
//       if (selectedDept !== "ALL") {
//         const catMatch = c.category?.toUpperCase() === selectedDept;
//         const deptMatch = c.department?.name?.toUpperCase() === selectedDept;
//         if (!catMatch && !deptMatch) return false;
//       }
//       return true;
//     })
//     .filter(c => 
//       c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//       c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       c.ward?.name?.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//   // 2. Sort (Urgency vs Chronological)
//   filteredComplaints.sort((a, b) => {
//     if (sortByPriority) {
//       const scoreA = calculatePriority(a);
//       const scoreB = calculatePriority(b);
//       if (scoreB !== scoreA) return scoreB - scoreA; // Highest priority first
//     }
//     return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); // Newest first
//   });

//   return (
//     <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">
      
//       {/* 1. TOP HEADER */}
//       <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-zinc-800">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20 shrink-0">
//               <LayoutDashboard className="text-white" size={18} />
//             </div>
//             <div>
//               <h1 className="text-lg sm:text-xl font-bold text-white leading-none">Officer Console</h1>
//               <p className="text-[10px] sm:text-xs text-zinc-500 font-medium mt-1">Zone 1 Operations</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-3">
//             <Link href="/map">
//               <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-zinc-900 border border-zinc-700 hover:border-blue-500/50 hover:bg-zinc-800 rounded-lg text-xs sm:text-sm font-medium transition text-zinc-300 hover:text-white">
//                 <Map size={14} className="text-blue-500 sm:w-4 sm:h-4" />
//                 <span className="hidden sm:inline">Live Map</span>
//               </button>
//             </Link>

//             <button 
//               onClick={() => {
//                 localStorage.removeItem("civic_token");
//                 router.push("/login");
//               }}
//               className="p-1.5 sm:p-2 hover:bg-zinc-800 rounded-full text-zinc-500 hover:text-red-400 transition"
//               title="Log Out"
//             >
//               <LogOut size={18} className="sm:w-5 sm:h-5" />
//             </button>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">

//         {/* 2. CLASSY METRIC CARDS */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
//           <MetricCard 
//             label="Pending Action" count={pendingCount} icon={AlertCircle}
//             active={activeTab === 'PENDING'} onClick={() => setActiveTab('PENDING')}
//             colorClass="text-red-400" bgClass="from-red-900/20 to-zinc-900" borderClass="border-red-900/50"
//           />
//           <MetricCard 
//             label="Work In Progress" count={progressCount} icon={Hammer}
//             active={activeTab === 'PROGRESS'} onClick={() => setActiveTab('PROGRESS')}
//             colorClass="text-blue-400" bgClass="from-blue-900/20 to-zinc-900" borderClass="border-blue-900/50"
//           />
//           <MetricCard 
//             label="Resolved Jobs" count={resolvedCount} icon={CheckCircle2}
//             active={activeTab === 'RESOLVED'} onClick={() => setActiveTab('RESOLVED')}
//             colorClass="text-green-400" bgClass="from-green-900/20 to-zinc-900" borderClass="border-green-900/50"
//           />
//         </section>

//         {/* 3. TOOLBAR: SEARCH, DEPT FILTER, & PRIORITY TOGGLE */}
//         <div className="space-y-4">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
//               {activeTab === 'PENDING' && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/>}
//               {activeTab === 'PROGRESS' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"/>}
//               {activeTab === 'RESOLVED' && <span className="w-2 h-2 rounded-full bg-green-500"/>}
//               {activeTab === 'PENDING' ? 'Tasks Awaiting Action' : activeTab === 'PROGRESS' ? 'Active Jobs' : 'Completed History'}
//             </h2>

//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full md:w-auto">
//               {/* ✅ NEW: Priority Sort Toggle */}
//               <button 
//                 onClick={() => setSortByPriority(!sortByPriority)}
//                 className={`flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all shrink-0 ${sortByPriority ? 'bg-orange-500/10 border-orange-500/50 text-orange-400' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white'}`}
//               >
//                 <ArrowUpDown size={14} />
//                 {sortByPriority ? "Sorted by Urgency" : "Sorted by Newest"}
//               </button>

//               <div className="relative group flex-1 md:w-64 shrink-0">
//                 <Search className="absolute left-3 top-2.5 sm:top-3 text-zinc-600 group-focus-within:text-zinc-400 transition" size={16} />
//                 <input 
//                   type="text" placeholder="Search ID or Street..." 
//                   value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 sm:py-2.5 pl-10 pr-4 text-xs sm:text-sm text-zinc-300 focus:border-zinc-600 focus:outline-none transition"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* DEPARTMENT FILTER PILLS */}
//           <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
//             <div className="flex items-center text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mr-1 sm:mr-2 shrink-0">
//               <Filter size={12} className="mr-1 sm:w-3.5 sm:h-3.5" /> Dept:
//             </div>
//             {DEPARTMENTS.map((dept) => (
//               <button
//                 key={dept} onClick={() => setSelectedDept(dept)}
//                 className={`shrink-0 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold border transition-all ${selectedDept === dept ? "bg-white text-black border-white" : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200"}`}
//               >
//                 {dept}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* 4. THE LIST */}
//         <section className="space-y-3 sm:space-y-4">
//           {loading ? (
//             <div className="text-center py-20 text-zinc-600 text-sm">Loading Dashboard...</div>
//           ) : filteredComplaints.length === 0 ? (
//             <div className="text-center py-16 sm:py-20 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30">
//               <p className="text-zinc-500 text-xs sm:text-sm px-4">No {selectedDept !== 'ALL' ? selectedDept.toLowerCase() : ''} complaints found in this category.</p>
//             </div>
//           ) : (
//             filteredComplaints.map(c => (
//               <ComplaintRow key={c.id} c={c} tab={activeTab} />
//             ))
//           )}
//         </section>

//       </div>
//     </main>
//   );
// }

// // --- SUB-COMPONENTS ---

// function MetricCard({ label, count, icon: Icon, active, onClick, colorClass, bgClass, borderClass }: any) {
//   return (
//     <button onClick={onClick} className={`relative overflow-hidden text-left p-4 sm:p-6 rounded-2xl border transition-all duration-300 group ${active ? `bg-gradient-to-br ${bgClass} ${borderClass} scale-[1.02] shadow-xl` : 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900'}`}>
//       <div className="flex justify-between items-start mb-3 sm:mb-4">
//         <div className={`p-2.5 sm:p-3 rounded-xl bg-black/40 ${active ? colorClass : 'text-zinc-500 group-hover:text-zinc-300'}`}>
//           <Icon size={20} className="sm:w-6 sm:h-6" />
//         </div>
//         <div className={`text-2xl sm:text-3xl font-bold tracking-tight ${active ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>{count}</div>
//       </div>
//       <div className={`text-xs sm:text-sm font-medium uppercase tracking-wider ${active ? 'text-zinc-300' : 'text-zinc-600'}`}>{label}</div>
//       {active && <div className={`absolute bottom-0 left-0 right-0 h-1 ${colorClass.replace('text-', 'bg-')}`} />}
//     </button>
//   );
// }

// function ComplaintRow({ c, tab }: { c: any, tab: TabType }) {
//   const isPending = tab === 'PENDING';
//   const isProgress = tab === 'PROGRESS';
//   const isResolved = tab === 'RESOLVED';

//   // Extract Urgency Data
//   const sigs = c.signals || [];
//   const maxSeverity = sigs.reduce((max: number, s: any) => Math.max(max, s.severity || 1), 1);
//   const nudges = c.nudges?.length || 0;
  
//   // Specific Civic Flags
//   const hazardCount = sigs.filter((s: any) => s.type === 'SAFETY_HAZARD').length;
//   const trafficCount = sigs.filter((s: any) => s.type === 'TRAFFIC_BLOCKER').length;
//   const smellCount = sigs.filter((s: any) => s.type === 'BAD_SMELL').length;

//   const priorityScore = calculatePriority(c);
//   // It's considered an emergency if priority is very high, or max severity is 3 (Danger), or it has a lot of nudges
//   const isUrgent = !isResolved && (priorityScore >= 30 || maxSeverity === 3 || nudges >= 5);

//   return (
//     <Link href={`/officer/resolve/${c.id}`} className="block">
//       <div className={`
//         group relative rounded-xl p-3.5 sm:p-5 transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4
//         border overflow-hidden
//         ${isUrgent 
//           ? 'bg-gradient-to-r from-red-500/10 to-zinc-900/80 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.15)]' 
//           : 'bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900'}
//       `}>
        
//         {/* Urgent Glow Indicator */}
//         {isUrgent && <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />}

//         {/* Left Info */}
//         <div className="flex flex-row items-start md:items-center gap-3 sm:gap-5 min-w-0 flex-1 pl-1">
//           <div className={`
//             w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 mt-1 md:mt-0
//             ${isUrgent ? 'bg-red-500/20 text-red-500 ring-2 ring-red-500/50' : isPending ? 'bg-red-500/10 text-red-500' : isProgress ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}
//           `}>
//              {isUrgent ? <Flame size={20} className="sm:w-6 sm:h-6 animate-pulse" /> : isPending ? <AlertCircle size={18} className="sm:w-5 sm:h-5" /> : isProgress ? <Hammer size={18} className="sm:w-5 sm:h-5" /> : <CheckCircle2 size={18} className="sm:w-5 sm:h-5" />}
//           </div>

//           <div className="space-y-2 min-w-0 flex-1">
//             <div className="flex items-center gap-2 flex-wrap pr-4 md:pr-0">
//                <span className={`text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded uppercase shrink-0 border ${isUrgent ? 'bg-red-950 text-red-400 border-red-800' : 'bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
//                   {c.category}
//                </span>
//                <h3 className={`font-semibold text-sm sm:text-base transition truncate ${isUrgent ? 'text-white' : 'text-zinc-200 group-hover:text-white'}`}>
//                  {c.title}
//                </h3>
//             </div>
            
//             {/* Metadata Line */}
//             <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-xs text-zinc-500">
//               <span className="flex items-center gap-1 shrink-0">
//                 <MapPin size={10} className="sm:w-3 sm:h-3" /> {c.ward?.name || "Zone 1"}
//               </span>
//               <span className="hidden xs:inline text-zinc-700">•</span>
//               <span className="font-mono opacity-70 shrink-0">ID: {c.id.slice(0,6)}</span>
//               <span className="hidden xs:inline text-zinc-700">•</span>
//               <span className={`font-bold shrink-0 ${isPending ? 'text-red-400' : isProgress ? 'text-blue-400' : 'text-green-400'}`}>
//                 {c.currentStatus.replace(/_/g, " ")}
//               </span>
//             </div>

//             {/* 🔥 CIVIC CONTEXT BADGES (New!) 🔥 */}
//             {(!isResolved && (nudges > 0 || hazardCount > 0 || trafficCount > 0 || smellCount > 0)) && (
//               <div className="flex flex-wrap items-center gap-1.5 pt-1">
//                 {nudges > 0 && (
//                   <span className="inline-flex items-center gap-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
//                     <Flame size={10} /> {nudges} Nudge{nudges !== 1 && 's'}
//                   </span>
//                 )}
//                 {hazardCount > 0 && (
//                   <span className="inline-flex items-center gap-1 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
//                     <AlertOctagon size={10} /> Hazard Reported
//                   </span>
//                 )}
//                 {trafficCount > 0 && (
//                   <span className="inline-flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
//                     <Car size={10} /> Blocks Traffic
//                   </span>
//                 )}
//                 {smellCount > 0 && (
//                   <span className="inline-flex items-center gap-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
//                     <Wind size={10} /> Health/Smell
//                   </span>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Action Button */}
//         <div className="flex items-center justify-between w-full md:w-auto gap-4 shrink-0 mt-2 md:mt-0 pt-2 md:pt-0 border-t border-zinc-800/50 md:border-none">
//           <div className="text-left md:text-right">
//             <div className="text-[10px] sm:text-xs text-zinc-600 font-medium uppercase tracking-wider">Date</div>
//             <div className={`text-xs sm:text-sm font-medium ${isUrgent ? 'text-zinc-300' : 'text-zinc-400'}`}>{new Date(c.createdAt).toLocaleDateString()}</div>
//           </div>
          
//           <div className={`
//             px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 transition
//             ${isUrgent ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/30' : 
//               isPending ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 
//               isProgress ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20' : 
//               'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'}
//           `}>
//             <span>
//               {isPending ? "Review" : isProgress ? "Update" : "View"}
//             </span>
//             <ChevronRight size={14} className="sm:w-4 sm:h-4" />
//           </div>
//         </div>

//       </div>
//     </Link>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  LogOut, 
  Search, 
  Map as MapIcon, 
  Hammer, 
  CheckCircle2, 
  MapPin, 
  ChevronRight,
  AlertCircle,
  Filter,
  Flame,
  AlertOctagon,
  Car,
  Wind,
  Navigation,
  Clock // ✅ Added Clock for the Newest sort icon
} from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_BASE!;

// --- HELPER TYPES & MAPPINGS ---
type TabType = 'PENDING' | 'PROGRESS' | 'RESOLVED';
type SortMode = 'URGENCY' | 'DISTANCE' | 'NEWEST'; // ✅ NEW: 3-way sort type

const STATUS_BUCKETS: Record<TabType, string[]> = {
  PENDING: ['CREATED', 'ACKNOWLEDGED', 'ASSIGNED', 'REOPENED'],
  PROGRESS: ['INSPECTION', 'WORK_IN_PROGRESS'],
  RESOLVED: ['RESOLVED', 'REJECTED']
};

const DEPARTMENTS = ["ALL", "ROAD", "WATER", "ELECTRICITY", "PWD", "SANITATION", "OTHER"];

// 🔥 PRIORITY ALGORITHM 🔥
const calculatePriority = (c: any) => {
  const nudges = c.nudges?.length || 0;
  const sigs = c.signals || [];
  const maxSeverity = sigs.reduce((max: number, s: any) => Math.max(max, s.severity || 1), 1);
  const hazards = sigs.filter((s: any) => s.type === 'SAFETY_HAZARD').length;
  
  return (maxSeverity * 10) + (nudges * 5) + (hazards * 2);
};

// 🔥 DISTANCE CALCULATOR 🔥
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function OfficerPage() {
  const router = useRouter();
  const [complaints, setComplaints] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [activeTab, setActiveTab] = useState<TabType>('PENDING');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("ALL");
  
  // ✅ NEW: Replaced boolean toggle with a 3-way mode
  const [sortMode, setSortMode] = useState<SortMode>('URGENCY'); 

  const [officerLoc, setOfficerLoc] = useState<{lat: number, lng: number} | null>(null);

  async function loadComplaints() {
    try {
      const token = localStorage.getItem("civic_token");
      if (!token) return router.push("/login");

      const res = await fetch(`${API}/complaints`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setComplaints(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { 
    loadComplaints(); 

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setOfficerLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => console.warn("Silent GPS lock failed for dashboard", err),
        { timeout: 10000, maximumAge: 60000 }
      );
    }
  }, []);

  const pendingCount = complaints.filter(c => STATUS_BUCKETS.PENDING.includes(c.currentStatus)).length;
  const progressCount = complaints.filter(c => STATUS_BUCKETS.PROGRESS.includes(c.currentStatus)).length;
  const resolvedCount = complaints.filter(c => STATUS_BUCKETS.RESOLVED.includes(c.currentStatus)).length;

  // 1. Filter
  let filteredComplaints = complaints
    .filter(c => STATUS_BUCKETS[activeTab].includes(c.currentStatus))
    .filter(c => {
      if (selectedDept !== "ALL") {
        const catMatch = c.category?.toUpperCase() === selectedDept;
        const deptMatch = c.department?.name?.toUpperCase() === selectedDept;
        if (!catMatch && !deptMatch) return false;
      }
      return true;
    })
    .filter(c => 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.ward?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // 2. 🔥 UPGRADED: 3-Way Sort (Urgency vs Distance vs Chronological)
  filteredComplaints.sort((a, b) => {
    if (sortMode === 'URGENCY') {
      const scoreA = calculatePriority(a);
      const scoreB = calculatePriority(b);
      if (scoreB !== scoreA) return scoreB - scoreA; // Highest priority first
    } 
    else if (sortMode === 'DISTANCE') {
      // If we don't have coordinates, treat distance as Infinity (pushes to bottom)
      const distA = (officerLoc && a.lat && a.lng) ? calculateDistance(officerLoc.lat, officerLoc.lng, a.lat, a.lng) : Infinity;
      const distB = (officerLoc && b.lat && b.lng) ? calculateDistance(officerLoc.lat, officerLoc.lng, b.lat, b.lng) : Infinity;
      if (distA !== distB) return distA - distB; // Closest first
    }
    
    // Fallback for ties, or if sortMode is 'NEWEST'
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); 
  });

  // Cycle through the sort modes
  const handleSortToggle = () => {
    if (sortMode === 'URGENCY') setSortMode('DISTANCE');
    else if (sortMode === 'DISTANCE') setSortMode('NEWEST');
    else setSortMode('URGENCY');
  };

  return (
    <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">
      
      {/* 1. TOP HEADER */}
      <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20 shrink-0">
              <LayoutDashboard className="text-white" size={18} />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white leading-none">Officer Console</h1>
              <p className="text-[10px] sm:text-xs text-zinc-500 font-medium mt-1">Zone 1 Operations</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/map">
              <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-zinc-900 border border-zinc-700 hover:border-blue-500/50 hover:bg-zinc-800 rounded-lg text-xs sm:text-sm font-medium transition text-zinc-300 hover:text-white">
                <MapIcon size={14} className="text-blue-500 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Live Map</span>
              </button>
            </Link>

            <button 
              onClick={() => {
                localStorage.removeItem("civic_token");
                router.push("/login");
              }}
              className="p-1.5 sm:p-2 hover:bg-zinc-800 rounded-full text-zinc-500 hover:text-red-400 transition"
              title="Log Out"
            >
              <LogOut size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">

        {/* 2. CLASSY METRIC CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <MetricCard 
            label="Pending Action" count={pendingCount} icon={AlertCircle}
            active={activeTab === 'PENDING'} onClick={() => setActiveTab('PENDING')}
            colorClass="text-red-400" bgClass="from-red-900/20 to-zinc-900" borderClass="border-red-900/50"
          />
          <MetricCard 
            label="Work In Progress" count={progressCount} icon={Hammer}
            active={activeTab === 'PROGRESS'} onClick={() => setActiveTab('PROGRESS')}
            colorClass="text-blue-400" bgClass="from-blue-900/20 to-zinc-900" borderClass="border-blue-900/50"
          />
          <MetricCard 
            label="Resolved Jobs" count={resolvedCount} icon={CheckCircle2}
            active={activeTab === 'RESOLVED'} onClick={() => setActiveTab('RESOLVED')}
            colorClass="text-green-400" bgClass="from-green-900/20 to-zinc-900" borderClass="border-green-900/50"
          />
        </section>

        {/* 3. TOOLBAR: SEARCH, DEPT FILTER, & PRIORITY TOGGLE */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              {activeTab === 'PENDING' && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/>}
              {activeTab === 'PROGRESS' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"/>}
              {activeTab === 'RESOLVED' && <span className="w-2 h-2 rounded-full bg-green-500"/>}
              {activeTab === 'PENDING' ? 'Tasks Awaiting Action' : activeTab === 'PROGRESS' ? 'Active Jobs' : 'Completed History'}
            </h2>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full md:w-auto">
              
              {/* 🔥 NEW: 3-Way Sort Button 🔥 */}
              <button 
                onClick={handleSortToggle}
                className={`flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all shrink-0 
                  ${sortMode === 'URGENCY' ? 'bg-orange-500/10 border-orange-500/50 text-orange-400' : 
                    sortMode === 'DISTANCE' ? 'bg-blue-500/10 border-blue-500/50 text-blue-400' : 
                    'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white'}`}
              >
                {sortMode === 'URGENCY' && <Flame size={14} />}
                {sortMode === 'DISTANCE' && <Navigation size={14} />}
                {sortMode === 'NEWEST' && <Clock size={14} />}
                Sort: {sortMode === 'URGENCY' ? 'Urgency' : sortMode === 'DISTANCE' ? 'Distance' : 'Newest'}
              </button>

              <div className="relative group flex-1 md:w-64 shrink-0">
                <Search className="absolute left-3 top-2.5 sm:top-3 text-zinc-600 group-focus-within:text-zinc-400 transition" size={16} />
                <input 
                  type="text" placeholder="Search ID or Street..." 
                  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 sm:py-2.5 pl-10 pr-4 text-xs sm:text-sm text-zinc-300 focus:border-zinc-600 focus:outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* DEPARTMENT FILTER PILLS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <div className="flex items-center text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mr-1 sm:mr-2 shrink-0">
              <Filter size={12} className="mr-1 sm:w-3.5 sm:h-3.5" /> Dept:
            </div>
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept} onClick={() => setSelectedDept(dept)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold border transition-all ${selectedDept === dept ? "bg-white text-black border-white" : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200"}`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* 4. THE LIST */}
        <section className="space-y-3 sm:space-y-4">
          {loading ? (
            <div className="text-center py-20 text-zinc-600 text-sm">Loading Dashboard...</div>
          ) : filteredComplaints.length === 0 ? (
            <div className="text-center py-16 sm:py-20 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30">
              <p className="text-zinc-500 text-xs sm:text-sm px-4">No {selectedDept !== 'ALL' ? selectedDept.toLowerCase() : ''} complaints found in this category.</p>
            </div>
          ) : (
            filteredComplaints.map(c => (
              <ComplaintRow key={c.id} c={c} tab={activeTab} officerLoc={officerLoc} />
            ))
          )}
        </section>

      </div>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function MetricCard({ label, count, icon: Icon, active, onClick, colorClass, bgClass, borderClass }: any) {
  return (
    <button onClick={onClick} className={`relative overflow-hidden text-left p-4 sm:p-6 rounded-2xl border transition-all duration-300 group ${active ? `bg-gradient-to-br ${bgClass} ${borderClass} scale-[1.02] shadow-xl` : 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900'}`}>
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <div className={`p-2.5 sm:p-3 rounded-xl bg-black/40 ${active ? colorClass : 'text-zinc-500 group-hover:text-zinc-300'}`}>
          <Icon size={20} className="sm:w-6 sm:h-6" />
        </div>
        <div className={`text-2xl sm:text-3xl font-bold tracking-tight ${active ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>{count}</div>
      </div>
      <div className={`text-xs sm:text-sm font-medium uppercase tracking-wider ${active ? 'text-zinc-300' : 'text-zinc-600'}`}>{label}</div>
      {active && <div className={`absolute bottom-0 left-0 right-0 h-1 ${colorClass.replace('text-', 'bg-')}`} />}
    </button>
  );
}

function ComplaintRow({ c, tab, officerLoc }: { c: any, tab: TabType, officerLoc: {lat: number, lng: number} | null }) {
  const isPending = tab === 'PENDING';
  const isProgress = tab === 'PROGRESS';
  const isResolved = tab === 'RESOLVED';

  // Extract Urgency Data
  const sigs = c.signals || [];
  const maxSeverity = sigs.reduce((max: number, s: any) => Math.max(max, s.severity || 1), 1);
  const nudges = c.nudges?.length || 0;
  
  // Specific Civic Flags
  const hazardCount = sigs.filter((s: any) => s.type === 'SAFETY_HAZARD').length;
  const trafficCount = sigs.filter((s: any) => s.type === 'TRAFFIC_BLOCKER').length;
  const smellCount = sigs.filter((s: any) => s.type === 'BAD_SMELL').length;

  const priorityScore = calculatePriority(c);
  // It's considered an emergency if priority is very high, or max severity is 3 (Danger), or it has a lot of nudges
  const isUrgent = !isResolved && (priorityScore >= 30 || maxSeverity === 3 || nudges >= 5);

  // DISTANCE CALCULATION FOR ROW
  const distanceKm = (officerLoc && c.lat && c.lng) ? calculateDistance(officerLoc.lat, officerLoc.lng, c.lat, c.lng) : null;
  const distanceText = distanceKm !== null ? (distanceKm < 1 ? `${Math.round(distanceKm * 1000)}m away` : `${distanceKm.toFixed(1)}km away`) : null;

  return (
    <Link href={`/officer/resolve/${c.id}`} className="block">
      <div className={`
        group relative rounded-xl p-3.5 sm:p-5 transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4
        border overflow-hidden
        ${isUrgent 
          ? 'bg-gradient-to-r from-red-500/10 to-zinc-900/80 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.15)]' 
          : 'bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900'}
      `}>
        
        {/* Urgent Glow Indicator */}
        {isUrgent && <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />}

        {/* Left Info */}
        <div className="flex flex-row items-start md:items-center gap-3 sm:gap-5 min-w-0 flex-1 pl-1">
          <div className={`
            w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 mt-1 md:mt-0
            ${isUrgent ? 'bg-red-500/20 text-red-500 ring-2 ring-red-500/50' : isPending ? 'bg-red-500/10 text-red-500' : isProgress ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'}
          `}>
             {isUrgent ? <Flame size={20} className="sm:w-6 sm:h-6 animate-pulse" /> : isPending ? <AlertCircle size={18} className="sm:w-5 sm:h-5" /> : isProgress ? <Hammer size={18} className="sm:w-5 sm:h-5" /> : <CheckCircle2 size={18} className="sm:w-5 sm:h-5" />}
          </div>

          <div className="space-y-2 min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap pr-4 md:pr-0">
               <span className={`text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded uppercase shrink-0 border ${isUrgent ? 'bg-red-950 text-red-400 border-red-800' : 'bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                  {c.category}
               </span>
               <h3 className={`font-semibold text-sm sm:text-base transition truncate ${isUrgent ? 'text-white' : 'text-zinc-200 group-hover:text-white'}`}>
                 {c.title}
               </h3>
            </div>
            
            {/* Metadata Line */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-xs text-zinc-500">
              <span className="flex items-center gap-1 shrink-0">
                <MapPin size={10} className="sm:w-3 sm:h-3" /> {c.ward?.name || "Zone 1"}
              </span>
              
              {/* LIVE DISTANCE TAG */}
              {distanceText && (
                <>
                  <span className="hidden xs:inline text-zinc-700">•</span>
                  <span className="flex items-center gap-1 shrink-0 text-blue-400 font-bold bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                    <Navigation size={10} className="sm:w-3 sm:h-3" /> {distanceText}
                  </span>
                </>
              )}

              <span className="hidden xs:inline text-zinc-700">•</span>
              <span className="font-mono opacity-70 shrink-0">ID: {c.id.slice(0,6)}</span>
              <span className="hidden xs:inline text-zinc-700">•</span>
              <span className={`font-bold shrink-0 ${isPending ? 'text-red-400' : isProgress ? 'text-blue-400' : 'text-green-400'}`}>
                {c.currentStatus.replace(/_/g, " ")}
              </span>
            </div>

            {/* Context Badges */}
            {(!isResolved && (nudges > 0 || hazardCount > 0 || trafficCount > 0 || smellCount > 0)) && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {nudges > 0 && (
                  <span className="inline-flex items-center gap-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    <Flame size={10} /> {nudges} Nudge{nudges !== 1 && 's'}
                  </span>
                )}
                {hazardCount > 0 && (
                  <span className="inline-flex items-center gap-1 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    <AlertOctagon size={10} /> Hazard Reported
                  </span>
                )}
                {trafficCount > 0 && (
                  <span className="inline-flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    <Car size={10} /> Blocks Traffic
                  </span>
                )}
                {smellCount > 0 && (
                  <span className="inline-flex items-center gap-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    <Wind size={10} /> Health/Smell
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Action Button */}
        <div className="flex items-center justify-between w-full md:w-auto gap-4 shrink-0 mt-2 md:mt-0 pt-2 md:pt-0 border-t border-zinc-800/50 md:border-none">
          <div className="text-left md:text-right">
            <div className="text-[10px] sm:text-xs text-zinc-600 font-medium uppercase tracking-wider">Date</div>
            <div className={`text-xs sm:text-sm font-medium ${isUrgent ? 'text-zinc-300' : 'text-zinc-400'}`}>{new Date(c.createdAt).toLocaleDateString()}</div>
          </div>
          
          <div className={`
            px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 transition
            ${isUrgent ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/30' : 
              isPending ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 
              isProgress ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20' : 
              'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'}
          `}>
            <span>
              {isPending ? "Review" : isProgress ? "Update" : "View"}
            </span>
            <ChevronRight size={14} className="sm:w-4 sm:h-4" />
          </div>
        </div>

      </div>
    </Link>
  );
}