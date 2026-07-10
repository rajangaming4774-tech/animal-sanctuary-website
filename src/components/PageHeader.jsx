import { Link } from 'react-router-dom'

export default function PageHeader({ title, lead, crumb }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <div className="crumbs">
          <Link to="/">Home</Link> / {crumb || title}
        </div>
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>
    </section>
  )
}
