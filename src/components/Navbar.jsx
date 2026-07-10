import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Icon from './Icon'
import { SANCTUARY } from '../data/site'

const links = [
  { to: '/animals', label: 'Animals' },
  { to: '/causes', label: 'Causes' },
  { to: '/sponsor', label: 'Sponsor' },
  { to: '/adopt', label: 'Adopt' },
  { to: '/transparency', label: 'Transparency' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className={`nav ${open ? 'open' : ''}`}>
      <div className="wrap nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="logo"><Icon name="paw" size={22} /></span>
          <span>
            Karuna
            <small>Animal Sanctuary</small>
          </span>
        </Link>

        <nav className="nav-links" onClick={() => setOpen(false)}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Link to="/report-rescue" className="btn btn-outline btn-sm">
            <Icon name="location" size={16} /> Report Rescue
          </Link>
          <Link to="/donate" className="btn btn-primary btn-sm">Donate</Link>
          <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
