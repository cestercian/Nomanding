import http from 'node:http'
import serveStatic from "./server/serveStatic.js";

const PORT = 8000;

const __dirname = import.meta.dirname

const server =
    http.createServer(async (req,res) => {
        if(req.url.startsWith('/vans')){
            return serveStatic(req,res,__dirname)
        }
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Server is running ✅ — Try /vans or /vans/1")

    })

server.listen(8000,()=>{console.log(`server is connected to ${PORT} at http://localhost:${PORT}`)})