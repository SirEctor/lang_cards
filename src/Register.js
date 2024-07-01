import { TextField, Typography, FormControl, Button } from "@mui/material";
import { useState } from "react";
import TopBar from "./TopBar.js";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';


function RestOfRegisterPage (){
    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');

    function handleUsername(event){
        setRegUsername(event.target.value);
    }

    function handlePassword(event){
        setRegPassword(event.target.value);
    }

    function handleRegister(event){
        event.preventDefault();
        console.log(regUsername);
        console.log(regPassword);
    }

    return (
        <div>
            <Typography variant="h5" sx={{flexGrow: 1}}>Registration</Typography>
            <form onSubmit={handleRegister}>
                <FormControl id="register-form" sx={{mt:2, flexGrow: 1}} >
                    <TextField id="register-username" sx={{mt:2}} variant="outlined" color="secondary" label={"Enter Username"} required onChange={handleUsername} />
                    <TextField id="register-password" sx={{mt:2}} variant="outlined" color="secondary" label={"Enter Password"} required onChange={handlePassword} type="password" />
                    <Button variant="outlined" color="inherit" sx={{mt: 2}} type="submit">Submit</Button>
                </FormControl>    
            </form>
        </div>  
    )
}

function loginNRegisterButtons(){
    return( <>
                <Button variant="outlined"  href={"/login"} color="inherit" endIcon={ <LoginIcon /> } sx={{mr: 2}}>
                    Login
                </Button>
                <Button variant="outlined" href={"/register"} to={"/register"} color="inherit" endIcon={ <HowToRegIcon /> } sx={{mr: 2}}>
                    Register
                </Button>
            </>)
}


function Register() {
    return(<TopBar childToPut={RestOfRegisterPage()} rightSideButtons={loginNRegisterButtons()}/>)
}

export default Register;