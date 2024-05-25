import logo from '../assets/whitelogo.png';
const Footer = () => {
    return (  
        <div className="px-[50px] py-[30px] mt-[100px] bg-black">
            <div className="flex flex-row justify-between items-start w-full">
                <div className='flex flex-col justify-start items-start gap-[10px]'>
                    <div className='flex flex-row items-center gap-[10px]'>
                        <img src={ logo } className='w-[50px] aspect-w-full'/>
                        <p className='text-[24px] font-semibold text-white'>NACOS MTU</p>
                    </div>
                    <p className='text-white text-[13px] text-justify'>The Nigerian Association of Computer Science is a multi-university community with a base in virtually every tertiary institution in the country. The MTU chapter was officially opened in 2021, and since then, we've been building a free space for all students of computer science and all related courses to minge.</p>
                </div>
            </div>
            <div>
                
            </div>




        </div>
    );
}
 
export default Footer;