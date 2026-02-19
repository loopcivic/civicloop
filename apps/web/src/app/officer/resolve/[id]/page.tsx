// // // // // // "use client";

// // // // // // import { useEffect, useState } from "react";
// // // // // // import { useParams, useRouter } from "next/navigation";
// // // // // // import Link from "next/link";

// // // // // // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // // // // export default function OfficerWorkPage() {
// // // // // //   const { id } = useParams();
// // // // // //   const router = useRouter();
// // // // // //   const [c, setComplaint] = useState<any>(null);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   // Form States
// // // // // //   const [note, setNote] = useState("");
// // // // // //   const [file, setFile] = useState<File | null>(null);
// // // // // //   const [submitting, setSubmitting] = useState(false);

// // // // // //   // Load Data
// // // // // //   useEffect(() => {
// // // // // //     const token = localStorage.getItem("civic_token");
// // // // // //     if (!token) {
// // // // // //         router.push("/login");
// // // // // //         return;
// // // // // //     }

// // // // // //     fetch(`${API}/complaints/${id}`, {
// // // // // //       headers: { Authorization: `Bearer ${token}` }
// // // // // //     })
// // // // // //     .then(res => {
// // // // // //         if (!res.ok) throw new Error("Failed to load");
// // // // // //         return res.json();
// // // // // //     })
// // // // // //     .then(data => {
// // // // // //       setComplaint(data);
// // // // // //       setLoading(false);
// // // // // //     })
// // // // // //     .catch(err => {
// // // // // //         alert("Failed to load ticket details.");
// // // // // //         router.push("/officer");
// // // // // //     });
// // // // // //   }, [id, router]);

// // // // // //   // Helper: File to Base64
// // // // // //   function fileToBase64(file: File): Promise<string> {
// // // // // //     return new Promise((resolve, reject) => {
// // // // // //       const reader = new FileReader();
// // // // // //       reader.onload = () => resolve(String(reader.result));
// // // // // //       reader.onerror = reject;
// // // // // //       reader.readAsDataURL(file);
// // // // // //     });
// // // // // //   }

// // // // // //   // Helper: Post Action
// // // // // //   async function postAction(url: string, body: any) {
// // // // // //     const token = localStorage.getItem("civic_token");
// // // // // //     const res = await fetch(`${API}${url}`, {
// // // // // //       method: "POST",
// // // // // //       headers: { 
// // // // // //         "Content-Type": "application/json",
// // // // // //         "Authorization": `Bearer ${token}` 
// // // // // //       },
// // // // // //       body: JSON.stringify(body),
// // // // // //     });
// // // // // //     if (!res.ok) {
// // // // // //       const err = await res.json();
// // // // // //       throw new Error(err.message || "Request failed");
// // // // // //     }
// // // // // //     return res.json();
// // // // // //   }

// // // // // //   // --- ACTIONS ---

// // // // // //   async function startInspection() {
// // // // // //     setSubmitting(true);
// // // // // //     try {
// // // // // //       // ✅ CRITICAL FIX: Using 'WORK_IN_PROGRESS' strictly as per DB enum
// // // // // //       await postAction(`/complaints/${id}/advance`, { 
// // // // // //         nextStatus: "WORK_IN_PROGRESS", 
// // // // // //         note: "Officer arrived on site. Inspection started." 
// // // // // //       });
// // // // // //       alert("🚧 Inspection Started");
// // // // // //       window.location.reload(); // Reload to show the resolution form
// // // // // //     } catch (e: any) {
// // // // // //       alert("Error: " + e.message);
// // // // // //     } finally {
// // // // // //       setSubmitting(false);
// // // // // //     }
// // // // // //   }

// // // // // //   async function resolveJob() {
// // // // // //     if (!file) return alert("📸 Proof photo is required!");
// // // // // //     setSubmitting(true);
// // // // // //     try {
// // // // // //       // Get GPS
// // // // // //       const pos: any = await new Promise((resolve, reject) => {
// // // // // //         navigator.geolocation.getCurrentPosition(resolve, reject);
// // // // // //       });

// // // // // //       const fullBase64 = await fileToBase64(file);
// // // // // //       const mediaBase64 = fullBase64.split(",")[1];

// // // // // //       await postAction(`/complaints/${id}/resolve`, {
// // // // // //         lat: pos.coords.latitude,
// // // // // //         lng: pos.coords.longitude,
// // // // // //         mediaBase64,
// // // // // //         note: note || "Resolved via Officer Console",
// // // // // //       });

// // // // // //       alert("🎉 Job Closed Successfully!");
// // // // // //       router.push("/officer");
// // // // // //     } catch (e: any) {
// // // // // //       alert("Error: " + e.message);
// // // // // //     } finally {
// // // // // //       setSubmitting(false);
// // // // // //     }
// // // // // //   }

// // // // // //   if (loading) return <div className="min-h-screen bg-black text-white p-10">Loading Ticket Details...</div>;
// // // // // //   if (!c) return <div className="min-h-screen bg-black text-white p-10">Ticket not found.</div>;

// // // // // //   return (
// // // // // //     <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">

// // // // // //       {/* Top Bar */}
// // // // // //       <div className="bg-zinc-900 border-b border-zinc-800 p-4 flex items-center gap-4 sticky top-0 z-10">
// // // // // //         <Link href="/officer" className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400">
// // // // // //           &larr; Back
// // // // // //         </Link>
// // // // // //         <div>
// // // // // //           <h1 className="text-white font-bold text-lg leading-tight">{c.title}</h1>
// // // // // //           <div className="text-xs text-zinc-500 uppercase tracking-wide font-semibold">
// // // // // //             {c.ward?.name || "Unknown Ward"} • {c.category}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="ml-auto">
// // // // // //              <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
// // // // // //                 c.currentStatus === 'WORK_IN_PROGRESS' ? 'bg-purple-900/30 text-purple-400 border-purple-800' :
// // // // // //                 c.currentStatus === 'RESOLVED' ? 'bg-green-900/30 text-green-400 border-green-800' :
// // // // // //                 'bg-yellow-900/30 text-yellow-400 border-yellow-800'
// // // // // //              }`}>
// // // // // //                 {c.currentStatus.replace(/_/g, " ")}
// // // // // //              </span>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div className="max-w-2xl mx-auto p-6 space-y-8">

// // // // // //         {/* 1. Complaint Details */}
// // // // // //         <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg">
// // // // // //           <h2 className="text-zinc-500 text-xs font-bold uppercase mb-4">Ticket Details</h2>
// // // // // //           <p className="text-white text-lg mb-4">{c.description}</p>

// // // // // //           <div className="grid grid-cols-2 gap-4 text-sm">
// // // // // //              <div className="bg-black p-3 rounded-lg border border-zinc-800">
// // // // // //                 <div className="text-zinc-500 text-xs">Reported Date</div>
// // // // // //                 <div className="text-zinc-300">{new Date(c.createdAt).toLocaleString()}</div>
// // // // // //              </div>
// // // // // //              <div className="bg-black p-3 rounded-lg border border-zinc-800">
// // // // // //                 <div className="text-zinc-500 text-xs">Location</div>
// // // // // //                 <div className="text-zinc-300">{c.locationText || "GPS Pin Only"}</div>
// // // // // //              </div>
// // // // // //           </div>
// // // // // //         </section>

// // // // // //         {/* 2. THE ACTION ZONE */}
// // // // // //         <section>
// // // // // //           {/* STEP 1: If Status is ACKNOWLEDGED -> Show Start Button */}
// // // // // //           {c.currentStatus === 'ACKNOWLEDGED' && (
// // // // // //             <div className="bg-yellow-950/20 border border-yellow-900/50 p-8 rounded-xl text-center space-y-4">
// // // // // //                <div className="text-4xl">🚧</div>
// // // // // //                <h3 className="text-xl font-bold text-yellow-200">Ready to Start?</h3>
// // // // // //                <p className="text-yellow-200/60 max-w-xs mx-auto">
// // // // // //                  Click below when you have arrived at the location and are beginning the inspection.
// // // // // //                </p>
// // // // // //                <button 
// // // // // //                   onClick={startInspection}
// // // // // //                   disabled={submitting}
// // // // // //                   className="w-full py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl shadow-lg shadow-yellow-900/20 transition disabled:opacity-50"
// // // // // //                >
// // // // // //                   {submitting ? "Updating Status..." : "START FIELD INSPECTION"}
// // // // // //                </button>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {/* STEP 2: If Status is WORK_IN_PROGRESS or REOPENED -> Show Resolution Form */}
// // // // // //           {(c.currentStatus === 'WORK_IN_PROGRESS' || c.currentStatus === 'REOPENED') && (
// // // // // //             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-6">
// // // // // //                <div className="flex items-center gap-3 text-purple-400 mb-2">
// // // // // //                   <span className="relative flex h-3 w-3">
// // // // // //                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
// // // // // //                     <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
// // // // // //                   </span>
// // // // // //                   <span className="font-bold uppercase tracking-wider text-xs">Work In Progress</span>
// // // // // //                </div>

// // // // // //                <div>
// // // // // //                  <label className="block text-sm font-medium text-zinc-400 mb-2">Resolution Notes</label>
// // // // // //                  <textarea 
// // // // // //                     value={note}
// // // // // //                     onChange={e => setNote(e.target.value)}
// // // // // //                     placeholder="Describe what you fixed (e.g. 'Filled pothole with 20kg asphalt')..."
// // // // // //                     className="w-full h-32 bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-green-500 outline-none"
// // // // // //                  />
// // // // // //                </div>

// // // // // //                <div>
// // // // // //                  <label className="block text-sm font-medium text-zinc-400 mb-2">Proof of Work (Required)</label>
// // // // // //                  <div className="relative group cursor-pointer">
// // // // // //                     <input 
// // // // // //                       type="file" 
// // // // // //                       accept="image/*"
// // // // // //                       onChange={e => setFile(e.target.files?.[0] || null)}
// // // // // //                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
// // // // // //                     />
// // // // // //                     <div className={`border-2 border-dashed rounded-xl p-8 text-center transition ${file ? 'border-green-500 bg-green-900/10' : 'border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800'}`}>
// // // // // //                        {file ? (
// // // // // //                           <div className="text-green-400 font-medium">✅ {file.name} ready to upload</div>
// // // // // //                        ) : (
// // // // // //                           <div className="text-zinc-500">
// // // // // //                              <span className="text-2xl block mb-2">📸</span>
// // // // // //                              Tap to take photo
// // // // // //                           </div>
// // // // // //                        )}
// // // // // //                     </div>
// // // // // //                  </div>
// // // // // //                </div>

// // // // // //                <button 
// // // // // //                   onClick={resolveJob}
// // // // // //                   disabled={submitting}
// // // // // //                   className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg shadow-green-900/20 transition disabled:opacity-50"
// // // // // //                >
// // // // // //                   {submitting ? "Uploading Proof..." : "COMPLETE JOB & CLOSE TICKET"}
// // // // // //                </button>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {/* STEP 3: If Status is RESOLVED -> Show Success Message */}
// // // // // //           {c.currentStatus === 'RESOLVED' && (
// // // // // //              <div className="p-10 text-center border border-zinc-800 rounded-xl bg-zinc-900 text-zinc-500">
// // // // // //                 ✅ This ticket is closed. Great work!
// // // // // //              </div>
// // // // // //           )}
// // // // // //         </section>

// // // // // //       </div>
// // // // // //     </main>
// // // // // //   );
// // // // // // }

// // // // // "use client";

// // // // // import { useEffect, useState } from "react";
// // // // // import { useParams, useRouter } from "next/navigation";
// // // // // import Link from "next/link";

// // // // // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // // // export default function OfficerWorkPage() {
// // // // //   const { id } = useParams();
// // // // //   const router = useRouter();
// // // // //   const [c, setComplaint] = useState<any>(null);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   // Form States
// // // // //   const [note, setNote] = useState("");
// // // // //   const [file, setFile] = useState<File | null>(null);
// // // // //   const [submitting, setSubmitting] = useState(false);

// // // // //   // Load Data
// // // // //   useEffect(() => {
// // // // //     const token = localStorage.getItem("civic_token");
// // // // //     if (!token) {
// // // // //         router.push("/login");
// // // // //         return;
// // // // //     }

// // // // //     fetch(`${API}/complaints/${id}`, {
// // // // //       headers: { Authorization: `Bearer ${token}` }
// // // // //     })
// // // // //     .then(res => {
// // // // //         if (!res.ok) throw new Error("Failed to load");
// // // // //         return res.json();
// // // // //     })
// // // // //     .then(data => {
// // // // //       setComplaint(data);
// // // // //       setLoading(false);
// // // // //     })
// // // // //     .catch(err => {
// // // // //         // console.error(err); // optional logging
// // // // //         alert("Failed to load ticket details.");
// // // // //         router.push("/officer");
// // // // //     });
// // // // //   }, [id, router]);

// // // // //   // Helper: File to Base64
// // // // //   function fileToBase64(file: File): Promise<string> {
// // // // //     return new Promise((resolve, reject) => {
// // // // //       const reader = new FileReader();
// // // // //       reader.onload = () => resolve(String(reader.result));
// // // // //       reader.onerror = reject;
// // // // //       reader.readAsDataURL(file);
// // // // //     });
// // // // //   }

// // // // //   // Helper: Post Action
// // // // //   async function postAction(url: string, body: any) {
// // // // //     const token = localStorage.getItem("civic_token");
// // // // //     const res = await fetch(`${API}${url}`, {
// // // // //       method: "POST",
// // // // //       headers: { 
// // // // //         "Content-Type": "application/json",
// // // // //         "Authorization": `Bearer ${token}` 
// // // // //       },
// // // // //       body: JSON.stringify(body),
// // // // //     });
// // // // //     if (!res.ok) {
// // // // //       const err = await res.json();
// // // // //       throw new Error(err.message || "Request failed");
// // // // //     }
// // // // //     return res.json();
// // // // //   }

// // // // //   // --- ACTIONS ---

// // // // //   // ✅ NEW: Generic Handler for Strict Stages (Inspection, Work Started)
// // // // //   async function advanceStage(targetStatus: string, label: string) {
// // // // //     if (!confirm(`Are you ready to ${label}?`)) return;
// // // // //     setSubmitting(true);
// // // // //     try {
// // // // //       await postAction(`/complaints/${id}/advance`, { 
// // // // //         nextStatus: targetStatus, 
// // // // //         note: `Officer advanced stage to ${targetStatus}` 
// // // // //       });
// // // // //       // Reload to show the next UI state
// // // // //       window.location.reload(); 
// // // // //     } catch (e: any) {
// // // // //       alert("Error: " + e.message);
// // // // //     } finally {
// // // // //       setSubmitting(false);
// // // // //     }
// // // // //   }

