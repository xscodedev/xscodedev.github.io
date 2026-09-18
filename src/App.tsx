import { About } from './components/About'
import { Approach } from './components/Approach'
import { Architecture } from './components/Architecture'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Services } from './components/Services'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Architecture />
        <Approach />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
