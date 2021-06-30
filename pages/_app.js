import '../styles/globals.css'
import { motion } from 'framer-motion'
import Router from 'next/dist/next-server/lib/router/router'
function MyApp({ Component, pageProps, router }) {
  return <motion.div key={router.route}
    initial="pageInitial"
    animate="pageAnimate"
    variants={{
      pageInitial: { opacity: 0, },
      pageAnimate: {
        opacity: 1,
      }
    }}>
    <Component {...pageProps} />
  </motion.div>
}

export default MyApp
