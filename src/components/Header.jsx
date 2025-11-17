import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-sm font-semibold text-neutral-500">
            Logo
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-wide text-neutral-500">Is This You?</span>
            <span className="text-xs text-neutral-400">ITY Academy 2026</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#survey" className="px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition">Survey</a>
          <a href="#survey" className="px-4 py-2 rounded-lg text-white font-semibold shadow-sm transition" style={{backgroundColor:'#00FF00', color:'#0a0a0a'}}>Get Started</a>
        </div>
      </div>
    </header>
  )
}

export default Header
