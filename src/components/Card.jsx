import PropTypes from 'prop-types'

const Card = ({ variant = 'default', children, className = '', delay = '0s' }) => {
  const variantClasses = {
    default: 'glass-card',
    blue: 'glass-card-blue',
    yellow: 'glass-card-yellow'
  }

  return (
    <div 
      className={`stagger-animation ${variantClasses[variant]} rounded-3xl shadow-xl card-hover p-6 sm:p-10 group relative overflow-hidden ${className}`}
      style={{animationDelay: delay}}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue-500/5 to-accent-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  variant: PropTypes.oneOf(['default', 'blue', 'yellow']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.string
}

export default Card
