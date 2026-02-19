// // // "use client";
// // // import { useState } from "react";
// // // import { useRouter } from "next/navigation";

// // // // Helper for API calls
// // // async function apiPost(url: string, body: any) {
// // //   const token = localStorage.getItem("civic_token");
// // //   const res = await fetch(`http://localhost:4000${url}`, {
// // //     method: "POST",
// // //     headers: { 
// // //       "Content-Type": "application/json",
// // //       "Authorization": `Bearer ${token}` 
// // //     },
// // //     body: JSON.stringify(body),
// // //   });
// // //   const data = await res.json();
// // //   if (!res.ok) throw new Error(data.message || "Request failed");
// // //   return data;
// // // }

// // // export default function AdminPage() {
// // //   const router = useRouter();

// // //   // Form State
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [name, setName] = useState("");
// // //   const [role, setRole] = useState("OFFICER");
// // //   const [loading, setLoading] = useState(false);

// // //   const handleRegister = async () => {
// // //     setLoading(true);
// // //     try {
// // //       await apiPost("/auth/register-staff", { email, password, name, role });
// // //       alert(`✅ Success! Created ${role}: ${name}`);
// // //       // Clear form
// // //       setEmail("");
// // //       setPassword("");
// // //       setName("");
// // //       setRole("OFFICER");
// // //     } catch (e: any) {
// // //       alert("Error: " + e.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("civic_token");
// // //     // Clear cookies too
// // //     document.cookie = "civic_session=; Max-Age=0; path=/;";
// // //     router.push("/login");
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-zinc-950 text-white p-6 font-sans flex flex-col items-center">

// // //       {/* Header */}
// // //       <div className="w-full max-w-4xl flex justify-between items-center mb-10 border-b border-zinc-800 pb-6 mt-4">
// // //         <div>
// // //           <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
// // //             Admin Command Center
// // //           </h1>
// // //           <p className="text-zinc-500 text-sm mt-1">System Management & Access Control</p>
// // //         </div>
// // //         <button 
// // //           onClick={handleLogout}
// // //           className="bg-red-900/30 text-red-400 border border-red-900/50 px-4 py-2 rounded-lg text-sm hover:bg-red-900/50 transition"
// // //         >
// // //           Log Out
// // //         </button>
// // //       </div>

// // //       {/* Main Content Grid */}
// // //       <div className="w-full max-w-lg bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
// // //         <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
// // //           👮‍♂️ Register New Staff
// // //         </h2>

// // //         <div className="space-y-5">
// // //           {/* Name */}
// // //           <div className="space-y-1">
// // //             <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Full Name</label>
// // //             <input 
// // //               value={name} 
// // //               onChange={(e) => setName(e.target.value)} 
// // //               placeholder="e.g. Officer Sarah" 
// // //               className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none transition" 
// // //             />
// // //           </div>

// // //           {/* Email */}
// // //           <div className="space-y-1">
// // //             <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email (Login ID)</label>
// // //             <input 
// // //               value={email} 
// // //               onChange={(e) => setEmail(e.target.value)} 
// // //               placeholder="e.g. sarah@civic.com" 
// // //               className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none transition" 
// // //             />
// // //           </div>

// // //           {/* Password */}
// // //           <div className="space-y-1">
// // //             <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Password</label>
// // //             <input 
// // //               value={password} 
// // //               onChange={(e) => setPassword(e.target.value)} 
// // //               placeholder="••••••••" 
// // //               className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none transition" 
// // //             />
// // //           </div>

// // //           {/* Role */}
// // //           <div className="space-y-1">
// // //             <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Role Assignment</label>
// // //             <select 
// // //               value={role} 
// // //               onChange={(e) => setRole(e.target.value)}
// // //               className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none transition appearance-none"
// // //             >
// // //               <option value="OFFICER">Officer (Field Agent)</option>
// // //               <option value="ADMIN">Admin (HQ)</option>
// // //             </select>
// // //           </div>

// // //           {/* Submit Button */}
// // //           <button 
// // //             onClick={handleRegister} 
// // //             disabled={loading}
// // //             className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl mt-4 transition shadow-lg shadow-purple-900/20 active:scale-95 disabled:opacity-50"
// // //           >
// // //             {loading ? "Creating..." : "+ Create Staff Account"}
// // //           </button>
// // //         </div>
// // //       </div>

// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useState, useEffect } from "react";
// // import { useRouter } from "next/navigation";
// // import { 
// //   LayoutDashboard, 
// //   Users, 
// //   Map, 
// //   FileText, 
// //   LogOut, 
// //   Plus, 
// //   Search, 
// //   Building2, 
// //   MapPin, 
// //   CheckCircle2, 
// //   AlertCircle,
// //   Clock,
// //   Trash2
// // } from "lucide-react";

// // // API Helper
// // const API = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

// // async function apiCall(url: string, method = "GET", body?: any) {
// //   const token = localStorage.getItem("civic_token");
// //   const headers: any = { 
// //     "Authorization": `Bearer ${token}`,
// //     "Content-Type": "application/json"
// //   };

// //   const res = await fetch(`${API}${url}`, {
// //     method,
// //     headers,
// //     body: body ? JSON.stringify(body) : undefined
// //   });

// //   const data = await res.json();
// //   if (!res.ok) throw new Error(data.message || "Request failed");
// //   return data;
// // }

// // export default function AdminDashboard() {
// //   const router = useRouter();
// //   const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'STAFF' | 'CONFIG' | 'REPORTS'>('OVERVIEW');
// //   const [loading, setLoading] = useState(false);

// //   // Data States
// //   const [stats, setStats] = useState({ total: 0, resolved: 0, pending: 0, officers: 0 });
// //   const [complaints, setComplaints] = useState<any[]>([]);
// //   const [wards, setWards] = useState<any[]>([]);
// //   const [departments, setDepartments] = useState<any[]>([]);

// //   // Modals
// //   const [showStaffModal, setShowStaffModal] = useState(false);
// //   const [showDeptModal, setShowDeptModal] = useState(false);
// //   const [showWardModal, setShowWardModal] = useState(false);

// //   // Load Initial Data
// //   useEffect(() => {
// //     loadDashboardData();
// //   }, []);

// //   async function loadDashboardData() {
// //     try {
// //       setLoading(true);
// //       // Fetch all core data in parallel
// //       const [complaintsData, wardsData, deptsData] = await Promise.all([
// //         apiCall("/complaints").catch(() => []), // Fallback to empty if fails
// //         apiCall("/wards").catch(() => []), 
// //         apiCall("/departments").catch(() => [])
// //       ]);

// //       setComplaints(complaintsData);
// //       setWards(wardsData);
// //       setDepartments(deptsData);

// //       // Calculate Stats
// //       setStats({
// //         total: complaintsData.length,
// //         resolved: complaintsData.filter((c: any) => c.currentStatus === 'RESOLVED').length,
// //         pending: complaintsData.filter((c: any) => ['CREATED', 'ACKNOWLEDGED'].includes(c.currentStatus)).length,
// //         officers: 12 // Placeholder or fetch from /users/officers if endpoint exists
// //       });

// //     } catch (e) {
// //       console.error(e);
// //       // If auth fails
// //       if ((e as Error).message.includes("Unauthorized")) router.push("/login");
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   // Handle Logout
// //   const handleLogout = () => {
// //     localStorage.removeItem("civic_token");
// //     router.push("/login");
// //   };

// //   return (
// //     <div className="min-h-screen bg-black text-zinc-200 font-sans flex">

// //       {/* 1. SIDEBAR */}
// //       <aside className="w-64 border-r border-zinc-800 bg-zinc-900/30 flex flex-col fixed h-full z-20">
// //         <div className="p-6">
// //           <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
// //             Admin Command
// //           </h1>
// //           <p className="text-xs text-zinc-500 mt-1">Central Control Unit</p>
// //         </div>

