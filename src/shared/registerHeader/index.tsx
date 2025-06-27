"use client";
import React, { lazy, Suspense } from 'react'
import { Loader2Icon } from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from "next/link";
const ImageLoader = lazy(() => import("@/shared/ImageLoader"))

interface HeaderProps {
  register: boolean;
}
const Header: React.FC<HeaderProps> = ({register}) => {
    return (<header className="py-3 px-4 w-[82%] flex flex-row justify-between  border-gray-100 rounded-full shadow-2xl !bg-white/50 mx-auto">
        <div><Link href={"/"}><ImageContent /> </Link></div>
        <div className='items-center gap-2 justify-center flex cursor-pointer'>
            <Link href={"/auth/login"}><Button color="primary" className=" cursor-pointer rounded-full p-5 !bg-green-600  hover:bg-green-700 text-md">Login</Button></Link>
            {register && <Link href={"/auth/register"}><Button color="primary" className=" cursor-pointer rounded-full p-5 !bg-teal-800  hover:bg-teal-700 text-md">Register</Button></Link>}
            </div>
    </header>)
}
export default Header

const ImageContent = () => {
    return (
        <div className="min-h-[50px] relative">
            <Suspense
                fallback={
                    <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                        <Loader2Icon className="animate-spin h-8 w-8" />
                    </div>
                }>
                <div className="flex flex-row inset-0 justify-center items-center">
                    <ImageLoader
                        src="/assets/placom_logo.png"
                        alt="Placom_Logo"
                        width={60}
                        height={60}
                        sizes="(max-width: 640px) 100vw, 
                   (max-width: 1024px) 80vw,
                   60vw"
                        priority
                        className="object-fit"
                    />
                    <span className='text-xl  uppercase text-[#0F6862] font-bold font-inter italic'>Placom</span>
                </div>
            </Suspense>
        </div>
    );
};