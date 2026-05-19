import { Link } from 'react-router-dom'
import JobCard from '../components/jobs/JobCard.jsx'
import { jobs } from '../api/jobs.js'

function Home() {
  const featuredJobs = jobs.slice(0, 3)

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Professional job portal</p>
          <h1>Find better roles, manage hiring, and track every application.</h1>
          <p>
            CareerCraft brings candidates, recruiters, and admins into one focused
            workspace for job discovery, applications, approvals, and hiring analytics.
          </p>
          <div className="hero-actions">
            <Link to="/jobs" className="button primary">
              Browse jobs
            </Link>
            <Link to="/dashboard" className="button secondary">
              View dashboard
            </Link>
          </div>
        </div>
        <div className="hero-search" aria-label="Quick search">
          <span>Quick search</span>
          <div className="search-row">
            <input placeholder="Frontend Engineer" />
            <Link to="/jobs" className="button primary">
              Search
            </Link>
          </div>
          <div className="hero-stats">
            <strong>4,800+</strong>
            <span>active roles</span>
            <strong>320+</strong>
            <span>verified recruiters</span>
          </div>
        </div>
      </section>

      <section className="section-heading">
        <p className="eyebrow">Featured openings</p>
        <h2>Fresh roles from verified companies</h2>
      </section>
      <section className="job-grid">
        {featuredJobs.map((job) => (
          <JobCard key={job.id} job={job} compact />
        ))}
      </section>
    </>
  )
}

export default Home
