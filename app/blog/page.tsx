import { getPosts } from '@/lib/api'
import BlogPostCard from '@/components/BlogPostCard'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Weight Loss Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogPostCard 
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            slug={post.slug}
            image={post.featuredImage}
          />
        ))}
      </div>
    </>
  )
}