import { useEffect } from 'react'
import PropTypes from 'prop-types'

const SEO = ({
  title = 'MEMS D-AMP',
  description = 'Your comprehensive guide to MEMS courses, internship experiences, and academic pathways at IIT Bombay.',
  keywords = 'MEMS, IIT Bombay, Course Reviews, Internship Experiences, Academic Guide',
  image = '/og-image.png',
  url = 'https://mems-damp.netlify.app',
  type = 'website'
}) => {
  const fullTitle = title === 'MEMS D-AMP' ? title : `${title} | MEMS D-AMP`
  const fullUrl = `${url}${window.location.pathname}`

  useEffect(() => {
    // Set document title
    document.title = fullTitle

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        if (selector.includes('property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)[1])
        } else {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)[1])
        }
        document.head.appendChild(element)
      }
      element.setAttribute(attribute, value)
    }

    // Helper function to update or create link tags
    const updateLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`)
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', rel)
        document.head.appendChild(element)
      }
      element.setAttribute('href', href)
    }

    // Primary Meta Tags
    updateMetaTag('meta[name="title"]', 'content', fullTitle)
    updateMetaTag('meta[name="description"]', 'content', description)
    updateMetaTag('meta[name="keywords"]', 'content', keywords)

    // Open Graph / Facebook
    updateMetaTag('meta[property="og:type"]', 'content', type)
    updateMetaTag('meta[property="og:url"]', 'content', fullUrl)
    updateMetaTag('meta[property="og:title"]', 'content', fullTitle)
    updateMetaTag('meta[property="og:description"]', 'content', description)
    updateMetaTag('meta[property="og:image"]', 'content', image)
    updateMetaTag('meta[property="og:site_name"]', 'content', 'MEMS D-AMP')

    // Twitter
    updateMetaTag('meta[property="twitter:card"]', 'content', 'summary_large_image')
    updateMetaTag('meta[property="twitter:url"]', 'content', fullUrl)
    updateMetaTag('meta[property="twitter:title"]', 'content', fullTitle)
    updateMetaTag('meta[property="twitter:description"]', 'content', description)
    updateMetaTag('meta[property="twitter:image"]', 'content', image)

    // Additional Meta Tags
    updateMetaTag('meta[name="robots"]', 'content', 'index, follow')
    updateMetaTag('meta[name="language"]', 'content', 'English')
    updateMetaTag('meta[name="revisit-after"]', 'content', '7 days')
    updateMetaTag('meta[name="author"]', 'content', 'MEMS D-AMP Team')

    // Canonical URL
    updateLinkTag('canonical', fullUrl)

    // Structured Data
    let scriptTag = document.querySelector('script[type="application/ld+json"]')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.type = 'application/ld+json'
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify({
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
    })
  }, [fullTitle, description, keywords, image, fullUrl, type, url])

  return null
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
