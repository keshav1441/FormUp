"use client";

import React, { useEffect } from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button";

function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <h2 className="text-destructive text-4xl">Something went wrong!</h2>
      <Button asChild className="mt-4">
        <Link href="/" className="text-blue-500 hover:underline ">
          Go back to home
        </Link>
      </Button>
    </div>
  );
}

export default ErrorPage;
