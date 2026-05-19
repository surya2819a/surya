import { Link, useParams } from 'react-router-dom'
import { getJobById } from '../services/jobService.js'

function JobDetails() {
  const { jobId } = useParams()
  const job = getJobById(jobId)

  if (!job) {
    return (
      <section className="page-header">
        <h1>Job not found</h1>
        <Link to="/jobs" className="button secondary">
          Back to jobs
        </Link>
      </section>
    )
  }

  return (
    <div className="details-layout">
      <section className="details-main">
        <Link to="/jobs" className="text-link text-sm">
          Back to jobs
        </Link>
        <p className="eyebrow text-xs text-gray-600 uppercase tracking-wide">{job.company}</p>
        <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
        
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{job.type}</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">{job.workMode}</span>
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">{job.category}</span>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Job Description</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Requirements</h2>
          <ul className="check-list text-sm space-y-1">
            {job.requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Key Skills</h2>
          <div className="flex flex-wrap gap-2">
            {job.requirements.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">
                {skill.split(' ')[0]} {/* Extract first word as skill */}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Benefits</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Competitive salary and equity package</li>
            <li>• Health, dental, and vision insurance</li>
            <li>• Flexible working hours and remote options</li>
            <li>• Professional development budget</li>
            <li>• Paid time off and parental leave</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">About {job.company}</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {job.company} is a leading company in the {job.category.toLowerCase()} industry, 
            committed to building innovative solutions and fostering a collaborative work environment. 
            Join our team of talented professionals and contribute to meaningful projects that make a difference.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Application Information</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p><strong>Application Deadline:</strong> Open until filled</p>
            <p><strong>Number of Applicants:</strong> {job.applicants}</p>
            <p><strong>Expected Start Date:</strong> Immediate</p>
          </div>
        </div>
      </section>
      <aside className="apply-panel">
        <h2 className="text-lg font-semibold mb-4">Apply now</h2>
        <dl className="space-y-3 mb-6">
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-gray-600">Location</dt>
            <dd className="text-sm">{job.location}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-gray-600">Salary</dt>
            <dd className="text-sm font-semibold">{job.salary}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-gray-600">Experience</dt>
            <dd className="text-sm">{job.experience}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-gray-600">Posted</dt>
            <dd className="text-sm">{job.posted}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-gray-600">Job Type</dt>
            <dd className="text-sm">{job.type}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-gray-600">Work Mode</dt>
            <dd className="text-sm">{job.workMode}</dd>
          </div>
        </dl>
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Resume</span>
            <input type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </label>
          <button type="button" className="button primary w-full text-sm py-2">
            Submit application
          </button>
          <button type="button" className="button secondary w-full text-sm py-2">
            Save job
          </button>
        </div>
      </aside>
    </div>
  )
}

export default JobDetails
