import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Who from './components/Who'
import Curriculum from './components/Curriculum'
import Offers from './components/Offers'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>
        <Hero />
        <Who />
        <Curriculum />
        <Offers />
        <CTA />
      </main>
      <footer className="border-t border-neutral-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">Is This You? • ITY Academy 2026</p>
          <a href="#survey" className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition" style={{backgroundColor:'#00FF00', color:'#0a0a0a'}}>Take the survay</a>
        </div>
      </footer>
    </div>
  )
}

export default App
