import Hero from './sections/hero'
import About from './sections/about'
import Enterprise from './sections/enterprise'
import Gotcha from './sections/gotcha'
import Playback from './sections/playback'
import Content from './sections/content'
import Freelance from './sections/freelance'
import Contact from './sections/contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Enterprise />
      <Gotcha />
      <Playback />
      <Content />
      <Freelance />
      <Contact />
    </main>
  )
}
