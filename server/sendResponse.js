export default function sendResponse(res,statusCode, resType, payload ) {

    res.statusCode = statusCode
    res.setHeader('content-type', resType )
    res.end(payload)

}