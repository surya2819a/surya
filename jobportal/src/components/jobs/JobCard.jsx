import { Link } from 'react-router-dom'

function JobCard({ job, compact = false }) {
  return (
    <article className={compact ? 'job-card compact' : 'job-card'}>
      <div>
        <p className="eyebrow">{job.company}</p>
        <h3>{job.title}</h3>
        <p className="muted">{job.description}</p>
      </div>
      <div className="job-meta">
        <span>{job.location}</span>
        <span>{job.type}</span>
        <span>{job.workMode}</span>
        <span>{job.salary}</span>
      </div>
      <div className="card-actions">
        <Link to={`/jobs/${job.id}`} className="button secondary">
          View details
        </Link>
        <button type="button" className="button ghost">
          Save
        </button>
      </div>
    </article>
  )
}

export default JobCard
