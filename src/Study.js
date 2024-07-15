import { FormControl, Select, Typography, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { filterTheArray } from './Utilities.js';
import TopBarWithReg from './TopBarWithReg.js';
import axios from "axios";


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

    // useEffect(() => {
    //   getDataFromCSV('/Language.csv', setLangs);
    // }, [])

    //use 54.226.13.175:8000 instead of lhost:8000
    useEffect(() => {
      axios.get("http://54.226.13.175:8000/api/language/")
      .then((res) => {
        console.log(res['data'])
        setLangs(res['data'])
      })
      .catch((err) => {console.log(err)})
    }, [])


    // useEffect(() => {
    //   getDataFromCSV("/study_data/" + chosenLang.toString() + '.csv', setLetterFamilies)
    // }, [chosenLang])

    // use django api instead of above 
    useEffect(() => {
      if(chosenLang !== ''){
        axios.get("http://54.226.13.175:8000/api/"+chosenLang.toString()+"/")
      .then((res) => {
        setLetterFamilies(res['data'])
      })
      .catch((err) => {console.log(err)})
      }
    }, [chosenLang])

    
    useEffect(() => {
        setFilteredLetterFamilies(filterTheArray(letterFamilies, "langFamily"))
    }, [letterFamilies])


    return(<div position="sticky">
              <form onSubmit={handleSubmit}>
                <FormControl sx={{ flexDirection: "column",  m: 1, minWidth: 120, flex: 1}}>
                  
                  <Typography variant="h5" sx={{flexGrow: 1}}>Language</Typography>
                  <Select variant="filled" color="secondary" id="lang-select" label="Language" autoWidth onChange={handleLang}>
                  {langs ? (langs.map(lang => (
                    <MenuItem value={lang.language} key={lang.code}>
                      {lang.language}
                    </MenuItem>))) : "LOADING!"}
                  </Select>

                  <Typography variant="h5" sx={{flexGrow: 1}}>Letter Family</Typography>
                  <Select variant="filled" color="secondary" id="letter-family-select" label="Letter Family" autoWidth onChange={handleLetterFamily}>
                  <MenuItem value={'all'} key={'study-all'}>
                      {'All'}
                    </MenuItem>
                  {filteredLetterFamilies ? (filteredLetterFamilies.map(lang => (
                    <MenuItem value={lang['langFamily']} key={lang.code}>
                      {lang['langFamily']}
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