import { createBrowserRouter , createRoutesFromElements , Outlet , Route ,RouterProvider } from 'react-router-dom'
import Nav from './componants/Nav'
import Footer from './componants/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Support from './pages/Support'

const Layout = () => {
  return(
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}



const App = () => {
  const routerr = createBrowserRouter(
    createRoutesFromElements(

      <Route> 

          <Route path='/' element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path='/About' element={<About />}></Route>
          </Route>

          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Pricing' element={<Pricing />}></Route>
          <Route path='/Support' element={<Support />}></Route>


      </Route>
  ))
  return (
    <div>
        <RouterProvider router ={routerr}/>
    </div>
  )
}

export default App