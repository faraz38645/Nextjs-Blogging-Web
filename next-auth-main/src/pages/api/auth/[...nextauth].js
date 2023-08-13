import { getByEmail, verifyPassword } from "@/Services/users";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

 
export const authOptions = {
  // Configure one or more authentication providers
  session:{
    jwt:true
  },
  providers: [
    CredentialsProvider({
        async authorize({email,password})  
        {
            const user = getByEmail(email);

            if(!user){
                throw new Error("User not Found");
            }
            const validation = await verifyPassword(user.password,password);

            if(!validation){
                throw new Error("Incorrect Password");
            }
            console.log("validated")
            return{email};
        }

    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)