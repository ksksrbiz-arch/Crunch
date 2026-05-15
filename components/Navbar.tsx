'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from './CartContext';
import CartModal from './CartModal';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/shop', label: 'Shop Online' },
    { href: '/about', label: 'Our Story' },
    { href: '/locations', label: 'Visit Us' },
  ];

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md border-b border-[#5C3317]/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" fill="#D4A017" stroke="#5C3317" strokeWidth="3"/>
                  <circle cx="16" cy="18" r="3" fill="#5C3317"/>
                  <circle cx="30" cy="16" r="2.5" fill="#5C3317"/>
                  <circle cx="20" cy="32" r="2.5" fill="#5C3317"/>
                  <circle cx="33" cy="28" r="3" fill="#5C3317"/>
                  <circle cx="13" cy="30" r="2" fill="#5C3317"/>
                  <path d="M38 22 Q42 28 38 34" stroke="#5C3317" strokeWidth="2.5" fill="none"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-2xl tracking-tighter text-[#5C3317]">CRUMBLE CRUNCH</div>
                <div className="text-[10px] text-[#D4A017] font-medium -mt-1 tracking-[3px]">COOKIES</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-9 text-sm font-medium">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link text-[#3F2A1E] hover:text-[#5C3317] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => setIsCartOpen(true)} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5C3317] text-white hover:bg-[#3F2A1E] transition-all active:scale-[0.985]">
                <ShoppingCart size={18} />
                <span className="font-medium text-sm hidden sm:inline">Cart</span>
                {cartCount > 0 && <div className="bg-[#D4A017] text-[#5C3317] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">{cartCount}</div>}
              </button>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-[#5C3317]">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;