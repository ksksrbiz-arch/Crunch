'use client';

import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from './CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md h-full bg-[#FDF6E3] shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-[#5C3317]/10">
          <h2 className="font-bold text-xl text-[#5C3317]">
            Your Cart {cartCount > 0 && <span className="text-sm font-medium text-[#3F2A1E]/70">({cartCount})</span>}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#5C3317]/5 text-[#5C3317]"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <p className="text-center text-[#3F2A1E]/60 mt-10">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-3 items-center bg-white rounded-xl p-3 border border-[#5C3317]/10">
                  <div className="flex-1">
                    <div className="font-semibold text-[#5C3317]">{item.name}</div>
                    <div className="text-xs text-[#3F2A1E]/60 capitalize">{item.category}</div>
                    <div className="text-sm font-medium text-[#3F2A1E] mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-full bg-[#5C3317]/10 text-[#5C3317] hover:bg-[#5C3317]/20"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full bg-[#5C3317]/10 text-[#5C3317] hover:bg-[#5C3317]/20"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus size={14} />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 rounded-full text-[#5C3317] hover:bg-[#5C3317]/10"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t border-[#5C3317]/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#3F2A1E]/70">Subtotal</span>
              <span className="font-bold text-lg text-[#5C3317]">${cartTotal.toFixed(2)}</span>
            </div>
            <button
              className="w-full py-3 rounded-full bg-[#5C3317] text-white font-medium hover:bg-[#3F2A1E] transition-colors"
              type="button"
            >
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full py-2 text-sm text-[#5C3317]/70 hover:text-[#5C3317]"
              type="button"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
