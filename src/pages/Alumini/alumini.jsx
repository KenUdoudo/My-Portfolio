import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import four from './assets/4.png'
import five from './assets/5.png'
const Alumini = () => {
    return (
        <div className="h-[500px] relative">
            <div className="text-center py-[250px]">
            <p className="text-[25px] font-semibold">Alumini is coming soon</p>
            <p>Please check back in some time</p>
            </div>
            <img src={ one } className='absolute md:top-[60%] md:right-[10%]'/>
            <img src={ two } className='absolute md:top-[25%] md:right-[20%]'/>
            <img src={ three } className='absolute md:top-[85%] md:left-[20%]'/>
            <img src={ four } className='absolute md:bottom-[-100px] md:left-[40%]'/>
            <img src={ five } className='absolute md:top-[30%] md:left-[30%]'/>
        </div>
    );
}
 
export default Alumini;