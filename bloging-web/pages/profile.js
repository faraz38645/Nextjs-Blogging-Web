import { getSession } from "next-auth/react";
import { useRef } from "react";
import Blogs from "@/components/auth/blogs";
import getposts from "./auth/getposts";





export default function SignUp({ onFormSubmit } ) {

  const headingRef = useRef();
  const descriptionRef = useRef();

  const onSubmitHandler = async (e) => {
   
    e.preventDefault();
    const heading = headingRef.current.value;
    const description = descriptionRef.current.value;
    console.log("CHeck................"+heading+" " +description);

    try {
            const response = await fetch('/api/auth/blogpost', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ heading, description })
            });

            if (response.ok) {
                alert("----Successfully published----");
            }
        } catch (err) {
            console.error(err);
        }
    
  }






  return (
    <>
    <nav class="bg-gray-200 border-gray-200 px-4 lg:px-6 pt-1 pb-4 dark:bg-gray-800 ">
    <h2 className=" ml-9 text-2xl font-bold  tracking-tight text-gray-900">
      Dashboard
    </h2>
    </nav>
      
      <div className="w-full max-w-[52rem] mx-auto ">
        <form onSubmit={(onSubmitHandler)} className="bg-gray-50 shadow-2xl rounded-2xl px-8 pt-14 pb-8 mb-4  mt-5">
          <div class="mb-4 " >
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              ref={headingRef}
              placeholder="place holder"
            />
          </div>
          <div class="mb-6">

            <textarea
              class=" shadow appearance-none border border-purple-600 rounded w-full py-5 px-3 text-gray-700 mb-1.7 leading-tight focus:outline-none focus:shadow-outline pb-[7.0rem] "
              id="password"
              type="text"
              ref={descriptionRef}
              placeholder="What is in your Mind?"
            />  
          </div>
          
          <div class="flex items-center justify-between">
            <button
              type="submit"
              class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Publish Blog
            </button>

          </div>
        </form>
        
      </div>
      
    </>
  );
}

export async function getServerSideProps({req}){
  const session = await getSession({req});
  if(!session){
    return{
      redirect:{
        destination: "/auth/login",
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
