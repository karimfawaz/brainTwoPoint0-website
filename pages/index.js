import { motion } from 'framer-motion'

import Head from 'next/head'

import Splash from '../components/Splash'


import Nav from '../components/Nav'
import Company from '../components/Company'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'




export default function Home() {
  return (

    <div  >

      <Head>
        <title>Brain 2.0</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet" />
      </Head>
      <Splash />
      <Nav />
      <Company />
      <About />
      <Skills />
      <Projects />
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