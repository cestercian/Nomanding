import http from "node:http";
import serveData from "./serveData.ts";
import sendResponse from "./sendResponse.js";

const PORT = 8000;

const __dirname = import.meta.dirname;

// TEMP mock user
const user = { email: "b@b.com", password: "p123" };

const server = http.createServer(async (req, res) => {

    // --- CORS ---
    if (req.method === "OPTIONS") {
        res.statusCode = 204;
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        return res.end();
    }

    // ---------------- LOGIN ----------------
    if (req.url === "/api/login" && req.method === "POST") {
        let body = "";

        req.on("data", chunk => body += chunk.toString());

        req.on("end", () => {
            const { email, password } = JSON.parse(body);

            if (email === user.email && password === user.password) {
                return sendResponse(
                    res,
                    200,
                    "application/json",
                    JSON.stringify({ token: "loggedin" })
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
        return serveData(res, __dirname);
    }

    sendResponse(res, 404, "text/html", "Not Valid API route");
});

server.listen(8000, () => {
  console.log(`server is connected to ${PORT} at http://localhost:${PORT}`);
});
