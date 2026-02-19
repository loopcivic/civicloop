// // // // "use client";

// // // // import { useEffect, useState, use } from "react";
// // // // import { useRouter } from "next/navigation";
// // // // import { 
// // // //   User, Phone, Mail, MapPin, Calendar, 
// // // //   CheckCircle2, Clock, ArrowLeft, Building2, BadgeCheck, AlertTriangle 
// // // // } from "lucide-react";
// // // // import { apiGet } from "@/lib/api";

// // // // export default function PublicProfilePage({ params }: { params: Promise<{ id: string }> }) {
// // // //   const { id } = use(params);
// // // //   const router = useRouter();
  
// // // //   const [user, setUser] = useState<any>(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [err, setErr] = useState<string | null>(null);

// // // //   useEffect(() => {
// // // //     async function load() {
// // // //       if (!id) return;
// // // //       try {
// // // //         // ✅ Call the new specific endpoint
// // // //         const userData = await apiGet<any>(`/auth/users/${id}/profile`);
// // // //         setUser(userData);
// // // //       } catch (e: any) {
// // // //         setErr("Failed to load profile. " + e.message);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     }
// // // //     load();
// // // //   }, [id]);

// // // //   if (loading) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-500">Loading Officer Profile...</div>;
// // // //   if (err || !user) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-red-500">{err || "User not found"}</div>;

// // // //   const isOfficer = user.role === "OFFICER" || user.role === "ADMIN";
// // // //   const totalAssigned = user.assignedComplaints?.length || 0;
// // // //   const resolvedCount = user.assignedComplaints?.filter((c: any) => c.currentStatus === 'RESOLVED').length || 0;
// // // //   const pendingCount = totalAssigned - resolvedCount;

// // // //   return (
// // // //     <main className="min-h-screen bg-zinc-950 p-6 md:p-12 font-sans">
// // // //       <div className="max-w-4xl mx-auto space-y-8">
        
// // // //         <button 
// // // //           onClick={() => router.back()} 
// // // //           className="flex items-center text-zinc-400 hover:text-white transition gap-2 text-sm font-medium"
// // // //         >
// // // //           <ArrowLeft size={16} /> Back
// // // //         </button>

// // // //         {/* --- PROFILE HEADER --- */}
// // // //         <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
// // // //            {/* Decorative Blur */}
// // // //            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${isOfficer ? 'from-amber-500/10' : 'from-blue-500/10'} to-transparent blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none`} />

// // // //            {/* Avatar */}
// // // //            <div className={`
// // // //              w-32 h-32 rounded-full flex items-center justify-center shrink-0 border-4 shadow-2xl
// // // //              ${isOfficer ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' : 'bg-blue-500/10 border-blue-500/20 text-blue-500'}
// // // //            `}>
// // // //              <User size={64} />
// // // //            </div>

// // // //            {/* Info */}
// // // //            <div className="flex-1 text-center md:text-left space-y-4 z-10">
// // // //              <div>
// // // //                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
// // // //                  <h1 className="text-3xl font-bold text-white">{user.name}</h1>
// // // //                  <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${isOfficer ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
// // // //                    {user.role}
// // // //                  </span>
// // // //                  {!user.isActive && <span className="text-red-500 text-xs border border-red-900 bg-red-900/20 px-2 py-0.5 rounded uppercase font-bold">Inactive</span>}
// // // //                </div>
               
// // // //                <div className="space-y-1 text-zinc-400 text-sm">
// // // //                  <div className="flex items-center justify-center md:justify-start gap-2">
// // // //                    {isOfficer ? <Mail size={14} /> : <Phone size={14} />}
// // // //                    <span>{user.email || user.phone || "No contact info"}</span>
// // // //                  </div>
// // // //                  <div className="flex items-center justify-center md:justify-start gap-2">
// // // //                    <Calendar size={14} />
// // // //                    <span>Member since {new Date(user.createdAt).toLocaleDateString()}</span>
// // // //                  </div>
// // // //                </div>
// // // //              </div>

// // // //              {/* Officer Details */}
// // // //              {isOfficer && (
// // // //                <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
// // // //                  <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-2">
// // // //                    <Building2 size={16} className="text-zinc-500" />
// // // //                    <div>
// // // //                       <div className="text-[10px] text-zinc-500 uppercase font-bold">Department</div>
// // // //                       <div className="text-sm font-medium text-zinc-200">{user.department?.name || "Unassigned"}</div>
// // // //                    </div>
// // // //                  </div>
// // // //                  <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-2">
// // // //                    <MapPin size={16} className="text-zinc-500" />
// // // //                    <div>
// // // //                       <div className="text-[10px] text-zinc-500 uppercase font-bold">Assigned Ward</div>
// // // //                       <div className="text-sm font-medium text-zinc-200">{user.ward?.name || "General"}</div>
// // // //                    </div>
// // // //                  </div>
// // // //                </div>
// // // //              )}
// // // //            </div>

// // // //            {/* Stats Box */}
// // // //            {isOfficer && (
// // // //              <div className="bg-zinc-950/50 rounded-2xl p-6 border border-white/5 min-w-[200px] text-center shrink-0">
// // // //                 <div className="text-3xl font-bold text-white mb-1">
// // // //                   {resolvedCount} <span className="text-sm text-zinc-500 font-normal">/ {totalAssigned}</span>
// // // //                 </div>
// // // //                 <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Tasks Resolved</div>
                
