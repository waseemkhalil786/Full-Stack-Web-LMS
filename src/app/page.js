
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-gray-100 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-indigo-600">My LMS</div>
          <nav className="flex space-x-4">
            <Link href="#" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-indigo-600">
              Courses
            </Link>
            <Link href="#" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
         
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Learn Anytime, Anywhere</h1>
          <p className="mb-6">
            Access a wide range of courses from the comfort of your home.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold">
            Explore Courses
          </button>
        </div>
      </section>

      <section className="py-16 bg-slate-200">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold mb-6">
            Apply to our Latest Courses{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p>Learn from industry experts with years of experience.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Flexible Learning</h3>
              <p>Access courses anytime and learn at your own pace.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Certifications</h3>
              <p>Get certified after completing each course.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-200">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our LMS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p>Learn from industry experts with years of experience.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Flexible Learning</h3>
              <p>Access courses anytime and learn at your own pace.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Certifications</h3>
              <p>Get certified after completing each course.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="mb-6">
            Join thousands of students who are already learning with us.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-black py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Waseem LMS . All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
