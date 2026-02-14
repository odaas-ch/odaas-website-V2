import Hero from '../components/Hero'
import ValueProp from '../components/ValueProp'
import HowItWorks from '../components/HowItWorks'
import DemoPreview from '../components/DemoPreview'
import Features from '../components/Features'
import Differenzierung from '../components/Differenzierung'
import About from '../components/About'
import Contact from '../components/Contact'

function LandingPage() {
  return (
    <>
      <Hero />
      <ValueProp />
      <HowItWorks />
      <Differenzierung />
      <DemoPreview />
      <Features />
      {/* <About /> */}
      <Contact />
    </>
  )
}

export default LandingPage
