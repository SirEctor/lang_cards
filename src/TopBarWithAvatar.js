import TopBar from "./TopBar.js";
import { Button } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import QuizIcon from '@mui/icons-material/Quiz';

function avatar(){
    return( <div position="sticky">
        <Button color="inherit" variant="outlined" href={"/lang_cards/study"} sx={{ mr: 2, flexGrow: 1 }} style={{ textTransform: "none" }} endIcon={<BookIcon />}>STUDY</Button>
        <Button color="inherit" variant="outlined" href={"/lang_cards/quiz"} sx={{ ml:2, flexGrow: 1 }} style={{ textTransform: "none" }} endIcon={<QuizIcon />}>QUIZ</Button>
    </div>)
}

function TopBarWithAvatar({childToPut}) {
    return(<TopBar childToPut={childToPut} rightSideButtons={avatar()}/>)
}

export default TopBarWithAvatar;