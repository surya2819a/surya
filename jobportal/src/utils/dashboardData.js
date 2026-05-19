import { jobs } from '../api/jobs.js'

export const savedJobs = jobs.slice(0, 2)

export const userApplications = [
  { role: 'Frontend Engineer', company: 'BrightLayer Labs', stage: 'Interview' },
  { role: 'Data Analyst', company: 'MetricWorks', stage: 'Applied' },
  { role: 'Product Designer', company: 'Northstar Careers', stage: 'Saved' },
]

export const recruiterApplicants = [
  { name: 'Ananya Rao', role: 'Frontend Engineer', score: 92, status: 'Shortlisted' },
  { name: 'Rahul Menon', role: 'Data Analyst', score: 85, status: 'Review' },
  { name: 'Meera Shah', role: 'Product Designer', score: 78, status: 'Interview' },
]

export const adminReports = [
  { label: 'Active users', value: '12,840' },
  { label: 'Recruiters', value: '318' },
  { label: 'Jobs awaiting approval', value: '26' },
  { label: 'Monthly applications', value: '48,210' },
]
