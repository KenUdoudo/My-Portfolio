import Sec3img from './assetsHome/sec4 img.png'
const Sec3 = () => {
    return (  
        <div className="flex flex-row justify-around items-center gap-x-10 mt-32">
            <div className='flex flex-col justify-center items-start gap-y-5'>
            <p className='text-sm font-bold bg-orange-100 px-2 py-1 rounded'>Shop now pay later</p>
            <h3 className='text-lg font-bold'>Get access to quick loans and shop at your<br /> convenience with plenti credit.</h3>
            <p className=' text-gray-500'>Experience the flexibility of Plenti Credit. Shop now and pay<br />later with our convenient Plenti Credit feature. No more waiting<br /> - enjoy your purchases while managing your budget.</p>
            <button className='text-xs font-extrabold bg-orange-300 px-10 py-2 rounded-full mt-5'>Join for free</button>
           </div>
           <img src={ Sec3img } className='w-2/5'/>
           
        </div>
    );
}
 
export default Sec3;