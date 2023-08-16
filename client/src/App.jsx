import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Register as Register } from "./pages/login/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"
import {About} from './pages/about/About'
import { Contact } from "./pages/contact/Contact"
import { Blog } from "./pages/blog/Blog"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/details/:id' element={<DetailsPages/>} />
          <Route exact path='/account' element={<Account/>} />
          <Route exact path='/create' element={<Create/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/pages' element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App