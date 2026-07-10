import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { SectionHead, CountUp } from '../components/ui'
import { SANCTUARY, STATS } from '../data/site'

const values = [
  { icon: 'heart', title: 'Compassion first', text: 'Every animal is treated with dignity, whether they’re a puppy or a working bullock.' },
  { icon: 'shield', title: 'Radical transparency', text: 'We show where every rupee goes — itemised, updated and audited.' },
  { icon: 'leaf', title: 'Root-cause action', text: 'Beyond rescue: sterilisation, feeding drives and education to prevent suffering.' },
]

const team = [
  { name: 'Dr. Anjali Menon', role: 'Founder & Chief Vet', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Ravi Kumar', role: 'Rescue Coordinator', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
  { name: 'Lakshmi Iyer', role: 'Sanctuary Manager', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Karthik Raman', role: 'Community & Volunteers', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
]

export default function About() {
  return (
    <>
      <PageHeader
        title={`About ${SANCTUARY.name}`}
        crumb="About"
        lead={`Founded to give the voiceless a fighting chance in ${SANCTUARY.city}.`}
      />

      <section className="section">
        <div className="wrap grid cols-2" style={{ alignItems: 'center', gap: 40 }}>
          <div>
            <SectionHead eyebrow="Our story" icon="paw" title="From one rescued puppy to a sanctuary" />
            <p>
              What began in 2016 with a single injured street pup treated on a founder’s kitchen floor has grown into a
              full-fledged sanctuary. Today {SANCTUARY.name} runs a rescue ambulance, an in-house medical unit, and a
              green sanctuary that is home to dogs, cats, cattle and more.
            </p>
            <p>
              We believe helping each other can make the world better — and that includes every living being. We rescue
              the injured, heal the sick, rehome the ready, and care for those who’ll live with us forever.
            </p>
            <div className="flex wrap-flex mt-2" style={{ gap: 12 }}>
              <span className="tag">{SANCTUARY.reg}</span>
              <span className="tag">{SANCTUARY.g80}</span>
              <span className="tag">Registered Trust</span>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80" alt="Sanctuary" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--green-800)', color: '#fff' }}>
        <div className="wrap grid cols-4">
          {STATS.map((s) => (
            <div className="center" key={s.label}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800 }}><CountUp end={s.num} suffix={s.suffix} /></div>
              <div style={{ color: '#cfe8da' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="What we stand for" icon="heart" title="Our values" />
          <div className="grid cols-3">
            {values.map((v) => (
              <div className="box" key={v.title}>
                <span className="ic" style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--green-100)', color: 'var(--green-700)', display: 'grid', placeItems: 'center' }}>
                  <Icon name={v.icon} size={24} />
                </span>
                <h3 style={{ marginTop: 14 }}>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--green-50)' }}>
        <div className="wrap">
          <SectionHead center eyebrow="The humans" icon="users" title="Meet the team" />
          <div className="grid cols-4">
            {team.map((t) => (
              <div className="card" key={t.name}>
                <img src={t.img} alt={t.name} style={{ aspectRatio: '1', objectFit: 'cover', width: '100%' }} />
                <div className="body" style={{ padding: '16px 18px 20px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: 2 }}>{t.name}</h3>
                  <div className="muted" style={{ fontSize: '.88rem' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
