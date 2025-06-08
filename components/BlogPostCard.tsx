import Link from 'next/link'
import Image from 'next/image'

type BlogPostCardProps = {
  title: string
  excerpt: string
  date: string
  slug: string
  image: string
}

export default function BlogPostCard({
  title,
  excerpt,
  date,
  slug,
  image
}: BlogPostCardProps) {
  return (
    <Link 
      href={`/blog/${slug}`}
      className="group border rounded-lg overflow-hidden hover:shadow-lg transition h-full flex flex-col"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-grow">
        <span className="text-gray-500 text-sm">{date}</span>
        <h3 className="text-xl font-bold mt-1 mb-2 group-hover:text-green-600 transition">
          {title}
        </h3>
        <p className="text-gray-600">{excerpt}</p>
      </div>
      <div className="p-6 border-t">
        <span className="text-green-600 font-medium group-hover:text-green-700 transition">
          Read more →
        </span>
      </div>
    </Link>
  )
}