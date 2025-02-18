import hot from '../assets/hot-beverages.png'
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";



const Links =[
  { id: 1, page: "Home", path:"/"},
  { id: 2, page: "About", path:"/About"},
  { id: 3, page: "Contact", path:"/Contact"},
  { id: 4, page: "Support", path:"/Support"},
  { id: 5, page: "Pricing", path:"/Pricing"}

]


const Nav = () => {

   const [open , setOpen]= useState(false)
      

  return (
    <div className='borgandy '>
      <div className="container-fluid  p-10 grid grid-cols-2 mdl:grid-cols-3">
            <div className="flex items-center">
                  <img className='w-10 mr-5' src={hot} alt="" />
                  <h2 className='font-bold text-2xl'>Coffee</h2>
            </div>

            <div className="hidden mdl:flex">
               <ul className='flex justify-between'>
                  {Links.map((item) => (
                    <li className='hover:bg-white hover:text-[#3F181C] p-2 rounded-md mr-4 font-bold' key={item.id}>
                      <Link to={item.path}>{item.page}</Link>
                    </li>

                  ))}
               </ul>
            </div>
            
            <div className="flex justify-end items-center hidden mdl:flex">          
                <button className="border border-white w-[100px] p-2 ">Get Startd</button>
            </div>


            <div className="flex justify-end mdl:hidden"
                onClick={ () => setOpen(!open)}>

                  {!open  ? <FaBars className='text-[20px]' /> : <IoClose className='text-2xl' />}
            
            </div>

      </div>
     

      {/* icon bar
     <div className="fixed top-0 right-0 bg-white text-[brown] w-[200px] h-[1000px] transform ">



          close icon
          <div className="absolute top-4 left-2" onClick={() => setOpen(!setOpen)}>
              <IoClose className='text-2xl' />
          </div>


          data link
            <ul className='flex flex-col p-10'>
                  {Links.map((item) => (
                    <li className='hover:bg-[#3F181C] hover:text-white p-2 m-4 rounded-md font-bold' key={item.id}>
                      <Link to={item.path}>{item.page}</Link>
                    </li>
                  ))}
            </ul>

 
            <div className="flex justify-center ">          
                <button className="border border-white font-bold border-[#3F181C] hover:bg-[#3F181C] hover:text-white rounded-md w-[100px] p-2 mb-7 ">Get Startd</button>
            </div>
            

        </div> */}


      
    </div>
  )
}

export default Nav