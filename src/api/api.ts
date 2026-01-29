import type { Van } from "../types/types.ts";

// Get API URL from environment variable, fallback to localhost for development
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default async function getVans() : Promise<Van[]> {
    const res : Response = await fetch(`${API_URL}/api/vans`);
    if(!res.ok){
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status:res.status
        }
    }
    return await res.json();
}
