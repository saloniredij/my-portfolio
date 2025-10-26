const About = () => {
    const educationData = [
      {
        degree: "Master's in Computer Science",
        institution: "University at Buffalo, State University New York",
        cgpa: "3.8/4.0",
        courses: [
          "Machine Learning",
          "Advanced Algorithms",
          "Deep Learning",
          "Distributed Systems"
        ]
      },
      {
        degree: "Bachelor's in Information Technology",
        institution: "D.Y. Patil RAIT (University of Mumbai)",
        cgpa: "3.7/4.0",
        courses: [
          "Data Structures",
          "Database Systems",
          "Web Development",
          "Operating Systems"
        ]
      }
    ]
  
    return (
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            {/* Summary */}
            <div className="about-summary">
              <h2 className="about-heading">About Me</h2>
              <p className="about-text">
                I'm a passionate Full-Stack Software Engineer with a strong background in AI and Machine Learning. 
                My journey in tech has been driven by curiosity and a desire to create innovative solutions that 
                make a real impact. I love working with modern technologies and solving complex problems through 
                code. When I'm not coding, I'm involved in social volunteering and contributing to open-source projects.
              </p>
            </div>
  
            {/* Education Cards */}
            <div className="education-grid">
              {educationData.map((edu, index) => (
                <div key={index} className="education-card">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  <div className="education-cgpa">
                    <span className="cgpa-label">CGPA:</span>
                    <span className="cgpa-value">{edu.cgpa}</span>
                  </div>
                  <div className="education-courses">
                    <h4 className="courses-heading">Relevant Courses:</h4>
                    <ul className="courses-list">
                      {edu.courses.map((course, idx) => (
                        <li key={idx} className="course-item">{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About