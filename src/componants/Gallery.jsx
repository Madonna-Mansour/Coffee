import gallery1 from '../assets/gallery-1.jpg'
import gallery2 from '../assets/gallery-2.jpg'
import gallery3 from '../assets/gallery-3.jpg'
import gallery4 from '../assets/gallery-4.jpg'
import gallery5 from '../assets/gallery-5.jpg'
import gallery6 from '../assets/gallery-6.jpg'


const Images = [
    { id: 1, img: gallery1 },
    { id: 2, img: gallery2 },
    { id: 3, img: gallery3 },
    { id: 4, img: gallery4 },
    { id: 5, img: gallery5 },
    { id: 6, img: gallery6 },
];

const Gallery = () => {
  return (
      <div className="borgandy p-10">
        <div className="container mx-auto">
            <ul className=' gallery grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 '>
                        {Images.map((Image) => (
                          <li className='overflow-hidden' key={Image.id}>
                             <img className='h-[240px] w-[370px] rounded-md mb-10 hover:scale-105 transition-all ' src={Image.img} alt="" />                        
                          </li>
                        ))}
             </ul>
         </div>                
      </div>
  )
}

export default Gallery