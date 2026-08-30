import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import DeliveryCoWorker from './components/DeliveryCoWorker'
import Framework from './components/Framework'
import Customers from './components/Customers'
import Roi from './components/Roi'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Contact from './components/Contact'

export default function App() {
  // Lifted so the delivery section's proof-point link can select a role tab,
  // and the pricing CTAs can preselect the enquiry purpose.
  const [activeRole, setActiveRole] = useState('delivery')
  const [enquiryPurpose, setEnquiryPurpose] = useState(null)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <DeliveryCoWorker onViewProofPoint={setActiveRole} />
        <Framework />
        <Customers activeRole={activeRole} onSelectRole={setActiveRole} />
        <Roi />
        <Pricing onSelectPurpose={setEnquiryPurpose} />
        <Team />
      </main>
      <Contact purpose={enquiryPurpose} />
    </>
  )
}
