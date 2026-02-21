// // // // import Image from "next/image";

// // // // export default function Home() {
// // // //   return (
// // // //     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
// // // //       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
// // // //         <Image
// // // //           className="dark:invert"
// // // //           src="/next.svg"
// // // //           alt="Next.js logo"
// // // //           width={100}
// // // //           height={20}
// // // //           priority
// // // //         />
// // // //         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
// // // //           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
// // // //             To get started, edit the page.tsx file.
// // // //           </h1>
// // // //           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
// // // //             Looking for a starting point or more instructions? Head over to{" "}
// // // //             <a
// // // //               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //               className="font-medium text-zinc-950 dark:text-zinc-50"
// // // //             >
// // // //               Templates
// // // //             </a>{" "}
// // // //             or the{" "}
// // // //             <a
// // // //               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //               className="font-medium text-zinc-950 dark:text-zinc-50"
// // // //             >
// // // //               Learning
// // // //             </a>{" "}
// // // //             center.
// // // //           </p>
// // // //         </div>
// // // //         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
// // // //           <a
// // // //             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
// // // //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //           >
// // // //             <Image
// // // //               className="dark:invert"
// // // //               src="/vercel.svg"
// // // //               alt="Vercel logomark"
// // // //               width={16}
// // // //               height={16}
// // // //             />
// // // //             Deploy Now
// // // //           </a>
// // // //           <a
// // // //             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
// // // //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //           >
// // // //             Documentation
// // // //           </a>
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }
// // // // import { apiGet } from "@/lib/api";

// // // // export default async function Home() {
// // // //   const leaderboard = await apiGet<any[]>("/public/leaderboard");
// // // //   const recent = await apiGet<any[]>("/public/recent");

// // // //   return (
// // // //     <main className="min-h-screen p-10 space-y-10">
// // // //       <header className="space-y-2">
// // // //         <h1 className="text-3xl font-bold">CivicLoop — Single City Pilot</h1>
// // // //         <p className="text-slate-600">
// // // //           Public transparency dashboard (pilot).
// // // //         </p>
// // // //         <div className="flex gap-3">
// // // //           <a className="underline" href="/report">Report an Issue</a>
// // // //           <a className="underline" href="/officer">Officer Console</a>
// // // //         </div>
// // // //       </header>

// // // //       <section className="space-y-3">
// // // //         <h2 className="text-xl font-semibold">Ward Leaderboard</h2>
// // // //         <div className="rounded-xl border overflow-hidden">
// // // //           <table className="w-full text-sm">
// // // //             <thead className="bg-slate-50">
// // // //               <tr>
// // // //                 <th className="text-left p-3">Ward</th>
// // // //                 <th className="text-left p-3">Total</th>
// // // //                 <th className="text-left p-3">Resolved</th>
// // // //                 <th className="text-left p-3">Reopened</th>
// // // //                 <th className="text-left p-3">Resolution %</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {leaderboard.map((w) => (
// // // //                 <tr key={w.wardId} className="border-t">
// // // //                   <td className="p-3">{w.wardName}</td>
// // // //                   <td className="p-3">{w.total}</td>
// // // //                   <td className="p-3">{w.resolved}</td>
// // // //                   <td className="p-3">{w.reopened}</td>
// // // //                   <td className="p-3">{w.resolutionRate}%</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       </section>

// // // //       <section className="space-y-3">
// // // //         <h2 className="text-xl font-semibold">Recent Issues</h2>
// // // //         <div className="grid gap-3">
// // // //           {recent.map((c) => (
// // // //             <a key={c.id} href={`/complaints/${c.id}`} className="rounded-xl border p-4 hover:bg-slate-50">
// // // //               <div className="font-semibold">{c.title}</div>
// // // //               <div className="text-sm text-slate-600">
// // // //                 {c.ward?.name} • {c.department?.name} • {c.category} • {c.currentStatus}
// // // //               </div>
// // // //               <div className="text-xs text-slate-500 mt-1">{new Date(c.createdAt).toLocaleString()}</div>
// // // //             </a>
// // // //           ))}
// // // //         </div>
// // // //       </section>
// // // //     </main>
// // // //   );
// // // // }


// // // // gemini code

// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import { apiGet } from "@/lib/api";
// // // // import Link from "next/link";

// // // // export default function Home() {
// // // //   const [complaints, setComplaints] = useState<any[]>([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     apiGet<any[]>("/complaints")
// // // //       .then(setComplaints)
// // // //       .catch((err) => console.error(err))
// // // //       .finally(() => setLoading(false));
// // // //   }, []);

// // // //   // --- 1. Calculate Leaderboard Logic (Client Side) ---
// // // //   const leaderboard = Object.values(
// // // //     complaints.reduce((acc: any, c: any) => {
// // // //       const wid = c.wardId || "unknown";
// // // //       if (!acc[wid]) {
// // // //         acc[wid] = {
// // // //           wardId: wid,
// // // //           wardName: c.ward?.name || "Unknown Ward",
// // // //           total: 0,
// // // //           resolved: 0,
// // // //           reopened: 0,
// // // //         };
// // // //       }
// // // //       acc[wid].total++;
// // // //       if (c.currentStatus === "RESOLVED") acc[wid].resolved++;
// // // //       if (c.currentStatus === "REOPENED") acc[wid].reopened++;
// // // //       return acc;
// // // //     }, {})
// // // //   ).map((w: any) => ({
// // // //     ...w,
// // // //     resolutionRate: w.total > 0 ? Math.round((w.resolved / w.total) * 100) : 0,
// // // //   }));

// // // //   // --- 2. Get Recent Complaints ---
// // // //   const recent = [...complaints]
// // // //     .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
// // // //     .slice(0, 5);

// // // //   if (loading) return <div className="p-10">Loading Dashboard...</div>;

// // // //   return (
// // // //     // ✅ Make sure this opening <main> tag exists!
// // // //     <main className="min-h-screen p-10 space-y-10 font-sans max-w-5xl mx-auto">
// // // //       <header className="space-y-2 border-b pb-6">
// // // //         <h1 className="text-3xl font-bold text-slate-900">CivicLoop — Single City Pilot</h1>
// // // //         <p className="text-slate-600">Public transparency dashboard (pilot).</p>
// // // //         <div className="flex gap-4 pt-2">
// // // //           <Link href="/report" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
// // // //              + Report Issue
// // // //           </Link>
// // // //           <Link href="/officer" className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition">
// // // //              👮 Officer Console
// // // //           </Link>
// // // //         </div>
// // // //       </header>

// // // //       {/* Leaderboard Section */}
// // // //       <section className="space-y-4">
// // // //         <h2 className="text-xl font-bold text-slate-800">🏆 Ward Leaderboard</h2>
// // // //         <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
// // // //           <table className="w-full text-sm text-left">
// // // //             <thead className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider">
// // // //               <tr>
// // // //                 <th className="p-4">Ward</th>
// // // //                 <th className="p-4">Total</th>
// // // //                 <th className="p-4">Resolved</th>
// // // //                 <th className="p-4">Reopened</th>
// // // //                 <th className="p-4">Success %</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody className="divide-y divide-slate-100 bg-white">
// // // //               {leaderboard.map((w: any) => (
// // // //                 <tr key={w.wardId} className="hover:bg-slate-50 transition">
// // // //                   <td className="p-4 font-medium text-slate-900">{w.wardName}</td>
// // // //                   <td className="p-4">{w.total}</td>
// // // //                   <td className="p-4 text-green-600 font-bold">{w.resolved}</td>
// // // //                   <td className="p-4 text-orange-600">{w.reopened}</td>
// // // //                   <td className="p-4">
// // // //                     <span className={`px-2 py-1 rounded text-xs font-bold ${
// // // //                       w.resolutionRate > 50 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
// // // //                     }`}>
// // // //                       {w.resolutionRate}%
// // // //                     </span>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //               {leaderboard.length === 0 && (
// // // //                 <tr>
// // // //                   <td colSpan={5} className="p-8 text-center text-slate-400">No data available yet.</td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       </section>