// // // //                 <div className="mt-4 pt-4 border-t border-white/5">
// // // //                    {pendingCount > 0 ? (
// // // //                      <div className="text-amber-400 font-bold flex items-center justify-center gap-2 text-sm animate-pulse">
// // // //                        <Clock size={16}/> {pendingCount} Pending
// // // //                      </div>
// // // //                    ) : (
// // // //                      <div className="text-green-400 font-bold flex items-center justify-center gap-2 text-sm">
// // // //                        <BadgeCheck size={16}/> All Clear
// // // //                      </div>
// // // //                    )}
// // // //                 </div>
// // // //              </div>
// // // //            )}
// // // //         </div>

// // // //         {/* --- ACTIVITY LIST --- */}
// // // //         <div className="space-y-6">
// // // //           <h2 className="text-xl font-bold text-white flex items-center gap-2">
// // // //             <Clock className="text-zinc-500" /> Public Activity Log
// // // //           </h2>
          
// // // //           {(!user.assignedComplaints || user.assignedComplaints.length === 0) ? (
// // // //              <div className="p-12 text-center border border-zinc-800 rounded-3xl bg-zinc-900/20 border-dashed text-zinc-500">
// // // //                 <p>No activity recorded yet.</p>
// // // //              </div>
// // // //           ) : (
// // // //              <div className="grid gap-4">
// // // //                {user.assignedComplaints.map((complaint: any) => (
// // // //                  <div 
// // // //                    key={complaint.id}
// // // //                    // We allow clicking to view the complaint details
// // // //                    onClick={() => router.push(`/complaints/${complaint.id}`)}
// // // //                    className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-center justify-between hover:bg-zinc-800 hover:border-zinc-700 transition cursor-pointer group"
// // // //                  >
// // // //                    <div className="flex items-center gap-4">
// // // //                       <div className={`
// // // //                         w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0
// // // //                         ${complaint.currentStatus === 'RESOLVED' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}
// // // //                       `}>
// // // //                         {complaint.currentStatus === 'RESOLVED' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
// // // //                       </div>
                      
// // // //                       <div>
// // // //                          <h3 className="text-white font-medium group-hover:text-blue-400 transition line-clamp-1">
// // // //                            {complaint.title}
// // // //                          </h3>
// // // //                          <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
// // // //                             <span>{new Date(complaint.createdAt).toLocaleDateString()}</span>
// // // //                             <span>•</span>
// // // //                             <span className="uppercase tracking-wider">{complaint.category}</span>
// // // //                          </div>
// // // //                       </div>
// // // //                    </div>
                   
// // // //                    <div className="hidden md:block">
// // // //                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
// // // //                         complaint.currentStatus === 'RESOLVED' ? 'bg-green-900/30 text-green-400' : 'bg-blue-900/30 text-blue-400'
// // // //                      }`}>
// // // //                        {complaint.currentStatus.replace(/_/g, " ")}
// // // //                      </span>
// // // //                    </div>
// // // //                  </div>
// // // //                ))}
// // // //              </div>
// // // //           )}
// // // //         </div>

// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }

// // // "use client";

// // // import { useEffect, useState, use } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { 
// // //   User, Phone, Mail, MapPin, Calendar, 
// // //   CheckCircle2, Clock, ArrowLeft, Building2, BadgeCheck, AlertTriangle 
// // // } from "lucide-react";
// // // import { apiGet } from "@/lib/api";

// // // export default function PublicProfilePage({ params }: { params: Promise<{ id: string }> }) {
// // //   const { id } = use(params);
// // //   const router = useRouter();
  
// // //   const [user, setUser] = useState<any>(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [err, setErr] = useState<string | null>(null);

// // //   useEffect(() => {
// // //     async function load() {
// // //       if (!id) return;
// // //       try {
// // //         // ✅ Call the new public endpoint
// // //         const userData = await apiGet<any>(`/auth/users/${id}/profile`);
// // //         setUser(userData);
// // //       } catch (e: any) {
// // //         setErr("Failed to load profile. " + e.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     }
// // //     load();
// // //   }, [id]);

// // //   if (loading) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-500">Loading Officer Profile...</div>;
// // //   if (err || !user) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-red-500">{err || "User not found"}</div>;

// // //   // ✅ FIX: Check the ROLE of the profile being viewed, not the viewer
// // //   const isOfficer = user.role === "OFFICER" || user.role === "ADMIN";
  
// // //   const totalAssigned = user.assignedComplaints?.length || 0;
// // //   const resolvedCount = user.assignedComplaints?.filter((c: any) => c.currentStatus === 'RESOLVED').length || 0;
// // //   const pendingCount = totalAssigned - resolvedCount;

// // //   return (
// // //     <main className="min-h-screen bg-zinc-950 p-6 md:p-12 font-sans">
// // //       <div className="max-w-4xl mx-auto space-y-8">
        
