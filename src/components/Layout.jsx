import Navigation from './Navigation'
import Footer from './Footer'
import Chatbot from './Chatbot'

const Layout = ({ children }) => {
  return (
    <div className="font-inter bg-primary text-text-primary min-h-screen">
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      {/* <Chatbot /> */}
    </div>
  )
}

export default Layout