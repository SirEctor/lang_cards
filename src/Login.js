import { TextField, Typography, FormControl, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBarWithReg from "./TopBarWithReg.js";

function RestOfLoginPage(){
    const navigate = useNavigate();
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');


    function handleUsername(event){
        setLoginUsername(event.target.value);
    }

    function handlePassword(event){
        setLoginPassword(event.target.value);
    }


    function checkLogin(username, password){
        return((username == "test") && (password == "test"))
    }

    function handleLogin(event){
        event.preventDefault();
        if(checkLogin(loginUsername, loginPassword)){
            navigate("/home");
        }
    }

    return (
        <div>
            <Typography variant="h5" sx={{flexGrow: 1}}>Login</Typography>
            <form  onSubmit={handleLogin}>
                <FormControl id="login-form" sx={{mt:2, flexGrow: 1}}>
                    <TextField id="login-username" sx={{mt:2}} variant="outlined" color="secondary" label={"Enter Username"} required onChange={handleUsername}/>
                    <TextField id="login-password" sx={{mt:2}} variant="outlined" color="secondary" label={"Enter Password"} required onChange={handlePassword} type="password" />
                    <Button variant="outlined" color="inherit" sx={{mt: 2}} type="submit">Submit</Button>
                </FormControl>   
            </form>
        </div>
    )
}



function Login() {
    return(<TopBarWithReg childToPut={RestOfLoginPage()} />)
}

export default Login;