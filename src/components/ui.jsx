import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { inr, statusMeta } from '../data/site'

/* ---------- Progress bar ---------- */
export function ProgressBar({ raised, goal, accent = false }) {
  const pct = goal > 0 ? Math.min(100, Math.round((raised / goal) * 100)) : 0
  return (
    <div className={`progress ${accent ? 'accent' : ''}`} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <span style={{ width: `${pct}%` }} />
    </div>
  )
}

/* ---------- Count-up number (animates when scrolled into view) ---------- */
export function CountUp({ end, suffix = '', duration = 1500 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setVal(Math.round(end * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {val.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

/* ---------- Animal card ---------- */
export function AnimalCard({ a }) {
  const meta = statusMeta[a.status] || {}
  const showFunding = a.status === 'needs_funds'
  return (
    <article className="card animal-card">
      <Link to={`/animals/${a.slug}`} className="thumb" style={{ display: 'block' }}>
        <img src={a.hero} alt={a.name} loading="lazy" />
        {a.urgent ? (
          <span className="badge badge-urgent">Urgent</span>
        ) : (
          <span className={`badge ${meta.cls}`}>{meta.label}</span>
        )}
      </Link>
      <div className="body">
        <h3>{a.name}</h3>
        <div className="meta">{a.species} · {a.breed} · {a.age}</div>
        <p className="hook">{a.hook}</p>

        {showFunding && (
          <>
            <div className="fund-row">
              <span>Raised <b>{inr(a.raised)}</b></span>
              <span>Goal {inr(a.goal)}</span>
            </div>
            <ProgressBar raised={a.raised} goal={a.goal} />
            <div className="fund-row" style={{ marginTop: 8, marginBottom: 0 }}>
              <span>{a.donors} donors</span>
              <span>{Math.round((a.raised / a.goal) * 100)}% funded</span>
            </div>
          </>
        )}

        <Link
          to={`/animals/${a.slug}`}
          className={`btn ${a.status === 'adoptable' ? 'btn-accent' : 'btn-primary'} btn-sm btn-block`}
          style={{ marginTop: 16 }}
        >
          {a.status === 'needs_funds' && 'Donate to ' + a.name}
          {a.status === 'adoptable' && 'Meet ' + a.name}
          {a.status === 'sponsorable' && 'Sponsor ' + a.name}
          {(a.status === 'recovered' || a.status === 'in_care') && 'View ' + a.name}
          <Icon name="arrow" size={16} />
        </Link>
      </div>
    </article>
  )
}

/* ---------- Cause card ---------- */
export function CauseCard({ c }) {
  return (
    <article className="card animal-card">
      <Link to={`/causes/${c.slug}`} className="thumb" style={{ display: 'block' }}>
        <img src={c.image} alt={c.title} loading="lazy" />
        <span className="badge badge-medical">{c.category}</span>
      </Link>
      <div className="body">
        <h3>{c.title}</h3>
        <p className="hook">{c.story}</p>
        <div className="fund-row">
          <span>Raised <b>{inr(c.raised)}</b></span>
          <span>Goal {inr(c.goal)}</span>
        </div>
        <ProgressBar raised={c.raised} goal={c.goal} accent />
        <div className="fund-row" style={{ marginTop: 8, marginBottom: 0 }}>
          <span>{c.donors} donors</span>
          <span>{Math.round((c.raised / c.goal) * 100)}% funded</span>
        </div>
        <Link to={`/causes/${c.slug}`} className="btn btn-primary btn-sm btn-block" style={{ marginTop: 16 }}>
          Support this cause <Icon name="arrow" size={16} />
        </Link>
      </div>
    </article>
  )
}

/* ---------- Section heading ---------- */
export function SectionHead({ eyebrow, title, lead, center, icon }) {
  return (
    <div className={center ? 'center' : ''} style={{ marginBottom: 40 }}>
      {eyebrow && (
        <span className="eyebrow">
          {icon && <Icon name={icon} size={15} />} {eyebrow}
        </span>
      )}
      <h2 className="section-title" style={{ marginTop: 12 }}>{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  )
}
