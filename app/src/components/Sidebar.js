const navItems = [
  { label: "Caseboard", count: "12" },
  { label: "Field Notes", count: "4" },
  { label: "Signals", count: "9" },
  { label: "Watchlist", count: "2" },
  { label: "Evidence Locker", count: "7" }
];

const cases = [
  {
    title: "Midnight Signal",
    meta: "Dock district - 6 witnesses",
    status: "Hot",
    tone: "hot"
  },
  {
    title: "Glass Alley Loop",
    meta: "Market row - 2 leads",
    status: "Active",
    tone: "live"
  },
  {
    title: "North Rail Whistle",
    meta: "Transit yard - 3 cameras",
    status: "Active",
    tone: "live"
  }
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="panel" style={{ "--delay": "0.12s" }}>
        <p className="panel-title">Field Navigation</p>
        <nav className="nav-list">
          {navItems.map((item) => (
            <button className="nav-item" type="button" key={item.label}>
              <span className="nav-label">{item.label}</span>
              <span className="nav-count">{item.count}</span>
            </button>
          ))}
        </nav>
      </section>
      <section className="panel" style={{ "--delay": "0.18s" }}>
        <div className="panel-head">
          <p className="panel-title">Active Cases</p>
          <span className="pill pill-live">Live</span>
        </div>
        <div className="case-list">
          {cases.map((caseItem) => (
            <div className="case-card" key={caseItem.title}>
              <div>
                <p className="case-title">{caseItem.title}</p>
                <p className="case-meta">{caseItem.meta}</p>
              </div>
              <span
                className={
                  caseItem.tone === "hot" ? "pill pill-hot" : "pill pill-live"
                }
              >
                {caseItem.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
