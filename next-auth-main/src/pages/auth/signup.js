
import Form from "@/components/auth/form";

export default function SignUp() {
    const onSubmit = async (mail,pass) =>{

        try{
            const response = await fetch('/api/auth/signup',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({mail,pass})
            })  

            if(response.ok){
                alert("Sign Up SuccesFull")
            }
        }
        catch (err){
            console.error(err);
        }

        console.log(mail,pass);
    };

    return <Form signin={false} onFormSubmit={onSubmit}/>
};

// body: JSON.stringify(["okay","123"])
// body: JSON.stringify({mail , pass})
//body: JSON.stringify({mail , pass})