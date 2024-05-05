import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ProfileDetails from "../../components/profileDetails/ProfileDetails";
import "./profile.css"
const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate("/signin");
        }
    }, [user, navigate]);

    // Return null if user is not authenticated
    if (user === null) {
        return null;
    }

    // If user is authenticated, render ProfileDetails component
    return (
        <div className="profile">
            <ProfileDetails />
        </div>
    );
};

export default Profile;
