import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/navbar/Navbar'
import Categories from './components/categories/Categories'
import Profile from './pages/profile/Profile'
import Privacy from './pages/privacy/Privacy'
import Home from './pages/home/Home'
import HobbyPage from './pages/hobbyPage/HobbyPage'
import HobbyTypes from './components/hobbyTypes/HobbyTypes'
import Footer from './components/footer/Footer'
import Forget from './pages/forgetPassword/Forget'
import TypePage from './pages/typePage/TypePage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/signin' element={<Login />}/>

        <Route path='/forget' element={<Forget />}/>

        <Route path='/register' element={<Register />}/>

        <Route path='/' element={<Home />}/>

        <Route path='/profile' element={<Profile />}/>

        <Route path='/privacy' element={<Privacy />}/>
        
        <Route path='/hobbies' element={
          <div className="hobby__page">
            <Categories />
          </div>
        }/>

        <Route path='/hobbies/:hobbyName' element={
          <>
            <HobbyPage />
            <HobbyTypes heading={"Events"}/>
            <div className="divider"></div>
            <HobbyTypes heading={"Workshops"}/>
            <div className="divider"></div>
            <HobbyTypes heading={"Competitions"}/>
            <div style={{marginBottom:"50px"}}></div>
          </>
        }/>

        <Route path='/hobbies/:hobbyName/:hobbyType/:hobbyId' element={<TypePage />}/>
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
