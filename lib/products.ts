import { Product } from './types'

export const products: Product[] = [
  {
    id: 'prod_mitolyn',
    name: 'Mitolyn',
    price: '$49.99',
    originalPrice: '$79.99',
    rating: 4.8,
    description: 'Berberine-based formula clinically shown to boost ketosis and fat metabolism',
    image: '/products/mitolyn.jpg',
    affiliateLink: 'https://your-affiliate-link/mitolyn',
    category: 'fat-burner',
    features: [
      'Increases ketosis by 40%',
      '60-day money back guarantee',
      'Vegan friendly formula',
      'No artificial fillers'
    ],
    ingredients: [
      {
        name: 'Berberine HCL',
        dosage: '500mg',
        benefit: 'Activates AMPK for fat burning'
      },
      {
        name: 'Resveratrol',
        dosage: '200mg',
        benefit: 'Supports cellular health'
      }
    ]
  },
  {
    id: 'prod_hepatoburn',
    name: 'Hepatoburn',
    price: '$59.99',
    rating: 4.6,
    description: 'Liver support supplement that enhances detox and fat processing',
    image: '/products/hepatoburn.jpg',
    affiliateLink: 'https://your-affiliate-link/hepatoburn',
    category: 'supplement',
    features: [
      'Supports liver detoxification',
      'Reduces bloating',
      'Improves energy levels',
      'Doctor formulated'
    ]
  },
  {
    id: 'prod_gluco6',
    name: 'Gluco6',
    price: '$39.99',
    originalPrice: '$59.99',
    rating: 4.5,
    description: 'Blood sugar support supplement with 6 clinically-proven ingredients',
    image: '/products/gluco6.jpg',
    affiliateLink: 'https://your-affiliate-link/gluco6',
    category: 'supplement',
    features: [
      'Stabilizes blood sugar spikes',
      'Reduces carb cravings',
      'Non-GMO ingredients',
      '90-day guarantee'
    ]
  }
]

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category)
}