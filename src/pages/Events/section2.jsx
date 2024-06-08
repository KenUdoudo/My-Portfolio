const Sec2Event = () => {
    return (  
        <div className="mt-[40px] px-[20px] md:px-[50px]">
            <p className="font-semibold">Key Events</p>

            <div className="p-[20px] lg:p-[50px] bg-white rounded-lg mt-[20px] flex flex-col gap-[20px]">
                <div className="w-full flex flex-row justify-between">
                    <div className="flex flex-col justify-start items-start w-[45%]">
                        <div className="w-full bg-[#e9e9e9] h-[130px] md:h-[200px] lg:h-[270px] rounded-lg mb-[5px]"></div>
                        <p className="font-semibold text-[13px] md:text-[16px] lg:text-[20px]">NACOS Week</p>
                        <p className="text-[13px] md:text-[16px] lg:text-[20px]">May 13 - May 21</p>
                    </div>
                    <div className="flex flex-col justify-start items-start w-[45%]">
                        <div className="w-full bg-[#e9e9e9] h-[130px] md:h-[200px] lg:h-[270px] rounded-lg mb-[5px]"></div>
                        <p className="font-semibold text-[13px] md:text-[16px] lg:text-[20px]">First Semester Tests</p>
                        <p className="text-[13px] md:text-[16px] lg:text-[20px]">Third week of April</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sec2Event;