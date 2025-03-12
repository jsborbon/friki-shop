'use client'

import { useWishlist } from '@/context/WishlistContext'
import Image from 'next/image'
import Link from 'next/link'

export default function WishlistPage() {
  const { items, removeItem } = useWishlist()

  if (items.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your wishlist is empty</h1>
        <p className="text-gray-600 dark:text-gray-300">Add some items to your wishlist to see them here.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Wishlist</h1>
      <div className="grid gap-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <Link href={`/${item.category}/${item.id}`} className="relative h-24 w-24 flex-shrink-0">
              <Image
                src={item.image || "/images/not-found.jpg"}
                alt={item.title}
                fill
                className="object-cover rounded"
              />
            </Link>
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">${item.price.toFixed(2)}</p>
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
    </div>
  )
}