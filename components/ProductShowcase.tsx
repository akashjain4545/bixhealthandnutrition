import { products } from '@/lib/products'
import ProductCard from './ProductCard'

type ProductShowcaseProps = {
  title: string
  cta?: string
  ctaLink?: string
}

export default function ProductShowcase({ 
  title, 
  cta = "View All", 
  ctaLink = "/products" 
}: ProductShowcaseProps) {
  const featuredProducts = products.slice(0, 3) // Show first 3 products

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          {cta && (
            <a 
              href={ctaLink} 
              className="text-green-600 hover:text-green-700 font-medium"
            >
              {cta} →
            </a>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}