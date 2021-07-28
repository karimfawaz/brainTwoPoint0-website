import Head from 'next/head'
import Nav from '../components/Nav'
import Company from '../components/Company'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (

    <div  >

      <Head>
        <title>BrainTwoPoint0</title>
        <meta name="description" content="Brain 2.0's purpose is to develop efficient software solutions to help our clients with their desired activities." />

        <meta name="keywords" content="BrainTwoPoint0, Brain 2.0, Lebanon, CSS, HTML, JS, BrainTwoPoint0, braintwopoint0, brain, Brain, brain 20, braintwopointO, Flutter, Beirut, Freelancing, Projects, Development, Web Development, Web, Mobile, Android, Coding" />


        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet" />
      
      <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />

      <link rel="canonical" href="https://www.braintwopoint0.company/" />

      <meta property="og:site_name" content="BrainTwoPoint0" />
      </Head>


      <Nav />
      <Company />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
