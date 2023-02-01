import React,{useRef, useState, useEffect} from 'react';
import {addDoc,collection, getDocs  } from "@firebase/firestore";
import {firestore} from "../firebase";

export default function Test(){

    const messageRef = useRef(null);
    const ref = collection (firestore,"messages"); 
    const [messages, setMessages] = useState([]);
    const collectionRef = collection(firestore, "messages");
    const [data, setData] = useState([]);

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        const data = {
            message: messageRef.current.value,
        }

        try {
            const docRef = await addDoc(collection(firestore, "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    useEffect(() => {
        const retrieveData = async () => {
        const querySnapshot = await getDocs(collection(firestore, "users"));
        const dataArray = [];
        querySnapshot.forEach((doc) => {
            dataArray.push({ id: doc.id, ...doc.data() });
            console.log({ id: doc.id, ...doc.data() });
        });
        setData(dataArray);
    };
    retrieveData();
    }, []);
    // const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    // });

    return(
        // <form onSubmit={handleSave}>
        //     <input type="text" id="name" ref={messageRef} />
        //     <button type="submit">Save</button>
        // </form>
        <div>
            {data.map((item) => (
            <div key={item.id}>
            <p>{item.born}</p>
            </div>
            ))}
        </div>
    )
}