import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="font-inter bg-primary text-text-primary min-h-screen">
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout