import Form from "@/components/auth/form";
import { getSession, signIn } from "next-auth/react"

export default function SignIn () {
    const onSubmit =  (email,password) =>{

         signIn('credentials', {redirect: false , email , password});
    };
    return <Form signin={true} onFormSubmit={onSubmit} />
};

export async function getServerSideProps({req}){
    const session = await getSession({req});
    console.log(session);
    if(session){
        return{
            redirect:{
                destination: "/profile",
                permanent: false
            }
        }
    }
    return{
        props:{
            session
        } 
    }
}