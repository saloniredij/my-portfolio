import { useState, useRef, useEffect } from 'react'

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master's in Computer Science (AI/ML)",
      institution: "University at Buffalo, State University of New York",
      year: "Aug 2024 - Dec 2025",
      gpa: "3.8/4.0",
      logo: "UB", 
      courses: [
        "Machine Learning",
        "Deep Learning",
        "Advanced Algorithms",
        "Distributed Systems",
        "Natural Language Processing"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Engineer in Information Technology",
      institution: "D.Y Patil RAIT, University of Mumbai",
      year: "Aug 2018 - June 2022",
      gpa: "8.5/10.0",
      logo: "RAIT",
      courses: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Development",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering"
      ]
    }
  ]

  const certificationsData = [
    {
      id: 1,
      title: "Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "June 2025",
      logo: "Azure",
      link: "#"
    },
    {
      id: 2,
      title: "AWS cloud practitioner",
      issuer: "Amazon",
      date: "Feb 2025",
      logo: "AWS",
      link: "#"
    },
    {
      id: 3,
      title: "Unqork Associate Configurator",
      issuer: "Unqork",
      date: "Jan 2024",
      logo: "Unqork",
      link: "#"
    }
  ]

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        {/* Academic Background Section */}
        <div className="education-section-wrapper">
          <div className="education-section-header">
            <h3 className="education-section-title">Academic Background</h3>
            <p className="education-section-subtitle">My educational journey and qualifications</p>
          </div>
          
          <div className="education-cards-container">
            {educationData.map((edu) => (
              <div key={edu.id} className="education-card-new">
                <div className="education-card-logo">
                  <div className="education-logo-circle">
                    {edu.logo}
                  </div>
                </div>
                <div className="education-card-content">
                  <div className="education-card-row-1">
                    <div className="education-institution-wrapper">
                      <span className="education-institution-name">{edu.institution}</span>
                    </div>
                    <span className="education-year">{edu.year}</span>
                  </div>
                  <div className="education-card-row-2">
                    <div className="education-degree-wrapper">
                      <div className="education-degree-name-wrapper">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="education-hat-icon">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                        </svg>
                        <span className="education-degree-name">{edu.degree}</span>
                      </div>
                      {/* {edu.courses && edu.courses.length > 0 && (
                        <div className="education-courses-wrapper">
                          <span className="education-courses-list">{edu.courses.join(', ')}</span>
                        </div>
                      )} */}
                    </div>
                    <span className="education-gpa">{edu.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications Section */}
        <div className="certifications-section-wrapper">
          <div className="certifications-section-header">
            <h3 className="certifications-section-title">Professional Certifications</h3>
            <p className="certifications-section-subtitle">Additional qualifications and achievements</p>
          </div>
          
          <div className="certifications-grid">
            {certificationsData.map((cert) => (
              <div key={cert.id} className="certification-card">
                {cert.link && (
                  <a href={cert.link} className="certification-link-top-right" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                )}
                <div className="certification-card-logo">
                  <div className="certification-logo-circle">
                    {cert.logo}
                  </div>
                </div>
                <div className="certification-card-content">
                  <div className="certification-card-row-1">
                    <span className="certification-title">{cert.title}</span>
                  </div>
                  <div className="certification-card-row-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="certification-award-icon">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                      <path d="M4 22h16"/>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                    </svg>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education