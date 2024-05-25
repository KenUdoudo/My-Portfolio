import logo from '../assets/whitelogo.png';
import fb from '../assets/fb.png';
import ig from '../assets/ig.png';
import x from '../assets/x.png';
const Footer = () => {
    return (  
        <div className="px-[50px] py-[30px] mt-[100px] bg-black">
            <div className="flex flex-row justify-between items-start w-full">
                <div className='flex flex-col justify-start items-start gap-[10px] w-[30%]'>
                    <div className='flex flex-row items-center gap-[10px]'>
                        <img src={ logo } className='w-[50px] aspect-w-full'/>
                        <p className='text-[24px] font-semibold text-white cursor-default'>NACOS MTU</p>
                    </div>
                    <p className='text-white text-[13px] text-justify'>The Nigerian Association of Computer Science is a multi-university community with a base in virtually every tertiary institution in the country. The MTU chapter was officially opened in 2021, and since then, we've been building a free space for all students of computer science and all related courses to minge.</p>
                </div>

                <div className=' flex flex-row justify-center items-start gap-[70px]'>
                    <div className='flex flex-col justify-start gap-[15px]'>
                        <p className='text-white font-semibold cursor-default hover:border-b-[3px] transition-all duration-200'>NACOS</p>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>Home</p>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>About</p>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>Events</p>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>Library</p>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>QHub</p>
                    </div>
                    <div className='flex flex-col justify-start gap-[15px]'>
                        <p className='text-white font-semibold cursor-default hover:border-b-[3px] transition-all duration-200'>Resources</p>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>Blog</p>
                        <p className='text-white cursor-pointer hover:text-[#e1bb72] text-[13px]'>Gallery</p>
                    </div>
                </div>

                <div className='flex flex-row justify-center items-start gap-[70px]'>
                    <div className='flex flex-col justify-start gap-[15px]'>
                        <p className='text-white font-semibold cursor-default hover:border-b-[3px] transition-all duration-200'>Contact Us</p>
                        <p className='text-white text-[13px] cursor-pointer'><span className='font-bold'>Email:</span> hello@nacos.mtu.edu.ng</p>
                        <p className='text-white text-[13px] cursor-default'><span className='font-bold'>Address:</span> College of Basic and <br /> Applied Sciences, Mountain Top <br />University, Km 12 Lagos Ibadan <br />Expressway, Ogun State.</p>
                    </div>
                    <div className='flex flex-col justify-start gap-[10px]'>
                        <p className='text-white font-semibold cursor-default hover:border-b-[3px] transition-all duration-200'>FOLLOW US</p>
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

        </div>
    );
}
 
export default Footer;