import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const updatePhone= async(collection, document,phone)=>{
    const washingtonRef = doc(db, collection, document);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      phoneNumber: phone
    });
}