import { useEffect, useState } from "react"
import { getHobbyTypes } from "../../firebase/functions/getHobbyEvents"
import { Link, useParams } from "react-router-dom"
import "./hobbyTypes.css"
import { CiLocationOn, CiClock1} from "react-icons/ci";
// eslint-disable-next-line react/prop-types
const HobbyTypes = ({heading}) => {
    const [events, setEvents] = useState([]);
    const {hobbyName} = useParams();
    useEffect(()=>{
        getHobbyTypes("reading","events")
        .then(res=> setEvents(res.events))
    },[])
  return (
    <div className="hobby__types">
        <div className="hobby__types-category">
            <div className="heading">
                <h2>{heading}</h2>
                {/* eslint-disable-next-line react/prop-types */}
                <Link to={heading.toLowerCase()}>Show More</Link>
            </div>

            <div className="content">
                {events.slice(0,4).map((type)=>(
                    <div key={type.id} className="hobby__type">
                        <div className="top">
                            <img src={type.img} alt="img-type"/>
                        </div>
                        <div className="bottom">
                            <h4>{type.name}</h4>
                            <div className="infos">
                                <p>
                                    <CiLocationOn />
                                    <span>{type.location}</span>
                                </p>
                                <p>
                                    <CiClock1 />
                                    <span>{type.duration}</span>
                                </p>
                            </div>
                            <Link to={`/hobbies/${hobbyName}/${heading.toLowerCase()}/${type.id}`}>View Event</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HobbyTypes