// // //         {/* ✅ SAFER BACK BUTTON: Handles "New Tab" opens correctly */}
// // //         <button 
// // //           onClick={() => {
// // //             if (window.history.length > 2) {
// // //               router.back();
// // //             } else {
// // //               router.push('/map');
// // //             }
// // //           }} 
// // //           className="flex items-center text-zinc-400 hover:text-white transition gap-2 text-sm font-medium"
// // //         >
// // //           <ArrowLeft size={16} /> Back
// // //         </button>

// // //         {/* --- PROFILE HEADER --- */}
// // //         <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
// // //            {/* Decorative Blur */}
// // //            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${isOfficer ? 'from-amber-500/10' : 'from-blue-500/10'} to-transparent blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none`} />

// // //            {/* Avatar */}
// // //            <div className={`
// // //              w-32 h-32 rounded-full flex items-center justify-center shrink-0 border-4 shadow-2xl
// // //              ${isOfficer ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' : 'bg-blue-500/10 border-blue-500/20 text-blue-500'}
// // //            `}>
// // //              <User size={64} />
// // //            </div>

// // //            {/* Info */}
// // //            <div className="flex-1 text-center md:text-left space-y-4 z-10">
// // //              <div>
// // //                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
// // //                  <h1 className="text-3xl font-bold text-white">{user.name}</h1>
// // //                  <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${isOfficer ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
// // //                    {user.role}
// // //                  </span>
// // //                  {!user.isActive && <span className="text-red-500 text-xs border border-red-900 bg-red-900/20 px-2 py-0.5 rounded uppercase font-bold">Inactive</span>}
// // //                </div>
               
// // //                <div className="space-y-1 text-zinc-400 text-sm">
// // //                  <div className="flex items-center justify-center md:justify-start gap-2">
// // //                    {isOfficer ? <Mail size={14} /> : <Phone size={14} />}
// // //                    <span>{user.email || user.phone || "No contact info"}</span>
// // //                  </div>
// // //                  <div className="flex items-center justify-center md:justify-start gap-2">
// // //                    <Calendar size={14} />
// // //                    <span>Member since {new Date(user.createdAt).toLocaleDateString()}</span>
// // //                  </div>
// // //                </div>
// // //              </div>

// // //              {/* Officer Details */}
// // //              {isOfficer && (
// // //                <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
// // //                  <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-2">
// // //                    <Building2 size={16} className="text-zinc-500" />
// // //                    <div>
// // //                       <div className="text-[10px] text-zinc-500 uppercase font-bold">Department</div>
// // //                       <div className="text-sm font-medium text-zinc-200">{user.department?.name || "Unassigned"}</div>
// // //                    </div>
// // //                  </div>
// // //                  <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-2">
// // //                    <MapPin size={16} className="text-zinc-500" />
// // //                    <div>
// // //                       <div className="text-[10px] text-zinc-500 uppercase font-bold">Assigned Ward</div>
// // //                       <div className="text-sm font-medium text-zinc-200">{user.ward?.name || "General"}</div>
// // //                    </div>
// // //                  </div>
// // //                </div>
// // //              )}
// // //            </div>

// // //            {/* Stats Box */}
// // //            {isOfficer && (
// // //              <div className="bg-zinc-950/50 rounded-2xl p-6 border border-white/5 min-w-[200px] text-center shrink-0">
// // //                 <div className="text-3xl font-bold text-white mb-1">
// // //                   {resolvedCount} <span className="text-sm text-zinc-500 font-normal">/ {totalAssigned}</span>
// // //                 </div>
// // //                 <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Tasks Resolved</div>
                
// // //                 <div className="mt-4 pt-4 border-t border-white/5">
// // //                    {pendingCount > 0 ? (
// // //                      <div className="text-amber-400 font-bold flex items-center justify-center gap-2 text-sm animate-pulse">
// // //                        <Clock size={16}/> {pendingCount} Pending
// // //                      </div>
// // //                    ) : (
// // //                      <div className="text-green-400 font-bold flex items-center justify-center gap-2 text-sm">
// // //                        <BadgeCheck size={16}/> All Clear
// // //                      </div>
// // //                    )}
// // //                 </div>
// // //              </div>
// // //            )}
// // //         </div>

// // //         {/* --- ACTIVITY LIST --- */}
// // //         <div className="space-y-6">
// // //           <h2 className="text-xl font-bold text-white flex items-center gap-2">
// // //             <Clock className="text-zinc-500" /> Public Activity Log
// // //           </h2>
          
// // //           {(!user.assignedComplaints || user.assignedComplaints.length === 0) ? (
// // //              <div className="p-12 text-center border border-zinc-800 rounded-3xl bg-zinc-900/20 border-dashed text-zinc-500">
// // //                 <p>No activity recorded yet.</p>
// // //              </div>
// // //           ) : (
// // //              <div className="grid gap-4">
// // //                {user.assignedComplaints.map((complaint: any) => (
// // //                  <div 
// // //                    key={complaint.id}
// // //                    // We allow clicking to view the complaint details
// // //                    onClick={() => router.push(`/complaints/${complaint.id}`)}
// // //                    className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-center justify-between hover:bg-zinc-800 hover:border-zinc-700 transition cursor-pointer group"
// // //                  >
// // //                    <div className="flex items-center gap-4">
// // //                       <div className={`
// // //                         w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0
// // //                         ${complaint.currentStatus === 'RESOLVED' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}
// // //                       `}>
// // //                         {complaint.currentStatus === 'RESOLVED' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
// // //                       </div>
                      
