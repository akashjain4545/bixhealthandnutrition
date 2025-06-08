import { products } from '@/lib/products'
import ProductComparisonTable from '@/components/ProductComparisonTable'

export default function ProductsPage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">Supplement Comparisons</h1>
      <ProductComparisonTable products={products} />
      
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">How We Rate Products</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Clinical research backing</li>
          <li>Customer reviews (verified purchases only)</li>
          <li>Ingredient quality</li>
          <li>Price vs. value</li>
        </ul>
      </div>
    </div>
  )
}