function DashboardPanel({ title, children }) {
  return (
    <section className="dashboard-panel">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default DashboardPanel