// // // //       {/* Recent Activity Section */}
// // // //       <section className="space-y-4">
// // // //         <h2 className="text-xl font-bold text-slate-800">⏱️ Recent Issues</h2>
// // // //         <div className="grid gap-3">
// // // //           {recent.map((c) => (
// // // //             <Link key={c.id} href={`/complaints/${c.id}`} className="group block bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition">
// // // //               <div className="flex justify-between items-start">
// // // //                 <div>
// // // //                   <div className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition">{c.title}</div>
// // // //                   <div className="text-sm text-slate-500 mt-1">
// // // //                     {c.ward?.name || "Unknown Ward"} • {c.department?.name || "General"} • <span className="font-medium text-slate-700">{c.category}</span>
// // // //                   </div>
// // // //                 </div>
// // // //                 <span className={`px-3 py-1 rounded-full text-xs font-bold ${
// // // //                   c.currentStatus === 'RESOLVED' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
// // // //                 }`}>
// // // //                   {c.currentStatus}
// // // //                 </span>
// // // //               </div>
// // // //               <div className="text-xs text-slate-400 mt-3 font-medium">
// // // //                 Reported: {new Date(c.createdAt).toLocaleString()}
// // // //               </div>
// // // //             </Link>
// // // //           ))}
// // // //         </div>
// // // //       </section>
// // // //     </main>
// // // //   );
// // // // }

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { apiGet } from "@/lib/api";
// // // import Link from "next/link";
// // // import { useRouter } from "next/navigation";

// // // import { Map } from "lucide-react"; // Import the Map icon

// // // export default function Home() {
// // //   const router = useRouter();

// // //   // 👇 ADD THIS FUNCTION inside Home()
// // //   const handleNewReport = () => {
// // //     // Check if the user has a token (is logged in)
// // //     const token = localStorage.getItem("civic_token");

// // //     if (!token) {
// // //       // ❌ Not Logged In -> Redirect to Login Page
// // //       router.push("/login");
// // //     } else {
// // //       // ✅ Logged In -> Go to Report Page
// // //       router.push("/report");
// // //     }
// // //   };

// // //   const handleOfficerConsole = () => {
// // //     const token = localStorage.getItem("civic_token");

// // //     if (!token) {
// // //       router.push("/login");
// // //     } else {
// // //       router.push("/officer");
// // //     }
// // //   };

// // //   const [authReady, setAuthReady] = useState(false);
// // //   const [token, setToken] = useState<string | null>(null);
// // //   const [role, setRole] = useState<string | null>(null);

// // //   useEffect(() => {
// // //     const syncAuth = () => {
// // //       setToken(localStorage.getItem("civic_token"));
// // //       setRole(localStorage.getItem("civic_role"));
// // //       setAuthReady(true);
// // //     };

// // //     syncAuth();
// // //     window.addEventListener("focus", syncAuth);
// // //     return () => window.removeEventListener("focus", syncAuth);
// // //   }, []);



// // //   // const token = typeof window !== "undefined" ? localStorage.getItem("civic_token") : null;
// // //   // const role = typeof window !== "undefined" ? localStorage.getItem("civic_token") : null;
// // //   // // civic_role should be "CITIZEN" | "OFFICER" (or whatever you store)

// // //   const isLoggedIn = !!token;
// // //   const isCitizen = isLoggedIn && role === "CITIZEN";
// // //   const isOfficer = isLoggedIn && role === "OFFICER";




// // //   const [complaints, setComplaints] = useState<any[]>([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     apiGet<any[]>("/complaints")
// // //       .then(setComplaints)
// // //       .catch((err) => console.error(err))
// // //       .finally(() => setLoading(false));
// // //   }, []);

// // //   const leaderboard = Object.values(
// // //     complaints.reduce((acc: any, c: any) => {
// // //       const wid = c.wardId || "unknown";
// // //       if (!acc[wid]) {
// // //         acc[wid] = {
// // //           wardId: wid,
// // //           wardName: c.ward?.name || "Unknown Ward",
// // //           total: 0,
// // //           resolved: 0,
// // //           reopened: 0,
// // //         };
// // //       }
// // //       acc[wid].total++;
// // //       if (c.currentStatus === "RESOLVED") acc[wid].resolved++;
// // //       if (c.currentStatus === "REOPENED") acc[wid].reopened++;
// // //       return acc;
// // //     }, {})
// // //   ).map((w: any) => ({
// // //     ...w,
// // //     resolutionRate: w.total > 0 ? Math.round((w.resolved / w.total) * 100) : 0,
// // //   }));

// // //   const recent = [...complaints]
// // //     .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

// // //   if (loading) return <div className="p-10 text-zinc-500">Initializing System...</div>;

// // //   const handleLogout = async () => {
// // //     try {
// // //       // await fetch("http://localhost:4000/auth/logout", { //process.env.NEXT_PUBLIC_API_BASE
// // //       await fetch(process.env.NEXT_PUBLIC_API_BASE + "/auth/logout", {   
// // //         method: "POST",
// // //         credentials: "include", // REQUIRED to clear cookie
// // //       });
// // //     } catch (e) {
// // //       console.error("Logout error", e);
// // //     }

// // //     // Clear frontend auth storage
// // //     localStorage.removeItem("civic_token");
// // //     localStorage.removeItem("civic_role");

// // //     // Update state immediately
// // //     setToken(null);
// // //     setRole(null);

// // //     // Redirect to home or login
// // //     router.push("/login");
// // //   };


// // //   return (
// // //     <main className="min-h-screen bg-black p-8 font-sans">
// // //       <div className="max-w-6xl mx-auto space-y-10">

// // //         {/* Header */}
// // //         <header className="flex justify-between items-end border-b border-zinc-800 pb-8">
// // //           <div>
// // //             <h1 className="text-4xl font-black text-white tracking-tight">CIVIC<span className="text-blue-500">LOOP</span></h1>
// // //             <p className="text-zinc-500 mt-2">Real-time City Operations Dashboard</p>
// // //           </div>
// // //           {authReady && (
// // //             <div className="flex gap-4 items center">
// // //               {isLoggedIn && (
// // //                 <button
// // //                   onClick={handleLogout}
// // //                   className="
// // //                     px-5 py-2.5
// // //                     bg-red-600/10
// // //                     border border-red-500/30
// // //                     text-red-400
// // //                     rounded-lg
// // //                     font-medium
// // //                     hover:bg-red-600/20
// // //                     hover:text-red-300
// // //                     transition
// // //                   "
// // //                 >
// // //                   Logout
// // //                 </button>
// // //               )}
// // //               {!isLoggedIn && (
// // //                 <>
// // //                   <Link
// // //                     href="/login"
// // //                     className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg font-medium hover:bg-zinc-800 transition hover:text-white"
// // //                   >
// // //                     Login
// // //                   </Link>