// // //                       <div>
// // //                          <h3 className="text-white font-medium group-hover:text-blue-400 transition line-clamp-1">
// // //                            {complaint.title}
// // //                          </h3>
// // //                          <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
// // //                             <span>{new Date(complaint.createdAt).toLocaleDateString()}</span>
// // //                             <span>•</span>
// // //                             <span className="uppercase tracking-wider">{complaint.category}</span>
// // //                          </div>
// // //                       </div>
// // //                    </div>
                   
// // //                    <div className="hidden md:block">
// // //                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
// // //                         complaint.currentStatus === 'RESOLVED' ? 'bg-green-900/30 text-green-400' : 'bg-blue-900/30 text-blue-400'
// // //                      }`}>
// // //                        {complaint.currentStatus.replace(/_/g, " ")}
// // //                      </span>
// // //                    </div>
// // //                  </div>
// // //                ))}
// // //              </div>
// // //           )}
// // //         </div>

// // //       </div>
// // //     </main>
// // //   );
// // // }
// // "use client";

// // import { useEffect, useState, use } from "react";
// // import { useRouter } from "next/navigation";
// // import { 
// //   User, Phone, Mail, MapPin, Calendar, 
// //   CheckCircle2, Clock, Building2, BadgeCheck, LogOut, LayoutDashboard 
// // } from "lucide-react";
// // import { apiGet } from "@/lib/api";

// // export default function PublicProfilePage({ params }: { params: Promise<{ id: string }> }) {
// //   const { id } = use(params);
// //   const router = useRouter();
  
// //   const [user, setUser] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [err, setErr] = useState<string | null>(null);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   useEffect(() => {
// //     // 1. Check if user is logged in (to show/hide Logout button)
// //     const token = localStorage.getItem("civic_token");
// //     setIsLoggedIn(!!token);

// //     // 2. Load Profile Data
// //     async function load() {
// //       if (!id) return;
// //       try {
// //         const userData = await apiGet<any>(`/auth/users/${id}/profile`);
// //         setUser(userData);
// //       } catch (e: any) {
// //         setErr("Failed to load profile. " + e.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //     load();
// //   }, [id]);

// //   // ✅ LOGOUT LOGIC
// //   function handleLogout() {
// //     // 1. Clear Storage
// //     localStorage.removeItem("civic_token");
// //     localStorage.removeItem("civic_role");
// //     localStorage.removeItem("civic_user"); // Clear any other auth keys if you have them

// //     // 2. Notify the app (updates Layout/Navbar instantly)
// //     window.dispatchEvent(new Event("authChanged"));
    
// //     // 3. Force Redirect to Login
// //     router.replace("/login"); 
// //     router.refresh();
// //   }

// //   if (loading) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-500">Loading Officer Profile...</div>;
// //   if (err || !user) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-red-500">{err || "User not found"}</div>;

// //   const isOfficer = user.role === "OFFICER" || user.role === "ADMIN";
// //   const totalAssigned = user.assignedComplaints?.length || 0;
// //   const resolvedCount = user.assignedComplaints?.filter((c: any) => c.currentStatus === 'RESOLVED').length || 0;
// //   const pendingCount = totalAssigned - resolvedCount;

// //   return (
// //     <main className="min-h-screen bg-zinc-950 p-6 md:p-12 font-sans relative">
// //       <div className="max-w-4xl mx-auto space-y-8">
        
// //         {/* --- NAVIGATION BAR --- */}
// //         <div className="flex justify-between items-center">
// //             {/* 1. DASHBOARD BUTTON (Fixed: Goes to home, not 'back') */}
// //             <button 
// //               onClick={() => router.push('/')} 
// //               className="flex items-center text-zinc-400 hover:text-white transition gap-2 text-sm font-medium"
// //             >
// //               <LayoutDashboard size={16} /> Dashboard
// //             </button>

// //             {/* 2. LOGOUT BUTTON (Only shows if logged in) */}
// //             {isLoggedIn && (
// //               <button 
// //                 onClick={handleLogout}
// //                 className="flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-500 hover:text-white transition"
// //               >
// //                 <LogOut size={16} /> Logout
// //               </button>
// //             )}
// //         </div>

// //         {/* --- PROFILE HEADER --- */}
// //         <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
// //            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${isOfficer ? 'from-amber-500/10' : 'from-blue-500/10'} to-transparent blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none`} />

// //            {/* Avatar */}
// //            <div className={`
// //              w-32 h-32 rounded-full flex items-center justify-center shrink-0 border-4 shadow-2xl
// //              ${isOfficer ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' : 'bg-blue-500/10 border-blue-500/20 text-blue-500'}
// //            `}>
// //              <User size={64} />
// //            </div>

// //            {/* Info */}
// //            <div className="flex-1 text-center md:text-left space-y-4 z-10">
// //              <div>
// //                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
// //                  <h1 className="text-3xl font-bold text-white">{user.name}</h1>
// //                  <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${isOfficer ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
// //                    {user.role}
// //                  </span>
// //                  {!user.isActive && <span className="text-red-500 text-xs border border-red-900 bg-red-900/20 px-2 py-0.5 rounded uppercase font-bold">Inactive</span>}
// //                </div>
               
