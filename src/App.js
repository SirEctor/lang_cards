import './App.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TopBar from './TopBar.js';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './Login.js'
import Register from './Register.js'
import Home from './Home.js';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Button from '@mui/material/Button';


function restOfAppPage() {
  return(<div position="sticky">
            <Typography variant="h3" component="div" sx={{flexGrow: 1,  margin: 2}} >What Is Lang-Cards?</Typography>
            <Typography variant="h4" component="div" sx={{flexGrow: 1,  margin: 2}}>Lang-Cards is a flashcard study/quiz system made to help learn.</Typography>
            <Box>
              <Typography variant="p" component="div" sx={{flexGrow: 1,  margin: 2}}>Created By E. Teshome (2024)</Typography>
            </Box>
          </div>
  )
}


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

function App() {
  return (
        <Router>
          <Routes>
              <Route path="/" element={<TopBar childToPut={restOfAppPage()} rightSideButtons={loginNRegisterButtons()}/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/home' element={<Home />} />
          </Routes>     
        </Router>
        
  );
}

export default App;
