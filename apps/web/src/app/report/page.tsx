// // "use client";

// // import { useEffect, useState } from "react";
// // import { apiGet, apiPost } from "@/lib/api";

// // export default function ReportPage() {
// //   const [wards, setWards] = useState<any[]>([]);
// //   const [depts, setDepts] = useState<any[]>([]);
// //   const [err, setErr] = useState<string | null>(null);

// //   const [form, setForm] = useState({
// //     title: "",
// //     description: "",
// //     category: "WATER",
// //     wardId: "",
// //     departmentId: "",
// //     lat: 0,
// //     lng: 0,
// //     locationText: "",
// //   });

// //   useEffect(() => {
// //     (async () => {
// //       // quick hack: pull from prisma via public endpoints? We'll add a tiny endpoint later.
// //       // For now: read ids from DB using Prisma Studio once, paste into form.
// //       // If you want, in Step 5 we'll add /meta/wards and /meta/departments.
// //     })();
// //   }, []);

// //   async function useLocation() {
// //     setErr(null);
// //     navigator.geolocation.getCurrentPosition(
// //       (pos) => {
// //         setForm((f) => ({
// //           ...f,
// //           lat: pos.coords.latitude,
// //           lng: pos.coords.longitude,
// //         }));
// //       },
// //       () => setErr("Location permission denied."),
// //       { enableHighAccuracy: true }
// //     );
// //   }

// //   async function submit() {
// //     setErr(null);
// //     try {
// //       const res = await apiPost<{ complaintId: string }>("/complaints", form);
// //       window.location.href = `/complaints/${res.complaintId}`;
// //     } catch (e: any) {
// //       setErr(e.message);
// //     }
// //   }

// //   return (
// //     <main className="min-h-screen p-10 max-w-2xl space-y-4">
// //       <h1 className="text-2xl font-bold">Report an Issue</h1>
// //       <p className="text-slate-600 text-sm">
// //         Pilot version — you’ll paste Ward/Department IDs from Prisma Studio (Step 5 will add dropdowns).
// //       </p>

// //       {err && <div className="rounded-xl border p-3 text-red-600">{err}</div>}

// //       <input className="w-full border rounded-xl p-3" placeholder="Title"
// //         value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />

// //       <textarea className="w-full border rounded-xl p-3" placeholder="Description"
// //         value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />

// //       <select className="w-full border rounded-xl p-3"
// //         value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
// //         {["ROAD","WATER","GARBAGE","LIGHT","SEWAGE","OTHER"].map(c => <option key={c} value={c}>{c}</option>)}
// //       </select>

// //       <input className="w-full border rounded-xl p-3" placeholder="wardId (paste from Prisma Studio)"
// //         value={form.wardId} onChange={(e) => setForm({ ...form, wardId: e.target.value })} />

// //       <input className="w-full border rounded-xl p-3" placeholder="departmentId (paste from Prisma Studio)"
// //         value={form.departmentId} onChange={(e) => setForm({ ...form, departmentId: e.target.value })} />

// //       <div className="flex gap-3">
// //         <button className="border rounded-xl px-4 py-2" onClick={useLocation}>Use my location</button>
// //         <div className="text-sm text-slate-600 self-center">
// //           {form.lat ? `${form.lat.toFixed(5)}, ${form.lng.toFixed(5)}` : "No location yet"}
// //         </div>
// //       </div>

// //       <input className="w-full border rounded-xl p-3" placeholder="Location text (optional)"
// //         value={form.locationText} onChange={(e) => setForm({ ...form, locationText: e.target.value })} />

// //       <button className="rounded-xl bg-black text-white px-4 py-3" onClick={submit}>
// //         Submit Complaint
// //       </button>
// //     </main>
// //   );
// // }

// // gemini code

// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation"; // ✅ Use Next.js Router for smooth transitions
// // import { apiPost } from "@/lib/api";

// // export default function ReportPage() {
// //     const router = useRouter();
// //     const [err, setErr] = useState<string | null>(null);
// //     const [loading, setLoading] = useState(false);

// //     const [form, setForm] = useState({
// //         title: "",
// //         description: "",
// //         category: "ROAD", // ✅ Default to a valid category
// //         wardId: "",
// //         departmentId: "",
// //         lat: 0,
// //         lng: 0,
// //         locationText: "",
// //     });

// //     async function useLocation() {
// //         setErr(null);
// //         if (!navigator.geolocation) {
// //             setErr("Geolocation is not supported by your browser.");
// //             return;
// //         }
// //         navigator.geolocation.getCurrentPosition(
// //             (pos) => {
// //                 setForm((f) => ({
// //                     ...f,
// //                     lat: pos.coords.latitude,
// //                     lng: pos.coords.longitude,
// //                     locationText: "Pinned via GPS", // ✅ Visual feedback
// //                 }));
// //             },
// //             (error) => setErr("Location permission denied. Please enable it in settings."),
// //             { enableHighAccuracy: true }
// //         );
// //     }

