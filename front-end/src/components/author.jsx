import { useState } from "react";
import "../app.css";


const Author= ()=>{
    const [Title,setTitle] = useState("");
    const [Message,setMessage] = useState("");
    return(
        <div className="Author">
            <h1>make post</h1>
            <div>
                <label htmlFor="Title">Title</label>
                <input
                type="text"
                id = "title"
                value={Title}
                onChange={(e)=>{setTitle(e.target.value)}}
                />
            </div>
            <div>
                <label htmlFor="message">Your message</label>
                <input
                type="text"
                id="message"
                value={Message}
                onChange={(e)=>{setMessage(e.target.value)}}
                />
            </div>
      


        </div>
    )

}

export default Author