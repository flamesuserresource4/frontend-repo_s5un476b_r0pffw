import React from 'react'

const Section = ({ title, children }) => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8">{title}</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  </section>
)

const Card = ({ heading, body }) => (
  <div className="group rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
    <div className="aspect-[16/9] w-full rounded-xl bg-neutral-100 border border-neutral-200 mb-5 flex items-center justify-center text-neutral-400 text-xs">
      Image placeholder
    </div>
    <h3 className="text-lg font-semibold text-neutral-900 mb-3">{heading}</h3>
    <p className="text-neutral-700 leading-relaxed text-sm">{body}</p>
  </div>
)

const Who = () => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 -z-10 bg-gradient-to-b from-neutral-50 to-white" />

      <Section title="WHO IS THE ACADEMY FOR?">
        <Card
          heading="ASPIRING NON-EXEC DIRECTORS (NEDS)"
          body="It's hard to find quality, paid NED roles. Becoming an Executive Coach with Is This You? is a perfect alternative. With all the coaching & mentoring tools you need and a powerful team behind you, you can utilise all of your experience to earn income with real impact. Hear from Angus below, who is on this journey."
        />
        <Card
          heading="THOSE TAKING REDUNDANCY & LOOKING TO BUILD A NEW CAREER OR BUSINESS"
          body="Taking redundancy can be daunting. The Academy offers you accreditation, an established brand and an amazing team to work with as you build your career or business.  You're not alone! We can help you to navigate the challenges, overcome the obstacles and become confident in your choice of direction. Hear from Claire below, who's made that transition. "
        />
        <Card
          heading="EXISTING COACHES"
          body="For existing coaches we can offer you a CMI assessed & recognised framework to work with. In addition you will benefit from CMI accreditation, a trusted brand, a dynamic team & a fantastic network to help you to build & scale your coaching business. \
Hear from Dave below who is doing just that, and amazing opportunities are opening up for him..."
        />
        <Card
          heading="FOUNDERS & BUSINESS OWNERS"
          body="Running your own business can be hard, no matter how much experience you have. We offer you an amazing network, peer to peer support and  a methodology & framework to maximise your leadership, communication and relationship building skills. Combine this with developing your personal branding and sales skills and this is the programme for you. Hear from Issy below who is benefitting from membership & has already secured investment in her business through the Academy!"
        />
        <Card
          heading="BUSINESS LEADERS"
          body="The Academy offers a powerful coaching framework to sharpen your leadership skills, reconnect with your purpose, and build the kind of team culture that drives exceptional results. You’ll gain access to a high-calibre peer network, emotionally intelligent coaching, and receive a CMI recognised certification. \
Hear from Andrew below, a senior leader with Begbies Traynor Group PLC ."
        />
        <Card
          heading="THOSE JUGGLING EMPLOYMENT & BUILDING A BUSINESS"
          body="Increasingly people are developing 'Portfolio' careers - juggling employment & self employment as the popularity of free-lance contracting increases. The Academy provides a recognised CMI qualification, a powerful brand and a supportive team to help you develop your 'portfolio' career. \n\nHear from Sophie below who has recently embarked on this journey."
        />
      </Section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-xl sm:text-2xl font-semibold text-neutral-900">
          IMAGINE THE NETWORK, THE CONTACTS & THE OPPORTUNITES THAT WILL OPEN UP FOR YOU?
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center">
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">HEAR FIRST HAND FROM CURRENT ACADEMY MEMBERS BELOW...</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-xl border border-neutral-200 bg-neutral-50 h-48 flex items-center justify-center text-neutral-400 text-sm">Video placeholder</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Who
