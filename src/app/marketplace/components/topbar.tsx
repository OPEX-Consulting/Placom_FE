import { Button } from "@/components/ui/button"
import { cartItems } from "@/lib/data/products"
import Image from "next/image"

export function Topbar() {
  return (
    <header className="w-full m-auto bg-[#F9FAFB] border-b border-gray-100">
      <div className="container mx-auto px-3 py-4 flex items-center justify-between">
        <div className="flex items-center gap-20">
            <div className="hidden md:flex items-center space-x-2 text-[#878D99] text-sm">
                <div className="relative inline-block">
                    <a
                        href={'#'}
                        className="hover:text-teal-600 font-semibold px-4 py-2 flex flex-col items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="#5B5B5B" d="M19.435 11.5h-2.72V4.56a1.5 1.5 0 0 0-1.5-1.5h-6.43a1.5 1.5 0 0 0-1.5 1.5v6.94h-2.72a1.5 1.5 0 0 0-1.5 1.5v6.44a1.5 1.5 0 0 0 1.5 1.5H11a1.47 1.47 0 0 0 1-.39a1.5 1.5 0 0 0 1 .39h6.44a1.5 1.5 0 0 0 1.5-1.5V13a1.5 1.5 0 0 0-1.505-1.5M11.5 19.44a.5.5 0 0 1-.5.5H4.565a.5.5 0 0 1-.5-.5V13a.5.5 0 0 1 .5-.5h1.97v2a.5.5 0 0 0 .5.5h1.5a.51.51 0 0 0 .5-.5v-2H11.5ZM8.285 11.5V4.56a.5.5 0 0 1 .5-.5h1.96v2a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-2h1.97a.5.5 0 0 1 .5.5v6.94Zm11.65 7.94a.51.51 0 0 1-.5.5H13a.51.51 0 0 1-.5-.5V12.5h2.47v2a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-2h1.97a.5.5 0 0 1 .5.5Z"></path>
                        </svg>
                        All products
                    </a>
                    <div className="w-8 border-t-2 border-[#5B5B5B] m-auto -mt-1"></div>
                </div>
                <div className="relative inline-block">
                    <a
                        href={'#'}
                        className="hover:text-teal-600 px-4 py-2 flex flex-col items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="#5B5B5B" d="M19.435 11.5h-2.72V4.56a1.5 1.5 0 0 0-1.5-1.5h-6.43a1.5 1.5 0 0 0-1.5 1.5v6.94h-2.72a1.5 1.5 0 0 0-1.5 1.5v6.44a1.5 1.5 0 0 0 1.5 1.5H11a1.47 1.47 0 0 0 1-.39a1.5 1.5 0 0 0 1 .39h6.44a1.5 1.5 0 0 0 1.5-1.5V13a1.5 1.5 0 0 0-1.505-1.5M11.5 19.44a.5.5 0 0 1-.5.5H4.565a.5.5 0 0 1-.5-.5V13a.5.5 0 0 1 .5-.5h1.97v2a.5.5 0 0 0 .5.5h1.5a.51.51 0 0 0 .5-.5v-2H11.5ZM8.285 11.5V4.56a.5.5 0 0 1 .5-.5h1.96v2a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-2h1.97a.5.5 0 0 1 .5.5v6.94Zm11.65 7.94a.51.51 0 0 1-.5.5H13a.51.51 0 0 1-.5-.5V12.5h2.47v2a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-2h1.97a.5.5 0 0 1 .5.5Z"></path>
                        </svg>
                        Discounted
                    </a>
                </div>
                <div className="relative inline-block">
                    <a
                        href={'#'}
                        className="hover:text-teal-600 px-4 py-2 flex flex-col items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="#5B5B5B" d="M19.435 11.5h-2.72V4.56a1.5 1.5 0 0 0-1.5-1.5h-6.43a1.5 1.5 0 0 0-1.5 1.5v6.94h-2.72a1.5 1.5 0 0 0-1.5 1.5v6.44a1.5 1.5 0 0 0 1.5 1.5H11a1.47 1.47 0 0 0 1-.39a1.5 1.5 0 0 0 1 .39h6.44a1.5 1.5 0 0 0 1.5-1.5V13a1.5 1.5 0 0 0-1.505-1.5M11.5 19.44a.5.5 0 0 1-.5.5H4.565a.5.5 0 0 1-.5-.5V13a.5.5 0 0 1 .5-.5h1.97v2a.5.5 0 0 0 .5.5h1.5a.51.51 0 0 0 .5-.5v-2H11.5ZM8.285 11.5V4.56a.5.5 0 0 1 .5-.5h1.96v2a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-2h1.97a.5.5 0 0 1 .5.5v6.94Zm11.65 7.94a.51.51 0 0 1-.5.5H13a.51.51 0 0 1-.5-.5V12.5h2.47v2a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-2h1.97a.5.5 0 0 1 .5.5Z"></path>
                        </svg>
                        Stores
                    </a>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-3">
            <div className="h-[50px] border-l-[1px] border-[#878D99] mr-10"></div>
            <div className="relative flex items-center justify-center p-2 rounded-full border border-[#92959E]">
                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24">
                    <path fill="#8AC73C" d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"></path>
                </svg>
                <div className="absolute -top-2 right-0 w-5 h-5 flex justify-center items-center bg-white rounded-full text-xs text-secondary font-extrabold">{cartItems.length}</div>
            </div>
          <Button
            variant="outline"
            className="border-[#B8B8B8] px-6 rounded-full"
          >
            Hi User
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd">
                    <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                    <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"></path>
                </g>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
