import Sec5img from './assetsHome/illustrationssec6 img.png'
const Sec5 = () => {
    return (
        <div className="flex flex-row justify-around items-center gap-x-10 mt-32">
            <div className='flex flex-col justify-center items-start gap-y-5'>
            <p className='text-sm font-bold bg-orange-100 px-2 py-1 rounded'>Buy gift cards from your favorite store</p>
            <h3 className='text-lg font-bold'>Pay bills, buy gift cards & vouchers<br /> from your favorite stores</h3>
            <p className=' text-gray-500'>Every time you buy a gift card, you're not just getting the<br />value of the card you also enjoy the double advantage <br /> of cashbacks and loyalty points with every purchase.</p>
            <button className='text-xs font-extrabold bg-orange-300 px-10 py-2 rounded-full mt-5'>Join for free</button>
           </div>
           <img src={ Sec5img } className='w-2/5'/>
           
        </div>
    );
}
 
export default Sec5;