'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useCart } from '@/context/CartContext'
import { useWishlist } from '@/context/WishlistContext'
import { FaShoppingCart, FaHeart, FaSearch, FaUserCircle } from 'react-icons/fa'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  SignOutButton
} from '@clerk/nextjs'
import Image from 'next/image'
import { Section } from "@/domain/models";

export default function Navbar() {
  const [sections, setSections] = useState<Section[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)


  const { items } = useCart()
  const { items: wishlistItems } = useWishlist()

  const mobileMenuRef = useRef(null)
  const searchInputRef = useRef(null)
  const userMenuRef = useRef(null)

  // Fetch sections from API
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

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !(mobileMenuRef.current as Node).contains(event.target as Node)) {
        setIsOpen(false)
      }
      if (userMenuRef.current && !(userMenuRef.current as Node).contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      (searchInputRef.current as HTMLInputElement).focus()
    }
  }, [isSearchOpen])

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
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 rounded-full hover:bg-gray-700 transition duration-200">
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
            <Link href="/wishlist" className="p-2 rounded-full hover:bg-gray-700 transition duration-200 relative">
              <FaHeart className="w-5 h-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Authentication & Profile */}
            <SignedOut>
              <div className="flex items-center space-x-3">
                <SignInButton>
                  <button className="px-3 py-1.5 bg-transparent border border-blue-500 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition duration-200">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="relative" ref={userMenuRef}>
                <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="p-2 rounded-full hover:bg-gray-700 transition duration-200">
                  <FaUserCircle className="w-6 h-6" />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-md overflow-hidden">
                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-700">
                      Profile
                    </Link>
                    <div className="border-t border-gray-700"></div>
                    <SignOutButton>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-700">
                        Sign Out
                      </button>
                    </SignOutButton>
                  </div>
                )}
              </div>
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              ☰
            </button>
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