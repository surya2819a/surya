import { useMemo, useState } from 'react'
import JobCard from '../components/jobs/JobCard.jsx'
import JobFilters from '../components/jobs/JobFilters.jsx'
import { getJobs } from '../services/jobService.js'

function Jobs() {
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    workMode: '',
    category: '',
  })

  const filteredJobs = useMemo(() => getJobs(filters), [filters])

  return (
    <div className="page-stack">
      <section className="page-header">
        <p className="eyebrow">Job listings</p>
        <h1>Explore roles that match your next move.</h1>
      </section>
      <JobFilters filters={filters} onChange={setFilters} />
      <section className="results-header">
        <h2>{filteredJobs.length} matching jobs</h2>
        <button
          type="button"
          className="button ghost"
          onClick={() =>
            setFilters({ search: '', type: '', workMode: '', category: '' })
          }
        >
          Clear filters
        </button>
      </section>
      <section className="job-list">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </div>
  )
}

export default Jobs
