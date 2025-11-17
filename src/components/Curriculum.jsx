import React from 'react'

const List = ({ items }) => (
  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((item, idx) => (
      <li key={idx} className="rounded-xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800">{item}</li>
    ))}
  </ul>
)

const Curriculum = () => {
  return (
    <section className="relative py-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8">WHAT DO WE COVER IN THE ACADEMY?</h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-neutral-700 mb-4">THE FOUNDATIONS OF COACHING</h3>
            <List items={[
              'MINDSET & PSYCHOLOGY',
              'VISION, GOALS & HABITS',
              'RESILIENCE',
              'CLIENT ENGAGEMENT SKILLS',
              'BRANDING & SOCIAL MEDIA',
              'MARKETING & SALES SKILLS',
              'COACHING OPERATIONS & TOOLS',
              'ADVANCED COACHING ',
              'GROUP DYNAMICS & LEADERSHIP',
              'BUSINESS DEVELOPMENT',
              'CAPSTONE & CERTIFICATION',
            ]} />
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-sm text-neutral-900 font-semibold">PLUS BONUS COURSE WORTH £1,200:</p>
            <p className="text-lg font-semibold text-neutral-900">GROWING & SCALING YOUR BRAND & YOUR BUSINESS</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <p className="text-base font-semibold text-neutral-900 mb-2">PLUS 100% ROI GUARANTEE</p>
              <p className="text-sm text-neutral-800">IF YOU BUILD YOUR COACHING BUSINESS WITH IS THIS YOU?, WE WILL WORK WITH YOU FREE OF CHARGE TO SECURE CLIENTS UNTIL YOU RETURN 100% OF YOUR INVESTMENT IN THE ACADEMY</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <p className="text-base font-semibold text-neutral-900 mb-2">PLUS BONUS CMI GUARANTEE</p>
              <p className="text-sm text-neutral-800">IF YOU DON'T PASS THE CMI ACCREDITATION FIRST TIME, WE'LL WORK WITH YOU FREE OF CHARGE UNTIL YOU DO</p>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center">
            <p className="text-lg font-semibold text-neutral-900">YOU CANNOT FAIL WITH THIS INVESTMENT IN YOURSELF & YOUR FUTURE</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Curriculum
