import logo from './assets/blackLogo.png';
const Sec2home = () => {
    return ( 
        <div className="px-[50px] mt-[70px]">
            <div>
                <div>
                    <div className='flex flex-row items-center gap-[10px]'>
                        <div className='h-[50px] w-[50px] bg-[#d7fec8] rounded-full'></div>
                        <div>
                            <p className='text-[28px] font-bold'>About NACOS</p>
                            <p className='text-[18px]'>Brief history of NACOS National</p>
                        </div>
                    </div>
                    <p>
                        <span className='text-[23px]'>T</span>he Nigerian Association of Computing Students (NACOS) is a student professional body with presence in almost all tertiary institutions in Nigeria (both private and government owned). NACOS was founded by groups of students in July 1993 with the backing of Nigerian Computer Society (NCS) as its parent body. It provides avenues for students (in any IT related feild) to highlight and champion issues for interest in a coordinated and organized manner.
                    </p>
                </div>
                <img src={ logo }/>
            </div>


        </div>
    );
}
 
export default Sec2home;