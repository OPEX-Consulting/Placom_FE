"use client"
import Image from "next/image"
import { useState } from "react"
import { Topbar } from "./components/topbar";

import { ProductProps, products,  } from "../../lib/data/products";
import { Product } from "./components/product";
import { Input } from "@/components/ui/input";

interface MarketplaceProps {
    products?: ProductProps[];
}

 const Marketplace : React.FC<MarketplaceProps> = () => {
  return (
    <main className="min-h-screen">
        <Topbar/>
        <div className="absolute z-1000 top-55 left-1/2 transform -translate-x-1/2 w-full max-w-xl">
            <Input className="bg-white rounded-xl py-6 border border-[#C7C7CD] pl-10 w-full" placeholder="Search a product"/>
            <div className="absolute top-[17px]">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 48 48" className="absolute top-0 left-4 text-secondary">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M42 19H6M30 7l12 12M6.799 29h36m-36 0l12 12"></path>
                </svg>
            </div>
            <div className="absolute top-[17px] w-full flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" className="relative top-0 right-4 text-[#878D99]">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"></path>
                </svg>
            </div>
        </div>
        <section className="bg-white pt-5 pb-16">
            <div className="container mx-auto px-4 sm:px-8">
                    <div className="flex flex-wrap justify-center sm:justify-between px-2 md:px-0 pb-5">
                        {products.map((product, index) => (
                            <Product product={product} key={index} />
                        ))}
                    </div>
            </div>
        </section>
    </main>
  );
}
export default Marketplace


