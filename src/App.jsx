import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import HeroNew from './components/HeroNew'
import Testimonials from './components/Testimonials'
import BlogNews from './components/BlogNews'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <HeroNew />
        <Testimonials />
        <BlogNews />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App

