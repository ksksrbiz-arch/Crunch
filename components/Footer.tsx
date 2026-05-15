import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#5C3317] text-[#FDF6E3] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-bold text-2xl tracking-tighter">CRUMBLE CRUNCH</div>
          <div className="text-[10px] text-[#D4A017] font-medium tracking-[3px] mb-3">COOKIES</div>
          <p className="text-sm text-[#FDF6E3]/80">
            Handcrafted cookies and premium milkshakes, freshly baked daily in Tacoma, WA.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-sm tracking-widest text-[#D4A017] mb-3">EXPLORE</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#D4A017] transition-colors">Home</Link></li>
            <li><Link href="/menu" className="hover:text-[#D4A017] transition-colors">Menu</Link></li>
            <li><Link href="/shop" className="hover:text-[#D4A017] transition-colors">Shop Online</Link></li>
            <li><Link href="/about" className="hover:text-[#D4A017] transition-colors">Our Story</Link></li>
            <li><Link href="/locations" className="hover:text-[#D4A017] transition-colors">Visit Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm tracking-widest text-[#D4A017] mb-3">VISIT US</h3>
          <p className="text-sm text-[#FDF6E3]/80">
            Tacoma, Washington<br />
            Open daily · Freshly baked
          </p>
        </div>
      </div>

      <div className="border-t border-[#FDF6E3]/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-[#FDF6E3]/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {year} Crumble Crunch Cookies. All rights reserved.</div>
          <div>Made with love in Tacoma, WA</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
