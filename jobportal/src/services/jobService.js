import { jobs } from '../api/jobs.js'

export function getJobs(filters = {}) {
  const search = filters.search?.trim().toLowerCase()

  return jobs.filter((job) => {
    const matchesSearch = search
      ? [job.title, job.company, job.location, job.category]
          .join(' ')
          .toLowerCase()
          .includes(search)
      : true
    const matchesType = filters.type ? job.type === filters.type : true
    const matchesMode = filters.workMode ? job.workMode === filters.workMode : true
    const matchesCategory = filters.category ? job.category === filters.category : true

    return matchesSearch && matchesType && matchesMode && matchesCategory
  })
}

export function getJobById(jobId) {
  return jobs.find((job) => job.id === jobId)
}

export function getJobOptions(key) {
  return [...new Set(jobs.map((job) => job[key]))]
}
