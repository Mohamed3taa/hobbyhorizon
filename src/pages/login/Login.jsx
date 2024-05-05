import "./login.css"

import loginPic from "../../assets/signin.png"

import { FiFacebook } from "react-icons/fi";
import { LiaApple } from "react-icons/lia";
import { TbBrandGoogle } from "react-icons/tb";
import { 
    IoEye,
    IoEyeOff
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { signIn } from "../../firebase/functions/signin";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const logMethods=[
        {name:"Facebook",svg: <FiFacebook size={24}/>},
        {name:"Icloud",svg: <LiaApple size={24}/>},
        {name:"Google",svg: <TbBrandGoogle size={24}/>},
    ];

    const handleSignIn = (e)=>{
        e.preventDefault();
        signIn(mail, password, navigate);
    }
    const { user } = useAuth();
    
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
            <img src={loginPic} alt="login-pic" />
        </div>
        <div className="login__right">
            <h3 className="form__title">Hi, Welcome back!</h3>
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

                <div className="form__field">
                    {showPassword 
                    ? <IoEyeOff size="20" onClick={()=> setShowPassword(false)}/> 
                    :<IoEye size="20" onClick={()=> setShowPassword(true)}/>}
                    <label htmlFor="pass">Password</label>
                    <input 
                        type={showPassword ?"text" :"password"} 
                        name="pass" 
                        id="pass"
                        placeholder="*****"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    <Link to={"/forget"} className="form__forget">Forget password?</Link>
                </div>

                <input 
                    type="submit"  
                    value="Sign In"
                    onClick={(e)=> handleSignIn(e)}
                />

                <div className="login__methods">
                    <p>Or sign in with:</p>
                    <div>
                        {logMethods.map((method, index)=>(
                            <Link to={`/${method.name}`} key={index}>
                                {method.svg}
                            </Link>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login