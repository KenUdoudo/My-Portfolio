const Sec4home = () => {
    return (  
        <div className="px-[50px] mt-[100px] bg-[#4b4a4a]">
            <div className="flex flex-row justify-between items-center w-full">
                <div className='flex flex-row items-center gap-[10px]'>
                    <div className='h-[50px] w-[50px] bg-[#d7fec8] rounded-full shadow-xl'></div>
                    <div>
                        <p className='text-[28px] font-bold'>Events</p>
                        <p className='text-[18px]'>Stay up to date</p>
                    </div>
                </div>
                <div className='h-[50px] w-[50px] bg-[#1b6535] rounded-full shadow-xl cursor-pointer hover:bg-[#30854e] transition-all duration-500'></div>
            </div>

            <div className="flex flex-row items-center overflow-x-hidden scroll-m-4 mt-[30px]">
                <div className="flex flex-col gap-[20px]">
                    <div className="w-[330px] h-[200px] shadow-2xl rounded-xl bg-white relative">
                        <div className="absolute bottom-[10px] flex flex-row justify-between items-center w-full  px-[10px]">
                            <p className="leading-[0.9]"><span className="text-[22px] font-bold">16th</span><br />January</p>
                            <p className="text-[22px] text-right font-bold leading-[0.9]">Freshers<br />Orientation</p>
                        </div>
                    </div>
                    <div className="w-[330px] h-[300px] shadow-2xl rounded-xl bg-white relative">
                        <div className="absolute bottom-[10px] flex flex-row justify-between items-center w-full  px-[10px]">
                            <p className="leading-[0.9]"><span className="text-[22px] font-bold">3rd</span><br />February</p>
                            <p className="text-[22px] text-right font-bold leading-[0.9]">EXAM WEEK</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sec4home;