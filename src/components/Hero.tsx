import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div className='flex justify-center py-10 px-6 md:p-10 md:px-16'  >

        {/*    Content Container*/}
        <div className='bg-blue-100 max-w-7xl py-12 px-6 md:py-16 border-gray-300 border rounded-2xl space-y-10 text-center'>
            <h2 className='text-3xl md:text-5xl font-semibold'>MERN Authentication </h2>

            <p className='text-md md:text-xl flex-wrap'>This is a Authentication Application that stores a JWT in an HTTP-Only cookie. It also uses Redux Toolkit for State Management. Also this application focuses mainly on using Express.js and Redux Toolkit</p>

            {/*Buttons Container*/}
            <div className='space-x-6 md:space-x-9'>
                <Link to={`/signin`}>
                    <Button className='active:scale-[.98] active:duration-75 ease-in-out transition-all bg-blue-500 hover:bg-blue-800 text-lg font-bold px-5 py-4 md:px-8 md:py-6 rounded-xl' variant='ghost' style={{color: '#F8F0E3'}}>Sign In</Button>
                </Link>

                <Link to={`/signup`}>
                    <Button className='active:scale-[.98] active:duration-75 ease-in-out transition-all bg-neutral-500 hover:bg-neutral-600 text-lg font-bold px-5 py-4 md:px-8 md:py-6 rounded-xl' variant='ghost' style={{color: '#F8F0E3'}}>Sign Up</Button>
                </Link>
            </div>
        </div>

        </div>
    );
};

export default Hero;