// Blog post type
export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  date: string
  author: string
  products: Product[]
  relatedPosts: {
    title: string
    slug: string
  }[]
}

// Product type
export type Product = {
  id: string
  name: string
  price: string
  originalPrice?: string
  rating: number
  description: string
  image: string
  affiliateLink: string
  features: string[]
  category: 'fat-burner' | 'keto' | 'supplement' | 'meal-plan'
  ingredients?: {
    name: string
    dosage: string
    benefit: string
  }[]
}

// API response type
export type ApiResponse<T> = {
  data: T
  error: string | null
}