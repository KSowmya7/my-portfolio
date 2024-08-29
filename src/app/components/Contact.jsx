

export default function Contact() {
  return (

    <section id="contact">
       <h2 className="text-center text-4xl font-bold text-teal-500  mt-28  mb-0 lg:text-5xl sm:text-3xl sm:mb-0">
        Contact <span className="text-pink-500"> Me</span>
      </h2>

      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
          <form className="">
            <div className="mb-4">
              <label className="block text-gray-700">Your Name</label>
              <input type="text" placeholder="Your Name" className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Email</label>
              <input type="email" placeholder="Your Email" className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Message</label>
              <textarea placeholder="Your Message" className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"></textarea>
            </div>
            <button className="w-full bg-teal-500 text-slate-800 font-semibold py-2 rounded hover:bg-teal-600 transition duration-200">Submit</button>
          </form>
          <div className="mt-6 text-center">
            
            <a href="#" className="inline-block mt-4 bg-teal-500 text-slate-800 font-semibold px-4 py-2 rounded hover:bg-teal-600 transition duration-200">Download Resume</a>
          </div>
        </div>
        
      </div>
    </section>
  );
}

