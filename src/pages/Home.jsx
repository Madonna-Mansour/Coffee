import Hero from '../componants/Hero'
import Menu from '../componants/Menu'
import Gallery from '../componants/Gallery'
import Note from '../componants/Note'
import Adreesgalrry from '../componants/Adreesgalrry'
import Slider from '../componants/Slider'



const Home = () => {
  return (
    <div>
        <Hero />
        <Menu />
        <Adreesgalrry />
        <Gallery />
        {/* <Slider /> */}
        <Note />
    </div>
  )
}

export default Home