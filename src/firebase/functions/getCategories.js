import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase";

export const GetCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const unsubscribeCategories = fetchData("categories", setCategories);
        return () => {
            unsubscribeCategories();
        };
    }, []);

    const fetchData = (collectionName, setter) => {
        const q = query(collection(db, collectionName));
        const unsubscribe = onSnapshot(q, (snap) => {
            const fetchedData = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setter(fetchedData);
        });
        return unsubscribe;
    };

    return { categories };
};
