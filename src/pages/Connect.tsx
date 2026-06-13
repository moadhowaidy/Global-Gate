import PageHero from '../components/about/PageHero'
import ContactCards from '../components/connect/ContactCards'
import MapEmbed from '../components/connect/MapEmbed'

export default function Connect() {
  return (
    <main>
      <PageHero
        eyebrowEn="Get in Touch"
        eyebrowAr="تواصل معنا"
        titleEn="Let's Start the Conversation"
        titleAr="لنبدأ المحادثة"
        subtitleEn="No generic proposals. No pressure. Just an honest conversation about your goals."
        subtitleAr="لا مقترحات جاهزة. لا ضغط. فقط محادثة صادقة حول أهدافك."
      />
      <ContactCards />
      <MapEmbed />
    </main>
  )
}
