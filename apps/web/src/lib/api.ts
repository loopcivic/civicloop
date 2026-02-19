// // // export const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

// // // export async function apiGet<T>(path: string): Promise<T> {
// // //   const res = await fetch(`${API_BASE}${path}`, { cache: "no-store" });
// // //   if (!res.ok) throw new Error(await res.text());
// // //   return res.json();
// // // }

// // // export async function apiPost<T>(path: string, body: any): Promise<T> {
// // //   const res = await fetch(`${API_BASE}${path}`, {
// // //     method: "POST",
// // //     headers: { "Content-Type": "application/json" },
// // //     body: JSON.stringify(body),
// // //   });
// // //   if (!res.ok) throw new Error(await res.text());
// // //   return res.json();
// // // }

// // // export const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
// // // export const CITY_CODE = process.env.NEXT_PUBLIC_CITY_CODE ?? "pilot-city";

// // export const API_BASE = "/api"; 

// // export const CITY_CODE = process.env.NEXT_PUBLIC_CITY_CODE ?? "pilot-city";

// // // for pilot: store current role token in localStorage
// // function getToken() {
// //   if (typeof window === "undefined") return null;
// //   return localStorage.getItem("civic_token");
// // }

// // // export async function apiGet<T>(path: string): Promise<T> {
// // //   const token = getToken();
// // //   const res = await fetch(`${API_BASE}${path}`, {
// // //     cache: "no-store",
// // //     headers: token ? { Authorization: `Bearer ${token}` } : {},
// // //   });
// // //   if (!res.ok) throw new Error(await res.text());
// // //   return res.json();
// // // }

// // // export async function apiPost<T>(path: string, body: any): Promise<T> {
// // //   const token = getToken();
// // //   const res = await fetch(`${API_BASE}${path}`, {
// // //     method: "POST",
// // //     headers: {
// // //       "Content-Type": "application/json",
// // //       ...(token ? { Authorization: `Bearer ${token}` } : {}),
// // //     },
// // //     body: JSON.stringify(body),
// // //   });
// // //   if (!res.ok) throw new Error(await res.text());
// // //   return res.json();
// // // }

// // // export async function apiGet<T>(path: string): Promise<T> {
// // //   const res = await fetch(`${API_BASE}${path}`, { cache: "no-store", credentials: "include" });
// // //   if (!res.ok) throw new Error(await res.text());
// // //   return res.json();
// // // }

// // // export async function apiPost<T>(path: string, body: any): Promise<T> {
// // //   const res = await fetch(`${API_BASE}${path}`, {
// // //     method: "POST",
// // //     headers: { "Content-Type": "application/json" },
// // //     body: JSON.stringify(body),
// // //     credentials: "include",
// // //   });
// // //   if (!res.ok) throw new Error(await res.text());
// // //   return res.json();
// // // }

// // // gemni
// // // ✅ CHANGE 1: Point to the internal proxy, NOT the external port 4000.
// // // This matches the "rewrites" rule you added in next.config.js

// // export async function apiGet<T>(path: string): Promise<T> {
// //   // ✅ CHANGE 2: credentials: "include" ensures the Cookie is sent 
// //   // to the Next.js proxy, which forwards it to the NestJS backend.
// //   const res = await fetch(`${API_BASE}${path}`, { 
// //     cache: "no-store", 
// //     credentials: "include" 
// //   });
  
// //   if (!res.ok) throw new Error(await res.text());
// //   return res.json();
// // }

// // export async function apiPost<T>(path: string, body: any): Promise<T> {
// //   const res = await fetch(`${API_BASE}${path}`, {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(body),
// //     credentials: "include", // ✅ Ensures cookies are sent/received
// //   });
  
// //   if (!res.ok) throw new Error(await res.text());
// //   return res.json();
// // }

// // export const API_BASE = "/api"; 
// // export const CITY_CODE = process.env.NEXT_PUBLIC_CITY_CODE ?? "pilot-city";

// // function getToken() {
// //   if (typeof window === "undefined") return null;
// //   return localStorage.getItem("civic_token");
// // }

// // export async function apiGet<T>(path: string): Promise<T> {
// //   const token = getToken();
  
// //   const res = await fetch(`${API_BASE}${path}`, { 
// //     cache: "no-store", 
// //     credentials: "include", // Try Cookie first
// //     headers: {
// //       // ✅ Fallback: Send manual token if it exists
// //       ...(token ? { "Authorization": `Bearer ${token}` } : {})
// //     }
// //   });
  