// // // // //   // ✅ EXISTING: Final Resolution with Photo & GPS
// // // // //   async function resolveJob() {
// // // // //     if (!file) return alert("📸 Proof photo is required!");
// // // // //     setSubmitting(true);
// // // // //     try {
// // // // //       // Get GPS
// // // // //       const pos: any = await new Promise((resolve, reject) => {
// // // // //         navigator.geolocation.getCurrentPosition(resolve, reject);
// // // // //       });

// // // // //       const fullBase64 = await fileToBase64(file);
// // // // //       const mediaBase64 = fullBase64.split(",")[1];

// // // // //       await postAction(`/complaints/${id}/resolve`, {
// // // // //         lat: pos.coords.latitude,
// // // // //         lng: pos.coords.longitude,
// // // // //         mediaBase64,
// // // // //         note: note || "Resolved via Officer Console",
// // // // //       });

// // // // //       alert("🎉 Job Closed Successfully!");
// // // // //       router.push("/officer");
// // // // //     } catch (e: any) {
// // // // //       alert("Error: " + e.message);
// // // // //     } finally {
// // // // //       setSubmitting(false);
// // // // //     }
// // // // //   }

// // // // //   if (loading) return <div className="min-h-screen bg-black text-white p-10">Loading Ticket Details...</div>;
// // // // //   if (!c) return <div className="min-h-screen bg-black text-white p-10">Ticket not found.</div>;

// // // // //   return (
// // // // //     <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">

// // // // //       {/* Top Bar */}
// // // // //       <div className="bg-zinc-900 border-b border-zinc-800 p-4 flex items-center gap-4 sticky top-0 z-10">
// // // // //         <Link href="/officer" className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400">
// // // // //           &larr; Back
// // // // //         </Link>
// // // // //         <div>
// // // // //           <h1 className="text-white font-bold text-lg leading-tight">{c.title}</h1>
// // // // //           <div className="text-xs text-zinc-500 uppercase tracking-wide font-semibold">
// // // // //             {c.ward?.name || "Unknown Ward"} • {c.category}
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="ml-auto">
// // // // //              <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
// // // // //                 c.currentStatus === 'WORK_IN_PROGRESS' ? 'bg-purple-900/30 text-purple-400 border-purple-800' :
// // // // //                 c.currentStatus === 'RESOLVED' ? 'bg-green-900/30 text-green-400 border-green-800' :
// // // // //                 'bg-blue-900/30 text-blue-400 border-blue-800'
// // // // //              }`}>
// // // // //                 {c.currentStatus.replace(/_/g, " ")}
// // // // //              </span>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="max-w-2xl mx-auto p-6 space-y-8">

// // // // //         {/* 1. Complaint Details */}
// // // // //         <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg">
// // // // //           <h2 className="text-zinc-500 text-xs font-bold uppercase mb-4">Ticket Details</h2>
// // // // //           <p className="text-white text-lg mb-4">{c.description}</p>

// // // // //           <div className="grid grid-cols-2 gap-4 text-sm">
// // // // //              <div className="bg-black p-3 rounded-lg border border-zinc-800">
// // // // //                 <div className="text-zinc-500 text-xs">Reported Date</div>
// // // // //                 <div className="text-zinc-300">{new Date(c.createdAt).toLocaleString()}</div>
// // // // //              </div>
// // // // //              <div className="bg-black p-3 rounded-lg border border-zinc-800">
// // // // //                 <div className="text-zinc-500 text-xs">Location</div>
// // // // //                 <div className="text-zinc-300">{c.locationText || "GPS Pin Only"}</div>
// // // // //              </div>
// // // // //           </div>
// // // // //         </section>

// // // // //         {/* 2. THE ACTION ZONE - STRICT PROTOCOL */}
// // // // //         <section>

// // // // //           {/* STAGE 1: ASSIGNED -> START INSPECTION */}
// // // // //           {c.currentStatus === 'ASSIGNED' && (
// // // // //             <div className="bg-indigo-950/20 border border-indigo-900/50 p-8 rounded-xl text-center space-y-4">
// // // // //                <div className="text-4xl">🔍</div>
// // // // //                <h3 className="text-xl font-bold text-indigo-200">Arrived at Location?</h3>
// // // // //                <p className="text-indigo-200/60 max-w-xs mx-auto">
// // // // //                  Protocol requires you to visually inspect the issue before starting work.
// // // // //                </p>
// // // // //                <button 
// // // // //                   onClick={() => advanceStage('INSPECTION', 'Start Inspection')}
// // // // //                   disabled={submitting}
// // // // //                   className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-900/20 transition disabled:opacity-50"
// // // // //                >
// // // // //                   {submitting ? "Updating..." : "START INSPECTION"}
// // // // //                </button>
// // // // //             </div>
// // // // //           )}

// // // // //           {/* STAGE 2: INSPECTION -> START WORK */}
// // // // //           {c.currentStatus === 'INSPECTION' && (
// // // // //             <div className="bg-yellow-950/20 border border-yellow-900/50 p-8 rounded-xl text-center space-y-4">
// // // // //                <div className="text-4xl">🚧</div>
// // // // //                <h3 className="text-xl font-bold text-yellow-200">Inspection Complete?</h3>
// // // // //                <p className="text-yellow-200/60 max-w-xs mx-auto">
// // // // //                  Click below to officially begin the repair work. This will alert the dashboard.
// // // // //                </p>
// // // // //                <button 
// // // // //                   onClick={() => advanceStage('WORK_IN_PROGRESS', 'Start Work')}
// // // // //                   disabled={submitting}
// // // // //                   className="w-full py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-xl shadow-lg shadow-yellow-900/20 transition disabled:opacity-50"
// // // // //                >
// // // // //                   {submitting ? "Updating..." : "START REPAIR WORK"}
// // // // //                </button>
// // // // //             </div>
// // // // //           )}

// // // // //           {/* STAGE 3: WORK IN PROGRESS -> RESOLVE (FORM) */}
// // // // //           {(c.currentStatus === 'WORK_IN_PROGRESS' || c.currentStatus === 'REOPENED') && (
// // // // //             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-6">
// // // // //                <div className="flex items-center gap-3 text-purple-400 mb-2">
// // // // //                   <span className="relative flex h-3 w-3">
// // // // //                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
// // // // //                     <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
// // // // //                   </span>
// // // // //                   <span className="font-bold uppercase tracking-wider text-xs">Work In Progress</span>
// // // // //                </div>

// // // // //                <div>
// // // // //                  <label className="block text-sm font-medium text-zinc-400 mb-2">Resolution Notes</label>
// // // // //                  <textarea 
// // // // //                    value={note}
// // // // //                    onChange={e => setNote(e.target.value)}
// // // // //                    placeholder="Describe what you fixed (e.g. 'Filled pothole with 20kg asphalt')..."
// // // // //                    className="w-full h-32 bg-black border border-zinc-700 rounded-lg p-3 text-white focus:border-green-500 outline-none"
// // // // //                  />
// // // // //                </div>

// // // // //                <div>
// // // // //                  <label className="block text-sm font-medium text-zinc-400 mb-2">Proof of Work (Required)</label>
// // // // //                  <div className="relative group cursor-pointer">
// // // // //                     <input 
// // // // //                       type="file" 
// // // // //                       accept="image/*"
// // // // //                       onChange={e => setFile(e.target.files?.[0] || null)}
// // // // //                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
// // // // //                     />
// // // // //                     <div className={`border-2 border-dashed rounded-xl p-8 text-center transition ${file ? 'border-green-500 bg-green-900/10' : 'border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800'}`}>
// // // // //                        {file ? (
// // // // //                           <div className="text-green-400 font-medium">✅ {file.name} ready to upload</div>
// // // // //                        ) : (
// // // // //                           <div className="text-zinc-500">
// // // // //                              <span className="text-2xl block mb-2">📸</span>
// // // // //                              Tap to take photo
// // // // //                           </div>
// // // // //                        )}
// // // // //                     </div>
// // // // //                  </div>
// // // // //                </div>

// // // // //                <button 
// // // // //                   onClick={resolveJob}
// // // // //                   disabled={submitting}
// // // // //                   className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg shadow-green-900/20 transition disabled:opacity-50"
// // // // //                >
// // // // //                   {submitting ? "Uploading Proof..." : "COMPLETE JOB & CLOSE TICKET"}
// // // // //                </button>
// // // // //             </div>
// // // // //           )}

// // // // //           {/* STAGE 4: RESOLVED -> Success Message */}
// // // // //           {c.currentStatus === 'RESOLVED' && (
// // // // //              <div className="p-10 text-center border border-zinc-800 rounded-xl bg-zinc-900 text-zinc-500">
// // // // //                 ✅ This ticket is closed. Great work!
// // // // //              </div>
// // // // //           )}
// // // // //         </section>

// // // // //       </div>
// // // // //     </main>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import { useParams, useRouter } from "next/navigation";
// // // // import Link from "next/link";
// // // // import { 
// // // //   ArrowLeft, 
// // // //   MapPin, 
// // // //   Calendar, 
// // // //   CheckCircle2, 
// // // //   Circle, 
// // // //   Camera, 
// // // //   Hammer, 
// // // //   Search, 
// // // //   Check 
// // // // } from "lucide-react";

// // // // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // // // Define the linear process stages
// // // // const STAGES = [
// // // //   { id: 'ASSIGNED', label: 'Assigned', icon: MapPin },
// // // //   { id: 'INSPECTION', label: 'Inspection', icon: Search },
// // // //   { id: 'WORK_IN_PROGRESS', label: 'Work', icon: Hammer },
// // // //   { id: 'RESOLVED', label: 'Resolved', icon: CheckCircle2 },
// // // // ];

// // // // export default function OfficerResolvePage() {
// // // //   const { id } = useParams();
// // // //   const router = useRouter();

// // // //   const [c, setComplaint] = useState<any>(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   // Form States
// // // //   const [note, setNote] = useState("");
// // // //   const [file, setFile] = useState<File | null>(null);
// // // //   const [submitting, setSubmitting] = useState(false);

// // // //   // Load Data
// // // //   useEffect(() => {
// // // //     const token = localStorage.getItem("civic_token");
// // // //     if (!token) {
// // // //         router.push("/login");
// // // //         return;
// // // //     }

// // // //     fetch(`${API}/complaints/${id}`, {
// // // //       headers: { Authorization: `Bearer ${token}` }
// // // //     })
// // // //     .then(res => {
// // // //         if (!res.ok) throw new Error("Failed to load");
// // // //         return res.json();
// // // //     })
// // // //     .then(data => {
// // // //       setComplaint(data);
// // // //       setLoading(false);
// // // //     })
// // // //     .catch(err => {
// // // //         alert("Failed to load ticket details.");
// // // //         router.push("/officer");
// // // //     });
// // // //   }, [id, router]);

// // // //   // Helpers
// // // //   function fileToBase64(file: File): Promise<string> {
// // // //     return new Promise((resolve, reject) => {
// // // //       const reader = new FileReader();
// // // //       reader.onload = () => resolve(String(reader.result));
// // // //       reader.onerror = reject;
// // // //       reader.readAsDataURL(file);
// // // //     });
// // // //   }

// // // //   async function postAction(url: string, body: any) {
// // // //     const token = localStorage.getItem("civic_token");
// // // //     const res = await fetch(`${API}${url}`, {
// // // //       method: "POST",
// // // //       headers: { 
// // // //         "Content-Type": "application/json",
// // // //         "Authorization": `Bearer ${token}` 
// // // //       },
// // // //       body: JSON.stringify(body),
// // // //     });
// // // //     if (!res.ok) {
// // // //       const err = await res.json();
// // // //       throw new Error(err.message || "Request failed");
// // // //     }
// // // //     return res.json();
// // // //   }

// // // //   // Actions
// // // //   async function advanceStage(targetStatus: string, label: string) {
// // // //     if (!confirm(`Confirm: ${label}?`)) return;
// // // //     setSubmitting(true);
// // // //     try {
// // // //       await postAction(`/complaints/${id}/advance`, { 
// // // //         nextStatus: targetStatus, 
// // // //         note: `Officer advanced stage to ${targetStatus}` 
// // // //       });
// // // //       window.location.reload(); 
// // // //     } catch (e: any) {
// // // //       alert("Error: " + e.message);
// // // //     } finally {
// // // //       setSubmitting(false);
// // // //     }
// // // //   }

// // // //   async function resolveJob() {
// // // //     if (!file) return alert("📸 Proof photo is required!");
// // // //     setSubmitting(true);
// // // //     try {
// // // //       const pos: any = await new Promise((resolve, reject) => {
// // // //         navigator.geolocation.getCurrentPosition(resolve, reject);
// // // //       });

// // // //       const fullBase64 = await fileToBase64(file);
// // // //       const mediaBase64 = fullBase64.split(",")[1];

// // // //       await postAction(`/complaints/${id}/resolve`, {
// // // //         lat: pos.coords.latitude,
// // // //         lng: pos.coords.longitude,
// // // //         mediaBase64,
// // // //         note: note || "Resolved via Officer Console",
// // // //       });

// // // //       alert("🎉 Job Closed Successfully!");
// // // //       router.push("/officer");
// // // //     } catch (e: any) {
// // // //       alert("Error: " + e.message);
// // // //     } finally {
// // // //       setSubmitting(false);
// // // //     }
// // // //   }

// // // //   if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-zinc-500">Loading Protocol...</div>;
// // // //   if (!c) return <div className="min-h-screen bg-black flex items-center justify-center text-zinc-500">Ticket not found.</div>;

// // // //   // Calculate Progress Index
// // // //   const currentStageIndex = STAGES.findIndex(s => s.id === c.currentStatus);
// // // //   const progressPercent = (currentStageIndex / (STAGES.length - 1)) * 100;

// // // //   return (
// // // //     <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">

// // // //       {/* Navbar */}
// // // //       <nav className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
// // // //         <Link href="/officer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
// // // //           <ArrowLeft size={18} />
// // // //           <span className="font-medium text-sm">Back to Queue</span>
// // // //         </Link>
// // // //         <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
// // // //           {c.id.slice(0, 8)}
// // // //         </div>
// // // //       </nav>

// // // //       <div className="max-w-xl mx-auto p-6 space-y-8">

// // // //         {/* 1. Header Card */}
// // // //         <header>
// // // //           <div className="flex items-start justify-between mb-2">
// // // //             <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-900/30 text-blue-400 border border-blue-800">
// // // //               {c.category}
// // // //             </span>
// // // //             <span className="text-xs text-zinc-500 font-mono">
// // // //               {new Date(c.createdAt).toLocaleDateString()}
// // // //             </span>
// // // //           </div>
// // // //           <h1 className="text-2xl font-bold text-white leading-tight mb-2">{c.title}</h1>
// // // //           <div className="flex items-center gap-2 text-sm text-zinc-400">
// // // //             <MapPin size={14} className="text-zinc-600" />
// // // //             <span>{c.ward?.name || "Unknown Ward"}</span>
// // // //             <span className="text-zinc-600">•</span>
// // // //             <span>{c.locationText || "GPS Pin"}</span>
// // // //           </div>
// // // //         </header>