// //         <nav className="flex-1 px-4 space-y-2">
// //           <SidebarItem 
// //             icon={LayoutDashboard} 
// //             label="Overview" 
// //             active={activeTab === 'OVERVIEW'} 
// //             onClick={() => setActiveTab('OVERVIEW')} 
// //           />
// //           <SidebarItem 
// //             icon={FileText} 
// //             label="Global Reports" 
// //             active={activeTab === 'REPORTS'} 
// //             onClick={() => setActiveTab('REPORTS')} 
// //           />
// //           <SidebarItem 
// //             icon={Map} 
// //             label="City Configuration" 
// //             active={activeTab === 'CONFIG'} 
// //             onClick={() => setActiveTab('CONFIG')} 
// //           />
// //           <SidebarItem 
// //             icon={Users} 
// //             label="Staff Management" 
// //             active={activeTab === 'STAFF'} 
// //             onClick={() => setActiveTab('STAFF')} 
// //           />
// //         </nav>

// //         <div className="p-4 border-t border-zinc-800">
// //           <button 
// //             onClick={handleLogout}
// //             className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-900/10 rounded-xl transition"
// //           >
// //             <LogOut size={18} /> Log Out
// //           </button>
// //         </div>
// //       </aside>

// //       {/* 2. MAIN CONTENT AREA */}
// //       <main className="flex-1 ml-64 p-8">

// //         {/* HEADER */}
// //         <header className="flex justify-between items-center mb-8">
// //           <div>
// //             <h2 className="text-2xl font-bold text-white">
// //               {activeTab === 'OVERVIEW' && "City Pulse Overview"}
// //               {activeTab === 'STAFF' && "Staff Directory"}
// //               {activeTab === 'CONFIG' && "City Infrastructure Config"}
// //               {activeTab === 'REPORTS' && "Global Incident Reports"}
// //             </h2>
// //             <p className="text-zinc-500 text-sm">Real-time system updates</p>
// //           </div>
// //           <button 
// //             onClick={loadDashboardData} 
// //             className="text-sm text-zinc-400 hover:text-white flex items-center gap-2"
// //           >
// //             {loading ? "Syncing..." : "Refresh Data"} 
// //           </button>
// //         </header>

// //         {/* --- VIEW: OVERVIEW --- */}
// //         {activeTab === 'OVERVIEW' && (
// //           <div className="space-y-8">
// //             {/* Metric Cards */}
// //             <div className="grid grid-cols-4 gap-4">
// //               <StatCard label="Total Incidents" value={stats.total} icon={FileText} color="text-blue-400" bg="bg-blue-500/10" />
// //               <StatCard label="Pending Action" value={stats.pending} icon={AlertCircle} color="text-red-400" bg="bg-red-500/10" />
// //               <StatCard label="Resolved" value={stats.resolved} icon={CheckCircle2} color="text-green-400" bg="bg-green-500/10" />
// //               <StatCard label="Active Officers" value={stats.officers} icon={Users} color="text-purple-400" bg="bg-purple-500/10" />
// //             </div>

// //             {/* Recent Activity Table (Mini) */}
// //             <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
// //               <h3 className="text-lg font-bold text-white mb-4">Recent Critical Alerts</h3>
// //               <div className="space-y-3">
// //                 {complaints.slice(0, 5).map(c => (
// //                   <div key={c.id} className="flex justify-between items-center p-3 hover:bg-zinc-800 rounded-lg transition border border-zinc-800/50">
// //                      <div className="flex items-center gap-3">
// //                         <span className={`w-2 h-2 rounded-full ${c.currentStatus === 'RESOLVED' ? 'bg-green-500' : 'bg-red-500'}`} />
// //                         <div>
// //                           <div className="text-sm font-medium text-white">{c.title}</div>
// //                           <div className="text-xs text-zinc-500">{c.ward?.name} • {new Date(c.createdAt).toLocaleDateString()}</div>
// //                         </div>
// //                      </div>
// //                      <span className="text-xs font-bold px-2 py-1 rounded bg-zinc-800 text-zinc-400">{c.currentStatus}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* --- VIEW: CITY CONFIG --- */}
// //         {activeTab === 'CONFIG' && (
// //           <div className="grid grid-cols-2 gap-8">

// //             {/* DEPARTMENTS CARD */}
// //             <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
// //               <div className="flex justify-between items-center mb-6">
// //                 <div>
// //                   <h3 className="text-lg font-bold text-white flex items-center gap-2">
// //                     <Building2 size={20} className="text-blue-400" /> Departments
// //                   </h3>
// //                   <p className="text-xs text-zinc-500">Manage city operational units</p>
// //                 </div>
// //                 <button 
// //                   onClick={() => setShowDeptModal(true)}
// //                   className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
// //                 >
// //                   <Plus size={18} />
// //                 </button>
// //               </div>

// //               <div className="space-y-2">
// //                 {departments.length === 0 && <div className="text-zinc-600 text-sm text-center py-4">No departments found.</div>}
// //                 {departments.map((d: any) => (
// //                   <div key={d.id} className="flex justify-between items-center p-3 bg-black/40 border border-zinc-800 rounded-lg">
// //                     <span className="font-medium text-zinc-300">{d.name}</span>
// //                     <span className="text-xs text-zinc-600 bg-zinc-900 px-2 py-1 rounded">ID: {d.id}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* WARDS CARD */}
// //             <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
// //               <div className="flex justify-between items-center mb-6">
// //                 <div>
// //                   <h3 className="text-lg font-bold text-white flex items-center gap-2">
// //                     <MapPin size={20} className="text-purple-400" /> Wards (Zones)
// //                   </h3>
// //                   <p className="text-xs text-zinc-500">Manage geographic zones</p>
// //                 </div>
// //                 <button 
// //                   onClick={() => setShowWardModal(true)}
// //                   className="p-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition"
// //                 >
// //                   <Plus size={18} />
// //                 </button>
// //               </div>

// //               <div className="space-y-2">
// //                 {wards.length === 0 && <div className="text-zinc-600 text-sm text-center py-4">No wards found.</div>}
// //                 {wards.map((w: any) => (
// //                   <div key={w.id} className="flex justify-between items-center p-3 bg-black/40 border border-zinc-800 rounded-lg">
// //                     <span className="font-medium text-zinc-300">{w.name}</span>
// //                     <span className="text-xs text-zinc-600 bg-zinc-900 px-2 py-1 rounded">ID: {w.id}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //           </div>
// //         )}

// //         {/* --- VIEW: STAFF MANAGEMENT --- */}
// //         {activeTab === 'STAFF' && (
// //           <div className="space-y-6">
// //              <div className="flex justify-end">
// //                 <button 
// //                   onClick={() => setShowStaffModal(true)}
// //                   className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition"
// //                 >
// //                   <Plus size={18} /> Register New Staff
// //                 </button>
// //              </div>

// //              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
// //                 <table className="w-full text-left text-sm">
// //                   <thead className="bg-black/50 text-zinc-500 uppercase font-bold border-b border-zinc-800">
// //                     <tr>
// //                       <th className="px-6 py-4">Name</th>
// //                       <th className="px-6 py-4">Role</th>
// //                       <th className="px-6 py-4">Email / Login ID</th>
// //                       <th className="px-6 py-4 text-right">Status</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody className="divide-y divide-zinc-800">
// //                     {/* Placeholder Staff List - Replace with {officers.map} if you have the API */}
// //                     <tr className="hover:bg-zinc-800/50 transition">
// //                       <td className="px-6 py-4 font-medium text-white">Officer Sarah</td>
// //                       <td className="px-6 py-4 text-purple-400">Field Agent</td>
// //                       <td className="px-6 py-4 text-zinc-400">sarah@civic.com</td>
// //                       <td className="px-6 py-4 text-right text-green-500">Active</td>
// //                     </tr>
// //                     <tr className="hover:bg-zinc-800/50 transition">
// //                       <td className="px-6 py-4 font-medium text-white">Admin Control</td>
// //                       <td className="px-6 py-4 text-blue-400">HQ Admin</td>
// //                       <td className="px-6 py-4 text-zinc-400">admin@civic.com</td>
// //                       <td className="px-6 py-4 text-right text-green-500">Active</td>
// //                     </tr>
// //                   </tbody>
// //                 </table>
// //              </div>
// //           </div>
// //         )}

