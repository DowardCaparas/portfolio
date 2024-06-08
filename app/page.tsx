import { About, Contact, Hero, Projects, Services } from "@/components";

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
        <Services />
      </section>

      <section>
        <Contact />
      </section>

    </main>
  );
}
