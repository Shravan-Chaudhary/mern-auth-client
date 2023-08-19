import SignUpForm from "@/components/SignUpForm.tsx";

const SignUpScreen = () => {
    return (
        <div className='flex items-center justify-center w-full h-full mt-24 '>
            <div className='w-full flex items-center justify-center md:w-1/2'>
                <SignUpForm />
            </div>
        </div>
    );
};

export default SignUpScreen;