// //                <div className="space-y-1 text-zinc-400 text-sm">
// //                  <div className="flex items-center justify-center md:justify-start gap-2">
// //                    {isOfficer ? <Mail size={14} /> : <Phone size={14} />}
// //                    <span>{user.email || user.phone || "No contact info"}</span>
// //                  </div>
// //                  <div className="flex items-center justify-center md:justify-start gap-2">
// //                    <Calendar size={14} />
// //                    <span>Member since {new Date(user.createdAt).toLocaleDateString()}</span>
// //                  </div>
// //                </div>
// //              </div>

// //              {/* Officer Details */}
// //              {isOfficer && (
// //                <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
// //                  <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-2">
// //                    <Building2 size={16} className="text-zinc-500" />
// //                    <div>
// //                       <div className="text-[10px] text-zinc-500 uppercase font-bold">Department</div>
// //                       <div className="text-sm font-medium text-zinc-200">{user.department?.name || "Unassigned"}</div>
// //                    </div>
// //                  </div>
// //                  <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-2">
// //                    <MapPin size={16} className="text-zinc-500" />
// //                    <div>
// //                       <div className="text-[10px] text-zinc-500 uppercase font-bold">Assigned Ward</div>
// //                       <div className="text-sm font-medium text-zinc-200">{user.ward?.name || "General"}</div>
// //                    </div>
// //                  </div>
// //                </div>
// //              )}
// //            </div>

// //            {/* Stats Box */}
// //            {isOfficer && (
// //              <div className="bg-zinc-950/50 rounded-2xl p-6 border border-white/5 min-w-[200px] text-center shrink-0">
// //                 <div className="text-3xl font-bold text-white mb-1">
// //                   {resolvedCount} <span className="text-sm text-zinc-500 font-normal">/ {totalAssigned}</span>
// //                 </div>
// //                 <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Tasks Resolved</div>
                
// //                 <div className="mt-4 pt-4 border-t border-white/5">
// //                    {pendingCount > 0 ? (
// //                      <div className="text-amber-400 font-bold flex items-center justify-center gap-2 text-sm animate-pulse">
// //                        <Clock size={16}/> {pendingCount} Pending
// //                      </div>
// //                    ) : (
// //                      <div className="text-green-400 font-bold flex items-center justify-center gap-2 text-sm">
// //                        <BadgeCheck size={16}/> All Clear
// //                      </div>
// //                    )}
// //                 </div>
// //              </div>
// //            )}
// //         </div>

// //         {/* --- ACTIVITY LIST --- */}
// //         <div className="space-y-6">
// //           <h2 className="text-xl font-bold text-white flex items-center gap-2">
// //             <Clock className="text-zinc-500" /> Public Activity Log
// //           </h2>
          
// //           {(!user.assignedComplaints || user.assignedComplaints.length === 0) ? (
// //              <div className="p-12 text-center border border-zinc-800 rounded-3xl bg-zinc-900/20 border-dashed text-zinc-500">
// //                 <p>No activity recorded yet.</p>
// //              </div>
// //           ) : (
// //              <div className="grid gap-4">
// //                {user.assignedComplaints.map((complaint: any) => (
// //                  <div 
// //                    key={complaint.id}
// //                    onClick={() => router.push(`/complaints/${complaint.id}`)}
// //                    className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-center justify-between hover:bg-zinc-800 hover:border-zinc-700 transition cursor-pointer group"
// //                  >
// //                    <div className="flex items-center gap-4">
// //                       <div className={`
// //                         w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0
// //                         ${complaint.currentStatus === 'RESOLVED' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}
// //                       `}>
// //                         {complaint.currentStatus === 'RESOLVED' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
// //                       </div>
                      
// //                       <div>
// //                          <h3 className="text-white font-medium group-hover:text-blue-400 transition line-clamp-1">
// //                            {complaint.title}
// //                          </h3>
// //                          <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
// //                             <span>{new Date(complaint.createdAt).toLocaleDateString()}</span>
// //                             <span>•</span>
// //                             <span className="uppercase tracking-wider">{complaint.category}</span>
// //                          </div>
// //                       </div>
// //                    </div>
                   
// //                    <div className="hidden md:block">
// //                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
// //                         complaint.currentStatus === 'RESOLVED' ? 'bg-green-900/30 text-green-400' : 'bg-blue-900/30 text-blue-400'
// //                      }`}>
// //                        {complaint.currentStatus.replace(/_/g, " ")}
// //                      </span>
// //                    </div>
// //                  </div>
// //                ))}
// //              </div>
// //           )}
// //         </div>

// //       </div>
// //     </main>
// //   );
// // }



// "use client";

// import { useEffect, useState, use } from "react";
// import { useRouter } from "next/navigation";
// import { 
//   User, Phone, Mail, MapPin, Calendar, 
//   CheckCircle2, Clock, Building2, BadgeCheck, LogOut, LayoutDashboard 
// } from "lucide-react";
// import { apiGet, apiPost } from "@/lib/api"; // 👈 Ensure apiPost is imported

