import ProjectMedia from './ProjectMedia'
import { ArrowRightIcon } from './Icons'

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-card">
      <div className="aspect-[16/10] overflow-hidden bg-slate-50 p-3 sm:p-4">
        <div className="h-full transition duration-300 group-hover:scale-[1.01]">
          <ProjectMedia project={project} />
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">{project.category}</p>
          <span className="text-xs font-medium text-slate-400">{project.year}</span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-navy-950">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
              {technology}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition hover:text-brand-600"
          aria-label={`View details for ${project.title}`}
        >
          View Project
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  )
}
