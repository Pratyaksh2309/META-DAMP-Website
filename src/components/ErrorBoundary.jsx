import { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-blue-50 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Oops! Something went wrong</h1>
              <p className="text-xl text-neutral-600 mb-8">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="button-primary"
              >
                Refresh Page
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-white text-primary-blue-600 font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-blue-200"
              >
                Go Home
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left bg-white/80 rounded-2xl p-6 shadow-lg">
                <summary className="cursor-pointer font-bold text-rose-600 mb-2">Error Details (Dev Only)</summary>
                <pre className="text-sm overflow-auto text-neutral-700">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
}

export default ErrorBoundary
