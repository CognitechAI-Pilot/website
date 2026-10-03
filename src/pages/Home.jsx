import { useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import CaseStudy from '../components/CaseStudy'
import Engagement from '../components/Engagement'
import Pricing from '../components/Pricing'
import Roi from '../components/Roi'
import Team from '../components/Team'
import Contact from '../components/Contact'

export default function Home() {
  // Lifted so an engagement phase can highlight its pricing tier, and the
  // pricing CTAs can preselect the enquiry purpose.
  const [highlightedTier, setHighlightedTier] = useState(null)
  const [enquiryPurpose, setEnquiryPurpose] = useState(null)

  return (
    <>
      <main>
        <Hero />
        <About />
        <Portfolio />
        <CaseStudy />
        <Engagement onSelectTier={setHighlightedTier} />
        <Pricing onSelectPurpose={setEnquiryPurpose} highlightedTier={highlightedTier} />
        <Roi />
        <Team />
      </main>
      <Contact purpose={enquiryPurpose} />
    </>
  )
}
