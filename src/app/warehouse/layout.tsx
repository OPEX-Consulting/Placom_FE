'use client'
import Footer from "@/shared/footer";
import Header from "@/shared/registerHeader";

interface WarehouseLayoutProps {
    children: React.ReactNode,
    register: boolean
}


export default function WarehouseLayout({ children }: WarehouseLayoutProps) {
    return (
        <div className="min-h-screen bg-[#345C00CC]/80 flex flex-col space-y-2">

            <div className="mt-5 !bg-transparent">
                <Header
                    register={true}
                />
            </div>

            <main className="">
                {children}
            </main>

            <Footer />
        </div>
    )
}