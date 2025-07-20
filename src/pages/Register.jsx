import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import NodeTalkLogo from '../components/NodeTalkLogo';
import { IoMdCloudUpload } from "react-icons/io";
import axios from 'axios';
import { Helmet } from 'react-helmet';


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, userProfile, GoogleLogin} = useAuth();
    const navigate = useNavigate();
    const [disImage, setDisProfile] = useState();

    const onSubmit = (data) => {
        
        createUser(data.email, data.password)
            .then(result =>{
                if(result.user?.email){
                    toast.success('Account created successfully!');
                    userProfile(data.Name, disImage)
                    navigate('/');
                }
            })
            .catch( (error) => {
                if(error){
                    toast.error(`${error.message}`)
                }
            })
      
    };

    
    const handleGoole = () =>{
        GoogleLogin()
            .then(result =>{
                    if(result.user?.email){
                        toast.success('Account created successfully!');
                        navigate('/');
                    }
            })
            .catch( (error) => {
                if(error){
                    toast.error(`${error.message}`)
                }
            })
    }

    const handleImageChange = async(e) =>{
        const image = e.target.files[0]
        const formData = new FormData();
        formData.append("image",image)
        const res =await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Api_key}`,formData)
        setDisProfile(res.data.data.url)
    }


  return (
    <div className="max-w-md mx-auto p-6 rounded-xl bg-[#9292AB]  ">
      <Helmet>
        <title>NodeTalk - Sign up</title>
      </Helmet>
      <div className="text-center justify-items-center mb-6 space-y-2">
        <NodeTalkLogo/>
        <h1 className="text-3xl font-bold">Join</h1>
        <p className="text-gray-600">Create an account to get started</p>
      </div>

          <div>
            <label className="block text-lg font-medium mb-1">Photo</label>
            <div className="dropdown dropdown-right">
                <div tabIndex={0}>
                    <div className="avatar ">
                        <div className="ring-primary w-12 rounded-full ">
                          {
                            disImage? <img  src={disImage} /> : <IoMdCloudUpload size={35}/>
                          }
                        </div>
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <input onChange={handleImageChange} name='image' type="file"  />  
                </ul>
            </div>
            
          </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        <div>
          <label className="block text-lg font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
            {...register('Name', {
              required: 'User name is required',
            })}
          />
        </div>
        
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

        
        <div>
          <label className="block text-lg font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
                // value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                pattern: {
                  
                  message: 'Password must contain uppercase, lowercase, number, and special character',
                },
              })}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-xl text-gray-600 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

       
        <button
          type="submit"
          className="w-full py-3 bg-violet-600 hover:bg-violet-700  font-semibold rounded-xl transition-all duration-300"
        >
          Register
        </button>
      </form>

      <div className="divider">OR</div>

      <button onClick={handleGoole} className="btn w-full bg-[#A6A8BF] text-black border-[#e5e5e5] hover:border-violet-700">
        <svg aria-label="Google logo" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
        Login with Google
      </button>

      <p className='text-xl text-center pt-2'>
        Already have an account?
        <Link to="/login" className='text-violet-600'> Login</Link>
      </p>
    </div>
  );
};

export default Register;
