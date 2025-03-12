"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CollectiblesProduct } from "@/domain/models";
import { useRouter } from "next/navigation";

export default function CollectiblesPage() {
  const [collectiblesList, setCollectiblesList] = useState<CollectiblesProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 10; 
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/products?category=COLLECTIBLES&page=${page}&pageSize=${pageSize}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch collectibles data");
        return res.json();
      })
      .then((data: CollectiblesProduct[]) => {
        setCollectiblesList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching collectibles products:", err);
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
      <h1 className="text-4xl font-bold mb-8">Collectibles Zone</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collectiblesList.map((collectible) => {
          const [imgSrc, setImgSrc] = useState(collectible.image ?? '/images/not-found.jpg');
          return (
            <div key={collectible.id} onClick={() => router.push(`/collectibles/${collectible.id}`)} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg cursor-pointer overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src={imgSrc} 
                  onError={() => setImgSrc('/images/not-found.jpg')}
                  alt={collectible.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{collectible.title}</h2>
                <h3 className="text-lg font-semibold mb-2 text-gray-500">{collectible.price}</h3>
                <p className="text-gray-600 dark:text-gray-300">{collectible.description}</p>
                {collectible.metadata && (
                  <ul className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                    {collectible.metadata.rarity && <li><strong>Rarity:</strong> {collectible.metadata.rarity}</li>}
                    {collectible.metadata.condition && <li><strong>Condition:</strong> {collectible.metadata.condition}</li>}
                    {collectible.metadata.releaseYear && <li><strong>Release Year:</strong> {collectible.metadata.releaseYear}</li>}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
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