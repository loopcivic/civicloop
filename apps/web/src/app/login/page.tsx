// // // // // // "use client";

// // // // // // export default function Login() {
// // // // // //   function setToken(token: string) {
// // // // // //     localStorage.setItem("civic_token", token);
// // // // // //     window.location.href = "/";
// // // // // //   }

// // // // // //   return (
// // // // // //     <main className="min-h-screen p-10 max-w-xl space-y-4">
// // // // // //       <h1 className="text-2xl font-bold">Pilot Login</h1>
// // // // // //       <p className="text-slate-600 text-sm">
// // // // // //         This is a pilot token-based login. Replace with OTP in scale-up phase.
// // // // // //       </p>

// // // // // //       <div className="grid gap-3">
// // // // // //         <button className="rounded-xl bg-black text-white px-4 py-3"
// // // // // //           onClick={() => setToken("citizen-demo-token")}>
// // // // // //           Continue as Citizen
// // // // // //         </button>
// // // // // //         <button className="rounded-xl border px-4 py-3"
// // // // // //           onClick={() => setToken("officer-demo-token")}>
// // // // // //           Continue as Officer
// // // // // //         </button>
// // // // // //         <button className="rounded-xl border px-4 py-3"
// // // // // //           onClick={() => setToken("admin-demo-token")}>
// // // // // //           Continue as Admin
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </main>
// // // // // //   );
// // // // // // }


// // // // // // gemini

// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import Link from "next/link";

// // // // // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // // // export default function LoginPage() {
// // // // //   const [phone, setPhone] = useState("");
// // // // //   const [code, setCode] = useState("");
// // // // //   const [stage, setStage] = useState<"request" | "verify">("request");
// // // // //   const [err, setErr] = useState<string | null>(null);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   async function requestOtp() {
// // // // //     setErr(null);
// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const res = await fetch(`${API}/auth/request-otp`, {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ phone }),
// // // // //       });
// // // // //       if (!res.ok) throw new Error(await res.text());
// // // // //       setStage("verify");
// // // // //     } catch (e: any) {
// // // // //       setErr(e.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }

// // // // //   // async function verifyOtp() {
// // // // //   //   setErr(null);
// // // // //   //   setLoading(true);
// // // // //   //   try {
// // // // //   //     const res = await fetch(`${API}/auth/verify-otp`, {
// // // // //   //       method: "POST",
// // // // //   //       headers: { "Content-Type": "application/json" },
// // // // //   //       body: JSON.stringify({ phone, code }),
// // // // //   //     });
// // // // //   //     if (!res.ok) throw new Error(await res.text());

// // // // //   //     // Pilot note: Token should be stored in localStorage/Cookie here
// // // // //   //     window.location.href = "/";
// // // // //   //   } catch (e: any) {
// // // // //   //     setErr(e.message);
// // // // //   //   } finally {
// // // // //   //     setLoading(false);
// // // // //   //   }
// // // // //   // }
// // // // //     async function verifyOtp() {
// // // // //     setErr(null);
// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const res = await fetch(`${API}/auth/verify-otp`, { // Ensure API is "/api"
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ phone, code }),
// // // // //       });

// // // // //       if (!res.ok) throw new Error(await res.text());

// // // // //       const data = await res.json(); // 👈 Parse the response

// // // // //       // ✅ NEW: Save the token manually as a backup
// // // // //       if (data.token) {
// // // // //         localStorage.setItem("civic_token", data.token);
// // // // //       }

// // // // //       window.location.href = "/";
// // // // //     } catch (e: any) {
// // // // //       setErr(e.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 font-sans">
// // // // //       <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl space-y-8">

// // // // //         {/* Header */}
// // // // //         <div className="text-center">
// // // // //           <h1 className="text-3xl font-bold text-white tracking-tight">🔐 Secure Login</h1>
// // // // //           <p className="text-zinc-500 text-sm mt-2">
// // // // //             Enter your credentials to access the CivicLoop portal.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Error Banner */}
// // // // //         {err && (
// // // // //           <div className="bg-red-900/20 border border-red-800 text-red-200 p-4 rounded-xl text-sm animate-pulse">
// // // // //             🚨 {err}
// // // // //           </div>
// // // // //         )}

// // // // //         <div className="space-y-6">
// // // // //           {/* Phone Input */}
// // // // //           <div className="space-y-2">
// // // // //             <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Mobile Number</label>
// // // // //             <input 
// // // // //               disabled={stage === "verify" || loading}
// // // // //               className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-600 outline-none transition disabled:opacity-50" 
// // // // //               placeholder="+91 XXXXX XXXXX"
// // // // //               value={phone} 
// // // // //               onChange={(e) => setPhone(e.target.value)} 
// // // // //             />
// // // // //           </div>

// // // // //           {stage === "request" && (
// // // // //             <button 
// // // // //               disabled={loading || !phone}
// // // // //               className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition disabled:opacity-50 flex justify-center items-center gap-2" 
// // // // //               onClick={requestOtp}
// // // // //             >
// // // // //               {loading ? "Generating..." : "Request OTP →"}
// // // // //             </button>
// // // // //           )}

// // // // //           {stage === "verify" && (
// // // // //             <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
// // // // //               <div className="space-y-2">
// // // // //                 <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Verification Code</label>
// // // // //                 <input 
// // // // //                   className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white font-mono text-xl tracking-[0.5em] text-center focus:ring-2 focus:ring-blue-600 outline-none transition" 
// // // // //                   placeholder="000000"
// // // // //                   maxLength={6}
// // // // //                   value={code} 
// // // // //                   onChange={(e) => setCode(e.target.value)} 
// // // // //                 />
// // // // //               </div>

// // // // //               <button 
// // // // //                 disabled={loading || code.length < 6}
// // // // //                 className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 flex justify-center items-center" 
// // // // //                 onClick={verifyOtp}
// // // // //               >
// // // // //                 {loading ? "Verifying..." : "Verify & Continue ✅"}
// // // // //               </button>

