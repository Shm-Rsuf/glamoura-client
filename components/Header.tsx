"use client";
import Link from "next/link";
import Button, { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navContents=[
  {href:"/",label:"Home"},
  {href:"/beauty-packages",label:"Beauty Packages"},
  {href:"/specialists",label:"Specialists"},
  {href:"/about",label:"About"},
  {href:"/contact",label:"Contacts"},
]

const Header = () => {
  const pathname = usePathname()
  console.log(pathname);
  return (
    <header className="h-20 w-full flex items-center border-b border-gray bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-[100]">
      <nav className="container flex justify-between items-center gap-5">
      <Link href="/" className="left uppercase font-semibold text-xl">
        <span className="text-red">gla</span>
        <span className="text-purple">mo</span>
        <span className="text-blue">ura</span>
      </Link>
      <div className="middle">
        <ul className="flex justify-center items-center gap-4">
          {
            navContents&& navContents.map((list,i)=>(
              <li key={i} >
                <Link href={list.href} className={cn("link-item",pathname === list.href? "eq text-black":"text-black/50")}>{list.label}</Link>
              </li>
            ))
          }
          <Link href="/sign-in" className={cn(buttonVariants({variant:"secondary"}))}>Sign in</Link>
        </ul>
      </div>
    </nav>
    </header>
    
  );
};

export default Header;
