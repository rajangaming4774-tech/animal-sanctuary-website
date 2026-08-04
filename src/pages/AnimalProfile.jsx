import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { ProgressBar, AnimalCard } from '../components/ui'
import { ANIMALS, statusMeta, inr } from '../data/site'

const presets = [
  { amt: 500, note: '5 days of food' },
  { amt: 1000, note: '10 days of care' },
  { amt: 2500, note: 'Medicines' },
  { amt: 5000, note: 'Part of surgery' },
]

export default function AnimalProfile() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const animal = ANIMALS.find((a) => a.slug === slug)

  const [active, setActive] = useState(0)
  const [amount, setAmount] = useState(1000)
  const [custom, setCustom] = useState('')
  const [freq, setFreq] = useState('once')

  if (!animal) {
    return (
      <div className="section wrap center">
        <h2>Animal not found</h2>
        <Link to="/animals" className="btn btn-primary mt-2">Back to all animals</Link>
      </div>
    )
  }

  const meta = statusMeta[animal.status] || {}
  const isFunding = animal.status === 'needs_funds'
  const related = ANIMALS.filter((a) => a.slug !== animal.slug).slice(0, 3)
  const finalAmount = custom ? Number(custom) : amount

  const goCheckout = (mode = freq) => {
    const type = animal.status === 'sponsorable' || mode === 'monthly' ? 'monthly' : 'once'
    navigate(`/checkout?animal=${animal.slug}&amount=${finalAmount}&type=${type}`)
  }

  return (
    <>
      <section className="page-head" style={{ padding: '30px 0' }}>
        <div className="wrap">
          <div className="crumbs">
            <Link to="/">Home</Link> / <Link to="/animals">Animals</Link> / {animal.name}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap profile-grid">
          {/* -------- LEFT: gallery + story -------- */}
          <div>
            <div className="gallery-main">
              <img src={animal.gallery[active]} alt={animal.name} />
            </div>
            <div className="gallery-thumbs">
              {animal.gallery.map((g, i) => (
                <img key={i} src={g} alt={`${animal.name} ${i + 1}`} className={i === active ? 'active' : ''} onClick={() => setActive(i)} />
              ))}
            </div>

            <div className="flex items-center wrap-flex" style={{ gap: 10, margin: '26px 0 8px' }}>
              {animal.urgent && <span className="badge badge-urgent">Urgent</span>}
              <span className={`badge ${meta.cls}`}>{meta.label}</span>
              {animal.temperament.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 className="display" style={{ fontSize: '2.4rem', margin: '6px 0' }}>{animal.name}</h1>
            <p className="muted" style={{ fontSize: '1.05rem' }}>
              {animal.species} · {animal.breed} · {animal.sex} · {animal.age}
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--ink-900)', fontWeight: 500 }}>{animal.hook}</p>

            <div className="grid cols-3 mt-2" style={{ gap: 14 }}>
              <div className="box" style={{ padding: 16 }}>
                <div className="flex items-center" style={{ gap: 8, color: 'var(--green-700)' }}><Icon name="location" size={18} /><b>Found at</b></div>
                <div className="muted mt-1">{animal.location}</div>
              </div>
              <div className="box" style={{ padding: 16 }}>
                <div className="flex items-center" style={{ gap: 8, color: 'var(--green-700)' }}><Icon name="clock" size={18} /><b>Intake</b></div>
                <div className="muted mt-1">{animal.intakeDate}</div>
              </div>
              <div className="box" style={{ padding: 16 }}>
                <div className="flex items-center" style={{ gap: 8, color: 'var(--green-700)' }}><Icon name="paw" size={18} /><b>Status</b></div>
                <div className="muted mt-1">{meta.label}</div>
              </div>
            </div>

            {/* Story */}
            <div className="mt-4">
              <h2 className="section-title" style={{ fontSize: '1.6rem' }}>{animal.name}’s Story</h2>
              <p style={{ fontSize: '1.05rem' }}>{animal.story}</p>
            </div>

            {/* Cost breakdown */}
            {animal.costs.length > 0 && (
              <div className="box mt-3">
                <h3 className="flex items-center" style={{ gap: 10 }}><Icon name="chart" size={22} /> Where your money goes</h3>
                <p className="muted" style={{ fontSize: '.9rem' }}>Full transparency — this is the itemised cost of {animal.name}’s care.</p>
                {animal.costs.map((c) => (
                  <div className="cost-item" key={c.item}>
                    <span>{c.item}</span>
                    <b>{inr(c.amount)}</b>
                  </div>
                ))}
                <div className="cost-item" style={{ fontSize: '1.05rem' }}>
                  <b>Total goal</b>
                  <b style={{ color: 'var(--green-700)' }}>{inr(animal.goal)}</b>
                </div>
              </div>
            )}

            {/* Update timeline */}
            {animal.updates.length > 0 && (
              <div className="mt-4">
                <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Recovery Updates</h2>
                <div className="mt-2">
                  {animal.updates.map((u, i) => (
                    <div className="timeline-item" key={i}>
                      <div className="timeline-dot" />
                      <div>
                        <div className="flex items-center" style={{ gap: 10 }}>
                          <span className="badge badge-adopt">{u.date}</span>
                          <b>{u.title}</b>
                        </div>
                        <p className="mt-1" style={{ marginBottom: u.img ? 10 : 0 }}>{u.body}</p>
                        {u.img && <img src={u.img} alt={u.title} style={{ borderRadius: 14, maxWidth: 320 }} />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Supporter wall */}
            {animal.supporters.length > 0 && (
              <div className="mt-4">
                <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Supporter Wall</h2>
                <div className="box mt-2">
                  {animal.supporters.map((s, i) => (
                    <div className="supporter" key={i}>
                      <div className="avatar">{s.name === 'Anonymous' ? '?' : s.name[0]}</div>
                      <div style={{ flex: 1 }}>
                        <div className="flex between">
                          <b>{s.name}</b>
                          <b style={{ color: 'var(--green-700)' }}>{inr(s.amount)}</b>
                        </div>
                        {s.msg && <div className="muted" style={{ fontSize: '.9rem' }}>{s.msg}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* -------- RIGHT: sticky action box -------- */}
          <aside>
            <div className="donate-box">
              {isFunding && (
                <>
                  <div className="flex between items-center mb-2">
                    <b style={{ fontSize: '1.5rem', color: 'var(--green-700)' }}>{inr(animal.raised)}</b>
                    <span className="muted">of {inr(animal.goal)}</span>
                  </div>
                  <ProgressBar raised={animal.raised} goal={animal.goal} accent={animal.urgent} />
                  <div className="flex between mt-1 mb-3" style={{ fontSize: '.86rem' }}>
                    <span className="muted">{animal.donors} donors</span>
                    <span className="muted">{animal.daysActive} days active</span>
                  </div>
                </>
              )}

              {animal.status === 'adoptable' ? (
                <>
                  <h3>Give {animal.name} a home</h3>
                  <p className="muted" style={{ fontSize: '.92rem' }}>
                    {animal.name} is health-checked, vaccinated and ready to be adopted{animal.adoptionFee ? ` (adoption fee ${inr(animal.adoptionFee)})` : ''}.
                  </p>
                  <Link to={`/adopt/apply/${animal.slug}`} className="btn btn-accent btn-block mt-2">
                    <Icon name="home" size={18} /> Apply to adopt {animal.name}
                  </Link>
                  <Link to={`/checkout?animal=${animal.slug}&amount=1000&type=once`} className="btn btn-outline btn-block mt-2">
                    Donate to their care instead
                  </Link>
                </>
              ) : (
                <>
                  <h3>{animal.status === 'sponsorable' ? `Sponsor ${animal.name}` : `Support ${animal.name}`}</h3>

                  {animal.status !== 'sponsorable' && (
                    <div className="toggle-row mt-2">
                      <button className={freq === 'once' ? 'active' : ''} onClick={() => setFreq('once')}>One-time</button>
                      <button className={freq === 'monthly' ? 'active' : ''} onClick={() => setFreq('monthly')}>Monthly</button>
                    </div>
                  )}

                  <div className="amount-grid">
                    {presets.map((p) => (
                      <button
                        key={p.amt}
                        className={`amount-btn ${!custom && amount === p.amt ? 'active' : ''}`}
                        onClick={() => { setAmount(p.amt); setCustom('') }}
                      >
                        {inr(p.amt)}
                        <small>{p.note}</small>
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Custom amount (₹)"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    min="1"
                  />
                  <button
                    className={`btn ${animal.status === 'sponsorable' ? 'btn-accent' : 'btn-primary'} btn-block mt-2`}
                    onClick={() => goCheckout()}
                    disabled={finalAmount <= 0}
                  >
                    {animal.status === 'sponsorable'
                      ? `Sponsor ${inr(finalAmount)}/month`
                      : `${freq === 'monthly' ? 'Give monthly' : 'Donate'} ${inr(finalAmount)}`}
                    <Icon name="arrow" size={16} />
                  </button>

                  {animal.status === 'needs_funds' && (
                    <button className="btn btn-outline btn-block mt-2" onClick={() => { setFreq('monthly'); goCheckout('monthly') }}>
                      <Icon name="gift" size={16} /> Make it monthly instead
                    </button>
                  )}
                </>
              )}

              <div className="note mt-3">
                <Icon name="shield" size={18} />
                <span>Secure payment · 80G tax receipt · 95% reaches animals</span>
              </div>

              <button className="btn btn-outline btn-block mt-2">
                <Icon name="whatsapp" size={16} /> Share {animal.name}’s story
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <h2 className="section-title" style={{ fontSize: '1.6rem', marginBottom: 26 }}>Others who need help</h2>
          <div className="grid cols-3">
            {related.map((a) => <AnimalCard key={a.slug} a={a} />)}
          </div>
        </div>
      </section>
    </>
  )
}
