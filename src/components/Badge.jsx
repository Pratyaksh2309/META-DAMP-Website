import PropTypes from 'prop-types'

const Badge = ({ type = 'default', children, className = '' }) => {
  const typeClasses = {
    default: 'bg-neutral-100 text-neutral-700 border-neutral-200',
    core: 'bg-primary-blue-100 text-primary-blue-700 border-primary-blue-200',
    elective: 'bg-accent-yellow-100 text-accent-yellow-700 border-accent-yellow-200',
    minor: 'bg-neutral-100 text-neutral-700 border-neutral-200',
    easy: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    medium: 'bg-accent-yellow-100 text-accent-yellow-700 border-accent-yellow-200',
    hard: 'bg-rose-100 text-rose-700 border-rose-200',
    software: 'bg-primary-blue-100 text-primary-blue-700 border-primary-blue-200',
    research: 'bg-neutral-100 text-neutral-700 border-neutral-200',
    masters: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    consulting: 'bg-accent-yellow-100 text-accent-yellow-700 border-accent-yellow-200'
  }

  return (
    <span className={`px-3 sm:px-4 py-1 sm:py-2 text-sm font-bold rounded-2xl shadow-sm border ${typeClasses[type] || typeClasses.default} ${className}`}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Badge
