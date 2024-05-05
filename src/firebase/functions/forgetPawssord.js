import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../firebase"
import SuccessToast from "../../components/toasts/SuccessToast"

export const forgetPassword =(email, navigate, path)=>{
    sendPasswordResetEmail(auth, email)
    .then(()=> {
        SuccessToast("Email sent successfully",navigate,path);
    })
}