// //         {/* --- VIEW: GLOBAL REPORTS --- */}
// //         {activeTab === 'REPORTS' && (
// //           <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
// //              {/* Filters Bar */}
// //              <div className="p-4 border-b border-zinc-800 flex gap-4 overflow-x-auto">
// //                 <select className="bg-black border border-zinc-700 text-zinc-300 text-sm rounded-lg px-3 py-2 outline-none">
// //                   <option value="">All Departments</option>
// //                   {departments.map((d: any) => <option key={d.id} value={d.name}>{d.name}</option>)}
// //                 </select>
// //                 <select className="bg-black border border-zinc-700 text-zinc-300 text-sm rounded-lg px-3 py-2 outline-none">
// //                   <option value="">All Wards</option>
// //                   {wards.map((w: any) => <option key={w.id} value={w.name}>{w.name}</option>)}
// //                 </select>
// //                 <select className="bg-black border border-zinc-700 text-zinc-300 text-sm rounded-lg px-3 py-2 outline-none">
// //                   <option value="">All Statuses</option>
// //                   <option value="RESOLVED">Resolved</option>
// //                   <option value="PENDING">Pending</option>
// //                 </select>
// //              </div>

// //              <table className="w-full text-left text-sm">
// //                 <thead className="bg-black/50 text-zinc-500 uppercase font-bold border-b border-zinc-800">
// //                   <tr>
// //                     <th className="px-6 py-4">ID</th>
// //                     <th className="px-6 py-4">Issue</th>
// //                     <th className="px-6 py-4">Department</th>
// //                     <th className="px-6 py-4">Ward</th>
// //                     <th className="px-6 py-4 text-right">Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="divide-y divide-zinc-800">
// //                   {complaints.map((c) => (
// //                     <tr key={c.id} className="hover:bg-zinc-800/50 transition">
// //                       <td className="px-6 py-4 font-mono text-zinc-500">{c.id.slice(0, 6)}</td>
// //                       <td className="px-6 py-4 font-medium text-white">{c.title}</td>
// //                       <td className="px-6 py-4 text-zinc-400">{c.department?.name || "Unassigned"}</td>
// //                       <td className="px-6 py-4 text-zinc-400">{c.ward?.name || "Unknown"}</td>
// //                       <td className="px-6 py-4 text-right">
// //                          <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${c.currentStatus === 'RESOLVED' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
// //                            {c.currentStatus}
// //                          </span>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //              </table>
// //           </div>
// //         )}

// //       </main>

// //       {/* --- MODALS --- */}
// //       {showStaffModal && <StaffRegisterModal onClose={() => setShowStaffModal(false)} />}
// //       {showDeptModal && <CreateEntityModal title="Create Department" apiEndpoint="/departments" onClose={() => { setShowDeptModal(false); loadDashboardData(); }} />}
// //       {showWardModal && <CreateEntityModal title="Create Ward" apiEndpoint="/wards" onClose={() => { setShowWardModal(false); loadDashboardData(); }} />}

// //     </div>
// //   );
// // }


// // // --- SUB-COMPONENTS ---

// // function SidebarItem({ icon: Icon, label, active, onClick }: any) {
// //   return (
// //     <button 
// //       onClick={onClick}
// //       className={`
// //         flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-xl transition-all
// //         ${active ? "bg-white text-black shadow-lg shadow-white/10" : "text-zinc-500 hover:text-white hover:bg-zinc-800"}
// //       `}
// //     >
// //       <Icon size={18} /> {label}
// //     </button>
// //   );
// // }

// // function StatCard({ label, value, icon: Icon, color, bg }: any) {
// //   return (
// //     <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex items-center justify-between">
// //       <div>
// //         <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">{label}</div>
// //         <div className="text-3xl font-bold text-white">{value}</div>
// //       </div>
// //       <div className={`p-4 rounded-xl ${bg} ${color}`}>
// //         <Icon size={24} />
// //       </div>
// //     </div>
// //   );
// // }

// // // Reuse your existing registration logic in a nice modal
// // function StaffRegisterModal({ onClose }: { onClose: () => void }) {
// //   const [form, setForm] = useState({ name: "", email: "", password: "", role: "OFFICER" });
// //   const [loading, setLoading] = useState(false);

// //   async function handleSubmit() {
// //     setLoading(true);
// //     try {
// //       await apiCall("/auth/register-staff", "POST", form);
// //       alert("✅ Staff Created!");
// //       onClose();
// //     } catch (e: any) {
// //       alert("Error: " + e.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   return (
// //     <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
// //       <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-md shadow-2xl">
// //         <h2 className="text-xl font-bold text-white mb-6">Register New Staff</h2>
// //         <div className="space-y-4">
// //           <input className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
// //           <input className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
// //           <input className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none" placeholder="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
// //           <select className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none" value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
// //              <option value="OFFICER">Field Officer</option>
// //              <option value="ADMIN">Admin</option>
// //           </select>
// //           <button onClick={handleSubmit} disabled={loading} className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl mt-2 transition">
// //             {loading ? "Creating..." : "Create Account"}
// //           </button>
// //           <button onClick={onClose} className="w-full text-zinc-500 text-sm hover:text-white py-2">Cancel</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // Generic Modal for Departments / Wards
// // function CreateEntityModal({ title, apiEndpoint, onClose }: any) {
// //   const [name, setName] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   async function handleSubmit() {
// //     if (!name) return;
// //     setLoading(true);
// //     try {
// //       await apiCall(apiEndpoint, "POST", { name });
// //       alert("✅ Created Successfully");
// //       onClose();
// //     } catch (e: any) {
// //       alert("Error: " + e.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   return (
// //     <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
// //       <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-sm shadow-2xl">
// //         <h2 className="text-xl font-bold text-white mb-6">{title}</h2>
// //         <div className="space-y-4">
// //           <input className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-blue-500 outline-none" placeholder="Enter Name..." value={name} onChange={e => setName(e.target.value)} />
// //           <button onClick={handleSubmit} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl mt-2 transition">
// //             {loading ? "Saving..." : "Save"}
// //           </button>
// //           <button onClick={onClose} className="w-full text-zinc-500 text-sm hover:text-white py-2">Cancel</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   LayoutDashboard,
//   Users,
//   Map,
//   FileText,
//   LogOut,
//   Plus,
//   Search,
//   Building2,
//   MapPin,
//   CheckCircle2,
//   AlertCircle,
//   Clock,
//   Trash2
// } from "lucide-react";

// // API Helper
// const API = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

// async function apiCall(url: string, method = "GET", body?: any) {
//   const token = localStorage.getItem("civic_token");
//   const headers: any = {
//     "Authorization": `Bearer ${token}`,
//     "Content-Type": "application/json"
//   };

//   const res = await fetch(`${API}${url}`, {
//     method,
//     headers,
//     body: body ? JSON.stringify(body) : undefined
//   });

//   const data = await res.json();
//   if (!res.ok) throw new Error(data.message || "Request failed");
//   return data;
// }

// export default function AdminDashboard() {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'STAFF' | 'CONFIG' | 'REPORTS'>('OVERVIEW');
//   const [loading, setLoading] = useState(false);

//   // Data States
//   const [stats, setStats] = useState({ total: 0, resolved: 0, pending: 0, officers: 0 });
//   const [complaints, setComplaints] = useState<any[]>([]);
//   const [wards, setWards] = useState<any[]>([]);
//   const [departments, setDepartments] = useState<any[]>([]);
//   const [staff, setStaff] = useState<any[]>([]);

//   // Modals
//   const [showStaffModal, setShowStaffModal] = useState(false);
//   const [showDeptModal, setShowDeptModal] = useState(false);
//   const [showWardModal, setShowWardModal] = useState(false);

//   const [filterDept, setFilterDept] = useState("");
//   const [filterWard, setFilterWard] = useState("");
//   const [filterStatus, setFilterStatus] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   const [filterStaffStatus, setFilterStaffStatus] = useState<'ALL' | 'ACTIVE' | 'INACTIVE'>('ALL');


//   // Load Initial Data
//   useEffect(() => {
//     loadDashboardData();
//   }, []);

//   async function loadDashboardData() {
//     try {
//       setLoading(true);
//       // Fetch all core data in parallel
//       const [complaintsData, wardsData, deptsData, staffData] = await Promise.all([
//         apiCall("/complaints").catch(() => []),
//         apiCall("/meta/wards").catch(() => []),
//         apiCall("/meta/departments").catch(() => []),
//         apiCall("/auth/users").catch(() => [])
//       ]);

//       setComplaints(complaintsData);
//       setWards(wardsData);
//       setDepartments(deptsData);
//       setStaff(staffData);