// // //                   <button
// // //                     // onClick={() => router.push("/report")} // or keep handleNewReport (it will push login anyway)
// // //                     onClick={handleNewReport}
// // //                     className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-bold transition shadow-lg shadow-blue-900/20"
// // //                   >
// // //                     + New Report
// // //                   </button>
// // //                 </>
// // //               )}

// // //               {isCitizen && (
// // //                 <button
// // //                   onClick={() => router.push("/report")}
// // //                   // onClick={handleNewReport}
// // //                   className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-bold transition shadow-lg shadow-blue-900/20"
// // //                 >
// // //                   + New Report
// // //                 </button>
// // //               )}

// // //               {isOfficer && (
// // //                 <button
// // //                   onClick={() => router.push("/officer")}
// // //                   // onClick={handleOfficerConsole}
// // //                   className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg font-medium hover:bg-zinc-800 transition hover:text-white"
// // //                 >
// // //                   Officer Console
// // //                 </button>
// // //               )}

// // //               {/* LIVE MAP BUTTON (Classy Glass Style) */}
// // //               <Link href="/map">
// // //                 <button className="
// // //                                   group
// // //                                   relative
// // //                                   flex items-center gap-3
// // //                                   px-5 py-2.5 mr-4
// // //                                   bg-zinc-900/80 backdrop-blur-md
// // //                                   border border-white/10 hover:border-blue-500/50
// // //                                   rounded-full
// // //                                   transition-all duration-300 ease-out
// // //                                   shadow-lg shadow-black/20 hover:shadow-blue-900/20
// // //                                 ">

// // //                   {/* Icon with its own subtle background */}
// // //                   <div className="
// // //                                   flex items-center justify-center
// // //                                   w-6 h-6 rounded-full
// // //                                   bg-blue-500/10 group-hover:bg-blue-500/20
// // //                                   transition-colors
// // //                                 ">
// // //                     <Map size={14} className="text-blue-400 group-hover:text-blue-300" />
// // //                   </div>

// // //                   <span className="text-sm font-medium text-zinc-300 group-hover:text-white tracking-wide">
// // //                     Live Map
// // //                   </span>

// // //                   {/* Optional: Tiny active dot to show it's 'Live' */}
// // //                   <span className="absolute top-2 right-2 flex h-2 w-2">
// // //                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
// // //                     <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
// // //                   </span>

// // //                 </button>
// // //               </Link>
// // //             </div>


// // //           )}
// // //         </header>

// // //         {/* Stats Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //           <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
// // //             <div className="text-zinc-500 text-sm font-bold uppercase tracking-wider">Total Incidents</div>
// // //             <div className="text-4xl font-mono text-white mt-2">{complaints.length}</div>
// // //           </div>
// // //           <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
// // //             <div className="text-zinc-500 text-sm font-bold uppercase tracking-wider">Resolved</div>
// // //             <div className="text-4xl font-mono text-green-500 mt-2">{complaints.filter(c => c.currentStatus === 'RESOLVED').length}</div>
// // //           </div>
// // //           <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
// // //             <div className="text-zinc-500 text-sm font-bold uppercase tracking-wider">Pending Action</div>
// // //             <div className="text-4xl font-mono text-orange-500 mt-2">{complaints.filter(c => c.currentStatus !== 'RESOLVED').length}</div>
// // //           </div>
// // //         </div>

// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
// // //           {/* Leaderboard */}
// // //           <section className="space-y-5">
// // //             <h2 className="text-xl font-bold text-zinc-300 flex items-center gap-2">
// // //               🏆 Ward Performance
// // //             </h2>
// // //             <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
// // //               <table className="w-full text-sm text-left">
// // //                 <thead className="bg-zinc-950 text-zinc-500 font-semibold uppercase text-xs tracking-wider">
// // //                   <tr>
// // //                     <th className="p-4">Ward</th>
// // //                     <th className="p-4">Total</th>
// // //                     <th className="p-4">Resolved</th>
// // //                     <th className="p-4">Rate</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody className="divide-y divide-zinc-800">
// // //                   {leaderboard.map((w: any) => (
// // //                     <tr key={w.wardId} className="hover:bg-zinc-800/50 transition">
// // //                       <td className="p-4 font-medium text-zinc-200">{w.wardName}</td>
// // //                       <td className="p-4 text-zinc-400">{w.total}</td>
// // //                       <td className="p-4 text-green-400 font-bold">{w.resolved}</td>
// // //                       <td className="p-4">
// // //                         <span className={`px-2 py-1 rounded text-xs font-bold ${w.resolutionRate > 50 ? "bg-green-900/30 text-green-400" : "bg-yellow-900/30 text-yellow-400"
// // //                           }`}>
// // //                           {w.resolutionRate}%
// // //                         </span>
// // //                       </td>
// // //                     </tr>
// // //                   ))}
// // //                   {leaderboard.length === 0 && (
// // //                     <tr><td colSpan={4} className="p-6 text-center text-zinc-600">No data available.</td></tr>
// // //                   )}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </section>

// // //           {/* Recent Feed */}
// // //           {/* <section className="space-y-5">
// // //                 <h2 className="text-xl font-bold text-zinc-300">⏱️ Live Feed</h2>

// // //                 <div className="space-y-3">
// // //                 {recent.map((c) => (
// // //                     <Link key={c.id} href={`/complaints/${c.id}`} className="group block bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition relative overflow-hidden">
// // //                     <div className="flex justify-between items-start z-10 relative">
// // //                         <div>
// // //                         <div className="font-bold text-lg text-zinc-200 group-hover:text-blue-400 transition">{c.title}</div>
// // //                         <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">
// // //                              {c.category} • {c.ward?.name}
// // //                         </div>
// // //                         </div>
// // //                         <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
// // //                         c.currentStatus === 'RESOLVED' 
// // //                             ? 'bg-green-950 border-green-900 text-green-400' 
// // //                             : 'bg-zinc-950 border-zinc-800 text-zinc-400'
// // //                         }`}>
// // //                         {c.currentStatus}
// // //                         </span>
// // //                     </div>
// // //                     </Link>
// // //                 ))}
// // //                 </div>
// // //             </section> */}
// // //           <section className="space-y-5">
// // //             <h2 className="text-xl font-bold text-zinc-300">⏱️ Live Feed</h2>

// // //             {/* 👇 SCROLLABLE CONTAINER ADDED HERE */}
// // //             <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">

// // //               {recent.map((c) => (
// // //                 <Link
// // //                   key={c.id}
// // //                   href={`/complaints/${c.id}`}
// // //                   className="group block bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition relative overflow-hidden"
// // //                 >
// // //                   <div className="flex justify-between items-start z-10 relative">
// // //                     <div>
// // //                       <div className="font-bold text-lg text-zinc-200 group-hover:text-blue-400 transition">
// // //                         {c.title}
// // //                       </div>
// // //                       <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">
// // //                         {c.category} • {c.ward?.name}
// // //                       </div>
// // //                     </div>
// // //                     <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${c.currentStatus === 'RESOLVED'
// // //                       ? 'bg-green-950 border-green-900 text-green-400'
// // //                       : 'bg-zinc-950 border-zinc-800 text-zinc-400'
// // //                       }`}>
// // //                       {c.currentStatus}
// // //                     </span>
// // //                   </div>
// // //                 </Link>
// // //               ))}

// // //             </div>
// // //           </section>
// // //         </div>
// // //       </div>
// // //     </main>
// // //   );
// // // }


// // "use client";

