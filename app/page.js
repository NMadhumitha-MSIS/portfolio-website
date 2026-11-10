import Image from "next/image";
import Reveal from "./Reveal";
import { profile, strengths, featured, projects, experience, education } from "./data";

const nav = [
  { id: "approach", label: "Approach" },
  { id: "featured", label: "Featured" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function SectionHeading({ eyebrow, title, id, light = false }) {
  return (
    <div>
      <p className={`text-sm font-semibold uppercase tracking-widest ${light ? "text-blue-200" : "text-blue-800"}`}>{eyebrow}</p>
      <h2 id={id} className={`mt-2 text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-slate-900"}`}>{title}</h2>
    </div>
  );
}

function Tags({ items }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
      {items.map((item) => (
        <li key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-800">{item}</li>
      ))}
    </ul>
  );
}

function Bullets({ items }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function ContactLinks() {
  const links = [
    profile.email && { label: "Email me", href: `mailto:${profile.email}` },
    profile.linkedin && { label: "LinkedIn", href: profile.linkedin },
    profile.github && { label: "GitHub", href: profile.github },
  ].filter(Boolean);
  return (
    <ul className="mt-8 flex flex-wrap justify-center gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white motion-safe:transition hover:bg-white hover:text-slate-900">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav aria-label="Main" className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <a href="#main" className="text-lg font-bold text-slate-900">{profile.name}</a>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-slate-700 hover:text-blue-800 hover:underline">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main">
        <section aria-labelledby="hero-heading" className="bg-linear-to-br from-blue-50 via-white to-slate-50">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 sm:py-28 md:grid-cols-[1fr_auto]">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-800">{profile.focus}</p>
              <h1 id="hero-heading" className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
              <p className="mt-5 max-w-2xl text-2xl leading-snug text-slate-800">{profile.headline}</p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#featured" className="rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white shadow-sm motion-safe:transition hover:bg-blue-900">See my work</a>
                <a href="#contact" className="rounded-lg border-2 border-blue-800 px-6 py-3 font-semibold text-blue-800 motion-safe:transition hover:bg-blue-800 hover:text-white">Get in touch</a>
              </div>
              <p className="mt-6 text-sm text-slate-600">Based in {profile.location}</p>
            </Reveal>
            {profile.photo && (
              <Reveal delay={150}>
                <Image
                  src={profile.photo}
                  alt={`Photo of ${profile.name}`}
                  width={260}
                  height={260}
                  priority
                  className="h-56 w-56 rounded-full object-cover shadow-xl ring-8 ring-white sm:h-64 sm:w-64"
                />
              </Reveal>
            )}
          </div>
        </section>

        <section id="approach" aria-labelledby="approach-heading" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
          <Reveal>
            <SectionHeading eyebrow="How I work" title="Where technology meets the client" id="approach-heading" />
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{profile.about}</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 120} className="h-full">
                <article className="h-full rounded-xl border-t-4 border-blue-800 bg-slate-50 p-6 motion-safe:transition motion-safe:hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-700">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="featured" aria-labelledby="featured-heading" className="scroll-mt-20 bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <SectionHeading eyebrow="Featured project" title={featured.title} id="featured-heading" />
              <p className="mt-3 text-xl text-slate-700">{featured.tagline}</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
                <div className="grid md:grid-cols-[1fr_260px]">
                  <div className="p-8">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-600">The problem</h3>
                    <p className="mt-2 text-lg leading-relaxed text-slate-800">{featured.problem}</p>
                    <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-slate-600">What I built</h3>
                    <p className="mt-2 text-lg leading-relaxed text-slate-800">{featured.solution}</p>
                    <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-slate-600">Along the way</h3>
                    <Bullets items={featured.highlights} />
                    <Tags items={featured.tags} />
                    <a href={featured.link} className="mt-6 inline-block rounded-lg bg-blue-800 px-5 py-3 font-semibold text-white motion-safe:transition hover:bg-blue-900">
                      View the code on GitHub
                    </a>
                  </div>
                  <dl className="grid grid-cols-1 gap-px bg-blue-900 sm:grid-cols-3 md:grid-cols-1">
                    {featured.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col-reverse justify-center bg-blue-800 p-6 text-white">
                        <dt className="mt-1 text-sm leading-snug text-blue-100">{stat.label}</dt>
                        <dd className="text-4xl font-bold">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
          <Reveal>
            <SectionHeading eyebrow="More projects" title="Other things I have built" id="projects-heading" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 120} className="h-full">
                <article className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 motion-safe:transition motion-safe:hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-700">{p.summary}</p>
                  <p className="mt-4 rounded-lg bg-blue-50 p-3 text-sm leading-relaxed text-blue-900">
                    <span className="font-semibold">Result: </span>{p.result}
                  </p>
                  <div className="mt-auto pt-2">
                    <Tags items={p.tags} />
                    {p.link && (
                      <a href={p.link} className="mt-4 inline-block font-semibold text-blue-800 underline">View on GitHub</a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 text-center">
              <a href={profile.github} className="inline-block rounded-lg border-2 border-blue-800 px-6 py-3 font-semibold text-blue-800 motion-safe:transition hover:bg-blue-800 hover:text-white">
                See all my projects on GitHub
              </a>
            </div>
          </Reveal>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20 bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <SectionHeading eyebrow="Experience" title="Where I have worked" id="experience-heading" />
            </Reveal>
            <ol className="relative mt-12 space-y-10 border-l-2 border-blue-200 pl-8">
              {experience.map((job, i) => (
                <li key={job.company} className="relative">
                  <span aria-hidden="true" className="absolute -left-[41px] top-6 h-4 w-4 rounded-full border-4 border-white bg-blue-800 ring-2 ring-blue-200" />
                  <Reveal delay={i * 100}>
                    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 motion-safe:transition hover:shadow-md">
                      <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">{job.dates}</p>
                      <h3 className="mt-1 text-xl font-bold">{job.role}</h3>
                      <p className="text-slate-600">{job.company}, {job.place}</p>
                      <Bullets items={job.points} />
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="education" aria-labelledby="education-heading" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
          <Reveal>
            <SectionHeading eyebrow="Education" title="Where I studied" id="education-heading" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 120} className="h-full">
                <article className="h-full rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 motion-safe:transition motion-safe:hover:-translate-y-1 hover:shadow-lg">
                  <p className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-900">{e.dates}</p>
                  <h3 className="mt-4 text-xl font-bold">{e.school}</h3>
                  <p className="mt-1 font-medium text-slate-800">{e.degree}</p>
                  <p className="mt-3 leading-relaxed text-slate-600">{e.highlight}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">Contact</p>
              <h2 id="contact-heading" className="mt-2 text-3xl font-bold sm:text-4xl">Let’s talk</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">{profile.contactNote}</p>
              <ContactLinks />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-8 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-5xl border-t border-slate-800 px-6 pt-8">
          Designed and built by {profile.name} with Next.js
        </div>
      </footer>
    </div>
  );
}