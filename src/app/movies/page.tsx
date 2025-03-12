"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MoviesProduct } from "@/domain/models";

export default function MoviesPage() {
  const [moviesList, setMoviesList] = useState<MoviesProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 10; 

  useEffect(() => {
    fetch(`/api/products?category=MOVIES&page=${page}&pageSize=${pageSize}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch movies data");
        return res.json();
      })
      .then((data: MoviesProduct[]) => {
        setMoviesList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies products:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  if (loading) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Error</h1>
        <p className="text-gray-600 dark:text-gray-300">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Movies Zone</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moviesList.map((movie) => (
          <div key={movie.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={movie.image} alt={movie.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{movie.description}</p>
              {movie.metadata && (
                <ul className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                  {movie.metadata.duration && <li><strong>Duration:</strong> {movie.metadata.duration} min</li>}
                  {movie.metadata.director && <li><strong>Director:</strong> {movie.metadata.director}</li>}
                  {movie.metadata.releaseYear && <li><strong>Release Year:</strong> {movie.metadata.releaseYear}</li>}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          className={`px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-md ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400 dark:hover:bg-gray-600"
            }`}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}