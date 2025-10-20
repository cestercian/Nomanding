import path from "node:path";
import fs from 'node:fs/promises'
import sendResponse from "./sendResponse.js";


export default async function serveStatic(res,cwd) {
    console.log('serving static')

    try{

        const fileDirectory = path.join( cwd, 'data' ,'vansData.json' )
        const data =  JSON.parse(
            await fs.readFile(
                path.join(fileDirectory), "utf-8"
            )
        )
        sendResponse(res, 200,'application/json', JSON.stringify(data))

    }catch (e) {
        console.log(e)
        return []
    }
}