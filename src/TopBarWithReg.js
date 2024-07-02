import TopBar from "./TopBar.js";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

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

function TopBarWithReg({childToPut}) {
    return(<TopBar childToPut={childToPut} rightSideButtons={loginNRegisterButtons()}/>)
}

export default TopBarWithReg;