// // // // //               <button 
// // // // //                 onClick={() => setStage("request")}
// // // // //                 className="w-full text-zinc-500 text-xs hover:text-zinc-300 transition underline underline-offset-4"
// // // // //               >
// // // // //                 Change phone number
// // // // //               </button>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Footer Note */}
// // // // //         <div className="pt-6 border-t border-zinc-800">
// // // // //           <p className="text-[10px] text-zinc-600 leading-relaxed text-center uppercase tracking-widest">
// // // // //             Pilot Environment: OTP codes are printed in the <span className="text-zinc-400 font-mono">API Server Logs</span>.
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </main>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { useState } from "react";
// // // // import { useRouter } from "next/navigation"; // Better for redirection
// // // // import { ArrowLeft } from "lucide-react";
// // // // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // // export default function LoginPage() {
// // // //   const router = useRouter();

// // // //   // Toggle State (Citizen vs Staff)
// // // //   const [mode, setMode] = useState<"CITIZEN" | "STAFF">("CITIZEN");

// // // //   // Citizen State
// // // //   const [phone, setPhone] = useState("");
// // // //   const [code, setCode] = useState("");
// // // //   const [stage, setStage] = useState<"request" | "verify">("request");

// // // //   // Staff State
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");

// // // //   // Shared State
// // // //   const [err, setErr] = useState<string | null>(null);
// // // //   const [loading, setLoading] = useState(false);

// // // //   // --- CITIZEN HANDLERS ---
// // // //   async function requestOtp() {
// // // //     setErr(null); setLoading(true);
// // // //     try {
// // // //       const res = await fetch(`${API}/auth/request-otp`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ phone }),
// // // //         credentials: "include",
// // // //       });
// // // //       if (!res.ok) throw new Error(await res.text());
// // // //       setStage("verify");
// // // //     } catch (e: any) {
// // // //       setErr(e.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   }

// // // //   async function verifyOtp() {
// // // //     setErr(null); setLoading(true);
// // // //     try {
// // // //       const res = await fetch(`${API}/auth/verify-otp`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ phone, code }),
// // // //         credentials: "include",
// // // //       });
// // // //       if (!res.ok) throw new Error(await res.text());

// // // //       const data = await res.json();
// // // //       // if (data.token) localStorage.setItem("civic_token", data.token);

// // // //       // window.location.href = "/"; // Citizens go to report
// // // //       if (data.token) {
// // // //         localStorage.setItem("civic_token", data.token);
// // // //         localStorage.setItem("civic_role", "CITIZEN");
// // // //       }
// // // //       router.push("/");
// // // //       router.refresh();

// // // //     } catch (e: any) {
// // // //       setErr(e.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   }

// // // //   // --- STAFF HANDLERS (NEW) ---
// // // //   async function handleStaffLogin() {
// // // //     setErr(null); setLoading(true);
// // // //     try {
// // // //       const res = await fetch(`${API}/auth/login-staff`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ email, password }),
// // // //         credentials: "include",
// // // //       });
// // // //       if (!res.ok) throw new Error("Invalid Credentials");

// // // //       const data = await res.json();
// // // //       // localStorage.setItem("civic_token", data.token);

// // // //       // // Redirect based on Role
// // // //       // if (data.role === "OFFICER") window.location.href = "/officer";
// // // //       // else if (data.role === "ADMIN") window.location.href = "/admin";
// // // //       // else window.location.href = "/";

// // // //       localStorage.setItem("civic_token", data.token);

// // // //       // ✅ Save role so Home knows what to show
// // // //       // If your backend returns "OFFICER"/"ADMIN", store same

// // // //       localStorage.setItem("civic_role", data.role);

// // // //       if (data.role === "OFFICER") {
// // // //         router.push("/officer");
// // // //       } else if (data.role === "ADMIN") {
// // // //         router.push("/admin");
// // // //       } else {
// // // //         router.push("/");
// // // //       }
// // // //       router.refresh();


// // // //     } catch (e: any) {
// // // //       setErr(e.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   }

// // // //   return (
// // // //     <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 font-sans">
// // // //       <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl space-y-8">

// // // //         <button
// // // //           onClick={() => router.push("/")}
// // // //           className="
// // // //                       inline-flex items-center gap-2
// // // //                       px-5 py-2
// // // //                       rounded-full
// // // //                       bg-gradient-to-r from-zinc-900 to-zinc-800
// // // //                       border border-zinc-700
// // // //                       text-zinc-300
// // // //                       hover:text-white
// // // //                       hover:border-blue-500/50
// // // //                       hover:shadow-lg hover:shadow-blue-900/20
// // // //                       transition-all duration-200
// // // //                     "
// // // //                           >
// // // //           <ArrowLeft size={16} className="opacity-70" />
// // // //           Dashboard
// // // //         </button>



// // // //         {/* Header */}
// // // //         <div className="text-center">
// // // //           <h1 className="text-3xl font-bold text-white tracking-tight">🔐 Secure Login</h1>
// // // //           <p className="text-zinc-500 text-sm mt-2">
// // // //             Enter your credentials to access the CivicLoop portal.
// // // //           </p>
// // // //         </div>

// // // //         {/* Error Banner */}
// // // //         {err && (
// // // //           <div className="bg-red-900/20 border border-red-800 text-red-200 p-4 rounded-xl text-sm animate-pulse">
// // // //             🚨 {err}
// // // //           </div>
// // // //         )}

// // // //         {/* ✅ NEW: Toggle Switch (Matches your theme) */}
// // // //         <div className="flex bg-zinc-950 p-1 rounded-xl border border-zinc-800">
// // // //           <button
// // // //             onClick={() => setMode("CITIZEN")}
// // // //             className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${mode === "CITIZEN" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
// // // //               }`}
// // // //           >
// // // //             Citizen
// // // //           </button>
// // // //           <button
// // // //             onClick={() => setMode("STAFF")}
// // // //             className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${mode === "STAFF" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
// // // //               }`}
// // // //           >
// // // //             Official Staff
// // // //           </button>
// // // //         </div>

