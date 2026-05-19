import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink to="/" className="brand" aria-label="CareerCraft home">
          <span className="brand-mark">C</span>
          <span>CareerCraft</span>
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register" className="nav-cta">
            Register
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
