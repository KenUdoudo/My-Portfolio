import logo from '../assets/whitelogo.png';
import fb from '../assets/fb.png';
import ig from '../assets/ig.png';
import x from '../assets/x.png';
const Footer = () => {
    return (  
        <div className="px-[20px] md:px-[50px] py-[30px] mt-[100px] bg-black">
            <div className="flex flex-col md:flex-row justify-between gap-y-[20px] items-start w-full">
                <div className='flex flex-col justify-start items-start gap-[10px] w-full md:w-[30%]'>
                    <div className='flex flex-row items-center gap-[5px] md:gap-[10px]'>
                        <img src={ logo } className='w-[50px] aspect-w-full'/>
                        <p className='text-[24px] font-semibold text-white cursor-default'>NACOS MTU</p>
                    </div>
                    <p className='text-white text-[13px] text-justify'>The Nigerian Association of Computer Science is a multi-university community with a base in virtually every tertiary institution in the country. The MTU chapter was officially opened in 2021, and since then, we've been building a free space for all students of computer science and all related courses to minge.</p>
                </div>

                <div className=' flex flex-row md:flex-col lg:flex-row justify-center items-start gap-[70px] md:gap-[30px] lg:gap-[70px]'>
                    <div className='flex flex-col justify-start gap-[6px] md:gap-[15px] group'>
                        <div className='relative text-white'>
                            <span className='transition-all duration-300 ease-in-out font-bold'>NACOS</span>
                            <span className='absolute bottom-[-7px] left-0 w-0 h-[3px] bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                        </div>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>Home</p>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>About</p>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>Events</p>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>Library</p>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>QHub</p>
                    </div>
                    <div className='flex flex-col justify-start gap-[6px] md:gap-[15px] group'>
                        <div className='relative text-white'>
                            <span className='transition-all duration-300 ease-in-out font-bold'>RESOURCES</span>
                            <span className='absolute bottom-[-7px] left-0 w-0 h-[3px] bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                        </div>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>Blog</p>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>Gallery</p>
                    </div>
                </div>

                <div className='flex flex-row justify-center items-start gap-[70px] md:gap-[30px] lg:gap-[70px]'>
                    <div className='flex flex-col justify-start gap-[6px] md:gap-[15px] group'>
                        <div className='relative text-white'>
                            <span className='transition-all duration-300 ease-in-out font-bold'>CONTACT US</span>
                            <span className='absolute bottom-[-7px] left-0 w-0 h-[3px] bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                        </div>
                        <p className='text-white text-[13px] cursor-pointer'><span className='font-bold'>Email:</span> hello@nacos.mtu.edu.ng</p>
                        <p className='text-white text-[13px] cursor-default'><span className='font-bold'>Address:</span> College of Basic and <br /> Applied Sciences, Mountain Top <br />University, Km 12 Lagos Ibadan <br />Expressway, Ogun State.</p>
                    </div>
                    <div className='flex flex-col justify-start gap-[6px] md:gap-[10px] group'>
                        <div className='relative text-white'>
                            <span className='transition-all duration-300 ease-in-out font-bold'>FOLLOW US</span>
                            <span className='absolute bottom-[-7px] left-0 w-0 h-[3px] bg-white transition-all duration-300 ease-in-out group-hover:w-full'></span>
                        </div>
                        <p className='text-white text-[13px] cursor-default'>We are on socials</p>
                        <div className='flex flex-row items-center gap-[10px]'>
                            <img src={ fb } className='cursor-pointer'/>
                            <img src={ ig } className='cursor-pointer'/>
                            <img src={ x } className='cursor-pointer'/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-[30px] border-color-[#e9e9e9]'/>
            
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-[5px] md:gap-[10px]'>
                    <p className='text-white text-[6px] md:text-[11px] font-bold cursor-pointer'>TERMS AND CONDITIONS</p>
                    <p className='text-white text-[6px] md:text-[11px] font-bold cursor-pointer'>PRIVACY POLICY</p>
                </div>
                <div className='flex flex-row items-center gap-[5px]'>
                    <p className='text-white text-[6px] md:text-[11px] font-bold'>© | 2024</p>
                    <p className='text-white text-[5px] md:text-[9px]'>Department of Computer Science and Mathematics, <br />Mountain Top University</p>
                </div>
            </div>
            
        </div>
    );
}
 
export default Footer;