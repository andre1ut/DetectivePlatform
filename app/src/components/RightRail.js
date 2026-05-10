const profileStats = [
  { label: "Cases", value: "18" },
  { label: "Signals", value: "124" },
  { label: "Accuracy", value: "92%" }
];

const notifications = [
  {
    id: 1,
    title: "New witness check-in",
    meta: "Dock Gate 3",
    time: "3m"
  },
  {
    id: 2,
    title: "Signal pattern match",
    meta: "Old Tower cluster",
    time: "21m"
  },
  {
    id: 3,
    title: "Watchlist update",
    meta: "Courier tagged",
    time: "1h"
  }
];

const trends = [
  { id: 1, title: "Red Wire Loop", meta: "842 mentions" },
  { id: 2, title: "Blue Seal", meta: "417 mentions" },
  { id: 3, title: "Canal Ridge", meta: "275 mentions" }
];

const RightRail = () => {
  return (
    <aside className="right-rail">
      <section className="card profile-card" style={{ "--delay": "0.14s" }}>
        <div className="profile-head">
          <div className="avatar avatar-soft">RK</div>
          <div>
            <p className="profile-name">andre1ut</p>
            <p className="profile-meta">Cel mai bun detectiv de la el din camera :)</p>
          </div>
        </div>
        <div className="profile-tags">
          <span className="pill">Clearance 4</span>
          <span className="pill">Night desk</span>
        </div>
        <div className="profile-stats">
          {profileStats.map((stat) => (
            <div className="profile-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <button className="btn btn-ghost full" type="button">
          Edit Signal Profile
        </button>
      </section>
      <section className="panel" style={{ "--delay": "0.2s" }}>
        <div className="panel-head">
          <p className="panel-title">Notifications</p>
          <span className="pill pill-live">Live</span>
        </div>
        <div className="notice-list">
          {notifications.map((note) => (
            <div className="notice" key={note.id}>
              <div>
                <p className="notice-title">{note.title}</p>
                <p className="notice-meta">{note.meta}</p>
              </div>
              <span className="notice-time">{note.time}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="panel" style={{ "--delay": "0.26s" }}>
        <div className="panel-head">
          <p className="panel-title">Trending Leads</p>
          <span className="pill">This hour</span>
        </div>
        <div className="trend-list">
          {trends.map((trend) => (
            <div className="trend" key={trend.id}>
              <div>
                <p className="trend-name">{trend.title}</p>
                <p className="trend-meta">{trend.meta}</p>
              </div>
              <button className="action-btn" type="button">
                Track
              </button>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default RightRail;
