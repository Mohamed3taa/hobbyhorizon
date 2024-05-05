import { useNavigate, useParams } from 'react-router-dom'
import { getHobbyDetails } from '../../firebase/functions/getHobbyDetails';
import HobbyDetails from '../../components/hobbyDetails/HobbyDetails';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const HobbyPage = () => {
    const {hobbyName} = useParams();
    const [hobby,setHobby] =useState({})
    const navigate = useNavigate();
    useEffect(()=>{
        getHobbyDetails(hobbyName)
        .then(res => setHobby(res))
    },[hobbyName])

    const { user } = useAuth();
    
    useEffect(() => {
        if (user === null) {
            navigate("/signin");
        }
    }, [user, navigate]);

    if (user === null) {
        return null;
    }
  return (
    <div>
        <HobbyDetails hobbyDetails={hobby}/>
    </div>
  )
}

export default HobbyPage