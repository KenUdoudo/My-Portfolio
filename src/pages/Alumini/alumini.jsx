import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
const Alumini = () => {
    return (
        <div className="h-[500px] relative">
            <div className="text-center py-[250px]">
            <p className="text-[25px] font-semibold">Alumini is coming soon</p>
            <p>Please check back in some time</p>
            </div>
            <img src={ one } className='absolute top-[60%] right-[10%]'/>
            <img src={ two } className='absolute top-[25%] right-[20%]'/>
            <img src={ three } className='absolute top-[85%] left-[20%]'/>
        </div>
    );
}
 
export default Alumini;