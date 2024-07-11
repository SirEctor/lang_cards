import './App.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TopBarWithReg from './TopBarWithReg.js';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './Login.js'
import Register from './Register.js'
import Home from './Home.js';
import Quiz from './Quiz.js';
import Study from './Study.js';
import QuizCard from './QuizCard.js';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import StudyCard from './StudyCard.js';


function restOfAppPage() {
  return(<div position="sticky">
            <Typography variant="h3" component="div" sx={{flexGrow: 1,  margin: 2}} >What Is Lang-Cards?</Typography>
            <Typography variant="h4" component="div" sx={{flexGrow: 1,  margin: 2}}>Lang-Cards is a flashcard study/quiz system I made to help learn languages.</Typography>
            <Box>
              <Typography variant="p" component="div" sx={{flexGrow: 1,  margin: 2}}>Created By E. Teshome (2024)</Typography>
              <Button variant="outlined"  href={"/home"} color="inherit" endIcon={ <HomeIcon /> } sx={{mr: 2}}>
                    Home
                </Button>
            </Box>
          </div>
  )
}


function App() {
  return (
        <Router>
          <Routes>
              <Route path="/" element={<TopBarWithReg childToPut={restOfAppPage()} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/home' element={<Home />} />
              <Route path='/quiz' element={<Quiz />} />
              <Route path='/quiz/:mode/:lang' element={<QuizCard />} />
              <Route path='/study' element={<Study />} />
              <Route path='/study/:lang' element={<StudyCard />} />
          </Routes>     
        </Router>
        
  );
}

export default App;
