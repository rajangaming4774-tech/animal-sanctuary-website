import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { FAQS } from '../data/site'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <>
      <PageHeader title="FAQ & Trust" crumb="FAQ" lead="Everything about donations, tax benefits, adoption and how we keep your gift safe." />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 780 }}>
          <div className="box">
            {FAQS.map((f, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span style={{ color: 'var(--green-600)', transform: open === i ? 'rotate(45deg)' : 'none', transition: '.2s' }}>
                    <Icon name="sparkle" size={20} />
                  </span>
                </div>
                {open === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
