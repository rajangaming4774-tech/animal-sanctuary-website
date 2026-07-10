import { Link } from 'react-router-dom'
import Icon from './Icon'
import { SANCTUARY } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <div className="foot-brand">
              <span className="logo" style={{ width: 40, height: 40, borderRadius: 12, display: 'grid', placeItems: 'center', background: 'var(--green-600)' }}>
                <Icon name="paw" size={22} />
              </span>
              {SANCTUARY.name}
            </div>
            <p style={{ color: '#cfe8da' }}>
              A registered trust rescuing, healing and rehoming animals across {SANCTUARY.city}. Every rupee is tracked to an animal.
            </p>
            <p style={{ color: '#9dc4b2', fontSize: '.85rem', marginBottom: 4 }}>{SANCTUARY.reg}</p>
            <p style={{ color: '#9dc4b2', fontSize: '.85rem' }}>{SANCTUARY.g80}</p>
          </div>

          <div>
            <h4>Take Action</h4>
            <ul>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/sponsor">Sponsor an animal</Link></li>
              <li><Link to="/adopt">Adopt</Link></li>
              <li><Link to="/volunteer">Volunteer / Foster</Link></li>
              <li><Link to="/report-rescue">Report a rescue</Link></li>
            </ul>
          </div>

          <div>
            <h4>Organisation</h4>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/transparency">Transparency</Link></li>
              <li><Link to="/impact">Our impact</Link></li>
              <li><Link to="/updates">News & updates</Link></li>
              <li><Link to="/faq">FAQ & tax benefits</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul>
              <li className="flex items-center gap-2" style={{ gap: 8 }}><Icon name="location" size={16} /> {SANCTUARY.address}</li>
              <li className="flex items-center" style={{ gap: 8 }}><Icon name="phone" size={16} /> {SANCTUARY.phone}</li>
              <li className="flex items-center" style={{ gap: 8 }}><Icon name="mail" size={16} /> {SANCTUARY.email}</li>
            </ul>
            <div className="newsletter">
              <input type="email" placeholder="Your email" aria-label="Newsletter email" />
              <button className="btn btn-accent btn-sm">Join</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {SANCTUARY.name}. All rights reserved.</span>
          <span className="flex" style={{ gap: 18 }}>
            <Link to="/faq">Privacy</Link>
            <Link to="/faq">Refund policy</Link>
            <Link to="/transparency">Trust & safety</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
