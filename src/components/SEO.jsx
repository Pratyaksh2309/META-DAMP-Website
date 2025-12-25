import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'

const SEO = ({
  title = 'MEMS D-AMP',
  description = 'Your comprehensive guide to MEMS courses, internship experiences, and academic pathways at IIT Bombay.',
  keywords = 'MEMS, IIT Bombay, Course Reviews, Internship Experiences, Academic Guide',
  image = '/og-image.png',
  url = 'https://memsdamp.iitb.ac.in',
  type = 'website'
}) => {
  const fullTitle = title === 'MEMS D-AMP' ? title : `${title} | MEMS D-AMP`
  const fullUrl = `${url}${window.location.pathname}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="MEMS D-AMP" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="MEMS D-AMP Team" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "MEMS D-AMP",
          "description": description,
          "url": url,
          "logo": `${url}/Final DAMP logo (Without text).png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "damp.mems@iitb.ac.in",
            "contactType": "Student Support"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressCountry": "IN"
          }
        })}
      </script>
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string
}

export default SEO
