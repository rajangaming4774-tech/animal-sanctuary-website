import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'

const interests = ['Feeding drives', 'Transport & rescue', 'Fostering', 'Events', 'Medical / vet support', 'Admin & social media']

export default function Volunteer() {
  const [sent, setSent] = useState(false)
  const [picked, setPicked] = useState([])

  const toggle = (i) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]))

  if (sent) {
    return (
      <section className="section">
        <div className="wrap" style={{ maxWidth: 600 }}>
          <div className="success-msg">
            <div className="ic"><Icon name="check" size={34} /></div>
            <h1 className="display" style={{ fontSize: '1.8rem' }}>Welcome to the team! 🐾</h1>
            <p>Thank you for offering your time. Our volunteer coordinator will reach out with the next feeding drive and orientation details.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHeader
        title="Volunteer & Foster"
        crumb="Volunteer"
        lead="Give your time, not just money. Whatever your skill, there’s a way to help the animals."
      />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <form className="box" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <div className="field-row">
              <div className="field"><label>Full name *</label><input required /></div>
              <div className="field"><label>Phone *</label><input required /></div>
            </div>
            <div className="field-row">
              <div className="field"><label>Email *</label><input required type="email" /></div>
              <div className="field"><label>City / area *</label><input required /></div>
            </div>

            <div className="field">
              <label>Availability</label>
              <select defaultValue="">
                <option value="" disabled>Select…</option>
                <option>Weekends only</option>
                <option>A few weekday evenings</option>
                <option>Flexible / on-call for rescues</option>
                <option>Full-time / regular</option>
              </select>
            </div>

            <div className="field">
              <label>How would you like to help? (pick any)</label>
              <div className="filters" style={{ marginBottom: 0 }}>
                {interests.map((i) => (
                  <button type="button" key={i} className={`chip ${picked.includes(i) ? 'active' : ''}`} onClick={() => toggle(i)}>
                    {picked.includes(i) && '✓ '}{i}
                  </button>
                ))}
              </div>
            </div>

            <div className="field"><label>Skills or notes</label><textarea placeholder="e.g. I can drive, I’m a vet student, I speak Tamil & English…" /></div>

            <button type="submit" className="btn btn-primary btn-block">
              <Icon name="hand" size={18} /> Sign me up
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