// //     // async function submit() {
// //     //     setErr(null);
// //     //     setLoading(true);

// //     //     // Basic Validation
// //     //     if (!form.wardId || !form.departmentId) {
// //     //         setErr("⚠️ You must paste a Ward ID and Department ID from Prisma Studio.");
// //     //         setLoading(false);
// //     //         return;
// //     //     }

// //     //     try {
// //     //         // ✅ Expect the server to return the new ID
// //     //         //   const res = await apiPost<{ id: string }>("/complaints", form);
// //     //         //   router.push(`/complaints/${res.id}`); // ✅ Smooth redirect

// //     //         // ✅ CORRECT
// //     //         // We expect 'id', not 'complaintId'
// //     //         const res = await apiPost<{ id: string }>("/complaints", form);
// //     //         router.push(`/complaints/${res.id}`);
// //     //     } catch (e: any) {
// //     //         setErr(e.message);
// //     //     } finally {
// //     //         setLoading(false);
// //     //     }
// //     // }

// //     // gemini//

// //     // async function submit() {
// //     //     setErr(null);
// //     //     setLoading(true);

// //     //     // Basic Validation
// //     //     if (!form.wardId || !form.departmentId) {
// //     //         setErr("⚠️ You must paste a Ward ID and Department ID from Prisma Studio.");
// //     //         setLoading(false);
// //     //         return;
// //     //     }

// //     //     try {
// //     //         // ✅ FIX: Use 'id' matching the database column
// //     //         const res = await apiPost<{ id: string }>("/complaints", form);
// //     //         router.push(`/complaints/${res.id}`);
// //     //     } catch (e: any) {
// //     //         setErr(e.message);
// //     //     } finally {
// //     //         setLoading(false);
// //     //     }
// //     // }

// //     // gemin 2

// //     async function submit() {
// //         setErr(null);
// //         setLoading(true);

// //         // Basic Validation
// //         if (!form.wardId || !form.departmentId) {
// //             setErr("⚠️ You must paste a Ward ID and Department ID from Prisma Studio.");
// //             setLoading(false);
// //             return;
// //         }

// //         try {
// //             console.log("Submitting form data:", form); // 🔍 Log what we send

// //             // Call API
// //             const res: any = await apiPost("/complaints", form);

// //             console.log("SERVER RESPONSE:", res); // 🔍 Log exactly what the server sent back

// //             // Robust check for ID
// //             const newId = res.id || res.complaintId || res.data?.id;

// //             if (!newId) {
// //                 // If we can't find an ID, alert the user so we know what happened
// //                 alert("Server returned success but no ID found!\nCheck Console (F12) for details.");
// //                 console.error("Missing ID in response:", res);
// //                 return;
// //             }

// //             // Success! Redirect to the correct ID
// //             router.push(`/complaints/${newId}`);

// //         } catch (e: any) {
// //             console.error("Submission Error:", e);
// //             setErr(e.message);
// //         } finally {
// //             setLoading(false);
// //         }
// //     }

// //     return (
// //         <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
// //             <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg border border-slate-100 space-y-6">

// //                 {/* Header */}
// //                 <div>
// //                     <h1 className="text-2xl font-bold text-slate-900">📢 Report an Issue</h1>
// //                     <p className="text-slate-500 text-sm mt-1">
// //                         Pilot Mode: Please paste IDs manually from database.
// //                     </p>
// //                 </div>

// //                 {/* Error Banner */}
// //                 {err && (
// //                     <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
// //                         {err}
// //                     </div>
// //                 )}

// //                 {/* Form Fields */}
// //                 <div className="space-y-4">
// //                     <div>
// //                         <label className="text-xs font-semibold text-slate-500 uppercase">Title</label>
// //                         <input
// //                             className="w-full border border-slate-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500 outline-none transition"
// //                             placeholder="e.g. Broken Streetlight"
// //                             value={form.title}
// //                             onChange={(e) => setForm({ ...form, title: e.target.value })}
// //                         />
// //                     </div>

// //                     <div>
// //                         <label className="text-xs font-semibold text-slate-500 uppercase">Description</label>
// //                         <textarea
// //                             className="w-full border border-slate-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500 outline-none transition"
// //                             placeholder="Describe the issue details..."
// //                             rows={3}
// //                             value={form.description}
// //                             onChange={(e) => setForm({ ...form, description: e.target.value })}
// //                         />
// //                     </div>

