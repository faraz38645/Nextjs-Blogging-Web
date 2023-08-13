// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { save } from "@/Services/users";




export default  async function handler(req, res) {
    if(req.method === "POST"){
        var {mail,pass}  = req.body;
        console.log(mail + "|~_~|" + pass); 
        // mail="faraz"
        // pass="1234"
        console.log(mail," working", pass);
        
        try{
            save(mail,pass);
            res.status(201).send();
    
        }catch(err){
            res.status(400).json({message: err});
        }

    }else{
        res.status(400).send();
    }
    

    
  }
  