//       // Calculate Stats
//       setStats({
//         total: complaintsData.length,
//         resolved: complaintsData.filter((c: any) => c.currentStatus === 'RESOLVED').length,
//         pending: complaintsData.filter((c: any) => ['CREATED', 'ACKNOWLEDGED'].includes(c.currentStatus)).length,
//         officers: staffData.filter((u: any) => u.role === 'OFFICER').length
//       });

//     } catch (e) {
//       console.error(e);
//       // If auth fails
//       if ((e as Error).message.includes("Unauthorized")) router.push("/login");
//     } finally {
//       setLoading(false);
//     }
//   }

//   // Handle Logout
//   const handleLogout = () => {
//     localStorage.removeItem("civic_token");
//     router.push("/login");
//   };

//   // ✅ NEW: Delete Entity (Ward or Dept)
//   async function handleDeleteEntity(type: 'ward' | 'dept', id: string) {
//     if (!confirm("Are you sure? This cannot be undone.")) return;

//     try {
//       setLoading(true);
//       const endpoint = type === 'ward' ? `/meta/wards/${id}` : `/meta/departments/${id}`;
//       await apiCall(endpoint, "DELETE");

//       alert("Deleted successfully");
//       loadDashboardData(); // Refresh list
//     } catch (e: any) {
//       alert("Failed to delete: " + e.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // ✅ NEW: Toggle Staff Status
//   async function handleToggleStatus(id: string) {

//     try {

//       // Call backend
//       const updatedUser = await apiCall(
//         `/auth/users/${id}/toggle-status`,
//         "PATCH"
//       );

//       // Update UI instantly (no reload required)
//       setStaff(prev =>
//         prev.map(user =>
//           user.id === id
//             ? { ...user, isActive: updatedUser.isActive }
//             : user
//         )
//       );

//     } catch (e: any) {
//       alert("Failed to update status: " + e.message);
//     }
//   }


//   return (
//     <div className="min-h-screen bg-black text-zinc-200 font-sans flex">

//       {/* 1. SIDEBAR */}
//       <aside className="w-64 border-r border-zinc-800 bg-zinc-900/30 flex flex-col fixed h-full z-20">
//         <div className="p-6">
//           <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//             Admin Command
//           </h1>
//           <p className="text-xs text-zinc-500 mt-1">Central Control Unit</p>
//         </div>

//         <nav className="flex-1 px-4 space-y-2">
//           <SidebarItem
//             icon={LayoutDashboard}
//             label="Overview"
//             active={activeTab === 'OVERVIEW'}
//             onClick={() => setActiveTab('OVERVIEW')}
//           />
//           <SidebarItem
//             icon={FileText}
//             label="Global Reports"
//             active={activeTab === 'REPORTS'}
//             onClick={() => setActiveTab('REPORTS')}
//           />
//           <SidebarItem
//             icon={Map}
//             label="City Configuration"
//             active={activeTab === 'CONFIG'}
//             onClick={() => setActiveTab('CONFIG')}
//           />
//           <SidebarItem
//             icon={Users}
//             label="Staff Management"
//             active={activeTab === 'STAFF'}
//             onClick={() => setActiveTab('STAFF')}
//           />
//         </nav>

//         <div className="p-4 border-t border-zinc-800">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-900/10 rounded-xl transition"
//           >
//             <LogOut size={18} /> Log Out
//           </button>
//         </div>
//       </aside>

//       {/* 2. MAIN CONTENT AREA */}
//       <main className="flex-1 ml-64 p-8">

//         {/* HEADER */}
//         <header className="flex justify-between items-center mb-8">
//           <div>
//             <h2 className="text-2xl font-bold text-white">
//               {activeTab === 'OVERVIEW' && "City Pulse Overview"}
//               {activeTab === 'STAFF' && "Staff Directory"}
//               {activeTab === 'CONFIG' && "City Infrastructure Config"}
//               {activeTab === 'REPORTS' && "Global Incident Reports"}
//             </h2>
//             <p className="text-zinc-500 text-sm">Real-time system updates</p>
//           </div>
//           <button
//             onClick={loadDashboardData}
//             className="text-sm text-zinc-400 hover:text-white flex items-center gap-2"
//           >
//             {loading ? "Syncing..." : "Refresh Data"}
//           </button>
//         </header>

//         {/* --- VIEW: OVERVIEW --- */}
//         {activeTab === 'OVERVIEW' && (
//           <div className="space-y-8">
//             {/* Metric Cards */}
//             <div className="grid grid-cols-4 gap-4">
//               <StatCard label="Total Incidents" value={stats.total} icon={FileText} color="text-blue-400" bg="bg-blue-500/10" />
//               <StatCard label="Pending Action" value={stats.pending} icon={AlertCircle} color="text-red-400" bg="bg-red-500/10" />
//               <StatCard label="Resolved" value={stats.resolved} icon={CheckCircle2} color="text-green-400" bg="bg-green-500/10" />
//               <StatCard label="Active Officers" value={stats.officers} icon={Users} color="text-purple-400" bg="bg-purple-500/10" />
//             </div>

//             {/* Recent Activity Table (Mini) */}
//             <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
//               <h3 className="text-lg font-bold text-white mb-4">Recent Critical Alerts</h3>
//               <div className="space-y-3">
//                 {complaints.slice(0, 5).map(c => (
//                   <div key={c.id} className="flex justify-between items-center p-3 hover:bg-zinc-800 rounded-lg transition border border-zinc-800/50">
//                     <div className="flex items-center gap-3">
//                       <span className={`w-2 h-2 rounded-full ${c.currentStatus === 'RESOLVED' ? 'bg-green-500' : 'bg-red-500'}`} />
//                       <div>
//                         <div className="text-sm font-medium text-white">{c.title}</div>
//                         <div className="text-xs text-zinc-500">{c.ward?.name} • {new Date(c.createdAt).toLocaleDateString()}</div>
//                       </div>
//                     </div>
//                     <span className="text-xs font-bold px-2 py-1 rounded bg-zinc-800 text-zinc-400">{c.currentStatus}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* --- VIEW: CITY CONFIG --- */}
//         {activeTab === 'CONFIG' && (
//           <div className="grid grid-cols-2 gap-8">

//             {/* DEPARTMENTS CARD */}
//             <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <div>
//                   <h3 className="text-lg font-bold text-white flex items-center gap-2">
//                     <Building2 size={20} className="text-blue-400" /> Departments
//                   </h3>
//                   <p className="text-xs text-zinc-500">Manage city operational units</p>
//                 </div>
//                 <button
//                   onClick={() => setShowDeptModal(true)}
//                   className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
//                 >
//                   <Plus size={18} />
//                 </button>
//               </div>

//               <div className="space-y-2">
//                 {departments.length === 0 && <div className="text-zinc-600 text-sm text-center py-4">No departments found.</div>}
//                 {/* {departments.map((d: any) => (
//                   <div key={d.id} className="flex justify-between items-center p-3 bg-black/40 border border-zinc-800 rounded-lg">
//                     <span className="font-medium text-zinc-300">{d.name}</span>
//                     <span className="text-xs text-zinc-600 bg-zinc-900 px-2 py-1 rounded">ID: {d.id}</span>
//                   </div>
//                 ))} */}

//                 {departments.map((d: any) => (
//                   <div key={d.id} className="flex justify-between items-center p-3 bg-black/40 border border-zinc-800 rounded-lg group">
//                     <span className="font-medium text-zinc-300">{d.name}</span>
//                     <div className="flex items-center gap-3">
//                       {/* ✅ UPDATED: Full ID with Monospace Font */}
//                       <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded select-all">
//                         {d.id}
//                       </span>

//                       <button
//                         onClick={() => handleDeleteEntity('dept', d.id)}
//                         className="text-zinc-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"
//                       >
//                         <Trash2 size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* WARDS CARD */}
//             <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <div>
//                   <h3 className="text-lg font-bold text-white flex items-center gap-2">
//                     <MapPin size={20} className="text-purple-400" /> Wards (Zones)
//                   </h3>
//                   <p className="text-xs text-zinc-500">Manage geographic zones</p>
//                 </div>
//                 <button
//                   onClick={() => setShowWardModal(true)}
//                   className="p-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition"
//                 >
//                   <Plus size={18} />
//                 </button>
//               </div>

