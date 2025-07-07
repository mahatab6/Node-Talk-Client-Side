import React from 'react';
import { useForm } from 'react-hook-form';
import PetLogo from '../components/PetLogo';
import { Link } from 'react-router';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    // Handle login logic (Firebase/Auth API/etc.)
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl">
        <div className="text-center justify-items-center mb-6 space-y-2">
            <PetLogo/>
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-gray-600">Sign in to manage your pets</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Field */}
            <div>
            <label className="block text-lg font-medium mb-1">Email</label>
            <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
                {...register('email', {
                required: 'Email is required',
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Enter a valid email address',
                },
                })}
            />
            {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
            </div>

            {/* Password Field */}
            <div>
            <label className="block text-lg font-medium mb-1">Password</label>
            <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
                {...register('password', {
                required: 'Password is required',
                minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                },
                pattern: {
                    value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                    message:
                    'Password must contain uppercase, lowercase, number, and special character',
                },
                })}
            />
                {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-300">Log In</button>
        </form>

        <div className="divider">OR</div>

        <button className="btn w-full bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
        </button>

        <p className='text-xl text-center pt-2'>Don't have an account?<Link to="/register" className='text-violet-600'> Sign up</Link></p>

    </div>
  );
};

export default Login;
