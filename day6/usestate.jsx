import React, { useState } from "react";
function College(){
    const[college,setCollege]=useState({cname:"skcet",year:2000,dept:"CSE"});
    const[names,setNames]=useState(["Swathi","chan"]);
    const UpdateYear=()=>{
        setCollege(prevState=>{
            return{...prevState,year:"2012"}
        });
        
    }
    const SetStudent=()=>{
        setNames([...names,"sam","sami"])
    }
    return(
        <>
        <h1>my college {college.cname}</h1>
        <h2>established in {college.year} of department {college.dept}</h2>
        <button onClick={UpdateYear}>click</button>
        <button onClick={SetStudent}>click</button>
        <ul>
            {
                names.map(e=><li key={e}>{e}</li>)
            }
        </ul>
        </>
    )
}
export default College;
