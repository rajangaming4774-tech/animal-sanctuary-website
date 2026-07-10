import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { ProgressBar } from '../components/ui'
import { CAUSES, inr } from '../data/site'

const presets = [500, 1000, 2500, 5000]

export default function CauseDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const cause = CAUSES.find((c) => c.slug === slug)
  const [amount, setAmount] = useState(1000)
  const [custom, setCustom] = useState('')
  const finalAmount = custom ? Number(custom) : amount

  if (!cause) {
    return (
      <div className="section wrap center">
        <h2>Cause not found</h2>
        <Link to="/causes" className="btn btn-primary mt-2">Back to causes</Link>
      </div>
    )
  }

  return (
    <>
      <section className="page-head" style={{ padding: '30px 0' }}>
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link> / <Link to="/causes">Causes</Link> / {cause.title}</div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap profile-grid">
          <div>
            <div className="gallery-main"><img src={cause.image} alt={cause.title} /></div>
            <span className="badge badge-medical mt-3" style={{ display: 'inline-flex' }}>{cause.category}</span>
            <h1 className="display" style={{ fontSize: '2.2rem', margin: '10px 0' }}>{cause.title}</h1>
            <p style={{ fontSize: '1.1rem' }}>{cause.story}</p>
            <p>
              Campaigns like this let us go beyond individual rescues and address the systemic issues that put animals at
              risk in the first place. Every contribution — big or small — moves this goal forward, and we publish regular
              updates so you can see exactly what your support achieves.
            </p>
            <div className="note mt-2"><Icon name="shield" size={18} /><span>95% of funds go directly to the cause · 80G receipt included</span></div>
          </div>

          <aside>
            <div className="donate-box">
              <div className="flex between items-center mb-2">
                <b style={{ fontSize: '1.5rem', color: 'var(--green-700)' }}>{inr(cause.raised)}</b>
                <span className="muted">of {inr(cause.goal)}</span>
              </div>
              <ProgressBar raised={cause.raised} goal={cause.goal} accent />
              <div className="flex between mt-1 mb-3" style={{ fontSize: '.86rem' }}>
                <span className="muted">{cause.donors} donors</span>
                <span className="muted">{Math.round((cause.raised / cause.goal) * 100)}% funded</span>
              </div>
              <div className="amount-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
                {presets.map((p) => (
                  <button key={p} className={`amount-btn ${!custom && amount === p ? 'active' : ''}`} onClick={() => { setAmount(p); setCustom('') }}>{inr(p)}</button>
                ))}
              </div>
              <input type="number" placeholder="Custom amount (₹)" value={custom} onChange={(e) => setCustom(e.target.value)} />
              <button className="btn btn-primary btn-block mt-2" disabled={finalAmount <= 0}
                onClick={() => navigate(`/checkout?amount=${finalAmount}&type=once`)}>
                Donate {inr(finalAmount)} <Icon name="arrow" size={16} />
              </button>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
