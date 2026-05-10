import posts from "../data/posts";

const RepliesPage = () => {
  return (
    <section className="replies-page">
      <div className="card replies-header" style={{ "--delay": "0.12s" }}>
        <p className="panel-title">Replies Archive</p>
        <h2 className="replies-title">Field Replies</h2>
        <p className="replies-sub">
          Review the latest reply attached to each case thread.
        </p>
      </div>
      {posts.map((post, index) => (
        <article
          key={post.id}
          className="card reply-thread"
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
          {post.reply ? (
            <div className="reply-section">
              <p className="reply-title">Reply</p>
              <div className="reply-card">
                <div className="avatar reply-avatar">{post.reply.initials}</div>
                <div className="reply-content">
                  <div className="reply-author">
                    <span>{post.reply.author}</span>
                    <span className="muted">{post.reply.handle}</span>
                    <span className="dot" aria-hidden="true"></span>
                    <span className="muted">{post.reply.time}</span>
                  </div>
                  <p className="reply-body">{post.reply.body}</p>
                </div>
              </div>
            </div>
          ) : null}
        </article>
      ))}
    </section>
  );
};

export default RepliesPage;
