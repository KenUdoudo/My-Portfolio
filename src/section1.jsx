const Sec1 = () =>{
    return (
        <div className="flex flex-col justify-center items-center gap-y-5">
           <p className="text-xl font-semibold">Hello</p>
           <h2 className="text-4xl font-semibold">I'm <span className="text-red-400">Kendo</span>, Web Developer</h2>
           <p className="mt-3">Kendo's exceptional web design ensured our website's success. Highly recommended!</p>
           <div className="flex flex-row gap-x-5 border-black border-2 rounded-full px-3 py-1">
            <button className="hover:bg-red-400">Portfolio</button>
            <button>Hire Me</button>
           </div>
        </div>
    )
}

export default Sec1;