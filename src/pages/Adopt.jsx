import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import { AnimalCard, SectionHead } from '../components/ui'
import { ANIMALS } from '../data/site'

const steps = [
  { n: 1, title: 'Browse & apply', text: 'Find an animal that fits your home and submit a short application.' },
  { n: 2, title: 'Screening call', text: 'We chat to understand your home, lifestyle and expectations.' },
  { n: 3, title: 'Home check', text: 'A quick visit (or video call) to make sure it’s a safe fit.' },
  { n: 4, title: 'Welcome home', text: 'Approved! Complete the adoption and start your new chapter.' },
]

export default function Adopt() {
  const adoptable = ANIMALS.filter((a) => a.status === 'adoptable')

  return (
    <>
      <PageHeader
        title="Adopt a Friend"
        crumb="Adopt"
        lead="Don’t shop — adopt. Every animal here is health-checked, vaccinated and ready to love you back."
      />

      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="How it works" icon="home" title="Adoption in four simple steps" />
          <div className="grid cols-4">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <div className="n">{s.n}</div>
                <h3 style={{ fontSize: '1.1rem' }}>{s.title}</h3>
                <p style={{ fontSize: '.92rem' }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--green-50)' }}>
        <div className="wrap">
          <SectionHead eyebrow="Ready to adopt" icon="paw" title="Animals looking for a home" />
          {adoptable.length ? (
            <div className="grid cols-3">
              {adoptable.map((a) => <AnimalCard key={a.slug} a={a} />)}
            </div>
          ) : (
            <div className="box center">All our animals are currently placed — check back soon!</div>
          )}
        </div>
      </section>
    </>
  )
}
