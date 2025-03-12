'use client'

import { useCart } from '@/context/CartContext'
import Image from 'next/image'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-600 dark:text-gray-300">Add some items to your cart to see them here.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid gap-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="relative h-24 w-24 flex-shrink-0">
              <Image
                src={item.image || "/images/not-found.jpg"}
                alt={item.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
              >
                +
              </button>
            </div>
            <div className="text-right min-w-[100px]">
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
        <button
          onClick={() => alert('Checkout functionality coming soon!')}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}