// // import { useEffect, useState } from "react";
// // import { apiGet } from "@/lib/api";
// // import Link from "next/link";
// // import { useRouter } from "next/navigation";

// // import { Map } from "lucide-react";

// // export default function Home() {
// //   const router = useRouter();

// //   const handleNewReport = () => {
// //     const token = localStorage.getItem("civic_token");
// //     if (!token) {
// //       router.push("/login");
// //     } else {
// //       router.push("/report");
// //     }
// //   };

// //   const handleOfficerConsole = () => {
// //     const token = localStorage.getItem("civic_token");
// //     if (!token) {
// //       router.push("/login");
// //     } else {
// //       router.push("/officer");
// //     }
// //   };

// //   const [authReady, setAuthReady] = useState(false);
// //   const [token, setToken] = useState<string | null>(null);
// //   const [role, setRole] = useState<string | null>(null);

// //   useEffect(() => {
// //     const syncAuth = () => {
// //       setToken(localStorage.getItem("civic_token"));
// //       setRole(localStorage.getItem("civic_role"));
// //       setAuthReady(true);
// //     };

// //     syncAuth();
// //     window.addEventListener("focus", syncAuth);
// //     return () => window.removeEventListener("focus", syncAuth);
// //   }, []);

// //   const isLoggedIn = !!token;
// //   const isCitizen = isLoggedIn && role === "CITIZEN";
// //   const isOfficer = isLoggedIn && role === "OFFICER";

// //   const [complaints, setComplaints] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     apiGet<any[]>("/complaints")
// //       .then(setComplaints)
// //       .catch((err) => console.error(err))
// //       .finally(() => setLoading(false));
// //   }, []);

// //   const leaderboard = Object.values(
// //     complaints.reduce((acc: any, c: any) => {
// //       const wid = c.wardId || "unknown";
// //       if (!acc[wid]) {
// //         acc[wid] = {
// //           wardId: wid,
// //           wardName: c.ward?.name || "Unknown Ward",
// //           total: 0,
// //           resolved: 0,
// //           reopened: 0,
// //         };
// //       }
// //       acc[wid].total++;
// //       if (c.currentStatus === "RESOLVED") acc[wid].resolved++;
// //       if (c.currentStatus === "REOPENED") acc[wid].reopened++;
// //       return acc;
// //     }, {})
// //   ).map((w: any) => ({
// //     ...w,
// //     resolutionRate: w.total > 0 ? Math.round((w.resolved / w.total) * 100) : 0,
// //   }));

// //   const recent = [...complaints]
// //     .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

// //   if (loading) return <div className="p-10 text-zinc-500">Initializing System...</div>;

// //   const handleLogout = async () => {
// //     try {
// //       await fetch(process.env.NEXT_PUBLIC_API_BASE + "/auth/logout", {   
// //         method: "POST",
// //         credentials: "include", 
// //       });
// //     } catch (e) {
// //       console.error("Logout error", e);
// //     }

// //     localStorage.removeItem("civic_token");
// //     localStorage.removeItem("civic_role");
// //     setToken(null);
// //     setRole(null);
// //     router.push("/login");
// //   };

// //   return (
// //     <main className="min-h-screen bg-black p-4 md:p-8 font-sans">
// //       {/* Reduced vertical space on mobile (space-y-6 md:space-y-10) */}
// //       <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">

// //         {/* Header */}
// //         <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-800 pb-5 md:pb-8 gap-5 md:gap-0">
// //           <div className="w-full md:w-auto">
// //             <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">CIVIC<span className="text-blue-500">LOOP</span></h1>
// //             <p className="text-sm md:text-base text-zinc-500 mt-1 md:mt-2">Real-time City Operations Dashboard</p>
// //           </div>

// //           {authReady && (
// //             /* Buttons container stretches on mobile, auto width on desktop */
// //             <div className="flex flex-col sm:flex-row md:flex-wrap gap-3 w-full md:w-auto mt-2 md:mt-0">

// //               {/* LIVE MAP BUTTON - Redesigned to span full width on small screens for easy tapping */}
// //               <Link href="/map" className="w-full sm:w-auto">
// //                 <button className="w-full sm:w-auto justify-center group relative flex items-center gap-3 px-5 py-3 md:py-2.5 md:mr-2 bg-zinc-900/80 backdrop-blur-md border border-white/10 hover:border-blue-500/50 rounded-xl md:rounded-full transition-all duration-300 ease-out shadow-lg shadow-black/20 hover:shadow-blue-900/20">
// //                   <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
// //                     <Map size={14} className="text-blue-400 group-hover:text-blue-300" />
// //                   </div>
// //                   <span className="text-sm font-medium text-zinc-300 group-hover:text-white tracking-wide">
// //                     Live Map
// //                   </span>
// //                   <span className="absolute top-2 right-2 flex h-2 w-2">
// //                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
// //                     <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
// //                   </span>
// //                 </button>
// //               </Link>

// //               {isLoggedIn && (
// //                 <button
// //                   onClick={handleLogout}
// //                   className="w-full sm:w-auto justify-center px-5 py-3 md:py-2.5 bg-red-600/10 border border-red-500/30 text-red-400 rounded-xl md:rounded-lg font-medium hover:bg-red-600/20 hover:text-red-300 transition"
// //                 >
// //                   Logout
// //                 </button>
// //               )}
// //               {!isLoggedIn && (
// //                 <>
// //                   <Link
// //                     href="/login"
// //                     className="flex w-full sm:w-auto justify-center items-center px-5 py-3 md:py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl md:rounded-lg font-medium hover:bg-zinc-800 transition hover:text-white"
// //                   >
// //                     Login
// //                   </Link>
// //                   <button
// //                     onClick={handleNewReport}
// //                     className="w-full sm:w-auto justify-center bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 md:py-2.5 rounded-xl md:rounded-lg font-bold transition shadow-lg shadow-blue-900/20"
// //                   >
// //                     + New Report
// //                   </button>
// //                 </>
// //               )}

// //               {isCitizen && (
// //                 <button
// //                   onClick={() => router.push("/report")}
// //                   className="w-full sm:w-auto justify-center bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 md:py-2.5 rounded-xl md:rounded-lg font-bold transition shadow-lg shadow-blue-900/20"
// //                 >
// //                   + New Report
// //                 </button>
// //               )}

// //               {isOfficer && (
// //                 <button
// //                   onClick={() => router.push("/officer")}
// //                   className="w-full sm:w-auto justify-center px-5 py-3 md:py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl md:rounded-lg font-medium hover:bg-zinc-800 transition hover:text-white"
// //                 >
// //                   Officer Console
// //                 </button>
// //               )}
// //             </div>
// //           )}
// //         </header>

