import { useParams } from "react-router-dom";
import TopBarWithAvatar from './TopBarWithAvatar.js';
import { Card, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getDataFromCSV, nameOfLang } from "./Utilities.js";
import ViewableCard from "./ViewableCard.js";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function RestOfStudyCard(){
    let { lang } = useParams();

    const [langCodes, setLangCodes] = useState([]);
    const [langArray, setLangArray] = useState([]);

    const[currentCard, setCurrentCard] = useState(0);
    const[finished, setFinished] = useState(false);
    
    useEffect(() => {
        getDataFromCSV("./Language.csv", setLangCodes);
        let specificFilePath = "/study_data/" + lang.toString() + ".csv";
        getDataFromCSV(specificFilePath, setLangArray);
    }, [lang]);

    useEffect(() => {
        setFinished(currentCard >= langArray.length);
    }, [currentCard, langArray])
    
    let visibleClass = "card-visible";
    let hiddenClass = "card-hidden";

    return(<Card sx={{ minWidth: 275 }} color="">
            {langArray ? langArray.map(lang => (
                lang['code'].toString() === currentCard.toString() ? 
                (<ViewableCard langA={lang} visibility={visibleClass} setCurrentCard={setCurrentCard} currentCard={currentCard} />) 
                    :
                    (<ViewableCard langA={lang} visibility={hiddenClass} />) 
            )) : "LOADING"}

            {finished && <Button color="primary" variant="outlined" href={"/study/"+ lang.toString()} sx={{ mr: 2, flexGrow: 1 }} style={{ textTransform: "none" }} endIcon={<RestartAltIcon />}>RESTART</Button>}
        </Card>)
}

function StudyCard(){
    return(<TopBarWithAvatar childToPut={RestOfStudyCard()} />)
}


export default StudyCard;