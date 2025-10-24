import http from "node:http";
import serveStatic from "./serveStatic.js";
import sendResponse from "./sendResponse.js";

const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
        if (req.method === "OPTIONS") {
            res.statusCode = 204;
            res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
            res.setHeader(
              "Access-Control-Allow-Methods",
              "GET, POST, PUT, DELETE, OPTIONS",
            );
            res.setHeader("Access-Control-Allow-Headers", "Content-Type");
            res.end();
            return;
        }

        if (req.url.startsWith("/vans") || req.url.startsWith("/api")) {
            return serveStatic(res, __dirname);
        } else {
            sendResponse(res, 404, "text/html", "Not Valid API route");
        }
});

server.listen(8000, () => {
  console.log(`server is connected to ${PORT} at http://localhost:${PORT}`);
});
