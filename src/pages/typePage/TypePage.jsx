import { useNavigate, useParams } from 'react-router-dom'
import './typePage.css'
import { useEffect, useState } from 'react';
import { getHobbyTypes } from '../../firebase/functions/getHobbyEvents';
import { useAuth } from '../../context/AuthContext';

const TypePage = () => {
    const {user} = useAuth();
    const {hobbyId} = useParams();
    const [event, setEvent] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        getHobbyTypes("reading","events")
        .then(res=> {
            let targetEvent = res.events.filter((event)=> event.id == hobbyId)[0];
            setEvent(targetEvent)
        })
    },[hobbyId, event]);

    useEffect(() => {
        if (user === null) {
            navigate("/signin");
        }
    }, [user, navigate]);

    if (user === null) {
        return null;
    }
  return (
    <div className="type__page">
        <div className="type__page-content">
            <div className="left">
                <div className="img">
                    <img src={event.img} alt="event-img" />
                </div>
                <div className="details">
                    <div className="field">
                        <h3>Desc:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, facilis. Unde aspernatur quisquam omnis, libero voluptatem voluptatum architecto hic? Neque officiis debitis assumenda? In ex quas at autem distinctio enim.</p>
                    </div>
                    
                    <div className="field">
                    <h3>What will you learn:</h3>
                    <ul>
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <li>Skill 3</li>
                        <li>Skill 4</li>
                        <li>Skill 5</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>{event.name}</h2>
                <p>{event.location}</p>
                <p>{event.duration}</p>
                <button>Enroll now</button>
            </div>
        </div>
    </div>
  )
}

export default TypePage