// // // //         {/* 2. PROGRESS STEPPER (The "Advanced" UI) */}
// // // //         <div className="relative pt-2 pb-6">
// // // //           {/* Background Line */}
// // // //           <div className="absolute top-5 left-0 right-0 h-0.5 bg-zinc-800 rounded-full" />

// // // //           {/* Animated Progress Line */}
// // // //           <div 
// // // //             className="absolute top-5 left-0 h-0.5 bg-blue-500 rounded-full transition-all duration-700 ease-out"
// // // //             style={{ width: `${progressPercent}%` }}
// // // //           />

// // // //           {/* Steps */}
// // // //           <div className="relative flex justify-between z-10">
// // // //             {STAGES.map((stage, idx) => {
// // // //               const isCompleted = idx <= currentStageIndex;
// // // //               const isCurrent = idx === currentStageIndex;

// // // //               return (
// // // //                 <div key={stage.id} className="flex flex-col items-center gap-2">
// // // //                   <div className={`
// // // //                     w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500
// // // //                     ${isCompleted ? 'bg-zinc-900 border-blue-500 text-blue-400' : 'bg-black border-zinc-800 text-zinc-700'}
// // // //                     ${isCurrent ? 'ring-4 ring-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : ''}
// // // //                   `}>
// // // //                     <stage.icon size={16} strokeWidth={isCurrent ? 2.5 : 2} />
// // // //                   </div>
// // // //                   <div className={`
// // // //                     text-[10px] font-bold uppercase tracking-wider transition-colors duration-300
// // // //                     ${isCompleted ? 'text-zinc-300' : 'text-zinc-700'}
// // // //                   `}>
// // // //                     {stage.label}
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //         </div>

// // // //         {/* 3. DYNAMIC ACTION AREA */}
// // // //         <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-1 overflow-hidden">

// // // //           {/* A. ASSIGNED -> START INSPECTION */}
// // // //           {c.currentStatus === 'ASSIGNED' && (
// // // //             <div className="p-8 text-center space-y-6 animate-in slide-in-from-bottom-4 duration-500">
// // // //               <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto text-blue-400 animate-pulse">
// // // //                 <Search size={32} />
// // // //               </div>
// // // //               <div className="space-y-2">
// // // //                 <h3 className="text-xl font-bold text-white">Arrived on Site?</h3>
// // // //                 <p className="text-sm text-zinc-400 max-w-xs mx-auto">
// // // //                   Confirm you have reached the location to begin the initial assessment.
// // // //                 </p>
// // // //               </div>
// // // //               <button 
// // // //                 onClick={() => advanceStage('INSPECTION', 'Start Inspection')}
// // // //                 disabled={submitting}
// // // //                 className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100"
// // // //               >
// // // //                 {submitting ? "Starting..." : "Begin Inspection"}
// // // //               </button>
// // // //             </div>
// // // //           )}

// // // //           {/* B. INSPECTION -> START WORK */}
// // // //           {c.currentStatus === 'INSPECTION' && (
// // // //             <div className="p-8 text-center space-y-6 animate-in slide-in-from-bottom-4 duration-500">
// // // //               <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto text-amber-400">
// // // //                 <Hammer size={32} />
// // // //               </div>
// // // //               <div className="space-y-2">
// // // //                 <h3 className="text-xl font-bold text-white">Inspection Complete</h3>
// // // //                 <p className="text-sm text-zinc-400 max-w-xs mx-auto">
// // // //                   Ready to start the actual repair work? This will update the public status to "Work in Progress".
// // // //                 </p>
// // // //               </div>
// // // //               <button 
// // // //                 onClick={() => advanceStage('WORK_IN_PROGRESS', 'Start Work')}
// // // //                 disabled={submitting}
// // // //                 className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition active:scale-[0.98] disabled:opacity-50"
// // // //               >
// // // //                 {submitting ? "Updating..." : "Start Repairs"}
// // // //               </button>
// // // //             </div>
// // // //           )}

// // // //           {/* C. WORK -> RESOLVE (FORM) */}
// // // //           {(c.currentStatus === 'WORK_IN_PROGRESS' || c.currentStatus === 'REOPENED') && (
// // // //             <div className="p-6 space-y-6 animate-in slide-in-from-bottom-4 duration-500">
// // // //               <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
// // // //                 <div className="relative">
// // // //                   <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></span>
// // // //                   <div className="relative bg-green-500/10 p-2 rounded-full text-green-500">
// // // //                     <Hammer size={18} />
// // // //                   </div>
// // // //                 </div>
// // // //                 <div>
// // // //                   <h3 className="font-bold text-white text-sm">Repair in Progress</h3>
// // // //                   <p className="text-xs text-zinc-500">Complete the form below to close.</p>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="space-y-4">
// // // //                 <div className="space-y-2">
// // // //                   <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Resolution Notes</label>
// // // //                   <textarea 
// // // //                     value={note}
// // // //                     onChange={e => setNote(e.target.value)}
// // // //                     placeholder="Describe the fix (e.g., 'Filled 2x2m pothole, applied sealant')..."
// // // //                     className="w-full h-32 bg-black border border-zinc-800 rounded-xl p-4 text-sm text-white placeholder:text-zinc-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
// // // //                   />
// // // //                 </div>

// // // //                 <div className="space-y-2">
// // // //                   <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Proof of Work</label>
// // // //                   <div className="relative group">
// // // //                     <input 
// // // //                       type="file" 
// // // //                       accept="image/*"
// // // //                       onChange={e => setFile(e.target.files?.[0] || null)}
// // // //                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
// // // //                     />
// // // //                     <div className={`
// // // //                       h-32 border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 transition-all
// // // //                       ${file ? 'border-green-500 bg-green-900/10' : 'border-zinc-800 bg-black hover:border-zinc-600'}
// // // //                     `}>
// // // //                       {file ? (
// // // //                         <>
// // // //                           <CheckCircle2 size={24} className="text-green-500" />
// // // //                           <span className="text-sm font-medium text-green-400">{file.name}</span>
// // // //                         </>
// // // //                       ) : (
// // // //                         <>
// // // //                           <Camera size={24} className="text-zinc-600" />
// // // //                           <span className="text-sm text-zinc-500">Tap to upload photo</span>
// // // //                         </>
// // // //                       )}
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               <button 
// // // //                 onClick={resolveJob}
// // // //                 disabled={submitting}
// // // //                 className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-bold rounded-xl transition active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-white/5"
// // // //               >
// // // //                 {submitting ? "Uploading..." : "Complete & Close Job"}
// // // //               </button>
// // // //             </div>
// // // //           )}

// // // //           {/* D. RESOLVED STATE */}
// // // //           {c.currentStatus === 'RESOLVED' && (
// // // //             <div className="p-12 text-center space-y-4 animate-in zoom-in-95 duration-500">
// // // //               <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto text-green-500 mb-4">
// // // //                 <Check size={40} strokeWidth={3} />
// // // //               </div>
// // // //               <h3 className="text-2xl font-bold text-white">Job Closed!</h3>
// // // //               <p className="text-zinc-500 max-w-xs mx-auto">
// // // //                 Excellent work. This complaint has been marked as resolved and archived.
// // // //               </p>
// // // //               <Link href="/officer">
// // // //                 <button className="mt-6 px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-full transition">
// // // //                   Return to Dashboard
// // // //                 </button>
// // // //               </Link>
// // // //             </div>
// // // //           )}

// // // //         </div>

// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { useParams, useRouter } from "next/navigation";
// // // import Link from "next/link";
// // // import {
// // //   ArrowLeft,
// // //   MapPin,
// // //   Search,
// // //   Hammer,
// // //   CheckCircle2,
// // //   Camera,
// // //   Check,
// // //   User
// // // } from "lucide-react";

// // // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // // Define stages with IDs matching your DB status enums
// // // const STAGES = [
// // //   { id: 'ASSIGNED', label: 'Assigned', icon: MapPin },
// // //   { id: 'INSPECTION', label: 'Inspection', icon: Search },
// // //   { id: 'WORK_IN_PROGRESS', label: 'Work', icon: Hammer },
// // //   { id: 'RESOLVED', label: 'Resolved', icon: CheckCircle2 },
// // // ];

// // // export default function OfficerResolvePage() {
// // //   const { id } = useParams();
// // //   const router = useRouter();

// // //   const [c, setComplaint] = useState<any>(null);
// // //   const [loading, setLoading] = useState(true);

// // //   // Interaction State
// // //   // We use this to decide which "Stage Form" to show. 
// // //   // Default is the current status from DB.
// // //   const [activeTab, setActiveTab] = useState<string>("");

// // //   // Form Data
// // //   const [officerName, setOfficerName] = useState("");
// // //   const [note, setNote] = useState("");
// // //   const [file, setFile] = useState<File | null>(null);
// // //   const [submitting, setSubmitting] = useState(false);

// // //   // Load Data
// // //   useEffect(() => {
// // //     const token = localStorage.getItem("civic_token");
// // //     if (!token) {
// // //       router.push("/login");
// // //       return;
// // //     }

// // //     fetch(`${API}/complaints/${id}`, {
// // //       headers: { Authorization: `Bearer ${token}` }
// // //     })
// // //       .then(res => {
// // //         if (!res.ok) throw new Error("Failed to load");
// // //         return res.json();
// // //       })
// // //       .then(data => {
// // //         setComplaint(data);
// // //         // Set the active tab to the current status initially
// // //         setActiveTab(data.currentStatus);
// // //         setLoading(false);
// // //       })
// // //       .catch(err => {
// // //         alert("Failed to load ticket details.");
// // //         router.push("/officer");
// // //       });
// // //   }, [id, router]);

// // //   // Helpers
// // //   function fileToBase64(file: File): Promise<string> {
// // //     return new Promise((resolve, reject) => {
// // //       const reader = new FileReader();
// // //       reader.onload = () => resolve(String(reader.result));
// // //       reader.onerror = reject;
// // //       reader.readAsDataURL(file);
// // //     });
// // //   }

// // //   async function postAction(url: string, body: any) {
// // //     const token = localStorage.getItem("civic_token");
// // //     const res = await fetch(`${API}${url}`, {
// // //       method: "POST",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //         "Authorization": `Bearer ${token}`
// // //       },
// // //       body: JSON.stringify(body),
// // //     });
// // //     if (!res.ok) {
// // //       const err = await res.json();
// // //       throw new Error(err.message || "Request failed");
// // //     }
// // //     return res.json();
// // //   }

// // //   // --- ACTIONS ---

// // //   // Generic Advance Handler
// // //   async function saveStageUpdate(targetStatus: string) {
// // //     if (!confirm(`Confirm update to ${targetStatus}?`)) return;
// // //     setSubmitting(true);

// // //     try {
// // //       // Build note string based on stage
// // //       let finalNote = note;
// // //       if (targetStatus === 'ASSIGNED' && officerName) {
// // //         finalNote = `[Assigned to: ${officerName}] ${note}`;
// // //       }

// // //       await postAction(`/complaints/${id}/advance`, {
// // //         nextStatus: targetStatus,
// // //         note: finalNote || `Updated status to ${targetStatus}`
// // //       });

// // //       alert("✅ Status Updated");
// // //       window.location.reload();
// // //     } catch (e: any) {
// // //       alert("Error: " + e.message);
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   }

// // //   // Final Resolve Handler (with Photo)
// // //   async function resolveJob() {
// // //     if (!file) return alert("📸 Proof photo is required to resolve!");
// // //     setSubmitting(true);
// // //     try {
// // //       const pos: any = await new Promise((resolve, reject) => {
// // //         navigator.geolocation.getCurrentPosition(resolve, reject);
// // //       });

// // //       const fullBase64 = await fileToBase64(file);
// // //       const mediaBase64 = fullBase64.split(",")[1];

// // //       await postAction(`/complaints/${id}/resolve`, {
// // //         lat: pos.coords.latitude,
// // //         lng: pos.coords.longitude,
// // //         mediaBase64,
// // //         note: note || "Resolved via Officer Console",
// // //       });

// // //       alert("🎉 Job Closed Successfully!");
// // //       router.push("/officer");
// // //     } catch (e: any) {
// // //       alert("Error: " + e.message);
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   }

// // //   if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-zinc-500">Loading Protocol...</div>;
// // //   if (!c) return <div className="min-h-screen bg-black flex items-center justify-center text-zinc-500">Ticket not found.</div>;

// // //   // Calculate Progress
// // //   const currentStageIndex = STAGES.findIndex(s => s.id === c.currentStatus);
// // //   const activeTabIndex = STAGES.findIndex(s => s.id === activeTab);
// // //   const progressPercent = (currentStageIndex / (STAGES.length - 1)) * 100;

// // //   return (
// // //     <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">

// // //       {/* Navbar */}
// // //       <nav className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
// // //         <Link href="/officer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
// // //           <ArrowLeft size={18} />
// // //           <span className="font-medium text-sm">Back</span>
// // //         </Link>
// // //         <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
// // //           {c.id.slice(0, 8)}
// // //         </div>
// // //       </nav>

// // //       <div className="max-w-xl mx-auto p-6 space-y-8">

// // //         <header>
// // //           <div className="flex items-start justify-between mb-2">
// // //             <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-900/30 text-blue-400 border border-blue-800">
// // //               {c.category}
// // //             </span>
// // //             <span className="text-xs text-zinc-500 font-mono">
// // //               {new Date(c.createdAt).toLocaleDateString()}
// // //             </span>
// // //           </div>
// // //           <h1 className="text-2xl font-bold text-white leading-tight mb-2">{c.title}</h1>
// // //           <div className="flex items-center gap-2 text-sm text-zinc-400">
// // //             <MapPin size={14} className="text-zinc-600" />
// // //             <span>{c.ward?.name || "Unknown Ward"}</span>
// // //           </div>
// // //         </header>

// // //         {/* --- CLICKABLE PROGRESS STEPPER --- */}
// // //         <div className="relative pt-2 pb-6 px-2">

// // //           {/* Grey Background Line */}
// // //           <div className="absolute top-5 left-2 right-2 h-1 bg-zinc-800 rounded-full" />

// // //           {/* Colored Progress Line (Gradient Blue -> Green) */}
// // //           <div
// // //             className="absolute top-5 left-2 h-1 rounded-full transition-all duration-700 ease-out bg-gradient-to-r from-blue-600 to-green-500"
// // //             style={{ width: `${progressPercent}%` }}
// // //           />

// // //           {/* Steps */}
// // //           <div className="relative flex justify-between z-10">
// // //             {STAGES.map((stage, idx) => {
// // //               const isCompleted = idx <= currentStageIndex;
// // //               const isActive = stage.id === activeTab; // Currently selected for editing

