import { useNavigate } from 'react-router-dom';
import WarningToast from '../../components/toasts/warning/WarningToast'
import './privacy.css'
import { auth, db } from '../../firebase/firebase';
import SuccessToast from '../../components/toasts/SuccessToast';
import { useEffect, useState } from 'react';
import ErrorToast from '../../components/toasts/ErrorToast';
import { useAuth } from '../../context/AuthContext';
import { doc, deleteDoc } from "firebase/firestore";
const Privacy = () => {
    const [showWarning, setShowWarning] = useState(false);
    const navigate = useNavigate();
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
        <div className="privacy">
            {showWarning && <WarningToast 
                style={{display:"none"}}
                message={"Are you sure you want to delete this account?"}
                func={async()=>{
                    await deleteDoc(doc(db, "users", user.uid));
                    await auth.currentUser.delete()
                    .then(() => {
                        // Account deleted successfully
                        SuccessToast("Account deleted successfully", navigate , "/")
                    })
                    .catch((error) => {
                        console.error("Error deleting account:", error);
                        ErrorToast(error)

                    });

                }}
            />}
            <div className="content">
                <h2>Privacy & Security</h2>

                <div className="body">
                    <ul>
                        <li>Your privacy is important to us. It is Brainstorming's policy to respect your privacy regarding any information we may collect from you.</li>
            
                        <li>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</li>

                        <li>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</li>

                        <li>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</li>
                    </ul>
                </div>
                <button onClick={()=> setShowWarning(true)}>
                    Delete Account
                </button>
                <span></span>
            </div>
        </div>
    )
}

export default Privacy