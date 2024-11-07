import Axios from "axios";
import React, { useState } from "react";
const DisPostAxios=()=>
{
    const [user, setUser] = useState(null);
    const[name,setName]=useState('');
    const addNew=()=>{
        Axios.post('https://jsonplaceholder.typicode.com/users', { name })
        .then(res => {
            console.log(res.data);
            setUser(res.data); 
        })
    }
    return(
        <>
            <h1>Post Demo</h1>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={addNew}>Add New</button>

            {user && (
                <div>
                    <h2>User Added:</h2>
                    <p>ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                </div>
            )}
        </>
    )
}
export default DisPostAxios;