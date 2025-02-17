import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";


const Footer = () => {
  return (
    <div className='borgandy '>
        
        <div className="footer-p p-10 container mx-auto grid grid-cols-1 md:grid-cols-3">
            <div className="mr-[70px]">
                <h4 className="text-orange-500  text-2xl mb-5 font-bold">About Us</h4>
                <p>We are committed to delivering high-quality solutions and services to meet your needs. Our mission is to empower your digital presence.</p>
            </div>

            <div className="">
                <h4 className="text-orange-500 text-2xl mb-5 font-bold"> Quick Links</h4>
                <p>Home <br /> About <br />Services <br />Contact</p>
            </div>
            <div className="">
                <h4 className="text-orange-500 text-2xl mb-5 font-bold ">Contact Us
                </h4>
                <div className="">
                    <p>123 Street Name, City, Country</p>
                </div>
                <div className="">
                    <p>+123 456 7890</p>
                </div>
                <div className="">
                    <p>support@example.com</p>
                </div>
            </div>
        </div>
        <hr className='h-[1px] bg-gray-500  border-none mt-10' />
             <div className=" flex justify-between p-10">
                <div className="buttons-footer flex justify-between">
                    <button><FaFacebookF /></button>
                    <button><FaInstagram /></button>
                    <button> <IoLogoTwitter /></button>
                    <button><FaLinkedinIn /></button>
                </div>
                <div className="">
                     <p>© 2024 AbdulRahman Alaa. All Rights Reserved.</p>
                </div>
             </div>
    </div>
  )
}

export default Footer