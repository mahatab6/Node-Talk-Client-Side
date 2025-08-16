import React from 'react'

const Contact = () => {

  return (
    <div className='w-11/12 md:w-8/12 mx-auto'>
        <div className='py-10'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-extrabold text-center pb-10'>Contact</h1>
            
            <p className='text-base md:text-lg lg:text-xl pb-4'>NodeTalk is a fully distributed non-profit organisation registered in USA, with team members spread all over the world. We can be contacted by post at the following address:</p>

            <p className='text-base md:text-lg lg:text-xl font-bold border-l-2 pl-3 '>
                NodeTalk  Foundation  <br />
                160 Robinson Road <br />
                #14-04 SFDF Center <br />
                USA, 068914 
            </p>
            <div className="divider"></div>

            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center pb-10' >How to reach us</h2>

            <form noValidate="" className="flex flex-1 space-y-3 flex-col p-10 rounded-2xl bg-secondary">
                
                <label className="block flex-1 ">
                    <span className="mb-1 text-xl font-medium">Full name</span>
                    <input type="text" placeholder="Enter your name" className="block p-3 w-full  rounded-md shadow-sm focus:ring focus:ring-opacity-75 " />
                </label>
                <label className="block flex-1">
                    <span className="mb-1 text-xl font-medium">Email address</span>
                    <input type="email" placeholder="Enter your email" className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 " />
                </label>
                
                <label className="block">
                    <span className="mb-1 text-xl font-medium">Subject</span>
                    <input type="email" placeholder="Subject" className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 " />
                </label>
                <label className="block">
                    <span className="mb-1 text-xl font-medium">Message</span>
                    <textarea rows="3" placeholder='write your comment' className="block p-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 "></textarea>
                </label>
                <button type="button" className="self-center w-full  py-2 hover:cursor-pointer text-lg rounded focus:ring hover:ring focus:ring-opacity-75 btn-primary bg-[#fcf5c7] text-white">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact