
const Note = () => {
  return (
      <div className="borgandy">
        <div className='borgandy container mx-auto p-10 grid grid-cols-1  lgl:grid-cols-2 '>
        <div className="black flex flex-col p-7 mt-5 ">
            <h1 className="text-orange-200 text-3xl mb-10 ">Need Help? Open a Ticket</h1>
            <p>Our support team will get back to you ASAP via email.</p>
            <div className="grid grid-cols-1 lgl:grid-cols-2 mt-7">

                <div className="flex flex-col">
                    <label htmlFor="">Your Name</label>
                    <input placeholder='Enter Your Name' className='borgandy mt-1 mb-7 p-2 w-[250px] rounded-[7px]' type="text" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">Your Email</label>
                    <input placeholder='Enter Your Email' className='borgandy mt-1 mb-7 p-2 rounded-[7px] w-[250px]' type="text" />
                </div>

            </div>
            <textarea className='borgandy w-[100%] h-[200px] p-10 rounded-[7px]' name="" id=""></textarea>
            <button className="mt-10 bg-orange-500 w-40 rounded-full h-[50px] hover:bg-transparent transition duration-30 ">Submit Ticket</button>
        </div>

        <div className="black w-[80%] mt-5 ms-[50px] p-10">
            <h1 className="text-orange-300 text-3xl  ">Subscribe to receive future updates</h1>
            <p className=" text-1xl my-5 ">Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.</p>
            <hr className='h-[1px] bg-orange-500  border-none mb-10' />
            <div className="">
            <input placeholder='Enter Your Name' className='borgandy mb-3 mb-7 p-2 rounded-[7px] w-[100%]' type="text" />
            <input placeholder='Enter Your Email' className='borgandy mb-3 mb-7 p-2 rounded-[7px] w-[100%]' type="text" />
            <button className='mt-10 bg-orange-500 w-[100%] rounded-[7px] h-[50px] hover:bg-transparent transition duration-30'>Submit</button>
            </div>
        </div>

    </div>
      </div>
  )
}

export default Note