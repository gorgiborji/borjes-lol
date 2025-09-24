// pages/index.js
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>borjes.lol</title>
        <meta name="description" content="Personal site - blogs, photos, projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        {/* Header */}
        <header className="header">
          <h1 className="site-title">borjes.lol</h1>
          <p className="tagline">born too late and/or too early for most things </p>
        </header>

        {/* Navigation */}
        <nav className="nav">
          <a href="#about">about</a>
          <a href="#blog">writing</a>
          <a href="#photos">pics</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </nav>

        {/* Main Content */}
        <main className="main">
          {/* About Section */}
          <section id="about" className="section">
            <h2>about</h2>
            <p>
             08.17.2025 – hey, i&apos;m matt. i&apos;m based in chicago and currently work on the sales team at stripe. things i&apos;m into include film, retro hardware (gaming hardware especially), and i&apos;m working on getting back into weightlifting.

            </p>
            <p>
        
            </p>
          </section>
      

          {/* Blog Section */}
          <section id="blog" className="section">
            <h2>writing</h2>
            <div className="blog-posts">
              <article className="blog-post">
                <h3><a href="/posts/first-post">Getting Started with Next.js</a></h3>
                <p className="post-date">March 15, 2024</p>
                <p>My journey into modern web development...</p>
              </article>
              <article className="blog-post">
                <h3><a href="/posts/second-post">Why I Love Low-Tech Design</a></h3>
                <p className="post-date">March 10, 2024</p>
                <p>Sometimes simple is better...</p>
              </article>
              <article className="blog-post">
                <h3><a href="/posts/third-post">Building My First Personal Site</a></h3>
                <p className="post-date">March 5, 2024</p>
                <p>From WordPress to Next.js...</p>
              </article>
            </div>
            <p><a href="/blog">→ view all posts</a></p>
          </section>

          {/* Photos Section */}
          <section id="photos" className="section">
            <h2>pics</h2>
            <p>Some pictures I&apos;ve taken recently:</p>
            <div className="photo-grid">
              <div className="photo-placeholder">[photo 1]</div>
              <div className="photo-placeholder">[photo 2]</div>
              <div className="photo-placeholder">[photo 3]</div>
              <div className="photo-placeholder">[photo 4]</div>
            </div>
            <p><a href="/photos">→ view full gallery</a></p>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
            <h2>projects</h2>
            <div className="projects">
              <div className="project">
                <h3>borjes.lol</h3>
                <p>This website! Built with Next.js and deployed on Vercel.</p>
                <a href="https://github.com/yourusername/borjes.lol">github</a>
              </div>
              <div className="project">
                <h3>Photo Blog</h3>
                <p>A simple photo sharing app built with React.</p>
                <a href="https://photos.borjes.lol">live site</a>
              </div>
              <div className="project">
                <h3>Learning Journal</h3>
                <p>Documenting my coding journey and lessons learned.</p>
                <a href="https://journal.borjes.lol">read more</a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section">
            <h2>contact</h2>
            <p>Want to get in touch?</p>
            <div className="contact-links">
              <a href="mailto:hello@borjes.lol">email</a>
              <a href="https://twitter.com/yourusername">twitter</a>
              <a href="https://github.com/yourusername">github</a>
              <a href="https://linkedin.com/in/yourusername">linkedin</a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 borjes.lol | Made with Next.js & heart emoji & claude</p>
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
        }

        .nav a {
          color: #333;
          text-decoration: none;
          margin: 0 20px;
          font-weight: bold;
          padding: 8px 15px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
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
          }
          
          .nav a {
            margin: 5px 10px;
          }
          
          .photo-grid {
            grid-template-columns: 1fr;
          }
          
          .contact-links {
            flex-direction: column;
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