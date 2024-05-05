import { useAuth } from '../../context/AuthContext'
import './landing.css'
import landingImg from "../../assets/landing_2.jfif";
import { Link } from 'react-router-dom';
const Landing = () => {
    const {user} = useAuth();
  return (
    <section className="landing">
        <div className="landing__welcome">
            <h3>Welcome, {user == null ?" Guest" : user.displayName}</h3>
            <p>What would you like to do today?</p>
        </div>
        <div className="landing__content">
            <div className="left">
                <div className="landing__left-details">
                    <h2>Hobby Horizon</h2>
                    <p>Here you can find your passion.</p>
                </div>
                <div className="landing__left-button">
                    <Link to="/hobbies">Explore Categories</Link>
                </div>
            </div>
            <span></span>
            <div className="right">
                <div className="shapes">
                    {[...Array(3)].map((_, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {[...Array(3)].map((_, colIndex) => (
                                <span key={colIndex}></span>
                            ))}
                        </div>
                    ))}
                </div>
                <img src={landingImg} alt="landing-img" />
                <div className="shapes shapes_2">
                    {[...Array(3)].map((_, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {[...Array(3)].map((_, colIndex) => (
                                <span key={colIndex}></span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Landing