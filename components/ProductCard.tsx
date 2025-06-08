import Image from 'next/image'

type Product = {
  id: string
  name: string
  price: string
  rating: number
  description: string
  image: string
  affiliateLink: string
  features?: string[]
}

export default function ProductCard(product: Product) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition h-full flex flex-col">
      <div className="relative h-48 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
            {product.rating} ★
          </span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        {product.features && (
          <ul className="mb-4 space-y-1">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="p-6 border-t">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{product.price}</span>
          <a
            href={product.affiliateLink}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  )
}