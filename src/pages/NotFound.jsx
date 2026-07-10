import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap center" style={{ maxWidth: 520, padding: '60px 0' }}>
        <div style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--green-600)' }}>404</div>
        <h1 className="display">This trail went cold</h1>
        <p className="muted">The page you’re looking for wandered off. Let’s get you back to the animals.</p>
        <div className="flex" style={{ gap: 12, justifyContent: 'center', marginTop: 20 }}>
          <Link to="/" className="btn btn-primary">Back home <Icon name="arrow" size={16} /></Link>
          <Link to="/animals" className="btn btn-outline">Meet the animals</Link>
        </div>
      </div>
    </section>
  )
}
