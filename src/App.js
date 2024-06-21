import {createTheme, alpha, getContrastRatio} from '@mui/material/styles';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from './Login.js'
import Register from './Register.js'


const violetBase = '#E0C2FF';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme} position="sticky">
            <AppBar color="violet"  position="sticky">
              <Toolbar>
                <Button href={"/"} sx={{ flexGrow: 1}}>Lang-Cards</Button>
                <Router>
                  <Routes>
                      <Route path='/login' element={Login()}/>
                      <Route path='/register' element={Register()}/>
                  </Routes>
                </Router>
                  
                <Button variant="outlined"  href={"/login"} color="inherit" endIcon={ <LoginIcon /> } sx={{mr: 2}}>
                  Login
                </Button>
                <Button variant="outlined" href={"/register"} to={"/register"} color="inherit" endIcon={ <HowToRegIcon /> } sx={{mr: 2}}>
                  Register
                </Button>
              </Toolbar>
            </AppBar>
        </ThemeProvider>
        <Typography variant="h3" component="div" sx={{flexGrow: 1,  margin: 2}}>What Is Lang-Cards?</Typography>
        <Typography variant="h4" component="div" sx={{flexGrow: 1,  margin: 2}}>Lang-Cards is a flashcard study/quiz system made to help learn.</Typography>
        <Box>
          <Typography variant="p" component="div" sx={{flexGrow: 1,  margin: 2}}>Created By E. Teshome (2024)</Typography>
        </Box>
      </header>
    </div>
  );
}

export default App;
