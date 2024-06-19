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
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from './Login'
import Register from './Register'


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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>Lang-Cards</Typography>
                  <Button variant="outlined" component={Link} to="/login" color="inherit" endIcon={ <LoginIcon /> } sx={{mr: 2}}>
                    Login
                  </Button>

                  
                    <Routes>
                      <Route path='/login' component={Button}/>
                    </Routes>
                  
                  
              </Toolbar>
            </AppBar>
        </ThemeProvider>
        <Typography variant="h3" component="div" sx={{flexGrow: 1,  margin: 2}}>What Is Lang-Cards?</Typography>
        <Typography variant="h4" component="div" sx={{flexGrow: 1,  margin: 2}}>Lang-Cards is a flashcard study/quiz system made to help learn languages.</Typography>
        <Box>
          <Typography variant="p" component="div" sx={{flexGrow: 1,  margin: 2}}>Created By E. Teshome (2024)</Typography>
        </Box>
      </header>
    </div>
  );
}

export default App;
