import PageHero from '../components/about/PageHero'
import ServiceAccordion from '../components/services/ServiceAccordion'
import CtaBand from '../components/home/CtaBand'

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrowEn="What We Do"
        eyebrowAr="ما نفعله"
        titleEn="Five Pillars of Service"
        titleAr="خمسة محاور للخدمة"
        subtitleEn="Every engagement is bespoke. No generic solutions."
        subtitleAr="كل تعاون مصمم خصيصاً. لا حلول جاهزة."
      />
      <ServiceAccordion />
      <CtaBand
        headlineOverride={{
          en: "Ready to explore a specific service?",
          ar: "هل أنت مستعد لاستكشاف خدمة محددة؟",
        }}
      />
    </main>
  )
}
