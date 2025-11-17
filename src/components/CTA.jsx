import React from 'react'

const CTA = () => {
  return (
    <section id="survey" className="relative py-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50" />
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl" style={{background:'radial-gradient( circle at 50% 50%, rgba(0,255,0,0.35), transparent 60%)'}} />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">IS THE ACADEMY FOR YOU?</h2>
        <p className="text-neutral-800 leading-relaxed">​ANSWER A FEW QUESTIONS IN OUR 2 MINUTE SURVEY & WE'LL SEND YOU A PERSONALISED PLAN AS TO HOW THE ACADEMY CAN SUPPORT YOU TO ACHIEVE YOUR GOALS & BECOME THE BEST YOU CAN BE.</p>
        <p className="text-neutral-900 font-semibold">MAKE 2026 YOUR YEAR....</p>
        <div className="flex items-center justify-center">
          <a href="#" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition" style={{backgroundColor:'#00FF00', color:'#0a0a0a'}}>
            BUTTON - TAKE THE SURVAY
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
