import { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from "../firebase";

export const GetTeam = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const unsubscribeCategories = fetchData("team", setTeam);
        return () => {
            unsubscribeCategories();
        };
    }, []);

    const fetchData = (collectionName, setter) => {
        const q = query(collection(db, collectionName),orderBy("id"));
        const unsubscribe = onSnapshot(q, (snap) => {
            const fetchedData = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setter(fetchedData);
        });
        return unsubscribe;
    };

    return { team };
};
