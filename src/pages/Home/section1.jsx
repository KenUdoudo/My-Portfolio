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
            </div>
            <div className='flex flex-row items-center gap-[15px] absolute bottom-[10px] left-[50px]'>
                <div className='flex flex-row items-center gap-[10px]'>
                    <img src={ greenlogo } className='w-[50px] aspect-w-full'/>
                    <span className='w-[3px] h-[50px] bg-white'></span>
                    <img src={ schoollogo } className='w-[50px] aspect-w-full'/>
                </div>
                <p className='text-white text-[14px] leading-[0.9]'>IN ASSOCIATION WITH <br />THE NIGERIAN ASSOCIATION OF COMPUTING STUDENTS <br />AND MOUNTAIN TOP UNIVERSITY</p>
            </div>
            </div>

        </div>
    );
}
 
export default Sec1home;