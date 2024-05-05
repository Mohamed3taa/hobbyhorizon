import { db, storage } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const updateProfilePhoto = async (img, user, setter) => {
    try {
        // 1. Upload image to Firebase Storage
        const sanitizedFileName = img.name.replace(/[^a-zA-Z0-9.]/g, "");
        const storageRef = ref(storage, `${sanitizedFileName}-${user.uid}`);
        const uploadTask = uploadBytesResumable(storageRef, img);

        // 2. Obtain download URL of the uploaded image
        const snapshot = await uploadTask;

        // Get download URL asynchronously
        const downloadURL = await getDownloadURL(snapshot.ref);

        // 4. Update user data in Firestore
        await updateDoc(doc(db, "users", user.uid), {
            photoURL: downloadURL
        });

        // 5. Update component state
        setter((prevUserData) => ({
            ...prevUserData,
            photoURL: downloadURL
        }));

        console.log("User photoURL updated successfully:", downloadURL);
    } catch (error) {
        console.error("Error updating profile photo:", error);
        // Handle error
        throw error;
    }
};
