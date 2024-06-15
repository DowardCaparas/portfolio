import React, { Suspense } from "react";
import { Hero, Loading } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
    </main>
  );
}