// // //               return (
// // //                 <button
// // //                   key={stage.id}
// // //                   onClick={() => {
// // //                     setActiveTab(stage.id);
// // //                     setNote(""); // Clear form on tab switch
// // //                     setOfficerName("");
// // //                   }}
// // //                   className="flex flex-col items-center gap-2 group outline-none"
// // //                 >
// // //                   <div className={`
// // //                     w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
// // //                     ${isActive
// // //                       ? 'scale-110 ring-4 ring-blue-500/30 border-blue-400 bg-zinc-900 text-white'
// // //                       : isCompleted
// // //                         ? 'bg-zinc-900 border-green-500 text-green-500'
// // //                         : 'bg-black border-zinc-800 text-zinc-700 group-hover:border-zinc-600'}
// // //                   `}>
// // //                     <stage.icon size={16} strokeWidth={isActive ? 2.5 : 2} />
// // //                   </div>
// // //                   <div className={`
// // //                     text-[10px] font-bold uppercase tracking-wider transition-colors
// // //                     ${isActive ? 'text-white' : 'text-zinc-600'}
// // //                   `}>
// // //                     {stage.label}
// // //                   </div>
// // //                 </button>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>

// // //         {/* --- DYNAMIC FORM AREA --- */}
// // //         <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">

// // //           {/* HEADER FOR FORM */}
// // //           <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
// // //             <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
// // //               {/* ✅ FIX: Render as a Component, not a function call */}
// // //               {(() => {
// // //                 const StageIcon = STAGES.find(s => s.id === activeTab)?.icon || MapPin;
// // //                 return <StageIcon size={20} />;
// // //               })()}
// // //             </div>
// // //             <div>
// // //               <h3 className="font-bold text-lg text-white">
// // //                 Update Status: {STAGES.find(s => s.id === activeTab)?.label}
// // //               </h3>
// // //               <p className="text-xs text-zinc-500">Add details to update ticket status.</p>
// // //             </div>
// // //           </div>

// // //           {/* 1. ASSIGNED FORM */}
// // //           {activeTab === 'ASSIGNED' && (
// // //             <div className="space-y-4">
// // //               <div>
// // //                 <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Assigned Officer</label>
// // //                 <div className="relative">
// // //                   <User size={16} className="absolute left-3 top-3 text-zinc-500" />
// // //                   <input
// // //                     type="text"
// // //                     value={officerName}
// // //                     onChange={(e) => setOfficerName(e.target.value)}
// // //                     placeholder="Enter Officer Name..."
// // //                     className="w-full bg-black border border-zinc-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:border-blue-500 outline-none"
// // //                   />
// // //                 </div>
// // //               </div>
// // //               <div>
// // //                 <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Assignment Notes</label>
// // //                 <textarea
// // //                   value={note}
// // //                   onChange={(e) => setNote(e.target.value)}
// // //                   placeholder="Additional instructions for the officer..."
// // //                   className="w-full h-24 bg-black border border-zinc-700 rounded-xl p-3 text-sm text-white focus:border-blue-500 outline-none resize-none"
// // //                 />
// // //               </div>
// // //               <button
// // //                 onClick={() => saveStageUpdate('ASSIGNED')}
// // //                 disabled={submitting}
// // //                 className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition disabled:opacity-50"
// // //               >
// // //                 {submitting ? "Saving..." : "Confirm Assignment"}
// // //               </button>
// // //             </div>
// // //           )}

// // //           {/* 2. INSPECTION FORM */}
// // //           {activeTab === 'INSPECTION' && (
// // //             <div className="space-y-4">
// // //               <div className="bg-blue-900/20 text-blue-300 p-3 rounded-lg text-sm border border-blue-900/50">
// // //                 ⚠️ Ensure you are physically at the location before starting inspection.
// // //               </div>
// // //               <div>
// // //                 <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Inspection Notes</label>
// // //                 <textarea
// // //                   value={note}
// // //                   onChange={(e) => setNote(e.target.value)}
// // //                   placeholder="Observations from the site (e.g. 'Damage is severe, needs excavator')..."
// // //                   className="w-full h-32 bg-black border border-zinc-700 rounded-xl p-3 text-sm text-white focus:border-blue-500 outline-none resize-none"
// // //                 />
// // //               </div>
// // //               <button
// // //                 onClick={() => saveStageUpdate('INSPECTION')}
// // //                 disabled={submitting}
// // //                 className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition disabled:opacity-50"
// // //               >
// // //                 Start Inspection Phase
// // //               </button>
// // //             </div>
// // //           )}

// // //           {/* 3. WORK IN PROGRESS FORM */}
// // //           {activeTab === 'WORK_IN_PROGRESS' && (
// // //             <div className="space-y-4">
// // //               <div>
// // //                 <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Work Log</label>
// // //                 <textarea
// // //                   value={note}
// // //                   onChange={(e) => setNote(e.target.value)}
// // //                   placeholder="Log work start details (e.g. 'Crew arrived, material unloading')..."
// // //                   className="w-full h-32 bg-black border border-zinc-700 rounded-xl p-3 text-sm text-white focus:border-amber-500 outline-none resize-none"
// // //                 />
// // //               </div>
// // //               <button
// // //                 onClick={() => saveStageUpdate('WORK_IN_PROGRESS')}
// // //                 disabled={submitting}
// // //                 className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition disabled:opacity-50"
// // //               >
// // //                 Mark Work in Progress
// // //               </button>
// // //             </div>
// // //           )}

// // //           {/* 4. RESOLVED FORM (Requires Photo) */}
// // //           {activeTab === 'RESOLVED' && (
// // //             <div className="space-y-5">

// // //               <div>
// // //                 <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Final Resolution Notes</label>
// // //                 <textarea
// // //                   value={note}
// // //                   onChange={(e) => setNote(e.target.value)}
// // //                   placeholder="Describe the fix in detail..."
// // //                   className="w-full h-24 bg-black border border-zinc-700 rounded-xl p-3 text-sm text-white focus:border-green-500 outline-none resize-none"
// // //                 />
// // //               </div>

// // //               <div>
// // //                 <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Proof of Work (Required)</label>
// // //                 <div className="relative group">
// // //                   <input
// // //                     type="file"
// // //                     accept="image/*"
// // //                     onChange={e => setFile(e.target.files?.[0] || null)}
// // //                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
// // //                   />
// // //                   <div className={`
// // //                     h-28 border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 transition-all
// // //                     ${file ? 'border-green-500 bg-green-900/10' : 'border-zinc-700 bg-black hover:border-zinc-500'}
// // //                   `}>
// // //                     {file ? (
// // //                       <>
// // //                         <CheckCircle2 size={24} className="text-green-500" />
// // //                         <span className="text-sm font-medium text-green-400">{file.name}</span>
// // //                       </>
// // //                     ) : (
// // //                       <>
// // //                         <Camera size={24} className="text-zinc-600" />
// // //                         <span className="text-sm text-zinc-500">Tap to upload proof</span>
// // //                       </>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <button
// // //                 onClick={resolveJob}
// // //                 disabled={submitting}
// // //                 className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition disabled:opacity-50 shadow-lg shadow-green-900/20"
// // //               >
// // //                 {submitting ? "Closing Ticket..." : "Complete & Close Ticket"}
// // //               </button>
// // //             </div>
// // //           )}

// // //         </div>

// // //       </div>
// // //     </main>
// // //   );
// // // }


// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { useParams, useRouter } from "next/navigation";
// // // import Link from "next/link";
// // // import { 
// // //   ArrowLeft, MapPin, Search, Hammer, CheckCircle2, Camera, Check, User
// // // } from "lucide-react";

// // // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // // Define strict sequence
// // // const STAGES = [
// // //   { id: 'ASSIGNED', label: 'Assigned', icon: MapPin },
// // //   { id: 'INSPECTION', label: 'Inspection', icon: Search },
// // //   { id: 'WORK_IN_PROGRESS', label: 'Work', icon: Hammer },
// // //   { id: 'RESOLVED', label: 'Resolved', icon: CheckCircle2 },
// // // ];

// // // export default function OfficerResolvePage() {
// // //   const { id } = useParams();
// // //   const router = useRouter();

// // //   const [c, setComplaint] = useState<any>(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [activeTab, setActiveTab] = useState<string>(""); 

// // //   // Form Data
// // //   const [officerName, setOfficerName] = useState("");
// // //   const [note, setNote] = useState("");
// // //   const [file, setFile] = useState<File | null>(null);
// // //   const [submitting, setSubmitting] = useState(false);

// // //   // // Load Data
// // //   // useEffect(() => {
// // //   //   const token = localStorage.getItem("civic_token");
// // //   //   if (!token) return router.push("/login");

// // //   //   fetch(`${API}/complaints/${id}`, {
// // //   //     headers: { Authorization: `Bearer ${token}` }
// // //   //   })
// // //   //   .then(res => {
// // //   //       if (!res.ok) throw new Error("Failed");
// // //   //       return res.json();
// // //   //   })
// // //   //   .then(data => {
// // //   //     setComplaint(data);
// // //   //     // Default to current status, or 'ASSIGNED' if it's earlier (CREATED/ACKNOWLEDGED)
// // //   //     const current = ['CREATED', 'ACKNOWLEDGED'].includes(data.currentStatus) ? 'ASSIGNED' : data.currentStatus;
// // //   //     setActiveTab(current); 
// // //   //     setLoading(false);
// // //   //   })
// // //   //   .catch(() => router.push("/officer"));
// // //   // }, [id, router]);
// // //   // Load Data
// // //   useEffect(() => {
// // //     const token = localStorage.getItem("civic_token");
// // //     if (!token) return router.push("/login");

// // //     fetch(`${API}/complaints/${id}`, {
// // //       headers: { Authorization: `Bearer ${token}` }
// // //     })
// // //     .then(res => {
// // //         if (!res.ok) throw new Error("Failed");
// // //         return res.json();
// // //     })
// // //     .then(data => {
// // //       setComplaint(data);

// // //       // ⚡️ SMART TAB SWITCHER ⚡️
// // //       // Automatically jumps to the NEXT actionable step
// // //       if (['CREATED', 'ACKNOWLEDGED'].includes(data.currentStatus)) {
// // //          setActiveTab('ASSIGNED');
// // //       } else if (data.currentStatus === 'ASSIGNED') {
// // //          setActiveTab('INSPECTION'); // Jump to next
// // //       } else if (data.currentStatus === 'INSPECTION') {
// // //          setActiveTab('WORK_IN_PROGRESS'); // Jump to next
// // //       } else if (data.currentStatus === 'WORK_IN_PROGRESS') {
// // //          setActiveTab('RESOLVED'); // Jump to next
// // //       } else {
// // //          setActiveTab('RESOLVED');
// // //       }

// // //       setLoading(false);
// // //     })
// // //     .catch(() => router.push("/officer"));
// // //   }, [id, router]);

// // //   // Helpers
// // //   function fileToBase64(file: File): Promise<string> {
// // //     return new Promise((resolve, reject) => {
// // //       const reader = new FileReader();
// // //       reader.onload = () => resolve(String(reader.result));
// // //       reader.onerror = reject;
// // //       reader.readAsDataURL(file);
// // //     });
// // //   }

// // //   async function postAction(url: string, method = "POST", body: any) {
// // //     const token = localStorage.getItem("civic_token");
// // //     const res = await fetch(`${API}${url}`, {
// // //       method,
// // //       headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
// // //       body: JSON.stringify(body),
// // //     });
// // //     if (!res.ok) {
// // //       const err = await res.json();
// // //       throw new Error(err.message || "Request failed");
// // //     }
// // //     return res.json();
// // //   }

// // //   // --- ACTIONS ---

// // //   // 1. SPECIFIC ASSIGNMENT HANDLER (Hits PATCH /assign)
// // //   async function saveAssignment() {
// // //     if (!confirm("Confirm assignment?")) return;
// // //     setSubmitting(true);
// // //     try {
// // //        // This endpoint handles the Auto-ACK + Assign logic on backend
// // //        await postAction(`/complaints/${id}/assign`, "PATCH", { officerName });
// // //        alert("✅ Assigned Successfully");
// // //        window.location.reload();
// // //     } catch (e: any) {
// // //       alert("Error: " + e.message);
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   }

// // //   // 2. GENERIC ADVANCE HANDLER (For Inspection -> Work)
// // //   async function saveStageUpdate(targetStatus: string) {
// // //     if (!confirm(`Advance to ${targetStatus}?`)) return;
// // //     setSubmitting(true);
// // //     try {
// // //       await postAction(`/complaints/${id}/advance`, "POST", { 
// // //         nextStatus: targetStatus, 
// // //         note 
// // //       });
// // //       alert("✅ Status Updated");
// // //       window.location.reload(); 
// // //     } catch (e: any) {
// // //       alert("Error: " + e.message);
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   }

// // //   // 3. RESOLVE HANDLER
// // //   async function resolveJob() {
// // //     if (!file) return alert("📸 Photo required!");
// // //     setSubmitting(true);
// // //     try {
// // //       const fullBase64 = await fileToBase64(file);
// // //       const mediaBase64 = fullBase64.split(",")[1];

// // //       // Get Location if possible, else default to complaint location
// // //       let lat = c.lat, lng = c.lng;
// // //       try {
// // //         const pos: any = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej, {timeout: 5000}));
// // //         lat = pos.coords.latitude;
// // //         lng = pos.coords.longitude;
// // //       } catch (e) { console.warn("GPS failed, using default"); }

// // //       await postAction(`/complaints/${id}/resolve`, "POST", {
// // //         lat, lng, mediaBase64, note
// // //       });

// // //       alert("🎉 Job Closed!");
// // //       router.push("/officer");
// // //     } catch (e: any) {
// // //       alert("Error: " + e.message);
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   }

// // //   if (loading || !c) return <div className="min-h-screen bg-black text-white p-10">Loading...</div>;

// // //   const currentStageIndex = STAGES.findIndex(s => s.id === c.currentStatus);
// // //   const activeTabIndex = STAGES.findIndex(s => s.id === activeTab);
// // //   const progressPercent = (Math.max(0, currentStageIndex) / (STAGES.length - 1)) * 100;

// // //   // Determine if the Active Tab is "Past" (Completed)
// // //   const isTabCompleted = activeTabIndex < currentStageIndex;
// // //   // Determine if Active Tab is "Future" (Locked)
// // //   const isTabLocked = activeTabIndex > currentStageIndex + 1;

// // //   return (
// // //     <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">
// // //       <nav className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
// // //         <Link href="/officer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
// // //           <ArrowLeft size={18} /> <span className="font-medium text-sm">Back</span>
// // //         </Link>
// // //         <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{c.id.slice(0, 8)}</div>
// // //       </nav>

