"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full px-6 py-20 flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-2xl md:text-3xl lg:text-5xl text-center font-bold tracking-wider text-gray-300 mt-4">
          {error.name}
        </p>
        <p className="text-gray-500 mt-2 pb-4 border-b-2 text-center">
          Sorry about that! Please try again or visit our hompage to get where
          you need to go.
        </p>
        <div className="flex gap-6 mt-4">
          <Link href="/" className="btn btn-primary" title="Return Home">
            <span>Return Home</span>
          </Link>
          <button
            className="btn btn-secondary border"
            title="Return Home"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
