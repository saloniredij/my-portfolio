import { useState, useRef, useEffect } from 'react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedCard, setExpandedCard] = useState(null)
  const sliderRef = useRef(null)
  const containerRef = useRef(null)

  const allProjects = [
    {
      id: 1,
      title: "VisionBros",
      category: "ai",
      screenshots: ["/screenshot1.jpg", "/screenshot2.jpg"],
      description: "Engineered natural language query-based object retrieval on 100 long surveillance videos using CLIP embeddings. Leveraged ChromaDB for scalable storage, indexing and quick retrieval of 100,000 frame embeddings. Deployed Streamlit app to present top 10 retrieval results and collect user feedback to generate new dataset. Implemented feedback loop with hard negative mining trained with transformer architecture using feedback data collected from the UI, boosting object retrieval accuracy from 30% to 70%.",
      descriptionPreview: "Engineered natural language query-based object retrieval on 100 long surveillance videos using CLIP embeddings. Leveraged ChromaDB for scalable storage, indexing and quick retrieval of 100,000 frame embeddings.",
      techStack: ["Python", "AI Search", "ChromaDB", "CLIP Model"],
      githubLink: "https://github.com/yourusername/visionbros",
      demoLink: ""
    },
    // {
    //   id: 2,
    //   title: "Project 2",
    //   category: "ml",
    //   screenshots: ["/screenshot3.jpg"],
    //   description: "Full description of Project 2...",
    //   descriptionPreview: "Preview description of Project 2...",
    //   techStack: ["PyTorch", "Python", "Docker"],
    //   githubLink: "https://github.com/yourusername/project2",
    //   demoLink: "https://project2-demo.com"
    // },
    // {
    //   id: 3,
    //   title: "Project 3",
    //   category: "software",
    //   screenshots: ["/screenshot4.jpg", "/screenshot5.jpg"],
    //   description: "Full description of Project 3...",
    //   descriptionPreview: "Preview description of Project 3...",
    //   techStack: ["Node.js", "MongoDB", "Express"],
    //   githubLink: "https://github.com/yourusername/project3",
    //   demoLink: ""
    // },
    // {
    //   id: 4,
    //   title: "Project 4",
    //   category: "ai",
    //   screenshots: ["/screenshot6.jpg"],
    //   description: "Full description of Project 4...",
    //   descriptionPreview: "Preview description of Project 4...",
    //   techStack: ["TensorFlow", "Python", "FastAPI"],
    //   githubLink: "https://github.com/yourusername/project4",
    //   demoLink: "https://project4-demo.com"
    // },
  ]

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'AI' },
    { id: 'ml', label: 'ML' },
    { id: 'software', label: 'Software Engineering' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory)

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0)
    setExpandedCard(null)
  }, [selectedCategory])

  // Show 2 cards at a time
  const cardsToShow = 2
  const cardWidthPercent = 100 / cardsToShow // 50% per card
  const cardGap = 2 // rem gap between cards

  const handleNext = () => {
    if (filteredProjects.length <= cardsToShow) return
    const maxIndex = filteredProjects.length - cardsToShow
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handlePrev = () => {
    if (filteredProjects.length <= cardsToShow) return
    const maxIndex = filteredProjects.length - cardsToShow
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const handleCardClick = (projectId) => {
    if (expandedCard === projectId) {
      setExpandedCard(null)
    } else {
      setExpandedCard(projectId)
    }
  }

  const handleCloseExpanded = () => {
    setExpandedCard(null)
  }

  // Calculate transform for slider - show 2 cards at a time
  const getTransform = () => {
    if (filteredProjects.length === 0) return 'translateX(0)'
    // Calculate the width of one card including gap
    const cardWidth = `calc((100% - ${cardGap}rem) / ${cardsToShow})`
    // Move by currentIndex * (cardWidth + gap)
    const offset = currentIndex * (100 / cardsToShow)
    return `translateX(-${offset}%)`
  }

  // Handle Escape key to close expanded card
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && expandedCard) {
        handleCloseExpanded()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [expandedCard])

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-content">
          {/* Heading */}
          <div className="projects-heading-wrapper">
            <h2 className="projects-heading">Projects</h2>
          </div>

          {/* Category Filter */}
          <div className="projects-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`projects-category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <>
              {/* Overlay for expanded card */}
              {expandedCard && (
                <div
                  className="project-card-overlay"
                  onClick={handleCloseExpanded}
                />
              )}

              {/* Projects Slider */}
              <div className="projects-slider-wrapper" ref={containerRef}>
                <div 
                  className="projects-slider"
                  ref={sliderRef}
                  style={{ transform: getTransform() }}
                >
                  {filteredProjects.map((project, idx) => {
                    return (
                      <div
                        key={project.id}
                        className={`project-card ${expandedCard === project.id ? 'expanded' : ''}`}
                        onClick={() => handleCardClick(project.id)}
                      >
                        {/* Part 1: Screenshots */}
                        <div className="project-card-screenshots">
                          {project.screenshots && project.screenshots.length > 0 ? (
                            <div className="screenshots-carousel">
                              {project.screenshots.map((screenshot, screenshotIdx) => (
                                <img
                                  key={screenshotIdx}
                                  src={screenshot}
                                  alt={`${project.title} screenshot ${screenshotIdx + 1}`}
                                  className="project-screenshot"
                                />
                              ))}
                            </div>
                          ) : (
                            <div className="project-screenshot-placeholder">
                              <svg className="placeholder-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Part 2: Description */}
                        <div className="project-card-description">
                          <h3 className="project-card-title">{project.title}</h3>
                          <div className="project-card-text">
                            {expandedCard === project.id ? (
                              <p className="project-description-full">{project.description}</p>
                            ) : (
                              <p className="project-description-preview">{project.descriptionPreview}</p>
                            )}
                          </div>
                        </div>

                        {/* Part 3: Tech Stack */}
                        <div className="project-card-techstack">
                          <div className="techstack-tags">
                            {project.techStack.map((tech, techIdx) => (
                              <span key={techIdx} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>

                        {/* Part 4: Links */}
                        <div className="project-card-links" onClick={(e) => e.stopPropagation()}>
                          <div className="project-link-left">
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link github-link"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                                </svg>
                                <span>GitHub</span>
                                <svg className="link-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 8v9m0-9h-9" transform="rotate(45 12 12)" />
                                </svg>
                              </a>
                            )}
                          </div>
                          <div className="project-link-right">
                            {project.demoLink && (
                              <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link demo-link"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                <span>Live Demo</span>
                                <svg className="link-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 8v9m0-9h-9" transform="rotate(45 12 12)" />
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Close button for expanded view */}
                        {expandedCard === project.id && (
                          <button
                            className="project-card-close"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleCloseExpanded()
                            }}
                          >
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Navigation Arrows - Show when more than 2 projects */}
                {filteredProjects.length > cardsToShow && (
                  <>
                    <button
                      className="projects-slider-arrow left"
                      onClick={handlePrev}
                      aria-label="Previous projects"
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      className="projects-slider-arrow right"
                      onClick={handleNext}
                      aria-label="Next projects"
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </>
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