import React,{useRef} from 'react';
import {addDoc,collection } from "@firebase/firestore";
import {firestore} from "../firebase";

export default function Test(){

    const messageRef = useRef(null);
    const ref = collection (firestore,"messages"); 

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        const data = {
            message: messageRef.current.value,
        }

        try{
            addDoc(ref,data);
        }catch(e){
            console.log(e);
        }
    };

    return(
        <form onSubmit={handleSave}>
            <input type="text" id="name" ref={messageRef} />
            <button type="submit">Save</button>
        </form>
    )
}