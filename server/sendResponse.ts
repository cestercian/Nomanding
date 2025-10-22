import {ServerResponse} from "node:http";

export default function sendResponse( res:ServerResponse, statusCode:number, resType:string , payload:string|Buffer ) {

    res.statusCode = statusCode
    res.setHeader('content-type', resType )
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.end(payload)

}