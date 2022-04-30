// Database bilgi ekleme,bilgiyi alma, bilgi silme ve değiştirme
import firebase from "./firebase"
import {useState,useEffect} from "react";
import { getDatabase,ref,set,push,onValue, remove,update} from "firebase/database";
import Toastify from "./toast";

// Bilgi Ekleme
export const AddUser=(info)=>{
    const db = getDatabase();
    const userRef=ref(db,"databaseNM");
    const newUserRef=push(userRef)
    set((newUserRef),{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender,
    })
}

// Bilgi Çağırma

export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [contactList,setContactList]=useState();

    useEffect(() => {
        setIsLoading(true)

        const db = getDatabase();
        const userRef=ref(db,"databaseNM");

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const databaseNMArray=[];

            for(let id in data){
                databaseNMArray.push({id,...data[id]})
            }          
            setContactList(databaseNMArray);
            setIsLoading(false);
        });
    },[])
    return {isLoading,contactList}
}

// Bilgi silme
export const DeleteUser=(id)=>{
        const db = getDatabase();
        const userRef=ref(db,"databaseNM");
        remove(ref(db,"databaseNM/"+id))

        Toastify("Kullanıcı bilgisi silindi")
}

// Bilgi Değiştirme

export const EditUser=(info)=>{
    const db = getDatabase();
    const updates = {};

    updates["databaseNM/"+info.id]=info;
    return update(ref(db),updates);

}