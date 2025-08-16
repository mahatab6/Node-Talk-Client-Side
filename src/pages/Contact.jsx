import React from 'react'

const Contact = () => {
  return (
    <div className='w-11/12 md:w-8/12 mx-auto py-12'>
      {/* Page Header */}
      <div className='text-center space-y-4'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold'>Contact Us</h1>
        <p className='text-base md:text-lg lg:text-xl text-gray-600'>
          Have questions, feedback, or partnership inquiries? We’d love to hear from you.
        </p>
      </div>

      {/* Address Section */}
      <div className='bg-secondary rounded-2xl shadow-md mt-10 p-6 md:p-10'>
        <h2 className='text-2xl md:text-3xl font-bold pb-4'>Our Office</h2>
        <p className='text-lg leading-relaxed'>
          NodeTalk Foundation <br />
          160 Robinson Road <br />
          #14-04 SFDF Center <br />
          USA, 068914
        </p>
      </div>

      <div className="divider my-10"></div>

      {/* Contact Form */}
      <div className=''>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center pb-6'>Send us a Message</h2>

        <form noValidate className="flex flex-col gap-6 p-6 md:p-10 rounded-2xl bg-secondary shadow-md">
          {/* Full Name */}
          <label className="block">
            <span className="mb-2 block text-lg font-medium">Full Name</span>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="block p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none" 
            />
          </label>

          {/* Email */}
          <label className="block">
            <span className="mb-2 block text-lg font-medium">Email Address</span>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="block p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none" 
            />
          </label>

          {/* Subject */}
          <label className="block">
            <span className="mb-2 block text-lg font-medium">Subject</span>
            <input 
              type="text" 
              placeholder="Subject" 
              className="block p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none" 
            />
          </label>

          {/* Message */}
          <label className="block">
            <span className="mb-2 block text-lg font-medium">Message</span>
            <textarea 
              rows="5" 
              placeholder="Write your message here..." 
              className="block p-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            ></textarea>
          </label>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-3 text-lg font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200 focus:ring-4 focus:ring-indigo-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
