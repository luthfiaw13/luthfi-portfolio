import { useCallback, useState } from "react";
import { HeroAnalyticsVisual } from "./components/DashboardPreview";
import Footer from "./components/Footer";
import {
  ExternalIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
} from "./components/Icons";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import SectionHeading from "./components/SectionHeading";
import {
  certifications,
  experiences,
  projects,
  skillGroups,
} from "./data/portfolio";

const highlights = [
  ["4", "Featured Projects"],
  ["2", "Bootcamp Programs"],
  ["1", "Data Analytics Internship"],
  ["2022 - Present", "Informatics Student"],
];

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const closeProject = useCallback(() => setActiveProject(null), []);

  return (
    <div id="top" className="min-h-screen bg-white text-navy-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects onOpenProject={setActiveProject} />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={closeProject} />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-100"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 pt-1 pb-12 sm:px-6 sm:pt-1 sm:pb-16 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:pt-1 lg:pb-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Hello, I'm
          </p>
          <h1
            id="hero-title"
            className="mt-4 text-5xl font-semibold uppercase tracking-[-0.045em] text-navy-950 sm:text-6xl lg:text-7xl"
          >
            Luthfi Awaludin
          </h1>
          <div className="mt-6 space-y-1 text-lg font-medium text-slate-700 sm:text-xl">
            <p>Final-Year Informatics Student</p>
            <p className="text-brand-600">Data Analytics Enthusiast</p>
          </div>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            I am an Informatics student with an interest in data analytics, data
            visualization, dashboard development, and technology. I enjoy
            transforming data into meaningful insights and continuously
            developing my skills through internships, bootcamps, and hands-on
            projects.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-navy-800 focus-visible:outline-brand-500"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition hover:-translate-y-0.5 hover:border-brand-500/60 hover:bg-brand-50"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:pl-6">
          <HeroProfilePhoto />
        </div>
      </div>
    </section>
  );
}

