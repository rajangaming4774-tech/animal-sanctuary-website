import { useState } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { ANIMALS, inr } from '../data/site'

export default function Checkout() {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const animalSlug = params.get('animal')
  const animal = animalSlug ? ANIMALS.find((a) => a.slug === animalSlug) : null
  const baseAmount = Number(params.get('amount')) || 1000
  const type = params.get('type') === 'monthly' ? 'monthly' : 'once'

  const [coverFee, setCoverFee] = useState(true)
  const [anon, setAnon] = useState(false)
  const [method, setMethod] = useState('upi')
  const [form, setForm] = useState({ name: '', email: '', phone: '', pan: '', message: '' })

  const fee = Math.round(baseAmount * 0.03)
  const total = coverFee ? baseAmount + fee : baseAmount

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const id = 'KRN' + Math.floor(100000 + baseAmount).toString().slice(0, 6)
    navigate(`/thank-you/${id}?amount=${total}&type=${type}${animal ? `&animal=${animal.slug}` : ''}`)
  }

  const methods = [
    { key: 'upi', label: 'UPI', sub: 'GPay · PhonePe · Paytm' },
    { key: 'card', label: 'Card', sub: 'Credit / Debit' },
    { key: 'netbanking', label: 'Net-banking', sub: 'All major banks' },
    { key: 'wallet', label: 'Wallet', sub: 'Paytm · Amazon Pay' },
  ]

  return (
    <>
      <PageHeader title="Complete your donation" crumb="Checkout" />
      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 34, alignItems: 'start' }}>
          {/* Form */}
          <form className="box" onSubmit={submit}>
            <h3>Your details</h3>
            <p className="muted" style={{ fontSize: '.9rem' }}>No account needed. We only ask for what a tax receipt requires.</p>

            <div className="field mt-2">
              <label>Full name *</label>
              <input required placeholder="e.g. Priya Sharma" value={form.name} onChange={set('name')} />
            </div>
            <div className="field-row">
              <div className="field">
                <label>Email *</label>
                <input required type="email" placeholder="you@email.com" value={form.email} onChange={set('email')} />
              </div>
              <div className="field">
                <label>Phone *</label>
                <input required placeholder="+91 …" value={form.phone} onChange={set('phone')} />
              </div>
            </div>
            <div className="field">
              <label>PAN (for 80G receipt, optional)</label>
              <input placeholder="ABCDE1234F" value={form.pan} onChange={set('pan')} />
              <div className="hint">Required to claim tax deduction on gifts above ₹2,000.</div>
            </div>
            <div className="field">
              <label>Message of support (optional)</label>
              <textarea placeholder="Add a note to the supporter wall…" value={form.message} onChange={set('message')} />
            </div>

            <div className="divider" />

            <h3>Payment method</h3>
            <div className="grid cols-2 mt-2" style={{ gap: 12 }}>
              {methods.map((m) => (
                <button
                  type="button"
                  key={m.key}
                  className={`amount-btn ${method === m.key ? 'active' : ''}`}
                  style={{ textAlign: 'left', padding: '14px 16px' }}
                  onClick={() => setMethod(m.key)}
                >
                  {m.label}
                  <small>{m.sub}</small>
                </button>
              ))}
            </div>

            <label className="flex items-center mt-3" style={{ gap: 10, fontWeight: 500, cursor: 'pointer' }}>
              <input type="checkbox" style={{ width: 'auto' }} checked={coverFee} onChange={(e) => setCoverFee(e.target.checked)} />
              Add {inr(fee)} to cover payment fees so 100% reaches the animals
            </label>
            <label className="flex items-center mt-2" style={{ gap: 10, fontWeight: 500, cursor: 'pointer' }}>
              <input type="checkbox" style={{ width: 'auto' }} checked={anon} onChange={(e) => setAnon(e.target.checked)} />
              Make my donation anonymous (hide my name from the supporter wall)
            </label>

            <button type="submit" className="btn btn-primary btn-block mt-3" style={{ fontSize: '1.05rem', padding: '15px' }}>
              <Icon name="shield" size={18} /> Pay {inr(total)} securely
            </button>
            <p className="muted center mt-2" style={{ fontSize: '.82rem' }}>
              🔒 This is a demo checkout — no real payment is processed. In production this connects to Razorpay.
            </p>
          </form>

          {/* Summary */}
          <aside className="donate-box">
            <h3>Donation summary</h3>
            {animal ? (
              <div className="flex items-center mt-2" style={{ gap: 12 }}>
                <img src={animal.hero} alt={animal.name} style={{ width: 64, height: 64, borderRadius: 12, objectFit: 'cover' }} />
                <div>
                  <b>{animal.name}</b>
                  <div className="muted" style={{ fontSize: '.85rem' }}>{animal.species} · {animal.breed}</div>
                </div>
              </div>
            ) : (
              <div className="flex items-center mt-2" style={{ gap: 12 }}>
                <span className="avatar"><Icon name="heart" size={20} /></span>
                <div><b>General fund</b><div className="muted" style={{ fontSize: '.85rem' }}>Where most needed</div></div>
              </div>
            )}

            <div className="divider" />
            <div className="cost-item"><span>Donation</span><b>{inr(baseAmount)}</b></div>
            <div className="cost-item"><span>Frequency</span><b>{type === 'monthly' ? 'Monthly' : 'One-time'}</b></div>
            {coverFee && <div className="cost-item"><span>Fee cover</span><b>{inr(fee)}</b></div>}
            <div className="cost-item" style={{ fontSize: '1.15rem' }}>
              <b>Total{type === 'monthly' ? '/month' : ''}</b>
              <b style={{ color: 'var(--green-700)' }}>{inr(total)}</b>
            </div>

            <div className="note mt-3">
              <Icon name="check" size={18} />
              <span>You’ll receive an instant email confirmation and 80G receipt.</span>
            </div>
            <Link to="/donate" className="btn btn-outline btn-block mt-2">Change amount</Link>
          </aside>
        </div>
      </section>
    </>
  )
}
