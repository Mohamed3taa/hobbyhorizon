import './features.css'
import { CgCommunity } from "react-icons/cg";
import { GiWorld, GiUpgrade  } from "react-icons/gi";
import { FaWpexplorer } from "react-icons/fa";
const Features = () => {
  return (
    <section className="features">
        <section className="section__title">
            <h2>Our Features</h2>
        </section>
        <section className="section__content">
                <div className="feature">
                    <div className="card">
                        <div className="top">
                            <GiWorld size="32"/>
                        </div>
                        <div className="bottom">
                                <h3>Variety</h3>
                                <p>Great collection of events, workshops, competitions, and clubs.</p>
                        </div>
                    </div>
                </div>
                <div className="feature">
                    <div className="card">
                        <div className="top">
                            <CgCommunity size="32"/>
                        </div>
                        <div className="bottom">
                                <h3>Communicate</h3>
                                <p>Communicate with people with same interests of you.</p>
                        </div>
                    </div>
                </div>
                <div className="feature">
                    <div className="card">
                        <div className="top">
                            <FaWpexplorer size="32"/>
                        </div>
                        <div className="bottom">
                                <h3>Explore</h3>
                                <p>Explore new edges with new friends in your favorite hobby</p>
                        </div>
                    </div>
                </div>
                <div className="feature">
                    <div className="card">
                        <div className="top">
                            <GiUpgrade size="32"/>
                        </div>
                        <div className="bottom">
                                <h3>Level up</h3>
                                <p>Upgrade your skills in your favorite hobby with coaches and workshops</p>
                        </div>
                    </div>
                </div>
        </section>
    </section>
  )
}

export default Features