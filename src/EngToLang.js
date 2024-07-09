import { useParams } from "react-router-dom";
import TopBarWithAvatar from './TopBarWithAvatar.js';
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getDataFromCSV } from "./Utilities.js";

function RestOfEngToLang(){
    let { mode, lang } = useParams();

    const [langArray, setLangArray] = useState([]); 

    useEffect(() => {
        let specificFilePath = "/study_data/" + mode.toString() + "-" + lang.toString() + ".csv";
        console.log(specificFilePath);
        getDataFromCSV(specificFilePath, setLangArray);
    }, [])
    // useEffect(() => {
    //     async function getDataFromCSV(filePath, variableFunc){
    //       const resp = await fetch(filePath);
    //       const reader = resp.body.getReader();
    //       const result = await reader.read();
    //       const d = new TextDecoder('utf-8');
    //       const csv = d.decode(result.value);
    
    //       const results = Papa.parse(csv, {header: true});
    //       const rows = results.data;
          
    //       variableFunc(rows);
    //     }
    //     let specificFilePath = mode.toString() + "-" + lang.toString() + ".csv";
    //     getDataFromCSV('./Language.csv', setLangs);
    //     getDataFromCSV('./Mode.csv', setModes);
  
    //   }, [])


    return(<Card sx={{ minWidth: 275 }} color="">
            {langArray ? langArray.map(lang => (
                <CardActionArea key={lang['other-lang']}>
                <CardContent key={lang['other-lang']}>
                    <Typography variant="h5" sx={{flexGrow: 1}} color="purple" background="black"> {lang['other-lang']}</Typography>
                    <Typography variant="h5" sx={{flexGrow: 1}} color="purple" background="black"> {lang['english']}</Typography>
                </CardContent>
                </CardActionArea>
            )) : "LOADING"}
            
        </Card>)
}

function EngToLang() {
    return(<TopBarWithAvatar childToPut={RestOfEngToLang()} />)
}

export default EngToLang;