"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // for hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="w-full  bg-[#000116] text-white">
      <div className="flex justify-between md:px-16 items-center px-6  py-4">
        {/* Logo */}
        <div>
          <Image src="/images/logopng.png" alt="Logo"  width={100} height={100} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/servic">Services</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li>
            <Link href="/hireme" className=" px-4 py-2 rounded bg-black text-white  hover:bg-purple-600 ">
              Hire Me
            </Link>
          </li>
          <li>
            <Image src="/images/out.png" alt="Out" width={30} height={30} />
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6">
          <ul className="flex flex-col gap-4 text-sm">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="/servic" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li>
              <Link href="/hireme" onClick={() => setIsOpen(false)} className="hover:bg-purple-600 px-4 py-2 rounded text-white  hover:text-white">
                Hire Me
              </Link>
            </li>
            <li>
              <Image src="/images/out.png" alt="Out" width={30} height={30} />
            </li>
          </ul>
        </div>
      )}
    </main>
  );
};

export default Navbar;
