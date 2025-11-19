import React from 'react'
import { Link } from 'react-router-dom'



function Landing() {
  return (
    <>
    
    <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* 🔹 Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Simplify Your Form Filling <br /> Process with{" "}
            <span className="text-yellow-300">FillIt</span>
          </h1>

          <p className="text-lg text-gray-100 mb-8">
            No more queues, no more confusion. Book, upload, pay, and get your official forms 
            filled from home — fast, secure, and hassle-free.
          </p>

          {/* 🔹 Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/login">
            <button className="bg-yellow-400 text-purple-800 font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition">
              Get Started
            </button>
            </Link>
            <button className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition">
              Get Demo
            </button>
          </div>
        </div>

        {/* 🔹 Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/graph-growing-financial-business-concept_53876-133967.jpg?t=st=1731490204~exp=1731493804~hmac=4a8e2a9d0d0735cb350a6a3e8d89488e17f84c61a0f482319d1a9b17b606b9ac&w=1060"
            alt="FormEase Dashboard"
            className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
    <section className="bg-white py-16">
    <div className="max-w-6xl mx-auto text-center px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">
        Why Choose <span className="text-pink-600">Fill It / Us</span>?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4 text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            width="40"
            height="40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Upload Documents Easily
          </h3>
          <p className="text-gray-500 text-sm">
            Upload and manage files directly with smart recognition.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4 text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            width="40"
            height="40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c0 .552-.224 1.052-.586 1.414A2.003 2.003 0 0110 14H8v2h8v-2h-2a2 2 0 01-1.414-.586A2.003 2.003 0 0112 11zM12 4v4"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Secure Online Payments
          </h3>
          <p className="text-gray-500 text-sm">
            Make safe and verified transactions instantly.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4 text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            width="40"
            height="40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7 12a5 5 0 1010 0 5 5 0 00-10 0z"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Track Your Progress
          </h3>
          <p className="text-gray-500 text-sm">
            Stay updated with real-time progress tracking.
          </p>
        </div>

        {/* 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4 text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            width="40"
            height="40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20l9-5-9-5-9 5 9 5zm0-10V4l9 5-9 5-9-5 9-5z"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Easy Form Booking
          </h3>
          <p className="text-gray-500 text-sm">
            Book your form with guided steps and no confusion.
          </p>
        </div>

        {/* 5 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4 text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            width="40"
            height="40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            AI Assistant Support
          </h3>
          <p className="text-gray-500 text-sm">
            Get instant AI help for smart form filling and suggestions.
          </p>
        </div>

        {/* 6 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4 text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            width="40"
            height="40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
          </svg>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Mobile Friendly Design
          </h3>
          <p className="text-gray-500 text-sm">
            Use Fill It easily on mobile, tablet, and desktop devices.
          </p>
        </div>
      </div>
    </div>
  </section>
   {/* How It Works */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white">
        <h2 className="text-3xl font-bold text-white mb-8">How Fill It Works</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Submit Your Request",
            "Employee Assigned",
            "Form Filled Securely",
            "Instant PDF + Payment Confirmation",
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-[#581c87]/60 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <div className="text-2xl text-pink-300 font-bold mb-2">
                {i + 1}.
              </div>
              <p className="text-gray-100">{step}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white py-16 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10 text-center">What Our Users Say</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">

        {/* Review 1 */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white rounded-lg p-6 shadow-lg hover:scale-105 transform transition duration-300">
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Aarav Sharma"
              className="w-12 h-12 rounded-full border-2 border-white mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">Aarav Sharma</h3>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="gold"
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.124 2.27c-.785.57-1.84-.197-1.54-1.118l1.2-3.674a1 1 0 00-.364-1.118L3.048 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm">
            Fill It made my form process so easy! The employee was very professional, and I got my confirmation instantly.
          </p>
        </div>

        {/* Review 2 */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white rounded-lg p-6 shadow-lg hover:scale-105 transform transition duration-300">
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Priya Verma"
              className="w-12 h-12 rounded-full border-2 border-white mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">Priya Verma</h3>
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="gold"
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.124 2.27c-.785.57-1.84-.197-1.54-1.118l1.2-3.674a1 1 0 00-.364-1.118L3.048 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm">
            Fast service and secure process! There was a slight delay in downloading the PDF, but overall a great experience.
          </p>
        </div>

        {/* Review 3 */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white rounded-lg p-6 shadow-lg hover:scale-105 transform transition duration-300">
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/51.jpg"
              alt="Rohit Mehta"
              className="w-12 h-12 rounded-full border-2 border-white mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">Rohit Mehta</h3>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="gold"
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.124 2.27c-.785.57-1.84-.197-1.54-1.118l1.2-3.674a1 1 0 00-.364-1.118L3.048 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm">
            The process was super smooth. The employee guided me step-by-step. Highly recommend using Fill It!
          </p>
        </div>

        {/* Review 4 */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white rounded-lg p-6 shadow-lg hover:scale-105 transform transition duration-300">
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Sneha Kapoor"
              className="w-12 h-12 rounded-full border-2 border-white mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">Sneha Kapoor</h3>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="gold"
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.124 2.27c-.785.57-1.84-.197-1.54-1.118l1.2-3.674a1 1 0 00-.364-1.118L3.048 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm">
            Amazing platform! Filling my form was completely stress-free. Thank you, Fill It!
          </p>
        </div>

        {/* Review 5 */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white rounded-lg p-6 shadow-lg hover:scale-105 transform transition duration-300">
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/28.jpg"
              alt="Aditya Singh"
              className="w-12 h-12 rounded-full border-2 border-white mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">Aditya Singh</h3>
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="gold"
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.124 2.27c-.785.57-1.84-.197-1.54-1.118l1.2-3.674a1 1 0 00-.364-1.118L3.048 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm">
            The user interface is clean and simple. Employee support was quick. Definitely using it again!
          </p>
        </div>

      </div>
    </div>
     <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white py-20 px-6 flex flex-col items-center text-center">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">Experience How Fill It Works</h2>
      <p className="max-w-2xl text-lg text-white/90 mb-14">
        See how easy it is to get your forms filled by our professional team. 
        Just a few simple steps and your paperwork is done — secure, fast, and hassle-free!
      </p>

      {/* Demo Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">

        {/* Step 1 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <div className="text-yellow-300 mb-5">
            {/* Upload Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-16 h-16" viewBox="0 0 16 16">
              <path d="M7.646 1.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 1 1-.708.708L8.5 2.707V10.5a.5.5 0 0 1-1 0V2.707L6.354 4.354a.5.5 0 1 1-.708-.708l2-2z"/>
              <path d="M3 10.5a.5.5 0 0 1 .5.5V14h9v-3a.5.5 0 0 1 1 0v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2">Upload Your Form</h3>
          <p className="text-sm text-white/90">
            Choose the form you need filled or upload your document — our secure system keeps it safe.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <div className="text-yellow-300 mb-5">
            {/* Employee Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-16 h-16" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-7 7c0 1.537.46 2.965 1.248 4.156C3.189 10.642 5.43 9 8 9s4.811 1.642 5.752 3.156A6.978 6.978 0 0 0 15 8a7 7 0 0 0-7-7z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2">Our Expert Fills It</h3>
          <p className="text-sm text-white/90">
            A verified Fill It employee reviews and fills your form accurately based on your details.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <div className="text-yellow-300 mb-5">
            {/* Checkmark / Download Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-16 h-16" viewBox="0 0 16 16">
              <path d="M7.646 14.354a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 13.293V5.5a.5.5 0 0 0-1 0v7.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2z"/>
              <path d="M14.5 14a.5.5 0 0 1 .5.5V15H1v-.5a.5.5 0 0 1 1 0V14h12v.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2">Download Your Form</h3>
          <p className="text-sm text-white/90">
            Get your completely filled and verified form instantly as a downloadable PDF file.
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <button className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-200 transition">
          🚀 Get Started
        </button>
        <button className="border border-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition">
          🎥 Watch Demo
        </button>
      </div>
    </section>
     
    </>
  )
}

export default Landing