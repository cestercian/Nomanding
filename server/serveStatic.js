import { vansData } from "../vansData.json";

export default async function serveStatic(req, res, cwd) {
    console.log("Serving static /vans route...");

    try {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(vansData));
    } catch (e) {
        console.error(e);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to serve data" }));
    }
}
