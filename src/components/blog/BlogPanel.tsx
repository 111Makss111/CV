import { blogPosts } from "../../data/blog";
import { SectionHeading } from "../common/SectionHeading";

export function BlogPanel() {
  return (
    <article className="panel">
      <SectionHeading title="Blog" />

      <div className="blog-intro">
        <p>
          Developer notes about my learning process, project decisions and the
          way I turn practice into presentable work.
        </p>
      </div>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <article key={post.title}>
            <div className={`blog-visual blog-visual-${post.visual}`} aria-hidden="true">
              <span>{post.category}</span>
            </div>
            <div className="blog-meta">
              <time dateTime={post.dateTime}>{post.date}</time>
              <span>{post.category}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <div className="blog-tags">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </article>
  );
}