// // // //         {/* --- MODE 1: CITIZEN FORM (Your Original Code) --- */}
// // // //         {mode === "CITIZEN" && (
// // // //           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
// // // //             <div className="space-y-2">
// // // //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Mobile Number</label>
// // // //               <input
// // // //                 disabled={stage === "verify" || loading}
// // // //                 className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-600 outline-none transition disabled:opacity-50"
// // // //                 placeholder="+91 XXXXX XXXXX"
// // // //                 value={phone}
// // // //                 onChange={(e) => setPhone(e.target.value)}
// // // //               />
// // // //             </div>

// // // //             {stage === "request" && (
// // // //               <button
// // // //                 disabled={loading || !phone}
// // // //                 className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition disabled:opacity-50 flex justify-center items-center gap-2"
// // // //                 onClick={requestOtp}
// // // //               >
// // // //                 {loading ? "Generating..." : "Request OTP →"}
// // // //               </button>
// // // //             )}

// // // //             {stage === "verify" && (
// // // //               <div className="space-y-6">
// // // //                 <div className="space-y-2">
// // // //                   <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Verification Code</label>
// // // //                   <input
// // // //                     className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white font-mono text-xl tracking-[0.5em] text-center focus:ring-2 focus:ring-blue-600 outline-none transition"
// // // //                     placeholder="000000"
// // // //                     maxLength={6}
// // // //                     value={code}
// // // //                     onChange={(e) => setCode(e.target.value)}
// // // //                   />
// // // //                 </div>

// // // //                 <button
// // // //                   disabled={loading || code.length < 6}
// // // //                   className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 flex justify-center items-center"
// // // //                   onClick={verifyOtp}
// // // //                 >
// // // //                   {loading ? "Verifying..." : "Verify & Continue ✅"}
// // // //                 </button>

// // // //                 <button
// // // //                   onClick={() => setStage("request")}
// // // //                   className="w-full text-zinc-500 text-xs hover:text-zinc-300 transition underline underline-offset-4"
// // // //                 >
// // // //                   Change phone number
// // // //                 </button>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         )}

// // // //         {/* --- MODE 2: STAFF FORM (New Feature, Same Style) --- */}
// // // //         {mode === "STAFF" && (
// // // //           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
// // // //             <div className="space-y-2">
// // // //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Official Email</label>
// // // //               <input
// // // //                 className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-600 outline-none transition"
// // // //                 placeholder="officer@civic.com"
// // // //                 value={email}
// // // //                 onChange={(e) => setEmail(e.target.value)}
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-2">
// // // //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Password</label>
// // // //               <input
// // // //                 type="password"
// // // //                 className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-600 outline-none transition"
// // // //                 placeholder="••••••••"
// // // //                 value={password}
// // // //                 onChange={(e) => setPassword(e.target.value)}
// // // //               />
// // // //             </div>

// // // //             <button
// // // //               disabled={loading}
// // // //               className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl hover:bg-purple-500 transition shadow-lg shadow-purple-900/20 flex justify-center items-center"
// // // //               onClick={handleStaffLogin}
// // // //             >
// // // //               {loading ? "Authenticating..." : "Access Dashboard 👮‍♂️"}
// // // //             </button>
// // // //           </div>
// // // //         )}

// // // //         {/* Footer Note */}
// // // //         <div className="pt-6 border-t border-zinc-800">
// // // //           <p className="text-[10px] text-zinc-600 leading-relaxed text-center uppercase tracking-widest">
// // // //             Pilot Environment: OTP codes are printed in the <span className="text-zinc-400 font-mono">API Server Logs</span>.
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }

// // // "use client";

// // // import { useState } from "react";
// // // import { useRouter } from "next/navigation"; // Better for redirection
// // // import { ArrowLeft } from "lucide-react";
// // // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // // export default function LoginPage() {
// // //   const router = useRouter();

// // //   // Toggle State (Citizen vs Staff)
// // //   const [mode, setMode] = useState<"CITIZEN" | "STAFF">("CITIZEN");

// // //   // Citizen State
// // //   const [phone, setPhone] = useState("");
// // //   const [code, setCode] = useState("");
// // //   const [stage, setStage] = useState<"request" | "verify">("request");

// // //   // Staff State
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   // Shared State
// // //   const [err, setErr] = useState<string | null>(null);
// // //   const [loading, setLoading] = useState(false);

// // //   // --- CITIZEN HANDLERS ---
// // //   async function requestOtp() {
// // //     setErr(null); setLoading(true);
// // //     try {
// // //       const res = await fetch(`${API}/auth/request-otp`, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ phone }),
// // //         credentials: "include",
// // //       });
// // //       if (!res.ok) throw new Error(await res.text());
// // //       setStage("verify");
// // //     } catch (e: any) {
// // //       setErr(e.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }

// // //   async function verifyOtp() {
// // //     setErr(null); setLoading(true);
// // //     try {
// // //       const res = await fetch(`${API}/auth/verify-otp`, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ phone, code }),
// // //         credentials: "include",
// // //       });
// // //       if (!res.ok) throw new Error(await res.text());

// // //       const data = await res.json();

// // //       if (data.token) {
// // //         localStorage.setItem("civic_token", data.token);
// // //         localStorage.setItem("civic_role", "CITIZEN");

// // //         // ✅ DISPATCH EVENT FOR INSTANT UPDATE
// // //         window.dispatchEvent(new Event("authChanged"));
// // //       }

// // //       router.push("/");
// // //       router.refresh();

// // //     } catch (e: any) {
// // //       setErr(e.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }

// // //   // --- STAFF HANDLERS ---
// // //   async function handleStaffLogin() {
// // //     setErr(null);
// // //     setLoading(true);
// // //     try {
// // //       const res = await fetch(`${API}/auth/login-staff`, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ email, password }),
// // //         credentials: "include",
// // //       });

// // //       // ✅ FIX: Extract the actual message from the backend
// // //       if (!res.ok) {
// // //         const errorData = await res.json();
// // //         throw new Error(errorData.message || "Login failed");
// // //       }

// // //       const data = await res.json();

