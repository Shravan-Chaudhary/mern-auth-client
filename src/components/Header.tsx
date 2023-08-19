import {useCallback, useState} from "react";
import placeholder from '@/assets/placeholder.jpg'
import MenuItem from "@/components/MenuItem.tsx";
import {Link} from "react-router-dom";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() =>{
        setIsOpen((value) => !value)
    }, [])

    return (
        // Navbar Container
        <div className='bg-gray-800 p-3 px-5 md:p-4 lg:p-6 lg:px-12 flex justify-between items-center'>
            {/*Logo Container*/}
            <div>
                <h1 className='text-xl  md:text-2xl lg:text-3xl cursor-pointer' style={{color: '#F8F0E3'}}>MERN AUTH</h1>
            </div>

            {/*Buttons Container*/}
            <div onClick={toggleOpen} className=' border-[1px] border-neutral-200 rounded-full cursor-pointer hover:shadow-md transition'>

                <div className=''>
                    <img src={placeholder} alt='avatar' width='40' height='40' className='rounded-full'/>
                </div>
            </div>

            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-14 md:top-16 text-sm'>

                    <div className='flex flex-col cursor-pointer'>
                        <>
                            <Link to={`/signup`}>
                                <MenuItem onClick={() => {}} label='Sign Up' />
                            </Link>

                            <Link to={`/signin`}>
                                <MenuItem onClick={() => {}} label='Sing In' />
                            </Link>
                        </>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;