import PageHero from '../components/about/PageHero'
import VisionMission from '../components/about/VisionMission'
import ValuesGrid from '../components/about/ValuesGrid'
import CeoMessage from '../components/about/CeoMessage'
import SectorsGrid from '../components/about/SectorsGrid'

export default function About() {
  return (
    <main>
      <PageHero
        eyebrowEn="About Global Gate"
        eyebrowAr="عن البوابة العالمية"
        titleEn="The Strategic Partner Between Capital and Opportunity"
        titleAr="الشريك الاستراتيجي بين رأس المال والفرصة"
        subtitleEn="Bridging global capital with the Libyan market through trust, expertise, and local depth."
        subtitleAr="نربط رأس المال العالمي بالسوق الليبي من خلال الثقة والخبرة والعمق المحلي."
      />
      <VisionMission />
      <ValuesGrid />
      <CeoMessage />
      <SectorsGrid />
    </main>
  )
}
