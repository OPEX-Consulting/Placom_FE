'use client'
import React,{useState} from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link"

const First_Section: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-400 via-green-300 to-blue-400">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-100">
        <Image
          src="/homeHero.png"
          alt="PLACOM Hero Background"
          fill
          className="mx-auto mb-4 object-cover"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto md:pt-8">
        <nav className="bg-white/80 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-4 shadow-lg w-full max-w-screen-xl mx-auto md:mt-4 md:rounded-full">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Logo + Brand */}
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PLACOM Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-primary">PLACOM</span>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden focus:outline-none cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/about-us" className="hover:text-teal-600 transition-colors">
                About Us
              </Link>
              <Link href="/marketplace" className="hover:text-teal-600 transition-colors">
                Marketplace
              </Link>
              <Link href="/sellers" className="hover:text-teal-600 transition-colors">
                Sellers
              </Link>
              <Link href="/warehouse" className="hover:text-teal-600 transition-colors">
                Warehouse
              </Link>
              <Link href="/corporate" className="hover:text-teal-600 transition-colors">
                Corporate
              </Link>
              <Link href="/contact-us" className="hover:text-teal-600 transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href={"/auth/login"} className='cursor-pointer'><Button variant="secondary" className="cursor-pointer w-full rounded-full text-sm">
                    Login
                  </Button>
                  </Link>
                    <Link href={"/auth/register"} className='cursor-pointer'><Button variant="default" className="cursor-pointer w-full rounded-full text-sm">
                    Register
                  </Button>
                  </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="md:hidden mt-4 space-y-4"
              >
                <div className="flex flex-col gap-4 text-primary">
                  <Link href="/about-us" className="hover:text-teal-600 transition-colors">
                About Us
              </Link>
              <Link href="/marketplace" className="hover:text-teal-600 transition-colors">
                Marketplace
              </Link>
              <Link href="/sellers" className="hover:text-teal-600 transition-colors">
                Sellers
              </Link>
              <Link href="/warehouse" className="hover:text-teal-600 transition-colors">
                Warehouse
              </Link>
              <Link href="/corporate" className="hover:text-teal-600 transition-colors">
                Corporate
              </Link>
              <Link href="/contact-us" className="hover:text-teal-600 transition-colors">
                Contact Us
              </Link>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <Link href={"/auth/login"} className='cursor-pointer'><Button variant="secondary" className="cursor-pointer w-full rounded-full text-sm">
                    Login
                  </Button>
                  </Link>
                    <Link href={"/auth/register"} className='cursor-pointer'><Button variant="default" className="cursor-pointer w-full rounded-full text-sm">
                    Register
                  </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <div className="min-h-[80vh] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px]">
          <div className="relative text-center my-12 mx-auto max-w-3xl">
            <div className="absolute -top-4/3 -left-3 md:-top-2/2 md:-left-1/2 bg-radial-[at_50%_40%] md:bg-radial-[at_50%_50%] from-[#FFFFFF] via-[rgba(255,255,255,.03)] to-[] to-90% -z-1 rounded-full w-screen h-screen md:p-40"></div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight mb-6"
            >
              Empowering Plateau's Farmers,
              <br />
              Connecting to Global Markets
            </motion.h1>
          </div>
          
          <div className="bg-white/80 rounded-3xl py-5 md:py-12 m-auto text-center shadow-2xl">
            <p className="text-base md:text-xl text-primary mb-5 mx-auto px-2 md:px-10">
              PLACOM is bridging the gap between local agricultural producers and high-value markets by reducing
              post-harvest losses, improving logistics, and transforming the way potatoes and onions are marketed from
              Plateau State.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-5 md:px-0">
              <Button 
                variant="default" 
                className="px-8 py-6 text-lg rounded-sm flex items-center gap-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width={26} 
                  height={26} 
                  viewBox="0 0 1200 1200"
                  aria-hidden="true"
                >
                  <path 
                    fill="currentColor" 
                    d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m3.955 209.912l94.556 295.239l309.889 6.958l-251.588 181.055l89.136 296.924l-249.976-183.325l-254.81 176.587l97.119-294.434l-246.68-187.793l310.034 1.392z" 
                  />
                </svg>
                Get Started with PLACOM
              </Button>
              <Button
                variant="secondary"
                className="px-8 py-6 text-lg rounded-sm"
              >
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First_Section;