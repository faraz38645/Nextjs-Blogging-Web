import fs from 'fs';
import path from 'path';
import {compare, hash} from 'bcryptjs'


const filePath = path.join(process.cwd(), "src","data","users.json");

export  function getAll () {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export  function getByEmail (email) {
    const data = getAll();
    return data.find(p => p.email.toLowerCase() === email.toLowerCase());
}


export  async function verifyPassword (hashed_pass,password) {
    const validation = await compare(password,hashed_pass);
    return validation;
}

export  async function save (email, password) {
    // console.log("working" ,email," ",password);
    const found = getByEmail(email);

    if(found){
        throw new Error ("User already Exists");
    }

    const hashed_pass = await hash(password , 12 );

    const data = getAll();
    data.push({
        id: data.length + 1, email , password:hashed_pass 
    });
    fs.writeFileSync(filePath, JSON.stringify(data));

}