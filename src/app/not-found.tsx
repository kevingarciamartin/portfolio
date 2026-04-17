"use client";

import ErrorLayout from "@/components/ErrorLayout/ErrorLayout";

export default function NotFound() {
  return (
    <ErrorLayout
      title="404"
      message="The page you are looking for does not exist or has been moved."
    />
  );
}
