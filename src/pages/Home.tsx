import Hero from '../components/home/Hero'
import WhyLibya from '../components/home/WhyLibya'
import ModelSteps from '../components/home/ModelSteps'
import ServicesPreview from '../components/home/ServicesPreview'
import CtaBand from '../components/home/CtaBand'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyLibya />
      <ModelSteps />
      <ServicesPreview />
      <CtaBand />
    </main>
  )
}
