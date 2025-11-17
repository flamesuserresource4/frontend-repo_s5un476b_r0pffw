import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const iframeRef = useRef(null)

  useEffect(() => {
    // Ensure responsive sizing for the Spline iframe
    const handleResize = () => {
      if (!iframeRef.current) return
      const vh = window.innerHeight
      iframeRef.current.style.height = Math.max(420, Math.min(780, Math.floor(vh * 0.7))) + 'px'
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50" />
        <div className="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 h-[1200px] w-[1200px] rounded-full opacity-30 blur-3xl" style={{background:'radial-gradient( circle at 50% 50%, rgba(0,255,0,0.35), transparent 60%)'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">ACADEMY #26</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-neutral-900">
              MAKE 2026 YOUR YEAR TO BUILD
              <br />
              <span className="text-neutral-800">A BUSINESS & LIFE YOU LOVE</span>
            </h1>
            <div className="flex items-center gap-3 pt-2">
              <a href="#survey" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition" style={{backgroundColor:'#00FF00', color:'#0a0a0a'}}>
                TAKE THE SURVAY
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <iframe
                ref={iframeRef}
                src="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                title="Spline Hero"
                className="w-full"
                style={{height:520}}
                frameBorder="0"
                allow="autoplay; fullscreen"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </section>
  )
}

export default Hero
