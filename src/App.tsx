import { projects } from './data/projects'
import './App.css'
import { ProjectCard } from './components/ProjectCard'
import { AboutSection } from './components/AboutSection'

function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <AboutSection />
        <h2 className="text-2xl text-black font-bold mb-8">What I've been up to</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
