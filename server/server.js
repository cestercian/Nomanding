import http from 'node:http'
import serveStatic from "./serveStatic.js";
import sendResponse from "./sendResponse.js";

const PORT = 8000;

const __dirname = import.meta.dirname

const server =

    http.createServer(async (req,res) => {

        if(req.url.startsWith('/vans')){
            return serveStatic(res,__dirname)
        }else {
            sendResponse(res,500,'text/html', 'Internal server Error')
        }

    })

server.listen(8000,()=>{console.log(`server is connected to ${PORT} at http://localhost:${PORT}`)})