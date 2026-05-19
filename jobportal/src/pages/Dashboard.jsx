import DashboardPanel from '../components/dashboard/DashboardPanel.jsx'
import MetricCard from '../components/dashboard/MetricCard.jsx'
import {
  adminReports,
  recruiterApplicants,
  savedJobs,
  userApplications,
} from '../utils/dashboardData.js'

function Dashboard() {
  return (
    <div className="page-stack">
      <section className="page-header">
        <p className="eyebrow">Role dashboards</p>
        <h1>Candidate, recruiter, and admin activity in one view.</h1>
      </section>

      <section className="metric-grid">
        {adminReports.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </section>

      <div className="dashboard-grid">
        <DashboardPanel title="Candidate dashboard">
          <ul className="data-list">
            {userApplications.map((item) => (
              <li key={`${item.role}-${item.stage}`}>
                <span>
                  <strong>{item.role}</strong>
                  {item.company}
                </span>
                <em>{item.stage}</em>
              </li>
            ))}
          </ul>
          <h3>Saved jobs</h3>
          <ul className="plain-list">
            {savedJobs.map((job) => (
              <li key={job.id}>{job.title}</li>
            ))}
          </ul>
        </DashboardPanel>

        <DashboardPanel title="Recruiter dashboard">
          <button type="button" className="button primary full-width">
            Post new job
          </button>
          <ul className="data-list">
            {recruiterApplicants.map((applicant) => (
              <li key={applicant.name}>
                <span>
                  <strong>{applicant.name}</strong>
                  {applicant.role}
                </span>
                <em>{applicant.status}</em>
              </li>
            ))}
          </ul>
        </DashboardPanel>

        <DashboardPanel title="Admin panel">
          <ul className="admin-actions">
            <li>Manage users and recruiters</li>
            <li>Approve pending job posts</li>
            <li>Review reports and platform analytics</li>
            <li>Audit company profiles</li>
          </ul>
        </DashboardPanel>
      </div>
    </div>
  )
}

export default Dashboard