// //         {/* Stats Grid - App-style 2-column mobile layout (Hero top, splits bottom) */}
// //         <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
// //           <div className="bg-zinc-900 border border-zinc-800 p-5 md:p-6 rounded-2xl col-span-2 md:col-span-1">
// //             <div className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-wider">Total Incidents</div>
// //             <div className="text-3xl md:text-4xl font-mono text-white mt-1 md:mt-2">{complaints.length}</div>
// //           </div>
// //           <div className="bg-zinc-900 border border-zinc-800 p-5 md:p-6 rounded-2xl col-span-1">
// //             <div className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-wider">Resolved</div>
// //             <div className="text-3xl md:text-4xl font-mono text-green-500 mt-1 md:mt-2">{complaints.filter(c => c.currentStatus === 'RESOLVED').length}</div>
// //           </div>
// //           <div className="bg-zinc-900 border border-zinc-800 p-5 md:p-6 rounded-2xl col-span-1">
// //             {/* Shorter title on mobile to prevent text wrapping issues */}
// //             <div className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-wider hidden md:block">Pending Action</div>
// //             <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider md:hidden block">Pending</div>
// //             <div className="text-3xl md:text-4xl font-mono text-orange-500 mt-1 md:mt-2">{complaints.filter(c => c.currentStatus !== 'RESOLVED').length}</div>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
// //           {/* Leaderboard */}
// //           <section className="space-y-4 md:space-y-5">
// //             <h2 className="text-lg md:text-xl font-bold text-zinc-300 flex items-center gap-2">
// //               🏆 Ward Performance
// //             </h2>
// //             <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-x-auto">
// //               <table className="w-full text-sm text-left min-w-[350px] md:min-w-[400px]">
// //                 <thead className="bg-zinc-950 text-zinc-500 font-semibold uppercase text-[10px] md:text-xs tracking-wider">
// //                   <tr>
// //                     <th className="p-3 md:p-4">Ward</th>
// //                     <th className="p-3 md:p-4">Total</th>
// //                     <th className="p-3 md:p-4">Resolved</th>
// //                     <th className="p-3 md:p-4">Rate</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="divide-y divide-zinc-800">
// //                   {leaderboard.map((w: any) => (
// //                     <tr key={w.wardId} className="hover:bg-zinc-800/50 transition">
// //                       <td className="p-3 md:p-4 font-medium text-zinc-200 text-xs md:text-sm">{w.wardName}</td>
// //                       <td className="p-3 md:p-4 text-zinc-400 text-xs md:text-sm">{w.total}</td>
// //                       <td className="p-3 md:p-4 text-green-400 font-bold text-xs md:text-sm">{w.resolved}</td>
// //                       <td className="p-3 md:p-4">
// //                         <span className={`px-2 py-1 rounded text-[10px] md:text-xs font-bold ${w.resolutionRate > 50 ? "bg-green-900/30 text-green-400" : "bg-yellow-900/30 text-yellow-400"
// //                           }`}>
// //                           {w.resolutionRate}%
// //                         </span>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                   {leaderboard.length === 0 && (
// //                     <tr><td colSpan={4} className="p-6 text-center text-zinc-600">No data available.</td></tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </section>

// //           {/* Recent Feed */}
// //           <section className="space-y-4 md:space-y-5">
// //             <h2 className="text-lg md:text-xl font-bold text-zinc-300">⏱️ Live Feed</h2>

// //             <div className="space-y-3 max-h-[400px] md:max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
// //               {recent.map((c) => (
// //                 <Link
// //                   key={c.id}
// //                   href={`/complaints/${c.id}`}
// //                   className="group block bg-zinc-900 p-4 md:p-5 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition relative overflow-hidden"
// //                 >
// //                   <div className="flex justify-between items-start z-10 relative gap-2">
// //                     <div className="flex-1">
// //                       <div className="font-bold text-base md:text-lg text-zinc-200 group-hover:text-blue-400 transition leading-snug">
// //                         {c.title}
// //                       </div>
// //                       <div className="text-[10px] md:text-xs text-zinc-500 mt-1.5 uppercase tracking-wide">
// //                         {c.category} • {c.ward?.name}
// //                       </div>
// //                     </div>
// //                     <span className={`px-2.5 py-1 md:px-3 rounded-full text-[9px] md:text-[10px] font-bold border whitespace-nowrap ${c.currentStatus === 'RESOLVED'
// //                       ? 'bg-green-950 border-green-900 text-green-400'
// //                       : 'bg-zinc-950 border-zinc-800 text-zinc-400'
// //                       }`}>
// //                       {c.currentStatus}
// //                     </span>
// //                   </div>
// //                 </Link>
// //               ))}
// //             </div>
// //           </section>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }



// "use client";

// import { useEffect, useState } from "react";
// import { apiGet } from "@/lib/api";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// import { Map, Plus, Shield, LogOut, Activity, CheckCircle2, Clock, Trophy, ArrowRight, Globe } from "lucide-react";

// export default function Home() {
//   const router = useRouter();

//   const handleNewReport = () => {
//     const token = localStorage.getItem("civic_token");
//     if (!token) {
//       router.push("/login");
//     } else {
//       router.push("/report");
//     }
//   };

//   const handleOfficerConsole = () => {
//     const token = localStorage.getItem("civic_token");
//     if (!token) {
//       router.push("/login");
//     } else {
//       router.push("/officer");
//     }
//   };

//   const [authReady, setAuthReady] = useState(false);
//   const [token, setToken] = useState<string | null>(null);
//   const [role, setRole] = useState<string | null>(null);

//   useEffect(() => {
//     const syncAuth = () => {
//       setToken(localStorage.getItem("civic_token"));
//       setRole(localStorage.getItem("civic_role"));
//       setAuthReady(true);
//     };

//     syncAuth();
//     window.addEventListener("focus", syncAuth);
//     return () => window.removeEventListener("focus", syncAuth);
//   }, []);

//   const isLoggedIn = !!token;
//   const isCitizen = isLoggedIn && role === "CITIZEN";
//   const isOfficer = isLoggedIn && role === "OFFICER";
//   const isAdmin = isLoggedIn && role === "ADMIN";

//   const [complaints, setComplaints] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     apiGet<any[]>("/complaints")
//       .then(setComplaints)
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

//   const leaderboard = Object.values(
//     complaints.reduce((acc: any, c: any) => {
//       const wid = c.wardId || "unknown";
//       if (!acc[wid]) {
//         acc[wid] = {
//           wardId: wid,
//           wardName: c.ward?.name || "Unknown Ward",
//           total: 0,
//           resolved: 0,
//           reopened: 0,
//         };
//       }
//       acc[wid].total++;
//       if (c.currentStatus === "RESOLVED") acc[wid].resolved++;
//       if (c.currentStatus === "REOPENED") acc[wid].reopened++;
//       return acc;
//     }, {})
//   )
//     .map((w: any) => ({
//       ...w,
//       resolutionRate: w.total > 0 ? Math.round((w.resolved / w.total) * 100) : 0,
//     }))
//     .sort((a, b) => b.resolutionRate - a.resolutionRate); // Sort by highest resolution rate

//   const recent = [...complaints].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

//   const handleLogout = async () => {
//     try {
//       await fetch(process.env.NEXT_PUBLIC_API_BASE + "/auth/logout", {
//         method: "POST",
//         credentials: "include",
//       });
//     } catch (e) {
//       console.error("Logout error", e);
//     }

//     localStorage.removeItem("civic_token");
//     localStorage.removeItem("civic_role");
//     setToken(null);
//     setRole(null);
//     router.push("/login");
//   };

//   if (loading) return (
//     <div className="min-h-screen bg-black flex items-center justify-center">
//       <div className="flex flex-col items-center gap-4">
//         <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
//         <p className="text-zinc-500 font-medium tracking-widest uppercase text-sm">Initializing Hub...</p>
//       </div>
//     </div>
//   );

//   return (
//     <main className="min-h-screen bg-black font-sans relative overflow-hidden">

//       {/* --- AMBIENT BACKGROUND GLOWS --- */}
//       <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 lg:space-y-10 relative z-10">

