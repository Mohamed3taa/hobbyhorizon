import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, runTransaction } from "firebase/firestore";
import ErrorToast from "../../components/toasts/ErrorToast";
import { auth, db } from "../firebase";
import SuccessToast from "../../components/toasts/SuccessToast";

export const register = async (name, email, password, navigate) => {
    try {
        await runTransaction(db, async (transaction) => {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Update user's profile and store user data in Firestore
            const userRef = doc(db, "users", user.uid);
            transaction.set(userRef, {
                id: user.uid,
                displayName: name,
                email: email,
                phoneNumber: null,
                photoURL: null
            });

            await updateProfile(user, {
                displayName: name
            });
        });

        // Show success message
        SuccessToast("Account created successfully", navigate, "/");
    } catch (error) {
        // Show error message
        ErrorToast(error.message);
    }
}
