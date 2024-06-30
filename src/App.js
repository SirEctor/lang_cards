import './App.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TopBar from './TopBar.js';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './Login.js'
import Register from './Register.js'

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
        <Router>
          <Routes>
              <Route path="/" element={<TopBar childToPut={restOfHomePage()}/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
          </Routes>     
        </Router>
        
  );
}

export default App;
