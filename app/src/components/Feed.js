import posts from "../data/posts";

const composerChips = ["Audio", "Photo", "Geo Tag"];

const Feed = () => {
  return (
    <section className="feed">
      <div className="card composer" style={{ "--delay": "0.12s" }}>
        <div className="composer-row">
          <div className="avatar">ME</div>
          <div className="composer-field">
            <p className="composer-title">Log a new field note</p>
            <textarea
              rows="3"
              placeholder="Share a lead, location, or quick note for the network"
              aria-label="Compose a field note"
            />
            <div className="composer-actions">
              <div className="chip-row">
                {composerChips.map((chip) => (
                  <span className="chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <button className="btn btn-accent" type="button">
                Post Note
              </button>
            </div>
          </div>
        </div>
      </div>
      {posts.map((post, index) => (
        <article
          key={post.id}
          className="card post"
          style={{ "--delay": `${0.18 + index * 0.06}s` }}
        >
          <div className="post-head">
            <div className="avatar">{post.initials}</div>
            <div className="post-head-text">
              <div className="post-author">
                <span>{post.author}</span>
                <span className="muted">{post.handle}</span>
                <span className="dot" aria-hidden="true"></span>
                <span className="muted">{post.time}</span>
              </div>
              <div className="post-meta">{post.location}</div>
            </div>
            <span
              className={
                post.tone === "hot" ? "pill pill-hot" : "pill pill-live"
              }
            >
              {post.badge}
            </span>
          </div>
          <p className="post-body">{post.body}</p>
          <div className="tag-row">
            {post.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="post-actions">
            <button className="action-btn" type="button">
              Clues {post.stats.clues}
            </button>
            <button className="action-btn" type="button">
              Echoes {post.stats.echoes}
            </button>
            <button className="action-btn" type="button">
              Pins {post.stats.pins}
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Feed;
