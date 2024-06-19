import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lang-Cards</h1>
        <Button variant="contained" color="secondary" endIcon={ <LoginIcon /> }>
          Login
        </Button>
        <Button variant="contained" color="secondary" endIcon={ <HowToRegIcon /> }>Register</Button>
        <h3>What Is Lang-Cards?</h3>
        <h4>
          Lang-Cards is a flashcard study/quiz system made to help learn languages.
        </h4>
        <p>Created By E. Teshome (2024)</p>
      </header>
    </div>
  );
}

export default App;
