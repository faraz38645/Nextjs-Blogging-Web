import fs from 'fs'
import path from 'path'

const filepath =path.join(process.cwd(),"public","static","data","landing.json");

export function getAll(){
    const data=fs.readFileSync(filepath);
    return JSON.parse(data);
}

