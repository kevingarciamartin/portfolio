"use client";

import ErrorLayout from "@/components/ErrorLayout/ErrorLayout";
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
    <ErrorLayout
      title="Error"
      message="An unexpected error occurred. Please try again later."
      reset={reset}
    />
  );
}
