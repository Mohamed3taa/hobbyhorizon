import { useState } from 'react'
import './addPhone.css'
import { CiSquareChevRight } from "react-icons/ci";
import { useAuth } from '../../context/AuthContext';
import { updatePhone } from '../../firebase/functions/updatePhone';
import ErrorToast from '../toasts/ErrorToast';
import { useNavigate } from 'react-router-dom';
import SuccessToast from '../toasts/SuccessToast';
// eslint-disable-next-line react/prop-types
const AddPhone = ({fetchStatus, fetchSetter}) => {
    const {user} = useAuth();
    const [phone, setPhone] = useState("");
    const navigate = useNavigate()
    const updateUserPhone = ()=>{
        if(phone === ''){
            ErrorToast("Phone input can't be empty")
        }else{
            updatePhone("users", user.uid,phone);
            fetchSetter(!fetchStatus);
            SuccessToast("Phone added successfully", navigate, "/profile")
        }
    }
  return (
    <div className="addPhone">
        <input 
            type="text" 
            name="phone" 
            id="phone" 
            onChange={(e)=> setPhone(e.target.value)}
        />
        <CiSquareChevRight size="24" onClick={()=>updateUserPhone()}/>
    </div>
  )
}

export default AddPhone