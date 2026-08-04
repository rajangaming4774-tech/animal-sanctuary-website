import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { AnimalCard, SectionHead } from '../components/ui'
import { ANIMALS, inr } from '../data/site'

const perks = [
  { icon: 'gift', title: 'Sponsor certificate', text: 'A personalised certificate for “your” animal, ready to frame or share.' },
  { icon: 'camera', title: 'Monthly photo updates', text: 'See how they’re doing every month — the best subscription you’ll ever have.' },
  { icon: 'star', title: 'Supporter badge', text: 'A badge on your donor profile and a spot on the animal’s sponsor wall.' },
  { icon: 'shield', title: 'Full control', text: 'Pause, upgrade or cancel anytime from your dashboard. No phone calls.' },
]

const tiers = [
  { amt: 500, label: 'Friend', text: 'Covers monthly food for one small animal.' },
  { amt: 1000, label: 'Guardian', text: 'Feeds and provides basic vet care for one animal, all month.', popular: true },
  { amt: 2500, label: 'Champion', text: 'Full care — food, medicine, enrichment and shelter.' },
]

export default function Sponsor() {
  const sponsorable = ANIMALS.filter((a) => a.status === 'sponsorable' || a.status === 'needs_funds')

  return (
    <>
      <PageHeader
        title="Sponsor an Animal"
        crumb="Sponsor"
        lead="Monthly sponsorship is the backbone of the sanctuary — predictable love that lets us plan every rescue."
      />

      {/* Tiers */}
      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Choose your impact" icon="gift" title="Pick a monthly sponsorship" />
          <div className="grid cols-3">
            {tiers.map((t) => (
              <div className={`card help-tile ${t.popular ? '' : ''}`} key={t.amt} style={t.popular ? { border: '2px solid var(--green-600)' } : {}}>
                {t.popular && <span className="badge badge-adopt" style={{ marginBottom: 10 }}>Most popular</span>}
                <div className="num" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--green-700)' }}>{inr(t.amt)}<span style={{ fontSize: '1rem', color: 'var(--ink-500)' }}>/mo</span></div>
                <h3 style={{ marginTop: 6 }}>{t.label}</h3>
                <p>{t.text}</p>
                <a href="#animals" className="btn btn-primary btn-sm">Sponsor now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <SectionHead center eyebrow="What you get" icon="star" title="Sponsorship perks" />
          <div className="grid cols-4">
            {perks.map((p) => (
              <div className="box" key={p.title}>
                <div className="feature-row">
                  <span className="ic"><Icon name={p.icon} size={22} /></span>
                </div>
                <h3 style={{ fontSize: '1.1rem', marginTop: 14 }}>{p.title}</h3>
                <p style={{ fontSize: '.92rem' }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorable animals */}
      <section className="section" id="animals">
        <div className="wrap">
          <SectionHead eyebrow="Meet them" icon="paw" title="Animals waiting for a sponsor"
            lead="Choose one to sponsor — or select “wherever most needed” at checkout." />
          <div className="grid cols-3">
            {sponsorable.map((a) => <AnimalCard key={a.slug} a={a} />)}
          </div>
        </div>
      </section>
    </>
  )
}
