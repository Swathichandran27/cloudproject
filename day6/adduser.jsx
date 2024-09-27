import React, { useState } from "react";
function AddUser(){
    const [users, setUsers]=useState([
        {
        id:1,
        name:"Swathi"
        },
        {
            id:2,
            name:"Srija"
        }
    ]);
    const[name,setName]=useState("")
    const setUser=()=>
    {
        const newuser={
            id:users.length+1,
            name:name
        };
        setUsers([...users,newuser]);
        setName("");
    }
    return(
        <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name"/>
        <button onClick={setUser}>Add user</button>
        <ul>
            {users.map((users)=>
            <div key={users.id}>
                <p>id: {users.id}</p>
                <p>name: {users.name}</p>
            </div>
            )}
        </ul>
        </>
    )
}
export default AddUser;
