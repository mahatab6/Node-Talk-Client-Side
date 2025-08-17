import { Link } from "react-router";
import membershipImage from '../../../../assets/Membership.jpg'

const Advertisement = () => {
  return (
    <section className="md:pb-20">
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg overflow-hidden">
        
        {/* Background Image with Overlay */}
        <img
          src={membershipImage}
          alt="Membership"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        
        <div className="relative z-10 p-10 md:p-16 text-center text-white space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-md">
            🎉 Unlock Premium Benefits with Our Membership!
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Get unlimited access to exclusive content, trending posts, and special community features.  
            Become a <span className="font-bold text-yellow-300">Premium Member</span> today and enjoy all the perks!
          </p>
          
          <div className="flex justify-center gap-4">
            <Link to="/membership">
              <button className="px-6 py-3 rounded-lg bg-yellow-400 hover:cursor-pointer text-gray-900 font-bold hover:bg-yellow-500 transition shadow-md">
                Join Membership
              </button>
            </Link>
            <Link to="/rules">
              <button className="px-6 py-3 rounded-lg bg-white/20 border hover:cursor-pointer border-white text-white font-semibold hover:bg-white/30 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
