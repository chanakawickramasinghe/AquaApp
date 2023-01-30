import React,{useRef} from 'react'

export default function Test(){

    const messageRef = useRef(null);
    return(
            <form>
                <label htmlFor="name">Enter Name</label>
                <input type="text" id="name" ref={messageRef} />
                <button type="submit">Save</button>
            </form>
    )
}