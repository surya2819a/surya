import { Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout.jsx'
import Home from './pages/Home.jsx'
import Jobs from './pages/Jobs.jsx'
import JobDetails from './pages/JobDetails.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Profile from './pages/Profile.jsx'
import CompanyProfile from './pages/CompanyProfile.jsx'
import Applications from './pages/Applications.jsx'
import Settings from './pages/Settings.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
