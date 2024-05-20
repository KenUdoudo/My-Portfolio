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
                <div className='h-[50px] w-[50px] bg-[#1b6535] rounded-full shadow-xl'></div>
            </div>

            <div className="flex flex-row w-full h-[400px]">
                <div className={`${tab === 0 ? "w-[60%]" : "w-[35%]"}`} onClick={()=> setTab(0)}>
                    <img src={ one } className="object-cover w-full h-full"/>
                </div>
                <div className={`${tab === 1 ? "w-[60%]" : "w-[35%]"} `} onClick={()=> setTab(1)}>
                    <img src={ two } className="object-cover w-full h-full"/>
                </div>
                <div className={`${tab === 2 ? "w-[60%]" : "w-[35%]"} `} onClick={()=> setTab(2)}>
                    <img src={ three } className="object-cover w-full h-full"/>
                </div>
                <div className={`${tab === 3 ? "w-[60%]" : "w-[35%]"} `} onClick={()=> setTab(3)}>
                    <img src={ four } className="object-cover w-full h-full"/>
                </div>
            </div>
        </div>
    );
}
 
export default Sec3home;