//               <div className="space-y-2">
//                 {wards.length === 0 && <div className="text-zinc-600 text-sm text-center py-4">No wards found.</div>}
//                 {/* {wards.map((w: any) => (
//                   <div key={w.id} className="flex justify-between items-center p-3 bg-black/40 border border-zinc-800 rounded-lg">
//                     <span className="font-medium text-zinc-300">{w.name}</span>
//                     <span className="text-xs text-zinc-600 bg-zinc-900 px-2 py-1 rounded">ID: {w.id}</span>
//                   </div>
//                 ))} */}

//                 {wards.map((w: any) => (
//                   <div key={w.id} className="flex justify-between items-center p-3 bg-black/40 border border-zinc-800 rounded-lg group">
//                     <span className="font-medium text-zinc-300">{w.name}</span>
//                     <div className="flex items-center gap-3">
//                       {/* ✅ UPDATED: Full ID with Monospace Font */}
//                       <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded select-all">
//                         {w.id}
//                       </span>

//                       <button
//                         onClick={() => handleDeleteEntity('ward', w.id)}
//                         className="text-zinc-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"
//                       >
//                         <Trash2 size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         )}

//         {/* --- VIEW: STAFF MANAGEMENT --- */}
//         {activeTab === 'STAFF' && (
//           <div className="space-y-6">

//             {/* Filter Header */}
//             <div className="flex justify-between items-center bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
//               <div className="flex items-center gap-4">
//                 <span className="text-zinc-500 text-sm font-bold uppercase tracking-wider">Show:</span>
//                 <div className="flex bg-black rounded-lg p-1 border border-zinc-800">
//                   {['ALL', 'ACTIVE', 'INACTIVE'].map((tab) => (
//                     <button
//                       key={tab}
//                       onClick={() => setFilterStaffStatus(tab as any)}
//                       className={`px-4 py-1.5 rounded-md text-xs font-bold transition ${filterStaffStatus === tab ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
//                         }`}
//                     >
//                       {tab}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <button onClick={() => setShowStaffModal(true)} className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition">
//                 <Plus size={18} /> Register New Staff
//               </button>
//             </div>

//             {/* Filtered Table */}
//             <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
//               <table className="w-full text-left text-sm">
//                 <thead className="bg-black/50 text-zinc-500 border-b border-zinc-800">
//                   <tr>
//                     <th className="px-6 py-4">Name</th>
//                     <th className="px-6 py-4">Role</th>
//                     <th className="px-6 py-4 text-right">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-zinc-800">
//                   {staff
//                     .filter(u => {
//                       if (filterStaffStatus === 'ACTIVE') return u.isActive;
//                       if (filterStaffStatus === 'INACTIVE') return !u.isActive;
//                       return true;
//                     })
//                     .map((user: any) => (
//                       <tr key={user.id} className="hover:bg-zinc-800/50 transition group">
//                         <td className="px-6 py-4 font-medium text-white">{user.name}</td>
//                         <td className="px-6 py-4 text-zinc-400">{user.role}</td>
//                         <td className="px-6 py-4 text-right">
//                           <div className="flex items-center justify-end gap-3">
//                             <span className={`text-[10px] px-2 py-0.5 rounded border uppercase font-bold ${user.isActive ? 'text-green-500 border-green-900/50' : 'text-red-500 border-red-900/50'}`}>
//                               {user.isActive ? 'Active' : 'Inactive'}
//                             </span>
//                             <button onClick={() => handleToggleStatus(user.id)} className="opacity-0 group-hover:opacity-100 text-xs text-zinc-500 hover:text-white border border-zinc-700 px-2 py-1 rounded">
//                               {user.isActive ? 'Deactivate' : 'Activate'}
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//         {/* --- VIEW: GLOBAL REPORTS --- */}
//         {activeTab === 'REPORTS' && (
//           <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">

//             {/* Filters Bar */}
//             <div className="p-4 border-b border-zinc-800 flex gap-4 overflow-x-auto">
//               <select
//                 value={filterDept}
//                 onChange={(e) => setFilterDept(e.target.value)}
//                 className="bg-black border border-zinc-700 text-zinc-300 text-sm rounded-lg px-3 py-2 outline-none"
//               >
//                 <option value="">All Departments</option>
//                 {departments.map((d: any) => (
//                   <option key={d.id} value={d.name}>{d.name}</option>
//                 ))}
//               </select>

//               <select
//                 value={filterWard}
//                 onChange={(e) => setFilterWard(e.target.value)}
//                 className="bg-black border border-zinc-700 text-zinc-300 text-sm rounded-lg px-3 py-2 outline-none"
//               >
//                 <option value="">All Wards</option>
//                 {wards.map((w: any) => (
//                   <option key={w.id} value={w.name}>{w.name}</option>
//                 ))}
//               </select>

//               <select
//                 value={filterStatus}
//                 onChange={(e) => setFilterStatus(e.target.value)}
//                 className="bg-black border border-zinc-700 text-zinc-300 text-sm rounded-lg px-3 py-2 outline-none"
//               >
//                 <option value="">All Status</option>
//                 <option value="CREATED">Created</option>
//                 <option value="ACKNOWLEDGED">Acknowledged</option>
//                 <option value="RESOLVED">Resolved</option>
//               </select>

//               <div className="p-4 border-b border-zinc-800 flex gap-4 overflow-x-auto items-center"></div>

//               <input
//                 placeholder="Search reports..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="
//                           bg-black border border-zinc-700
//                           text-zinc-300 text-sm
//                           rounded-lg px-3 py-2 outline-none
//                           w-64
//                         "
//               />

//             </div>



//             <div className="max-h-[65vh] overflow-y-auto">
//               <table className="w-full text-left text-sm">
//                 <thead className="
//                                 sticky top-0 z-10
//                                 bg-zinc-950/95 backdrop-blur-md
//                                 text-zinc-500 uppercase font-bold
//                                 border-b border-zinc-800
//                               ">

//                   <tr>
//                     <th className="px-6 py-4">ID</th>
//                     <th className="px-6 py-4">Issue</th>
//                     <th className="px-6 py-4">Department</th>
//                     <th className="px-6 py-4">Ward</th>
//                     <th className="px-6 py-4 text-right">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-zinc-800">
//                   {complaints
//                     .filter((c) => {

//                       const matchesDept =
//                         !filterDept || c.department?.name === filterDept;

//                       const matchesWard =
//                         !filterWard || c.ward?.name === filterWard;

//                       const matchesStatus =
//                         !filterStatus || c.currentStatus === filterStatus;

//                       const matchesSearch =
//                         !searchTerm ||
//                         c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                         c.id.toLowerCase().includes(searchTerm.toLowerCase());

//                       return matchesDept && matchesWard && matchesStatus && matchesSearch;

//                     })
//                     .map((c) => (

//                       <tr key={c.id} className="hover:bg-zinc-800/50 transition">
//                         <td className="px-6 py-4 font-mono text-zinc-500">{c.id.slice(0, 6)}</td>
//                         <td className="px-6 py-4 font-medium text-white">{c.title}</td>
//                         <td className="px-6 py-4 text-zinc-400">{c.department?.name || "Unassigned"}</td>
//                         <td className="px-6 py-4 text-zinc-400">{c.ward?.name || "Unknown"}</td>
//                         <td className="px-6 py-4 text-right">
//                           <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${c.currentStatus === 'RESOLVED' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
//                             {c.currentStatus}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//       </main>

//       {/* --- MODALS --- */}
//       {showStaffModal && (
//         <StaffRegisterModal
//           onClose={() => setShowStaffModal(false)}
//           wards={wards}             // 👈 Pass Wards Data
//           departments={departments} // 👈 Pass Departments Data
//         />
//       )}

//       {/* ✅ FIX 2: Point Modals to the new /meta endpoints */}
//       {showDeptModal && (
//         <CreateEntityModal
//           title="Create Department"
//           apiEndpoint="/meta/departments"
//           onClose={() => { setShowDeptModal(false); loadDashboardData(); }}
//         />
//       )}

//       {showWardModal && (
//         <CreateEntityModal
//           title="Create Ward"
//           apiEndpoint="/meta/wards"
//           onClose={() => { setShowWardModal(false); loadDashboardData(); }}
//         />
//       )}

//     </div>
//   );
// }


// // --- SUB-COMPONENTS ---

