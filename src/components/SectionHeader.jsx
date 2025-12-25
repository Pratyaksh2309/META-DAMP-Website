import PropTypes from 'prop-types'

const SectionHeader = ({ title, description, className = '' }) => {
  return (
    <div className={`text-center mb-12 sm:mb-20 ${className}`}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text-blue mb-6 sm:mb-8 animate-slide-up">
        {title}
      </h1>
      {description && (
        <p className="text-lg sm:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4" style={{animationDelay: '0.3s'}}>
          {description}
        </p>
      )}
    </div>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string
}

export default SectionHeader
