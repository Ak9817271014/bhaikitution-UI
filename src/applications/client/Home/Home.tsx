import type { JSX } from "react"

const Home = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">
            Bhai Ki Tuition
          </h1>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li className="hover:text-indigo-600 cursor-pointer">Home</li>
            <li className="hover:text-indigo-600 cursor-pointer">Courses</li>
            <li className="hover:text-indigo-600 cursor-pointer">Batches</li>
            <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Learn from Bhaiya, Succeed in Life
          </h2>
          <p className="text-lg mb-8">
            Online & Offline Tuition for Classes 6–12 with Personal Guidance.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Join Now
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600">
              Free Demo Class
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Popular Courses
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CourseCard
              title="Maths (Class 6–10)"
              description="Strong basics, shortcuts, and exam-focused practice."
            />
            <CourseCard
              title="Science (Class 6–10)"
              description="Concept clarity with real-life examples."
            />
            <CourseCard
              title="Physics & Chemistry (11–12)"
              description="Board + competitive exam preparation."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Bhai Ki Tuition?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <WhyCard text="Experienced Bhaiya Teacher" />
            <WhyCard text="Small Batches, Personal Attention" />
            <WhyCard text="Regular Tests & Doubt Sessions" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 Bhai Ki Tuition. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          Contact: +91 98765 43210
        </p>
      </footer>
    </div>
  )
}

export default Home

// ---------- Reusable Components ----------

type CourseCardProps = {
  title: string
  description: string
}

const CourseCard = ({ title, description }: CourseCardProps): JSX.Element => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-indigo-600 mb-2">
        {title}
      </h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

type WhyCardProps = {
  text: string
}

const WhyCard = ({ text }: WhyCardProps): JSX.Element => {
  return (
    <div className="bg-indigo-50 p-6 rounded-lg shadow">
      <p className="font-semibold text-gray-700">{text}</p>
    </div>
  )
}
