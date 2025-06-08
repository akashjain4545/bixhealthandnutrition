import { Product } from './types'

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

export function getDiscountPercentage(product: Product): number | null {
  if (!product.originalPrice) return null
  const current = parseFloat(product.price.replace('$', ''))
  const original = parseFloat(product.originalPrice.replace('$', ''))
  return Math.round(((original - current) / original) * 100)
}