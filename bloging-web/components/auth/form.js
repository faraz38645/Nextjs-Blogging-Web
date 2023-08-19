import Link from "next/link";
import { useRef } from "react";

export default function Form({ signin , onFormSubmit }) {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  
  const onSubmitHandler = (e) => {

    const firstname= firstnameRef.current.value ;
    const lastname=lastnameRef.current.value ;
    const email = emailRef.current.value;
    const password = passRef.current.value;

    e.preventDefault();
    
    onFormSubmit(email,password,firstname,lastname);
    // {signin ? (onFormSubmit(email,password)) : (onFormSubmit(email,password,firstname,lastname))}
  }
  const onSubmitHandler2 = (e) => {

    const email = emailRef.current.value;
    const password = passRef.current.value;

    e.preventDefault();
    
    onFormSubmit(email,password);
    
  }
  
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  py-12 lg:px-8 border-4  rounded-lg bg-white shadow-lg mx-[1.5rem] my-[2.5rem] ml-[46rem] max-w-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {signin ? "Sign in to your account" : "Signup for new account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={signin?(onSubmitHandler2):(onSubmitHandler)}>
            <div>

            {signin ? (""):
            (
              <>
              <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-2 " >
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  ref={firstnameRef}
                  autoComplete="email"
                  required
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>


              <label
              htmlFor="lastname"
              className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  ref={lastnameRef}
                  autoComplete="email"
                  required
                  className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              </>
              
              
                  
            )}

              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  autoComplete="email"
                  required
                  className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passRef}
                  autoComplete="current-password"
                  required
                  className=" pl-2block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href={signin ? "/auth/signup" : "/auth/login"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {signin
                    ? "Do not have an account? Signup"
                    : "Already have an account? Sign in"}
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {signin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
