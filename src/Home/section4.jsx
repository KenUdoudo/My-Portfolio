import Sec4img from "./assetsHome/mobilEsec 5.png"
const Sec4 = () => {
    return (  
        <div className="flex flex-row justify-around items-center gap-x-10 mt-32">
           <img src={ Sec4img } className='w-2/5'/>
           <div className='flex flex-col justify-center items-start gap-y-5'>
           <p className='text-sm font-bold bg-pink-100 px-2 py-1 rounded'>Earn everytime you refer a buddy</p>
            <h3 className='text-lg font-bold'>Earn referral bonus everytime to refer your<br /> friends to Plenti Africa.</h3>
            <p className=' text-gray-500'>Use your unique referral link to invite them to join. The more<br />friends you refer the more you earn, your earnings can be<br /> withdrawn or used to shop at your favorite store.</p>
            <button className='text-xs font-extrabold bg-pink-900 text-white px-10 py-2 rounded-full mt-5'>Join for free</button>
           </div>
        </div>
    );
}
 
export default Sec4;