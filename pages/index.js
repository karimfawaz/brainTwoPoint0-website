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
        <title>Brain 2.0 - Driven by Values, Powered by Intellect.</title>
        <meta name="description" content="Brain 2.0's purpose is to develop efficient software solutions to help our clients with their desired activities." />

        <meta name="keywords" content="Brain 2.0, Lebanon, CSS, HTML, JS, BrainTwoPoint0, braintwopoint0, brain, Brain, brain 20, braintwopointO, Flutter, Beirut, Freelancing, Projects, Development, Web Development, Web, Mobile, Android, Coding" />


        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <meta name="author" content="Karim Fawaz" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet" />
      
      <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
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
