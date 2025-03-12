import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId')

  if (!userId) return NextResponse.json({ error: 'User ID required' }, { status: 400 })

  try {
    const cart = await prisma.cart.findMany({
      where: { userId },
      include: { product: true }
    })

    return NextResponse.json(cart)
  } catch (error) {
    console.error('Error fetching cart:', error)
    return NextResponse.json(
      { error: 'Failed to fetch cart' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const { userId, productId, quantity } = await req.json()

    if (!userId || !productId) {
      return NextResponse.json(
        { error: 'User ID and Product ID are required' },
        { status: 400 }
      )
    }

    const cartItem = await prisma.cart.upsert({
      where: { userId_productId: { userId, productId } }, // Use composite key
      update: { quantity: { increment: quantity } },
      create: { userId, productId, quantity }
    })

    return NextResponse.json(cartItem)
  } catch (error) {
    console.error('Error managing cart item:', error)
    return NextResponse.json(
      { error: 'Failed to manage cart item' },
      { status: 500 }
    )
  }
}