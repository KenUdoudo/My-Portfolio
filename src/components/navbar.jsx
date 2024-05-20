import logo from './assets/plenti_logo_dark.png'

const Navbar = () =>{
    return (
        <div className="flex flex-row justify-evenly items-center mt-7 gap-32">
           <img src={ logo }/>
            <ul className='flex flex-row justify-center items-center gap-14 text-gray-400 text-sm'>
                <li>For Merchants</li>
                <li>Deals</li>
                <li>How it works</li>
                <li>Contact</li>
            </ul>
            <div className='flex flex-row justify-center items-center gap-10'>
                <button className='text-xs font-extrabold text-red-600 px-8 py-2 rounded-full bg-orange-100'>Log in</button>
                <button className='text-xs font-extrabold bg-red-600 text-white px-8 py-2 rounded-full'>Get started</button>
            </div>
           
        </div>
    )
}

export default Navbar;