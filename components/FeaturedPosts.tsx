import Link from 'next/link'
import Image from 'next/image'

type FeaturedPostsProps = {
  title: string
  cta: string
  ctaLink: string
}

export default function FeaturedPosts({ title, cta, ctaLink }: FeaturedPostsProps) {
  // Mock data - replace with real data fetching
  const posts = [
    {
      title: "7-Day Keto Meal Plan for Rapid Weight Loss",
      excerpt: "Lose up to 10lbs in your first week with this science-backed plan",
      slug: "keto-meal-plan",
      image: "/images/keto-meal.jpg",
      date: "May 15, 2024"
    },
    {
      title: "Top 5 Fat Burners That Actually Work (2024 Review)",
      excerpt: "Clinically proven supplements ranked by effectiveness",
      slug: "best-fat-burners",
      image: "/images/fat-burners.jpg",
      date: "May 10, 2024"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <Link href={ctaLink} className="text-green-600 hover:text-green-700 font-medium">
            {cta} →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <Link 
              key={index} 
              href={`/blog/${post.slug}`}
              className="group border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <h3 className="text-xl font-bold mt-1 mb-2 group-hover:text-green-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}