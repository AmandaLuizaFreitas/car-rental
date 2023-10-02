

import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import Image from "next/image";


export const NavBar = () => {
  return (
    <header  className="w-full absolute z-10">
     <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
     <Link href="/"  className=" ml-5 flex justify-center items-center ">
        <Image src="/img/logo.png" alt="logo" width={150} height={150}  className='object-contain'/>
      </Link>
      
      
       <div className="mr-5">
       <UserButton />
       </div>
       </nav>
    </header>
  )
}
