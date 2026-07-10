import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { AnimalCard, CauseCard, ProgressBar, CountUp, SectionHead } from '../components/ui'
import { ANIMALS, CAUSES, STATS, STORIES, SANCTUARY, inr } from '../data/site'

const heroImg =
  'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1700&q=85'

const waysToHelp = [
  { icon: 'heart', color: 'var(--green-600)', title: 'Donate', text: 'Fund a rescue, surgery or a warm meal — from ₹500 in under a minute.', to: '/donate', cta: 'Give now' },
  { icon: 'gift', color: 'var(--orange-500)', title: 'Sponsor', text: 'Adopt an animal’s care monthly and watch them recover with you.', to: '/sponsor', cta: 'Sponsor' },
  { icon: 'home', color: 'var(--green-700)', title: 'Adopt', text: 'Give a rescued animal a forever home. Browse and apply online.', to: '/adopt', cta: 'Adopt' },
  { icon: 'hand', color: 'var(--orange-600)', title: 'Volunteer', text: 'Give your time — feeding drives, transport, fostering and more.', to: '/volunteer', cta: 'Join us' },
]

export default function Home() {
  const featured = ANIMALS.find((a) => a.featured && a.urgent) || ANIMALS[0]
  const urgent = ANIMALS.filter((a) => a.status === 'needs_funds').slice(0, 3)
  const adoptables = ANIMALS.filter((a) => a.status === 'adoptable' || a.status === 'sponsorable').slice(0, 3)

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-inner">
              <span className="eyebrow"><Icon name="paw" size={15} /> Welcome to Karuna Sanctuary</span>
              <h1 className="mt-2">
                Turn <span className="strike">Suffering</span><br />Into <em>Second Chances</em>
              </h1>
              <p className="mt-2">
                We rescue, heal and rehome animals in need across {SANCTUARY.city}. Your donation turns
                suffering into second chances — transparently, one animal at a time.
              </p>
              <div className="hero-cta">
                <Link to="/donate" className="btn btn-primary">Donate Now <Icon name="arrow" size={18} /></Link>
                <Link to="/animals" className="btn btn-outline">Meet the Animals</Link>
              </div>
              <div className="hero-float">
                <span className="dot"><Icon name="paw" size={22} /></span>
                <div>
                  <b>4,597+</b>
                  <div style={{ fontSize: '.8rem', color: 'var(--ink-500)' }}>lives rescued</div>
                </div>
              </div>
            </div>
            <div className="hero-photo">
              <img src={heroImg} alt="A rescued scarlet macaw at Karuna Sanctuary" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATS STRIP ---------------- */}
      <div className="wrap stats-strip">
        <div className="stats-card">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="ic"><Icon name={s.icon} size={26} /></div>
              <div className="num"><CountUp end={s.num} suffix={s.suffix} /></div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- URGENT CASES ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="flex between items-center wrap-flex" style={{ marginBottom: 32, gap: 16 }}>
            <SectionHead
              eyebrow="Urgent Medical Cases"
              icon="heart"
              title="Animals who need you today"
              lead="Every case below is a real animal in our care. Fund a surgery, a meal, a chance to live."
            />
            <Link to="/animals" className="btn btn-outline">View all animals <Icon name="arrow" size={16} /></Link>
          </div>
          <div className="grid cols-3">
            {urgent.map((a) => <AnimalCard key={a.slug} a={a} />)}
          </div>
        </div>
      </section>

      {/* ---------------- WAYS TO HELP ---------------- */}
      <section className="section" style={{ background: 'var(--green-50)' }}>
        <div className="wrap">
          <SectionHead center eyebrow="Ways to Help" icon="paw" title="Four ways to make a difference"
            lead="Whether you have a minute or a lifetime to give, there’s a way for you to help." />
          <div className="grid cols-4">
            {waysToHelp.map((w) => (
              <div className="card help-tile" key={w.title}>
                <div className="ic" style={{ background: w.color }}><Icon name={w.icon} size={30} /></div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <Link to={w.to} className="btn btn-outline btn-sm">{w.cta} <Icon name="arrow" size={15} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CAUSES ---------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Campaigns" icon="chart" title="Bigger causes, shared goals"
            lead="Beyond individual animals, these drives tackle the roots of the problem." />
          <div className="grid cols-3">
            {CAUSES.map((c) => <CauseCard key={c.slug} c={c} />)}
          </div>
        </div>
      </section>

      {/* ---------------- ADOPTABLE CAROUSEL ---------------- */}
      <section className="section" style={{ background: 'var(--green-50)' }}>
        <div className="wrap">
          <div className="flex between items-center wrap-flex" style={{ marginBottom: 32, gap: 16 }}>
            <SectionHead eyebrow="Find a Friend" icon="home" title="Waiting for a forever home" />
            <Link to="/adopt" className="btn btn-outline">Browse adoptions <Icon name="arrow" size={16} /></Link>
          </div>
          <div className="grid cols-3">
            {adoptables.map((a) => <AnimalCard key={a.slug} a={a} />)}
          </div>
        </div>
      </section>

      {/* ---------------- REPORT RESCUE STRIP ---------------- */}
      <section className="section-sm">
        <div className="wrap">
          <div className="rescue-strip">
            <div>
              <span className="eyebrow on-dark"><Icon name="location" size={15} /> Emergency</span>
              <h2 className="mt-2" style={{ fontSize: '1.8rem' }}>Found an injured animal?</h2>
              <p style={{ color: '#fff', opacity: .95, margin: 0 }}>Report it in 30 seconds — photo, location, done. Our team is dispatched.</p>
            </div>
            <Link to="/report-rescue" className="btn" style={{ background: '#fff', color: 'var(--orange-600)' }}>
              <Icon name="camera" size={18} /> Report a Rescue
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- TRANSPARENCY TEASER ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="grid cols-2" style={{ alignItems: 'center', gap: 40 }}>
            <div>
              <SectionHead eyebrow="Where your money goes" icon="shield" title="For every ₹100 you give, ₹95 reaches an animal" />
              <p className="section-lead">
                We publish itemised cost breakdowns for every animal, post recovery updates, and share audited
                financials. Trust is earned with money — so we show you exactly where yours goes.
              </p>
              <ul className="mt-2">
                {['Itemised cost breakdown per rescue', 'Dated recovery updates with photos', 'Audited annual reports, publicly downloadable', '80G tax receipts, instantly by email'].map((t) => (
                  <li key={t} className="flex items-center mb-2" style={{ gap: 10 }}>
                    <span style={{ color: 'var(--green-600)' }}><Icon name="check" size={20} /></span> {t}
                  </li>
                ))}
              </ul>
              <Link to="/transparency" className="btn btn-primary mt-2">See the breakdown <Icon name="arrow" size={16} /></Link>
            </div>
            <div className="grid cols-2" style={{ gap: 16 }}>
              {STATS.map((s, i) => (
                <div className="box" key={i} style={{ textAlign: 'center' }}>
                  <div className="stat" style={{ padding: 0, border: 'none' }}>
                    <div className="ic"><Icon name={s.icon} size={24} /></div>
                    <div className="num" style={{ fontSize: '1.6rem' }}><CountUp end={s.num} suffix={s.suffix} /></div>
                    <div className="lbl">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SUCCESS STORIES ---------------- */}
      <section className="section" style={{ background: 'var(--green-50)' }}>
        <div className="wrap">
          <SectionHead center eyebrow="Happy Endings" icon="star" title="From rescue to family"
            lead="Real transformations made possible by donors like you." />
          <div className="grid cols-3">
            {STORIES.map((s) => (
              <div className="card" key={s.name}>
                <div className="flex" style={{ gap: 0 }}>
                  <div style={{ position: 'relative', width: '50%' }}>
                    <img src={s.before} alt={`${s.name} before`} style={{ aspectRatio: '1', objectFit: 'cover', width: '100%' }} />
                    <span className="badge badge-recovered" style={{ position: 'absolute', top: 8, left: 8 }}>Before</span>
                  </div>
                  <div style={{ position: 'relative', width: '50%' }}>
                    <img src={s.after} alt={`${s.name} after`} style={{ aspectRatio: '1', objectFit: 'cover', width: '100%' }} />
                    <span className="badge badge-adopt" style={{ position: 'absolute', top: 8, right: 8 }}>After</span>
                  </div>
                </div>
                <div className="body" style={{ padding: '18px 20px 22px' }}>
                  <h3 style={{ fontSize: '1.15rem' }}>{s.name}</h3>
                  <p className="hook">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA BAND ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div className="grid cols-2" style={{ alignItems: 'center', gap: 30 }}>
              <div>
                <span className="eyebrow on-dark"><Icon name="gift" size={15} /> Become a Monthly Hero</span>
                <h2 className="mt-2">₹1,000 a month feeds and cares for one animal, all year.</h2>
                <p style={{ color: '#eafff2', opacity: .95 }}>
                  Monthly sponsors are the backbone of the sanctuary. Predictable support means we can say yes to the next rescue.
                </p>
              </div>
              <div className="flex" style={{ gap: 14, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                <Link to="/sponsor" className="btn" style={{ background: '#fff', color: 'var(--green-700)' }}>Sponsor an animal</Link>
                <Link to="/donate" className="btn btn-ghost">One-time gift</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TRUST BAR ---------------- */}
      <section className="section-sm">
        <div className="wrap">
          <div className="box center" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}>
            {[
              { icon: 'shield', t: SANCTUARY.reg },
              { icon: 'check', t: '80G Tax Exemption' },
              { icon: 'leaf', t: 'Registered Trust' },
              { icon: 'heart', t: '100% Secure Payments' },
            ].map((b) => (
              <div className="flex items-center" key={b.t} style={{ gap: 10, color: 'var(--ink-700)', fontWeight: 600 }}>
                <span style={{ color: 'var(--green-600)' }}><Icon name={b.icon} size={22} /></span> {b.t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
