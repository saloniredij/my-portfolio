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
      "Built a real-time doctor-patient chat messaging feature with WebSockets in ReactJS for instant messaging, Spring Boot for backend logic and S3 buckets for storing chat history, reducing in-person follow-ups.",
      "Implemented medical chatbot using AWS Bedrock Claude Haiku, Amazon Lex and OpenSearch Knowledge Base and RAG pipeline to deliver context-aware answers, reducing repetitive patient queries by 60%.",
      "Integrated chatbot into web app with REST API calls to Lex and in-memory caching to maintain conversational context, ensuring real-time chats, better server performance and lower cloud storage costs."
    ],
    technologies: [
      "ReactJS",
      "WebSockets",
      "Spring Boot",
      "AWS Bedrock",
      "Amazon Lex",
      "OpenSearch",
      "RAG",
      "REST APIs",
      "Amazon S3"
    ]
  },
  {
    id: 2,
    title: "Graduate Research Assistant - Machine Learning",
    company: "University at Buffalo, SUNY",
    period: "May 2025 - Present",
    description: "",
    achievements: [
      "Developing segmentation pipeline for automated detection of HRF’s and HRS’s in Optical Coherence Tomography (OCT) scans of eyes, accelerating biomarker identification to support early diagnosis of age macular degeneration and reduce manual screening time."
    ],
    technologies: [
      "Python",
      "PyTorch",
      "Medical Imaging",
      "Segmentation",
      "OCT"
    ]
  },
  {
    id: 3,
    title: "Software Developer I",
    company: "TIAA GBS",
    period: "June 2022 - July 2024",
    description: "",
    achievements: [
      "Led key digitalization efforts for retirement and annuity transactions using the Unqork platform, increasing digital submissions by 45 percent year over year and modernizing legacy processes.",
      "Replaced manual Excel workflows by automating data collection for 1,500 plus executives, cutting turnaround time from five days to two and delivering four million dollars in annual operational savings.",
      "Built microservices in Unqork and Spring Boot, redesigned UI across ten applications, and resolved production issues through Splunk based root cause analysis to improve system reliability and user experience.",
      "Designed MVPs that informed Wealth Asset Management’s migration strategy, and collaborated across Agile teams to support smooth delivery, effective planning, and continuous improvement."
    ],
    awards: [
      "TIAA Innovation Award 2023",
      "Performer for Quarter II 2023, Quarter IV 2023",
      "Gold and Silver awards for Star Performer of PI 2 2023 and PI 1 2024"
    ],
    technologies: [
      "Java",
      "REST APIs",
      "Unqork",
      "Spring Boot",
      "Microservices",
      "GitLab",
      "Jenkins",
      "JUnit",
      "Postman",
    ]
  },
  {
    id: 4,
    title: "Research Assistant",
    company: "D.Y. Patil University",
    period: "January 2021 - May 2022",
    description: "",
    achievements: [
      "Contributed to the design and development of an AI powered real time bus navigation system for blind and visually impaired individuals, focusing on voice assisted interaction, route detection, and intuitive user flows.",
      "Built and tested the mobile application modules using Google Maps API, GPS based tracking, Dialogflow, and Firebase to support accurate bus location updates and seamless communication between users and app.",
      "Led iterative usability testing by conducting blindfolded user trials with more than 80 participants, gathering feedback, and improving accessibility features and voice guidance accuracy.",
      "Assisted in structuring the research methodology, analyzing system performance, and documenting results for publication in the ICACC 2022 conference proceedings.",
      "Collaborated with faculty and peers to refine system architecture, validate problem statements, and ensure the solution addressed real mobility barriers faced by visually impaired commuters."
    ],
    publicationUrl:
      "https://www.itm-conferences.org/articles/itmconf/abs/2022/04/itmconf_icacc2022_02001/itmconf_icacc2022_02001.html",
    technologies: [
      "Android",
      "Firebase",
      "Google Maps API",
      "Dialogflow",
      "GPS",
      "Accessibility",
    ]
  },
  {
    id: 6,
    title: "Web Developer Intern",
    company: "Cynthians Edtech",
    period: "April 2021 - Oct 2021",
    description: "",
    achievements: [
      "Took on the challenge of replacing outdated manual attendance tracking by building a full stack attendance management system using PHP, CodeIgniter, AJAX, MySQL, and Bootstrap, giving the organization a reliable real time workflow.",
      "Transformed raw attendance data into clear, actionable insights through dashboards and Google Charts, helping teachers and admins quickly spot trends, low engagement, and irregular patterns.",
      "Eliminated error prone spreadsheets and repeated data entry by automating the entire attendance cycle, improving accuracy and day to day efficiency for educators.",
      "Worked closely with academic and operations teams to understand their pain points and shape features that made the system practical, easy to adopt, and aligned with real classroom needs."
    ],
    technologies: [
      "PHP",
      "CodeIgniter",
      "AJAX",
      "MySQL",
      "Bootstrap",
      "Google Charts"
    ]
  }
]


  const leadershipExperience = [
    {
      id: 1,
      title: "McKinsey Forward Learner",
      organization: "McKinsey & Company",
      period: "October 2025 - December 2025",
      description: "Through the McKinsey.org Forward program, I strengthened my leadership, communication, adaptability, resilience, and problem solving skills by tackling real workplace challenges, applying new tools, and driving meaningful impact in a fast paced, collaborative learning environment.",
      achievements: [],
      technologies: []
    },
    {
      id: 2,
      title: "Peer Code Mentor",
      organization: "TIAA",
      period: "April 2023 - June 2024",
      description: "As a peer code mentor at TIAA, I guided trainees and interns in Java Spring Boot and led a week long training program that helped teams across multiple levels rapidly build the skills they needed to work confidently with the Unqork Enterprise platform, strengthening both individual growth and team performance.",
      achievements: [],
      technologies: []
    },
    {
      id: 4,
      title: "Tech Lead",
      organization: "ACM, Association for Computing Machinery",
      period: "August 2019 - June 2020",
      description: "As Tech Lead for the ACM chapter, I drove the planning and execution of workshops, seminars, and tech events that strengthened community engagement and hands-on learning, building strong project management and leadership skills while creating real value for students in computing.",
      achievements: [ ],
      technologies: []
    },
    {
      id: 5,
      title: "Tutor",
      organization: "Western New York Community School",
      period: "January 2025 - June 2025",
      description: "Through the Brainy Bulls initiative, I provided focused academic support that helped students overcome learning challenges, build confidence, and improve outcomes, reflecting my commitment to expanding educational access and driving real progress in the Western New York community.",
      achievements: [      ],
      technologies: []
    },
    {
      id: 5,
      title: "Mentor & Tutor",
      organization: "Angel Xpress Foundation",
      period: "June 2021 - May 2023",
      description: "Mentoring and tutoring young learners from different backgrounds gave me the chance to help them improve their skills, boost their grades, and feel more confident in themselves, and it showed me how meaningful steady support and simple guidance can be in someone’s educational journey.",
      achievements:  [],
      technologies: []
    },
    {
      id: 6,
      title: "Public Relations Coordinator",
      organization: "SocialWing RAIT",
      period: "August 2018 - May 2019",
      description: " As a PR coordinator, I visited colleges and nearby institutions to raise funds and share the story of Girija Orphanage, spoke with people one on one about why their support mattered, ensured every donation reached the children and volunteered at the Udaan marathon to further advocate for their education.",
      achievements: [      ],
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
                        <div className="timeline-card-header-vertical">
    <h3 className="timeline-card-title-vertical">{exp.title}</h3>

    {/* Only for experiences that have a publicationUrl (Research Assistant) */}
    {exp.publicationUrl && (
      <a
        href={exp.publicationUrl}
        target="_blank"
        rel="noreferrer"
        className="timeline-card-publication-link"
      >
        <span>View publication</span>
        <span className="timeline-card-publication-icon">↗</span>
      </a>
    )}
  </div>
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
