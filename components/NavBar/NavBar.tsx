import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import Image from "next/image";

export const NavBar = () => {
  return (
    <header className=" md:flex items-center justify-between p-5 px-5 shadow-sm border-b-[1px] w-full">
      <Link href="/"  className=" ml-5 flex justify-center items-center ">
        <Image src="/img/logo.png" alt="logo" width={150} height={150}  className='object-contain'/>
      </Link>
      
      <div className="hidden md:flex">
        <ul className="flex gap-5">
          <li><a href="#" className="hover:bg-blue-500 p-2  px-3 rounded-full hover:text-white cursor-pointer">Histórico</a></li>
          <li><a href="#" className="hover:bg-blue-500 p-2 px-3  rounded-full hover:text-white cursor-pointer">Contato</a></li>
        </ul>
      </div>
       <div className="mr-5">
       <UserButton />
       </div>
        
    </header>
  )
}
