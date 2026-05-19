import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-amber-600/95 via-orange-600/95 to-rose-600/95 border-b border-white/10 shadow-lg shadow-amber-300/30">
      {/* Decorative glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 left-1/4 w-64 h-32 bg-amber-300/20 rounded-full blur-3xl" />
        <div className="absolute -top-16 right-1/4 w-64 h-32 bg-rose-300/20 rounded-full blur-3xl" />
      </div>

      {/* Two-column split grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-3.5 grid grid-cols-2 items-center divide-x divide-white/15">

        {/* LEFT COLUMN — Brand */}
        <div className="flex items-center justify-start pr-6">
          <Link to="/Home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-xl blur-md group-hover:blur-lg transition-all" />
              <div className="relative w-11 h-11 flex items-center justify-center bg-gradient-to-br from-amber-100 to-white rounded-xl shadow-lg shadow-amber-900/20 text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                🪙
              </div>
            </div>
            <div>
              <h1 className="text-white font-extrabold text-lg leading-tight tracking-tight drop-shadow-sm">
                ChitFund
              </h1>
              <p className="text-amber-100/80 text-[10px] leading-none uppercase tracking-[0.2em] font-semibold mt-0.5">
                Dashboard
              </p>
            </div>
          </Link>
        </div>

        {/* RIGHT COLUMN — Nav Links */}
        <div className="flex items-center justify-end pl-6">
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-2xl border border-white/15 shadow-inner">
            {[
              { to: '/Home', label: 'Home' },
              { to: '/Member', label: 'Member' },
              { to: '/OverView', label: 'OverView' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-amber-50 hover:text-amber-700 font-semibold text-sm px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-md hover:shadow-amber-900/20 active:scale-95"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom shimmer line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </nav>
  )
}

export default Navbar
