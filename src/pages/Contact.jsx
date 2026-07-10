import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { SANCTUARY } from '../data/site'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHeader title="Contact Us" crumb="Contact" lead="Questions, partnerships, or press? We’d love to hear from you." />
      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 34, alignItems: 'start' }}>
          <div>
            {[
              { icon: 'location', title: 'Visit', text: SANCTUARY.address },
              { icon: 'phone', title: 'Call', text: `${SANCTUARY.phone} · 24×7 rescue helpline` },
              { icon: 'mail', title: 'Email', text: SANCTUARY.email },
              { icon: 'whatsapp', title: 'WhatsApp', text: SANCTUARY.whatsapp },
            ].map((c) => (
              <div className="box mb-2" key={c.title}>
                <div className="feature-row">
                  <span className="ic"><Icon name={c.icon} size={22} /></span>
                  <div>
                    <b>{c.title}</b>
                    <div className="muted">{c.text}</div>
                  </div>
                </div>
              </div>
            ))}
            <a href={`https://wa.me/${SANCTUARY.whatsapp.replace(/[^0-9]/g, '')}`} className="btn btn-primary btn-block mt-2" target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={18} /> Chat on WhatsApp
            </a>
          </div>

          <div className="box">
            {sent ? (
              <div className="success-msg" style={{ background: 'transparent', border: 'none' }}>
                <div className="ic"><Icon name="check" size={32} /></div>
                <h3>Message sent!</h3>
                <p className="muted">We’ll get back to you within 1–2 working days.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <h3>Send a message</h3>
                <div className="field-row mt-2">
                  <div className="field"><label>Name *</label><input required /></div>
                  <div className="field"><label>Email *</label><input required type="email" /></div>
                </div>
                <div className="field">
                  <label>Subject</label>
                  <select defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>General enquiry</option>
                    <option>Adoption</option>
                    <option>Volunteering</option>
                    <option>Corporate / CSR partnership</option>
                    <option>Press & media</option>
                  </select>
                </div>
                <div className="field"><label>Message *</label><textarea required /></div>
                <button className="btn btn-primary btn-block"><Icon name="mail" size={18} /> Send message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
