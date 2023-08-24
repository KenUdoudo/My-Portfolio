const Navbar = () =>{
    return (
        <div className="w-4/5">
            <ul className="flex flex-row gap-x-5 text-gray-400 justify-center items-center p-4 mt-10">
                <a href="#"><li>HOME</li></a>
                <a href="#"><li>ABOUT</li></a>
                <a href="#"><li>BLOG CATEGORIES</li></a>
                <a href="#"><li>VIDEOS</li></a>
                <a href="#"><li>GAME<span>RANX</span></li></a>
            </ul>
        </div>
    )
}

export default Navbar;