import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/api'
import ProductCard from '@/components/ProductCard'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) return notFound()

  return (
    <article>
      <header className="mb-12">
        <span className="text-green-600 font-medium">
          {post.date} • {post.author}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600">{post.excerpt}</p>
      </header>

      <div className="prose prose-lg max-w-none mb-12">
        {post.content}
      </div>

      {post.products.length > 0 && (
        <section className="mt-16 border-t pt-12">
          <h2 className="text-2xl font-bold mb-8">Recommended Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {post.products.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            *Disclosure: We earn commissions from purchases made through these links
          </p>
        </section>
      )}
    </article>
  )
}