// // //       localStorage.setItem("civic_token", data.token);
// // //       localStorage.setItem("civic_role", data.role);

// // //       window.dispatchEvent(new Event("authChanged"));

// // //       if (data.role === "OFFICER") {
// // //         router.push("/officer");
// // //       } else if (data.role === "ADMIN") {
// // //         router.push("/admin");
// // //       } else {
// // //         router.push("/");
// // //       }
// // //       router.refresh();

// // //     } catch (e: any) {
// // //       // This will now catch "Your account is currently inactive..."
// // //       setErr(e.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }

// // //   return (
// // //     <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 font-sans">
// // //       <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl space-y-8">

// // //         <button
// // //           onClick={() => router.push("/")}
// // //           className="
// // //             inline-flex items-center gap-2
// // //             px-5 py-2
// // //             rounded-full
// // //             bg-gradient-to-r from-zinc-900 to-zinc-800
// // //             border border-zinc-700
// // //             text-zinc-300
// // //             hover:text-white
// // //             hover:border-blue-500/50
// // //             hover:shadow-lg hover:shadow-blue-900/20
// // //             transition-all duration-200
// // //           "
// // //         >
// // //           <ArrowLeft size={16} className="opacity-70" />
// // //           Dashboard
// // //         </button>

// // //         {/* Header */}
// // //         <div className="text-center">
// // //           <h1 className="text-3xl font-bold text-white tracking-tight">🔐 Secure Login</h1>
// // //           <p className="text-zinc-500 text-sm mt-2">
// // //             Enter your credentials to access the CivicLoop portal.
// // //           </p>
// // //         </div>

// // //         {/* Error Banner */}
// // //         {err && (
// // //           <div className="bg-red-900/20 border border-red-800 text-red-200 p-4 rounded-xl text-sm animate-pulse">
// // //             🚨 {err}
// // //           </div>
// // //         )}

// // //         {/* Toggle Switch */}
// // //         <div className="flex bg-zinc-950 p-1 rounded-xl border border-zinc-800">
// // //           <button
// // //             onClick={() => setMode("CITIZEN")}
// // //             className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${mode === "CITIZEN" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
// // //           >
// // //             Citizen
// // //           </button>
// // //           <button
// // //             onClick={() => setMode("STAFF")}
// // //             className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${mode === "STAFF" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
// // //           >
// // //             Official Staff
// // //           </button>
// // //         </div>

// // //         {/* CITIZEN FORM */}
// // //         {mode === "CITIZEN" && (
// // //           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
// // //             <div className="space-y-2">
// // //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Mobile Number</label>
// // //               <input
// // //                 disabled={stage === "verify" || loading}
// // //                 className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-600 outline-none transition disabled:opacity-50"
// // //                 placeholder="+91 XXXXX XXXXX"
// // //                 value={phone}
// // //                 onChange={(e) => setPhone(e.target.value)}
// // //               />
// // //             </div>

// // //             {stage === "request" && (
// // //               <button
// // //                 disabled={loading || !phone}
// // //                 className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition disabled:opacity-50 flex justify-center items-center gap-2"
// // //                 onClick={requestOtp}
// // //               >
// // //                 {loading ? "Generating..." : "Request OTP →"}
// // //               </button>
// // //             )}

// // //             {stage === "verify" && (
// // //               <div className="space-y-6">
// // //                 <div className="space-y-2">
// // //                   <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Verification Code</label>
// // //                   <input
// // //                     className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white font-mono text-xl tracking-[0.5em] text-center focus:ring-2 focus:ring-blue-600 outline-none transition"
// // //                     placeholder="000000"
// // //                     maxLength={6}
// // //                     value={code}
// // //                     onChange={(e) => setCode(e.target.value)}
// // //                   />
// // //                 </div>

// // //                 <button
// // //                   disabled={loading || code.length < 6}
// // //                   className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 flex justify-center items-center"
// // //                   onClick={verifyOtp}
// // //                 >
// // //                   {loading ? "Verifying..." : "Verify & Continue ✅"}
// // //                 </button>

// // //                 <button
// // //                   onClick={() => setStage("request")}
// // //                   className="w-full text-zinc-500 text-xs hover:text-zinc-300 transition underline underline-offset-4"
// // //                 >
// // //                   Change phone number
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         )}

// // //         {/* STAFF FORM */}
// // //         {mode === "STAFF" && (
// // //           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
// // //             <div className="space-y-2">
// // //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Official Email</label>
// // //               <input
// // //                 className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-600 outline-none transition"
// // //                 placeholder="officer@civic.com"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //               />
// // //             </div>

// // //             <div className="space-y-2">
// // //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Password</label>
// // //               <input
// // //                 type="password"
// // //                 className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-600 outline-none transition"
// // //                 placeholder="••••••••"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //               />
// // //             </div>

// // //             <button
// // //               disabled={loading}
// // //               className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl hover:bg-purple-500 transition shadow-lg shadow-purple-900/20 flex justify-center items-center"
// // //               onClick={handleStaffLogin}
// // //             >
// // //               {loading ? "Authenticating..." : "Access Dashboard 👮‍♂️"}
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* Footer Note */}
// // //         <div className="pt-6 border-t border-zinc-800">
// // //           <p className="text-[10px] text-zinc-600 leading-relaxed text-center uppercase tracking-widest">
// // //             Pilot Environment: OTP codes are printed in the <span className="text-zinc-400 font-mono">API Server Logs</span>.
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </main>
// // //   );
// // // }


// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation"; 
// // import { ArrowLeft } from "lucide-react";
// // const API = process.env.NEXT_PUBLIC_API_BASE!;

// // export default function LoginPage() {
// //   const router = useRouter();

// //   // Toggle State (Citizen vs Staff)
// //   const [mode, setMode] = useState<"CITIZEN" | "STAFF">("CITIZEN");

// //   // ✅ CITIZEN STATE: Changed 'phone' to 'identifier'
// //   const [identifier, setIdentifier] = useState("");
// //   const [code, setCode] = useState("");
// //   const [stage, setStage] = useState<"request" | "verify">("request");

