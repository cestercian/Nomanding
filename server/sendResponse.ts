export default function sendResponse(res,statusCode:number, resType:string, payload ) {
    res.statusCode = statusCode
    res.setHeader('content-type', resType )
    res.end(payload)
}