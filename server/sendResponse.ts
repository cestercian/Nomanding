import {ServerResponse} from "node:http";

export default function sendResponse( res:ServerResponse, statusCode:number, resType:string , payload:string|Buffer ) {

    res.statusCode = statusCode
    res.setHeader('content-type', resType )
    res.end(payload)

}