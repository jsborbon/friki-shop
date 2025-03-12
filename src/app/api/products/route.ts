import { NextRequest, NextResponse } from "next/server";
import { Prisma, Category } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category")?.toUpperCase();
    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

    if (page <= 0 || pageSize <= 0) {
      return NextResponse.json(
        { error: "Page and pageSize must be positive integers" },
        { status: 400 }
      );
    }

    const filters: Prisma.ProductWhereInput = {};

    if (category && Object.values(Category).includes(category as Category)) {
      filters.category = category as Category;
    }

    const products = await prisma.product.findMany({
      where: filters,
      take: pageSize,
      skip: (page - 1) * pageSize,
      orderBy: { id: "desc" },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, price, image, category, description, metadata } = body;

    if (
      !title ||
      typeof title !== "string" ||
      !price ||
      typeof price !== "number" ||
      !image ||
      typeof image !== "string" ||
      !category ||
      typeof category !== "string" ||
      !description ||
      typeof description !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid or missing required fields" },
        { status: 400 }
      );
    }

    // Ensure the category is a valid enum value
    const normalizedCategory = category.toUpperCase() as Category;
    if (!Object.values(Category).includes(normalizedCategory)) {
      return NextResponse.json(
        { error: `Invalid category: ${category}` },
        { status: 400 }
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        title,
        price,
        image,
        category: normalizedCategory, // Now properly validated
        description,
        metadata: metadata || {}, // Default empty object
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
