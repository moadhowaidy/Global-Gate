import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import GoldRule from '../ui/GoldRule'
import Eyebrow from '../ui/Eyebrow'
import { useLanguage } from '../../context/LanguageContext'
import { contact } from '../../data'

export default function ContactCards() {
  const { lang } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-20 bg-[#040A2C]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 gold-grid">
          {/* Direct contact card */}
          <div className="bg-[#0A1240] p-10 rtl:text-right">
            <Eyebrow className="mb-4">
              {lang === 'en' ? 'Direct Contact' : 'تواصل مباشر'}
            </Eyebrow>
            <GoldRule className="mb-6" />
            <h2 className="font-display text-[#EDE5D0] text-2xl font-semibold mb-8 rtl:font-arabic">
              {lang === 'en' ? 'Reach Us Directly' : 'تواصل معنا مباشرة'}
            </h2>

            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-4 rtl:flex-row-reverse">
                <div className="w-8 h-8 border border-[#B8893C]/30 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-[#B8893C]" />
                </div>
                <div>
                  <p className="font-sans text-[#7A8BAA] text-xs uppercase tracking-widest mb-1">
                    {lang === 'en' ? 'Phone' : 'الهاتف'}
                  </p>
                  <a
                    href={`tel:${contact.phone}`}
                    dir="ltr"
                    className="font-sans text-[#EDE5D0] text-base hover:text-[#B8893C] transition-colors duration-200 rtl:text-right"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 rtl:flex-row-reverse">
                <div className="w-8 h-8 border border-[#B8893C]/30 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-[#B8893C]" />
                </div>
                <div>
                  <p className="font-sans text-[#7A8BAA] text-xs uppercase tracking-widest mb-1">
                    {lang === 'en' ? 'Email' : 'البريد الإلكتروني'}
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-sans text-[#EDE5D0] text-base hover:text-[#B8893C] transition-colors duration-200 break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 rtl:flex-row-reverse">
                <div className="w-8 h-8 border border-[#B8893C]/30 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-[#B8893C]" />
                </div>
                <div>
                  <p className="font-sans text-[#7A8BAA] text-xs uppercase tracking-widest mb-1">
                    {lang === 'en' ? 'Address' : 'العنوان'}
                  </p>
                  <p className="font-sans text-[#EDE5D0] text-base rtl:font-arabic">
                    {lang === 'en' ? contact.addressEn : contact.addressAr}
                  </p>
                  <p className="font-sans text-[#7A8BAA]/60 text-xs mt-0.5 rtl:font-arabic">
                    {lang === 'en' ? contact.landmarkEn : contact.landmarkAr}
                  </p>
                  <a
                    href={contact.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[#B8893C]/70 text-xs mt-1.5 inline-block hover:text-[#B8893C] transition-colors duration-200"
                  >
                    {lang === 'en' ? '↗ View on Google Maps' : '↗ عرض على خرائط جوجل'}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 rtl:flex-row-reverse">
                <div className="w-8 h-8 border border-[#B8893C]/30 flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-[#B8893C]" />
                </div>
                <div>
                  <p className="font-sans text-[#7A8BAA] text-xs uppercase tracking-widest mb-1">
                    {lang === 'en' ? 'Hours' : 'ساعات العمل'}
                  </p>
                  <p className="font-sans text-[#EDE5D0] text-base rtl:font-arabic">
                    {lang === 'en' ? contact.hoursEn : contact.hoursAr}
                  </p>
                </div>
              </li>
            </ul>

            {/* WhatsApp button — ONLY in ContactCards */}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1fb859] transition-all duration-300 uppercase tracking-widest text-xs font-semibold px-8 py-3 hover:-translate-y-0.5 rtl:flex-row-reverse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {lang === 'en' ? 'Message on WhatsApp' : 'راسلنا على واتساب'}
            </a>
          </div>

          {/* Promise card */}
          <div className="bg-[#0A1240] p-10 flex flex-col justify-between rtl:text-right">
            <div>
              <Eyebrow className="mb-4">
                {lang === 'en' ? 'Our Commitment' : 'التزامنا'}
              </Eyebrow>
              <GoldRule className="mb-6" />
              <h2 className="font-display text-[#EDE5D0] text-2xl font-semibold mb-6 rtl:font-arabic">
                {lang === 'en' ? 'What to Expect' : 'ما يمكن توقعه'}
              </h2>
              <p className="font-sans text-[#B8A880] text-sm leading-relaxed mb-6 rtl:font-arabic">
                {lang === 'en'
                  ? "Every initial conversation is confidential and without obligation. We listen first, then tell you honestly whether we can help and how."
                  : 'كل محادثة أولية سرية وبدون أي التزام. نستمع أولاً، ثم نخبرك بصدق ما إذا كنا نستطيع المساعدة وكيف.'}
              </p>

              <ul className="space-y-4">
                {(lang === 'en'
                  ? [
                      'Response within 24 hours',
                      'No generic proposals — bespoke to your situation',
                      'Honest assessment of market realities',
                      'Full confidentiality on all discussions',
                    ]
                  : [
                      'رد خلال 24 ساعة',
                      'لا مقترحات جاهزة — مخصصة لوضعك',
                      'تقييم صادق لواقع السوق',
                      'سرية تامة في جميع المناقشات',
                    ]
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 rtl:flex-row-reverse">
                    <span className="text-[#B8893C] mt-1.5 text-xs shrink-0">◆</span>
                    <span className="font-sans text-[#7A8BAA] text-sm rtl:font-arabic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-[#B8893C]/15">
              <p className="font-display text-[#B8893C] text-lg italic mb-1 rtl:font-arabic">
                {lang === 'en'
                  ? '"We don\'t sell you a study."'
                  : '"نحن لا نبيعك دراسة."'}
              </p>
              <p className="font-sans text-[#7A8BAA] text-xs uppercase tracking-widest rtl:font-arabic">
                {lang === 'en' ? '— Global Gate' : '— البوابة العالمية'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
