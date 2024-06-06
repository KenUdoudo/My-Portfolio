const Sec1Event = () => {
    return (  
        <div className="pt-[70px] px-[20px]">
            <p className="font-semibold">Upcoming Events</p>

            <div className="px-[10px] flex flex-col w-full">
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="bg-[#d7fec8] w-[70%] flex flex-row items-center justify-between px-[10px]">
                        <p><span className="font-bold">Repair Day,</span><br />for all students</p>
                        <p>LTB, CBAS</p>
                    </div>
                    <div className="bg-[#d7fec8] w-[20%] text-center">
                        <p className="font-bold"><span className="text-[13px] font-normal">Apr</span>31st</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sec1Event;