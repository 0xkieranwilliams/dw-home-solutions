'use client'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-dark-900">
      <div className="text-center">
        <div className="loading-dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium">
          Loading amazing spaces...
        </p>
      </div>
    </div>
  )
} 