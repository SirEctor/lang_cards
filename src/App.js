import './App.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TopBarWithReg from './TopBarWithReg.js';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './Login.js'
import Register from './Register.js'
import Home from './Home.js';
import Study from './Study.js';
import EngToLang from './EngToLang.js';


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


function App() {
  return (
        <Router>
          <Routes>
              <Route path="/" element={<TopBarWithReg childToPut={restOfAppPage()} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/home' element={<Home />} />
              <Route path='/study' element={<Study />} />
              <Route path='/study/:mode/:lang' element={<EngToLang />} />
          </Routes>     
        </Router>
        
  );
}

export default App;
