// // "use client";

// // import { useState, useEffect, useRef } from "react";
// // import { useRouter } from "next/navigation";
// // import { User, LogOut, Shield, CheckCircle2, ShieldAlert, ChevronDown } from "lucide-react";
// // import { apiGet, apiPost } from "@/lib/api";

// // export default function UserProfile() {
// //     const router = useRouter();
// //     const [user, setUser] = useState<any>(null);
// //     const [isOpen, setIsOpen] = useState(false);
// //     const [loading, setLoading] = useState(true);
// //     const menuRef = useRef<HTMLDivElement>(null);

// //     // 1. Fetch User Profile on Mount
// //     //   useEffect(() => {
// //     //     async function fetchUser() {
// //     //       try {
// //     //         // Adjust endpoint if needed (e.g., /auth/profile)
// //     //         const data = await apiGet<any>("/auth/me"); 
// //     //         if (data) setUser(data);
// //     //       } catch (e) {
// //     //         console.error("Failed to load profile", e);
// //     //       } finally {
// //     //         setLoading(false);
// //     //       }
// //     //     }
// //     //     fetchUser();

// //     //     // Close menu when clicking outside
// //     //     function handleClickOutside(event: MouseEvent) {
// //     //       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
// //     //         setIsOpen(false);
// //     //       }
// //     //     }
// //     //     document.addEventListener("mousedown", handleClickOutside);
// //     //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //     //   }, []);
// //     useEffect(() => {

// //         async function fetchUser() {

// //             try {
// //                 const data = await apiGet<any>("/auth/me");
// //                 setUser(data);
// //             } catch {
// //                 setUser(null);
// //             } finally {
// //                 setLoading(false);
// //             }

// //         }

// //         fetchUser();

// //         // 👇 ADD THIS LISTENER
// //         const handleAuthChange = () => {
// //             setLoading(true);
// //             fetchUser();
// //         };

// //         window.addEventListener("authChanged", handleAuthChange);

// //         return () => {
// //             window.removeEventListener("authChanged", handleAuthChange);
// //         };

// //     }, []);


// //     // 2. Handle Logout
// //     const handleLogout = async () => {
// //         try {
// //             await apiPost("/auth/logout", {});
// //         } catch (err) {
// //             // Ignore network errors on logout
// //         }
// //         // Clear local storage/cookies
// //         localStorage.removeItem("token");
// //         document.cookie = "token=; Max-Age=0; path=/;";
// //         router.push("/login");
// //         router.refresh();
// //     };

// //     // 3. Role Styling Helper
// //     const getRoleStyle = (role: string) => {
// //         switch (role?.toUpperCase()) {
// //             case "OFFICER":
// //                 return {
// //                     bg: "bg-amber-500/10", border: "border-amber-500/20",
// //                     text: "text-amber-400", icon: Shield, glow: "shadow-amber-500/20"
// //                 };
// //             case "ADMIN":
// //                 return {
// //                     bg: "bg-red-500/10", border: "border-red-500/20",
// //                     text: "text-red-400", icon: ShieldAlert, glow: "shadow-red-500/20"
// //                 };
// //             default: // CITIZEN
// //                 return {
// //                     bg: "bg-blue-500/10", border: "border-blue-500/20",
// //                     text: "text-blue-400", icon: CheckCircle2, glow: "shadow-blue-500/20"
// //                 };
// //         }
// //     };

// //     if (loading) return null;
// //     if (!user) return null; // Hide if not logged in

// //     const style = getRoleStyle(user.role);
// //     const RoleIcon = style.icon;

// //     return (
// //         <div className="fixed top-6 right-6 z-[9999]" ref={menuRef}>

// //             {/* TRIGGER BUTTON */}
// //             <button
// //                 onClick={() => setIsOpen(!isOpen)}
// //                 className={`
// //           relative flex items-center gap-3 pl-1 pr-4 py-1 rounded-full 
// //           bg-zinc-950/80 backdrop-blur-xl border border-white/10 
// //           transition-all duration-300 hover:bg-zinc-900 group shadow-2xl
// //           ${isOpen ? 'ring-1 ring-white/20' : ''}
// //         `}
// //             >
// //                 {/* Avatar Circle */}
// //                 <div className={`
// //           w-9 h-9 rounded-full flex items-center justify-center 
// //           ${style.bg} ${style.border} border shadow-[0_0_15px_rgba(0,0,0,0.3)]
// //         `}>
// //                     <User size={16} className={style.text} />
// //                 </div>

