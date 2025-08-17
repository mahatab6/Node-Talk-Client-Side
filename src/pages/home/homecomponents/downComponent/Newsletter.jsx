import { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
    toast.success("Thank you for subscribing!");
    
  };

  return (
    <div className="bg-secondary text-text py-12 rounded-2xl mb-10 md:my-20">
      <div className="w-11/12 md:w-8/12 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">📬 Stay Updated!</h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter and never miss important updates.
        </p>

        <form
          onSubmit={handleSubscribe}
          className=" flex-col md:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-lg text-black w-full  border"
          />
          <button
            type="submit"
            className="bg-accent px-6 py-3 rounded-lg font-semibold mt-5 hover:cursor-pointer transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm mt-4 opacity-80">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
