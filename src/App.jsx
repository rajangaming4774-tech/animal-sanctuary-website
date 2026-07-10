import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Animals from './pages/Animals'
import AnimalProfile from './pages/AnimalProfile'
import Causes from './pages/Causes'
import CauseDetail from './pages/CauseDetail'
import Donate from './pages/Donate'
import Checkout from './pages/Checkout'
import ThankYou from './pages/ThankYou'
import Sponsor from './pages/Sponsor'
import Adopt from './pages/Adopt'
import AdoptApply from './pages/AdoptApply'
import ReportRescue from './pages/ReportRescue'
import Volunteer from './pages/Volunteer'
import About from './pages/About'
import Transparency from './pages/Transparency'
import Impact from './pages/Impact'
import Updates from './pages/Updates'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import DonorDashboard from './pages/DonorDashboard'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/animals/:slug" element={<AnimalProfile />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/causes/:slug" element={<CauseDetail />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you/:id" element={<ThankYou />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/adopt/apply/:slug" element={<AdoptApply />} />
          <Route path="/report-rescue" element={<ReportRescue />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/about" element={<About />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/donor" element={<DonorDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
