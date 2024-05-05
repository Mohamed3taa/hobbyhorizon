import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import ErrorToast from "../../components/toasts/ErrorToast";
import SuccessToast from "../../components/toasts/SuccessToast";

export const signIn = (email, password, navigate)=>{
signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    SuccessToast("Sign in successfully",navigate, "/")
  })
  .catch((error) => {
    ErrorToast(error.message);
  });
} 