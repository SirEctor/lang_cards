import { FormControl, Select, Typography, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getDataFromCSV, filterTheArray } from './Utilities.js';
import TopBarWithReg from './TopBarWithReg.js';

function RestOfStudyPage(){
    const navigate = useNavigate();
    const [langs, setLangs] = useState([]);
    const [letterFamilies, setLetterFamilies] = useState([]);
    const [filteredLetterFamilies, setFilteredLetterFamilies] = useState([]);
    
    const [chosenLang, setChosenLang] = useState('');
    const [chosenLetterFamily, setChosenLetterFamily] = useState('');
    
    function handleLang(event){
      setChosenLang(event.target.value);
    }

    function handleLetterFamily(event){
        setChosenLetterFamily(event.target.value);
    }

    function handleSubmit(event) {
      event.preventDefault();
      navigate("/study/"+ chosenLang.toString() + "/" + chosenLetterFamily.toString());  
    }

    useEffect(() => {
      getDataFromCSV('/Language.csv', setLangs);
    }, [])

    useEffect(() => {
        getDataFromCSV("/study_data/" + chosenLang.toString() + '.csv', setLetterFamilies)
    }, [chosenLang])
    
    useEffect(() => {
        setFilteredLetterFamilies(filterTheArray(letterFamilies, "lang-family"))
    }, [letterFamilies])


    return(<div position="sticky">
              <form onSubmit={handleSubmit}>
                <FormControl sx={{ flexDirection: "column",  m: 1, minWidth: 120, flex: 1}}>
                  
                  <Typography variant="h5" sx={{flexGrow: 1}}>Language</Typography>
                  <Select variant="filled" color="secondary" id="lang-select" label="Language" autoWidth onChange={handleLang}>
                  {langs ? (langs.map(lang => (
                    <MenuItem value={lang.code} key={lang.code}>
                      {lang.language}
                    </MenuItem>))) : "LOADING!"}
                  </Select>

                  <Typography variant="h5" sx={{flexGrow: 1}}>Letter Family</Typography>
                  <Select variant="filled" color="secondary" id="letter-family-select" label="Letter Family" autoWidth onChange={handleLetterFamily}>
                  <MenuItem value={'all'} key={'study-all'}>
                      {'All'}
                    </MenuItem>
                  {filteredLetterFamilies ? (filteredLetterFamilies.map(lang => (
                    <MenuItem value={lang['lang-family']} key={lang.code}>
                      {lang['lang-family']}
                    </MenuItem>))) : "LOADING!"}
                  </Select>
                  
                  <Button variant="outlined" color="inherit" sx={{mt: 2}} type="submit">Submit</Button>
                </FormControl>
              </form>
            </div>)
}


function Study() {
    return(<TopBarWithReg childToPut={RestOfStudyPage()} />)
}

export default Study;