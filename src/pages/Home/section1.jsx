import bg from './assets/mainbg.svg';
import greenlogo from './assets/NNL2.png';
import schoollogo from './assets/schoollogo.png';
const Sec1home = () => {
    return (  
        <div>
            <div className='relative'>
            <img src={ bg } className='h-[100vh] w-full object-cover'/>
            
            <div className='absolute top-[35%] z-10 flex flex-col items-start gap-y-[10px] px-[50px]'>
                <p className='text-[45px] text-white font-extrabold'>POWERED BY <br />COMPUTER SCIENCE</p>
                <p className='text-[30px] text-white'>Empowered to Excel</p>
                <p className='bg-[#1b6535] text-white py-[10px] px-[30px] cursor-pointer hover:bg-[#30854e] rounded-xl transition-all duration-500'>Learn About</p>
            </div></div>

            <div>
                <div>
                    <img src={ greenlogo } />
                    <p>|</p>
                    <img src={ schoollogo }/>
                </div>
            </div>
        </div>
    );
}
 
export default Sec1home;