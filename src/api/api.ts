import type { Van } from "../types/types.ts";

export default async function getVans() : Promise<Van[]> {
    const res : Response = await fetch("http://localhost:8000/api/vans");
    return await res.json();
}