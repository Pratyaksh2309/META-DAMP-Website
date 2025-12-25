const SkeletonCard = () => {
  return (
    <div className="glass-card-blue rounded-3xl shadow-xl p-6 sm:p-10 animate-pulse">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="h-6 bg-neutral-300/50 rounded-lg w-3/4 mb-3"></div>
          <div className="h-4 bg-neutral-300/30 rounded-lg w-1/2"></div>
        </div>
        <div className="w-16 h-8 bg-neutral-300/50 rounded-2xl"></div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="h-4 bg-neutral-300/30 rounded-lg w-full"></div>
        <div className="h-4 bg-neutral-300/30 rounded-lg w-5/6"></div>
        <div className="h-4 bg-neutral-300/30 rounded-lg w-4/6"></div>
      </div>
      
      <div className="h-12 bg-neutral-300/50 rounded-2xl w-full"></div>
    </div>
  )
}

const SkeletonLoader = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  )
}

export default SkeletonLoader
