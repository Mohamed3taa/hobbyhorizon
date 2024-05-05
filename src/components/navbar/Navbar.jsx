import './navbar.css'
import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { 
    IoHomeOutline,
    IoBrushOutline, 
    IoColorPaletteOutline ,
    IoBookOutline,
    IoWalkOutline,
    IoAppsOutline,
    IoPersonSharp ,
    IoShieldCheckmark ,
    IoEnterOutline,
    IoBicycleOutline
} from "react-icons/io5";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useState } from 'react';
const Navbar = () => {
    const {user} = useAuth();
    const [showToggle, setShowToggle] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
  return (
    <nav className="navbar">
        <Link to="/" className="navbar__logo">
            <img src={logo} alt="logo" />
        </Link>
        <div className={`navbar__links ${showToggle ? "show" : ""}`}>
            <ul>
                <li>
                    <NavLink to="/">
                        <IoHomeOutline />   
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hobbies">
                        <IoBrushOutline />
                        <span>Hobbies</span>    
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hobbies/reading">
                        <IoBookOutline />
                        <span>Reading</span>       
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hobbies/painting">
                        <IoColorPaletteOutline />
                        <span>Painting</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hobbies/cycling">
                        <IoBicycleOutline />
                        <span>Cycling</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hobbies/running">
                        <IoWalkOutline />
                        <span>Running</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="navbar__btns">
            {user
            ?<div className="user__details">
                <IoPersonSharp 
                    className="user__details-icon" 
                    size="24"
                    onClick={()=> setShowProfile(!showProfile)}
                />
                <ul className={`user__details-nav ${showProfile ? "show" :""}`}>
                    <li>
                        <Link to={"/profile"} onClick={()=> setShowProfile(false)}>
                            <IoPersonSharp/>
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/privacy"} onClick={()=> setShowProfile(false)}>
                            <IoShieldCheckmark />
                            <span>Privacy</span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={()=> {
                            signOut(auth)
                            setShowProfile(false)
                        }}>
                            <IoEnterOutline size={20}/>
                            <span>Log out</span>
                        </button>
                    </li>
                </ul>
            </div>
            : 
            <div className="logged">
                <Link to="/signin">Log in</Link>
                <Link to="/register" className="register">Sign up</Link>
            </div>
            }
            <span className="toggle" onClick={()=> setShowToggle(!showToggle)}>
                <IoAppsOutline size="24"/>
            </span>
        </div>
    </nav>
  )
}

export default Navbar