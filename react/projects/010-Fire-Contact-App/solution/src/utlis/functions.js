//?Database bilgi ekleme ve alma.
import { useEffect, useState } from "react";
import firebase from "./firebase";
import { getDatabase, ref, set, push, onValue } from "./firebase/database";




export const addUser = (info) => {
    const db = getDatabase();
    const userRef = ref(db, "baglanti"); 
    const newUserRef = push(userRef);
    set(newUserRef), {
        username : info.username,
        phoneNumber : info.phoneNumber,
        gender : info.gender,
    }    
}

//!bilgi çağırma

export const useFetch=() => {
    const [isLoading, setIsLoading]=useState();
    const [contactList,]

    useEffect(() => {
        setIsLoading(true)

        const db = getDatabase();
        const userRef = ref(db, "baglanti"); 

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const baglantiArray=[];

            for (let id in data) {
                baglantiArray.push({
                    id,
                    ...data[id]
                })
            }


    })
})