// //                     <div>
// //                         <label className="text-xs font-semibold text-slate-500 uppercase">Category</label>
// //                         <select
// //                             className="w-full border border-slate-300 rounded-lg p-3 mt-1 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
// //                             value={form.category}
// //                             onChange={(e) => setForm({ ...form, category: e.target.value })}
// //                         >
// //                             {["ROAD", "WATER", "GARBAGE", "LIGHT", "SEWAGE", "OTHER"].map(c => (
// //                                 <option key={c} value={c}>{c}</option>
// //                             ))}
// //                         </select>
// //                     </div>

// //                     {/* Manual ID Inputs (Since we have no Meta API yet) */}
// //                     <div className="grid grid-cols-2 gap-4">
// //                         <div>
// //                             <label className="text-xs font-semibold text-slate-500 uppercase">Ward ID</label>
// //                             <input
// //                                 className="w-full border border-slate-300 rounded-lg p-3 mt-1 text-sm font-mono"
// //                                 placeholder="UUID..."
// //                                 value={form.wardId}
// //                                 onChange={(e) => setForm({ ...form, wardId: e.target.value })}
// //                             />
// //                         </div>
// //                         <div>
// //                             <label className="text-xs font-semibold text-slate-500 uppercase">Dept ID</label>
// //                             <input
// //                                 className="w-full border border-slate-300 rounded-lg p-3 mt-1 text-sm font-mono"
// //                                 placeholder="UUID..."
// //                                 value={form.departmentId}
// //                                 onChange={(e) => setForm({ ...form, departmentId: e.target.value })}
// //                             />
// //                         </div>
// //                     </div>
// //                     <p className="text-xs text-slate-400 text-center">
// //                         (Run <code>npx prisma studio</code> to copy these IDs)
// //                     </p>

// //                     {/* Location Section */}
// //                     <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
// //                         <div className="flex justify-between items-center mb-2">
// //                             <span className="text-sm font-semibold text-slate-700">📍 Location</span>
// //                             {form.lat !== 0 && (
// //                                 <span className="text-xs text-green-600 font-mono">
// //                                     {form.lat.toFixed(4)}, {form.lng.toFixed(4)}
// //                                 </span>
// //                             )}
// //                         </div>
// //                         <div className="flex gap-2">
// //                             <input
// //                                 className="flex-1 border border-slate-300 rounded-lg p-2 text-sm"
// //                                 placeholder="Landmark text..."
// //                                 value={form.locationText}
// //                                 onChange={(e) => setForm({ ...form, locationText: e.target.value })}
// //                             />
// //                             <button
// //                                 className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-bold hover:bg-blue-200 transition"
// //                                 onClick={useLocation}
// //                             >
// //                                 Find Me
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Submit Button */}
// //                 <button
// //                     className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
// //                     onClick={submit}
// //                     disabled={loading}
// //                 >
// //                     {loading ? "Submitting..." : "Submit Report"}
// //                 </button>

// //             </div>
// //         </main>
// //     );
// // }


// // gemni 3

// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { apiPost } from "@/lib/api";

// // export default function ReportPage() {
// //   const router = useRouter();
// //   const [err, setErr] = useState<string | null>(null);
// //   const [loading, setLoading] = useState(false);

// //   const [form, setForm] = useState({
// //     title: "",
// //     description: "",
// //     category: "ROAD",
// //     wardId: "",
// //     departmentId: "",
// //     lat: 0,
// //     lng: 0,
// //     locationText: "",
// //   });

// //   async function useLocation() {
// //     setErr(null);
// //     if (!navigator.geolocation) {
// //       setErr("Geolocation not supported.");
// //       return;
// //     }
// //     navigator.geolocation.getCurrentPosition(
// //       (pos) => {
// //         setForm((f) => ({
// //           ...f,
// //           lat: pos.coords.latitude,
// //           lng: pos.coords.longitude,
// //           locationText: "Pinned via GPS (Accurate)",
// //         }));
// //       },
// //       () => setErr("Location permission denied."),
// //       { enableHighAccuracy: true }
// //     );
// //   }

// //   async function submit() {
// //     setErr(null);
// //     setLoading(true);

// //     if (!form.wardId || !form.departmentId) {
// //       setErr("⚠️ Missing Ward ID or Dept ID.");
// //       setLoading(false);
// //       return;
// //     }

// //     // try {
// //     //   const res = await apiPost<{ id: string }>("/complaints", form);
// //     //   router.push(`/complaints/${res.id}`);
// //     // } catch (e: any) {
// //     //   setErr(e.message);
// //     // } finally {
// //     //   setLoading(false);
// //     // }
// //         try {
// //       // ✅ FIX: Allow 'any' so we can check for both naming styles
// //       const res: any = await apiPost("/complaints", form);

// //       // ✅ FIX: Check for 'id' OR 'complaintId'
// //       const actualId = res.id || res.complaintId; 