// //   // Staff State
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   // Shared State
// //   const [err, setErr] = useState<string | null>(null);
// //   const [loading, setLoading] = useState(false);

// //   // --- CITIZEN HANDLERS ---
// //   async function requestOtp() {
// //     setErr(null); setLoading(true);
// //     try {
// //       const res = await fetch(`${API}/auth/request-otp`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         // ✅ Send identifier instead of phone
// //         body: JSON.stringify({ identifier }),
// //         credentials: "include",
// //       });
// //       if (!res.ok) throw new Error(await res.text());
// //       setStage("verify");
// //     } catch (e: any) {
// //       setErr(e.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   async function verifyOtp() {
// //     setErr(null); setLoading(true);
// //     try {
// //       const res = await fetch(`${API}/auth/verify-otp`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         // ✅ Send identifier instead of phone
// //         body: JSON.stringify({ identifier, code }),
// //         credentials: "include",
// //       });
// //       if (!res.ok) throw new Error(await res.text());

// //       const data = await res.json();

// //       if (data.token) {
// //         localStorage.setItem("civic_token", data.token);
// //         localStorage.setItem("civic_role", "CITIZEN");

// //         // DISPATCH EVENT FOR INSTANT UPDATE
// //         window.dispatchEvent(new Event("authChanged"));
// //       }

// //       router.push("/");
// //       router.refresh();

// //     } catch (e: any) {
// //       setErr(e.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   // --- STAFF HANDLERS ---
// //   async function handleStaffLogin() {
// //     setErr(null);
// //     setLoading(true);
// //     try {
// //       const res = await fetch(`${API}/auth/login-staff`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email, password }),
// //         credentials: "include",
// //       });

// //       if (!res.ok) {
// //         const errorData = await res.json();
// //         throw new Error(errorData.message || "Login failed");
// //       }

// //       const data = await res.json();

// //       localStorage.setItem("civic_token", data.token);
// //       localStorage.setItem("civic_role", data.role);

// //       window.dispatchEvent(new Event("authChanged"));

// //       if (data.role === "OFFICER") {
// //         router.push("/officer");
// //       } else if (data.role === "ADMIN") {
// //         router.push("/admin");
// //       } else {
// //         router.push("/");
// //       }
// //       router.refresh();

// //     } catch (e: any) {
// //       setErr(e.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   return (
// //     <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 font-sans">
// //       <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl space-y-8">

// //         <button
// //           onClick={() => router.push("/")}
// //           className="
// //             inline-flex items-center gap-2
// //             px-5 py-2
// //             rounded-full
// //             bg-gradient-to-r from-zinc-900 to-zinc-800
// //             border border-zinc-700
// //             text-zinc-300
// //             hover:text-white
// //             hover:border-blue-500/50
// //             hover:shadow-lg hover:shadow-blue-900/20
// //             transition-all duration-200
// //           "
// //         >
// //           <ArrowLeft size={16} className="opacity-70" />
// //           Dashboard
// //         </button>

// //         {/* Header */}
// //         <div className="text-center">
// //           <h1 className="text-3xl font-bold text-white tracking-tight">🔐 Secure Login</h1>
// //           <p className="text-zinc-500 text-sm mt-2">
// //             Enter your credentials to access the CivicLoop portal.
// //           </p>
// //         </div>

// //         {/* Error Banner */}
// //         {err && (
// //           <div className="bg-red-900/20 border border-red-800 text-red-200 p-4 rounded-xl text-sm animate-pulse">
// //             🚨 {err}
// //           </div>
// //         )}

// //         {/* Toggle Switch */}
// //         <div className="flex bg-zinc-950 p-1 rounded-xl border border-zinc-800">
// //           <button
// //             onClick={() => setMode("CITIZEN")}
// //             className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${mode === "CITIZEN" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
// //           >
// //             Citizen
// //           </button>
// //           <button
// //             onClick={() => setMode("STAFF")}
// //             className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${mode === "STAFF" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
// //           >
// //             Official Staff
// //           </button>
// //         </div>

// //         {/* CITIZEN FORM */}
// //         {mode === "CITIZEN" && (
// //           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
// //             <div className="space-y-2">
// //               {/* ✅ UPDATED LABEL */}
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Mobile Number or Email</label>
// //               <input
// //                 disabled={stage === "verify" || loading}
// //                 className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-600 outline-none transition disabled:opacity-50"
// //                 /* ✅ UPDATED PLACEHOLDER */
// //                 placeholder="e.g. +919876543210 or user@civic.com"
// //                 value={identifier}
// //                 onChange={(e) => setIdentifier(e.target.value)}
// //               />
// //             </div>

// //             {stage === "request" && (
// //               <button
// //                 disabled={loading || !identifier}
// //                 className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition disabled:opacity-50 flex justify-center items-center gap-2"
// //                 onClick={requestOtp}
// //               >
// //                 {loading ? "Generating..." : "Request OTP →"}
// //               </button>
// //             )}

// //             {stage === "verify" && (
// //               <div className="space-y-6">
// //                 <div className="space-y-2">
// //                   <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Verification Code</label>
// //                   <input
// //                     className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white font-mono text-xl tracking-[0.5em] text-center focus:ring-2 focus:ring-blue-600 outline-none transition"
// //                     placeholder="000000"
// //                     maxLength={6}
// //                     value={code}
// //                     onChange={(e) => setCode(e.target.value)}
// //                   />
// //                 </div>

// //                 <button
// //                   disabled={loading || code.length < 6}
// //                   className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 flex justify-center items-center"
// //                   onClick={verifyOtp}
// //                 >
// //                   {loading ? "Verifying..." : "Verify & Continue ✅"}
// //                 </button>

