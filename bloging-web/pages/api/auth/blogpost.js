// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { save } from "@/Services/blog_post";




export default  async function handler(req, res) {
    if(req.method === "POST"){
        var {heading,description}  = req.body;
        console.log(heading + "|~_~|" + description ); 
        
        try{
            save(heading,description);
            res.status(201).send();
    
        }catch(err){
            res.status(400).json({message: err});
        }

    }else{
        res.status(400).send();
    }
    

    
  }
  