// //   if (!res.ok) throw new Error(await res.text());
// //   return res.json();
// // }

// // // export async function apiPost<T>(path: string, body: any): Promise<T> {
// // //   const token = getToken();

// // //   const res = await fetch(`${API_BASE}${path}`, {
// // //     method: "POST",
// // //     headers: { 
// // //       "Content-Type": "application/json",
// // //       // ✅ Fallback: Send manual token if it exists
// // //       ...(token ? { "Authorization": `Bearer ${token}` } : {})
// // //     },
// // //     body: JSON.stringify(body),
// // //     credentials: "include",
// // //   });
  
// // //   if (!res.ok) throw new Error(await res.text());
// // //   return res.json();
// // // }
// //   export async function apiPost<T>(path: string, body: any): Promise<T> {
// //   const token = getToken();

// //   // 🔍 DEBUG: Check if the token exists before sending
// //   console.log(`🚀 API Request to ${path}`);
// //   console.log(`🔑 Token being sent:`, token ? token : "NONE (Expected Failure)");

// //   const res = await fetch(`${API_BASE}${path}`, {
// //     method: "POST",
// //     headers: { 
// //       "Content-Type": "application/json",
// //       ...(token ? { "Authorization": `Bearer ${token}` } : {})
// //     },
// //     body: JSON.stringify(body),
// //     credentials: "include",
// //   });
  
// //   if (!res.ok) throw new Error(await res.text());
// //   return res.json();
// // }

// // export const API_BASE = "/api";
// export const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
// export const CITY_CODE = process.env.NEXT_PUBLIC_CITY_CODE ?? "pilot-city";

// function getToken() {
//   if (typeof window === "undefined") return null;
//   // This reads the key you manually set in the console
//   return localStorage.getItem("civic_token"); 
// }

// export async function apiGet<T>(path: string): Promise<T> {
//   const token = getToken();
  
//   const res = await fetch(`${API_BASE}${path}`, { 
//     cache: "no-store", 
//     headers: {
//       // ✅ Force the Header if token exists
//       ...(token ? { "Authorization": `Bearer ${token}` } : {})
//     }
//   });
  
//   if (!res.ok) throw new Error(await res.text());
//   return res.json();
// }

// // ✅ Ensure 'export' is written exactly like this
// export async function apiPost<T>(path: string, body: any): Promise<T> {
//   const token = getToken();

//   // 🔍 Debug: Print to browser console to prove we have the token
//   console.log(`🚀 API Request to ${path}`);
//   console.log(`🔑 Token being sent:`, token ? token : "NONE (Expected Failure)");

//   const res = await fetch(`${API_BASE}${path}`, {
//     method: "POST",
//     headers: { 
//       "Content-Type": "application/json",
//       // ✅ Force the Header if token exists
//       ...(token ? { "Authorization": `Bearer ${token}` } : {})
//     },
//     body: JSON.stringify(body),
//   });
  
//   if (!res.ok) throw new Error(await res.text());
//   return res.json();
// }
// apps/web/src/lib/api.ts

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
export const CITY_CODE = process.env.NEXT_PUBLIC_CITY_CODE ?? "pilot-city";

function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("civic_token"); 
}

export async function apiGet<T>(path: string): Promise<T> {
  const token = getToken();
  
  const res = await fetch(`${API_BASE}${path}`, { 
    cache: "no-store", 
    credentials: "include", // 👈 IMPORTANT: Sends Cookies (Session)
    headers: {
      "Content-Type": "application/json",
      ...(token ? { "Authorization": `Bearer ${token}` } : {})
    }
  });
  
  if (!res.ok) {
    // Attempt to parse JSON error first, fallback to text
    try {
      const json = await res.json();
      throw new Error(json.message || json.error || "API Error");
    } catch (e: any) {
      // If parsing fails or we just threw the error above
      throw new Error(e.message || await res.text());
    }
  }
  return res.json();
}

export async function apiPost<T>(path: string, body: any): Promise<T> {
  const token = getToken();

  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    credentials: "include", // 👈 IMPORTANT: Sends Cookies (Session)
    headers: { 
      "Content-Type": "application/json",
      ...(token ? { "Authorization": `Bearer ${token}` } : {})
    },
    body: JSON.stringify(body),
  });
  
  if (!res.ok) {
    try {
      const json = await res.json();
      throw new Error(json.message || json.error || "API Error");
    } catch (e: any) {
      throw new Error(e.message || await res.text());
    }
  }
  return res.json();
}