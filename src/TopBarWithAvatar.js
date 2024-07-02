import TopBar from "./TopBar.js";
import { Avatar } from '@mui/material';

function avatar(){
    return( <>
        <Avatar sx={{ bgcolor: "purple" }}>T</Avatar>
    </>)
}

function TopBarWithAvatar({childToPut}) {
    return(<TopBar childToPut={childToPut} rightSideButtons={avatar()}/>)
}

export default TopBarWithAvatar;