// // //       <div className="max-w-xl mx-auto p-6 space-y-8">
// // //         <header>
// // //           <h1 className="text-2xl font-bold text-white mb-2">{c.title}</h1>
// // //           <div className="flex items-center gap-2 text-sm text-zinc-400">
// // //             <span className="px-2 py-0.5 rounded bg-blue-900/30 text-blue-400 text-xs font-bold border border-blue-800">{c.category}</span>
// // //             <span>• {c.ward?.name}</span>
// // //           </div>
// // //         </header>

// // //         {/* PROGRESS STEPPER */}
// // //         <div className="relative pt-2 pb-6 px-2">
// // //           <div className="absolute top-5 left-2 right-2 h-1 bg-zinc-800 rounded-full" />
// // //           <div className="absolute top-5 left-2 h-1 rounded-full transition-all duration-700 bg-gradient-to-r from-blue-600 to-green-500" style={{ width: `${progressPercent}%` }} />
// // //           <div className="relative flex justify-between z-10">
// // //             {/* {STAGES.map((stage, idx) => {
// // //               const isCompleted = idx <= currentStageIndex;
// // //               const isActive = stage.id === activeTab;
// // //               return (
// // //                 <button key={stage.id} onClick={() => { setActiveTab(stage.id); setNote(""); }} className="flex flex-col items-center gap-2 group outline-none">
// // //                   <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${isActive ? 'scale-110 border-blue-400 bg-zinc-900 text-white' : isCompleted ? 'bg-zinc-900 border-green-500 text-green-500' : 'bg-black border-zinc-800 text-zinc-700'}`}>
// // //                     <stage.icon size={16} strokeWidth={isActive ? 2.5 : 2} />
// // //                   </div>
// // //                   <div className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-zinc-600'}`}>{stage.label}</div>
// // //                 </button>
// // //               );
// // //             })} */}
// // //             // ... inside the STAGES.map loop ...
// // //           {STAGES.map((stage, idx) => {
// // //             const isCompleted = idx <= currentStageIndex;
// // //             const isActive = stage.id === activeTab;

// // //             // 🔒 LOCK LOGIC: You can only click:
// // //             // 1. Past stages (to view history)
// // //             // 2. Current stage
// // //             // 3. The IMMEDIATE next stage (to advance)
// // //             // Anything further is LOCKED.
// // //             const isLocked = idx > currentStageIndex + 1;

// // //             return (
// // //               <button 
// // //                 key={stage.id} 
// // //                 disabled={isLocked} // 👈 THIS PREVENTS CLICKING
// // //                 onClick={() => {
// // //                   if (!isLocked) {
// // //                     setActiveTab(stage.id);
// // //                     setNote("");
// // //                   }
// // //                 }}
// // //                 className={`
// // //                   flex flex-col items-center gap-2 group outline-none transition-all
// // //                   ${isLocked ? 'opacity-40 cursor-not-allowed grayscale' : 'cursor-pointer'}
// // //                 `}
// // //               >
// // //                 <div className={`
// // //                   w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all
// // //                   ${isActive 
// // //                       ? 'scale-110 border-blue-400 bg-zinc-900 text-white' 
// // //                       : isCompleted 
// // //                           ? 'bg-zinc-900 border-green-500 text-green-500' 
// // //                           : 'bg-black border-zinc-800 text-zinc-700'}
// // //                 `}>
// // //                   <stage.icon size={16} strokeWidth={isActive ? 2.5 : 2} />
// // //                 </div>
// // //                 <div className={`
// // //                   text-[10px] font-bold uppercase tracking-wider 
// // //                   ${isActive ? 'text-white' : 'text-zinc-600'}
// // //                 `}>
// // //                   {stage.label}
// // //                 </div>
// // //               </button>
// // //             );
// // //           })}
// // //           </div>
// // //         </div>

// // //         {/* DYNAMIC FORM */}
// // //         <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
// // //           <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
// // //              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
// // //                {(() => { const I = STAGES.find(s=>s.id===activeTab)?.icon||MapPin; return <I size={20}/> })()}
// // //              </div>
// // //              <div>
// // //                <h3 className="font-bold text-lg text-white">Status: {STAGES.find(s=>s.id===activeTab)?.label}</h3>
// // //                {isTabCompleted && <span className="text-xs text-green-400 font-medium">✅ Completed</span>}
// // //                {isTabLocked && <span className="text-xs text-zinc-600 font-medium">🔒 Locked (Complete previous steps first)</span>}
// // //              </div>
// // //           </div>

// // //           {/* READ-ONLY VIEW FOR PAST STAGES */}
// // //           {isTabCompleted && activeTab !== 'RESOLVED' && (
// // //             <div className="text-zinc-500 text-sm text-center py-4">
// // //               This stage is complete. <br/>Move to the next stage to update progress.
// // //             </div>
// // //           )}

// // //           {/* 1. ASSIGNED FORM */}
// // //           {!isTabCompleted && activeTab === 'ASSIGNED' && (
// // //             <div className="space-y-4">
// // //               <input type="text" value={officerName} onChange={(e) => setOfficerName(e.target.value)} placeholder="Officer Name..." className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white outline-none" />
// // //               <button onClick={saveAssignment} disabled={submitting} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition">
// // //                 {submitting ? "Saving..." : "Confirm Assignment"}
// // //               </button>
// // //             </div>
// // //           )}

// // //           {/* 2. INSPECTION FORM */}
// // //           {!isTabCompleted && activeTab === 'INSPECTION' && (
// // //             <div className="space-y-4">
// // //                <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Site observations..." className="w-full h-32 bg-black border border-zinc-700 rounded-xl p-3 text-white outline-none resize-none" />
// // //                <button onClick={() => saveStageUpdate('INSPECTION')} disabled={submitting} className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition">Start Inspection</button>
// // //             </div>
// // //           )}

// // //           {/* 3. WORK FORM */}
// // //           {!isTabCompleted && activeTab === 'WORK_IN_PROGRESS' && (
// // //             <div className="space-y-4">
// // //                <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Work details..." className="w-full h-32 bg-black border border-zinc-700 rounded-xl p-3 text-white outline-none resize-none" />
// // //                <button onClick={() => saveStageUpdate('WORK_IN_PROGRESS')} disabled={submitting} className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition">Start Work</button>
// // //             </div>
// // //           )}

// // //           {/* 4. RESOLVED FORM */}
// // //           {(!isTabCompleted || activeTab === 'RESOLVED') && activeTab === 'RESOLVED' && c.currentStatus !== 'RESOLVED' && (
// // //             <div className="space-y-5">
// // //               <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Final resolution notes..." className="w-full h-24 bg-black border border-zinc-700 rounded-xl p-3 text-white outline-none resize-none" />
// // //               <div className="relative group h-28 border-2 border-dashed border-zinc-700 rounded-xl flex items-center justify-center">
// // //                   <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
// // //                   {file ? <span className="text-green-400 flex items-center gap-2"><CheckCircle2/> {file.name}</span> : <span className="text-zinc-500 flex items-center gap-2"><Camera/> Upload Proof</span>}
// // //               </div>
// // //               <button onClick={resolveJob} disabled={submitting} className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition">
// // //                 {submitting ? "Closing..." : "Close Ticket"}
// // //               </button>
// // //             </div>
// // //           )}

// // //           {/* COMPLETED MSG */}
// // //           {c.currentStatus === 'RESOLVED' && activeTab === 'RESOLVED' && (
// // //              <div className="text-center p-6 bg-green-900/20 rounded-xl border border-green-900 text-green-400 font-medium">
// // //                ✅ This ticket is closed.
// // //              </div>
// // //           )}

// // //         </div>
// // //       </div>
// // //     </main>
// // //   );
// // // }


// // "use client";

// // import { useEffect, useState } from "react";
// // import { useParams, useRouter } from "next/navigation";
// // import Link from "next/link";
// // import {
// //   ArrowLeft, MapPin, Search, Hammer, CheckCircle2,
// //   Camera, Check, User, Clock, FileText,
// //   X, Plus
// // } from "lucide-react";

// // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // const STAGES = [
// //   { id: 'ASSIGNED', label: 'Assigned', icon: MapPin },
// //   { id: 'INSPECTION', label: 'Inspection', icon: Search },
// //   { id: 'WORK_IN_PROGRESS', label: 'Work', icon: Hammer },
// //   { id: 'RESOLVED', label: 'Resolved', icon: CheckCircle2 },
// // ];

// // export default function OfficerResolvePage() {
// //   const { id } = useParams();
// //   const router = useRouter();

// //   const [c, setComplaint] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [activeTab, setActiveTab] = useState<string>("");

// //   // Form Data
// //   const [officerName, setOfficerName] = useState("");
// //   const [note, setNote] = useState("");
// //   const [files, setFiles] = useState<File[]>([]); // ✅ Changed to array
// //   const [submitting, setSubmitting] = useState(false);

// //   // useEffect(() => {
// //   //   const token = localStorage.getItem("civic_token");
// //   //   if (!token) return router.push("/login");

// //   //   fetch(`${API}/complaints/${id}`, {
// //   //     headers: { Authorization: `Bearer ${token}` }
// //   //   })
// //   //   .then(res => {
// //   //       if (!res.ok) throw new Error("Failed");
// //   //       return res.json();
// //   //   })
// //   //   .then(data => {
// //   //     setComplaint(data);
// //   //     // Smart Switcher
// //   //     if (['CREATED', 'ACKNOWLEDGED'].includes(data.currentStatus)) setActiveTab('ASSIGNED');
// //   //     else if (data.currentStatus === 'ASSIGNED') setActiveTab('INSPECTION');
// //   //     else if (data.currentStatus === 'INSPECTION') setActiveTab('WORK_IN_PROGRESS');
// //   //     else if (data.currentStatus === 'WORK_IN_PROGRESS') setActiveTab('RESOLVED');
// //   //     else setActiveTab('RESOLVED');

// //   //     setLoading(false);
// //   //   })
// //   //   .catch(() => router.push("/officer"));
// //   // }, [id, router]);

// //   // ⚡️ HELPER: Determines the "Active" tab based on current status
// //   function getTabForStatus(status: string) {
// //     if (['CREATED', 'ACKNOWLEDGED'].includes(status)) return 'ASSIGNED';
// //     if (status === 'ASSIGNED') return 'INSPECTION';
// //     if (status === 'INSPECTION') return 'WORK_IN_PROGRESS';
// //     // If working, go to Resolved tab to finish it
// //     if (status === 'WORK_IN_PROGRESS') return 'RESOLVED';
// //     // If resolved, stay on Resolved
// //     return 'RESOLVED';
// //   }

// //   useEffect(() => {
// //     const token = localStorage.getItem("civic_token");
// //     if (!token) return router.push("/login");

// //     fetch(`${API}/complaints/${id}`, {
// //       headers: { Authorization: `Bearer ${token}` }
// //     })
// //       .then(res => {
// //         if (!res.ok) throw new Error("Failed");
// //         return res.json();
// //       })
// //       .then(data => {
// //         setComplaint(data);
// //         // ✅ FIX: Use the helper to jump to the correct tab
// //         setActiveTab(getTabForStatus(data.currentStatus));
// //         setLoading(false);
// //       })
// //       .catch(() => router.push("/officer"));
// //   }, [id, router]);

// //   // Helpers
// //   function fileToBase64(file: File): Promise<string> {
// //     return new Promise((resolve, reject) => {
// //       const reader = new FileReader();
// //       reader.onload = () => resolve(String(reader.result));
// //       reader.onerror = reject;
// //       reader.readAsDataURL(file);
// //     });
// //   }

// //   // async function postAction(url: string, method = "POST", body: any) {
// //   //   const token = localStorage.getItem("civic_token");
// //   //   const res = await fetch(`${API}${url}`, {
// //   //     method,
// //   //     headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
// //   //     body: JSON.stringify(body),
// //   //   });
// //   //   if (!res.ok) {
// //   //     const err = await res.json();
// //   //     throw new Error(err.message || "Request failed");
// //   //   }
// //   //   return res.json();
// //   // }

// //   async function postAction(url: string, method = "POST", body: any) {
// //     const token = localStorage.getItem("civic_token");

// //     // ✅ FIX: Auto-detect FormData to avoid setting Content-Type manually
// //     const headers: any = { "Authorization": `Bearer ${token}` };
// //     if (!(body instanceof FormData)) {
// //       headers["Content-Type"] = "application/json";
// //     }

// //     const res = await fetch(`${API}${url}`, {
// //       method,
// //       headers,
// //       body: body instanceof FormData ? body : JSON.stringify(body),
// //     });
// //     if (!res.ok) {
// //       const err = await res.json();
// //       throw new Error(err.message || "Request failed");
// //     }
// //     return res.json();
// //   }
// //   // ... rest of function stays the same

// //   // --- ACTIONS ---
// //   // async function saveAssignment() {
// //   //   if (!confirm("Confirm assignment?")) return;
// //   //   setSubmitting(true);
// //   //   try {
// //   //     await postAction(`/complaints/${id}/assign`, "PATCH", { officerName });
// //   //     alert("✅ Assigned Successfully");
// //   //     window.location.reload();
// //   //   } catch (e: any) {
// //   //     alert("Error: " + e.message);
// //   //   } finally {
// //   //     setSubmitting(false);
// //   //   }
// //   // }

// //   async function saveAssignment() {
// //     // ✅ FIX: Validation
// //     if (!officerName.trim()) return alert("Please enter Officer Name");

// //     if (!confirm("Confirm assignment?")) return;
// //     setSubmitting(true);
// //     try {
// //       await postAction(`/complaints/${id}/assign`, "PATCH", { officerName });
// //       alert("✅ Assigned Successfully");
// //       window.location.reload();
// //     } catch (e: any) {
// //       alert("Error: " + e.message);
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   }

// //   async function saveStageUpdate(targetStatus: string) {
// //     if (!confirm(`Advance to ${targetStatus}?`)) return;
// //     setSubmitting(true);
// //     try {
// //       await postAction(`/complaints/${id}/advance`, "POST", { nextStatus: targetStatus, note });
// //       alert("✅ Status Updated");
// //       window.location.reload();
// //     } catch (e: any) {
// //       alert("Error: " + e.message);
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   }

// //   // async function resolveJob() {
// //   //   if (!file) return alert("📸 Photo required!");
// //   //   setSubmitting(true);
// //   //   try {
// //   //     const fullBase64 = await fileToBase64(file);
// //   //     const mediaBase64 = fullBase64.split(",")[1];

// //   //     let lat = c.lat, lng = c.lng;
// //   //     try {
// //   //       const pos: any = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej, { timeout: 5000 }));
// //   //       lat = pos.coords.latitude;
// //   //       lng = pos.coords.longitude;
// //   //     } catch (e) { console.warn("GPS failed, using default"); }

// //   //     await postAction(`/complaints/${id}/resolve`, "POST", { lat, lng, mediaBase64, note });
// //   //     alert("🎉 Job Closed!");
// //   //     router.push("/officer");
// //   //   } catch (e: any) {
// //   //     alert("Error: " + e.message);
// //   //   } finally {
// //   //     setSubmitting(false);
// //   //   }
// //   // }

