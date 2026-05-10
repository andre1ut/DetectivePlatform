const Header = ({ activePage = "feed", onNavigate = () => {} }) => {
  return (
    <header className="topbar" style={{ "--delay": "0.05s" }}>
      <div className="brand">
        <div className="brand-mark">DP</div>
        <div>
          <p className="brand-title">Detective Platform</p>
          <span className="brand-sub">Citywide signal desk</span>
        </div>
      </div>
      <div className="topbar-actions">
        <div className="search">
          <label className="sr-only" htmlFor="case-search">
            Search
          </label>
          <input
            id="case-search"
            type="text"
            placeholder="Search cases, leads, handles"
          />
          <span className="search-hint">/</span>
        </div>
        <div className="page-toggle" role="tablist" aria-label="Page view">
          <button
            className={
              activePage === "feed" ? "btn btn-accent" : "btn btn-ghost"
            }
            type="button"
            aria-pressed={activePage === "feed"}
            onClick={() => onNavigate("feed")}
          >
            Main Feed
          </button>
          <button
            className={
              activePage === "replies" ? "btn btn-accent" : "btn btn-ghost"
            }
            type="button"
            aria-pressed={activePage === "replies"}
            onClick={() => onNavigate("replies")}
          >
            Replies
          </button>
        </div>
        <button className="btn btn-ghost" type="button">
          Open Case
        </button>
        <button className="btn btn-accent" type="button">
          Drop a Clue
        </button>
      </div>
    </header>
  );
};

export default Header;