//         {/* --- HEADER --- */}
//         <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0 pb-6 border-b border-white/10">
//           <div>
//             <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-white">
//               Civic<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Loop</span>
//             </h1>
//             <p className="text-sm sm:text-base text-zinc-400 mt-2 font-medium flex items-center gap-2">
//               <Globe size={16} className="text-blue-500" /> Real-time City Operations Hub
//             </p>
//           </div>

//           {authReady && (
//             <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">

//               {/* LIVE MAP BUTTON - Glowing Radar Effect */}
//               <Link href="/map" className="flex-1 sm:flex-none">
//                 <button className="w-full justify-center group relative flex items-center gap-3 px-6 py-3 bg-zinc-900/80 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] active:scale-95">
//                   <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
//                     <Map size={14} className="text-blue-400" />
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
//                   </div>
//                   <span className="text-sm font-bold text-zinc-200 group-hover:text-white tracking-wide">Live Map</span>
//                 </button>
//               </Link>

//               {/* ACTION BUTTONS */}
//               {!isLoggedIn ? (
//                 <>
//                   <Link href="/login" className="flex-1 sm:flex-none">
//                     <button className="w-full justify-center px-6 py-3 bg-zinc-900/80 backdrop-blur-xl border border-white/10 text-zinc-300 rounded-2xl font-bold hover:bg-zinc-800 hover:text-white transition-all active:scale-95">
//                       Sign In
//                     </button>
//                   </Link>
//                   <button onClick={handleNewReport} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:opacity-90 active:scale-95">
//                     <Plus size={18} /> Report Issue
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   {(isCitizen || isAdmin) && (
//                     <button onClick={() => router.push("/report")} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:opacity-90 active:scale-95">
//                       <Plus size={18} /> New Report
//                     </button>
//                   )}
//                   {(isOfficer || isAdmin) && (
//                     <button onClick={() => router.push(isAdmin ? "/admin" : "/officer")} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900/80 backdrop-blur-xl border border-white/10 text-zinc-200 hover:text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all active:scale-95">
//                       <Shield size={18} className="text-purple-400" /> {isAdmin ? "Admin Console" : "Officer Console"}
//                     </button>
//                   )}
//                   <button onClick={handleLogout} className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl hover:bg-red-500/20 hover:text-red-300 transition-all active:scale-95" title="Logout">
//                     <LogOut size={20} />
//                   </button>
//                 </>
//               )}
//             </div>
//           )}
//         </header>

//         {/* --- STATS GRID --- */}
//         <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/5 p-6 rounded-[2rem] col-span-2 lg:col-span-1 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
//             <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
//             <div className="flex justify-between items-start mb-4 relative z-10">
//               <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl border border-blue-500/20"><Activity size={24} /></div>
//             </div>
//             <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-1 relative z-10">Total Incidents</div>
//             <div className="text-4xl sm:text-5xl font-black text-white relative z-10">{complaints.length}</div>
//           </div>

//           <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/5 p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
//             <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors" />
//             <div className="flex justify-between items-start mb-4 relative z-10">
//               <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20"><CheckCircle2 size={24} /></div>
//             </div>
//             <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-1 relative z-10">Resolved</div>
//             <div className="text-4xl sm:text-5xl font-black text-white relative z-10">{complaints.filter(c => c.currentStatus === 'RESOLVED').length}</div>
//           </div>

//           <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/5 p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-colors">
//             <div className="absolute -right-6 -top-6 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors" />
//             <div className="flex justify-between items-start mb-4 relative z-10">
//               <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20"><Clock size={24} /></div>
//             </div>
//             <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-1 relative z-10">Pending Action</div>
//             <div className="text-4xl sm:text-5xl font-black text-white relative z-10">{complaints.filter(c => c.currentStatus !== 'RESOLVED').length}</div>
//           </div>
//         </div>

//         {/* --- MAIN CONTENT PANELS --- */}
//         <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8">

//           {/* LEADERBOARD PANEL */}
//           <section className="xl:col-span-7 bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-6 sm:p-8 shadow-2xl flex flex-col h-[500px]">
//             <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-6">
//               <div className="p-2 bg-yellow-500/10 text-yellow-500 rounded-xl border border-yellow-500/20"><Trophy size={20} /></div>
//               Ward Performance
//             </h2>

//             <div className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar pr-2">
//               <table className="w-full text-left min-w-[500px]">
//                 <thead className="sticky top-0 bg-zinc-900/90 backdrop-blur-xl z-10 text-zinc-500 text-xs uppercase tracking-widest font-bold border-b border-white/5">
//                   <tr>
//                     <th className="py-4 px-2">Ward Name</th>
//                     <th className="py-4 px-2 text-center">Incidents</th>
//                     <th className="py-4 px-2">Resolution Rate</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-white/5">
//                   {leaderboard.map((w: any, idx: number) => (
//                     <tr key={w.wardId} className="hover:bg-white/5 transition-colors group">
//                       <td className="py-4 px-2">
//                         <div className="flex items-center gap-3">
//                           <span className={`text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ${idx === 0 ? 'bg-yellow-500/20 text-yellow-500' : idx === 1 ? 'bg-zinc-300/20 text-zinc-300' : idx === 2 ? 'bg-amber-700/20 text-amber-600' : 'bg-zinc-800 text-zinc-500'}`}>{idx + 1}</span>
//                           <span className="font-bold text-zinc-200 group-hover:text-white transition-colors">{w.wardName}</span>
//                         </div>
//                       </td>
//                       <td className="py-4 px-2 text-center text-zinc-400 font-medium">
//                         <span className="text-emerald-400">{w.resolved}</span> / {w.total}
//                       </td>
//                       <td className="py-4 px-2 w-1/2">
//                         <div className="flex items-center gap-3">
//                           <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
//                             <div 
//                               className={`h-full rounded-full transition-all duration-1000 ${w.resolutionRate >= 75 ? 'bg-gradient-to-r from-emerald-500 to-green-400' : w.resolutionRate >= 40 ? 'bg-gradient-to-r from-yellow-500 to-amber-400' : 'bg-gradient-to-r from-red-500 to-rose-400'}`}
//                               style={{ width: `${w.resolutionRate}%` }} 
//                             />
//                           </div>
//                           <span className="text-sm font-bold text-zinc-300 w-10 text-right">{w.resolutionRate}%</span>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                   {leaderboard.length === 0 && (
//                     <tr><td colSpan={3} className="py-8 text-center text-zinc-500 font-medium">No performance data yet.</td></tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           {/* LIVE FEED PANEL */}
//           <section className="xl:col-span-5 bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-6 sm:p-8 shadow-2xl flex flex-col h-[500px]">
//             <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-6">
//               <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
//                 <div className="relative flex h-3 w-3">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
//                 </div>
//               </div>
//               Live Feed
//             </h2>

//             <div className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scrollbar">
//               {recent.map((c) => (
//                 <Link
//                   key={c.id}
//                   href={`/complaints/${c.id}`}
//                   className="group block bg-zinc-950/50 p-4 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-zinc-900 transition-all duration-300 relative overflow-hidden"
//                 >
//                   <div className="flex justify-between items-start gap-4">
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center gap-2 mb-1">
//                         <span className={`w-2 h-2 rounded-full shrink-0 ${c.currentStatus === 'RESOLVED' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : c.currentStatus === 'WORK_IN_PROGRESS' ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]'}`} />
//                         <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider truncate">{c.ward?.name || "Zone"} • {new Date(c.createdAt).toLocaleDateString()}</span>
//                       </div>
//                       <h3 className="font-bold text-zinc-200 group-hover:text-blue-400 transition-colors truncate text-base">{c.title}</h3>
//                     </div>

//                     <div className="flex flex-col items-end gap-2 shrink-0">
//                       <span className={`px-2.5 py-1 rounded-lg text-[9px] font-bold tracking-widest uppercase border ${
//                         c.currentStatus === 'RESOLVED' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
//                         c.currentStatus === 'WORK_IN_PROGRESS' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
//                         'bg-amber-500/10 text-amber-400 border-amber-500/20'
//                       }`}>
//                         {c.currentStatus.replace(/_/g, " ")}
//                       </span>
//                       <ArrowRight size={14} className="text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" />
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//               {recent.length === 0 && (
//                 <div className="py-10 text-center text-zinc-600 font-medium">System idle. No active reports.</div>
//               )}
//             </div>
//           </section>

//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Map, Plus, Shield, LogOut, Activity, CheckCircle2, Clock, Trophy, ArrowRight, Globe, Camera, Navigation } from "lucide-react";


export default function Home() {
  const router = useRouter();

  const handleNewReport = () => {
    const token = localStorage.getItem("civic_token");
    if (!token) {
      router.push("/login");
    } else {
      router.push("/report");
    }
  };

  const handleOfficerConsole = () => {
    const token = localStorage.getItem("civic_token");
    if (!token) {
      router.push("/login");
    } else {
      router.push("/officer");
    }
  };

  const [authReady, setAuthReady] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const syncAuth = () => {
      setToken(localStorage.getItem("civic_token"));
      setRole(localStorage.getItem("civic_role"));
      setAuthReady(true);
    };

    syncAuth();
    window.addEventListener("focus", syncAuth);
    return () => window.removeEventListener("focus", syncAuth);
  }, []);

  const isLoggedIn = !!token;
  const isCitizen = isLoggedIn && role === "CITIZEN";
  const isOfficer = isLoggedIn && role === "OFFICER";
  const isAdmin = isLoggedIn && role === "ADMIN";

  const [complaints, setComplaints] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ NEW: State to track which filter is currently active
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'RESOLVED' | 'PENDING'>('ALL');

  // ✅ NEW: User Location State
  const [userLoc, setUserLoc] = useState<{ lat: number, lng: number } | null>(null);

  // ✅ NEW: Ask for location on load
  // ✅ UPGRADED: Real-time active GPS tracking
  useEffect(() => {
    if (!("geolocation" in navigator)) return;

    // watchPosition continuously updates if the GPS locks on late or the user walks down the street!
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setUserLoc({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.warn("Location access denied or unavailable", error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000
      }
    );

    // ✅ Clean up the tracker if the user leaves the dashboard
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // ✅ NEW: Distance Calculator
  const getDistanceText = (lat?: number, lng?: number) => {
    if (!userLoc || !lat || !lng) return null;

    const R = 6371e3; // Earth radius in metres
    const φ1 = (userLoc.lat * Math.PI) / 180;
    const φ2 = (lat * Math.PI) / 180;
    const Δφ = ((lat - userLoc.lat) * Math.PI) / 180;
    const Δλ = ((lng - userLoc.lng) * Math.PI) / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    if (d < 1000) return `${Math.round(d)}m`;
    return `${(d / 1000).toFixed(1)}km`;
  };

  useEffect(() => {
    apiGet<any[]>("/complaints")
      .then(setComplaints)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const leaderboard = Object.values(
    complaints.reduce((acc: any, c: any) => {
      const wid = c.wardId || "unknown";
      if (!acc[wid]) {
        acc[wid] = {
          wardId: wid,
          wardName: c.ward?.name || "Unknown Ward",
          total: 0,
          resolved: 0,
          reopened: 0,
        };
      }
      acc[wid].total++;
      if (c.currentStatus === "RESOLVED") acc[wid].resolved++;
      if (c.currentStatus === "REOPENED") acc[wid].reopened++;
      return acc;
    }, {})
  )
    .map((w: any) => ({
      ...w,
      resolutionRate: w.total > 0 ? Math.round((w.resolved / w.total) * 100) : 0,
    }))
    .sort((a, b) => b.resolutionRate - a.resolutionRate);

  // ✅ NEW: Filter the complaints based on the active state before sorting them for the Live Feed
  const filteredComplaints = complaints.filter(c => {
    if (activeFilter === 'RESOLVED') return c.currentStatus === 'RESOLVED';
    if (activeFilter === 'PENDING') return c.currentStatus !== 'RESOLVED';
    return true; // 'ALL'
  });

  const recent = [...filteredComplaints].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const handleLogout = async () => {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_BASE + "/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {
      console.error("Logout error", e);
    }

    localStorage.removeItem("civic_token");
    localStorage.removeItem("civic_role");
    setToken(null);
    setRole(null);
    router.push("/login");
  };

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-zinc-500 font-medium tracking-widest uppercase text-sm">Initializing Hub...</p>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-black font-sans relative overflow-hidden">

      {/* --- AMBIENT BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 lg:space-y-10 relative z-10">

        {/* --- HEADER --- */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0 pb-6 border-b border-white/10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-white">
              Civic<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Loop</span>
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 font-medium flex items-center gap-2">
              <Globe size={16} className="text-blue-500" /> Real-time City Operations Hub
            </p>
          </div>

          {authReady && (
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">

              {/* LIVE MAP BUTTON */}
              <Link href="/map" className="flex-1 sm:flex-none">
                <button className="w-full justify-center group relative flex items-center gap-3 px-6 py-3 bg-zinc-900/80 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] active:scale-95">
                  <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                    <Map size={14} className="text-blue-400" />
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
                  </div>
                  <span className="text-sm font-bold text-zinc-200 group-hover:text-white tracking-wide">Live Map</span>
                </button>
              </Link>

              {/* ACTION BUTTONS */}
              {!isLoggedIn ? (
                <>
                  <Link href="/login" className="flex-1 sm:flex-none">
                    <button className="w-full justify-center px-6 py-3 bg-zinc-900/80 backdrop-blur-xl border border-white/10 text-zinc-300 rounded-2xl font-bold hover:bg-zinc-800 hover:text-white transition-all active:scale-95">
                      Sign In
                    </button>
                  </Link>
                  <button onClick={handleNewReport} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:opacity-90 active:scale-95">
                    <Plus size={18} /> Report Issue
                  </button>
                </>
              ) : (
                <>
                  {(isCitizen || isAdmin) && (
                    <button onClick={() => router.push("/report")} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:opacity-90 active:scale-95">
                      <Plus size={18} /> New Report
                    </button>
                  )}
                  {(isOfficer || isAdmin) && (
                    <button onClick={() => router.push(isAdmin ? "/admin" : "/officer")} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900/80 backdrop-blur-xl border border-white/10 text-zinc-200 hover:text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all active:scale-95">
                      <Shield size={18} className="text-purple-400" /> {isAdmin ? "Admin Console" : "Officer Console"}
                    </button>
                  )}
                  <button onClick={handleLogout} className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl hover:bg-red-500/20 hover:text-red-300 transition-all active:scale-95" title="Logout">
                    <LogOut size={20} />
                  </button>
                </>
              )}
            </div>
          )}
        </header>

        {/* --- STATS GRID (NOW CLICKABLE) --- */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          {/* TOTAL INCIDENTS CARD */}
          <div
            onClick={() => setActiveFilter('ALL')}
            className={`cursor-pointer bg-zinc-900/40 backdrop-blur-2xl border p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group transition-all duration-300 col-span-2 lg:col-span-1 
              ${activeFilter === 'ALL' ? 'border-blue-500/50 bg-blue-500/10' : 'border-white/5 hover:border-blue-500/30'}`}
          >
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl transition-colors ${activeFilter === 'ALL' ? 'bg-blue-500/30' : 'bg-blue-500/10 group-hover:bg-blue-500/20'}`} />
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl border border-blue-500/20"><Activity size={24} /></div>
            </div>
            <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-1 relative z-10">Total Incidents</div>
            <div className="text-4xl sm:text-5xl font-black text-white relative z-10">{complaints.length}</div>
          </div>

          {/* RESOLVED CARD */}
          <div
            onClick={() => setActiveFilter('RESOLVED')}
            className={`cursor-pointer bg-zinc-900/40 backdrop-blur-2xl border p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group transition-all duration-300 
              ${activeFilter === 'RESOLVED' ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-white/5 hover:border-emerald-500/30'}`}
          >
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl transition-colors ${activeFilter === 'RESOLVED' ? 'bg-emerald-500/30' : 'bg-emerald-500/10 group-hover:bg-emerald-500/20'}`} />
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20"><CheckCircle2 size={24} /></div>
            </div>
            <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-1 relative z-10">Resolved</div>
            <div className="text-4xl sm:text-5xl font-black text-white relative z-10">{complaints.filter(c => c.currentStatus === 'RESOLVED').length}</div>
          </div>

          {/* PENDING CARD */}
          <div
            onClick={() => setActiveFilter('PENDING')}
            className={`cursor-pointer bg-zinc-900/40 backdrop-blur-2xl border p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group transition-all duration-300 
              ${activeFilter === 'PENDING' ? 'border-amber-500/50 bg-amber-500/10' : 'border-white/5 hover:border-amber-500/30'}`}
          >
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl transition-colors ${activeFilter === 'PENDING' ? 'bg-amber-500/30' : 'bg-amber-500/10 group-hover:bg-amber-500/20'}`} />
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20"><Clock size={24} /></div>
            </div>
            <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-1 relative z-10">Pending Action</div>
            <div className="text-4xl sm:text-5xl font-black text-white relative z-10">{complaints.filter(c => c.currentStatus !== 'RESOLVED').length}</div>
          </div>
        </div>

        {/* --- MAIN CONTENT PANELS --- */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8">

          {/* LEADERBOARD PANEL (UNTOUCHED) */}
          <section className="xl:col-span-7 bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-6 sm:p-8 shadow-2xl flex flex-col h-[500px]">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-500/10 text-yellow-500 rounded-xl border border-yellow-500/20"><Trophy size={20} /></div>
              Ward Performance
            </h2>

            <div className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar pr-2">
              <table className="w-full text-left min-w-[500px]">
                <thead className="sticky top-0 bg-zinc-900/90 backdrop-blur-xl z-10 text-zinc-500 text-xs uppercase tracking-widest font-bold border-b border-white/5">
                  <tr>
                    <th className="py-4 px-2">Ward Name</th>
                    <th className="py-4 px-2 text-center">Incidents</th>
                    <th className="py-4 px-2">Resolution Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {leaderboard.map((w: any, idx: number) => (
                    <tr key={w.wardId} className="hover:bg-white/5 transition-colors group">
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ${idx === 0 ? 'bg-yellow-500/20 text-yellow-500' : idx === 1 ? 'bg-zinc-300/20 text-zinc-300' : idx === 2 ? 'bg-amber-700/20 text-amber-600' : 'bg-zinc-800 text-zinc-500'}`}>{idx + 1}</span>
                          <span className="font-bold text-zinc-200 group-hover:text-white transition-colors">{w.wardName}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-center text-zinc-400 font-medium">
                        <span className="text-emerald-400">{w.resolved}</span> / {w.total}
                      </td>
                      <td className="py-4 px-2 w-1/2">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-1000 ${w.resolutionRate >= 75 ? 'bg-gradient-to-r from-emerald-500 to-green-400' : w.resolutionRate >= 40 ? 'bg-gradient-to-r from-yellow-500 to-amber-400' : 'bg-gradient-to-r from-red-500 to-rose-400'}`}
                              style={{ width: `${w.resolutionRate}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold text-zinc-300 w-10 text-right">{w.resolutionRate}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {leaderboard.length === 0 && (
                    <tr><td colSpan={3} className="py-8 text-center text-zinc-500 font-medium">No performance data yet.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* LIVE FEED PANEL */}
          <section className="xl:col-span-5 bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-6 sm:p-8 shadow-2xl flex flex-col h-[500px]">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </div>
              </div>
              Live Feed
              {/* ✅ NEW: Small indicator to show which filter is active */}
              {activeFilter !== 'ALL' && (
                <span className={`text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider ml-2 ${activeFilter === 'RESOLVED' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                  {activeFilter}
                </span>
              )}
            </h2>

            <div className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scrollbar">
              {recent.map((c) => {
                const distanceText = getDistanceText(c.lat, c.lng);

                return (
                  <Link
                    key={c.id}
                    href={`/complaints/${c.id}`}
                    className="group block bg-zinc-950/50 p-3 sm:p-4 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-zinc-900 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="flex justify-between items-start gap-3 sm:gap-4">

                      {/* THUMBNAIL CONTAINER */}
                      {c.media && c.media.length > 0 ? (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl overflow-hidden border border-white/10 relative bg-zinc-900 shadow-inner">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={c.media[0].url}
                            alt={c.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl border border-white/5 bg-zinc-900/50 flex items-center justify-center text-zinc-700 shadow-inner">
                          <Camera size={18} className="sm:w-5 sm:h-5" />
                        </div>
                      )}

                      {/* ISSUE DETAILS */}
                      <div className="flex-1 min-w-0 py-0.5">
                        <div className="flex items-center gap-2 mb-1.5 sm:mb-1">
                          <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 ${c.currentStatus === 'RESOLVED' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : c.currentStatus === 'WORK_IN_PROGRESS' ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]'}`} />

                          <div className="flex items-center text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-wider truncate">
                            {/* ✅ NEW: DISTANCE BADGE */}
                            {distanceText && (
                              <span className="flex items-center text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded mr-2">
                                <Navigation size={8} className="mr-1 sm:w-3 sm:h-3" />
                                {distanceText}
                              </span>
                            )}
                            <span className="truncate">
                              {c.ward?.name || "Zone"} • {new Date(c.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                            </span>
                          </div>

                        </div>
                        <h3 className="font-bold text-zinc-200 group-hover:text-blue-400 transition-colors truncate text-sm sm:text-base leading-tight">
                          {c.title}
                        </h3>
                      </div>

                      {/* STATUS BADGE & ARROW */}
                      <div className="flex flex-col items-end gap-2 shrink-0 py-0.5">
                        <span className={`px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg text-[8px] sm:text-[9px] font-bold tracking-widest uppercase border ${c.currentStatus === 'RESOLVED' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                          c.currentStatus === 'WORK_IN_PROGRESS' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                            'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          }`}>
                          {c.currentStatus.replace(/_/g, " ")}
                        </span>
                        <ArrowRight size={14} className="text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all hidden sm:block" />
                      </div>

                    </div>
                  </Link>
                );
              })}
              {recent.length === 0 && (
                <div className="py-10 text-center text-zinc-600 font-medium">System idle. No matching reports.</div>
              )}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}