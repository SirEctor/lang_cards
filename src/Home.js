import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';
import QuizIcon from '@mui/icons-material/Quiz';
import TopBarWithReg from './TopBarWithReg.js';

function restOfHomePage() {
    return(<div position="sticky">
              <Button color="inherit" variant="outlined" href={"/lang_cards/study"} sx={{ mr: 2, flexGrow: 1 }} style={{ textTransform: "none", padding: '14px 28px' }} endIcon={<BookIcon />}>STUDY</Button>
              <Button color="inherit" variant="outlined" href={"/lang_cards/quiz"} sx={{ ml:2, flexGrow: 1 }} size="large" style={{ textTransform: "none", padding: '14px 28px' }} endIcon={<QuizIcon />}>QUIZ</Button>
            </div>)
}
  
function Home() {
    return(<TopBarWithReg childToPut={restOfHomePage()} />)
}

export default Home;