import { useState, useEffect, useRef } from 'react'

const Experience = () => {
  const [expandedProfessional, setExpandedProfessional] = useState(false)
  const [expandedLeadership, setExpandedLeadership] = useState(false)
  const [animatedCardIndex, setAnimatedCardIndex] = useState(0) // still used for highlight
  const timelineRef = useRef(null)

  const professionalExperience = [
    {
      id: 1,
      title: "AI Application Developer Intern",
      company: "Youro LLC",
      period: "June 2025 - August 2025",
      description: "",
      achievements: [
        "Built a real-time doctor–patient chat messaging feature with WebSockets in ReactJS for instant messaging, Spring Boot for backend logic and S3 buckets for storing chat history, reducing in-person follow-ups.",
        "Implemented medical chatbot using AWS Bedrock Claude Haiku, Amazon Lex and OpenSearch Knowledge Base and RAG pipeline to deliver context-aware answers, reducing repetitive patient queries by 60%.",
        "Integrated chatbot into web app with REST API calls to Lex and in-memory caching to maintain conversational context, ensuring real-time chats, better server performance and lower cloud storage costs."
      ],
      technologies: []
    },
    {
      id: 3,
      title: "Software Developer I",
      company: "TIAA GBS",
      period: "June 2022 - July 2024",
      description: "",
      achievements: [
        "Collaborated with cross-functional teams to digitalized retirement and annuity transactions by developing applications using Unqork platform, boosting digital submissions 45% YoY.",
        "Digitalized data collection for 1500+ executives, replacing manual Excel processes, reducing transaction turnaround times from 5 business days to 2 and saving $4M annually operational costs.",
        "Developed microservices in Unqork and Springboot to support modular application architecture, enabling seamless integration with internal and external systems.",
        "Diagnosed and resolved production and UAT issues by analyzing Splunk logs, identifying root causes to minimize client impact and improve system reliability.",
        "Conducted code reviews and performed unit testing for new application features to ensure high-quality deliverables, minimizing possibilities of production issues.",
        "Redesigned UI across 10 applications, achieving 100% visual consistency with organizational branding.",
        "Designed and demonstrated MVPs for Wealth Asset Management team to support strategic business decisions during migration from legacy platforms.",
        "Collaborated in Agile delivery processes with stakeholders and cross-functional teams, contributing to sprint planning and retrospectives, ensuring efficient project delivery and continuous process improvement."
      ],
      awards: [
        "TIAA Innovation Team Award 2023",
        "Performer for Quarter II 2023, Quarter IV 2023",
        "Gold and Silver awards for Star Performer of PI 2 2023 and PI 1 2024"
      ],
      technologies: []
    },
    {
      id: 4,
      title: "Research Assistant",
      company: "D.Y. Patil University",
      period: "January 2021 - May 2022",
      description: "",
      achievements: [],
      technologies: []
    },
    {
      id: 5,
      title: "Machine Learning Intern",
      company: "GlobalShala",
      period: "November 2021 - March 2022",
      description: "",
      achievements: [],
      technologies: []
    },
    {
      id: 6,
      title: "Web Developer Intern",
      company: "Cynthians Edtech",
      period: "April 2021 - June 2021",
      description: "",
      achievements: [],
      technologies: []
    }
  ]

  const leadershipExperience = [
    {
      id: 1,
      title: "McKinsey Forward Learner",
      organization: "McKinsey & Company",
      period: "October 2025 - December 2025",
      description: "",
      achievements: [],
      technologies: []
    },
    {
      id: 2,
      title: "Student Assistant",
      organization: "University at Buffalo",
      period: "January 2025 - Present",
      description: "",
      achievements: [
        "Assisted over 200 students, faculty, and visitors daily at the Harriman Hall front desk, providing exceptional customer service.",
        "Supported 30+ campus events by coordinating logistics, setting up spaces, and supervising operations.",
        "Developed strong leadership, teamwork, and organizational skills through hands-on experience in a dynamic university environment."
      ],
      technologies: []
    },
    {
      id: 3,
      title: "Tutor",
      organization: "Western New York Community School (Graduate School of Education, University at Buffalo - Brainy Bulls Initiative)",
      period: "January 2025 - June 2025",
      description: "",
      achievements: [
        "Provided academic support and tutoring services to students through the Brainy Bulls initiative, funded by the Graduate School of Education at University at Buffalo.",
        "Helped students overcome academic challenges and build confidence in their learning abilities.",
        "Collaborated with educational programs to enhance student learning outcomes in the Western New York community."
      ],
      technologies: []
    },
    {
      id: 4,
      title: "STEM Outreach Volunteer",
      organization: "University at Buffalo",
      period: "January 2025 - February 2025",
      description: "",
      achievements: [
        "Assisted students of 5th and 8th grade in developing and executing hands-on projects as part of the STEM outreach program in collaboration with National Grid and University at Buffalo, SUNY.",
        "Supported coordination of STEM activities and helped students apply theoretical concepts to real-world engineering challenges.",
        "Contributed to educational initiatives that inspire young learners to pursue careers in science, technology, engineering, and mathematics."
      ],
      technologies: []
    },
    {
      id: 5,
      title: "Mentor",
      organization: "Angel Xpress Foundation",
      period: "June 2021 - May 2023",
      description: "",
      achievements: [
        "Worked as a mentor and tutor with young learners from diverse backgrounds, believing in the power of education to uplift individuals and communities.",
        "Found great sense of fulfillment in helping students overcome academic challenges and build confidence.",
        "Developed strong interpersonal and communication skills while supporting students' educational growth and personal development."
      ],
      technologies: []
    },
    {
      id: 6,
      title: "Event Coordinator",
      organization: "ACM, Association for Computing Machinery",
      period: "August 2019 - June 2020",
      description: "",
      achievements: [
        "Coordinated computing and technology events for the Association for Computing Machinery chapter.",
        "Organized workshops, seminars, and networking events to promote learning and collaboration among students.",
        "Developed event planning and project management skills while supporting the computing community."
      ],
      technologies: []
    },
    {
      id: 7,
      title: "Volunteer",
      organization: "Ramrao Adik Institute of Technology",
      period: "November 2018 - June 2022",
      description: "",
      achievements: [
        "Volunteered for a city marathon Udaan-Run for Cause dedicated to the education of children.",
        "Tutored at nearby orphanages to support education for students from 1st grade to 10th grade.",
        "Contributed to community initiatives focused on providing educational opportunities to underprivileged children."
      ],
      technologies: []
    },
    {
      id: 8,
      title: "Public Relations Coordinator",
      organization: "SocialWing RAIT",
      period: "August 2018 - May 2019",
      description: "",
      achievements: [
        "Visited colleges and different institutions to raise funds for the orphans at Girija orphanage, Kharghar.",
        "Approached people to make them aware of the cause and responsibly sent their donations to the orphanage.",
        "Developed strong communication and public relations skills while supporting social welfare initiatives."
      ],
      technologies: []
    }
  ]

  const initialCount = 3
  const displayedProfessional = expandedProfessional
    ? professionalExperience
    : professionalExperience.slice(0, initialCount)

  const displayedLeadership = expandedLeadership
    ? leadershipExperience
    : leadershipExperience.slice(0, initialCount)

  const hasMoreProfessional = professionalExperience.length > initialCount
  const hasMoreLeadership   = leadershipExperience.length > initialCount

  // IntersectionObserver only for highlighting cards now
  useEffect(() => {
    const cards = timelineRef.current?.querySelectorAll('.timeline-card-vertical')
    if (!cards || cards.length === 0) return

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1, 0.5, 1]
    }

    const observerCallback = (entries) => {
      let mostVisibleIndex = -1
      let maxRatio = 0

      entries.forEach(entry => {
        const cardIndex = Array.from(cards).indexOf(entry.target)
        if (entry.intersectionRatio >= 0.3 && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          mostVisibleIndex = cardIndex
        }
      })

      if (mostVisibleIndex >= 0) setAnimatedCardIndex(mostVisibleIndex)
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [displayedProfessional])

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-content">
          <div className="experience-heading-wrapper">
            <h2 className="experience-heading">Experience</h2>
          </div>

          {/* Professional timeline */}
          <div className="timeline-container" ref={timelineRef}>
            <div className="timeline-wrapper vertical">
              <div className="timeline-line-vertical" />

              <div className="timeline-cards-vertical">
              {displayedProfessional.map((exp, index) => {
                const isHighlighted = animatedCardIndex === index
                return (
                  <div
                    key={exp.id}
                    className={`timeline-card-vertical ${isHighlighted ? 'highlighted' : ''}`}
                    data-card-index={index}
                  >
                    <div
                      className="timeline-card-marker-vertical"
                      data-marker-index={index}
                    />

                      <div className="timeline-card-content-vertical">
                        <h3 className="timeline-card-title-vertical">{exp.title}</h3>
                        <div className="timeline-card-company-vertical">{exp.company}</div>
                        <span className="timeline-card-period-vertical">{exp.period}</span>

                        {exp.description && (
                          <p className="timeline-card-description-vertical">
                            {exp.description}
                          </p>
                        )}

                        {exp.achievements?.length > 0 && (
                          <ul className="timeline-card-achievements-vertical">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        )}

                        {exp.awards?.length > 0 && (
                          <div className="timeline-card-awards">
                            <h4 className="awards-heading">Awards & Recognition</h4>
                            <ul className="awards-list">
                              {exp.awards.map((award, idx) => (
                                <li key={idx}>{award}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {exp.technologies?.length > 0 && (
                          <div className="timeline-card-technologies-vertical">
                            {exp.technologies.map((tech, idx) => (
                              <span key={idx} className="technology-tag-vertical">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}

                {hasMoreProfessional && (
                  <div className="timeline-expand-wrapper">
                    <button
                      className="timeline-expand-button"
                      onClick={() => setExpandedProfessional(!expandedProfessional)}
                    >
                      <svg
                        className={`timeline-expand-icon ${expandedProfessional ? 'expanded' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <svg
                        className={`timeline-expand-icon ${expandedProfessional ? 'expanded' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ marginTop: '-4px' }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span className="timeline-expand-text">
                        {expandedProfessional ? 'Show Less' : 'Show More'}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Leadership & Volunteering below */}
          <div className="leadership-section">
            <h3 className="leadership-heading">Leadership & Volunteering</h3>

            <div className="leadership-grid-wrapper">
              <div className="leadership-grid">
                {displayedLeadership.map(exp => (
                  <div key={exp.id} className="leadership-card">
                    {/* icon removed */}
                    <h4 className="leadership-card-title">{exp.title}</h4>
                    <div className="leadership-card-organization">{exp.organization}</div>
                    <span className="leadership-card-period">{exp.period}</span>

                    {exp.description && (
                      <p className="leadership-card-description">{exp.description}</p>
                    )}

                    {exp.achievements?.length > 0 && (
                      <ul className="timeline-card-achievements-vertical">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {hasMoreLeadership && (
                <div className="timeline-expand-wrapper">
                  <button
                    className="timeline-expand-button"
                    onClick={() => setExpandedLeadership(!expandedLeadership)}
                  >
                    <svg
                      className={`timeline-expand-icon ${expandedLeadership ? 'expanded' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <svg
                      className={`timeline-expand-icon ${expandedLeadership ? 'expanded' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ marginTop: '-4px' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span className="timeline-expand-text">
                      {expandedLeadership ? 'Show Less' : 'Show More'}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
