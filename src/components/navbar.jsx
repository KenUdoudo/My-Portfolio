import logo from '../assets/blacklogo.svg';

const Navbar = () =>{
    return (
        <div className="absolute top-[10px] px-[10px]">
            <div className='bg-white px-[20px] py-[7px] rounded-xl'>
             <div className='flex flex-row items-center gap-[10px]'>
                <img src={ logo } className='w-[50px] h-[50px]'/>
                <p className='text-[#1b6535] text-[24px] font-bold'>NACOS MTU</p>
             </div>
           </div>
        </div>
    )
}

export default Navbar;