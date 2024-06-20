import React, { Suspense } from "react";
import { Hero, Loading } from "@/components";

 const Home = () => {
  return (
    <main className="overflow-hidden">
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
    </main>
  );
}

export default Home
