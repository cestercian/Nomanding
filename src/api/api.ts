import type { Van } from "../types/types.ts";

export default async function getVans() : Promise<Van[]> {
    const res : Response = await fetch("http://localhost:8000/api/vans");
    if(!res.ok){
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status:res.status
        }
    }
    return await res.json();
}