// //                 {/* Text Info */}
// //                 <div className="flex flex-col items-start text-left mr-1">
// //                     <span className="text-xs font-bold text-white leading-tight">
// //                         {user.name || "User"}
// //                     </span>
// //                     <div className="flex items-center gap-1">
// //                         <RoleIcon size={10} className={style.text} />
// //                         <span className={`text-[9px] font-bold uppercase tracking-wider ${style.text}`}>
// //                             {user.role}
// //                         </span>
// //                     </div>
// //                 </div>

// //                 <ChevronDown size={14} className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
// //             </button>

// //             {/* DROPDOWN MENU */}
// //             {isOpen && (
// //                 <div className="
// //            absolute top-full right-0 mt-2 w-56
// //            bg-zinc-950/90 backdrop-blur-2xl border border-white/10 
// //            rounded-2xl shadow-2xl shadow-black/80
// //            p-1.5 overflow-hidden animate-in slide-in-from-top-2 fade-in duration-200
// //         ">
// //                     {/* Profile Header in Dropdown */}
// //                     <div className="px-3 py-3 border-b border-white/5 mb-1">
// //                         <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Signed in as</p>
// //                         <p className="text-sm font-medium text-white truncate">{user.email}</p>
// //                     </div>

// //                     {/* Menu Items */}
// //                     <button
// //                         onClick={() => router.push("/profile")}
// //                         className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-left"
// //                     >
// //                         <User size={16} /> My Profile
// //                     </button>

// //                     <div className="h-px bg-white/5 my-1" />

// //                     <button
// //                         onClick={handleLogout}
// //                         className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-colors text-left"
// //                     >
// //                         <LogOut size={16} /> Log out
// //                     </button>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }

// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";
// import { useRouter, usePathname } from "next/navigation"; // 👈 Import usePathname
// import { User, LogOut, Shield, CheckCircle2, ShieldAlert, ChevronDown } from "lucide-react";
// import { apiGet, apiPost } from "@/lib/api";

// export default function UserProfile() {
//     const router = useRouter();
//     const pathname = usePathname(); // 👈 Track current page
//     const [user, setUser] = useState<any>(null);
//     const [isOpen, setIsOpen] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const menuRef = useRef<HTMLDivElement>(null);

//     // --- 1. Robust Fetch Logic ---
//     const fetchUser = useCallback(async () => {
//         // Don't bother fetching if we are on the login page
//         if (pathname === "/login") {
//             setUser(null);
//             setLoading(false);
//             return;
//         }

//         try {
//             const data = await apiGet<any>("/auth/me");
//             setUser(data || null);
//         } catch (e) {
//             setUser(null);
//         } finally {
//             setLoading(false);
//         }
//     }, [pathname]);

//     // --- 2. Listen for Route Changes ---
//     useEffect(() => {
//         fetchUser();
//     }, [fetchUser]);

//     // --- 3. Listen for Login/Logout Events ---
//     useEffect(() => {
//         const handleAuthChange = () => {
//             setLoading(true);
//             fetchUser();
//         };

//         // Custom event listener
//         window.addEventListener("authChanged", handleAuthChange);

//         // Click outside listener
//         function handleClickOutside(event: MouseEvent) {
//             if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//                 setIsOpen(false);
//             }
//         }
//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             window.removeEventListener("authChanged", handleAuthChange);
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [fetchUser]);

//     //   // --- 4. Handle Logout ---
//     //   const handleLogout = async () => {
//     //     try {
//     //       await apiPost("/auth/logout", {});
//     //     } catch (err) {
//     //       // Ignore network errors
//     //     }

//     //     // Clear storage
//     //     localStorage.removeItem("token");
//     //     document.cookie = "token=; Max-Age=0; path=/;";

//     //     // Reset local state immediately
//     //     setUser(null);
//     //     setIsOpen(false);

