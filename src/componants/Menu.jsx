import ice from '../assets/cold-beverages.png'
import desserts from '../assets/desserts.png'
import refreshment from '../assets/refreshment.png'
import combo from '../assets/combo.png'
import coffe from '../assets/coffee-hero-section.png';
import burger from '../assets/burger-frenchfries.png';
import Adress from './Adreesmenu'




const Imges = [
    { id: 1, img: ice },
    { id: 2, img: desserts },
    { id: 3, img: refreshment },
    { id: 4, img: combo },
    { id: 5, img: coffe },
    { id: 6, img: burger },
];



const Menu = () => {
  return (
    <div className="black">
      <Adress  adrees="Menu"/>
          <div className="container mx-auto p-10">
                <ul className="gallery grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 ">
                    {Imges.map((Imgg) =>(
                      <li key={Imgg.id}>
                         <div className="bg-black w-[350px]  p-5 h-[450px] mb-10">
                            <img className='w-[220px]  mb-7 ' src={Imgg.img} alt="" />
                            <h1 className='text-2xl mb-4'> <b>Hot Beverages</b> </h1>
                            <p className='text-[15px] text-gray-400 mb-4'>Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?</p>
                        </div>
                      </li>
                    ))}
                </ul>
             </div>
    </div>
  )
}

export default Menu