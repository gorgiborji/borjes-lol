// pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import { siteContent } from '../data/content'

// Helper function to safely render text (no more escaping needed!)
function SafeText({ children }) {
  return <span dangerouslySetInnerHTML={{ __html: children }} />
}

export default function Home() {
  const { title, tagline, about, nav, blog, photos, projects, contact, footer } = siteContent

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Personal site - blogs, photos, projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        {/* Header */}
        <header className="header">
          <h1 className="site-title">{title}</h1>
          <p className="tagline">{tagline}</p>
        </header>

        {/* Navigation */}
        <nav className="nav">
          {nav.map((item, index) => (
            <a key={index} href={item.href}>{item.label}</a>
          ))}
        </nav>

        {/* Main Content */}
        <main className="main">
          {/* About Section */}
          <section id="about" className="section">
            <h2>{about.title}</h2>
            {about.content.map((paragraph, index) => (
              <p key={index}>
                <SafeText>{paragraph}</SafeText>
              </p>
            ))}
          </section>

          {/* Blog Section */}
          <section id="blog" className="section">
            <h2>{blog.title}</h2>
            <div className="blog-posts">
              {blog.posts.map((post, index) => (
                <article key={index} className="blog-post">
                  <h3><Link href={`/posts/${post.slug}`}>{post.title}</Link></h3>
                  <p className="post-date">{post.date}</p>
                  <p>{post.preview}</p>
                </article>
              ))}
            </div>
            <p><Link href="/blog">→ view all posts</Link></p>
          </section>

          {/* Photos Section */}
          <section id="photos" className="section">
            <h2>{photos.title}</h2>
            <p>{photos.description}</p>
            <div className="photo-grid">
              <div className="photo-placeholder">[photo 1]</div>
              <div className="photo-placeholder">[photo 2]</div>
              <div className="photo-placeholder">[photo 3]</div>
              <div className="photo-placeholder">[photo 4]</div>
            </div>
            <p><Link href="/photos">{photos.galleryText}</Link></p>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
            <h2>{projects.title}</h2>
            <div className="projects">
              {projects.items.map((project, index) => (
                <div key={index} className="project">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.link}>{project.linkText}</a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section">
            <h2>{contact.title}</h2>
            <p>{contact.description}</p>
            <div className="contact-links">
              {contact.links.map((link, index) => (
                <a key={index} href={link.href}>{link.label}</a>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p><SafeText>{footer}</SafeText></p>
        </footer>
      </div>

      <style jsx>{`
        .container {
          font-family: 'Courier New', monospace;
          background-color: #f5f5f5;
          background-image: radial-gradient(circle, #333 1px, transparent 1px);
          background-size: 20px 20px;
          min-height: 100vh;
          padding: 20px;
          line-height: 1.6;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
          background-color: rgba(255, 255, 255, 0.9);
          padding: 30px;
          border-radius: 10px;
          border: 2px solid #333;
        }

        .site-title {
          font-size: 2.5em;
          margin: 0 0 10px 0;
          color: #333;
          text-decoration: underline;
          text-decoration-style: wavy;
          -webkit-text-decoration-style: wavy;
          text-decoration-color: #333;
          -webkit-text-decoration-color: #333;
          text-underline-offset: 3px;
          -webkit-text-underline-offset: 3px;
        }

        .tagline {
          font-size: 1.1em;
          margin: 0;
          color: #333;
          font-style: italic;
        }

        .nav {
          text-align: center;
          margin-bottom: 40px;
          background-color: rgba(255, 255, 255, 0.9);
          padding: 20px;
          border-radius: 10px;
          border: 2px solid #333;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          overflow: hidden;
        }

        .nav a {
          color: #333;
          text-decoration: none;
          font-weight: bold;
          padding: 8px 15px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .nav a:hover {
          background-color: #333;
          color: #fff;
          border-radius: 5px;
        }

        .main {
          max-width: 800px;
          margin: 0 auto;
        }

        .section {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 30px;
          margin-bottom: 30px;
          border-radius: 10px;
          border: 2px solid #333;
          color: #000;
        }

        .section h2 {
          color: #333;
          border-bottom: 2px solid #333;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }

        .blog-post {
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px dotted #ccc;
        }

        .blog-post:last-child {
          border-bottom: none;
        }

        .blog-post h3 {
          margin: 0 0 5px 0;
        }

        .blog-post h3 a {
          color: #333;
          text-decoration: none;
        }

        .blog-post h3 a:hover {
          text-decoration: underline;
        }

        .post-date {
          color: #666;
          font-size: 0.9em;
          margin: 0 0 10px 0;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 20px 0;
        }

        .photo-placeholder {
          background-color: #ddd;
          border: 2px dashed #999;
          padding: 40px;
          text-align: center;
          color: #666;
          border-radius: 5px;
        }

        .projects {
          display: grid;
          gap: 20px;
        }

        .project {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #fafafa;
        }

        .project h3 {
          margin: 0 0 10px 0;
          color: #333;
        }

        .project a {
          color: #333;
          text-decoration: none;
          font-weight: bold;
          border-bottom: 1px solid #333;
        }

        .project a:hover {
          background-color: #333;
          color: #fff;
          padding: 2px 4px;
        }

        .contact-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .contact-links a {
          color: #333;
          text-decoration: none;
          font-weight: bold;
          padding: 10px 20px;
          border: 2px solid #333;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .contact-links a:hover {
          background-color: #333;
          color: #fff;
        }

        .footer {
          text-align: center;
          margin-top: 40px;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 10px;
          border: 2px solid #333;
        }

        .footer p {
          margin: 0;
          color: #666;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 10px;
            overflow-x: hidden;
          }
          
          .site-title {
            font-size: 2em;
            text-decoration: underline;
            text-decoration-style: solid;
            -webkit-text-decoration-style: solid;
            border-bottom: 2px wavy #333;
            -webkit-border-bottom: 2px wavy #333;
            padding-bottom: 5px;
          }
          
          .nav {
            padding: 10px;
            gap: 5px;
            width: 100%;
            box-sizing: border-box;
          }
          
          .nav a {
            padding: 4px 8px;
            font-size: 0.85em;
            margin: 0;
            min-width: auto;
            flex-shrink: 1;
          }
          
          .photo-grid {
            grid-template-columns: 1fr;
          }
          
          .contact-links {
            flex-direction: column;
          }

          .section {
            padding: 20px;
            margin-left: 0;
            margin-right: 0;
          }

          .header {
            padding: 20px;
            margin-left: 0;
            margin-right: 0;
          }

          .main {
            width: 100%;
            margin: 0;
            padding: 0;
          }
        }

        /* Global styles reset */
        :global(html, body) {
          padding: 0;
          margin: 0;
          font-family: 'Courier New', monospace;
        }

        :global(a) {
          color: inherit;
          text-decoration: none;
        }

        :global(*) {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}