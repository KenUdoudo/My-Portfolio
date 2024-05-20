import Sec1img from './assetsHome/Contentsec two img.png'
const Sec1 = () =>{
    return (
        <div className="flex flex-col justify-center items-center w-full mt-14">
           <div className="flex flex-row text-xs justify-center items-center font-extrabold gap-x-3">
            <p>FOR BUYERS</p>
            <div className=" bg-orange-100 w-16 h-7 rounded-full"><div className="rounded-full bg-red-600 w-6 h-6 ml-1"></div></div>
            <p>FOR MERCHANTS</p>
           </div>

           <div className="flex flex-col justify-center items-center mt-10">
            <h3 className="text-center font-bold text-xl">Create a free account to start <span className="text-red-600">shopping, earning loyalty points<br /> & cashbacks</span> at your favourite stores.</h3>
            <p className="text-center text-gray-500 text-base mt-5">Get rewarded everytime you shop. Plenti Africa is designed to bring you<br /> incredible deals, amazing rewards, and a seamless shopping experience.</p>
            <button className='text-xs font-extrabold bg-red-600 text-white px-20 py-2 rounded-full mt-5'>Join for free</button>
            <img src={ Sec1img }/>
            </div> 

        </div>
    )
}

export default Sec1;