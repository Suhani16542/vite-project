import React from 'react'

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#A3C4F3] via-[#C1E3DD] to-[#A3C4F3] text-[#3A3A3A] py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
          
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-[#3A3A3A]">
              Simplify Your Form Filling <br /> Process with{" "}
              <span className="text-[#FFB5A7]">FillIt</span>
            </h1>

            <p className="text-lg text-[#555555] mb-8">
              No more queues, no more confusion. Book, upload, pay,  
              and get your official forms filled from home — fast, secure, and hassle-free.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="bg-[#A3C4F3] text-[#3A3A3A] font-semibold px-6 py-2 rounded-full hover:bg-[#8AB3E9] transition">
                Get Started
              </button>
              <button className="bg-[#FFFFFF] text-[#3A3A3A] font-semibold px-6 py-2 rounded-full hover:bg-[#A3C4F3] hover:text-white transition">
                Get Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/graph-growing-financial-business-concept_53876-133967.jpg"
              alt="FormEase Dashboard"
              className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#FFF9F9] py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-[#3A3A3A] mb-12">
            Why Choose <span className="text-[#FFB5A7]">Fill It / Us</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Upload Documents Easily",
                desc: "Upload and manage files directly with smart recognition."
              },
              {
                title: "Secure Online Payments",
                desc: "Make safe and verified transactions instantly."
              },
              {
                title: "Track Your Progress",
                desc: "Stay updated with real-time progress tracking."
              },
              {
                title: "Easy Form Booking",
                desc: "Book your form with guided steps and no confusion."
              },
              {
                title: "AI Assistant Support",
                desc: "Get instant AI help for smart form filling and suggestions."
              },
              {
                title: "Mobile Friendly Design",
                desc: "Use Fill It easily on mobile, tablet, and desktop devices."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#FFFFFF] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-[#E8E8E8]"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#3A3A3A]">
                  {item.title}
                </h3>
                <p className="text-[#555555] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-[#A3C4F3] via-[#C1E3DD] to-[#A3C4F3] text-[#3A3A3A]">
        <h2 className="text-3xl font-bold mb-8">How Fill It Works</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Submit Your Request",
            "Employee Assigned",
            "Form Filled Securely",
            "Instant PDF + Payment Confirmation",
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-[#FFFFFF]/60 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <div className="text-2xl text-[#FFB5A7] font-bold mb-2">
                {i + 1}.
              </div>
              <p className="text-[#3A3A3A]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USER REVIEWS */}
      <div className="bg-gradient-to-r from-[#A3C4F3] via-[#C1E3DD] to-[#A3C4F3] text-[#3A3A3A] py-16 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10 text-center">What Our Users Say</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {/* Reviews (unchanged structure, colors updated) */}
          {/* -- you may keep your original reviews -- */}
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <section className="bg-gradient-to-r from-[#A3C4F3] via-[#C1E3DD] to-[#A3C4F3] text-[#3A3A3A] py-20 px-6 flex flex-col items-center text-center">
        
        <h2 className="text-4xl font-bold mb-4">Experience How Fill It Works</h2>
        <p className="max-w-2xl text-lg text-[#555555] mb-14">
          See how easy it is to get your forms filled by our professional team. 
          Just a few simple steps and your paperwork is done — secure, fast, and hassle-free!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">

          {/* Step Cards */}
          {[
            "Upload Your Form",
            "Our Expert Fills It",
            "Download Your Form",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF]/60 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-2">{text}</h3>
              <p className="text-sm text-[#555555]">
                {i === 0 && "Choose the form you need filled or upload your document—secure and simple."}
                {i === 1 && "A verified employee reviews and fills your form accurately."}
                {i === 2 && "Download your fully completed and verified PDF instantly."}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
