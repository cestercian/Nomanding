import http from "node:http";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import serveData from "./serveData.js";
import sendResponse from "./sendResponse.js";

// Use environment variable for PORT, default to 8000 for local development
const PORT = process.env.PORT || 8000;

// Use environment variable for CORS origin, default to localhost for development
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

// Get directory name (compatible with all Node.js versions)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// TEMP mock user
const user = { email: "b@b.com", password: "p123" };

const server = http.createServer(async (req, res) => {

    // --- CORS ---
    if (req.method === "OPTIONS") {
        res.statusCode = 204;
        res.setHeader("Access-Control-Allow-Origin", CORS_ORIGIN);
        res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        return res.end();
    }

    // ---------------- LOGIN ----------------
    if (req.url === "/api/login" && req.method === "POST") {
        // Add CORS headers
        res.setHeader("Access-Control-Allow-Origin", CORS_ORIGIN);
        
        let body = "";

        req.on("data", chunk => body += chunk.toString());

        req.on("end", () => {
            const { email, password } = JSON.parse(body);

            if (email === user.email && password === user.password) {
                return sendResponse(
                    res,
                    200,
                    "application/json",
                    JSON.stringify({ token: "logged In" })
                );
            }

            return sendResponse(
                res,
                401,
                "application/json",
                JSON.stringify({ message: "Invalid credentials" })
            );
        });

        return;
    }

    // ---------- VANS ROUTES ----------
    if (req.url.startsWith("/api/vans")) {
        res.setHeader("Access-Control-Allow-Origin", CORS_ORIGIN);
        return serveData(res, __dirname);
    }

    sendResponse(res, 404, "text/html", "Not Valid API route");
});

server.listen(8000, () => {
  console.log(`server is connected to ${PORT} at http://localhost:${PORT}`);
});
