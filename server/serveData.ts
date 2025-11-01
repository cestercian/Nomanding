import * as path from "node:path";
import * as fs from 'node:fs/promises'
import sendResponse from "./sendResponse.js";
import {ServerResponse} from "node:http";

export default async function serveData(res:ServerResponse, cwd:string): Promise<void> {

    console.log('serving static')

    try{

        const fileDirectory = path.join( cwd, '..', 'data' ,'vansData.json' )
        const data =  JSON.parse(
            await fs.readFile(
                fileDirectory, "utf-8"
            )
        )
        sendResponse(res, 200,'application/json', JSON.stringify(data))

    }catch (e) {
        console.log(e)
        sendResponse(res, 500, 'text/html', 'Internal Server Error')
    }
}