function HeroProfilePhoto() {
  return (
    <div className="mx-auto w-full max-w-[440px]">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div className="overflow-hidden rounded-[1.5rem]">
          <img
            src="/image/luthfi-profile.jpeg"
            alt="Portrait of Luthfi Awaludin"
            className="h-[480px] w-full object-cover"
          />
        </div>

        {/* <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
              Profile
            </p>
            <p className="mt-1 text-sm font-medium text-navy-950">
              Luthfi Awaludin
            </p>
          </div>

          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Data Analytics
          </span>
        </div> */}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-0 bg-slate-50/70 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <SectionHeading eyebrow="Profile" title="About Me" />
          <div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                I am a final-year Informatics student at Universitas Siliwangi
                with an interest in data analytics, data visualization, and
                technology. I have developed my skills through academic
                projects, internships, bootcamps, and hands-on experience
                working with data.
              </p>
              <p>
                My experience includes data processing, data analysis, dashboard
                development, SQL, Python, and data visualization. I also have
                experience in organizational leadership and project management
                through student organizations and committees.
              </p>
              <p>
                I am currently focused on developing practical skills in data
                analytics and business intelligence, particularly in SQL-based
                analysis, dashboard development, and communicating data-driven
                insights.
              </p>
            </div>
            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-600">
                Education
              </p>

              <div className="mt-3 sm:flex sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-navy-950">
                    Universitas Siliwangi
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Informatics · Faculty of Engineering
                  </p>
                </div>

                <div className="mt-3 text-sm text-slate-500 sm:mt-0 sm:text-right">
                  <p>2022 – Present</p>
                  <p className="mt-1 font-medium text-navy-900">
                    Final-Year Student
                  </p>
                </div>
              </div>
            </div>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map(([value, label]) => (
                <div key={label} className="bg-white p-5">
                  <dt className="text-sm leading-5 text-slate-500">{label}</dt>
                  <dd className="mt-2 text-xl font-semibold tracking-tight text-navy-950">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects({ onOpenProject }) {
  return (
    <section id="projects" className="scroll-mt-0 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="Hands-on analytics and technology projects focused on practical workflows, clear reporting, and understandable outcomes."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-0 border-y border-slate-100 bg-slate-50/70 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Professional & Organizational"
          title="Experience"
        />

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {experiences.map((item) => (
            <article
              key={item.role}
              className="grid gap-4 py-7 md:grid-cols-[.8fr_1.2fr] md:gap-10 sm:py-8"
            >
              <div>
                <p className="text-sm font-semibold text-brand-600">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-navy-950">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {item.organization}
                </p>
              </div>
              <div>
                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  {item.description}
                </p>

                {item.bullets?.length ? (
                  <ul className="mt-4 space-y-2.5">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-0 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          description="A practical toolkit built through coursework, internships, bootcamps, and project-based learning."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <h3 className="text-base font-semibold text-navy-950">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                      aria-hidden="true"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-0 border-y border-slate-100 bg-slate-50/70 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learning & Credentials"
          title="Certifications"
          description="Selected certificates from bootcamps, project-based learning, and practical data-analysis training."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-soft"
            >
              <a
                href={certification.image}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden border-b border-slate-200 bg-slate-100"
                aria-label={`Open ${certification.title} certificate`}
              >
                <div className="aspect-[16/9] overflow-hidden bg-white p-2 sm:p-3">
                  <img
                    src={certification.image}
                    alt={certification.imageAlt}
                    className="h-full w-full object-contain object-center transition duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </a>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand-600">
                  <span>{certification.provider}</span>
                  <span className="text-slate-300" aria-hidden="true">
                    •
                  </span>
                  <span className="text-slate-500">{certification.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-navy-950 sm:text-xl">
                  {certification.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {certification.focus}
                </p>
                <p className="mt-4 inline-flex w-fit rounded-md bg-brand-50 px-2.5 py-1.5 text-xs font-semibold text-brand-600">
                  {certification.achievement}
                </p>
                <a
                  href={certification.image}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition hover:text-brand-600"
                >
                  View Certificate <ExternalIcon className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-0 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Connect"
            description="I am open to internship, entry-level, project, and collaboration opportunities related to data analytics, business intelligence, and technology. Feel free to reach out through email or LinkedIn."
          />

          <address className="not-italic">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              <ContactRow icon={<MailIcon />} label="Email">
                <a
                  href="mailto:luthfiawaludin003@gmail.com"
                  className="break-all font-medium text-navy-950 transition hover:text-brand-600"
                >
                  luthfiawaludin003@gmail.com
                </a>
              </ContactRow>
              <ContactRow icon={<LinkIcon />} label="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/luthfiawaludin"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all font-medium text-navy-950 transition hover:text-brand-600"
                >
                  www.linkedin.com/in/luthfiawaludin
                </a>
              </ContactRow>
              <ContactRow icon={<LinkIcon />} label="GitHub">
                <a
                  href="https://github.com/luthfiaw13"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all font-medium text-navy-950 transition hover:text-brand-600"
                >
                  github.com/luthfiaw13
                </a>
              </ContactRow>
              {/* <ContactRow icon={<LinkIcon />} label="Instagram">
                <a
                  href="https://www.instagram.com/uphiii_"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-navy-950 transition hover:text-brand-600"
                >
                  @uphiii_
                </a>
              </ContactRow> */}
              <ContactRow icon={<MapPinIcon />} label="Location">
                <span className="font-medium text-navy-950">
                  Tasikmalaya, West Java, Indonesia
                </span>
              </ContactRow>
            </div>
          </address>
          <a
            href="/documents/luthfi-awaludin-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            View / Download CV
            <ExternalIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, children }) {
  return (
    <div className="grid gap-2 py-5 sm:grid-cols-[150px_1fr] sm:items-center">
      <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
        <span className="text-brand-600">{icon}</span>
        {label}
      </div>
      <div className="pl-8 text-sm sm:pl-0">{children}</div>
    </div>
  );
}
