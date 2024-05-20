import Sec2img from './assetsHome/mobilEsec3 img.png'
const Sec2 = () => {
    return (  
        <div className="flex flex-row justify-around items-center gap-x-10">
           <img src={ Sec2img } className='w-2/5'/>
           <div className='flex flex-col justify-center items-start gap-y-5'>
            <p className='text-sm font-bold bg-pink-100 px-2 py-1 rounded'>Discover the hottest deals at your favorite store</p>
            <h3 className='text-lg font-bold'>Explore your preferred shopping categories, buy<br /> giftcards and get instant cashbacks & points.</h3>
            <p className=' text-gray-500'>We've partnered with trusted merchants to bring you a wide range of<br /> quality products, services and reward all at your fingertips.</p>
            <button className='text-xs font-extrabold bg-pink-900 text-white px-10 py-2 rounded-full mt-5'>Join for free</button>
           </div>
        </div>
    );
}
 
export default Sec2;