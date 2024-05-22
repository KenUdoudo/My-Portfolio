import { useState } from "react";
import one from './assets/1.jpg';
import two from './assets/2.jpg';
import three from './assets/3.jpg';
import four from './assets/4.jpg';
const Sec3home = () => {
    const [tab, setTab] = useState(0);
    return (  
        <div className="px-[50px] mt-[100px]">
            <div className="flex flex-row justify-between items-center w-full">
                <div className='flex flex-row items-center gap-[10px]'>
                    <div className='h-[50px] w-[50px] bg-[#d7fec8] rounded-full shadow-xl'></div>
                    <div>
                        <p className='text-[28px] font-bold'>Executives</p>
                        <p className='text-[18px]'>Meet the Executive Committee</p>
                    </div>
                </div>
                <div className='h-[50px] w-[50px] bg-[#1b6535] rounded-full shadow-xl cursor-pointer hover:bg-[#30854e] transition-all duration-500'></div>
            </div>

            <div className="flex flex-row w-full h-[500px] gap-x-[10px] mt-[50px]">
                <div className={`${tab === 0 ? "w-[60%]" : "w-[30%]"}  transition-all duration-500 relative`} onClick={()=> setTab(0)}>
                    <img src={ one } className={`${tab === 0 ? "" : "filter grayscale"}  object-cover w-full h-full`}/>
                    <div className={`${tab === 0 ? "text-black" : "text-white text-center"} absolute bottom-[20px] left-[20px] transition-all duration-500 leading-[1]`}>
                        <p className="text-[20px] font-medium">Merit Mohammed</p>
                        <p className="text-[30px] font-semibold">President</p>
                    </div>
                </div>
                <div className={`${tab === 1 ? "w-[60%]" : "w-[30%]"}  transition-all duration-500 relative`} onClick={()=> setTab(1)}>
                    <img src={ two } className={`${tab === 1 ? "" : "filter grayscale"}  object-cover w-full h-full`}/>
                    <div className={`${tab === 1 ? "text-black" : "text-white text-center"} absolute bottom-[20px] left-[20px] transition-all duration-500 leading-[1]`}>
                        <p className="text-[20px] font-medium">Damilola Adesina</p>
                        <p className="text-[30px] font-semibold">Vice President</p>
                    </div>
                </div>
                <div className={`${tab === 2 ? "w-[60%]" : "w-[30%]"}  transition-all duration-500 relative`} onClick={()=> setTab(2)}>
                    <img src={ three } className={`${tab === 2 ? "" : "filter grayscale"}  object-cover w-full h-full`}/>
                    <div className={`${tab === 2 ? "text-black" : "text-white text-center"} absolute bottom-[20px] left-[20px] transition-all duration-500 leading-[1]`}>
                        <p className="text-[20px] font-medium">Oluwayomi Apata</p>
                        <p className="text-[30px] font-semibold">Gen. Secretary</p>
                    </div>
                </div>
                <div className={`${tab === 3 ? "w-[60%]" : "w-[30%]"}  transition-all duration-500 relative`} onClick={()=> setTab(3)}>
                    <img src={ four } className={`${tab === 3 ? "" : "filter grayscale"}  object-cover w-full h-full`}/>
                    <div className={`${tab === 3 ? "text-black" : "text-white text-center"} absolute bottom-[20px] left-[20px] transition-all duration-500 leading-[1]`}>
                        <p className="text-[20px] font-medium">Ikemefuna Daniel</p>
                        <p className="text-[30px] font-semibold">Fin. Secretary</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sec3home;