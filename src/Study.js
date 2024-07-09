import TopBarWithAvatar from './TopBarWithAvatar.js';
import { FormControl, Select, Typography, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getDataFromCSV } from './Utilities.js';

function RestOfStudyPage() {
    const navigate = useNavigate();
    const [langs, setLangs] = useState([]);
    const [modes, setModes] = useState([]);
    
    const [chosenLang, setChosenLang] = useState('');
    const [chosenMode, setChosenMode] = useState('');
    
    function handleLang(event){
      setChosenLang(event.target.value);
    }

    function handleMode(event){
      setChosenMode(event.target.value);
    }


    function handleLogin(event) {
      event.preventDefault();
      navigate("/study/"+ chosenMode.toString() + "/"+ chosenLang.toString())  
    }

    useEffect(() => {
      getDataFromCSV('/Language.csv', setLangs);
      getDataFromCSV('/Mode.csv', setModes);
    }, [])


    return(<div position="sticky">
              <form onSubmit={handleLogin}>
                <FormControl sx={{ flexDirection: "column",  m: 1, minWidth: 120, flex: 1}}>
                  
                  <Typography variant="h5" sx={{flexGrow: 1}}>Mode</Typography>
                  <Select variant="filled" color="secondary" id="mode-select" label="Mode" autoWidth onChange={handleMode}>
                  {modes ? modes.map(mode => (
                    <MenuItem key={mode.code} value={mode.code}>
                      {mode.mode}
                    </MenuItem>)) : "LOADING!"}
                  </Select>

                  <Typography variant="h5" sx={{flexGrow: 1}}>Language</Typography>
                  <Select variant="filled" color="secondary" id="lang-select" label="Language" autoWidth onChange={handleLang}>
                  {langs ? (langs.map(lang => (
                    <MenuItem value={lang.code} key={lang.code}>
                      {lang.language}
                    </MenuItem>))) : "LOADING!"}
                  </Select>
                  
                  <Button variant="outlined" color="inherit" sx={{mt: 2}} type="submit">Submit</Button>
                </FormControl>
              </form>
            </div>)
  }
  
  
function Study() {
    return(<TopBarWithAvatar childToPut={RestOfStudyPage()} />)
}

export default Study;