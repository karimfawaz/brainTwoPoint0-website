import Header from './components/header'
import Freelance from './components/freelance'
import Contact from './components/contact'
import About from './components/about'


export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll no-scrollbar ">
      <Header />
      {/* <About />
      <Freelance /> */}

      <Contact />
    </main>
  )
}
