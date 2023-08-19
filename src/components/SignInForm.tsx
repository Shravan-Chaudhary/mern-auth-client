// import {useState} from "react";

import {Link} from "react-router-dom";

const SignInForm = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    //
    // const submitHandler = async (e) => {
    //     e.preventDefault()
    //     console.log('submit')
    // }
    
    return (
        <>
           <div className='bg-white px-10 py-20 md:px-16 md:py-22 rounded-3xl border-2 border-gray-200'>
                <h1 className='text-5xl font-semibold'>Welcome Back</h1>
               <p className='font-medium text-lg text-gray-500 mt-4'>Welcome Back! Please Enter Your Details</p>

                     {/*Form*/}
               <div className='mt-8'>

                        {/*Email*/}
                   <div>
                       <label className='text-lg font-medium'>Email</label>
                       <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Email'/>
                   </div>

                        {/*Password*/}
                   <div>
                       <label className='text-lg font-medium'>Password</label>
                       <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' type="password" placeholder='Password'/>
                   </div>

                        {/*SignUp Button*/}
                   <div className='flex flex-row mt-8 items-center text-md justify-start'>
                       <p className='font-medium text-base'>Don't have an account?</p>

                       <Link to={`/signup`}>
                           <button className='font-medium text-base text-blue-500 ml-2' >Sign Up</button>
                       </Link>
                   </div>

                        {/*Sign In Button*/}
                   <div className='mt-8 flex justify-center items-center'>
                       <button className='active:scale-[.98] active:duration-75 ease-in-out transition-all py-4 px-16 rounded-xl bg-blue-500 hover:bg-blue-800 text-lg font-bold' style={{color: '#F8F0E3'}}>
                           Sign In
                       </button>
                   </div>
               </div>
           </div>
        </>
    );
};

export default SignInForm;