// function SidebarItem({ icon: Icon, label, active, onClick }: any) {
//   return (
//     <button
//       onClick={onClick}
//       className={`
//         flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-xl transition-all
//         ${active ? "bg-white text-black shadow-lg shadow-white/10" : "text-zinc-500 hover:text-white hover:bg-zinc-800"}
//       `}
//     >
//       <Icon size={18} /> {label}
//     </button>
//   );
// }

// function StatCard({ label, value, icon: Icon, color, bg }: any) {
//   return (
//     <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex items-center justify-between">
//       <div>
//         <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">{label}</div>
//         <div className="text-3xl font-bold text-white">{value}</div>
//       </div>
//       <div className={`p-4 rounded-xl ${bg} ${color}`}>
//         <Icon size={24} />
//       </div>
//     </div>
//   );
// }
// function StaffRegisterModal({
//   onClose,
//   wards,
//   departments
// }: {
//   onClose: () => void;
//   wards: any[];
//   departments: any[];
// }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "OFFICER",
//     wardId: "",       // 👈 New Field
//     departmentId: ""  // 👈 New Field
//   });
//   const [loading, setLoading] = useState(false);

//   // Inside StaffRegisterModal component

//   async function handleSubmit() {
//     setLoading(true);
//     try {
//       // ✅ FIX: Clean up the data before sending
//       // If wardId is an empty string "", send undefined so backend ignores it or handles it
//       const payload = {
//         ...form,
//         wardId: form.wardId || undefined,
//         departmentId: form.departmentId || undefined
//       };

//       await apiCall("/auth/register-staff", "POST", payload);
//       alert("✅ Staff Created Successfully!");
//       onClose();
//     } catch (e: any) {
//       alert("Error: " + e.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
//       <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
//         <h2 className="text-xl font-bold text-white mb-6">Register New Staff</h2>

//         <div className="space-y-4">
//           <input
//             className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={e => setForm({ ...form, name: e.target.value })}
//           />
//           <input
//             className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none"
//             placeholder="Email"
//             value={form.email}
//             onChange={e => setForm({ ...form, email: e.target.value })}
//           />
//           <input
//             className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none"
//             placeholder="Password"
//             type="password"
//             value={form.password}
//             onChange={e => setForm({ ...form, password: e.target.value })}
//           />

//           <select
//             className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none"
//             value={form.role}
//             onChange={e => setForm({ ...form, role: e.target.value })}
//           >
//             <option value="OFFICER">Field Officer</option>
//             <option value="ADMIN">Admin</option>
//           </select>

//           {/* ✅ DYNAMIC FIELDS: Only show for Officers */}
//           {form.role === 'OFFICER' && (
//             <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 pt-2">
//               <div className="space-y-1">
//                 <label className="text-[10px] uppercase font-bold text-zinc-500">Department</label>
//                 <select
//                   className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-sm text-zinc-300 focus:border-purple-500 outline-none"
//                   value={form.departmentId}
//                   onChange={e => setForm({ ...form, departmentId: e.target.value })}
//                 >
//                   <option value="">Select Dept...</option>
//                   {departments?.map((d: any) => (
//                     <option key={d.id} value={d.id}>{d.name}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-[10px] uppercase font-bold text-zinc-500">Ward Zone</label>
//                 <select
//                   className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-sm text-zinc-300 focus:border-purple-500 outline-none"
//                   value={form.wardId}
//                   onChange={e => setForm({ ...form, wardId: e.target.value })}
//                 >
//                   <option value="">Select Ward...</option>
//                   {wards?.map((w: any) => (
//                     <option key={w.id} value={w.id}>{w.name}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           )}

//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl mt-4 transition"
//           >
//             {loading ? "Creating..." : "Create Account"}
//           </button>

//           <button
//             onClick={onClose}
//             className="w-full text-zinc-500 text-sm hover:text-white py-2"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function CreateEntityModal({ title, apiEndpoint, onClose }: any) {
//   const [name, setName] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit() {
//     if (!name) return;
//     setLoading(true);
//     try {
//       await apiCall(apiEndpoint, "POST", { name });
//       alert("✅ Created Successfully");
//       onClose();
//     } catch (e: any) {
//       alert("Error: " + e.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
//       <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-sm shadow-2xl">
//         <h2 className="text-xl font-bold text-white mb-6">{title}</h2>
//         <div className="space-y-4">
//           <input className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-blue-500 outline-none" placeholder="Enter Name..." value={name} onChange={e => setName(e.target.value)} />
//           <button onClick={handleSubmit} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl mt-2 transition">
//             {loading ? "Saving..." : "Save"}
//           </button>
//           <button onClick={onClose} className="w-full text-zinc-500 text-sm hover:text-white py-2">Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Map,
  FileText,
  LogOut,
  Plus,
  Search,
  Building2,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Menu,
  X,
  Trash2
} from "lucide-react";

// API Helper
const API = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

