import { BlogPost, Product, ApiResponse } from './types'
import { products } from './products'

// Mock blog posts - replace with real CMS/database calls
const mockPosts: BlogPost[] = [
  {
    id: 'post_1',
    slug: 'keto-meal-plan',
    title: '7-Day Keto Meal Plan for Rapid Weight Loss',
    excerpt: 'Lose up to 10lbs in your first week with this science-backed plan',
    content: `
      <h2>Why This Meal Plan Works</h2>
      <p>Clinical studies show keto diets can accelerate fat burning by up to 3x compared to standard low-fat diets...</p>
      <h3>Day 1 Sample Menu</h3>
      <ul>
        <li>Breakfast: Avocado & eggs</li>
        <li>Lunch: Grilled salmon salad</li>
        <li>Dinner: Garlic butter steak</li>
      </ul>
    `,
    featuredImage: '/images/keto-meal.jpg',
    date: '2024-05-15',
    author: 'Dr. Sarah Johnson',
    products: [products[0], products[1]], // Mitolyn and Hepatoburn
    relatedPosts: [
      { title: 'Keto vs Paleo: Which Is Better?', slug: 'keto-vs-paleo' },
      { title: 'Top 5 Keto Mistakes', slug: 'keto-mistakes' }
    ]
  },
  {
    id: 'post_2',
    slug: 'best-fat-burners',
    title: 'Top 5 Fat Burners That Actually Work (2024 Review)',
    excerpt: 'Clinically proven supplements ranked by effectiveness',
    content: `
      <h2>Our Testing Methodology</h2>
      <p>We evaluated 23 products based on clinical research, ingredient quality, and customer results...</p>
      <h3>#1: Mitolyn</h3>
      <p>Our top pick due to its berberine content shown to increase fat burning by 32% in clinical trials...</p>
    `,
    featuredImage: '/images/fat-burners.jpg',
    date: '2024-05-10',
    author: 'Dr. Michael Chen',
    products: [products[0], products[2]], // Mitolyn and Gluco6
    relatedPosts: [
      { title: 'Natural Fat Burners', slug: 'natural-fat-burners' },
      { title: 'Exercise vs Supplements', slug: 'exercise-vs-supplements' }
    ]
  }
]

// API functions
export async function getPosts(): Promise<BlogPost[]> {
  // In a real app, you would fetch from CMS/API
  return mockPosts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = mockPosts.find(post => post.slug === slug)
  return post || null
}

export async function getFeaturedPosts(count = 2): Promise<BlogPost[]> {
  return mockPosts.slice(0, count)
}

export async function getRelatedPosts(slug: string): Promise<BlogPost[]> {
  const post = mockPosts.find(post => post.slug === slug)
  if (!post) return []
  
  return mockPosts.filter(p => 
    p.slug !== slug && 
    post.relatedPosts.some(rp => rp.slug === p.slug)
  )
}