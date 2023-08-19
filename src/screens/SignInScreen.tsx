import SignInForm from "@/components/SignInForm.tsx";

const SignInScreen = () => {
    return (
        <div className='flex items-center justify-center w-full h-full mt-24 '>
            <div className='w-full flex items-center justify-center md:w-1/2'>
                <SignInForm />
            </div>
        </div>
    );
};

export default SignInScreen;