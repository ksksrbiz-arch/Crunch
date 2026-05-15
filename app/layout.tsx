import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/components/CartContext';

export const metadata: Metadata = {
  title: 'Crumble Crunch Cookies | Fresh Cookies & Milkshakes in Tacoma, WA',
  description: 'Handcrafted cookies and premium milkshakes made with love in Tacoma, Washington. Visit our cozy bakery or order online for pickup and delivery. Freshly baked daily!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FDF6E3] text-[#3F2A1E]">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}