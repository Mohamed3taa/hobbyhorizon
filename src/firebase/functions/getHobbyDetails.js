import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
export const getHobbyDetails = async(hobby)=>{

    const docRef = doc(db, hobby, "details");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
      console.log("No such document!");
    } 
}