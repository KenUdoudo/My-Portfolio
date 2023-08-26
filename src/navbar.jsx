import logo from './assets/plenti_logo_dark.png'

const Navbar = () =>{
    return (
        <div className="">
           <img src={ logo }/>
            <ul>
                <li>For Merchants</li>
                <li>Deals</li>
                <li>How it works</li>
                <li>Contact</li>
            </ul>
            <div>
                <button>Log in</button>
                <button>Get started</button>
            </div>
           
        </div>
    )
}

export default Navbar;