import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { SectionHead } from '../components/ui'
import { FUND_ALLOCATION, SANCTUARY } from '../data/site'

function buildConic() {
  let acc = 0
  const stops = FUND_ALLOCATION.map((f) => {
    const from = acc
    acc += f.pct
    return `${f.color} ${from}% ${acc}%`
  })
  return `conic-gradient(${stops.join(', ')})`
}

const reports = [
  { title: 'Annual Report 2025–26', size: 'PDF · 4.2 MB' },
  { title: 'Audited Financials 2024–25', size: 'PDF · 1.8 MB' },
  { title: '80G Certificate', size: 'PDF · 640 KB' },
  { title: 'Trust Registration', size: 'PDF · 720 KB' },
]

export default function Transparency() {
  return (
    <>
      <PageHeader
        title="Transparency"
        crumb="Transparency"
        lead="Trust is earned with money. Here’s exactly where yours goes — down to the last rupee."
      />

      <section className="section">
        <div className="wrap grid cols-2" style={{ alignItems: 'center', gap: 46 }}>
          <div>
            <SectionHead eyebrow="Fund allocation" icon="chart" title="For every ₹100 you give" />
            <p className="section-lead mb-3">A typical breakdown of how donations are spent across the sanctuary.</p>
            <ul className="pie-legend">
              {FUND_ALLOCATION.map((f) => (
                <li key={f.label}>
                  <span className="sw" style={{ background: f.color }} />
                  <span style={{ flex: 1 }}>{f.label}</span>
                  <b>{f.pct}%</b>
                </li>
              ))}
            </ul>
          </div>
          <div className="center">
            <div style={{
              width: 280, height: 280, borderRadius: '50%', margin: '0 auto',
              background: buildConic(), boxShadow: 'var(--shadow-md)', position: 'relative',
            }}>
              <div style={{
                position: 'absolute', inset: 70, background: '#fff', borderRadius: '50%',
                display: 'grid', placeItems: 'center', textAlign: 'center',
              }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--green-700)' }}>95%</div>
                  <div className="muted" style={{ fontSize: '.82rem' }}>reaches animals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <SectionHead center eyebrow="Open books" icon="shield" title="Reports & certificates"
            lead="Everything is public. Download our audited financials and legal registrations." />
          <div className="grid cols-4">
            {reports.map((r) => (
              <button className="box" key={r.title} style={{ textAlign: 'left', cursor: 'pointer', border: '1px solid var(--line)' }}>
                <span className="ic" style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--green-100)', color: 'var(--green-700)', display: 'grid', placeItems: 'center' }}>
                  <Icon name="chart" size={22} />
                </span>
                <h3 style={{ fontSize: '1rem', marginTop: 14 }}>{r.title}</h3>
                <div className="muted" style={{ fontSize: '.82rem' }}>{r.size}</div>
                <div className="flex items-center mt-2" style={{ gap: 6, color: 'var(--green-700)', fontWeight: 600, fontSize: '.88rem' }}>
                  Download <Icon name="arrow" size={15} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid cols-3">
          {[
            { icon: 'check', title: 'Itemised costs', text: 'Every animal’s page lists the exact cost of their care.' },
            { icon: 'camera', title: 'Proof of use', text: 'Dated recovery updates with photos on each case.' },
            { icon: 'mail', title: 'Instant receipts', text: '80G tax receipts emailed automatically after every gift.' },
          ].map((b) => (
            <div className="box" key={b.title}>
              <span className="ic" style={{ width: 52, height: 52, borderRadius: 18, background: 'var(--accent-100)', color: 'var(--accent-600)', display: 'grid', placeItems: 'center' }}>
                <Icon name={b.icon} size={24} />
              </span>
              <h3 style={{ marginTop: 14 }}>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="note" style={{ maxWidth: 800, margin: '0 auto' }}>
            <Icon name="shield" size={18} />
            <span><b>{SANCTUARY.name}</b> — {SANCTUARY.reg} · {SANCTUARY.g80}. Registered address: {SANCTUARY.address}.</span>
          </div>
        </div>
      </section>
    </>
  )
}
