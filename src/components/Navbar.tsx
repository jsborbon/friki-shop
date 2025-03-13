'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useCart } from '@/context/CartContext'
import { useWishlist } from '@/context/WishlistContext'
import { FaShoppingCart, FaHeart, FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { Section } from "@/domain/models"
import { useUser, SignOutButton } from '@clerk/nextjs'

export default function Navbar() {
  const [sections, setSections] = useState<Section[]>([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
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
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:text-gray-300 transition duration-200">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {sections.map(section => (
            <Link key={section.id} href={section.link} className="hover:text-blue-400 transition duration-200">
              {section.title}
            </Link>
          ))}

          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:bg-gray-700 rounded-full">
            <FaSearch className="w-5 h-5" />
          </button>

          <Link href="/cart" className="p-2 hover:bg-gray-700 rounded-full relative">
            <FaShoppingCart className="w-5 h-5" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {items.length}
              </span>
            )}
          </Link>

          {isLoaded && user && (
            <Link href="/wishlist" className="p-2 hover:bg-gray-700 rounded-full relative">
              <FaHeart className="w-5 h-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-50 flex flex-col items-center space-y-6 pt-20">
          {sections.map(section => (
            <Link key={section.id} href={section.link} className="text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>
              {section.title}
            </Link>
          ))}

          {isLoaded && user ? (
            <>
              <Link href="/dashboard" className="text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Dashboard
              </Link>
              <SignOutButton>
                <button className="text-red-500 text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign Out
                </button>
              </SignOutButton>
            </>
          ) : (
            <>
                <Link href="/sign-in" className="text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign In
                </Link>
              <Link href="/sign-up" className="text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}