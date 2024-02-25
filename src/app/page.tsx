import Header from './sections/header'
import Freelance from './sections/freelance'
import Contact from './sections/contact'
import About from './sections/about'
import Software from './sections/software'
import Navbar from './common/navbar'
import Footer from './common/footer'
import Team from './sections/team'


export default function Home() {
  return (

    <main>
      <Navbar />
      <Header />
      <About />
      {/* <Software /> */}
      <Freelance />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
