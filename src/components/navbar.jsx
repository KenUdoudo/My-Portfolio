import logo from '../assets/blacklogo.svg';

const Navbar = () =>{
    return (
        <div className="absolute top-[10px] px-[10px] w-full">
            <div className='bg-white px-[40px] py-[7px] rounded-xl flex flex-row justify-between items-center'>
             <div className='flex flex-row items-center gap-[10px] cursor-pointer'>
                <img src={ logo } className='w-[50px] h-[50px]'/>
                <p className='text-[#1b6535] text-[24px] font-bold'>NACOS MTU</p>
             </div>

             <div className='flex flex-row justify-center items-center gap-x-[40px]'>
                <p className='hover:text-[#e9e9e9] cursor-pointer'>Home</p>
                <p className='hover:text-[#e9e9e9] cursor-pointer'>About</p>
                <p className='hover:text-[#e9e9e9] cursor-pointer'>Events</p>
                <p className='hover:text-[#e9e9e9] cursor-pointer'>Library</p>
                <p className='hover:text-[#e9e9e9] cursor-pointer'>QHub</p>
                <div>
                    <p className='hover:text-[#e9e9e9] cursor-pointer'>Resources</p>

                </div>
                <p className='hover:text-[#e9e9e9] cursor-pointer'>Alumini</p>
             </div>

             <p className='bg-[#1b6535] text-white py-[10px] px-[20px] cursor-pointer hover:bg-[#30854e] rounded-lg'>Contact Us</p>
           </div>
        </div>
    )
}

export default Navbar;