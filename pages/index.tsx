import { useRef } from 'react'
import Layout from '~/components/Layout'
import Features from '~/components/pages/Home/Features'
import Hero from '~/components/pages/Home/Hero'
import CTAImage from '~/components/pages/Home/CTAImage'
import Process from '~/components/pages/Home/Process'
import Products from '~/components/pages/Home/Products'
import Pricing from '~/components/pages/Home/Pricing'
import Contact from '~/components/pages/Home/Contact'
import CTAImageCustom from '~/components/pages/Home/CTAImageCustom'
import HomeContext from '~/context/HomeContext'

export default function Home() {
  const contactRef = useRef(null)

  return (
    <HomeContext.Provider value={{ contactRef }}>
      <Layout>
        <Hero />
        <Features />
        <CTAImage />
        <Process />
        <Products />
        <Pricing />
        <CTAImageCustom />
        <Contact />
      </Layout>
    </HomeContext.Provider>
  )
}