// //   // async function resolveJob() {
// //   //   if (files.length === 0) return alert("📸 At least one photo required!");
// //   //   setSubmitting(true);
// //   //   try {
// //   //     let lat = c.lat, lng = c.lng;
// //   //     try {
// //   //       const pos: any = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej, { timeout: 5000 }));
// //   //       lat = pos.coords.latitude;
// //   //       lng = pos.coords.longitude;
// //   //     } catch (e) { console.warn("GPS failed, using default"); }

// //   //     // ✅ FIX: Use FormData for files
// //   //     const formData = new FormData();
// //   //     formData.append("lat", String(lat));
// //   //     formData.append("lng", String(lng));
// //   //     formData.append("note", note);

// //   //     files.forEach((file) => {
// //   //       formData.append("images", file); // 'images' matches backend interceptor
// //   //     });

// //   //     await postAction(`/complaints/${id}/resolve`, "POST", formData);

// //   //     alert("🎉 Job Closed!");
// //   //     router.push("/officer");
// //   //   } catch (e: any) {
// //   //     alert("Error: " + e.message);
// //   //   } finally {
// //   //     setSubmitting(false);
// //   //   }
// //   // }

// //   async function resolveJob() {
// //     if (files.length === 0) return alert("📸 At least one photo required!");
// //     setSubmitting(true);
    
// //     try {
// //       // 1. Initialize variables (Undefined initially to force GPS)
// //       let lat = null;
// //       let lng = null;

// //       try {
// //         const pos: any = await new Promise((resolve, reject) => {
// //           navigator.geolocation.getCurrentPosition(resolve, reject, {
// //             enableHighAccuracy: true, // Request best possible GPS
// //             timeout: 10000,           // Wait up to 10 seconds
// //             maximumAge: 0             // Do not use cached location
// //           });
// //         });
// //         lat = pos.coords.latitude;
// //         lng = pos.coords.longitude;
// //       } catch (e) {
// //         // ❌ ERROR: GPS Failed - STOP the process
// //         setSubmitting(false);
// //         return alert("⚠️ Location Access Required!\n\nPlease enable GPS permissions to close this ticket.");
// //       }

// //       // 2. Prepare Data
// //       const formData = new FormData();
// //       formData.append("lat", String(lat));
// //       formData.append("lng", String(lng));
// //       formData.append("note", note);
      
// //       files.forEach((file) => {
// //         formData.append("images", file);
// //       });

// //       await postAction(`/complaints/${id}/resolve`, "POST", formData);
      
// //       alert("🎉 Job Closed!");
// //       router.push("/officer");
// //     } catch (e: any) {
// //       alert("Error: " + e.message);
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   }

// //   // --- HISTORY FINDER ---
// //   // Looks through the event log to find what happened in previous stages
// //   function getStageHistory(stageId: string) {
// //     if (!c || !c.events) return null;

// //     // Map Tab ID to Event Type
// //     const typeMap: Record<string, string> = {
// //       'ASSIGNED': 'ASSIGNED',
// //       'INSPECTION': 'INSPECTION_STARTED',
// //       'WORK_IN_PROGRESS': 'WORK_STARTED',
// //       'RESOLVED': 'RESOLVED'
// //     };

// //     const targetType = typeMap[stageId];
// //     // Find the latest event of this type
// //     return c.events.filter((e: any) => e.type === targetType).pop();
// //   }

// //   if (loading || !c) return <div className="min-h-screen bg-black text-white p-10">Loading...</div>;

// //   const currentStageIndex = STAGES.findIndex(s => s.id === c.currentStatus);
// //   const activeTabIndex = STAGES.findIndex(s => s.id === activeTab);
// //   const progressPercent = (Math.max(0, currentStageIndex) / (STAGES.length - 1)) * 100;

// //   const isTabCompleted = activeTabIndex <= currentStageIndex;
// //   const isTabLocked = activeTabIndex > currentStageIndex + 1;
// //   const historyEvent = isTabCompleted ? getStageHistory(activeTab) : null;

// //   // ✅ 1. Handle File Appending (Add More)
// //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files.length > 0) {
// //       const newFiles = Array.from(e.target.files);
// //       setFiles(prev => {
// //         // Combine old + new, then slice to max 5
// //         const combined = [...prev, ...newFiles];
// //         if (combined.length > 5) {
// //           alert("Maximum 5 photos allowed. First 5 kept.");
// //           return combined.slice(0, 5);
// //         }
// //         return combined;
// //       });
// //       // Reset input value so the same file can be selected again if needed
// //       e.target.value = "";
// //     }
// //   };

// //   // ✅ 2. Remove File
// //   const removeFile = (index: number) => {
// //     setFiles(prev => prev.filter((_, i) => i !== index));
// //   };

// //   return (
// //     <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">
// //       <nav className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
// //         <Link href="/officer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
// //           <ArrowLeft size={18} /> <span className="font-medium text-sm">Back</span>
// //         </Link>
// //         <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{c.id.slice(0, 8)}</div>
// //       </nav>

// //       <div className="max-w-xl mx-auto p-6 space-y-8">
// //         <header>
// //           <h1 className="text-2xl font-bold text-white mb-2">{c.title}</h1>
// //           <div className="flex items-center gap-2 text-sm text-zinc-400">
// //             <span className="px-2 py-0.5 rounded bg-blue-900/30 text-blue-400 text-xs font-bold border border-blue-800">{c.category}</span>
// //             <span>• {c.ward?.name}</span>
// //           </div>
// //         </header>

// //         {/* STEPPER */}
// //         <div className="relative pt-2 pb-6 px-2">
// //           <div className="absolute top-5 left-2 right-2 h-1 bg-zinc-800 rounded-full" />
// //           <div className="absolute top-5 left-2 h-1 rounded-full transition-all duration-700 bg-gradient-to-r from-blue-600 to-green-500" style={{ width: `${progressPercent}%` }} />
// //           <div className="relative flex justify-between z-10">
// //             {STAGES.map((stage, idx) => {
// //               const isCompleted = idx <= currentStageIndex;
// //               const isActive = stage.id === activeTab;
// //               const isLocked = idx > currentStageIndex + 1;

// //               return (
// //                 <button
// //                   key={stage.id}
// //                   disabled={isLocked}
// //                   onClick={() => { if (!isLocked) { setActiveTab(stage.id); setNote(""); } }}
// //                   className={`flex flex-col items-center gap-2 group outline-none transition-all ${isLocked ? 'opacity-40 cursor-not-allowed grayscale' : 'cursor-pointer'}`}
// //                 >
// //                   <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${isActive ? 'scale-110 border-blue-400 bg-zinc-900 text-white' : isCompleted ? 'bg-zinc-900 border-green-500 text-green-500' : 'bg-black border-zinc-800 text-zinc-700'}`}>
// //                     <stage.icon size={16} strokeWidth={isActive ? 2.5 : 2} />
// //                   </div>
// //                   <div className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-zinc-600'}`}>{stage.label}</div>
// //                 </button>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* CONTENT AREA */}
// //         <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
// //           <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
// //             <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
// //               {(() => { const I = STAGES.find(s => s.id === activeTab)?.icon || MapPin; return <I size={20} /> })()}
// //             </div>
// //             <div>
// //               <h3 className="font-bold text-lg text-white">{STAGES.find(s => s.id === activeTab)?.label} Phase</h3>
// //               {isTabCompleted && <span className="text-xs text-green-400 font-medium flex items-center gap-1"><Check size={12} /> Completed</span>}
// //               {isTabLocked && <span className="text-xs text-zinc-600 font-medium">🔒 Locked</span>}
// //             </div>
// //           </div>

// //           {/* yaha se neech tak 1 section hai */}

// //           {/* --- READ ONLY HISTORY VIEW --- */}
// //           {/* {isTabCompleted && historyEvent && (
// //             <div className="space-y-4 animate-in fade-in duration-300">
// //               <div className="bg-black/40 border border-zinc-800 rounded-xl p-4 space-y-3"> */}
// //           {/* Timestamp */}
// //           {/* <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
// //                   <Clock size={12} />
// //                   Completed on {new Date(historyEvent.createdAt).toLocaleString()}
// //                 </div> */}

// //           {/* Notes content */}
// //           {/* <div className="flex gap-3">
// //                   <div className="mt-0.5"><FileText size={16} className="text-zinc-400" /></div>
// //                   <div className="text-sm text-zinc-200">
// //                     {historyEvent.data?.note || historyEvent.data?.reason || "No notes provided."}
// //                   </div>
// //                 </div> */}

// //           {/* Proof Image (Only for Resolved) */}
// //           {/* {historyEvent.data?.proofUrl && (
// //                   <div className="mt-4">
// //                     <p className="text-xs font-bold text-zinc-500 uppercase mb-2">Proof of Work</p>
// //                     <img src={`${API}${historyEvent.data.proofUrl}`} alt="Proof" className="rounded-lg border border-zinc-700 w-full h-48 object-cover" />
// //                   </div>
// //                 )}
// //               </div>

// //               {activeTab !== 'RESOLVED' && (
// //                 <div className="text-center">
// //                   <button onClick={() => {
// //                     // Logic to jump to current active tab
// //                     const current = STAGES.find(s => s.id === c.currentStatus);
// //                     if (current) setActiveTab(current.id);
// //                   }} className="text-xs text-blue-400 hover:text-blue-300 underline">
// //                     Return to Active Task &rarr;
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           )} */}

// //           {/* yaha tak secion ka end hai */}

// //           {/* --- READ ONLY HISTORY VIEW --- */}
// //           {/* ✅ FIX: Show this block if tab is completed, even if historyEvent is missing */}
// //           {isTabCompleted && (
// //             <div className="space-y-4 animate-in fade-in duration-300">
// //               <div className="bg-black/40 border border-zinc-800 rounded-xl p-4 space-y-3">
// //                 {historyEvent ? (
// //                   <>
// //                     <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
// //                       <Clock size={12} />
// //                       Completed on {new Date(historyEvent.createdAt).toLocaleString()}
// //                     </div>

// //                     <div className="flex gap-3">
// //                       <div className="mt-0.5"><FileText size={16} className="text-zinc-400" /></div>
// //                       <div className="text-sm text-zinc-200">
// //                         {historyEvent.data?.note || historyEvent.data?.reason || "No notes provided."}
// //                       </div>
// //                     </div>

// //                     {/* {historyEvent.data?.proofUrl && (
// //                       <div className="mt-4">
// //                         <p className="text-xs font-bold text-zinc-500 uppercase mb-2">Proof of Work</p>
// //                         <img src={`${API}${historyEvent.data.proofUrl}`} alt="Proof" className="rounded-lg border border-zinc-700 w-full h-48 object-cover" />
// //                       </div>
// //                     )} */}
// //                     {/* ✅ UPDATED: Support Multiple Proof Images */}
// //                     {(historyEvent.data?.proofUrls?.length > 0 || historyEvent.data?.proofUrl) && (
// //                       <div className="mt-4">
// //                         <p className="text-xs font-bold text-zinc-500 uppercase mb-2">Proof of Work</p>
// //                         <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
// //                            {/* Handle both new Array format and old Single format */}
// //                            {(historyEvent.data.proofUrls || [historyEvent.data.proofUrl]).map((url: string, idx: number) => (
// //                               <img 
// //                                 key={idx} 
// //                                 src={`${API}${url}`} 
// //                                 alt={`Proof ${idx + 1}`} 
// //                                 className="rounded-lg border border-zinc-700 w-32 h-24 object-cover shrink-0" 
// //                               />
// //                            ))}
// //                         </div>
// //                       </div>
// //                     )}
// //                   </>
// //                 ) : (
// //                   /* ✅ FIX: Fallback if history is missing but stage is done */
// //                   <div className="text-center py-4">
// //                     <p className="text-zinc-500 text-sm">Step completed (Details unavailable)</p>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* ✅ FIX: Button is now visible regardless of historyEvent */}
// //               {activeTab !== getTabForStatus(c.currentStatus) && (
// //                 <div className="text-center">
// //                   <button onClick={() => {
// //                     // ✅ FIX: Use the helper to jump to the correct active tab
// //                     setActiveTab(getTabForStatus(c.currentStatus));
// //                   }} className="text-xs text-blue-400 hover:text-blue-300 underline cursor-pointer">
// //                     Return to Active Task &rarr;
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           )}

// //           {/* --- ACTIVE FORMS (Only show if NOT completed) --- */}
// //           {!isTabCompleted && !isTabLocked && (
// //             <>
// //               {/* 1. ASSIGNED FORM */}
// //               {activeTab === 'ASSIGNED' && (
// //                 <div className="space-y-4">
// //                   <input type="text" value={officerName} onChange={(e) => setOfficerName(e.target.value)} placeholder="Officer Name..." className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white outline-none" />
// //                   <button onClick={saveAssignment} disabled={submitting} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition">
// //                     {submitting ? "Saving..." : "Confirm Assignment"}
// //                   </button>
// //                 </div>
// //               )}

// //               {/* 2. INSPECTION FORM */}
// //               {activeTab === 'INSPECTION' && (
// //                 <div className="space-y-4">
// //                   <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Site observations..." className="w-full h-32 bg-black border border-zinc-700 rounded-xl p-3 text-white outline-none resize-none" />
// //                   <button onClick={() => saveStageUpdate('INSPECTION')} disabled={submitting} className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition">Start Inspection</button>
// //                 </div>
// //               )}

// //               {/* 3. WORK FORM */}
// //               {activeTab === 'WORK_IN_PROGRESS' && (
// //                 <div className="space-y-4">
// //                   <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Work details..." className="w-full h-32 bg-black border border-zinc-700 rounded-xl p-3 text-white outline-none resize-none" />
// //                   <button onClick={() => saveStageUpdate('WORK_IN_PROGRESS')} disabled={submitting} className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition">Start Work</button>
// //                 </div>
// //               )}

// //               {/* 4. RESOLVED FORM */}
// //               {/* {activeTab === 'RESOLVED' && (
// //                 <div className="space-y-5">
// //                   <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Final resolution notes..." className="w-full h-24 bg-black border border-zinc-700 rounded-xl p-3 text-white outline-none resize-none" /> */}
// //               {/* <div className="relative group h-28 border-2 border-dashed border-zinc-700 rounded-xl flex items-center justify-center">
// //                     <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
// //                     {file ? <span className="text-green-400 flex items-center gap-2"><CheckCircle2 /> {file.name}</span> : <span className="text-zinc-500 flex items-center gap-2"><Camera /> Upload Proof</span>}
// //                   </div> */}
// //               {/* <div className="relative group h-32 border-2 border-dashed border-zinc-700 rounded-xl flex flex-col items-center justify-center bg-black/30 hover:bg-black/50 transition">
// //                     <input
// //                       type="file"
// //                       multiple // ✅ Allow Multiple
// //                       accept="image/*"
// //                       onChange={(e) => e.target.files && setFiles(Array.from(e.target.files).slice(0, 5))}
// //                       className="absolute inset-0 opacity-0 cursor-pointer z-10"
// //                     />
// //                     <Camera className="text-zinc-500 mb-2" />
// //                     {files.length > 0 ? (
// //                       <span className="text-green-400 font-medium text-sm">{files.length} images selected</span>
// //                     ) : (
// //                       <span className="text-zinc-500 text-sm">Click to upload proofs (Max 5)</span>
// //                     )}
// //                   </div> */}

