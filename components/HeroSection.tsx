import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-green-700 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Healthy food background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Science-Backed Weight Loss Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Trusted reviews of clinically proven supplements and diet plans
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/products" 
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition"
          >
            View Top Products
          </Link>
          <Link 
            href="/blog" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-lg font-bold text-lg transition"
          >
            Read Our Guides
          </Link>
        </div>
      </div>
    </section>
  )
}