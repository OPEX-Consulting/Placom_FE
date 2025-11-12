import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
    const navItems = [
        { name: "Features", href: "/", dropdown: true, dropdownItems: [
            { name: "Feature 1", href: "/feature1" },
            { name: "Feature 2", href: "/feature2" },
            { name: "Feature 3", href: "/feature3" },
        ] },
        { name: "Pricing", href: "/marketplace" },
        { name: "Resources", href: "/about" },
    ];
  return (
    <header className="w-full m-auto bg-white sticky top-0 z-50 shadow-xs">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-32">
            <div className="flex items-center gap-2">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <span className="text-2xl font-bold text-teal-600">PLACOM</span>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-[#878D99] text-sm">
                {navItems.map((item) => (
                    <div key={item.name} className="relative inline-block text-left">
                        <a
                            href={item.href}
                            className="hover:text-teal-600 px-4 py-2 flex items-center"
                        >
                            {item.name}
                            {item.dropdown && <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                                <path fill="currentColor" d="m7 10l5 5l5-5z"></path>
                            </svg>}
                        </a>
                        {/* {item.dropdown && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                {item.dropdownItems.map((dropdownItem) => (
                                    <a
                                        key={dropdownItem.name}
                                        href={dropdownItem.href}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        {dropdownItem.name}
                                    </a>
                                ))}
                            </div>
                        )} */}
                        </div>))
                }
            </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="border-[#B8B8B8] px-6"
          >
            Switch Account Type 
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 256 256">
                <path fill="currentColor" d="M208 96a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v64h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8V96Zm-24 64h-8a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16h-8V96h8a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h8Z"></path>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
