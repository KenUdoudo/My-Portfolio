const Navbar = () =>{
    return (
        <div className="bg-black border-0 rounded w-4/5">
            <ul className="flex flex-row gap-x-5 text-white justify-center items-center p-4 mt-10">
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Service</li></a>
                <a href="#"><li>Resume</li></a>
                <a href="#"><li>Project</li></a>
                <a href="#"><li>Contact Me</li></a>
            </ul>
        </div>
    )
}

export default Navbar;