// //       if (actualId) {
// //          router.push(`/complaints/${actualId}`);
// //       } else {
// //          alert("Complaint Saved! (But redirect failed)");
// //          router.push("/");
// //       }

// //     } catch (e: any) {
// //       setErr(e.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   return (
// //     <main className="min-h-screen flex items-center justify-center p-4 font-sans bg-zinc-950">
// //       <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl space-y-8">

// //         {/* Header */}
// //         <div>
// //           <h1 className="text-3xl font-bold text-white tracking-tight">Report Issue</h1>
// //           <p className="text-zinc-400 text-sm mt-1">
// //             Submit a new grievance to the city command center.
// //           </p>
// //         </div>

// //         {/* Error Banner */}
// //         {err && (
// //           <div className="bg-red-900/20 border border-red-800 text-red-200 p-4 rounded-lg text-sm">
// //             {err}
// //           </div>
// //         )}

// //         <div className="space-y-5">
// //           {/* Title Input */}
// //           <div className="space-y-1">
// //             <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Issue Title</label>
// //             <input 
// //               className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white placeholder-zinc-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" 
// //               placeholder="e.g. Broken Streetlight"
// //               value={form.title} 
// //               onChange={(e) => setForm({ ...form, title: e.target.value })} 
// //             />
// //           </div>

// //           {/* Description Input */}
// //           <div className="space-y-1">
// //             <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Details</label>
// //             <textarea 
// //               className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white placeholder-zinc-500 focus:ring-2 focus:ring-blue-500 outline-none transition" 
// //               placeholder="Describe the problem..."
// //               rows={3}
// //               value={form.description} 
// //               onChange={(e) => setForm({ ...form, description: e.target.value })} 
// //             />
// //           </div>

// //           {/* Category Select */}
// //           <div className="space-y-1">
// //             <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Category</label>
// //             <div className="relative">
// //               <select 
// //                 className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white appearance-none focus:ring-2 focus:ring-blue-500 outline-none"
// //                 value={form.category} 
// //                 onChange={(e) => setForm({ ...form, category: e.target.value })}
// //               >
// //                 {["ROAD","WATER","GARBAGE","LIGHT","SEWAGE","OTHER"].map(c => (
// //                   <option key={c} value={c}>{c}</option>
// //                 ))}
// //               </select>
// //               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400">
// //                 ▼
// //               </div>
// //             </div>
// //           </div>

// //           {/* ID Inputs */}
// //           <div className="grid grid-cols-2 gap-4">
// //             <div className="space-y-1">
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Ward ID</label>
// //               <input 
// //                 className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-xs font-mono text-zinc-300 focus:ring-2 focus:ring-blue-500 outline-none" 
// //                 placeholder="UUID..."
// //                 value={form.wardId} 
// //                 onChange={(e) => setForm({ ...form, wardId: e.target.value })} 
// //               />
// //             </div>
// //             <div className="space-y-1">
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Dept ID</label>
// //               <input 
// //                 className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-xs font-mono text-zinc-300 focus:ring-2 focus:ring-blue-500 outline-none" 
// //                 placeholder="UUID..."
// //                 value={form.departmentId} 
// //                 onChange={(e) => setForm({ ...form, departmentId: e.target.value })} 
// //               />
// //             </div>
// //           </div>

// //           {/* Location Box */}
// //           <div className="p-4 bg-zinc-800/30 rounded-xl border border-dashed border-zinc-700">
// //             <div className="flex justify-between items-center mb-3">
// //               <span className="text-sm font-semibold text-zinc-300">📍 Location</span>
// //               {form.lat !== 0 && (
// //                 <span className="text-xs text-green-400 font-mono">
// //                   {form.lat.toFixed(4)}, {form.lng.toFixed(4)}
// //                 </span>
// //               )}
// //             </div>
// //             <div className="flex gap-2">
// //               <input 
// //                 className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg p-2 text-sm text-white focus:ring-2 focus:ring-blue-500 outline-none" 
// //                 placeholder="Landmark text..."
// //                 value={form.locationText} 
// //                 onChange={(e) => setForm({ ...form, locationText: e.target.value })} 
// //               />
// //               <button 
// //                 className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition shadow-lg shadow-blue-900/20" 
// //                 onClick={useLocation}
// //               >
// //                 Find Me
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Submit Button */}
// //         <button 
// //           className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.01] active:scale-[0.99]" 
// //           onClick={submit}
// //           disabled={loading}
// //         >
// //           {loading ? "Transmitting..." : "Submit Report →"}
// //         </button>

// //       </div>
// //     </main>
// //   );
// // }

// // gpt 5 5.7.3

// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { apiPost, apiGet, CITY_CODE , API_BASE } from "@/lib/api";


