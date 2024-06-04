import { About, Hero, Projects } from "@/components";

export default function Home() {
  return (
    <main className='overflow-hidden'>

      <section>
        <Hero />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Projects />
      </section>

    </main>
  );
}