// export default function PublicProfilePage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params);
//   const router = useRouter();
  
//   const [user, setUser] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [err, setErr] = useState<string | null>(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("civic_token");
//     setIsLoggedIn(!!token);

//     async function load() {
//       if (!id) return;
//       try {
//         const userData = await apiGet<any>(`/auth/users/${id}/profile`);
//         setUser(userData);
//       } catch (e: any) {
//         setErr("Failed to load profile. " + e.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     load();
//   }, [id]);

//   // ✅ UPDATED LOGOUT FUNCTION
//   async function handleLogout() {
//     try {
//       // 1. Tell Backend to Kill Cookie
//       await apiPost('/auth/logout', {});
//     } catch (err) {
//       console.log("Server logout warning (ignoring):", err);
//     }

//     // 2. Kill Frontend Storage
//     localStorage.removeItem("civic_token");
//     localStorage.removeItem("civic_role");
//     localStorage.removeItem("civic_user");

//     // 3. Notify App & Redirect
//     window.dispatchEvent(new Event("authChanged"));
    
//     // 4. Force hard redirect to ensure cache is cleared
//     window.location.href = "/login";
//   }

//   if (loading) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-500">Loading Officer Profile...</div>;
//   if (err || !user) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-red-500">{err || "User not found"}</div>;

//   const isOfficer = user.role === "OFFICER" || user.role === "ADMIN";
//   const totalAssigned = user.assignedComplaints?.length || 0;
//   const resolvedCount = user.assignedComplaints?.filter((c: any) => c.currentStatus === 'RESOLVED').length || 0;
//   const pendingCount = totalAssigned - resolvedCount;

//   return (
//     <main className="min-h-screen bg-zinc-950 p-6 md:p-12 font-sans relative">
//       <div className="max-w-4xl mx-auto space-y-8">
        
//         {/* NAVIGATION BAR */}
//         <div className="flex justify-between items-center">
//             {/* Dashboard Button */}
//             <button 
//               onClick={() => router.push('/')} 
//               className="flex items-center text-zinc-400 hover:text-white transition gap-2 text-sm font-medium"
//             >
//               <LayoutDashboard size={16} /> Dashboard
//             </button>

//             {/* Logout Button */}
//             {isLoggedIn && (
//               <button 
//                 onClick={handleLogout}
//                 className="flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-500 hover:text-white transition"
//               >
//                 <LogOut size={16} /> Logout
//               </button>
//             )}
//         </div>

//         {/* PROFILE HEADER */}
//         <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
//            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${isOfficer ? 'from-amber-500/10' : 'from-blue-500/10'} to-transparent blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none`} />

//            <div className={`
//              w-32 h-32 rounded-full flex items-center justify-center shrink-0 border-4 shadow-2xl
//              ${isOfficer ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' : 'bg-blue-500/10 border-blue-500/20 text-blue-500'}
//            `}>
//              <User size={64} />
//            </div>

//            <div className="flex-1 text-center md:text-left space-y-4 z-10">
//              <div>
//                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
//                  <h1 className="text-3xl font-bold text-white">{user.name}</h1>
//                  <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${isOfficer ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
//                    {user.role}
//                  </span>
//                  {!user.isActive && <span className="text-red-500 text-xs border border-red-900 bg-red-900/20 px-2 py-0.5 rounded uppercase font-bold">Inactive</span>}
//                </div>
               
//                <div className="space-y-1 text-zinc-400 text-sm">
//                  <div className="flex items-center justify-center md:justify-start gap-2">
//                    {isOfficer ? <Mail size={14} /> : <Phone size={14} />}
//                    <span>{user.email || user.phone || "No contact info"}</span>
//                  </div>
//                  <div className="flex items-center justify-center md:justify-start gap-2">
//                    <Calendar size={14} />
//                    <span>Member since {new Date(user.createdAt).toLocaleDateString()}</span>
//                  </div>
//                </div>
//              </div>

//              {isOfficer && (
//                <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
//                  <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-2">
//                    <Building2 size={16} className="text-zinc-500" />
//                    <div>
//                       <div className="text-[10px] text-zinc-500 uppercase font-bold">Department</div>
//                       <div className="text-sm font-medium text-zinc-200">{user.department?.name || "Unassigned"}</div>
//                    </div>
//                  </div>
//                  <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-2">
//                    <MapPin size={16} className="text-zinc-500" />
//                    <div>
//                       <div className="text-[10px] text-zinc-500 uppercase font-bold">Assigned Ward</div>
//                       <div className="text-sm font-medium text-zinc-200">{user.ward?.name || "General"}</div>
//                    </div>
//                  </div>
//                </div>
//              )}
//            </div>

//            {isOfficer && (
//              <div className="bg-zinc-950/50 rounded-2xl p-6 border border-white/5 min-w-[200px] text-center shrink-0">
//                 <div className="text-3xl font-bold text-white mb-1">
//                   {resolvedCount} <span className="text-sm text-zinc-500 font-normal">/ {totalAssigned}</span>
//                 </div>
//                 <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Tasks Resolved</div>
                
