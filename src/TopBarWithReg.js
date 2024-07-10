import TopBar from "./TopBar.js";
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

function loginNRegisterButtons(){
    return( <>
                <Button variant="outlined"  href={"/home"} color="inherit" endIcon={ <HomeIcon /> } sx={{mr: 2}}>
                    Home
                </Button>
            </>)
}

function TopBarWithReg({childToPut}) {
    return(<TopBar childToPut={childToPut} rightSideButtons={loginNRegisterButtons()}/>)
}

export default TopBarWithReg;