// //                 <button
// //                   onClick={() => setStage("request")}
// //                   className="w-full text-zinc-500 text-xs hover:text-zinc-300 transition underline underline-offset-4"
// //                 >
// //                   {/* ✅ UPDATED BACK BUTTON TEXT */}
// //                   Change mobile number or email
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         {/* STAFF FORM */}
// //         {mode === "STAFF" && (
// //           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
// //             <div className="space-y-2">
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Official Email</label>
// //               <input
// //                 className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-600 outline-none transition"
// //                 placeholder="officer@civic.com"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Password</label>
// //               <input
// //                 type="password"
// //                 className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-600 outline-none transition"
// //                 placeholder="••••••••"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />
// //             </div>

// //             <button
// //               disabled={loading}
// //               className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl hover:bg-purple-500 transition shadow-lg shadow-purple-900/20 flex justify-center items-center"
// //               onClick={handleStaffLogin}
// //             >
// //               {loading ? "Authenticating..." : "Access Dashboard 👮‍♂️"}
// //             </button>
// //           </div>
// //         )}

// //         {/* Footer Note */}
// //         <div className="pt-6 border-t border-zinc-800">
// //           <p className="text-[10px] text-zinc-600 leading-relaxed text-center uppercase tracking-widest">
// //             Pilot Environment: OTP codes are printed in the <span className="text-zinc-400 font-mono">API Server Logs</span>.
// //           </p>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation"; 
// import { ArrowLeft, User, Mail, Phone } from "lucide-react"; // Added icons
// const API = process.env.NEXT_PUBLIC_API_BASE!;

// export default function LoginPage() {
//   const router = useRouter();

//   // Toggle State (Citizen vs Staff)
//   const [mode, setMode] = useState<"CITIZEN" | "STAFF">("CITIZEN");

//   // ✅ CITIZEN STATE: Added 'onboarding' stage
//   const [identifier, setIdentifier] = useState("");
//   const [code, setCode] = useState("");
//   const [stage, setStage] = useState<"request" | "verify" | "onboarding">("request");

//   // ✅ NEW ONBOARDING STATE
//   const [onboardName, setOnboardName] = useState("");
//   const [onboardEmail, setOnboardEmail] = useState("");
//   const [onboardPhone, setOnboardPhone] = useState("");

//   // Staff State
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Shared State
//   const [err, setErr] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   // --- CITIZEN HANDLERS ---
//   async function requestOtp() {
//     setErr(null); setLoading(true);
//     try {
//       const res = await fetch(`${API}/auth/request-otp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ identifier }),
//         credentials: "include",
//       });
//       if (!res.ok) throw new Error(await res.text());
//       setStage("verify");
//     } catch (e: any) {
//       setErr(e.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function verifyOtp() {
//     setErr(null); setLoading(true);
//     try {
//       const res = await fetch(`${API}/auth/verify-otp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ identifier, code }),
//         credentials: "include",
//       });
//       if (!res.ok) throw new Error(await res.text());

//       const data = await res.json();

//       if (data.token) {
//         localStorage.setItem("civic_token", data.token);
//         localStorage.setItem("civic_role", "CITIZEN");
//         window.dispatchEvent(new Event("authChanged"));
//       }

//       // ✅ LOGIC: Check if it's a new user by their auto-generated name
//       if (data.user?.name?.startsWith("CITIZEN-")) {
//         // Pre-fill the identifier they used
//         if (identifier.includes("@")) {
//           setOnboardEmail(identifier);
//         } else {
//           setOnboardPhone(identifier);
//         }
//         setStage("onboarding"); // Move to profile completion
//       } else {
//         // Existing user -> Go straight to dashboard
//         router.push("/");
//         router.refresh();
//       }

//     } catch (e: any) {
//       setErr(e.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // ✅ NEW: Save Profile Handler
//   async function completeOnboarding() {
//     if (!onboardName) {
//       setErr("Name is required");
//       return;
//     }
//     setErr(null); setLoading(true);
//     try {
//       const res = await fetch(`${API}/auth/profile`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           name: onboardName, 
//           email: onboardEmail, 
//           phone: onboardPhone 
//         }),
//         credentials: "include",
//       });
      
//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || "Failed to save profile");
//       }

//       // Profile saved! Send them to dashboard
//       window.dispatchEvent(new Event("authChanged")); 
//       router.push("/");
//       router.refresh();

//     } catch (e: any) {
//       setErr(e.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // --- STAFF HANDLERS ---
//   async function handleStaffLogin() {
//     setErr(null); setLoading(true);
//     try {
//       const res = await fetch(`${API}/auth/login-staff`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//         credentials: "include",
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || "Login failed");
//       }

//       const data = await res.json();

//       localStorage.setItem("civic_token", data.token);
//       localStorage.setItem("civic_role", data.role);
//       window.dispatchEvent(new Event("authChanged"));

//       if (data.role === "OFFICER") router.push("/officer");
//       else if (data.role === "ADMIN") router.push("/admin");
//       else router.push("/");
      
//       router.refresh();
//     } catch (e: any) {
//       setErr(e.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 font-sans">
//       <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl space-y-8 relative overflow-hidden">

//         {/* ✅ Hide standard header elements if in onboarding mode */}
//         {stage !== "onboarding" && (
//           <>
//             <button
//               onClick={() => router.push("/")}
//               className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-200"
//             >
//               <ArrowLeft size={16} className="opacity-70" /> Dashboard
//             </button>

//             <div className="text-center">
//               <h1 className="text-3xl font-bold text-white tracking-tight">🔐 Secure Login</h1>
//               <p className="text-zinc-500 text-sm mt-2">Enter your credentials to access the CivicLoop portal.</p>
//             </div>
//           </>
//         )}

//         {err && (
//           <div className="bg-red-900/20 border border-red-800 text-red-200 p-4 rounded-xl text-sm animate-pulse">
//             🚨 {err}
//           </div>
//         )}

//         {/* Hide toggle switch during onboarding */}
//         {stage !== "onboarding" && (
//           <div className="flex bg-zinc-950 p-1 rounded-xl border border-zinc-800">
//             <button onClick={() => setMode("CITIZEN")} className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${mode === "CITIZEN" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}>Citizen</button>
//             <button onClick={() => setMode("STAFF")} className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${mode === "STAFF" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}>Official Staff</button>
//           </div>
//         )}