// //               {/* ✅ Add Preview Row */}
// //               {/* {files.length > 0 && (
// //                     <div className="flex gap-2 overflow-x-auto pb-2">
// //                       {files.map((f, i) => (
// //                         <div key={i} className="relative w-16 h-16 shrink-0 border border-zinc-700 rounded-lg overflow-hidden">
// //                           <img src={URL.createObjectURL(f)} className="w-full h-full object-cover" alt="preview" />
// //                         </div>
// //                       ))}
// //                     </div>
// //                   )}
// //                   <button onClick={resolveJob} disabled={submitting} className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition">
// //                     {submitting ? "Closing..." : "Close Ticket"}
// //                   </button>
// //                 </div>
// //               )} */}

// //               {activeTab === 'RESOLVED' && (
// //                 <div className="space-y-5">
// //                   <textarea
// //                     value={note}
// //                     onChange={(e) => setNote(e.target.value)}
// //                     placeholder="Final resolution notes..."
// //                     className="w-full h-24 bg-black border border-zinc-700 rounded-xl p-3 text-white outline-none resize-none"
// //                   />

// //                   {/* ✅ UPDATED FILE SECTION */}
// //                   <div className="space-y-2">
// //                     <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

// //                       {/* 1. Preview Existing Files */}
// //                       {files.map((f, i) => (
// //                         <div key={i} className="relative w-24 h-24 shrink-0 border border-zinc-700 rounded-xl overflow-hidden group">
// //                           <img src={URL.createObjectURL(f)} className="w-full h-full object-cover" alt="preview" />
// //                           <button
// //                             onClick={() => removeFile(i)}
// //                             className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 hover:bg-red-600 transition"
// //                           >
// //                             <X size={12} />
// //                           </button>
// //                         </div>
// //                       ))}

// //                       {/* 2. Add Button (Only visible if count < 5) */}
// //                       {files.length < 5 && (
// //                         <div className="relative w-24 h-24 shrink-0 border-2 border-dashed border-zinc-700 rounded-xl flex flex-col items-center justify-center bg-black/30 hover:bg-zinc-900/50 transition cursor-pointer">
// //                           <input
// //                             type="file"
// //                             multiple
// //                             accept="image/*"
// //                             onChange={handleFileChange}
// //                             className="absolute inset-0 opacity-0 cursor-pointer z-10"
// //                           />
// //                           <Plus size={24} className="text-zinc-500 mb-1" />
// //                           <span className="text-[10px] text-zinc-500 font-medium">
// //                             {files.length === 0 ? "Upload" : "Add More"}
// //                           </span>
// //                         </div>
// //                       )}
// //                     </div>

// //                     {/* Counter */}
// //                     <div className="text-right text-xs text-zinc-500">
// //                       {files.length}/5 Photos Selected
// //                     </div>
// //                   </div>

// //                   <button onClick={resolveJob} disabled={submitting} className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition">
// //                     {submitting ? "Closing..." : "Close Ticket"}
// //                   </button>
// //                 </div>
// //               )}

// //             </>
// //           )}

// //           {/* COMPLETED MSG */}
// //           {c.currentStatus === 'RESOLVED' && activeTab === 'RESOLVED' && !historyEvent && (
// //             <div className="text-center p-6 bg-green-900/20 rounded-xl border border-green-900 text-green-400 font-medium">
// //               ✅ This ticket is closed.
// //             </div>
// //           )}

// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import Link from "next/link";
// import { 
//   ArrowLeft, MapPin, Search, Hammer, CheckCircle2, 
//   Camera, Check, Clock, FileText, X, Plus, LocateFixed 
// } from "lucide-react";

// const API = process.env.NEXT_PUBLIC_API_BASE!;

// const STAGES = [
//   { id: 'ASSIGNED', label: 'Assigned', icon: MapPin },
//   { id: 'INSPECTION', label: 'Inspection', icon: Search },
//   { id: 'WORK_IN_PROGRESS', label: 'Work', icon: Hammer },
//   { id: 'RESOLVED', label: 'Resolved', icon: CheckCircle2 },
// ];

// export default function OfficerResolvePage() {
//   const { id } = useParams();
//   const router = useRouter();
  
//   const [c, setComplaint] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<string>(""); 

//   // Form Data
//   const [officerName, setOfficerName] = useState("");
//   const [note, setNote] = useState("");
//   const [files, setFiles] = useState<File[]>([]); 
//   const [submitting, setSubmitting] = useState(false);

//   // ✅ NEW: Location State
//   const [gps, setGps] = useState<{lat: number, lng: number} | null>(null);
//   const [locStatus, setLocStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

//   function getTabForStatus(status: string) {
//     if (['CREATED', 'ACKNOWLEDGED'].includes(status)) return 'ASSIGNED';
//     if (status === 'ASSIGNED') return 'INSPECTION';
//     if (status === 'INSPECTION') return 'WORK_IN_PROGRESS';
//     if (status === 'WORK_IN_PROGRESS') return 'RESOLVED';
//     return 'RESOLVED';
//   }

//   useEffect(() => {
//     const token = localStorage.getItem("civic_token");
//     if (!token) return router.push("/login");
    
//     fetch(`${API}/complaints/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(res => res.json())
//     .then(data => {
//       setComplaint(data);
//       setActiveTab(getTabForStatus(data.currentStatus));
//       setLoading(false);
//     })
//     .catch(() => router.push("/officer"));
//   }, [id, router]);

//   async function postAction(url: string, method = "POST", body: any) {
//     const token = localStorage.getItem("civic_token");
//     const headers: any = { "Authorization": `Bearer ${token}` };
//     if (!(body instanceof FormData)) headers["Content-Type"] = "application/json";

//     const res = await fetch(`${API}${url}`, { method, headers, body: body instanceof FormData ? body : JSON.stringify(body) });
//     if (!res.ok) {
//       const err = await res.json();
//       throw new Error(err.message || "Request failed");
//     }
//     return res.json();
//   }

//   // ✅ NEW: Explicit Location Button Handler
//   const handleGetLocation = () => {
//     setLocStatus("loading");
//     if (!navigator.geolocation) {
//       alert("Geolocation is not supported by your browser");
//       setLocStatus("error");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         setGps({
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude
//         });
//         setLocStatus("success");
//       },
//       (err) => {
//         console.error(err);
//         alert("⚠️ GPS Failed: " + err.message + "\nMake sure location is enabled!");
//         setLocStatus("error");
//       },
//       { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
//     );
//   };

//   async function resolveJob() {
//     if (files.length === 0) return alert("📸 Photo required!");
//     if (!gps) return alert("📍 Location required! Click 'Tag Location'.");

//     setSubmitting(true);
//     try {
//       const formData = new FormData();
//       formData.append("lat", String(gps.lat)); // Use fetched GPS
//       formData.append("lng", String(gps.lng));
//       formData.append("note", note);
      
//       files.forEach((file) => formData.append("images", file));

//       await postAction(`/complaints/${id}/resolve`, "POST", formData);
//       alert("🎉 Job Closed!");
//       router.push("/officer");
//     } catch (e: any) {
//       alert("Error: " + e.message);
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   // File Handlers...
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//         const newFiles = Array.from(e.target.files);
//         setFiles(prev => [...prev, ...newFiles].slice(0, 5));
//         e.target.value = ""; 
//     }
//   };
//   const removeFile = (index: number) => setFiles(prev => prev.filter((_, i) => i !== index));

//   // --- HISTORY ---
//   function getStageHistory(stageId: string) {
//     if (!c || !c.events) return null;
//     const typeMap: Record<string, string> = {
//       'ASSIGNED': 'ASSIGNED', 'INSPECTION': 'INSPECTION_STARTED', 
//       'WORK_IN_PROGRESS': 'WORK_STARTED', 'RESOLVED': 'RESOLVED'
//     };
//     return c.events.filter((e: any) => e.type === typeMap[stageId]).pop(); 
//   }

//   if (loading || !c) return <div className="min-h-screen bg-black text-white p-10">Loading...</div>;

//   const currentStageIndex = STAGES.findIndex(s => s.id === c.currentStatus);
//   const activeTabIndex = STAGES.findIndex(s => s.id === activeTab);
//   const progressPercent = (Math.max(0, currentStageIndex) / (STAGES.length - 1)) * 100;
  
//   const isTabCompleted = activeTabIndex <= currentStageIndex;
//   const showHistory = (isTabCompleted && activeTab !== getTabForStatus(c.currentStatus)) || (activeTab === 'RESOLVED' && c.currentStatus === 'RESOLVED');
//   const historyEvent = showHistory ? getStageHistory(activeTab) : null;

//   return (
//     <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">
//       <nav className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
//         <Link href="/officer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
//           <ArrowLeft size={18} /> <span className="font-medium text-sm">Back</span>
//         </Link>
//         <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{c.id.slice(0, 8)}</div>
//       </nav>

//       <div className="max-w-xl mx-auto p-6 space-y-8">
//         {/* HEADER & STEPPER (Kept same as before) */}
//         <header>
//           <h1 className="text-2xl font-bold text-white mb-2">{c.title}</h1>
//           <div className="flex items-center gap-2 text-sm text-zinc-400">
//             <span className="px-2 py-0.5 rounded bg-blue-900/30 text-blue-400 text-xs font-bold border border-blue-800">{c.category}</span>
//             <span>• {c.ward?.name}</span>
//           </div>
//         </header>

//         <div className="relative pt-2 pb-6 px-2">
//           <div className="absolute top-5 left-2 right-2 h-1 bg-zinc-800 rounded-full" />
//           <div className="absolute top-5 left-2 h-1 rounded-full transition-all duration-700 bg-gradient-to-r from-blue-600 to-green-500" style={{ width: `${progressPercent}%` }} />
//           <div className="relative flex justify-between z-10">
//             {STAGES.map((stage, idx) => {
//               const isCompleted = idx <= currentStageIndex;
//               const isActive = stage.id === activeTab;
//               return (
//                 <button 
//                   key={stage.id} 
//                   disabled={idx > currentStageIndex + 1}
//                   onClick={() => { if (idx <= currentStageIndex + 1) setActiveTab(stage.id); }}
//                   className={`flex flex-col items-center gap-2 group outline-none transition-all ${idx > currentStageIndex + 1 ? 'opacity-40' : ''}`}
//                 >
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${isActive ? 'scale-110 border-blue-400 bg-zinc-900 text-white' : isCompleted ? 'bg-zinc-900 border-green-500 text-green-500' : 'bg-black border-zinc-800 text-zinc-700'}`}>
//                     <stage.icon size={16} strokeWidth={isActive ? 2.5 : 2} />
//                   </div>
//                   <div className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-zinc-600'}`}>{stage.label}</div>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* CONTENT AREA */}
//         <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
          
//           {/* HISTORY VIEW (Same as before) */}
//           {showHistory && historyEvent && (
//             <div className="space-y-4">
//                <div className="bg-black/40 border border-zinc-800 rounded-xl p-4 space-y-3">
//                   <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
//                      <Clock size={12} /> Completed on {new Date(historyEvent.createdAt).toLocaleString()}
//                   </div>
//                   <div className="text-sm text-zinc-200">{historyEvent.data?.note}</div>
//                   {/* PROOF IMAGES */}
//                   {(historyEvent.data?.proofUrls || [historyEvent.data?.proofUrl]).filter(Boolean).length > 0 && (
//                       <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mt-3">
//                         {(historyEvent.data.proofUrls || [historyEvent.data.proofUrl]).map((url: string, idx: number) => (
//                           <img key={idx} src={`${API}${url}`} className="rounded-lg border border-zinc-700 w-24 h-24 object-cover shrink-0" />
//                         ))}
//                       </div>
//                   )}
//                </div>
//                {activeTab !== getTabForStatus(c.currentStatus) && (
//                   <button onClick={() => setActiveTab(getTabForStatus(c.currentStatus))} className="w-full text-center text-xs text-blue-400 hover:text-blue-300 underline">
//                       Return to Active Task &rarr;
//                   </button>
//                )}
//             </div>
//           )}

//           {/* ACTIVE FORM */}
//           {!showHistory && (
//              <>
//                 {/* ... Assigned / Inspection / Work Forms omitted for brevity (same as before) ... */}
//                 {activeTab === 'ASSIGNED' && (
//                   <div className="space-y-4">
//                     <input type="text" value={officerName} onChange={(e) => setOfficerName(e.target.value)} placeholder="Officer Name..." className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white outline-none" />
//                     <button onClick={async () => {
//                        if(!officerName) return alert("Name required");
//                        await postAction(`/complaints/${id}/assign`, "PATCH", { officerName });
//                        window.location.reload();
//                     }} className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl">Confirm Assignment</button>
//                   </div>
//                 )}

//                 {activeTab === 'INSPECTION' && (
//                    <div className="space-y-4">
//                      <textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Observations..." className="w-full h-32 bg-black border border-zinc-700 rounded-xl p-3 text-white"/>
//                      <button onClick={async () => {
//                         await postAction(`/complaints/${id}/advance`, "POST", { nextStatus: 'INSPECTION', note });
//                         window.location.reload();
//                      }} className="w-full py-3 bg-white text-black font-bold rounded-xl">Start Inspection</button>
//                    </div>
//                 )}
                
//                 {activeTab === 'WORK_IN_PROGRESS' && (
//                    <div className="space-y-4">
//                      <textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Work details..." className="w-full h-32 bg-black border border-zinc-700 rounded-xl p-3 text-white"/>
//                      <button onClick={async () => {
//                         await postAction(`/complaints/${id}/advance`, "POST", { nextStatus: 'WORK_IN_PROGRESS', note });
//                         window.location.reload();
//                      }} className="w-full py-3 bg-amber-600 text-white font-bold rounded-xl">Start Work</button>
//                    </div>
//                 )}

//                 {/* ✅ RESOLVED FORM (UPDATED) */}
//                 {activeTab === 'RESOLVED' && (
//                   <div className="space-y-5">
//                     <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Final resolution notes..." className="w-full h-24 bg-black border border-zinc-700 rounded-xl p-3 text-white outline-none resize-none" />
                    
