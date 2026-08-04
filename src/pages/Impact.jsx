import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { SectionHead, CountUp } from '../components/ui'
import { STATS, STORIES } from '../data/site'

const testimonials = [
  { name: 'Priya S.', role: 'Monthly donor', text: 'I sponsor Bruno and get a photo every month. It’s the most joyful ₹1,000 I spend.' },
  { name: 'Arun M.', role: 'Adopter', text: 'We adopted Lucky last monsoon. The screening was thorough and the team truly cares.' },
  { name: 'Deepa R.', role: 'Volunteer', text: 'Joined a feeding drive on a whim — now I’m here every weekend. Life-changing.' },
]

export default function Impact() {
  return (
    <>
      <PageHeader
        title="Our Impact"
        crumb="Impact"
        lead="Numbers matter — but the transformations behind them matter more. Here’s what your support built."
      />

      <section className="section">
        <div className="wrap grid cols-4">
          {STATS.map((s) => (
            <div className="box center" key={s.label}>
              <span className="ic" style={{ width: 54, height: 54, borderRadius: 16, background: 'var(--green-100)', color: 'var(--green-700)', display: 'grid', placeItems: 'center', margin: '0 auto 12px' }}>
                <Icon name={s.icon} size={26} />
              </span>
              <div style={{ fontSize: '2rem', fontWeight: 800 }}><CountUp end={s.num} suffix={s.suffix} /></div>
              <div className="muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <SectionHead center eyebrow="Before & after" icon="star" title="Transformation stories"
            lead="Every one of these was hopeless once. Look at them now." />
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

      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="In their words" icon="quote" title="What our community says" />
          <div className="grid cols-3">
            {testimonials.map((t) => (
              <div className="box" key={t.name}>
                <span style={{ color: 'var(--accent-500)' }}><Icon name="quote" size={30} /></span>
                <p style={{ fontSize: '1.02rem', color: 'var(--ink-900)' }}>“{t.text}”</p>
                <div className="flex items-center mt-2" style={{ gap: 12 }}>
                  <div className="avatar">{t.name[0]}</div>
                  <div><b>{t.name}</b><div className="muted" style={{ fontSize: '.85rem' }}>{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