//         {/* CITIZEN FORM */}
//         {mode === "CITIZEN" && (
//           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            
//             {stage === "request" && (
//               <>
//                 <div className="space-y-2">
//                   <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Mobile Number or Email</label>
//                   <input
//                     disabled={loading}
//                     className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-600 outline-none transition disabled:opacity-50"
//                     placeholder="e.g. +919876543210 or user@civic.com"
//                     value={identifier}
//                     onChange={(e) => setIdentifier(e.target.value)}
//                   />
//                 </div>
//                 <button disabled={loading || !identifier} className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition disabled:opacity-50 flex justify-center items-center gap-2" onClick={requestOtp}>
//                   {loading ? "Generating..." : "Request OTP →"}
//                 </button>
//               </>
//             )}

//             {stage === "verify" && (
//               <div className="space-y-6">
//                 <div className="space-y-2">
//                   <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Verification Code</label>
//                   <input
//                     className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white font-mono text-xl tracking-[0.5em] text-center focus:ring-2 focus:ring-blue-600 outline-none transition"
//                     placeholder="000000" maxLength={6} value={code} onChange={(e) => setCode(e.target.value)}
//                   />
//                 </div>
//                 <button disabled={loading || code.length < 6} className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 flex justify-center items-center" onClick={verifyOtp}>
//                   {loading ? "Verifying..." : "Verify & Continue ✅"}
//                 </button>
//                 <button onClick={() => setStage("request")} className="w-full text-zinc-500 text-xs hover:text-zinc-300 transition underline underline-offset-4">
//                   Change mobile number or email
//                 </button>
//               </div>
//             )}

//             {/* ✅ NEW: ONBOARDING SCREEN */}
//             {stage === "onboarding" && (
//               <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
//                 <div className="text-center mb-6">
//                   <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
//                     <User size={32} />
//                   </div>
//                   <h2 className="text-2xl font-bold text-white">Complete Your Profile</h2>
//                   <p className="text-sm text-zinc-400 mt-1">Just a few more details to get you started.</p>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2"><User size={12}/> Full Name *</label>
//                     <input className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" placeholder="e.g. Rahul Sharma" value={onboardName} onChange={(e) => setOnboardName(e.target.value)} />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2"><Mail size={12}/> Email Address</label>
//                     <input className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" placeholder="user@civic.com" value={onboardEmail} onChange={(e) => setOnboardEmail(e.target.value)} />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2"><Phone size={12}/> Mobile Number</label>
//                     <input className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" placeholder="+91 98765 43210" value={onboardPhone} onChange={(e) => setOnboardPhone(e.target.value)} />
//                   </div>
//                 </div>

//                 <button disabled={loading || !onboardName} className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 disabled:opacity-50" onClick={completeOnboarding}>
//                   {loading ? "Saving..." : "Save & Access Dashboard"}
//                 </button>
//                 <button onClick={() => { router.push("/"); router.refresh(); }} className="w-full text-zinc-500 text-xs hover:text-zinc-300 transition">
//                   Skip for now
//                 </button>
//               </div>
//             )}
//           </div>
//         )}

//         {/* STAFF FORM */}
//         {mode === "STAFF" && stage !== "onboarding" && (
//           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Official Email</label>
//               <input className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-600 outline-none transition" placeholder="officer@civic.com" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </div>
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Password</label>
//               <input type="password" className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-600 outline-none transition" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <button disabled={loading} className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl hover:bg-purple-500 transition shadow-lg shadow-purple-900/20 flex justify-center items-center" onClick={handleStaffLogin}>
//               {loading ? "Authenticating..." : "Access Dashboard 👮‍♂️"}
//             </button>
//           </div>
//         )}

//       </div>
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { ArrowLeft, User, Mail, Phone, Lock, Shield, Loader2, KeyRound } from "lucide-react"; 

const API = process.env.NEXT_PUBLIC_API_BASE!;

