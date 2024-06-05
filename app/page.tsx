import { About, Contact, Hero, Projects } from "@/components";

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

      <section>
        <Contact />
      </section>

    </main>
  );
}