//     //     // Dispatch event to notify other components (if any)
//     //     window.dispatchEvent(new Event("authChanged"));

//     //     // Redirect
//     //     router.push("/login");
//     //     router.refresh();
//     //   };
//     const handleLogout = async () => {
//         try {
//             // 1. Tell backend to clear httpOnly cookie
//             await apiPost("/auth/logout", {});
//         } catch (err) {
//             console.warn("Logout warning:", err);
//         }

//         // 2. Clear all frontend storage
//         localStorage.removeItem("civic_token");
//         localStorage.removeItem("civic_role");
//         localStorage.removeItem("civic_user");

//         // 3. Notify app (important for UserProfile auto refresh)
//         window.dispatchEvent(new Event("authChanged"));

//         // 4. HARD reload to reset entire app state
//         window.location.href = "/login";
//     };


//     // --- 5. Role Styling ---
//     const getRoleStyle = (role: string) => {
//         switch (role?.toUpperCase()) {
//             case "OFFICER":
//                 return {
//                     bg: "bg-amber-500/10", border: "border-amber-500/20",
//                     text: "text-amber-400", icon: Shield
//                 };
//             case "ADMIN":
//                 return {
//                     bg: "bg-red-500/10", border: "border-red-500/20",
//                     text: "text-red-400", icon: ShieldAlert
//                 };
//             default:
//                 return {
//                     bg: "bg-blue-500/10", border: "border-blue-500/20",
//                     text: "text-blue-400", icon: CheckCircle2
//                 };
//         }
//     };

//     if (loading) return null;
//     if (!user) return null;

//     const style = getRoleStyle(user.role);
//     const RoleIcon = style.icon;

//     return (
//         <div className="fixed top-6 right-6 z-[9999]" ref={menuRef}>

//             {/* TRIGGER BUTTON */}
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className={`
//           relative flex items-center gap-3 pl-1 pr-4 py-1 rounded-full 
//           bg-zinc-950/80 backdrop-blur-xl border border-white/10 
//           transition-all duration-300 hover:bg-zinc-900 group shadow-2xl
//           ${isOpen ? 'ring-1 ring-white/20' : ''}
//         `}
//             >
//                 <div className={`
//           w-9 h-9 rounded-full flex items-center justify-center 
//           ${style.bg} ${style.border} border shadow-[0_0_15px_rgba(0,0,0,0.3)]
//         `}>
//                     <User size={16} className={style.text} />
//                 </div>

//                 <div className="flex flex-col items-start text-left mr-1">
//                     <span className="text-xs font-bold text-white leading-tight">
//                         {user.name || "User"}
//                     </span>
//                     <div className="flex items-center gap-1">
//                         <RoleIcon size={10} className={style.text} />
//                         <span className={`text-[9px] font-bold uppercase tracking-wider ${style.text}`}>
//                             {user.role}
//                         </span>
//                     </div>
//                 </div>

//                 <ChevronDown size={14} className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
//             </button>

//             {/* DROPDOWN MENU */}
//             {isOpen && (
//                 <div className="
//            absolute top-full right-0 mt-2 w-56
//            bg-zinc-950/90 backdrop-blur-2xl border border-white/10 
//            rounded-2xl shadow-2xl shadow-black/80
//            p-1.5 overflow-hidden animate-in slide-in-from-top-2 fade-in duration-200
//         ">
//                     <div className="px-3 py-3 border-b border-white/5 mb-1">
//                         <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Signed in as</p>
//                         <p className="text-sm font-medium text-white truncate">{user.email}</p>
//                     </div>

//                     <button
//                         onClick={() => router.push("/profile")}
//                         className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-left"
//                     >
//                         <User size={16} /> My Profile
//                     </button>

//                     <div className="h-px bg-white/5 my-1" />

//                     <button
//                         onClick={handleLogout}
//                         className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-colors text-left"
//                     >
//                         <LogOut size={16} /> Log out
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }


"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { User, LogOut, Shield, CheckCircle2, ShieldAlert, ChevronDown } from "lucide-react";
import { apiGet, apiPost } from "@/lib/api";

