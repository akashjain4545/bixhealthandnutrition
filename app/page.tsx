import HeroSection from '../components/HeroSection'
import FeaturedPosts from '../components/FeaturedPosts'
import ProductShowcase from '../components/ProductShowcase'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedPosts 
        title="Latest Weight Loss Guides"
        cta="View All Articles"
        ctaLink="/blog"
      />
      <ProductShowcase 
        title="Top-Rated Supplements"
        cta="Compare All Products"
        ctaLink="/products"
      />
      <Newsletter />
    </>
  )
}