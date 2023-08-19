import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Header () {
    return (<header>
        <nav class="bg-purple-700 border-gray-200 px-4 lg:px-6 py-1 dark:bg-gray-800">
            <h1 className="absolute top-3 text-white font-bold" >Personal Bloging App</h1>
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ml-[12rem]">
                <div class="flex items-center lg:order-2">
                    <Link href="/auth/login" class="text-white dark:text-white hover:bg-purple-400  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>
                    <button onClick={signOut}
                    class="text-white dark:text-white hover:bg-purple-400  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log out</button>
                    <Link href="/profile" class="text-white dark:text-white hover:bg-purple-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Profile</Link>
                </div>
            </div>
        </nav>
    </header>);
}