// export default function ReportPage() {
//   // const [imageBase64, setImageBase64] = useState<string | null>(null);

//   // const [imageFile, setImageFile] = useState<File | null>(null);

//   const [imageFiles, setImageFiles] = useState<File[]>([]);


//   const router = useRouter();
//   const [err, setErr] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const [wards, setWards] = useState<any[]>([]);
//   const [depts, setDepts] = useState<any[]>([]);



//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     category: "ROAD",
//     wardId: "",
//     departmentId: "",
//     lat: 0,
//     lng: 0,
//     locationText: "",
//   });

//   // ✅ Load wards + departments automatically
//   useEffect(() => {
//     (async () => {
//       try {
//         const w = await apiGet<any[]>(`/meta/wards?city=${CITY_CODE}`);
//         const d = await apiGet<any[]>(`/meta/departments`);
//         setWards(w);
//         setDepts(d);
//         setForm(f => ({
//           ...f,
//           wardId: w?.[0]?.id ?? "",
//           departmentId: d?.[0]?.id ?? "",
//         }));
//       } catch (e: any) {
//         setErr(e.message);
//       }
//     })();
//   }, []);

//   async function useLocation() {
//     setErr(null);
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         setForm((f) => ({
//           ...f,
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude,
//           locationText: "Pinned via GPS (Accurate)",
//         }));
//       },
//       () => setErr("Location permission denied."),
//       { enableHighAccuracy: true }
//     );
//   }

//   // async function submit() {
//   //   setErr(null);
//   //   setLoading(true);

//   //   if (!form.wardId || !form.departmentId) {
//   //     setErr("⚠️ Missing Ward or Department.");
//   //     setLoading(false);
//   //     return;
//   //   }

//   //   if (!form.lat || !form.lng) {
//   //     setErr("⚠️ GPS location required. Click Find Me.");
//   //     setLoading(false);
//   //     return;
//   //   }

//   //   // if (!imageBase64) {
//   //   //   setErr("⚠️ Image required.");
//   //   //   setLoading(false);
//   //   //   return;
//   //   // }


//   //   try {
//   //     // const res: any = await apiPost("/complaints", form);

//   //     // const res: any = await apiPost("/complaints", {
//   //     //   ...form,
//   //     //   mediaBase64: imageBase64,
//   //     // });

//   //     // const payload = {
//   //     //   ...form,
//   //     //   mediaBase64: imageBase64,
//   //     // };

//   //     // console.log("🚀 Sending payload:", payload);

//   //     // const res: any = await apiPost("/complaints", payload);

//   //     // if (!imageFile) {
//   //     //   setErr("⚠️ Image required.");
//   //     //   setLoading(false);
//   //     //   return;
//   //     // }

//   //     const formData = new FormData();

//   //     formData.append("title", form.title);
//   //     formData.append("description", form.description);
//   //     formData.append("category", form.category);
//   //     formData.append("wardId", form.wardId);
//   //     formData.append("departmentId", form.departmentId);
//   //     formData.append("lat", String(form.lat));
//   //     formData.append("lng", String(form.lng));
//   //     formData.append("locationText", form.locationText);

//   //     // CRITICAL: must match FileInterceptor('image')
//   //     // formData.append("image", imageFile);
//   //     imageFiles.forEach(file => {
//   //       formData.append("images", file);
//   //     });


//   //     const res = await fetch("http://localhost:4000/complaints", {
//   //       method: "POST",
//   //       credentials: "include",
//   //       body: formData,
//   //     });

//   //     const data = await res.json();



//   //     // const id = res.id || res.complaintId;
//   //     const id = data.id || data.complaintId;

//   //     if (id) router.push(`/complaints/${id}`);
//   //     else router.push("/");
//   //   } catch (e: any) {
//   //     setErr(e.message);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // }

//   async function submit() {
//     setErr(null);
//     setLoading(true);

//     // 1. Validate Title & Description
//     if (!form.title.trim()) {
//       setErr("⚠️ Please provide a title for the issue.");
//       setLoading(false);
//       return;
//     }

//     // if (!form.description.trim()) {
//     //   setErr("⚠️ Please provide a detailed description.");
//     //   setLoading(false);
//     //   return;
//     // }

//     // 2. Validate Image Upload (Mandatory)
//     if (imageFiles.length === 0) {
//       setErr("⚠️ At least one clear photo of the issue is required.");
//       setLoading(false);
//       return;
//     }

//     // 3. Validate Geography
//     if (!form.wardId || !form.departmentId) {
//       setErr("⚠️ Missing Ward or Department.");
//       setLoading(false);
//       return;
//     }

//     if (!form.lat || !form.lng) {
//       setErr("⚠️ GPS location required. Click 'Find Me'.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const formData = new FormData();

//       formData.append("title", form.title);
//       formData.append("description", form.description);
//       formData.append("category", form.category);
//       formData.append("wardId", form.wardId);
//       formData.append("departmentId", form.departmentId);
//       formData.append("lat", String(form.lat));
//       formData.append("lng", String(form.lng));
//       formData.append("locationText", form.locationText);

//       // CRITICAL: must match FileInterceptor('images')
//       imageFiles.forEach(file => {
//         formData.append("images", file);
//       });

//       const res = await fetch(`${API_BASE}/complaints`, { // Using API_BASE for safety
//         method: "POST",
//         credentials: "include",
//         body: formData,
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || "Failed to submit report");
//       }

//       const data = await res.json();
//       const id = data.id || data.complaintId;

//       if (id) router.push(`/complaints/${id}`);
//       else router.push("/");
//     } catch (e: any) {
//       setErr(e.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <main className="min-h-screen flex items-center justify-center p-4 font-sans bg-zinc-950">
//       <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl space-y-8">

//         <div>
//           <h1 className="text-3xl font-bold text-white tracking-tight">Report Issue</h1>
//           <p className="text-zinc-400 text-sm mt-1">Submit a new grievance to the city command center.</p>
//         </div>

//         {err && (
//           <div className="bg-red-900/20 border border-red-800 text-red-200 p-4 rounded-lg text-sm">
//             {err}
//           </div>
//         )}

//         <div className="space-y-5">

//           {/* Title */}
//           <input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white"
//             placeholder="Issue title"
//             value={form.title}
//             onChange={(e) => setForm({ ...form, title: e.target.value })}
//           />

//           {/* Description */}
//           <textarea className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white"
//             placeholder="Describe the problem..."
//             rows={3}
//             value={form.description}
//             onChange={(e) => setForm({ ...form, description: e.target.value })}
//           />

//           {/* Category */}
//           <select className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white"
//             value={form.category}
//             onChange={(e) => setForm({ ...form, category: e.target.value })}
//           >
//             {["ROAD", "WATER", "GARBAGE", "LIGHT", "SEWAGE", "OTHER"].map(c => (
//               <option key={c} value={c}>{c}</option>
//             ))}
//           </select>

//           {/* Ward */}
//           <select className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white"
//             value={form.wardId}
//             onChange={(e) => setForm({ ...form, wardId: e.target.value })}
//           >
//             {wards.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
//           </select>

//           {/* Department */}
//           <select className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white"
//             value={form.departmentId}
//             onChange={(e) => setForm({ ...form, departmentId: e.target.value })}
//           >
//             {depts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
//           </select>

//           {/* Location */}
//           <div className="flex gap-2">
//             <input className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg p-2 text-white"
//               placeholder="Landmark"
//               value={form.locationText}
//               onChange={(e) => setForm({ ...form, locationText: e.target.value })}
//             />
//             <button className="bg-blue-600 px-4 py-2 rounded-lg text-white" onClick={useLocation}>
//               Find Me
//             </button>
//           </div>

//         </div>
//         {/* Image Upload */}
//         {/* Image Upload */}
//         <div className="space-y-3">

//           <label className="text-sm text-zinc-400">
//             Upload photos (max 5)
//           </label>

//           {/* Hidden input */}
//           <input
//             id="imageUpload"
//             type="file"
//             accept="image/*"
//             multiple
//             className="hidden"
//             onChange={(e) => {

//               const files = Array.from(e.target.files || []);

//               setImageFiles(prev => {

//                 const combined = [...prev, ...files];

//                 if (combined.length > 5) {
//                   alert("Maximum 5 images allowed");
//                   return prev;
//                 }

//                 return combined;

//               });

//             }}

//           />

//           {/* Classy Upload Box */}
//           <div
//             onClick={() => document.getElementById("imageUpload")?.click()}
//             className="
//   cursor-pointer
//   border border-zinc-700
//   hover:border-blue-500
//   hover:shadow-lg hover:shadow-blue-500/10
//   bg-zinc-900/40
//   hover:bg-zinc-900/70
//   transition-all duration-200
//   rounded-xl
//   p-6
//   flex flex-col items-center justify-center
//   gap-2
//   group
// "

//           >

//             {/* Icon */}
//             <div className="
//       w-12 h-12
//       rounded-full
//       bg-blue-600/20
//       flex items-center justify-center
//       text-blue-500
//       text-2xl
//       group-hover:scale-110
//       transition
//     ">
//               +
//             </div>

//             {/* Text */}
//             <div className="text-sm text-zinc-300 font-medium">
//               Click to upload photos
//             </div>

//             <div className="text-xs text-zinc-500">
//               PNG, JPG up to 5 images
//             </div>

//           </div>

//           {imageFiles.length > 0 && (
//             <div className="text-xs text-zinc-400">
//               {imageFiles.length} / 5 images selected
//             </div>
//           )}


//           {/* Preview Grid */}
//           {imageFiles.length > 0 && (

//             <div className="grid grid-cols-2 gap-3">

//               {imageFiles.map((file, index) => (

//                 <div key={index} className="relative group">

//                   <img
//                     src={URL.createObjectURL(file)}
//                     className="
//               w-full h-40 object-cover
//               rounded-xl
//               border border-zinc-700
//             "
//                   />

//                   {/* Remove button */}
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setImageFiles(prev =>
//                         prev.filter((_, i) => i !== index)
//                       )
//                     }
//                     className="
//               absolute top-2 right-2
//               w-7 h-7
//               bg-black/70
//               backdrop-blur
//               border border-zinc-600
//               hover:border-red-500
//               hover:bg-red-500/20
//               text-white
//               rounded-full
//               flex items-center justify-center
//               opacity-0 group-hover:opacity-100
//               transition
//             "
//                   >
//                     ✕
//                   </button>

//                 </div>

//               ))}

//             </div>

//           )}

//         </div>



//         <button
//           className="w-full bg-white text-black font-bold py-4 rounded-xl"
//           onClick={submit}
//           disabled={loading}
//         >
//           {loading ? "Sending..." : "Submit Report"}
//         </button>

//       </div>
//     </main>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { apiGet, CITY_CODE, API_BASE } from "@/lib/api";
import { MapPin, Camera, X } from "lucide-react";

export default function ReportPage() {
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const router = useRouter();
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [wards, setWards] = useState<any[]>([]);
  const [depts, setDepts] = useState<any[]>([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "ROAD",
    wardId: "",
    departmentId: "",
    lat: 0,
    lng: 0,
    locationText: "",
  });

  // ✅ Load wards + departments automatically
  useEffect(() => {
    (async () => {
      try {
        const w = await apiGet<any[]>(`/meta/wards?city=${CITY_CODE}`);
        const d = await apiGet<any[]>(`/meta/departments`);
        setWards(w);
        setDepts(d);
        setForm(f => ({
          ...f,
          wardId: w?.[0]?.id ?? "",
          departmentId: d?.[0]?.id ?? "",
        }));
      } catch (e: any) {
        setErr(e.message);
      }
    })();
  }, []);

  async function useLocation() {
    setErr(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setForm((f) => ({
          ...f,
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          locationText: "Pinned via GPS (Accurate)",
        }));
      },
      () => setErr("Location permission denied."),
      { enableHighAccuracy: true }
    );
  }

  async function submit() {
    setErr(null);
    setLoading(true);

    // 1. Validate Title
    if (!form.title.trim()) {
      setErr("⚠️ Please provide a title for the issue.");
      setLoading(false);
      return;
    }

    // 2. Validate Image Upload (Mandatory)
    if (imageFiles.length === 0) {
      setErr("⚠️ At least one clear photo of the issue is required.");
      setLoading(false);
      return;
    }

    // 3. Validate Geography
    if (!form.wardId || !form.departmentId) {
      setErr("⚠️ Missing Ward or Department.");
      setLoading(false);
      return;
    }

    if (!form.lat || !form.lng) {
      setErr("⚠️ GPS location required. Click 'Find Me'.");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category", form.category);
      formData.append("wardId", form.wardId);
      formData.append("departmentId", form.departmentId);
      formData.append("lat", String(form.lat));
      formData.append("lng", String(form.lng));
      formData.append("locationText", form.locationText);

      // CRITICAL: must match FileInterceptor('images')
      imageFiles.forEach(file => {
        formData.append("images", file);
      });

      // 1. Grab your token (Update "civic_token" if you use a different key in localStorage!)
      // 1. Grab your token from local storage
      const token = localStorage.getItem("civic_token");

      // 2. Send the request with the Authorization header
      const res = await fetch(`${API_BASE}/complaints`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit report");
      }

      const data = await res.json();
      const id = data.id || data.complaintId;

      if (id) router.push(`/complaints/${id}`);
      else router.push("/");
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen md:flex items-center justify-center md:p-4 font-sans bg-zinc-950">
      {/* Mobile: Full width, zero border radius, takes up entire screen (min-h-screen). 
        Desktop: Max-width 500px, rounded corners, bordered card. 
      */}
      <div className="w-full max-w-lg bg-zinc-900 border-y border-zinc-800 md:border md:rounded-2xl shadow-2xl space-y-6 md:space-y-8 p-5 md:p-8 min-h-screen md:min-h-0 flex flex-col justify-center md:justify-start">

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Report Issue</h1>
          <p className="text-zinc-400 text-sm mt-1">Submit a new grievance to the city command center.</p>
        </div>

        {err && (
          <div className="bg-red-900/20 border border-red-800 text-red-200 p-4 rounded-xl text-sm font-medium">
            {err}
          </div>
        )}

        <div className="space-y-4 md:space-y-5">

          {/* Title */}
          <input
            className="w-full bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl p-3.5 md:p-3 text-base md:text-sm text-white outline-none transition"
            placeholder="Issue title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          {/* Description */}
          <textarea
            className="w-full bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl p-3.5 md:p-3 text-base md:text-sm text-white outline-none transition custom-scrollbar"
            placeholder="Describe the problem..."
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          {/* 3-Column Grid on Desktop, 2-Column on Mobile for Selects */}
          <div className="grid grid-row-1 sm:grid-row-2 md:grid-row-3 gap-3 md:gap-4">
            {/* Category */}
            <select
              className="w-full bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 rounded-xl p-3.5 md:p-3 text-base md:text-sm text-white outline-none"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              {["ROAD", "WATER", "GARBAGE", "LIGHT", "SEWAGE", "OTHER"].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Ward */}
            <select
              className="w-full bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 rounded-xl p-3.5 md:p-3 text-base md:text-sm text-white outline-none"
              value={form.wardId}
              onChange={(e) => setForm({ ...form, wardId: e.target.value })}
            >
              {wards.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
            </select>

            {/* Department (Spans full width on mobile if odd number) */}
            <select
              className="w-full bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 rounded-xl p-3.5 md:p-3 text-base md:text-sm text-white outline-none sm:col-span-2 md:col-span-1"
              value={form.departmentId}
              onChange={(e) => setForm({ ...form, departmentId: e.target.value })}
            >
              {depts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </div>

          {/* Location */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <input
              className="flex-1 bg-zinc-900 border border-zinc-700 focus:border-blue-500 rounded-xl p-3.5 md:p-3 text-base md:text-sm text-white outline-none"
              placeholder="Landmark / Location details"
              value={form.locationText}
              onChange={(e) => setForm({ ...form, locationText: e.target.value })}
            />
            <button
              className="flex items-center justify-center gap-2 bg-blue-600/10 border border-blue-500/50 hover:bg-blue-600/20 active:bg-blue-600/30 px-5 py-3.5 md:py-3 rounded-xl text-blue-400 font-medium transition whitespace-nowrap"
              onClick={useLocation}
            >
              <MapPin size={18} />
              Find Me
            </button>
          </div>

        </div>

        {/* Image Upload */}
        <div className="space-y-3">
          <label className="flex justify-between items-center text-sm text-zinc-400">
            <span>Upload photos</span>
            <span>{imageFiles.length} / 5</span>
          </label>

          {/* Hidden input */}
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              setImageFiles(prev => {
                const combined = [...prev, ...files];
                if (combined.length > 5) {
                  alert("Maximum 5 images allowed");
                  return prev.slice(0, 5); // Automatically crop to 5 instead of rejecting all
                }
                return combined;
              });
            }}
          />

          {/* Classy Upload Box */}
          {imageFiles.length < 5 && (
            <div
              onClick={() => document.getElementById("imageUpload")?.click()}
              className="cursor-pointer border border-dashed border-zinc-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 bg-zinc-900/40 hover:bg-zinc-900/70 transition-all duration-200 rounded-xl p-5 md:p-6 flex flex-col items-center justify-center gap-2 group active:scale-[0.98]"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition">
                <Camera size={20} />
              </div>
              <div className="text-sm text-zinc-300 font-medium mt-1">
                Tap to select photos
              </div>
              <div className="text-xs text-zinc-500">
                PNG, JPG up to 5 images
              </div>
            </div>
          )}

          {/* Preview Grid */}
          {imageFiles.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
              {imageFiles.map((file, index) => (
                <div key={index} className="relative group">
                  <img
                    src={URL.createObjectURL(file)}
                    className="w-full h-32 md:h-28 object-cover rounded-xl border border-zinc-700"
                    alt={`Upload preview ${index + 1}`}
                  />
                  {/* Remove button - Always visible on mobile, hover on desktop */}
                  <button
                    type="button"
                    onClick={() => setImageFiles(prev => prev.filter((_, i) => i !== index))}
                    className="absolute top-2 right-2 w-7 h-7 bg-zinc-900/80 backdrop-blur border border-zinc-600 hover:border-red-500 hover:bg-red-500/20 text-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition shadow-lg"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button pushes to bottom on mobile if there is space */}
        <div className="mt-auto pt-4 md:pt-0">
          <button
            className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-zinc-200 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-white/5"
            onClick={submit}
            disabled={loading}
          >
            {loading ? "Sending Report..." : "Submit Report"}
          </button>
        </div>

      </div>
    </main>
  );
}