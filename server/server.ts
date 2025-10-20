import * as http from 'node:http'
import serveStatic from "./serveStatic.js";
import sendResponse from "./sendResponse.js";

const PORT = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server =

    http.createServer(async (req:http.IncomingMessage,res:http.ServerResponse):Promise<void> => {

        if(req.url.startsWith('/vans')){
            return serveStatic(res,__dirname)
        }else {
            sendResponse(res,404,'text/html', 'Not Valid API route')
        }

    })

server.listen(8000,()=>{console.log(`server is connected to ${PORT} at http://localhost:${PORT}`)})