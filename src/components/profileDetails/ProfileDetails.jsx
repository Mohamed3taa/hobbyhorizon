import profile from "../../assets/img_icon.svg"
import { useAuth } from "../../context/AuthContext";
import { 
    IoEarth,
    IoMailOutline,
    IoStopwatchOutline,
    IoCallOutline
} from "react-icons/io5";
import AddPhone from "../addPhone/AddPhone";
import { useEffect, useState } from "react";
import { getHobbyTypes } from "../../firebase/functions/getHobbyEvents";
import { updateProfilePhoto } from "../../firebase/functions/updatePhotoProfile";

const ProfileDetails = () => {
    const {user} = useAuth();
    const [userData, setUserData] = useState("");
    const [refetch, setRefetch] = useState(false);
    const [image, setImage] = useState(null);
    const date = new Date(user.metadata.creationTime);
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    useEffect(()=>{
        getHobbyTypes("users",user.uid)
        .then((res)=> setUserData(res))
    },[user, refetch])
    console.log(userData);
  return (
    <div className="profile__page">
        <svg className="profile__background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#105161" fillOpacity="1" d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,128C840,128,960,160,1080,160C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <div className="user__information">
            <div className="img">
                <img src={userData.photoURL ? userData.photoURL : profile} alt="profile-img" />
                <label htmlFor="image">Change photo</label>
                <input 
                    type="file" 
                    name="image" 
                    id="image" 
                    onChange={(e)=> setImage(e.target.files[0])}
                />
                {image && <button onClick={()=> updateProfilePhoto(image, user, setUserData)}>
                    Change Now
                </button>}
            </div>
            <div className="details">
                <div className="heading">
                    <h2>{userData.displayName}</h2>
                    <p>Enthusiast</p>
                </div>

                <div className="body">
                    <p>
                        <IoMailOutline size="24"/>
                        <span>{userData.email}</span>
                    </p>
                    <p>
                        <IoCallOutline size="24"/>
                        <span>{userData.phoneNumber 
                        ? userData.phoneNumber 
                        : <AddPhone fetchStatus={refetch} fetchSetter={setRefetch}/>}</span>
                    </p>

                    <p>
                        <IoEarth size="24"/> 
                        <span>Egypt</span>
                    </p>
                    <p>
                        <IoStopwatchOutline size="24"/>
                        <span>Joined: {`${month} ${year}`}</span>
                    </p>
                </div>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default ProfileDetails