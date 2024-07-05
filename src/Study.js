import TopBarWithAvatar from './TopBarWithAvatar.js';
import { FormControl, Select, Typography, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

function restOfStudyPage() {
    //const navigate = useNavigate();
    
    function handleLogin(event) {
      event.preventDefault();
      
    }


    return(<div position="sticky">
              <form onSubmit={handleLogin}>
                <FormControl sx={{ flexDirection: "column",  m: 1, minWidth: 120, flex: 1}}>
                  <Typography variant="h5" sx={{flexGrow: 1}}>Language</Typography>
                  <Select variant="filled" color="secondary" id="lang-select" label="Language" autoWidth>
                    <MenuItem value={0}>
                      Japanese-Hiragana
                    </MenuItem>
                    <MenuItem value={1}>
                      Japanese-Katakana
                    </MenuItem>
                    <MenuItem value={2}>
                      Japanese-Kanji
                    </MenuItem>
                  </Select>
                  <Typography variant="h5" sx={{flexGrow: 1}}>Mode</Typography>
                  <Select variant="filled" color="secondary" id="mode-select" label="Mode" autoWidth>
                    <MenuItem value={0}>
                      English-&gt;Language
                    </MenuItem>
                    <MenuItem value={1}>
                      Language-&gt;English
                    </MenuItem>
                  </Select>
                  <Button variant="outlined" color="inherit" sx={{mt: 2}} type="submit">Submit</Button>
                </FormControl>
              </form>
            </div>)
  }
  
  
function Study() {
    return(<TopBarWithAvatar childToPut={restOfStudyPage()} />)
}

export default Study;