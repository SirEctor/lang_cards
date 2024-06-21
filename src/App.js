import './App.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TopBar from './TopBar.js';

function restOfHomePage() {
  return(<div position="sticky">
            <Typography variant="h3" component="div" sx={{flexGrow: 1,  margin: 2}} >What Is Lang-Cards?</Typography>
            <Typography variant="h4" component="div" sx={{flexGrow: 1,  margin: 2}}>Lang-Cards is a flashcard study/quiz system made to help learn.</Typography>
            <Box>
              <Typography variant="p" component="div" sx={{flexGrow: 1,  margin: 2}}>Created By E. Teshome (2024)</Typography>
            </Box>
          </div>
  )
}


function App() {
  return (
        <TopBar childToPut={restOfHomePage()}/>
  );
}

export default App;
