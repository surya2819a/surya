import { Link } from 'react-router-dom'
import AuthForm from '../components/auth/AuthForm.jsx'

function Register() {
  return (
    <section className="auth-page">
      <div>
        <p className="eyebrow">Create account</p>
        <h1>Join as a candidate or recruiter.</h1>
        <p>
          Upload a resume, save jobs, post openings, and keep hiring activity in
          one organized workspace.
        </p>
      </div>
      <div className="auth-card">
        <AuthForm mode="register" />
        <p>
          Already registered? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </section>
  )
}

export default Register