//                 <div className="mt-4 pt-4 border-t border-white/5">
//                    {pendingCount > 0 ? (
//                      <div className="text-amber-400 font-bold flex items-center justify-center gap-2 text-sm animate-pulse">
//                        <Clock size={16}/> {pendingCount} Pending
//                      </div>
//                    ) : (
//                      <div className="text-green-400 font-bold flex items-center justify-center gap-2 text-sm">
//                        <BadgeCheck size={16}/> All Clear
//                      </div>
//                    )}
//                 </div>
//              </div>
//            )}
//         </div>

//         {/* ACTIVITY LIST */}
//         <div className="space-y-6">
//           <h2 className="text-xl font-bold text-white flex items-center gap-2">
//             <Clock className="text-zinc-500" /> Public Activity Log
//           </h2>
          
//           {(!user.assignedComplaints || user.assignedComplaints.length === 0) ? (
//              <div className="p-12 text-center border border-zinc-800 rounded-3xl bg-zinc-900/20 border-dashed text-zinc-500">
//                 <p>No activity recorded yet.</p>
//              </div>
//           ) : (
//              <div className="grid gap-4">
//                {user.assignedComplaints.map((complaint: any) => (
//                  <div 
//                    key={complaint.id}
//                    onClick={() => router.push(`/complaints/${complaint.id}`)}
//                    className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-center justify-between hover:bg-zinc-800 hover:border-zinc-700 transition cursor-pointer group"
//                  >
//                    <div className="flex items-center gap-4">
//                       <div className={`
//                         w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0
//                         ${complaint.currentStatus === 'RESOLVED' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}
//                       `}>
//                         {complaint.currentStatus === 'RESOLVED' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
//                       </div>
                      
//                       <div>
//                          <h3 className="text-white font-medium group-hover:text-blue-400 transition line-clamp-1">
//                            {complaint.title}
//                          </h3>
//                          <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
//                             <span>{new Date(complaint.createdAt).toLocaleDateString()}</span>
//                             <span>•</span>
//                             <span className="uppercase tracking-wider">{complaint.category}</span>
//                          </div>
//                       </div>
//                    </div>
                   
//                    <div className="hidden md:block">
//                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
//                         complaint.currentStatus === 'RESOLVED' ? 'bg-green-900/30 text-green-400' : 'bg-blue-900/30 text-blue-400'
//                      }`}>
//                        {complaint.currentStatus.replace(/_/g, " ")}
//                      </span>
//                    </div>
//                  </div>
//                ))}
//              </div>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { 
  User, Phone, Mail, MapPin, Calendar, 
  CheckCircle2, Clock, Building2, BadgeCheck, LogOut, LayoutDashboard 
} from "lucide-react";
import { apiGet, apiPost } from "@/lib/api"; 

