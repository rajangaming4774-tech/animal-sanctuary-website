import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { AnimalCard } from '../components/ui'
import { ANIMALS } from '../data/site'

const filters = [
  { key: 'all', label: 'All animals' },
  { key: 'needs_funds', label: 'Needs funds' },
  { key: 'adoptable', label: 'Adoptable' },
  { key: 'sponsorable', label: 'Sponsorable' },
  { key: 'recovered', label: 'Recovered' },
]
const species = ['All species', 'Dog', 'Cat', 'Cow', 'Goat']

export default function Animals() {
  const [status, setStatus] = useState('all')
  const [sp, setSp] = useState('All species')

  const list = ANIMALS.filter(
    (a) =>
      (status === 'all' || a.status === status) &&
      (sp === 'All species' || a.species === sp)
  )

  return (
    <>
      <PageHeader
        title="Meet the Animals"
        crumb="Animals"
        lead="Every animal here is in our care right now. Donate, sponsor or adopt — and follow their journey."
      />
      <section className="section">
        <div className="wrap">
          <div className="flex between wrap-flex" style={{ gap: 16, marginBottom: 8 }}>
            <div className="filters">
              {filters.map((f) => (
                <button key={f.key} className={`chip ${status === f.key ? 'active' : ''}`} onClick={() => setStatus(f.key)}>
                  {f.label}
                </button>
              ))}
            </div>
            <div className="filters">
              {species.map((s) => (
                <button key={s} className={`chip ${sp === s ? 'active' : ''}`} onClick={() => setSp(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <p className="muted mb-3">{list.length} animal{list.length !== 1 ? 's' : ''} found</p>

          {list.length ? (
            <div className="grid cols-3">
              {list.map((a) => <AnimalCard key={a.slug} a={a} />)}
            </div>
          ) : (
            <div className="box center">No animals match these filters. Try widening your search.</div>
          )}
        </div>
      </section>
    </>
  )
}
