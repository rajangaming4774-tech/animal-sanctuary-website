import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { ANIMALS } from '../data/site'

const news = [
  {
    title: 'Monsoon feeding drive reaches 12,000 meals',
    date: '5 Jul 2026',
    tag: 'Feeding',
    img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=700&q=80',
    excerpt: 'Thanks to 500+ donors, our street-feeding volunteers served a record number of warm meals this rainy season.',
  },
  {
    title: 'New rescue ambulance — halfway funded!',
    date: '28 Jun 2026',
    tag: 'Rescue Ops',
    img: 'https://images.unsplash.com/photo-1615461066841-6116e61058f6?auto=format&fit=crop&w=700&q=80',
    excerpt: 'Our second ambulance campaign crossed the 50% mark. Every rescue call answered faster saves lives.',
  },
  {
    title: 'Kaali takes her first steps after surgery',
    date: '20 Jun 2026',
    tag: 'Recovery',
    img: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=700&q=80',
    excerpt: 'A milestone moment for our bravest patient. Watch how your donations are changing her life.',
  },
]

export default function Updates() {
  return (
    <>
      <PageHeader title="News & Updates" crumb="Updates" lead="Recovery milestones, campaign progress and stories from the sanctuary." />
      <section className="section">
        <div className="wrap">
          <div className="grid cols-3">
            {news.map((n) => (
              <article className="card" key={n.title}>
                <div className="thumb" style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img src={n.img} alt={n.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="body" style={{ padding: '18px 20px 22px' }}>
                  <div className="flex items-center between" style={{ marginBottom: 8 }}>
                    <span className="tag" style={{ margin: 0 }}>{n.tag}</span>
                    <span className="muted" style={{ fontSize: '.82rem' }}>{n.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem' }}>{n.title}</h3>
                  <p className="hook">{n.excerpt}</p>
                  <a href="#" className="flex items-center" style={{ gap: 6, color: 'var(--green-700)', fontWeight: 600, fontSize: '.9rem' }}>
                    Read more <Icon name="arrow" size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="cta-band mt-4">
            <div className="flex between items-center wrap-flex" style={{ gap: 20 }}>
              <div>
                <h2 style={{ fontSize: '1.5rem' }}>Follow an animal’s journey</h2>
                <p style={{ color: '#eafff2', margin: 0 }}>Sponsor {ANIMALS[0].name} or another animal to get personal monthly updates.</p>
              </div>
              <Link to="/sponsor" className="btn" style={{ background: '#fff', color: 'var(--green-700)' }}>Sponsor now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
