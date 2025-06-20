export default function Loading() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-10 bg-gray-200 rounded w-3/4"></div>
      <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      <div className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  )
}