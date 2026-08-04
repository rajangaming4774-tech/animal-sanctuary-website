import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { inr } from '../data/site'

const presets = [
  { amt: 500, note: '5 warm meals' },
  { amt: 1000, note: '10 days of food' },
  { amt: 2500, note: 'Vaccinations' },
  { amt: 5000, note: 'Part of a surgery' },
  { amt: 10000, note: 'A full rescue' },
  { amt: 25000, note: 'Sponsor a shelter' },
]

export default function Donate() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState(1000)
  const [custom, setCustom] = useState('')
  const [freq, setFreq] = useState('monthly')
  const finalAmount = custom ? Number(custom) : amount

  return (
    <>
      <PageHeader
        title="Make a Donation"
        crumb="Donate"
        lead="Give where it's needed most. 95% of every rupee goes straight to animal care — and you get an 80G receipt."
      />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="box" style={{ borderRadius: 'var(--radius-lg)', padding: 32 }}>
            <div className="toggle-row">
              <button className={freq === 'once' ? 'active' : ''} onClick={() => setFreq('once')}>One-time gift</button>
              <button className={freq === 'monthly' ? 'active' : ''} onClick={() => setFreq('monthly')}>
                Monthly ❤ Most impact
              </button>
            </div>

            <label>Choose an amount</label>
            <div className="amount-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
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

            <div className="field mt-2">
              <label>Or enter a custom amount</label>
              <input type="number" min="1" placeholder="₹ Amount" value={custom} onChange={(e) => setCustom(e.target.value)} />
            </div>

            <div className="note mb-2">
              <Icon name="heart" size={18} />
              <span>
                {freq === 'monthly'
                  ? `Your ${inr(finalAmount)}/month sustains ongoing care and lets us plan the next rescue.`
                  : `Your ${inr(finalAmount)} gift goes to wherever the need is greatest today.`}
              </span>
            </div>

            <button
              className="btn btn-primary btn-block"
              disabled={finalAmount <= 0}
              onClick={() => navigate(`/checkout?amount=${finalAmount}&type=${freq}`)}
            >
              Continue to {inr(finalAmount)}{freq === 'monthly' ? '/month' : ''} <Icon name="arrow" size={16} />
            </button>

            <div className="flex between mt-3 wrap-flex" style={{ gap: 16 }}>
              {['UPI · GPay · PhonePe', 'Cards & Net-banking', 'Instant 80G receipt', '100% secure'].map((t) => (
                <span key={t} className="flex items-center muted" style={{ gap: 6, fontSize: '.85rem' }}>
                  <Icon name="check" size={16} /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
