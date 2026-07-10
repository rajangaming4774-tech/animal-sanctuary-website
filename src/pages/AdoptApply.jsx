import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { ANIMALS } from '../data/site'

export default function AdoptApply() {
  const { slug } = useParams()
  const animal = ANIMALS.find((a) => a.slug === slug)
  const [sent, setSent] = useState(false)

  if (!animal) {
    return (
      <div className="section wrap center">
        <h2>Animal not found</h2>
        <Link to="/adopt" className="btn btn-primary mt-2">Back to adoptions</Link>
      </div>
    )
  }

  if (sent) {
    return (
      <section className="section">
        <div className="wrap" style={{ maxWidth: 600 }}>
          <div className="success-msg">
            <div className="ic"><Icon name="check" size={34} /></div>
            <h1 className="display" style={{ fontSize: '1.8rem' }}>Application received!</h1>
            <p>Thank you for applying to adopt <b>{animal.name}</b>. Our adoption team will review your application and reach out within 2–3 days for a screening call.</p>
            <Link to="/adopt" className="btn btn-primary mt-2">Browse more animals</Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHeader title={`Adopt ${animal.name}`} crumb="Adoption application" />
      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 34, alignItems: 'start' }}>
          <form className="box" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <h3>About you</h3>
            <div className="field-row mt-2">
              <div className="field"><label>Full name *</label><input required /></div>
              <div className="field"><label>Phone *</label><input required /></div>
            </div>
            <div className="field"><label>Email *</label><input required type="email" /></div>
            <div className="field"><label>City / area *</label><input required /></div>

            <div className="divider" />
            <h3>Your home</h3>
            <div className="field-row mt-2">
              <div className="field">
                <label>Home type *</label>
                <select required defaultValue="">
                  <option value="" disabled>Select…</option>
                  <option>Apartment</option>
                  <option>Independent house</option>
                  <option>Farm / large plot</option>
                </select>
              </div>
              <div className="field">
                <label>Do you have a yard / open space?</label>
                <select defaultValue="">
                  <option value="" disabled>Select…</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Shared / balcony only</option>
                </select>
              </div>
            </div>
            <div className="field"><label>Other pets at home</label><input placeholder="e.g. one older dog, no pets…" /></div>
            <div className="field"><label>Experience with animals</label><textarea placeholder="Tell us about pets you’ve cared for before." /></div>
            <div className="field"><label>Why {animal.name}? *</label><textarea required placeholder={`What draws you to ${animal.name}?`} /></div>

            <label className="flex items-center mt-2" style={{ gap: 10, fontWeight: 500 }}>
              <input type="checkbox" required style={{ width: 'auto' }} />
              I understand adoption includes a screening and home check.
            </label>

            <button type="submit" className="btn btn-accent btn-block mt-3">
              <Icon name="home" size={18} /> Submit application
            </button>
          </form>

          <aside className="donate-box">
            <img src={animal.hero} alt={animal.name} style={{ borderRadius: 14, aspectRatio: '4/3', objectFit: 'cover', width: '100%' }} />
            <h3 className="mt-2">{animal.name}</h3>
            <p className="muted" style={{ fontSize: '.9rem' }}>{animal.species} · {animal.breed} · {animal.sex} · {animal.age}</p>
            <p style={{ fontSize: '.95rem' }}>{animal.hook}</p>
            <div className="flex wrap-flex" style={{ gap: 6 }}>
              {animal.temperament.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="note mt-2"><Icon name="check" size={18} /><span>Vaccinated · Health-checked · {animal.adoptionFee ? `Adoption fee ₹${animal.adoptionFee}` : 'No adoption fee'}</span></div>
          </aside>
        </div>
      </section>
    </>
  )
}
