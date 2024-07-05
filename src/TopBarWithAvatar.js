import TopBar from "./TopBar.js";
import { Avatar, Button, Link } from '@mui/material';

function avatar(){
    return( <>
        <Button> 
            <Link href="/" underline="none" color={'secondary'}>
                {'Logout'}
            </Link>
        </Button>
        <Avatar sx={{ bgcolor: "purple" }}>T</Avatar>
    </>)
}

function TopBarWithAvatar({childToPut}) {
    return(<TopBar childToPut={childToPut} rightSideButtons={avatar()}/>)
}

export default TopBarWithAvatar;