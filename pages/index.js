import Head from 'next/head'

import Nav from '../components/Nav'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'




export default function Home() {
  return (
    <div  >

      <Nav />
      <Head>
        <title>Brain 2.0</title>
      </Head>

      <Header />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </div>
  )
}


{/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" /> */}