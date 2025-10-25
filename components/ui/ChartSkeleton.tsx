export default function ChartSkeleton({ height = 300 }: { height?: number }) {
  return (
    <div 
      className="card rounded-xl p-3 sm:p-6 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border-0 shadow-lg animate-pulse"
    >
      {/* Header skeleton */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="h-6 w-48 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        <div className="h-6 w-20 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
      </div>
      
      {/* Chart area skeleton */}
      <div 
        className="relative bg-neutral-100 dark:bg-neutral-750 rounded-lg overflow-hidden"
        style={{ height: `${height}px` }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-neutral-600/10 to-transparent animate-shimmer"></div>
        
        {/* Fake chart bars */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around gap-2 p-6">
          <div className="w-full h-24 bg-neutral-200 dark:bg-neutral-700 rounded-t"></div>
          <div className="w-full h-32 bg-neutral-200 dark:bg-neutral-700 rounded-t"></div>
          <div className="w-full h-20 bg-neutral-200 dark:bg-neutral-700 rounded-t"></div>
          <div className="w-full h-40 bg-neutral-200 dark:bg-neutral-700 rounded-t"></div>
          <div className="w-full h-28 bg-neutral-200 dark:bg-neutral-700 rounded-t"></div>
        </div>
      </div>
      
      {/* Footer skeleton */}
      <div className="mt-4 flex gap-2">
        <div className="h-4 w-16 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        <div className="h-4 w-20 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
      </div>
    </div>
  );
}

