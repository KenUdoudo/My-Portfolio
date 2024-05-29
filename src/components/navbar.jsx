import logo from '../assets/blacklogo.svg';
import { HiOutlineMenu } from "react-icons/hi";
const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="absolute top-[10px] px-[10px] w-full z-20">
            <div className='bg-white px-[40px] py-[7px] rounded-xl flex flex-row justify-between items-center'>
             <div className='flex flex-row items-center gap-[10px] cursor-pointer'>
                <img src={ logo } className='w-[50px] h-[50px]'/>
                <p className='text-[#1b6535] text-[24px] font-bold'>NACOS MTU</p>
             </div>

             <button onClick={toggleMenu}><HiOutlineMenu className="h-[25px] w-[25px]"/></button>

             <div className={isOpen ? "" : ""}>
                <p>omo</p>
             </div>
             <div className='hidden md:flex flex-row justify-center items-center gap-x-[40px]'>
                <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500'>Home</p>
                <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500'>About</p>
                <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500'>Events</p>
                <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500'>Library</p>
                <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500'>QHub</p>
                <div>
                    <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500'>Resources</p>

                </div>
                <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500'>Alumini</p>
             </div>

             <p className='hidden md:block bg-[#1b6535] text-white py-[10px] px-[20px] cursor-pointer hover:bg-[#30854e] rounded-lg transition-all duration-500'>Contact Us</p>
           </div>
        </div>
    )
}

export default Navbar;