//                     {/* 1. FILE UPLOAD */}
//                     <div className="space-y-2">
//                         <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//                           {files.map((f, i) => (
//                             <div key={i} className="relative w-20 h-20 shrink-0 border border-zinc-700 rounded-xl overflow-hidden group">
//                                <img src={URL.createObjectURL(f)} className="w-full h-full object-cover" />
//                                <button onClick={() => removeFile(i)} className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1"><X size={12}/></button>
//                             </div>
//                           ))}
//                           {files.length < 5 && (
//                               <div className="relative w-20 h-20 shrink-0 border-2 border-dashed border-zinc-700 rounded-xl flex flex-col items-center justify-center bg-black/30 hover:bg-zinc-900/50 cursor-pointer">
//                                   <input type="file" multiple accept="image/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
//                                   <Plus size={20} className="text-zinc-500" />
//                               </div>
//                           )}
//                         </div>
//                     </div>

//                     {/* 2. ✅ COMPULSORY LOCATION BUTTON */}
//                     <div className="bg-black/30 border border-zinc-800 rounded-xl p-3 flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                            <div className={`p-2 rounded-full ${locStatus === 'success' ? 'bg-green-900/30 text-green-400' : 'bg-zinc-800 text-zinc-500'}`}>
//                               <LocateFixed size={20} />
//                            </div>
//                            <div className="text-sm">
//                               <p className="font-medium text-zinc-300">Geo-tagging</p>
//                               <p className="text-xs text-zinc-500">
//                                 {locStatus === 'idle' && "Required for closure"}
//                                 {locStatus === 'loading' && "Fetching location..."}
//                                 {locStatus === 'success' && "Location Locked ✅"}
//                                 {locStatus === 'error' && "Location Failed ❌"}
//                               </p>
//                            </div>
//                         </div>
                        
//                         {locStatus !== 'success' && (
//                           <button 
//                             onClick={handleGetLocation} 
//                             disabled={locStatus === 'loading'}
//                             className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg disabled:opacity-50"
//                           >
//                             {locStatus === 'loading' ? '...' : 'Tag Location'}
//                           </button>
//                         )}
//                     </div>

//                     <button 
//                       onClick={resolveJob} 
//                       // Disable until both files AND gps are present
//                       disabled={submitting || files.length === 0 || locStatus !== 'success'} 
//                       className="w-full py-3 bg-green-600 hover:bg-green-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold rounded-xl transition"
//                     >
//                       {submitting ? "Closing..." : "Close Ticket"}
//                     </button>
//                   </div>
//                 )}
//              </>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, MapPin, Search, Hammer, CheckCircle2, 
  Camera, Check, Clock, FileText, X, Plus, LocateFixed 
} from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_BASE!;

const STAGES = [
  { id: 'ASSIGNED', label: 'Assigned', icon: MapPin },
  { id: 'INSPECTION', label: 'Inspection', icon: Search },
  { id: 'WORK_IN_PROGRESS', label: 'Work', icon: Hammer },
  { id: 'RESOLVED', label: 'Resolved', icon: CheckCircle2 },
];

export default function OfficerResolvePage() {
  const { id } = useParams();
  const router = useRouter();
  
  const [c, setComplaint] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>(""); 

  // Form Data
  const [officerName, setOfficerName] = useState("");
  const [note, setNote] = useState("");
  const [files, setFiles] = useState<File[]>([]); 
  const [submitting, setSubmitting] = useState(false);

  // Location State
  const [gps, setGps] = useState<{lat: number, lng: number} | null>(null);
  const [locStatus, setLocStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function getTabForStatus(status: string) {
    if (['CREATED', 'ACKNOWLEDGED'].includes(status)) return 'ASSIGNED';
    if (status === 'ASSIGNED') return 'INSPECTION';
    if (status === 'INSPECTION') return 'WORK_IN_PROGRESS';
    if (status === 'WORK_IN_PROGRESS') return 'RESOLVED';
    return 'RESOLVED';
  }

  useEffect(() => {
    const token = localStorage.getItem("civic_token");
    if (!token) return router.push("/login");
    
    fetch(`${API}/complaints/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => {
      setComplaint(data);
      setActiveTab(getTabForStatus(data.currentStatus));
      setLoading(false);
    })
    .catch(() => router.push("/officer"));
  }, [id, router]);

  async function postAction(url: string, method = "POST", body: any) {
    const token = localStorage.getItem("civic_token");
    const headers: any = { "Authorization": `Bearer ${token}` };
    if (!(body instanceof FormData)) headers["Content-Type"] = "application/json";

    const res = await fetch(`${API}${url}`, { method, headers, body: body instanceof FormData ? body : JSON.stringify(body) });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Request failed");
    }
    return res.json();
  }

  const handleGetLocation = () => {
    setLocStatus("loading");
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      setLocStatus("error");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGps({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
        setLocStatus("success");
      },
      (err) => {
        console.error(err);
        alert("⚠️ GPS Failed: " + err.message + "\nMake sure location is enabled!");
        setLocStatus("error");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  async function resolveJob() {
    if (files.length === 0) return alert("📸 Photo required!");
    if (!gps) return alert("📍 Location required! Click 'Tag Location'.");

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("lat", String(gps.lat));
      formData.append("lng", String(gps.lng));
      formData.append("note", note);
      
      files.forEach((file) => formData.append("images", file));

      await postAction(`/complaints/${id}/resolve`, "POST", formData);
      alert("🎉 Job Closed!");
      router.push("/officer");
    } catch (e: any) {
      alert("Error: " + e.message);
    } finally {
      setSubmitting(false);
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
        const newFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...newFiles].slice(0, 5));
        e.target.value = ""; 
    }
  };
  const removeFile = (index: number) => setFiles(prev => prev.filter((_, i) => i !== index));

  function getStageHistory(stageId: string) {
    if (!c || !c.events) return null;
    const typeMap: Record<string, string> = {
      'ASSIGNED': 'ASSIGNED', 'INSPECTION': 'INSPECTION_STARTED', 
      'WORK_IN_PROGRESS': 'WORK_STARTED', 'RESOLVED': 'RESOLVED'
    };
    return c.events.filter((e: any) => e.type === typeMap[stageId]).pop(); 
  }

  if (loading || !c) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;

  const currentStageIndex = STAGES.findIndex(s => s.id === c.currentStatus);
  const activeTabIndex = STAGES.findIndex(s => s.id === activeTab);
  const progressPercent = (Math.max(0, currentStageIndex) / (STAGES.length - 1)) * 100;
  
  const isTabCompleted = activeTabIndex <= currentStageIndex;
  const showHistory = (isTabCompleted && activeTab !== getTabForStatus(c.currentStatus)) || (activeTab === 'RESOLVED' && c.currentStatus === 'RESOLVED');
  const historyEvent = showHistory ? getStageHistory(activeTab) : null;

  return (
    <main className="min-h-screen bg-black text-zinc-200 font-sans pb-20">
      <nav className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
        <Link href="/officer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
          <ArrowLeft size={18} /> <span className="font-medium text-sm">Back</span>
        </Link>
        <div className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest">{c.id.slice(0, 8)}</div>
      </nav>

      <div className="max-w-xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
        
        {/* HEADER */}
        <header>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">{c.title}</h1>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-400">
            <span className="px-2 py-0.5 rounded bg-blue-900/30 text-blue-400 text-[10px] sm:text-xs font-bold border border-blue-800">{c.category}</span>
            <span>• {c.ward?.name}</span>
          </div>
        </header>

        {/* RESPONSIVE STEPPER */}
        <div className="relative pt-2 pb-6 px-1 sm:px-2">
          {/* Background Track Line */}
          <div className="absolute top-4 sm:top-5 left-4 sm:left-6 right-4 sm:right-6 h-1 bg-zinc-800 rounded-full" />
          {/* Active Track Line */}
          <div 
            className="absolute top-4 sm:top-5 left-4 sm:left-6 h-1 rounded-full transition-all duration-700 bg-gradient-to-r from-blue-600 to-green-500" 
            style={{ width: `calc(${progressPercent}% - 32px)` }} 
          />
          
          <div className="relative flex justify-between z-10">
            {STAGES.map((stage, idx) => {
              const isCompleted = idx <= currentStageIndex;
              const isActive = stage.id === activeTab;
              return (
                <button 
                  key={stage.id} 
                  disabled={idx > currentStageIndex + 1}
                  onClick={() => { if (idx <= currentStageIndex + 1) setActiveTab(stage.id); }}
                  className={`flex flex-col items-center gap-1.5 sm:gap-2 group outline-none transition-all ${idx > currentStageIndex + 1 ? 'opacity-40' : ''}`}
                >
                  <div className={`
                    w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all 
                    ${isActive ? 'scale-110 border-blue-400 bg-zinc-900 text-white' : isCompleted ? 'bg-zinc-900 border-green-500 text-green-500' : 'bg-black border-zinc-800 text-zinc-700'}
                  `}>
                    <stage.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <div className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-zinc-600'}`}>
                    {stage.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 sm:p-6">
          
          {/* HISTORY VIEW */}
          {showHistory && historyEvent && (
            <div className="space-y-4">
               <div className="bg-black/40 border border-zinc-800 rounded-xl p-3 sm:p-4 space-y-3">
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs text-zinc-500 mb-2">
                     <Clock size={12} /> Completed on {new Date(historyEvent.createdAt).toLocaleString()}
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-200">{historyEvent.data?.note}</div>
                  {/* PROOF IMAGES */}
                  {(historyEvent.data?.proofUrls || [historyEvent.data?.proofUrl]).filter(Boolean).length > 0 && (
                      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar mt-3">
                        {(historyEvent.data.proofUrls || [historyEvent.data.proofUrl]).map((url: string, idx: number) => (
                          <img key={idx} src={`${API}${url}`} className="rounded-lg border border-zinc-700 w-20 h-20 sm:w-24 sm:h-24 object-cover shrink-0" />
                        ))}
                      </div>
                  )}
               </div>
               {activeTab !== getTabForStatus(c.currentStatus) && (
                  <button onClick={() => setActiveTab(getTabForStatus(c.currentStatus))} className="w-full text-center text-xs text-blue-400 hover:text-blue-300 underline p-2">
                      Return to Active Task &rarr;
                  </button>
               )}
            </div>
          )}

          {/* ACTIVE FORM */}
          {!showHistory && (
             <>
                {activeTab === 'ASSIGNED' && (
                  <div className="space-y-4">
                    <input type="text" value={officerName} onChange={(e) => setOfficerName(e.target.value)} placeholder="Officer Name..." className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-sm text-white outline-none focus:border-blue-500 transition" />
                    <button onClick={async () => {
                       if(!officerName) return alert("Name required");
                       await postAction(`/complaints/${id}/assign`, "PATCH", { officerName });
                       window.location.reload();
                    }} className="w-full py-3 sm:py-3.5 bg-blue-600 text-white text-sm font-bold rounded-xl active:scale-95 transition">Confirm Assignment</button>
                  </div>
                )}

                {activeTab === 'INSPECTION' && (
                   <div className="space-y-4">
                     <textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Observations..." className="w-full h-28 sm:h-32 bg-black border border-zinc-700 rounded-xl p-3 text-sm text-white focus:border-blue-500 transition resize-none"/>
                     <button onClick={async () => {
                        await postAction(`/complaints/${id}/advance`, "POST", { nextStatus: 'INSPECTION', note });
                        window.location.reload();
                     }} className="w-full py-3 sm:py-3.5 bg-white text-black text-sm font-bold rounded-xl active:scale-95 transition">Start Inspection</button>
                   </div>
                )}
                
                {activeTab === 'WORK_IN_PROGRESS' && (
                   <div className="space-y-4">
                     <textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Work details..." className="w-full h-28 sm:h-32 bg-black border border-zinc-700 rounded-xl p-3 text-sm text-white focus:border-amber-500 transition resize-none"/>
                     <button onClick={async () => {
                        await postAction(`/complaints/${id}/advance`, "POST", { nextStatus: 'WORK_IN_PROGRESS', note });
                        window.location.reload();
                     }} className="w-full py-3 sm:py-3.5 bg-amber-600 text-white text-sm font-bold rounded-xl active:scale-95 transition">Start Work</button>
                   </div>
                )}

                {/* RESOLVED FORM */}
                {activeTab === 'RESOLVED' && (
                  <div className="space-y-5">
                    <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Final resolution notes..." className="w-full h-24 bg-black border border-zinc-700 rounded-xl p-3 text-sm text-white outline-none focus:border-green-500 transition resize-none" />
                    
                    {/* 1. FILE UPLOAD */}
                    <div className="space-y-2">
                        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 no-scrollbar">
                          {files.map((f, i) => (
                            <div key={i} className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 border border-zinc-700 rounded-xl overflow-hidden group">
                               <img src={URL.createObjectURL(f)} className="w-full h-full object-cover" />
                               <button onClick={() => removeFile(i)} className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1"><X size={12}/></button>
                            </div>
                          ))}
                          {files.length < 5 && (
                              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 border-2 border-dashed border-zinc-700 rounded-xl flex flex-col items-center justify-center bg-black/30 hover:bg-zinc-900/50 cursor-pointer transition">
                                  <input type="file" multiple accept="image/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                                  <Plus size={20} className="text-zinc-500" />
                              </div>
                          )}
                        </div>
                    </div>

                    {/* 2. COMPULSORY LOCATION BUTTON */}
                    <div className="bg-black/30 border border-zinc-800 rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3 w-full">
                           <div className={`p-2 rounded-full shrink-0 ${locStatus === 'success' ? 'bg-green-900/30 text-green-400' : 'bg-zinc-800 text-zinc-500'}`}>
                              <LocateFixed size={18} className="sm:w-5 sm:h-5" />
                           </div>
                           <div className="min-w-0 flex-1">
                              <p className="font-medium text-xs sm:text-sm text-zinc-300">Geo-tagging</p>
                              <p className="text-[10px] sm:text-xs text-zinc-500 truncate">
                                {locStatus === 'idle' && "Required for closure"}
                                {locStatus === 'loading' && "Fetching location..."}
                                {locStatus === 'success' && "Location Locked ✅"}
                                {locStatus === 'error' && "Location Failed ❌"}
                              </p>
                           </div>
                        </div>
                        
                        {locStatus !== 'success' && (
                          <button 
                            onClick={handleGetLocation} 
                            disabled={locStatus === 'loading'}
                            className="w-full sm:w-auto px-4 py-2 sm:px-3 sm:py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg disabled:opacity-50 transition shrink-0"
                          >
                            {locStatus === 'loading' ? '...' : 'Tag Location'}
                          </button>
                        )}
                    </div>

                    <button 
                      onClick={resolveJob} 
                      disabled={submitting || files.length === 0 || locStatus !== 'success'} 
                      className="w-full py-3 sm:py-3.5 bg-green-600 hover:bg-green-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white text-sm font-bold rounded-xl transition active:scale-95"
                    >
                      {submitting ? "Closing..." : "Close Ticket"}
                    </button>
                  </div>
                )}
             </>
          )}
        </div>
      </div>
    </main>
  );
}