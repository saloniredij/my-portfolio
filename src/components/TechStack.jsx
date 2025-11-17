const TechStack = () => {
  const techCategories = [
    {
      id: 'software',
      title: 'Software Engineering',
      subtitle: '(Backend + Full-Stack)',
      sections: [
        {
          label: 'Languages & Frameworks',
          items: ['Java (Spring Boot)', 'Python', 'JavaScript (React, Node)', 'SQL/NoSQL']
        },
        {
          label: 'Core Tools',
          items: ['Redis', 'Kafka', 'REST APIs', 'Git', 'Docker', 'Postman', 'Jenkins/GitHub Actions', 'Splunk']
        },
        {
          label: 'Databases',
          items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Snowflake']
        },
        {
          label: 'Cloud Platforms',
          items: ['AWS', 'GCP', 'Azure']
        },
        {
          label: 'Engineering Capabilities',
          items: ['Scalable microservices', 'API design', 'Event-driven architecture', 'UI→API integration']
        }
      ],
      capability: 'Full-stack build + backend architecture mastery + production-ready infrastructure'
    },
    {
      id: 'ai',
      title: 'AI Application Engineering',
      subtitle: null,
      sections: [
        {
          label: 'Tech',
          items: ['LLMs', 'RAG', 'Prompt Engineering', 'Agentic AI (Autogen, LangChain)', 'PyTorch', 'TensorFlow', 'HuggingFace']
        },
        {
          label: 'Vector Databases',
          items: ['Pinecone', 'ChromaDB']
        },
        {
          label: 'Search & Analytics',
          items: ['Elasticsearch', 'OpenSearch']
        },
        {
          label: 'Capabilities',
          items: ['Intelligent feature development', 'Autonomous agent workflows', 'Inference optimization']
        }
      ],
      capability: 'Building intelligent app features and autonomous systems'
    }
  ]

  return (
    <section id="techstack" className="techstack-section">
      <div className="techstack-container">
        <div className="techstack-content">
          {/* Heading */}
          <div className="techstack-heading-wrapper">
            <h2 className="techstack-heading">Tech Stack & Engineering Strengths</h2>
            <p className="techstack-subtitle">
              System design and engineering capabilities
            </p>
          </div>

          {/* Categories Grid - Vertical Stacked Layout */}
          <div className="techstack-categories">
            {techCategories.map((category) => (
              <div key={category.id} className="techstack-category">
                {/* Category Header */}
                <div className="techstack-category-header">
                  <h3 className="techstack-category-title">
                    {category.title}
                    {category.subtitle && (
                      <span className="techstack-category-subtitle"> {category.subtitle}</span>
                    )}
                  </h3>
                  {category.capability && (
                    <p className="techstack-category-capability">{category.capability}</p>
                  )}
                </div>

                {/* Sections within category - Vertical Stack */}
                <div className="techstack-category-sections">
                  {category.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="techstack-section-group">
                      <h4 className="techstack-section-label">{section.label}</h4>
                      <div className="techstack-technologies">
                        {section.items.map((item, itemIndex) => (
                          <span key={itemIndex} className="techstack-tech-pill">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack