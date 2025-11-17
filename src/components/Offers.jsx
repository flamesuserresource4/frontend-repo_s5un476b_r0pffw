import React from 'react'

const Offers = () => {
  return (
    <section className="relative py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900">SAVE UP TO 20% WITH OUR EARLY-BIRD OFFER </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-sm text-neutral-700">EARLY-BIRD CLOSES DECEMBER 1ST 2025</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-sm text-neutral-700">ACADEMY STARTS FEB 12TH 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers
