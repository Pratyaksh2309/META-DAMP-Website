import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
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
        </Routes>
      </Layout>
    </Router>
  )
}

export default App