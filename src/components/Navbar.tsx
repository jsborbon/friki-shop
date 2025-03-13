'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useCart } from '@/context/CartContext'
import { useWishlist } from '@/context/WishlistContext'
import { FaShoppingCart, FaHeart, FaSearch, FaUser } from 'react-icons/fa'
import Image from 'next/image'
import { Section } from "@/domain/models"
import { useUser, SignOutButton } from '@clerk/nextjs' // Import Clerk's SignOutButton

export default function Navbar() {
  const [sections, setSections] = useState<Section[]>([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  const { items } = useCart()
  const { items: wishlistItems } = useWishlist()
  const { user, isLoaded } = useUser()

  const [imgSrc, setImgSrc] = useState(user?.imageUrl ?? '/images/avatar.png')

  const searchInputRef = useRef<HTMLInputElement | null>(null)
  const profileMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await fetch('/api/sections')
        if (!res.ok) throw new Error('Failed to fetch sections')
        const data = await res.json()
        setSections(data)
      } catch (err) {
        console.error('Error fetching sections:', err)
      }
    }
    fetchSections()
  }, [])

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold hover:text-gray-300 transition duration-200">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map(section => (
              <Link
                key={section.id}
                href={section.link}
                className="hover:text-blue-400 transition duration-200 relative group"
              >
                {section.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gray-700 transition duration-200"
            >
              <FaSearch className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link href="/cart" className="p-2 rounded-full hover:bg-gray-700 transition duration-200 relative">
              <FaShoppingCart className="w-5 h-5" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {items.length}
                </span>
              )}
            </Link>

            {/* Wishlist */}
            {isLoaded && user && (
              <Link href="/wishlist" className="p-2 rounded-full hover:bg-gray-700 transition duration-200 relative">
                <FaHeart className="w-5 h-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
            )}

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsProfileMenuOpen(prev => !prev)
                }}
                className="p-2 rounded-full hover:bg-gray-700 transition duration-200 flex items-center"
              >
                {isLoaded && user ? (
                  <Image
                    src={imgSrc}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                    onError={() => setImgSrc('/images/avatar.png')}
                  />
                ) : (
                  <FaUser className="w-5 h-5" />
                )}
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileMenuOpen && (
                <div
                  ref={profileMenuRef}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 text-gray-800"
                  onClick={(e) => e.stopPropagation()}
                >
                  {isLoaded && user ? (
                    <>
                      <Link href="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-100">
                        Dashboard
                      </Link>
                      <SignOutButton>
                        <button className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 text-red-500">
                          Sign Out
                        </button>
                      </SignOutButton>
                    </>
                  ) : (
                    <>
                      <Link href="/sign-in" className="block px-4 py-2 text-sm hover:bg-gray-100">
                        Sign In
                      </Link>
                      <Link href="/sign-up" className="block px-4 py-2 text-sm hover:bg-gray-100">
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="py-2 px-4 bg-gray-700 border-b border-gray-600">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md">
              <FaSearch />
            </button>
          </form>
        </div>
      )}
    </nav>
  )
}