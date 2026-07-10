import PageHeader from '../components/PageHeader'
import { CauseCard } from '../components/ui'
import { CAUSES } from '../data/site'

export default function Causes() {
  return (
    <>
      <PageHeader
        title="Causes & Campaigns"
        crumb="Causes"
        lead="Tackle the roots of the problem — feeding drives, sterilisation, rescue infrastructure and more."
      />
      <section className="section">
        <div className="wrap">
          <div className="grid cols-3">
            {CAUSES.map((c) => <CauseCard key={c.slug} c={c} />)}
          </div>
        </div>
      </section>
    </>
  )
}
