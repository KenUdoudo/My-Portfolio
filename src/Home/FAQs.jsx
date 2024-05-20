import add from './assetsHome/PLLUS AND ADD.png'
import minus from './assetsHome/PLLUS AND ADD (1).png'
const FAQ = () => {
    return (  
        <div className='flex flex-col justify-center items-center mt-14'>
            <p className='text-lg font-semibold text-center'>Frequently asked questions<br /> about Plenti Africa</p>
            <div className='flex flex-row justify-between items-center mt-4 w-full mx-20 bg-orange-100 rounded px-2 py-1'>
                <p className='font-bold'>Q: What is Plenti Africa?</p>
                <img src={ add }/>
            </div>
            <div className='w-full mx-20 px-2 py-1 mt-4 border-2 border-purple-100 rounded-md'>
                <div className='flex flex-row justify-between items-center'>
                    <p className='font-bold'>Q: What is Plenti Africa?</p>
                <img src={ minus }/>
                </div>
                <p className='mt-4'>Plenti Africa is a marketplace and reward platform that offers great deals, exclusive rewards, and<br /> a range of services from your favorite stores. We're dedicated to making your shopping<br /> experience enjoyable and rewarding.</p>
            </div>
            <div className='w-full mx-20 px-2 py-1 mt-4 border-2 border-purple-100 rounded-md'>
                <div className='flex flex-row justify-between items-center'>
                    <p className='font-bold'>Q: What is Plenti Africa?</p>
                <img src={ minus }/>
                </div>
                <p className='mt-4'>Plenti Africa is a marketplace and reward platform that offers great deals, exclusive rewards, and<br /> a range of services from your favorite stores. We're dedicated to making your shopping<br /> experience enjoyable and rewarding.</p>
            </div>


            <div className='flex flex-col justify-center items-start mt-14 w-full'>
                <p className='text-lg font-semibold'>What our users are saying about us</p>
                <div className='flex flex-row'>
                    <p className='text-sm bg-orange-100'>Plenti Africa has transformed my shopping<br /> routine. The deals are unbeatable and I've<br /> been able to save a substantial amount on<br /> every purchase. Plus, the loyalty points add<br /> an extra layer of value. Highly<br /> recommended! - Sarah W.</p>
                </div>
            </div>
        </div>
    );
}
 
export default FAQ;