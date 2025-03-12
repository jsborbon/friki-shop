"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CosplayProduct } from "@/domain/models";
import { useRouter } from "next/navigation";

export default function CosplayPage() {
  const [cosplayList, setCosplayList] = useState<CosplayProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 10; 
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/products?category=COSPLAY&page=${page}&pageSize=${pageSize}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cosplay data");
        return res.json();
      })
      .then((data: CosplayProduct[]) => {
        setCosplayList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cosplay products:", err);
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
      <h1 className="text-4xl font-bold mb-8">Cosplay Zone</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cosplayList.map((cosplay) => (
          <div key={cosplay.id} onClick={() => router.push(`/cosplay/${cosplay.id}`)} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg cursor-pointer overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={cosplay.image} alt={cosplay.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{cosplay.title}</h2>
              <h3 className="text-lg font-semibold mb-2 text-gray-500">{cosplay.price}</h3>
              <p className="text-gray-600 dark:text-gray-300">{cosplay.description}</p>
              {cosplay.metadata && (
                <ul className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                  {cosplay.metadata.size && <li><strong>Size:</strong> {cosplay.metadata.size}</li>}
                  {cosplay.metadata.character && <li><strong>Character:</strong> {cosplay.metadata.character}</li>}
                  {cosplay.metadata.franchise && <li><strong>Franchise:</strong> {cosplay.metadata.franchise}</li>}
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