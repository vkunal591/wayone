"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("An error occur error");
  }, [error]);

  return (
    <div className="flex flex-col pt-8 md:pt-20 lg:pt-24 items-center justify-center min-h-screen p-4 bg-gray-100 text-center">
      <h2 className="text-lg font-medium text-primary">
        Oops! Something went wrong.
      </h2>
      <p className="mt-2 text-sm text-primary">
        We encounteprimaryunexpected error. Please try again later.
      </p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
      >
        Try Again
      </button>
    </div>
  );
}
