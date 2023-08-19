import placeholder from "@/assets/placeholder.jpg"

const Avatar = () => {
    return (
        <div>
            <img className='rounded-full' height='30' width='30' src={placeholder} alt='avatar'> </img>
        </div>
    );
};

export default Avatar;