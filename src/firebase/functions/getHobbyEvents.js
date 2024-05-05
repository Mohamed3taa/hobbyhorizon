import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
export const getHobbyTypes = async(hobby, type)=>{

    const docRef = doc(db, hobby, type);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
      console.log("No such document!");
    } 
}