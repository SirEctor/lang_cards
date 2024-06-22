import { TextField, Typography, FormControl, FormLabel, Button } from "@mui/material";
import TopBar from "./TopBar.js";

function restOfRegisterPage(){
    return (
        <div>
            <Typography variant="h5" sx={{flexGrow: 1}}>Registration</Typography>
            <FormControl id="register-form" sx={{mt:2, flexGrow: 1}}>
                <FormLabel>Username</FormLabel>
                <TextField id="register-username" variant="outlined" color="secondary" label={"Enter Username"}/>
                <FormLabel>Password</FormLabel>
                <TextField id="register-password" variant="outlined" color="secondary" label={"Enter Password"}/>
                <Button variant="outlined" color="inherit" sx={{mt: 2}}>Submit</Button>
            </FormControl>    
        </div>  
    )
}


function Register() {
    return(<TopBar childToPut={restOfRegisterPage()}/>)
}

export default Register;