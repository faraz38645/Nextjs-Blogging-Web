import fs from 'fs';
import path from 'path';


const filePath = path.join(process.cwd(),"data","blog.json");

export  function getAll () {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}



// export  async function verifyPassword (hashed_pass,password) {
//     const validation = await compare(password,hashed_pass);
//     return validation;
// }

export  async function save (heading,description) {
    


    const data = getAll();
    data.push({
        id: data.length + 1, heading , description
    });
    fs.writeFileSync(filePath, JSON.stringify(data));

}