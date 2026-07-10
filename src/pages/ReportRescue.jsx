import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { SANCTUARY } from '../data/site'

export default function ReportRescue() {
  const [sent, setSent] = useState(false)
  const [ticket] = useState('R' + Math.floor(1000 + Math.random() * 9000))
  const [gps, setGps] = useState('')

  const useLocation = () => {
    if (!navigator.geolocation) { setGps('Geolocation not supported'); return }
    setGps('Locating…')
    navigator.geolocation.getCurrentPosition(
      (pos) => setGps(`${pos.coords.latitude.toFixed(5)}, ${pos.coords.longitude.toFixed(5)}`),
      () => setGps('Could not get location — please type the address')
    )
  }

  if (sent) {
    return (
      <section className="section">
        <div className="wrap" style={{ maxWidth: 600 }}>
          <div className="success-msg">
            <div className="ic"><Icon name="check" size={34} /></div>
            <h1 className="display" style={{ fontSize: '1.8rem' }}>Report received — #{ticket}</h1>
            <p>Thank you for speaking up for an animal in need. Our rescue team has been notified and will act as fast as possible. We’ll send updates to your phone.</p>
            <div className="note" style={{ textAlign: 'left', justifyContent: 'center' }}>
              <Icon name="phone" size={18} />
              <span>Life-threatening emergency? Call our 24×7 helpline: <b>{SANCTUARY.phone}</b></span>
            </div>
            <button className="btn btn-primary mt-2" onClick={() => setSent(false)}>Report another animal</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHeader
        title="Report a Rescue"
        crumb="Report Rescue"
        lead="Found an injured or distressed animal? Report it in 30 seconds and our team is on the way."
      />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="rescue-strip mb-3" style={{ padding: '20px 24px' }}>
            <div className="flex items-center" style={{ gap: 12 }}>
              <Icon name="phone" size={26} />
              <div>
                <b style={{ color: '#fff' }}>Emergency? Call now</b>
                <div style={{ color: '#fff', opacity: .95 }}>{SANCTUARY.phone} · 24×7 helpline</div>
              </div>
            </div>
            <a href={`tel:${SANCTUARY.phone.replace(/\s/g, '')}`} className="btn" style={{ background: '#fff', color: 'var(--orange-600)' }}>Call helpline</a>
          </div>

          <form className="box" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <div className="field">
              <label>Photo of the animal *</label>
              <input type="file" accept="image/*" capture="environment" required />
              <div className="hint">A clear photo helps our team assess the situation and bring the right equipment.</div>
            </div>

            <div className="field-row">
              <div className="field">
                <label>Type of animal *</label>
                <select required defaultValue="">
                  <option value="" disabled>Select…</option>
                  <option>Dog</option><option>Cat</option><option>Cow / Bull</option>
                  <option>Goat / Sheep</option><option>Bird</option><option>Other</option>
                </select>
              </div>
              <div className="field">
                <label>Urgency *</label>
                <select required defaultValue="">
                  <option value="" disabled>Select…</option>
                  <option>Critical — bleeding / can’t move</option>
                  <option>Serious — injured but mobile</option>
                  <option>Stable — needs attention soon</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label>Location *</label>
              <div className="flex" style={{ gap: 10 }}>
                <input required placeholder="Address or landmark" value={gps} onChange={(e) => setGps(e.target.value)} />
                <button type="button" className="btn btn-outline" style={{ whiteSpace: 'nowrap' }} onClick={useLocation}>
                  <Icon name="location" size={16} /> Use GPS
                </button>
              </div>
            </div>

            <div className="field">
              <label>Describe the situation</label>
              <textarea placeholder="What happened? What condition is the animal in?" />
            </div>

            <div className="field-row">
              <div className="field"><label>Your name *</label><input required /></div>
              <div className="field"><label>Your phone *</label><input required placeholder="For updates via SMS/WhatsApp" /></div>
            </div>

            <button type="submit" className="btn btn-accent btn-block">
              <Icon name="camera" size={18} /> Submit rescue report
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
