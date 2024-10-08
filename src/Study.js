import { FormControl, Select, Typography, Button, Chip, Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import TopBarWithReg from './TopBarWithReg.js';
import { getDataFromCSV, filterTheArray } from './Utilities.js';


function RestOfStudyPage(){
    const navigate = useNavigate();
    const [langs, setLangs] = useState([]);
    const [letterFamilies, setLetterFamilies] = useState([]);
    const [filteredLetterFamilies, setFilteredLetterFamilies] = useState([]);
    
    const [chosenLang, setChosenLang] = useState('');
    const [chosenLetterFamily, setChosenLetterFamily] = useState('');
    const [arrLetterFamily, setArrLetterFamily] = useState([]);

    function handleLang(event){
      setChosenLang(event.target.value);
    }

    function handleLetterFamily(event){
        setChosenLetterFamily(event.target.value);
        setArrLetterFamily(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value,);
    }

    function handleSubmit(event) {
      event.preventDefault();
      navigate("/study/"+ chosenLang.toString() + "/" + chosenLetterFamily.toString());  
    }

    useEffect(() => {
      getDataFromCSV('/lang_cards/Language.csv', setLangs);
    }, [])

    // //use :8000 instead of lhost:8000
    // useEffect(() => {
    //   axios.get("http://107.20.1.29:8000/api/language/")
    //   .then((res) => {
    //     console.log(res['data'])
    //     setLangs(res['data'])
    //   })
    //   .catch((err) => {console.log(err)})
    // }, [])


    useEffect(() => {
      getDataFromCSV("/lang_cards/study_data/" + chosenLang.toString() + '.csv', setLetterFamilies)
    }, [chosenLang])

    // // use django api instead of above 
    // useEffect(() => {
    //   if(chosenLang !== ''){
    //     axios.get("http://107.20.1.29:8000/api/"+chosenLang.toString()+"/")
    //   .then((res) => {
    //     setLetterFamilies(res['data'])
    //   })
    //   .catch((err) => {console.log(err)})
    //   }
    // }, [chosenLang])

    
    useEffect(() => {
      //console.log(letterFamilies);
        setFilteredLetterFamilies(filterTheArray(letterFamilies, "lang-family"))
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
                  <Select multiple variant="filled" color="secondary" id="letter-family-select" label="Letter Family" autoWidth onChange={handleLetterFamily} value={arrLetterFamily} renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}>
                      <MenuItem value={'all'} key={'study-all'}>
                          {'All'}
                        </MenuItem>
                      {filteredLetterFamilies ? (filteredLetterFamilies.map(lang => (
                        <MenuItem value={lang['lang-family']} key={lang.code}>
                          {lang['lang-family']}
                        </MenuItem>
                        ))) : "LOADING!"}
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