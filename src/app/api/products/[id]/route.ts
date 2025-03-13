import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split("/").pop();
    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const productId = Number(id);

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split("/").pop();
    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const productId = Number(id);
    const body = await req.json();
    const { title, price, image, category, description, metadata } = body;

    if (!title && !price && !image && !category && !description && !metadata) {
      return NextResponse.json(
        { error: "No fields to update" },
        { status: 400 }
      );
    }

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        title,
        price,
        image,
        category: category?.toUpperCase(), 
        description,
        metadata,
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split("/").pop();
    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const productId = Number(id);
    await prisma.product.delete({ where: { id: productId } });

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}