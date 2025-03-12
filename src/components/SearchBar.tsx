'use client'

import { useState } from 'react'
interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mb-8">
      <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full px-4 py-2 focus:outline-none dark:bg-gray-700"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  )
}