export default function UserProfile() {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useState<any>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const menuRef = useRef<HTMLDivElement>(null);

    // --- Robust Fetch Logic ---
    const fetchUser = useCallback(async () => {
        if (pathname === "/login") {
            setUser(null);
            setLoading(false);
            return;
        }
        try {
            const data = await apiGet<any>("/auth/me");
            setUser(data || null);
        } catch (e) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, [pathname]);

    // --- Listen for Route Changes ---
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    // --- Listen for Login/Logout Events ---
    useEffect(() => {
        const handleAuthChange = () => {
            setLoading(true);
            fetchUser();
        };

        window.addEventListener("authChanged", handleAuthChange);

        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("authChanged", handleAuthChange);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [fetchUser]);

    // --- Handle Logout ---
    const handleLogout = async () => {
        try {
            await apiPost("/auth/logout", {});
        } catch (err) {
            console.warn("Logout warning:", err);
        }
        localStorage.removeItem("civic_token");
        localStorage.removeItem("civic_role");
        localStorage.removeItem("civic_user");
        window.dispatchEvent(new Event("authChanged"));
        window.location.href = "/login";
    };

    // --- Role Styling ---
    const getRoleStyle = (role: string) => {
        switch (role?.toUpperCase()) {
            case "OFFICER":
                return { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400", icon: Shield };
            case "ADMIN":
                return { bg: "bg-red-500/10", border: "border-red-500/20", text: "text-red-400", icon: ShieldAlert };
            default:
                return { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", icon: CheckCircle2 };
        }
    };

    if (loading || !user) return null;

    const style = getRoleStyle(user.role);
    const RoleIcon = style.icon;

    return (
        // ✅ Aligned perfectly with your new map header positioning
        <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[9999]" ref={menuRef}>

            {/* TRIGGER BUTTON: Circular on mobile, Pill on desktop */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    relative flex items-center gap-0 md:gap-3 
                    p-1 md:pl-1 md:pr-4 md:py-1 rounded-full 
                    bg-zinc-950/80 backdrop-blur-xl border border-white/10 
                    transition-all duration-300 hover:bg-zinc-900 group shadow-[0_8px_30px_rgba(0,0,0,0.5)]
                    ${isOpen ? 'ring-1 ring-white/20' : ''}
                `}
            >
                {/* AVATAR ICON (Always visible) */}
                <div className={`
                    w-9 h-9 md:w-9 md:h-9 rounded-full flex items-center justify-center shrink-0
                    ${style.bg} ${style.border} border shadow-[0_0_15px_rgba(0,0,0,0.3)]
                `}>
                    <User size={16} className={style.text} />
                </div>

                {/* USER TEXT (Hidden on mobile!) */}
                <div className="hidden md:flex flex-col items-start text-left mr-1">
                    <span className="text-xs font-bold text-white leading-tight truncate max-w-[100px]">
                        {user.name || "User"}
                    </span>
                    <div className="flex items-center gap-1">
                        <RoleIcon size={10} className={style.text} />
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${style.text}`}>
                            {user.role}
                        </span>
                    </div>
                </div>

                {/* CHEVRON (Hidden on mobile!) */}
                <ChevronDown size={14} className={`hidden md:block text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* DROPDOWN MENU */}
            {isOpen && (
                <div className="
                    absolute top-full right-0 mt-2 w-56
                    bg-zinc-950/90 backdrop-blur-2xl border border-white/10 
                    rounded-2xl shadow-2xl shadow-black/80
                    p-1.5 overflow-hidden animate-in slide-in-from-top-2 fade-in duration-200
                ">
                    <div className="px-3 py-3 border-b border-white/5 mb-1">
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Signed in as</p>
                        <p className="text-sm font-medium text-white truncate">{user.email}</p>
                    </div>

                    <button
                        onClick={() => { setIsOpen(false); router.push("/profile"); }}
                        className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-left"
                    >
                        <User size={16} /> My Profile
                    </button>

                    <div className="h-px bg-white/5 my-1" />

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-colors text-left"
                    >
                        <LogOut size={16} /> Log out
                    </button>
                </div>
            )}
        </div>
    );
}