import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
          <TechStack />
          <Contact />
          <Footer />


        </main>
      </div>
    </ThemeProvider>
  )
}

export default App