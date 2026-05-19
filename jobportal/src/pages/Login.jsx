import { Link } from 'react-router-dom'
import AuthForm from '../components/auth/AuthForm.jsx'

function Login() {
  return (
    <section className="auth-page">
      <div>
        <p className="eyebrow">Welcome back</p>
        <h1>Sign in to manage jobs, applications, and applicants.</h1>
        <p>
          Candidates can track applications, recruiters can manage hiring pipelines,
          and admins can review portal activity.
        </p>
      </div>
      <div className="auth-card">
        <AuthForm mode="login" />
        <p>
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </section>
  )
}

export default Login