export default function PublicProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("civic_token");
    setIsLoggedIn(!!token);

    async function load() {
      if (!id) return;
      try {
        const userData = await apiGet<any>(`/auth/users/${id}/profile`);
        setUser(userData);
      } catch (e: any) {
        setErr("Failed to load profile. " + e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  async function handleLogout() {
    try {
      await apiPost('/auth/logout', {});
    } catch (err) {
      console.log("Server logout warning (ignoring):", err);
    }

    localStorage.removeItem("civic_token");
    localStorage.removeItem("civic_role");
    localStorage.removeItem("civic_user");

    window.dispatchEvent(new Event("authChanged"));
    window.location.href = "/login";
  }

  if (loading) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-500 text-sm sm:text-base">Loading Officer Profile...</div>;
  if (err || !user) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-red-500 text-sm sm:text-base px-4 text-center">{err || "User not found"}</div>;

  const isOfficer = user.role === "OFFICER" || user.role === "ADMIN";
  const totalAssigned = user.assignedComplaints?.length || 0;
  const resolvedCount = user.assignedComplaints?.filter((c: any) => c.currentStatus === 'RESOLVED').length || 0;
  const pendingCount = totalAssigned - resolvedCount;

  return (
    <main className="min-h-screen bg-zinc-950 p-4 sm:p-6 md:p-12 font-sans relative">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        
        {/* NAVIGATION BAR */}
        <div className="flex justify-between items-center">
            <button 
              onClick={() => router.push('/')} 
              className="flex items-center text-zinc-400 hover:text-white transition gap-2 text-xs sm:text-sm font-medium"
            >
              <LayoutDashboard size={16} className="w-4 h-4 sm:w-5 sm:h-5" /> Dashboard
            </button>

            {isLoggedIn && (
              <button 
                onClick={handleLogout}
                className="flex items-center gap-1.5 sm:gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold hover:bg-red-500 hover:text-white transition"
              >
                <LogOut size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Logout
              </button>
            )}
        </div>

        {/* PROFILE HEADER */}
        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-center md:items-start relative overflow-hidden">
           <div className={`absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br ${isOfficer ? 'from-amber-500/10' : 'from-blue-500/10'} to-transparent blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none`} />

           <div className={`
             w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center shrink-0 border-4 shadow-2xl
             ${isOfficer ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' : 'bg-blue-500/10 border-blue-500/20 text-blue-500'}
           `}>
             <User size={64} className="w-10 h-10 sm:w-16 sm:h-16" />
           </div>

           <div className="flex-1 text-center md:text-left space-y-4 z-10 w-full">
             <div>
               <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-2">
                 <h1 className="text-2xl sm:text-3xl font-bold text-white">{user.name}</h1>
                 <span className={`px-2 sm:px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${isOfficer ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                   {user.role}
                 </span>
                 {!user.isActive && <span className="text-red-500 text-[10px] sm:text-xs border border-red-900 bg-red-900/20 px-2 py-0.5 rounded uppercase font-bold">Inactive</span>}
               </div>
               
               <div className="space-y-1 sm:space-y-1.5 text-zinc-400 text-xs sm:text-sm">
                 <div className="flex items-center justify-center md:justify-start gap-2">
                   {isOfficer ? <Mail size={14} /> : <Phone size={14} />}
                   <span className="break-all">{user.email || user.phone || "No contact info"}</span>
                 </div>
                 <div className="flex items-center justify-center md:justify-start gap-2">
                   <Calendar size={14} />
                   <span>Member since {new Date(user.createdAt).toLocaleDateString()}</span>
                 </div>
               </div>
             </div>

             {isOfficer && (
               <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start pt-2">
                 <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-3 w-full sm:w-auto text-left">
                   <Building2 size={16} className="text-zinc-500 shrink-0" />
                   <div>
                      <div className="text-[10px] text-zinc-500 uppercase font-bold">Department</div>
                      <div className="text-xs sm:text-sm font-medium text-zinc-200 line-clamp-1">{user.department?.name || "Unassigned"}</div>
                   </div>
                 </div>
                 <div className="bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-xl flex items-center gap-3 w-full sm:w-auto text-left">
                   <MapPin size={16} className="text-zinc-500 shrink-0" />
                   <div>
                      <div className="text-[10px] text-zinc-500 uppercase font-bold">Assigned Ward</div>
                      <div className="text-xs sm:text-sm font-medium text-zinc-200 line-clamp-1">{user.ward?.name || "General"}</div>
                   </div>
                 </div>
               </div>
             )}
           </div>

           {isOfficer && (
             <div className="bg-zinc-950/50 rounded-2xl p-4 sm:p-6 border border-white/5 w-full md:w-auto md:min-w-[200px] text-center shrink-0">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {resolvedCount} <span className="text-xs sm:text-sm text-zinc-500 font-normal">/ {totalAssigned}</span>
                </div>
                <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-bold">Tasks Resolved</div>
                
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5">
                   {pendingCount > 0 ? (
                     <div className="text-amber-400 font-bold flex items-center justify-center gap-2 text-xs sm:text-sm animate-pulse">
                       <Clock size={14} className="sm:w-4 sm:h-4"/> {pendingCount} Pending
                     </div>
                   ) : (
                     <div className="text-green-400 font-bold flex items-center justify-center gap-2 text-xs sm:text-sm">
                       <BadgeCheck size={14} className="sm:w-4 sm:h-4"/> All Clear
                     </div>
                   )}
                </div>
             </div>
           )}
        </div>

        {/* ACTIVITY LIST */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Clock className="text-zinc-500 w-5 h-5 sm:w-6 sm:h-6" /> Public Activity Log
          </h2>
          
          {(!user.assignedComplaints || user.assignedComplaints.length === 0) ? (
             <div className="p-8 sm:p-12 text-center border border-zinc-800 rounded-2xl sm:rounded-3xl bg-zinc-900/20 border-dashed text-zinc-500 text-sm sm:text-base">
                <p>No activity recorded yet.</p>
             </div>
          ) : (
             <div className="grid gap-3 sm:gap-4">
               {user.assignedComplaints.map((complaint: any) => (
                 <div 
                   key={complaint.id}
                   onClick={() => router.push(`/complaints/${complaint.id}`)}
                   className="bg-zinc-900 border border-zinc-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between hover:bg-zinc-800 hover:border-zinc-700 transition cursor-pointer group gap-3 sm:gap-0"
                 >
                   <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`
                        w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0
                        ${complaint.currentStatus === 'RESOLVED' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}
                      `}>
                        {complaint.currentStatus === 'RESOLVED' ? <CheckCircle2 size={18} className="sm:w-5 sm:h-5" /> : <Clock size={18} className="sm:w-5 sm:h-5" />}
                      </div>
                      
                      <div>
                         <h3 className="text-sm sm:text-base text-white font-medium group-hover:text-blue-400 transition line-clamp-1">
                           {complaint.title}
                         </h3>
                         <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-zinc-500 mt-0.5 sm:mt-1">
                           <span>{new Date(complaint.createdAt).toLocaleDateString()}</span>
                           <span className="hidden sm:inline">•</span>
                           <span className="uppercase tracking-wider">{complaint.category}</span>
                         </div>
                      </div>
                   </div>
                   
                   {/* Badge - Now visible on mobile, nicely indented under the text */}
                   <div className="pl-[3.25rem] sm:pl-0">
                     <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${
                        complaint.currentStatus === 'RESOLVED' ? 'bg-green-900/30 text-green-400' : 'bg-blue-900/30 text-blue-400'
                     }`}>
                       {complaint.currentStatus.replace(/_/g, " ")}
                     </span>
                   </div>
                 </div>
               ))}
             </div>
          )}
        </div>
      </div>
    </main>
  );
}