async function apiCall(url: string, method = "GET", body?: any) {
  const token = localStorage.getItem("civic_token");
  const headers: any = {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
  };

  const res = await fetch(`${API}${url}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'STAFF' | 'CONFIG' | 'REPORTS'>('OVERVIEW');
  const [loading, setLoading] = useState(false);
  
  // ✅ NEW: Mobile Sidebar Toggle State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data States
  const [stats, setStats] = useState({ total: 0, resolved: 0, pending: 0, officers: 0 });
  const [complaints, setComplaints] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [staff, setStaff] = useState<any[]>([]);

  // Modals
  const [showStaffModal, setShowStaffModal] = useState(false);
  const [showDeptModal, setShowDeptModal] = useState(false);
  const [showWardModal, setShowWardModal] = useState(false);

  const [filterDept, setFilterDept] = useState("");
  const [filterWard, setFilterWard] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [filterStaffStatus, setFilterStaffStatus] = useState<'ALL' | 'ACTIVE' | 'INACTIVE'>('ALL');

  // Load Initial Data
  useEffect(() => {
    loadDashboardData();
  }, []);

  async function loadDashboardData() {
    try {
      setLoading(true);
      const [complaintsData, wardsData, deptsData, staffData] = await Promise.all([
        apiCall("/complaints").catch(() => []),
        apiCall("/meta/wards").catch(() => []),
        apiCall("/meta/departments").catch(() => []),
        apiCall("/auth/users").catch(() => [])
      ]);

      setComplaints(complaintsData);
      setWards(wardsData);
      setDepartments(deptsData);
      setStaff(staffData);

      setStats({
        total: complaintsData.length,
        resolved: complaintsData.filter((c: any) => c.currentStatus === 'RESOLVED').length,
        pending: complaintsData.filter((c: any) => ['CREATED', 'ACKNOWLEDGED'].includes(c.currentStatus)).length,
        officers: staffData.filter((u: any) => u.role === 'OFFICER').length
      });

    } catch (e) {
      console.error(e);
      if ((e as Error).message.includes("Unauthorized")) router.push("/login");
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("civic_token");
    router.push("/login");
  };

  async function handleDeleteEntity(type: 'ward' | 'dept', id: string) {
    if (!confirm("Are you sure? This cannot be undone.")) return;
    try {
      setLoading(true);
      const endpoint = type === 'ward' ? `/meta/wards/${id}` : `/meta/departments/${id}`;
      await apiCall(endpoint, "DELETE");
      alert("Deleted successfully");
      loadDashboardData();
    } catch (e: any) {
      alert("Failed to delete: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleStatus(id: string) {
    try {
      const updatedUser = await apiCall(`/auth/users/${id}/toggle-status`, "PATCH");
      setStaff(prev => prev.map(user => user.id === id ? { ...user, isActive: updatedUser.isActive } : user));
    } catch (e: any) {
      alert("Failed to update status: " + e.message);
    }
  }

  return (
    <div className="min-h-screen bg-black text-zinc-200 font-sans flex relative overflow-hidden">

      {/* --- MOBILE SIDEBAR OVERLAY --- */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* 1. SIDEBAR (Responsive Slider) */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col z-50
        transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        <div className="p-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Admin Command
            </h1>
            <p className="text-xs text-zinc-500 mt-1">Central Control Unit</p>
          </div>
          {/* Mobile Close Button */}
          <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden p-2 text-zinc-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
          <SidebarItem icon={LayoutDashboard} label="Overview" active={activeTab === 'OVERVIEW'} onClick={() => { setActiveTab('OVERVIEW'); setIsMobileMenuOpen(false); }} />
          <SidebarItem icon={FileText} label="Global Reports" active={activeTab === 'REPORTS'} onClick={() => { setActiveTab('REPORTS'); setIsMobileMenuOpen(false); }} />
          <SidebarItem icon={Map} label="City Configuration" active={activeTab === 'CONFIG'} onClick={() => { setActiveTab('CONFIG'); setIsMobileMenuOpen(false); }} />
          <SidebarItem icon={Users} label="Staff Management" active={activeTab === 'STAFF'} onClick={() => { setActiveTab('STAFF'); setIsMobileMenuOpen(false); }} />
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-900/10 rounded-xl transition">
            <LogOut size={18} /> Log Out
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 md:ml-64 w-full h-screen overflow-y-auto">
        
        <div className="p-4 sm:p-8 w-full max-w-[1400px] mx-auto">
          {/* HEADER */}
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Hamburger Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 -ml-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900"
              >
                <Menu size={24} />
              </button>
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-white">
                  {activeTab === 'OVERVIEW' && "City Pulse Overview"}
                  {activeTab === 'STAFF' && "Staff Directory"}
                  {activeTab === 'CONFIG' && "City Infrastructure Config"}
                  {activeTab === 'REPORTS' && "Global Incident Reports"}
                </h2>
                <p className="text-zinc-500 text-xs sm:text-sm">Real-time system updates</p>
              </div>
            </div>
            <button
              onClick={loadDashboardData}
              className="text-xs sm:text-sm text-zinc-400 hover:text-white flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition shrink-0"
            >
              {loading ? "Syncing..." : "Refresh Data"}
            </button>
          </header>

          {/* --- VIEW: OVERVIEW --- */}
          {activeTab === 'OVERVIEW' && (
            <div className="space-y-6 sm:space-y-8">
              {/* Metric Cards (Responsive Grid) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <StatCard label="Total Incidents" value={stats.total} icon={FileText} color="text-blue-400" bg="bg-blue-500/10" />
                <StatCard label="Pending Action" value={stats.pending} icon={AlertCircle} color="text-red-400" bg="bg-red-500/10" />
                <StatCard label="Resolved" value={stats.resolved} icon={CheckCircle2} color="text-green-400" bg="bg-green-500/10" />
                <StatCard label="Active Officers" value={stats.officers} icon={Users} color="text-purple-400" bg="bg-purple-500/10" />
              </div>

              {/* Recent Activity Table */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 sm:p-6 overflow-hidden">
                <h3 className="text-base sm:text-lg font-bold text-white mb-4">Recent Critical Alerts</h3>
                <div className="space-y-2 sm:space-y-3">
                  {complaints.slice(0, 5).map(c => (
                    <div key={c.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-3 bg-black/20 hover:bg-zinc-800 rounded-lg border border-zinc-800/50 transition">
                      <div className="flex items-start sm:items-center gap-3">
                        <span className={`w-2 h-2 mt-1.5 sm:mt-0 shrink-0 rounded-full ${c.currentStatus === 'RESOLVED' ? 'bg-green-500' : 'bg-red-500'}`} />
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-white line-clamp-1">{c.title}</div>
                          <div className="text-[10px] sm:text-xs text-zinc-500">{c.ward?.name} • {new Date(c.createdAt).toLocaleDateString()}</div>
                        </div>
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold px-2 py-1 rounded bg-zinc-800 text-zinc-400 self-end sm:self-auto shrink-0">{c.currentStatus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* --- VIEW: CITY CONFIG --- */}
          {activeTab === 'CONFIG' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* DEPARTMENTS CARD */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 sm:p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <Building2 size={18} className="text-blue-400 sm:w-5 sm:h-5" /> Departments
                    </h3>
                    <p className="text-[10px] sm:text-xs text-zinc-500">Manage city operational units</p>
                  </div>
                  <button onClick={() => setShowDeptModal(true)} className="p-1.5 sm:p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition shrink-0">
                    <Plus size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </div>
                <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1 custom-scrollbar">
                  {departments.length === 0 && <div className="text-zinc-600 text-xs sm:text-sm text-center py-4">No departments found.</div>}
                  {departments.map((d: any) => (
                    <div key={d.id} className="flex justify-between items-center p-2.5 sm:p-3 bg-black/40 border border-zinc-800 rounded-lg group">
                      <span className="font-medium text-xs sm:text-sm text-zinc-300 truncate pr-2">{d.name}</span>
                      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <span className="text-[9px] sm:text-[10px] font-mono text-zinc-600 bg-zinc-900 px-1.5 sm:px-2 py-1 rounded select-all hidden sm:block">
                          {d.id}
                        </span>
                        <button onClick={() => handleDeleteEntity('dept', d.id)} className="text-zinc-600 hover:text-red-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition p-1">
                          <Trash2 size={14} className="sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WARDS CARD */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 sm:p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <MapPin size={18} className="text-purple-400 sm:w-5 sm:h-5" /> Wards (Zones)
                    </h3>
                    <p className="text-[10px] sm:text-xs text-zinc-500">Manage geographic zones</p>
                  </div>
                  <button onClick={() => setShowWardModal(true)} className="p-1.5 sm:p-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition shrink-0">
                    <Plus size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </div>
                <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1 custom-scrollbar">
                  {wards.length === 0 && <div className="text-zinc-600 text-xs sm:text-sm text-center py-4">No wards found.</div>}
                  {wards.map((w: any) => (
                    <div key={w.id} className="flex justify-between items-center p-2.5 sm:p-3 bg-black/40 border border-zinc-800 rounded-lg group">
                      <span className="font-medium text-xs sm:text-sm text-zinc-300 truncate pr-2">{w.name}</span>
                      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <span className="text-[9px] sm:text-[10px] font-mono text-zinc-600 bg-zinc-900 px-1.5 sm:px-2 py-1 rounded select-all hidden sm:block">
                          {w.id}
                        </span>
                        <button onClick={() => handleDeleteEntity('ward', w.id)} className="text-zinc-600 hover:text-red-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition p-1">
                          <Trash2 size={14} className="sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* --- VIEW: STAFF MANAGEMENT --- */}
          {activeTab === 'STAFF' && (
            <div className="space-y-4 sm:space-y-6">
              {/* Filter Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-zinc-900/50 p-3 sm:p-4 rounded-2xl border border-zinc-800">
                <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto overflow-x-auto no-scrollbar pb-1 sm:pb-0">
                  <span className="text-zinc-500 text-xs sm:text-sm font-bold uppercase tracking-wider shrink-0">Show:</span>
                  <div className="flex bg-black rounded-lg p-1 border border-zinc-800 shrink-0">
                    {['ALL', 'ACTIVE', 'INACTIVE'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setFilterStaffStatus(tab as any)}
                        className={`px-3 sm:px-4 py-1.5 rounded-md text-[10px] sm:text-xs font-bold transition ${filterStaffStatus === tab ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                <button onClick={() => setShowStaffModal(true)} className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-xl transition shrink-0">
                  <Plus size={16} /> Register Staff
                </button>
              </div>

              {/* Filtered Table - Mobile Scrollable */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm whitespace-nowrap">
                    <thead className="bg-black/50 text-zinc-500 border-b border-zinc-800">
                      <tr>
                        <th className="px-4 sm:px-6 py-3 sm:py-4">Name</th>
                        <th className="px-4 sm:px-6 py-3 sm:py-4">Role</th>
                        <th className="px-4 sm:px-6 py-3 sm:py-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      {staff
                        .filter(u => {
                          if (filterStaffStatus === 'ACTIVE') return u.isActive;
                          if (filterStaffStatus === 'INACTIVE') return !u.isActive;
                          return true;
                        })
                        .map((user: any) => (
                          <tr key={user.id} className="hover:bg-zinc-800/50 transition group">
                            <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-white">{user.name}</td>
                            <td className="px-4 sm:px-6 py-3 sm:py-4 text-zinc-400">{user.role}</td>
                            <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                              <div className="flex items-center justify-end gap-2 sm:gap-3">
                                <span className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded border uppercase font-bold ${user.isActive ? 'text-green-500 border-green-900/50' : 'text-red-500 border-red-900/50'}`}>
                                  {user.isActive ? 'Active' : 'Inactive'}
                                </span>
                                <button onClick={() => handleToggleStatus(user.id)} className="opacity-100 md:opacity-0 group-hover:opacity-100 text-[10px] sm:text-xs text-zinc-500 hover:text-white border border-zinc-700 px-2 py-1 rounded transition">
                                  {user.isActive ? 'Deactivate' : 'Activate'}
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* --- VIEW: GLOBAL REPORTS --- */}
          {activeTab === 'REPORTS' && (
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col h-[calc(100vh-140px)] sm:h-auto">
              
              {/* Filters Bar - Scrollable on Mobile */}
              <div className="p-3 sm:p-4 border-b border-zinc-800 flex flex-col sm:flex-row gap-3 overflow-x-auto no-scrollbar shrink-0">
                <div className="flex gap-2 sm:gap-4 overflow-x-auto w-full no-scrollbar pb-1 sm:pb-0">
                  <select value={filterDept} onChange={(e) => setFilterDept(e.target.value)} className="bg-black border border-zinc-700 text-zinc-300 text-xs sm:text-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 outline-none shrink-0">
                    <option value="">All Departments</option>
                    {departments.map((d: any) => <option key={d.id} value={d.name}>{d.name}</option>)}
                  </select>

                  <select value={filterWard} onChange={(e) => setFilterWard(e.target.value)} className="bg-black border border-zinc-700 text-zinc-300 text-xs sm:text-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 outline-none shrink-0">
                    <option value="">All Wards</option>
                    {wards.map((w: any) => <option key={w.id} value={w.name}>{w.name}</option>)}
                  </select>

                  <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="bg-black border border-zinc-700 text-zinc-300 text-xs sm:text-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 outline-none shrink-0">
                    <option value="">All Status</option>
                    <option value="CREATED">Created</option>
                    <option value="ACKNOWLEDGED">Acknowledged</option>
                    <option value="RESOLVED">Resolved</option>
                  </select>
                </div>
                
                <div className="relative shrink-0 w-full sm:w-auto mt-1 sm:mt-0">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    placeholder="Search ID/Title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-black border border-zinc-700 text-zinc-300 text-xs sm:text-sm rounded-lg pl-8 pr-3 py-1.5 sm:py-2 outline-none w-full sm:w-64"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-auto custom-scrollbar">
                <table className="w-full text-left text-xs sm:text-sm whitespace-nowrap">
                  <thead className="sticky top-0 z-10 bg-zinc-950/95 backdrop-blur-md text-zinc-500 uppercase font-bold border-b border-zinc-800 text-[10px] sm:text-xs">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 sm:py-4">ID</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4">Issue</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4">Department</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4">Ward</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {complaints
                      .filter((c) => {
                        const matchesDept = !filterDept || c.department?.name === filterDept;
                        const matchesWard = !filterWard || c.ward?.name === filterWard;
                        const matchesStatus = !filterStatus || c.currentStatus === filterStatus;
                        const matchesSearch = !searchTerm || c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.id.toLowerCase().includes(searchTerm.toLowerCase());
                        return matchesDept && matchesWard && matchesStatus && matchesSearch;
                      })
                      .map((c) => (
                        <tr key={c.id} className="hover:bg-zinc-800/50 transition">
                          <td className="px-4 sm:px-6 py-3 sm:py-4 font-mono text-zinc-500">{c.id.slice(0, 6)}</td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-white max-w-[150px] sm:max-w-[200px] truncate">{c.title}</td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-zinc-400">{c.department?.name || "Unassigned"}</td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-zinc-400">{c.ward?.name || "Unknown"}</td>
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                            <span className={`px-2 py-1 rounded text-[9px] sm:text-[10px] font-bold uppercase ${c.currentStatus === 'RESOLVED' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                              {c.currentStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* --- MODALS --- */}
      {showStaffModal && (
        <StaffRegisterModal
          onClose={() => setShowStaffModal(false)}
          wards={wards}
          departments={departments}
        />
      )}

      {showDeptModal && (
        <CreateEntityModal
          title="Create Department"
          apiEndpoint="/meta/departments"
          onClose={() => { setShowDeptModal(false); loadDashboardData(); }}
        />
      )}

      {showWardModal && (
        <CreateEntityModal
          title="Create Ward"
          apiEndpoint="/meta/wards"
          onClose={() => { setShowWardModal(false); loadDashboardData(); }}
        />
      )}

    </div>
  );
}


// --- SUB-COMPONENTS ---

function SidebarItem({ icon: Icon, label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-xl transition-all
        ${active ? "bg-white text-black shadow-lg shadow-white/10" : "text-zinc-500 hover:text-white hover:bg-zinc-800"}
      `}
    >
      <Icon size={18} /> {label}
    </button>
  );
}

function StatCard({ label, value, icon: Icon, color, bg }: any) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-4 sm:p-6 rounded-2xl flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
      <div>
        <div className="text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">{label}</div>
        <div className="text-2xl sm:text-3xl font-bold text-white">{value}</div>
      </div>
      <div className={`p-2.5 sm:p-4 rounded-xl ${bg} ${color}`}>
        <Icon size={20} className="sm:w-6 sm:h-6" />
      </div>
    </div>
  );
}

function StaffRegisterModal({ onClose, wards, departments }: { onClose: () => void; wards: any[]; departments: any[]; }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "OFFICER", wardId: "", departmentId: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    try {
      const payload = { ...form, wardId: form.wardId || undefined, departmentId: form.departmentId || undefined };
      await apiCall("/auth/register-staff", "POST", payload);
      alert("✅ Staff Created Successfully!");
      onClose();
    } catch (e: any) {
      alert("Error: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[60] px-4 p-4">
      <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6">Register New Staff</h2>
        <div className="space-y-3 sm:space-y-4">
          <input className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-sm sm:text-base text-white focus:border-purple-500 outline-none" placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <input className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-sm sm:text-base text-white focus:border-purple-500 outline-none" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          <input className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-sm sm:text-base text-white focus:border-purple-500 outline-none" placeholder="Password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
          
          <select className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-sm sm:text-base text-white focus:border-purple-500 outline-none" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
            <option value="OFFICER">Field Officer</option>
            <option value="ADMIN">Admin</option>
          </select>

          {form.role === 'OFFICER' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 pt-1 sm:pt-2">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-zinc-500">Department</label>
                <select className="w-full bg-black border border-zinc-700 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-zinc-300 focus:border-purple-500 outline-none" value={form.departmentId} onChange={e => setForm({ ...form, departmentId: e.target.value })}>
                  <option value="">Select Dept...</option>
                  {departments?.map((d: any) => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-zinc-500">Ward Zone</label>
                <select className="w-full bg-black border border-zinc-700 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-zinc-300 focus:border-purple-500 outline-none" value={form.wardId} onChange={e => setForm({ ...form, wardId: e.target.value })}>
                  <option value="">Select Ward...</option>
                  {wards?.map((w: any) => <option key={w.id} value={w.id}>{w.name}</option>)}
                </select>
              </div>
            </div>
          )}

          <button onClick={handleSubmit} disabled={loading} className="w-full bg-purple-600 hover:bg-purple-500 text-white text-sm sm:text-base font-bold py-3 rounded-xl mt-4 transition active:scale-95">
            {loading ? "Creating..." : "Create Account"}
          </button>
          <button onClick={onClose} className="w-full text-zinc-500 text-xs sm:text-sm hover:text-white py-2">Cancel</button>
        </div>
      </div>
    </div>
  );
}

function CreateEntityModal({ title, apiEndpoint, onClose }: any) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!name) return;
    setLoading(true);
    try {
      await apiCall(apiEndpoint, "POST", { name });
      alert("✅ Created Successfully");
      onClose();
    } catch (e: any) {
      alert("Error: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[60] px-4 p-4">
      <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-2xl w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6">{title}</h2>
        <div className="space-y-3 sm:space-y-4">
          <input className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-sm sm:text-base text-white focus:border-blue-500 outline-none" placeholder="Enter Name..." value={name} onChange={e => setName(e.target.value)} />
          <button onClick={handleSubmit} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm sm:text-base font-bold py-3 rounded-xl mt-2 transition active:scale-95">
            {loading ? "Saving..." : "Save"}
          </button>
          <button onClick={onClose} className="w-full text-zinc-500 text-xs sm:text-sm hover:text-white py-2">Cancel</button>
        </div>
      </div>
    </div>
  );
}