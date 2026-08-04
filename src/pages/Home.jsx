import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { AnimalCard, CauseCard, ProgressBar, CountUp, SectionHead } from '../components/ui'
import { ANIMALS, CAUSES, STATS, STORIES, SANCTUARY, inr } from '../data/site'

const heroImg = '/hero-pets.png'

const waysToHelp = [
  { icon: 'heart', color: 'linear-gradient(135deg, #4A8B3F, #3A6B35)', title: 'Donate', text: 'Fund a rescue, surgery or a warm meal — from ₹500 in under a minute.', to: '/donate', cta: 'Give now' },
  { icon: 'gift', color: 'linear-gradient(135deg, #3A6B35, #2D5A27)', title: 'Sponsor', text: "Adopt an animal's care monthly and watch them recover with you.", to: '/sponsor', cta: 'Sponsor' },
  { icon: 'home', color: 'linear-gradient(135deg, #5DA04E, #4A8B3F)', title: 'Adopt', text: 'Give a rescued animal a forever home. Browse and apply online.', to: '/adopt', cta: 'Adopt' },
  { icon: 'hand', color: 'linear-gradient(135deg, #2D5A27, #1a3a14)', title: 'Volunteer', text: 'Give your time — feeding drives, transport, fostering and more.', to: '/volunteer', cta: 'Join us' },
]

