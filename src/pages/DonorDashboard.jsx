import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'
import { ANIMALS, inr } from '../data/site'

const donations = [
  { id: 'KRN100455', date: '05 Jul 2026', animal: 'Kaali', amount: 2500, type: 'One-time', receipt: true },
  { id: 'KRN100231', date: '01 Jul 2026', animal: 'General fund', amount: 1000, type: 'Monthly', receipt: true },
  { id: 'KRN099876', date: '01 Jun 2026', animal: 'General fund', amount: 1000, type: 'Monthly', receipt: true },
]

export default function DonorDashboard() {
  const bruno = ANIMALS.find((a) => a.slug === 'bruno')
  return (
    <>
      <PageHeader title="My Dashboard" crumb="Donor Dashboard" lead="Manage your giving, download receipts and follow your animals." />
      <section className="section">
        <div className="wrap">
          {/* Summary cards */}
          <div className="grid cols-4 mb-3">
            {[
              { icon: 'heart', num: inr(9500), lbl: 'Given this year' },
              { icon: 'gift', num: '1', lbl: 'Active sponsorship' },
              { icon: 'paw', num: '3', lbl: 'Animals supported' },
              { icon: 'mail', num: '3', lbl: 'Receipts available' },
            ].map((s) => (
              <div className="box center" key={s.lbl}>
                <span className="ic" style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--green-100)', color: 'var(--green-700)', display: 'grid', placeItems: 'center', margin: '0 auto 10px' }}>
                  <Icon name={s.icon} size={22} />
                </span>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{s.num}</div>
                <div className="muted" style={{ fontSize: '.86rem' }}>{s.lbl}</div>
              </div>
            ))}
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1.6fr 1fr', gap: 24 }}>
            {/* Donation history */}
            <div className="box">
              <h3>Donation history</h3>
              <div className="mt-2">
                {donations.map((d) => (
                  <div className="supporter" key={d.id}>
                    <div className="avatar"><Icon name="heart" size={18} /></div>
                    <div style={{ flex: 1 }}>
                      <div className="flex between">
                        <b>{d.animal}</b>
                        <b style={{ color: 'var(--green-700)' }}>{inr(d.amount)}</b>
                      </div>
                      <div className="muted" style={{ fontSize: '.85rem' }}>{d.date} · {d.type} · #{d.id}</div>
                    </div>
                    <button className="btn btn-outline btn-sm"><Icon name="mail" size={14} /> 80G</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Active sponsorship */}
            <div className="box">
              <h3>Your sponsorship</h3>
              {bruno && (
                <>
                  <div className="flex items-center mt-2" style={{ gap: 12 }}>
                    <img src={bruno.hero} alt={bruno.name} style={{ width: 64, height: 64, borderRadius: 12, objectFit: 'cover' }} />
                    <div>
                      <b>{bruno.name}</b>
                      <div className="muted" style={{ fontSize: '.85rem' }}>{inr(1000)}/month · Active</div>
                    </div>
                  </div>
                  <div className="note mt-2"><Icon name="camera" size={16} /><span>Next photo update: 1 Aug 2026</span></div>
                  <button className="btn btn-outline btn-block mt-2">Manage sponsorship</button>
                  <Link to="/sponsor" className="btn btn-primary btn-block mt-2">Sponsor another <Icon name="arrow" size={15} /></Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
