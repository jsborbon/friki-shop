/**
 * Cart-related type definitions
 */

import { Product } from "./product";

// Cart item with quantity
export interface CartItem extends Product {
  quantity: number;
}

// Type for adding an item to cart (without quantity)
export type CartItemInput = Omit<CartItem, "quantity">;