export default function LoginPage() {
  const router = useRouter();

  // Toggle State (Citizen vs Staff)
  const [mode, setMode] = useState<"CITIZEN" | "STAFF">("CITIZEN");

  // CITIZEN STATE
  const [identifier, setIdentifier] = useState("");
  const [code, setCode] = useState("");
  const [stage, setStage] = useState<"request" | "verify" | "onboarding">("request");

  // ONBOARDING STATE
  const [onboardName, setOnboardName] = useState("");
  const [onboardEmail, setOnboardEmail] = useState("");
  const [onboardPhone, setOnboardPhone] = useState("");

  // Staff State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Shared State
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // --- CITIZEN HANDLERS ---
  async function requestOtp() {
    setErr(null); setLoading(true);
    try {
      const res = await fetch(`${API}/auth/request-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier }),
        credentials: "include",
      });
      if (!res.ok) throw new Error(await res.text());
      setStage("verify");
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp() {
    setErr(null); setLoading(true);
    try {
      const res = await fetch(`${API}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, code }),
        credentials: "include",
      });
      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("civic_token", data.token);
        localStorage.setItem("civic_role", "CITIZEN");
        document.cookie = `civic_session=${data.token}; path=/; max-age=86400; SameSite=Lax`;
        window.dispatchEvent(new Event("authChanged"));
      }

      if (data.user?.name?.startsWith("CITIZEN-")) {
        if (identifier.includes("@")) {
          setOnboardEmail(identifier);
        } else {
          setOnboardPhone(identifier);
        }
        setStage("onboarding"); 
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  // --- ONBOARDING HANDLER ---
  async function completeOnboarding() {
    if (!onboardName) {
      setErr("Name is required");
      return;
    }
    setErr(null); setLoading(true);
    try {
      const res = await fetch(`${API}/auth/profile`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: onboardName, email: onboardEmail, phone: onboardPhone }),
        credentials: "include",
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to save profile");
      }

      window.dispatchEvent(new Event("authChanged")); 
      router.push("/");
      router.refresh();
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  // --- STAFF HANDLERS ---
  async function handleStaffLogin() {
    setErr(null); setLoading(true);
    try {
      const res = await fetch(`${API}/auth/login-staff`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await res.json();
      localStorage.setItem("civic_token", data.token);
      localStorage.setItem("civic_role", data.role);
      document.cookie = `civic_session=${data.token}; path=/; max-age=86400; SameSite=Lax`;
      window.dispatchEvent(new Event("authChanged"));

      if (data.role === "OFFICER") router.push("/officer");
      else if (data.role === "ADMIN") router.push("/admin");
      else router.push("/");
      
      router.refresh();
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  const themeColor = mode === "CITIZEN" ? "blue" : "purple";

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 font-sans relative overflow-hidden">
      
      {/* --- AMBIENT BACKGROUND GLOW --- */}
      <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-${themeColor}-600/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-1000`} />
      <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-${mode === "CITIZEN" ? "cyan" : "pink"}-600/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-1000`} />

      <div className="w-full max-w-md bg-zinc-950/60 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10">

        {/* HEADER */}
        {stage !== "onboarding" && (
          <div className="mb-8">
            <button
              onClick={() => router.push("/")}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300 mb-6 text-sm font-medium"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
            </button>

            <div className="text-center space-y-2">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                Civic<span className={`text-transparent bg-clip-text bg-gradient-to-r from-${themeColor}-400 to-${themeColor}-600`}>Loop</span>
              </h1>
              <p className="text-zinc-500 text-sm">Sign in to your account</p>
            </div>
          </div>
        )}

        {/* ERROR MESSAGE */}
        {err && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm flex items-start gap-3 animate-in slide-in-from-top-2">
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <p>{err}</p>
          </div>
        )}

        {/* TOGGLE SWITCH */}
        {stage !== "onboarding" && (
          <div className="flex bg-black/50 p-1.5 rounded-2xl border border-white/5 mb-8 relative">
            <button 
              onClick={() => setMode("CITIZEN")} 
              className={`relative z-10 flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${mode === "CITIZEN" ? "text-white shadow-lg" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              <User size={16} /> Citizen
            </button>
            <button 
              onClick={() => setMode("STAFF")} 
              className={`relative z-10 flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${mode === "STAFF" ? "text-white shadow-lg" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              <Shield size={16} /> Official Staff
            </button>
            
            {/* Sliding Indicator */}
            <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-zinc-800 rounded-xl transition-all duration-300 ease-out shadow-sm border border-white/10 ${mode === "CITIZEN" ? "left-1.5" : "left-[calc(50%+1.5px)]"}`} />
          </div>
        )}

        {/* --- CITIZEN FORM --- */}
        {mode === "CITIZEN" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {stage === "request" && (
              <>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Mobile or Email</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                    <input
                      disabled={loading}
                      className="w-full bg-black/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all disabled:opacity-50"
                      placeholder="Enter details..."
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                    />
                  </div>
                </div>
                <button disabled={loading || !identifier} className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-zinc-200 active:scale-[0.98] transition-all disabled:opacity-50 flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" onClick={requestOtp}>
                  {loading ? <Loader2 size={18} className="animate-spin" /> : "Send OTP"}
                </button>
              </>
            )}

            {stage === "verify" && (
              <div className="space-y-6 animate-in slide-in-from-right-4">
                <div className="space-y-2 text-center">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Enter Verification Code</label>
                  <input
                    className="w-full bg-black/50 border border-zinc-800 rounded-2xl p-4 text-white font-mono text-2xl tracking-[0.5em] text-center focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    placeholder="••••••" maxLength={6} value={code} onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <button disabled={loading || code.length < 6} className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex justify-center items-center gap-2" onClick={verifyOtp}>
                  {loading ? <Loader2 size={18} className="animate-spin" /> : "Verify & Continue"}
                </button>
                <button onClick={() => setStage("request")} className="w-full text-zinc-500 text-sm hover:text-white transition">
                  ← Back to login
                </button>
              </div>
            )}

            {/* ONBOARDING SCREEN */}
            {stage === "onboarding" && (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-5 border border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                    <User size={36} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Welcome to CivicLoop</h2>
                  <p className="text-sm text-zinc-400 mt-2">Let's set up your citizen profile.</p>
                </div>

                <div className="space-y-4">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input className="w-full bg-black/50 border border-zinc-800 rounded-xl py-3.5 pl-11 pr-4 text-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" placeholder="Full Name *" value={onboardName} onChange={(e) => setOnboardName(e.target.value)} />
                  </div>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input className="w-full bg-black/50 border border-zinc-800 rounded-xl py-3.5 pl-11 pr-4 text-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" placeholder="Email Address" value={onboardEmail} onChange={(e) => setOnboardEmail(e.target.value)} />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input className="w-full bg-black/50 border border-zinc-800 rounded-xl py-3.5 pl-11 pr-4 text-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" placeholder="Mobile Number" value={onboardPhone} onChange={(e) => setOnboardPhone(e.target.value)} />
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <button disabled={loading || !onboardName} className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] disabled:opacity-50 flex justify-center items-center gap-2" onClick={completeOnboarding}>
                    {loading ? <Loader2 size={18} className="animate-spin" /> : "Save Profile"}
                  </button>
                  <button onClick={() => { router.push("/"); router.refresh(); }} className="w-full text-zinc-500 text-sm hover:text-white transition py-2">
                    Skip for now
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- STAFF FORM --- */}
        {mode === "STAFF" && stage !== "onboarding" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Official Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-purple-500 transition-colors" size={18} />
                  <input className="w-full bg-black/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all" placeholder="officer@civic.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Secure Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-purple-500 transition-colors" size={18} />
                  <input type="password" className="w-full bg-black/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
            </div>

            <button disabled={loading} className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold py-4 rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] flex justify-center items-center gap-2 mt-2" onClick={handleStaffLogin}>
              {loading ? <Loader2 size={18} className="animate-spin" /> : <>Access Console <KeyRound size={16} /></>}
            </button>
          </div>
        )}

      </div>
    </main>
  );
}

// Quick AlertIcon component since Lucide sometimes throws errors if not exported right
function AlertCircle({ className, size }: { className?: string, size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );
}