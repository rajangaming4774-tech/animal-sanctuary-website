import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function PageHeader({ title, crumb, lead }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <div className="crumbs">
          <Link to="/">Home</Link> / {crumb}
        </div>
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>
    </section>
  )
}
