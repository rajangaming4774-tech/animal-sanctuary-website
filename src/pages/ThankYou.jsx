import { useParams, useSearchParams, Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { ANIMALS, inr } from '../data/site'

export default function ThankYou() {
  const { id } = useParams()
  const [params] = useSearchParams()
  const amount = Number(params.get('amount')) || 0
  const type = params.get('type')
  const animal = ANIMALS.find((a) => a.slug === params.get('animal'))

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <div className="success-msg">
          <div className="ic"><Icon name="check" size={34} /></div>
          <h1 className="display" style={{ fontSize: '2rem' }}>Thank you! 💚</h1>
          <p style={{ fontSize: '1.1rem' }}>
            Your {type === 'monthly' ? 'monthly ' : ''}gift of <b>{inr(amount)}</b>
            {animal ? <> for <b>{animal.name}</b></> : ''} has been received.
          </p>
          <p className="muted">Receipt no. <b>{id}</b> — an 80G receipt is on its way to your email.</p>

          <div className="flex" style={{ gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
            <button className="btn btn-primary"><Icon name="mail" size={16} /> Download receipt</button>
            <button className="btn btn-outline"><Icon name="whatsapp" size={16} /> Share the impact</button>
          </div>
        </div>

        {type !== 'monthly' && (
          <div className="cta-band mt-4">
            <h2 style={{ fontSize: '1.5rem' }}>Turn this into monthly impact?</h2>
            <p style={{ color: '#eafff2' }}>Monthly gifts let us plan rescues instead of scrambling for funds. Even {inr(1000)}/month changes everything.</p>
            <Link to="/sponsor" className="btn" style={{ background: '#fff', color: 'var(--green-700)' }}>Become a monthly hero</Link>
          </div>
        )}

        <div className="center mt-4">
          <Link to="/animals" className="btn btn-outline">See more animals to help <Icon name="arrow" size={16} /></Link>
        </div>
      </div>
    </section>
  )
}
