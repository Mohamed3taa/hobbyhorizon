import { useEffect, useState } from 'react';
import './forget.css'
import { Link, useNavigate } from 'react-router-dom';
import registerPic from "../../assets/signup.png"
import { useAuth } from '../../context/AuthContext';
import { forgetPassword } from '../../firebase/functions/forgetPawssord';
import ErrorToast from '../../components/toasts/ErrorToast';

const Forget = () => {
    const { user } = useAuth();
    const [mail, setMail] = useState("");
    const navigate = useNavigate();

    const handleForget = (e)=>{
        e.preventDefault();
        if (mail === '') {
            ErrorToast("Please enter your email")
        }else{
            forgetPassword(mail, navigate, "/signin")
        }
    }

    
    useEffect(() => {
        if (user !== null) {
            navigate("/");
        }
    }, [user, navigate]);

    if (user !== null) {
        return null;
    }
  return (
    <div className="login">
        <div className="login__left">
            <img src={registerPic} alt="login-pic" />
        </div>
        <div className="login__right">
            <h3 className="form__title">Forget password?</h3>
            <form>
                <div className="form__field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="example@gmail.com"
                        onChange={(e)=> setMail(e.target.value)}
                    />
                </div>
                <input 
                    type="submit"  
                    value="Send email"
                    onClick={(e)=> handleForget(e)}
                />
                <p className="form__account">Remember password ? <Link to={"/signin"}>Sign in</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Forget