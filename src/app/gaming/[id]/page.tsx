"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useWishlist } from '@/context/WishlistContext'
import { motion } from "framer-motion";
import { GamingProduct } from "@/domain/models";
import { FaSpinner, FaHeart, FaRegHeart, FaCartPlus } from 'react-icons/fa'

export default function GamingProductPage() {
    const params = useParams();
    const { addItem } = useCart();
    const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()

    const [product, setProduct] = useState<GamingProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [imgSrc, setImgSrc] = useState<string>('/images/not-found.jpg');

    useEffect(() => {
        if (product?.image) {
            setImgSrc(product.image);
        }
    }, [product?.image]);

    useEffect(() => {
        if (!params.id) return;

        fetch(`/api/products/${params.id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch gaming product");
                return res.json();
            })
            .then((data: GamingProduct) => {
                if (data.category !== "GAMING") {
                    throw new Error("Not a gaming product");
                }
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [params.id]);

    if (loading) {
        return (<div className="flex items-center justify-center p-8 h-64">
            <FaSpinner className="animate-spin text-3xl text-blue-500" />
        </div>)
    }
    if (error || !product) return <div className="text-center p-8 text-red-500">Product Not Found</div>;

    return (
        <div className="container mx-auto p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div className="relative h-96 w-full">
                    <Image src={imgSrc} onError={() => setImgSrc('/images/not-found.jpg')} alt={product.title} fill className="object-contain rounded-lg shadow-lg" />
                </motion.div>

                <motion.div className="space-y-6">
                    <h1 className="text-4xl font-bold">{product.title}</h1>
                    <p className="text-2xl text-blue-500">${product.price.toFixed(2)}</p>
                    <p>{product.description}</p>
                    <ul className="list-disc pl-5">
                        {product.metadata?.platform && <li><b>Platform:</b> {product.metadata.platform}</li>}
                        {product.metadata?.edition && <li><b>Edition:</b> {product.metadata.edition}</li>}
                    </ul>
                    <motion.button onClick={() => addItem(product)} className="px-8 py-3 bg-blue-500 text-white rounded-lg">
                        Add to Cart
                    </motion.button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            if (isInWishlist(product.id)) {
                                removeFromWishlist(product.id);
                            } else {
                                addToWishlist({ id: product.id, title: product.title, price: product.price, image: product.image, description: product.description, category: product.category });
                            }
                        }}
                        className="p-2 text-red-500 hover:text-red-600 transition-colors"
                    >
                        {isInWishlist(product.id) ? <FaHeart className="w-5 h-5" /> : <FaRegHeart className="w-5 h-5" />}
                    </button>
                </motion.div>
            </div>
        </div>
    );
}