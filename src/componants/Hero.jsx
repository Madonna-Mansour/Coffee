import coffe from '../assets/coffee-hero-section.png';




const Hero = () => {
  return (
    <div className="borgandy">
       <div className="container mx-auto borgandy p-10 grid grid-cols-1 md:grid-cols-2 flex justify-center items-center">
        
        <div className="p-5">
            <h4 className="text-orange-500 text-3xl mb-10 font-bold">Best Coffee</h4>
            <h1 className='text-5xl mb-10'>Make Your Day Great With Our Special Coffee</h1>
            <p className='text-2xl'>Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
            <div className="my-10 flex " >
                <button className="mr-10 bg-orange-500 w-40 rounded-full h-[50px] hover:bg-transparent transition duration-30 ">Order Now</button>
                <button className=" border border-white mr-10 w-40 rounded-full h-[50px] border-white hover:bg-transparent transition duration-30">Contact Us</button>
            </div>
        </div>

        <div className="flex justify-end ">
           <img className='w-[550px]' src={coffe} alt="coffe" />
        </div>
    </div>
    </div>
  )
}

export default Hero