export default function Home() {
  const featured = ANIMALS.find((a) => a.featured && a.urgent) || ANIMALS[0]
  const urgent = ANIMALS.filter((a) => a.status === 'needs_funds').slice(0, 3)
  const adoptables = ANIMALS.filter((a) => a.status === 'adoptable' || a.status === 'sponsorable').slice(0, 3)

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        {/* Decorative leaf shapes */}
        <svg style={{ position: 'absolute', top: 40, left: 30, zIndex: 0, opacity: .08 }} width="120" height="180" viewBox="0 0 120 180" fill="white">
          <ellipse cx="60" cy="90" rx="50" ry="85" transform="rotate(-15 60 90)" />
        </svg>
        <svg style={{ position: 'absolute', bottom: 60, right: 60, zIndex: 0, opacity: .05 }} width="100" height="140" viewBox="0 0 100 140" fill="white">
          <ellipse cx="50" cy="70" rx="45" ry="65" transform="rotate(20 50 70)" />
        </svg>

        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-inner">
              <span className="eyebrow on-dark" style={{ background: 'rgba(255,255,255,.1)', borderRadius: 999 }}>
                <Icon name="paw" size={15} /> Welcome to Karuna Sanctuary
              </span>
              <h1 className="mt-2" style={{ lineHeight: 1.08 }}>
                Everything{' '}
                <br />
                Your <em>Pets</em>{' '}
                <br />
                <em>Love</em>
              </h1>
              <p className="mt-2" style={{ color: 'rgba(255,255,255,.8)' }}>
                We rescue, heal and rehome animals in need across {SANCTUARY.city}. Your donation turns
                suffering into second chances — transparently, one animal at a time.
              </p>
              <div className="hero-cta">
                <Link to="/donate" className="btn" style={{ background: '#fff', color: 'var(--green-700)', fontWeight: 800, boxShadow: '0 8px 30px rgba(0,0,0,.15)' }}>
                  Donate Now <Icon name="arrow" size={18} />
                </Link>
                <Link to="/animals" className="btn btn-ghost">Meet the Animals</Link>
              </div>
              <div className="hero-float">
                <span className="dot"><Icon name="paw" size={22} /></span>
                <div>
                  <b>88K+</b>
                  <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.65)' }}>Meals Served</div>
                </div>
              </div>
            </div>
            <div className="hero-photo">
              {/* Floating rating badge */}
              <div style={{
                position: 'absolute', top: 20, right: 0, zIndex: 10,
                background: 'rgba(255,255,255,.95)', backdropFilter: 'blur(10px)',
                borderRadius: 20, padding: '14px 20px', boxShadow: '0 8px 30px rgba(0,0,0,.12)',
                display: 'flex', alignItems: 'center', gap: 8,
                animation: 'float-up 4s ease-in-out infinite',
              }}>
                <Icon name="star" size={20} style={{ color: '#F0B95A' }} />
                <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--ink-900)' }}>4.6</span>
                <span style={{ fontSize: '.75rem', color: 'var(--ink-500)' }}>★ Rating</span>
              </div>

              {/* Heart counter badge */}
              <div style={{
                position: 'absolute', bottom: 30, left: -10, zIndex: 10,
                background: 'rgba(255,255,255,.95)', backdropFilter: 'blur(10px)',
                borderRadius: 16, padding: '12px 18px', boxShadow: '0 8px 30px rgba(0,0,0,.12)',
                display: 'flex', alignItems: 'center', gap: 8,
                animation: 'float-up 5s ease-in-out infinite',
                animationDelay: '1s',
              }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: '#fde8e8', display: 'grid', placeItems: 'center' }}>
                  <Icon name="heart" size={18} style={{ color: '#e53e3e' }} />
                </span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '.95rem', color: 'var(--ink-900)' }}>4,597+</div>
                  <div style={{ fontSize: '.68rem', color: 'var(--ink-500)' }}>Lives Saved</div>
                </div>
              </div>

              <img
                src={heroImg}
                alt="A golden retriever and orange cat — Karuna Sanctuary"
                loading="eager"
                style={{ borderRadius: 32 }}
              />
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
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <SectionHead center eyebrow="Ways to Help" icon="paw" title="Four ways to make a difference"
            lead="Whether you have a minute or a lifetime to give, there's a way for you to help." />
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

      {/* ---------------- NEW ARRIVALS / ADOPTABLE CAROUSEL ---------------- */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <div className="flex between items-center wrap-flex" style={{ marginBottom: 32, gap: 16 }}>
            <SectionHead eyebrow="New Arrivals" icon="sparkle" title="Waiting for a forever home" />
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
              <p style={{ color: 'rgba(255,255,255,.85)', margin: 0 }}>Report it in 30 seconds — photo, location, done. Our team is dispatched.</p>
            </div>
            <Link to="/report-rescue" className="btn" style={{ background: '#fff', color: 'var(--green-800)', fontWeight: 700 }}>
              <Icon name="camera" size={18} /> Report a Rescue
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- TRANSPARENCY TEASER ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="grid cols-2" style={{ alignItems: 'center', gap: 48 }}>
            <div>
              <SectionHead eyebrow="Where your money goes" icon="shield" title="For every ₹100 you give, ₹95 reaches an animal" />
              <p className="section-lead">
                We publish itemised cost breakdowns for every animal, post recovery updates, and share audited
                financials. Trust is earned with money — so we show you exactly where yours goes.
              </p>
              <ul className="mt-2">
                {['Itemised cost breakdown per rescue', 'Dated recovery updates with photos', 'Audited annual reports, publicly downloadable', '80G tax receipts, instantly by email'].map((t) => (
                  <li key={t} className="flex items-center mb-2" style={{ gap: 12 }}>
                    <span style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: 'var(--green-100)', color: 'var(--green-600)',
                      display: 'grid', placeItems: 'center', flexShrink: 0,
                    }}>
                      <Icon name="check" size={16} />
                    </span>
                    <span style={{ fontWeight: 500 }}>{t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/transparency" className="btn btn-primary mt-3">See the breakdown <Icon name="arrow" size={16} /></Link>
            </div>
            <div className="grid cols-2" style={{ gap: 18 }}>
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
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <SectionHead center eyebrow="Happy Endings" icon="star" title="From rescue to family"
            lead="Real transformations made possible by donors like you." />
          <div className="grid cols-3">
            {STORIES.map((s) => (
              <div className="card" key={s.name}>
                <div className="flex" style={{ gap: 0 }}>
                  <div style={{ position: 'relative', width: '50%' }}>
                    <img src={s.before} alt={`${s.name} before`} style={{ aspectRatio: '1', objectFit: 'cover', width: '100%' }} />
                    <span className="badge badge-recovered" style={{ position: 'absolute', top: 10, left: 10 }}>Before</span>
                  </div>
                  <div style={{ position: 'relative', width: '50%' }}>
                    <img src={s.after} alt={`${s.name} after`} style={{ aspectRatio: '1', objectFit: 'cover', width: '100%' }} />
                    <span className="badge badge-adopt" style={{ position: 'absolute', top: 10, right: 10 }}>After</span>
                  </div>
                </div>
                <div className="body" style={{ padding: '20px 22px 24px' }}>
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
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="eyebrow on-dark"><Icon name="gift" size={15} /> Become a Monthly Hero</span>
                <h2 className="mt-2">₹1,000 a month feeds and cares for one animal, all year.</h2>
                <p style={{ color: 'rgba(255,255,255,.85)' }}>
                  Monthly sponsors are the backbone of the sanctuary. Predictable support means we can say yes to the next rescue.
                </p>
              </div>
              <div className="flex" style={{ gap: 14, justifyContent: 'flex-end', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                <Link to="/sponsor" className="btn" style={{ background: '#fff', color: 'var(--green-700)', fontWeight: 700 }}>Sponsor an animal</Link>
                <Link to="/donate" className="btn btn-ghost">One-time gift</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TRUST BAR ---------------- */}
      <section className="section-sm">
        <div className="wrap">
          <div className="box center" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24, alignItems: 'center', borderRadius: 'var(--radius-lg)', padding: '28px 32px' }}>
            {[
              { icon: 'shield', t: SANCTUARY.reg },
              { icon: 'check', t: '80G Tax Exemption' },
              { icon: 'leaf', t: 'Registered Trust' },
              { icon: 'heart', t: '100% Secure Payments' },
            ].map((b) => (
              <div className="flex items-center" key={b.t} style={{ gap: 10, color: 'var(--ink-700)', fontWeight: 600 }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'var(--green-100)', color: 'var(--green-600)',
                  display: 'grid', placeItems: 'center',
                }}>
                  <Icon name={b.icon} size={18} />
                </span>
                {b.t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
