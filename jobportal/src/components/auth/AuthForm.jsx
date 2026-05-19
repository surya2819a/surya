function AuthForm({ mode }) {
  const isRegister = mode === 'register'

  return (
    <form className="auth-form">
      {isRegister && (
        <label>
          Full name
          <input placeholder="Your name" />
        </label>
      )}
      <label>
        Email
        <input type="email" placeholder="you@example.com" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Minimum 8 characters" />
      </label>
      {isRegister && (
        <>
          <label>
            Account type
            <select defaultValue="candidate">
              <option value="candidate">Candidate</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </label>
          <label>
            Upload resume
            <input type="file" />
          </label>
        </>
      )}
      <button type="button" className="button primary">
        {isRegister ? 'Create account' : 'Sign in'}
      </button>
    </form>
  )
}

export default AuthForm
