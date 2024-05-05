import './footer.css'
import { NavLink } from 'react-router-dom'
import { CgMail } from "react-icons/cg";
import { CiPhone } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
        <div className="col col-1">
            <h2>Hobby Horizon</h2>
            <p>Here you can find your passion.</p>
        </div>
        <div className="col col-2">
            <h3>links</h3>
            <ul>
                <li>
                    <NavLink to="/">
                        <FaCaretRight />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hobbies">
                        <FaCaretRight />
                        <span>Hobbies</span>    
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/events">
                        <FaCaretRight />
                        <span>Events</span>       
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/competitions">
                        <FaCaretRight />
                        <span>Competitions</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/workshops">
                        <FaCaretRight />
                        <span>Workshops</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clubs">
                        <FaCaretRight />
                        <span>Clubs</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="col col-3">
            <h3>Contact us</h3>
            <ul>
                <li>
                    <CgMail /> 
                    <p>hobbyhorizon@gmail.com</p>
                </li>
                <li>
                    <CiPhone /> 
                    <p>+0201123242977</p>
                </li>
            </ul>
            <span></span>
            <span></span>
            <span></span>
            <p className="copyright">
                &copy; All rights reserved to <span>Hobby Horizon Team</span>
            </p>
        </div>
    </footer>
  )
}

export default Footer