import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const productId = Number(id);

  if (!id || isNaN(productId)) {
    return NextResponse.json({ error: "Invalid Product ID" }, { status: 400 });
  }

  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const productId = Number(id);

  if (!id || isNaN(productId)) {
    return NextResponse.json({ error: "Invalid Product ID" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const { title, price, image, category, description, metadata } = body;

    if (!title || !price || !category || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        title,
        price,
        image,
        category,
        description,
        metadata: metadata || {},
      },
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const productId = Number(id);

  if (!id || isNaN(productId)) {
    return NextResponse.json({ error: "Invalid Product ID" }, { status: 400 });
  }

  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    await prisma.product.delete({ where: { id: productId } });

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
