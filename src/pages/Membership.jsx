import React from 'react';
import { GoDotFill } from "react-icons/go";
import { MdOutlineDone } from "react-icons/md";
import { ImPower } from "react-icons/im";




const Membership = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center py-10 space-y-2'>
                <h1 className='text-3xl lg:text-5xl font-bold'>Choose Your Membership</h1>
                <p className='text-xl'>Unlock the full potential of our forum community with premium features</p>
                <p className='inline-flex items-center border space-x-3 px-6 py-3 text-2xl rounded-full mt-10 '><GoDotFill className=''/>Current Status: BRONZE Member</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto'> 
                <div className='text-center justify-items-center space-y-5 bg-amber-900 rounded-2xl p-8 border border-orange-400/30 h-full'>
                    <div className='text-center'>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                <span className="text-xs">UI</span>
                            </div>
                        </div>
                        <h2 className='text-2xl font-bold mb-2'>Bronze Member</h2>
                        <p className='text-3xl font-bold text-orange-400 mb-2'>Free</p>
                        <p>Perfect for getting started</p>
                    </div>
                    <ul className=' space-y-2'>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-orange-400' />Create up to 5 posts</p>
                        </li>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-orange-400' />Comment on posts</p>
                        </li>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-orange-400' />Vote on posts</p>
                        </li>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-orange-400' />Basic profile</p>
                        </li>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-orange-400' />Community access</p>
                        </li>
                    </ul>
                   <button className='bg-amber-300 text-white w-40 px-4 py-2 rounded disabled:bg-orange-300' disabled>
                    Free Forever</button>
                </div>
                <div className='text-center justify-items-center space-y-5 bg-amber-900 rounded-2xl p-8 border border-orange-400/30 h-full'>
                    <div className='text-center'>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                <span className="text-xs">UI</span>
                            </div>
                        </div>
                        <h2 className='text-2xl font-bold mb-2'>Gold Member</h2>
                        <p className='text-xl font-bold mb-2'><span className='text-yellow-400 text-3xl'>$9.99</span>/month</p>
                        <p>Unlock premium features</p>
                    </div>
                    <ul className=' space-y-2'>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-yellow-400' />Unlimited posts</p>
                        </li>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-yellow-400' />Priority support</p>
                        </li>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-yellow-400' />Exclusive badge</p>
                        </li>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-yellow-400' />Advanced profile features</p>
                        </li>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-yellow-400' />Early access to new features</p>
                        </li>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-yellow-400' />Ad-free experience</p>
                        </li>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-yellow-400' />Custom profile themes</p>
                        </li>
                        <li>
                            <p className="flex items-center gap-1 text-xl"><MdOutlineDone className='text-yellow-400' />Direct messaging</p>
                        </li>
                    </ul>
                   <button className='bg-yellow-400 text-white w-40 px-4 py-2 rounded btn'>
                    Free Forever</button>
                </div>
                
            </div>

            <div className='py-10 text-center space-y-2'>
                <h2 className='text-3xl font-bold'>Why Upgrade to Gold?</h2>
                <p className='text-xl'>Take your forum experience to the next level with exclusive premium features</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-5xl lg:mx-auto gap-8 pb-10 '>
                <div className='justify-items-center space-y-2 text-center p-6 rounded-xl bg-base-200'>
                    <ImPower />
                    <h2 className='text-xl font-bold'>Unlimited Posts</h2>
                    <p>Share as many ideas and discussions as you want without any restrictions</p>
                </div>
                <div className='justify-items-center space-y-2 text-center p-6  rounded-xl bg-base-200'>
                    <ImPower />
                    <h2 className='text-xl font-bold'>Exclusive Badge</h2>
                    <p>Stand out in the community with your premium gold member badge</p>
                </div>
                <div className='justify-items-center space-y-2 text-center p-6  rounded-xl bg-base-200'>
                    <ImPower />
                    <h2 className='text-xl font-bold'>Priority Support</h2>
                    <p>Get faster responses and dedicated support from our team</p>
                </div>
            </div>

            <div className='pb-10 '>
                <h1 className='text-center text-3xl font-bold pb-10'>Frequently Asked Questions</h1>
                <div className='max-w-3xl mx-auto space-y-6'>
                    <div className='bg-base-200 p-4 rounded-2xl space-y-1'>
                        <h3 className='text-xl font-bold'>Can I cancel my membership anytime?</h3>
                        <p>Yes, you can cancel your Gold membership at any time. You'll continue to have access to premium features until the end of your billing period.</p>
                    </div>
                    <div className='bg-base-200 p-4 rounded-2xl space-y-1'>
                        <h3 className='text-xl font-bold'>What happens to my posts if I downgrade?</h3>
                        <p>All your existing posts will remain visible and accessible. However, as a Bronze member, you'll be limited to creating 5 new posts.</p>
                    </div>
                    <div className='bg-base-200 p-4 rounded-2xl space-y-1'>
                        <h3 className='text-xl font-bold'>Is there a free trial available?</h3>
                        <p>Currently, we don't offer a free trial, but you can start with our Bronze membership to explore the platform before upgrading.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Membership;