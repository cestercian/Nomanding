import path from "node:path"; import fs from 'node:fs/promises'



export default async function serveStatic(cwd) {
    console.log('serving static')
    try{

        const fileDirectory = path.join( cwd, 'data' ,'vansData.json' )
        return JSON.parse(
            await fs.readFile(
                path.join(fileDirectory),
                "utf-8")
        )
    }catch (e) {
        console.log(e)
        return [] } }