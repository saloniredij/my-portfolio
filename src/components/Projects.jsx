import { useState } from 'react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const allProjects = [
    {
      id: 1,
      title: 'VisionBros',
      category: 'ai',
      screenshots: ['screenshot1.jpg'],
      description:
        'Engineered natural language query-based object retrieval on 100 long surveillance videos using CLIP embeddings. Leveraged ChromaDB for scalable storage, indexing and quick retrieval of 100,000 frame embeddings. Deployed Streamlit app to present top 10 retrieval results and collect user feedback to generate new dataset. Implemented feedback loop with hard negative mining trained with transformer architecture using feedback data collected from the UI, boosting object retrieval accuracy from 30% to 70%.',
      descriptionPreview:
        'Engineered natural language query-based object retrieval on 100 long surveillance videos using CLIP embeddings. Leveraged ChromaDB for scalable storage, indexing and quick retrieval of 100,000 frame embeddings.',
      techStack: ['Python', 'AI Search', 'ChromaDB', 'CLIP Model'],
      githubLink: 'https://github.com/yourusername/visionbros',
      demoLink: ''
    },
    {
      id: 2,
      title: 'VisionBros2',
      category: 'ai',
      screenshots: ['screenshot1.jpg'],
      description:
        'Engineered natural language query-based object retrieval on 100 long surveillance videos using CLIP embeddings...',
      descriptionPreview:
        'Engineered natural language query-based object retrieval on 100 long surveillance videos using CLIP embeddings.',
      techStack: ['Python', 'AI Search', 'ChromaDB', 'CLIP Model'],
      githubLink: 'https://github.com/yourusername/visionbros',
      demoLink: ''
    },
    {
      id: 3,
      title: 'VisionBros3',
      category: 'ai',
      screenshots: ['screenshot1.jpg'],
      description:
        'Engineered natural language query-based object retrieval on 100 long surveillance videos using CLIP embeddings...',
      descriptionPreview:
        'Engineered natural language query-based object retrieval on 100 long surveillance videos using CLIP embeddings.',
      techStack: ['Python', 'AI Search', 'ChromaDB', 'CLIP Model'],
      githubLink: 'https://github.com/yourusername/visionbros',
      demoLink: ''
    },
    {
      id: 4,
      title: 'VisionBros4',
      category: 'ai',
      screenshots: ['screenshot1.jpg'],
      description:
        'Engineered natural language query-based object retrieval on 100 long surveillance videos using CLIP embeddings...',
      descriptionPreview:
        'Engineered natural language query-based object retrieval on 100 long surveillance videos using CLIP embeddings.',
      techStack: ['Python', 'AI Search', 'ChromaDB', 'CLIP Model'],
      githubLink: 'https://github.com/yourusername/visionbros',
      demoLink: ''
    }
  ]

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'aiml', label: 'AI/ML' },
    { id: 'software', label: 'Software Engineering' }
  ]

  const filteredProjects =
    selectedCategory === 'all'
      ? allProjects
      : selectedCategory === 'aiml'
      ? allProjects.filter((p) => p.category === 'ai' || p.category === 'ml')
      : allProjects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-content">
          {/* Heading */}
          <div className="projects-heading-wrapper">
            <h2 className="projects-heading">My Projects</h2>
          </div>

          {/* Categories */}
          <div className="projects-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`projects-category-tab ${
                  selectedCategory === category.id ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Grid of cards */}
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article key={project.id} className="project-card">
                  {/* Image */}
                  <div className="project-card-screenshot-wrapper">
                    {project.screenshots && project.screenshots.length > 0 ? (
                      <img
                        src={project.screenshots[0]}
                        alt={`${project.title} screenshot`}
                        className="project-screenshot"
                      />
                    ) : (
                      <div className="project-screenshot-placeholder">
                        <svg
                          className="placeholder-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="project-card-body">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-description-preview">
                      {project.descriptionPreview}
                    </p>

                    <div className="techstack-tags">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-card-links">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="projects-empty">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
