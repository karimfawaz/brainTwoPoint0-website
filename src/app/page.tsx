import Header from './components/header'
import Freelance from './components/freelance'
import Contact from './components/contact'
import About from './components/about'


export default function Home() {
  return (

    <main className="h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll no-scrollbar supports-[height:100cqh]:h-[100cqh] supports-[height:100dvh]:h-[100dvh]">
      <Header />
      {/* <About />
      <Freelance /> */}

      <Contact />
    </main>
  )
}
