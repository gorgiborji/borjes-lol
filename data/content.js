// data/content.js
export const siteContent = {
  // Site Info
  title: "borjes.lol",
  tagline: "born too late and/or too early for most things",
  
  // About Section
  about: {
    title: "about",
    content: [
      "08.17.2025 – hey, i'm matt. i'm based in chicago and currently work on the sales team at stripe. things i'm into include film, retro hardware (gaming hardware especially), and i'm working on getting back into weightlifting."
    ]
  },

  // Navigation
  nav: [
    { label: "about", href: "#about" },
    { label: "writing", href: "#blog" },
    { label: "pics", href: "#photos" },
    { label: "projects", href: "#projects" },
    { label: "contact", href: "#contact" }
  ],

  // Blog Posts
  blog: {
    title: "writing",
    posts: [
      {
        title: "Getting Started with Next.js",
        date: "March 15, 2024",
        preview: "My journey into modern web development...",
        slug: "first-post"
      },
      {
        title: "Why I Love Low-Tech Design", 
        date: "March 10, 2024",
        preview: "Sometimes simple is better...",
        slug: "second-post"
      },
      {
        title: "Building My First Personal Site",
        date: "March 5, 2024", 
        preview: "From WordPress to Next.js...",
        slug: "third-post"
      }
    ]
  },

  // Photos Section
  photos: {
    title: "pics",
    description: "Some pictures I've taken recently:",
    galleryText: "→ view full gallery"
  },

  // Projects
  projects: {
    title: "projects",
    items: [
      {
        name: "borjes.lol",
        description: "This website! Built with Next.js and deployed on Vercel.",
        link: "https://github.com/gorgiborji/borjes-lol",
        linkText: "github"
      },
      {
        name: "Photo Blog", 
        description: "A simple photo sharing app built with React.",
        link: "https://photos.borjes.lol",
        linkText: "live site"
      },
      {
        name: "Learning Journal",
        description: "Documenting my coding journey and lessons learned.",
        link: "https://journal.borjes.lol", 
        linkText: "read more"
      }
    ]
  },

  // Contact
  contact: {
    title: "contact",
    description: "Want to get in touch?",
    links: [
      { label: "email", href: "mailto:hello@borjes.lol" },
      { label: "twitter", href: "https://x.com/ultraremixmatt" },
      { label: "github", href: "https://github.com/gorgiborji" },
      { label: "linkedin", href: "https://linkedin.com/in/yourusername" }
    ]
  },

  // Footer
  footer: "© 2025 borjes.lol | Made with Next.js & heart emoji & claude"
}