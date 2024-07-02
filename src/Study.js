import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';
import TopBarWithAvatar from './TopBarWithAvatar.js';

function restOfStudyPage() {
    return(<div position="sticky">
              <Button color="inherit" variant="outlined" href={"/study"} sx={{ mr: 2, flexGrow: 1 }} style={{ textTransform: "none", padding: '14px 28px' }} endIcon={<BookIcon />}>STUDY</Button>
            </div>)
  }
  
  
function Study() {
    return(<TopBarWithAvatar childToPut={restOfStudyPage()} />)
}

export default Study;