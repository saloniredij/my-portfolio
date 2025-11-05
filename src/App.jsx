import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        
        {/* Main content area with sections */}
        <main>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Education />


                  {/* Work in progress message */}
                  <div
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'var(--text-color)',
              transition: 'color 0.3s ease',
            }}
            className="text-gray-800 dark:text-gray-200"
          >
            building bit by bit... 😊
          </div>
          
          {/* <TechStack /> */}
          {/* <Contact /> */}
          {/* Home Section */}

        </main>
      </div>
    </ThemeProvider>
  )
}

export default App