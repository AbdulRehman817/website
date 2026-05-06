import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reviews | Capt. Arshad Clinic',
  description: 'See what our patients say about Capt. Arshad Clinic. 5.0 star rating with verified patient reviews.',
}

const reviews = [
  {
    name: 'Ahmed Khan',
    initials: 'AK',
    color: 'bg-[var(--primary-color)]',
    text: 'Excellent service! The doctor was very thorough and caring. I felt heard and properly treated. Highly recommend this clinic to everyone in Karachi.',
  },
  {
    name: 'Sara Fatima',
    initials: 'SF',
    color: 'bg-[var(--accent-color)]',
    text: 'Very professional and friendly staff. No long waiting times like other clinics. Got my prescription and felt better the same day. Truly a reliable clinic!',
  },
  {
    name: 'Muhammad Hassan',
    initials: 'MH',
    color: 'bg-[var(--accent2-color)]',
    text: 'The doctor is very experienced and explains everything clearly. The clinic is clean and well-maintained. I\'ve been bringing my family here for years.',
  },
  {
    name: 'Fatima Ali',
    initials: 'FA',
    color: 'bg-[var(--accent3-color)]',
    text: 'Walked in without an appointment and was seen within 15 minutes. Great experience! The staff was very helpful and the doctor was very knowledgeable.',
  },
  {
    name: 'Rashid Siddiqui',
    initials: 'RS',
    color: 'bg-[var(--dark-background-color)]',
    text: 'Best walk-in clinic in the area! The doctor genuinely cares about his patients. Clean facility, reasonable fees, and excellent medical care.',
  },
  {
    name: 'Nadia Ahmed',
    initials: 'NA',
    color: 'bg-[var(--primary-color)]',
    text: 'Very impressed with the level of care. The doctor took time to understand my problem and provided effective treatment. Will definitely come back!',
  },
]

const Reviews = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-[var(--light-background-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[var(--accent-color)]/10 text-[var(--accent-color)] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Patient Reviews
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[var(--dark-text-color)] mb-6">
            What Our Patients Say
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex text-[var(--accent-color)]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-4xl font-bold text-[var(--dark-text-color)]">5.0</span>
          </div>
          <p className="text-[var(--gray-text-color)]">Based on patient reviews</p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[var(--light-background-color)] p-8 rounded-2xl">
                <div className="flex text-[var(--accent-color)] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--gray-text-color)] mb-6 italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold">{review.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[var(--dark-text-color)]">{review.name}</p>
                    <p className="text-sm text-[var(--gray-text-color)]">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--light-background-color)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading text-[var(--dark-text-color)] mb-4">Experience Quality Care</h2>
          <p className="text-[var(--gray-text-color)] mb-8">Join our satisfied patients and visit Capt. Arshad Clinic today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+923312102592" className="bg-[var(--primary-color)] hover:bg-[var(--primary-button-hover-bg-color)] text-white px-8 py-4 rounded-[var(--button-rounded-radius)] font-semibold transition-all duration-300">
              Call Now
            </a>
            <a href="/contact" className="bg-white hover:bg-gray-50 text-[var(--dark-text-color)] border-2 border-[var(--primary-color)] px-8 py-4 rounded-[var(--button-rounded-radius)] font-semibold transition-all duration-300">
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews
