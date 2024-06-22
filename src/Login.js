import { TextField, Typography, FormControl, FormLabel, Button } from "@mui/material";
import TopBar from "./TopBar.js";

function restOfLoginPage(){
    return (
        <div>
            <Typography variant="h5" sx={{flexGrow: 1}}>Login</Typography>
            <FormControl id="login-form" sx={{mt:2, flexGrow: 1}}>
                <FormLabel>Username</FormLabel>
                <TextField id="login-username" variant="outlined" color="secondary" label={"Enter Username"}/>
                <FormLabel>Password</FormLabel>
                <TextField id="login-password" variant="outlined" color="secondary" label={"Enter Password"}/>
                <Button variant="outlined" color="inherit" sx={{mt: 2}}>Submit</Button>
            </FormControl>    
        </div>
    )
}


function Login() {
    return(<TopBar childToPut={restOfLoginPage()}/>)
}

export default Login;