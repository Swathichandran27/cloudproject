import React from "react";
import TextField from '@mui/material/TextField';
import { Button, Container } from "@mui/material";

function LoginPage()
{
    return(
        <div style={{paddingLeft:"650px"}}>
            <div style={{ border: "5px solid #ccc", borderRadius: "5px", marginTop:"75px",width:"400px",paddingBottom:"20px"}}>
            <Container component="main">
            <form>
             <h1 style={{color:"black", paddingLeft:"130px"}}>Login</h1>
            <h4>Email:</h4>
            <TextField id="outlined-basic" label="Email" variant="outlined" size="xs" /><br></br>
            <h4>Password:</h4>
            <TextField id="outlined-basic" label="Password" variant="outlined" size="xs" /><br></br><br></br>
            <div style={{paddingLeft:"130px"}}>
            <Button variant="contained" color="primary" size="medium" style={{textAlign:'center'}}>Login </Button><br></br><br></br>
            </div>
            <div style={{paddingLeft:"130px"}}>
            <Button variant="contained" color="primary" size="medium" style={{textAlign:'center'}}>Cancel </Button>
            </div>
            </form>
            </Container>
            </div>
            </div>
    )
}
export default LoginPage;