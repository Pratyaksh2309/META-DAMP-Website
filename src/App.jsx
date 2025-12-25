import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './contexts/ToastContext'
import ErrorBoundary from './components/ErrorBoundary'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseReview from './pages/CourseReview'
import Experiences from './pages/Experiences'
import ExperienceDetail from './pages/ExperienceDetail'
import Tracks from './pages/Tracks'
import TrackDetail from './pages/TrackDetail'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import Team from './pages/Team'
import Support from './pages/Support'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <Router>
          <ScrollToTop />
          {/* Skip to main content link for accessibility */}
          <a href="#main-content" className="skip-link">
            
          </a>
          
          <Layout>
            <main id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:courseId" element={<CourseReview />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/experience/:experienceId" element={<ExperienceDetail />} />
                <Route path="/tracks" element={<Tracks />} />
                <Route path="/track/:trackId" element={<TrackDetail />} />
                <Route path="/events" element={<Events />} />
                <Route path="/event/:eventId" element={<EventDetail />} />
                <Route path="/team" element={<Team />} />
                <Route path="/support" element={<Support />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </Layout>
          
          <BackToTop />
        </Router>
      </ToastProvider>
    </ErrorBoundary>
  )
}

export default App