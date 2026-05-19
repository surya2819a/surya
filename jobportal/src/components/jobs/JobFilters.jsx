import { getJobOptions } from '../../services/jobService.js'

function JobFilters({ filters, onChange }) {
  const updateFilter = (event) => {
    onChange({ ...filters, [event.target.name]: event.target.value })
  }

  return (
    <section className="filters" aria-label="Job filters">
      <label>
        Search jobs
        <input
          name="search"
          value={filters.search}
          onChange={updateFilter}
          placeholder="Role, company, location"
        />
      </label>
      <label>
        Job type
        <select name="type" value={filters.type} onChange={updateFilter}>
          <option value="">All types</option>
          {getJobOptions('type').map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label>
        Work mode
        <select name="workMode" value={filters.workMode} onChange={updateFilter}>
          <option value="">All modes</option>
          {getJobOptions('workMode').map((mode) => (
            <option key={mode} value={mode}>
              {mode}
            </option>
          ))}
        </select>
      </label>
      <label>
        Category
        <select name="category" value={filters.category} onChange={updateFilter}>
          <option value="">All categories</option>
          {getJobOptions('category').map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </section>
  )
}

export default JobFilters
