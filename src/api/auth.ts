// Get API URL from environment variable, fallback to localhost for development
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function loginUser( creds: { email: string; password: string }) {
    const res:Response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creds)
    });

    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        };
    }

    return data;
}
