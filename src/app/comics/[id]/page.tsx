"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ComicsProduct } from "@/domain/models";

export default function ComicProductPage() {
    const params = useParams();
    const { addItem } = useCart();

    const [product, setProduct] = useState<ComicsProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!params.id) return;

        fetch(`/api/products/${params.id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch comic product");
                return res.json();
            })
            .then((data: ComicsProduct) => {
                if (data.category !== "COMICS") {
                    throw new Error("Not a comic product");
                }
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [params.id]);

    if (loading) return <div className="text-center p-8">Loading...</div>;
    if (error || !product) return <div className="text-center p-8 text-red-500">Product Not Found</div>;

    return (
        <div className="container mx-auto p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div className="relative h-96 w-full">
                    <Image src={product.image} alt={product.title} fill className="object-contain rounded-lg shadow-lg" />
                </motion.div>

                <motion.div className="space-y-6">
                    <h1 className="text-4xl font-bold">{product.title}</h1>
                    <p className="text-2xl text-blue-500">${product.price.toFixed(2)}</p>
                    <p>{product.description}</p>
                    <ul className="list-disc pl-5">
                        {product.metadata?.issueNumber && <li><b>Issue Number:</b> {product.metadata.issueNumber}</li>}
                        {product.metadata?.publisher && <li><b>Publisher:</b> {product.metadata.publisher}</li>}
                    </ul>
                    <motion.button onClick={() => addItem(product)} className="px-8 py-3 bg-blue-500 text-white rounded-lg">
                        Add to Cart
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}