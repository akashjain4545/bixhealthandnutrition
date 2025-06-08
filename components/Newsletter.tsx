'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your newsletter service integration here
    console.log('Subscribed:', email)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get Weekly Weight Loss Tips</h2>
        
        {subscribed ? (
          <div className="bg-white text-green-700 inline-block px-6 py-4 rounded-lg">
            <p className="font-bold">Thank you for subscribing!</p>
            <p>Check your email for confirmation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l focus:outline-none text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-green-800 hover:bg-green-900 px-6 py-3 rounded-r font-medium"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-sm text-green-200">
              We'll never share your email. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}