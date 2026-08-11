import { useEffect, useRef } from "react";
import ProjectMedia from "./ProjectMedia";
import { CloseIcon, ExternalIcon } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-navy-950/55 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <div className="max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur sm:px-8">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-600">
              Project Detail
            </p>
            <h2
              id="project-modal-title"
              className="truncate text-lg font-semibold text-navy-950 sm:text-xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-navy-950"
            aria-label="Close project detail"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="px-5 py-7 sm:px-8 sm:py-9">
          <div className="grid gap-7 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                <span className="rounded-md bg-slate-100 px-2.5 py-1.5">
                  {project.category}
                </span>
                <span className="rounded-md bg-slate-100 px-2.5 py-1.5">
                  {project.year}
                </span>
              </div>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-5 text-base leading-7 text-slate-600">
                {project.overview}
              </p>

              {project.links?.length ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800"
                    >
                      {link.label}
                      <ExternalIcon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-50 p-3 sm:p-4">
              <ProjectMedia project={project} className="shadow-soft" eager />
            </div>
          </div>

          <div className="mt-10 grid gap-8 border-t border-slate-200 pt-9 lg:grid-cols-2">
            <DetailSection title="Background" text={project.background} />
            <DetailSection title="Objective" text={project.objective} />
          </div>

          {project.contributions?.length ? (
            <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h4 className="text-lg font-semibold text-navy-950">
                My Contribution
              </h4>

              <ul className="mt-4 space-y-3">
                {project.contributions.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          
          <div className="mt-9">
            <h4 className="text-lg font-semibold text-navy-950">
              Tools and Technologies
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 p-5 sm:p-7">
            <h4 className="text-lg font-semibold text-navy-950">Workflow</h4>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {project.workflow.map((step, index) => (
                <div
                  key={step}
                  className="relative rounded-xl border border-slate-200 bg-white p-3"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-600">
                    0{index + 1}
                  </span>
                  <p className="mt-2 text-xs font-semibold leading-5 text-navy-950">
                    {step}
                  </p>
                  {index < project.workflow.length - 1 ? (
                    <span
                      className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-slate-300 lg:block"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <ProjectGallery project={project} />

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold text-navy-950">
                Key Insights
              </h4>
              <ul className="mt-4 space-y-3">
                {project.insights.map((insight) => (
                  <li
                    key={insight}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                      aria-hidden="true"
                    />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-navy-950">
                Business Recommendations
              </h4>
              <div className="mt-4 space-y-3">
                {project.recommendations.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 p-4"
                  >
                    <p className="text-sm font-semibold text-navy-950">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {project.areas?.length ? (
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h4 className="text-lg font-semibold text-navy-950">Key Areas</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-600"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-10 rounded-2xl border border-slate-200 p-5 sm:p-6">
            <h4 className="text-lg font-semibold text-navy-950">
              Project Links
            </h4>
            {project.links?.length ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-navy-900 transition hover:border-brand-500/60 hover:bg-brand-50"
                  >
                    {link.label}
                    <ExternalIcon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            ) : (
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                {project.linksNote ||
                  "No public project link is available for this project yet."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectGallery({ project }) {
  if (!project.images?.length) return null;

  return (
    <section className="mt-10">
      <div className="max-w-3xl">
        <h4 className="text-lg font-semibold text-navy-950">Project Preview</h4>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Screenshots from the actual project. Select an image to open the
          full-size preview in a new tab.
        </p>
      </div>

      <div className="mt-5 space-y-6">
        {project.images.map((image, index) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-soft"
          >
            <a
              href={image.src}
              target="_blank"
              rel="noreferrer"
              className="group block bg-white p-2 sm:p-3"
              aria-label={`Open full-size project screenshot ${index + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="mx-auto h-auto w-full rounded-xl object-contain transition duration-300 group-hover:opacity-95"
                loading="lazy"
                decoding="async"
              />
            </a>
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500 sm:px-5">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function DetailSection({ title, text }) {
  return (
    <section>
      <h4 className="text-lg font-semibold text-navy-950">{title}</h4>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </section>
  );
}
