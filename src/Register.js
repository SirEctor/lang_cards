import { TextField, Typography, FormControl, Button } from "@mui/material";
import { useState } from "react";
import TopBarWithReg from "./TopBarWithReg.js";


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

function Register() {
    return(<TopBarWithReg childToPut={RestOfRegisterPage()} />)
}

export default Register;