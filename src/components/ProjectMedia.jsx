import DashboardPreview from './DashboardPreview'

export default function ProjectMedia({ project, className = '', eager = false }) {
  if (!project.cardImage) {
    return <DashboardPreview type={project.previewType} compact={project.previewType === 'kimia'} />
  }

  const positionClass = project.cardImagePosition === 'top' ? 'object-top' : 'object-center'

  return (
    <div className={`h-full w-full overflow-hidden rounded-xl border border-slate-200 bg-white ${className}`}>
      <img
        src={project.cardImage}
        alt={`${project.title} project preview`}
        className={`h-full w-full object-cover ${positionClass}`}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  )
}
