import bg from './assets/mainbg.svg';
const Sec1home = () => {
    return (  
        <div>
            <img src={ bg } className='h-[100vh] w-full object-cover'/>

            <div className='absolute top-[40%] z-10 flex flex-col items-start gap-y-[20px]'>
                <p className='text-[30px] text-white font-extrabold'>POWERED BY <br />COMPUTER SCIENCE</p>
                <p>Empowered to Excel</p>
                <p className='bg-[#1b6535] text-white py-[10px] px-[20px] cursor-pointer hover:bg-[#30854e] rounded-lg'>Learn About</p>
            </div>
        </div>
    );
}
 
export default Sec1home;