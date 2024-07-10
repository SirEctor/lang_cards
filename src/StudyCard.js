import { useParams } from "react-router-dom";
import TopBarWithAvatar from './TopBarWithAvatar.js';
import { Card} from "@mui/material";
import { useEffect, useState } from "react";
import { getDataFromCSV } from "./Utilities.js";
import ViewableCard from "./ViewableCard.js";

function RestOfStudyCard(){
    let {lang } = useParams();

    const [langArray, setLangArray] = useState([]);

    const[currentCard, setCurrentCard] = useState(0);
    
    
    useEffect(() => {
        let specificFilePath = "/study_data/" + lang.toString() + ".csv";
        getDataFromCSV(specificFilePath, setLangArray);
    }, [lang])

    let visibleClass = "card-visible";
    let hiddenClass = "card-hidden";

    return(<Card sx={{ minWidth: 275 }} color="">
            {langArray ? langArray.map(lang => (
                lang['code'].toString() === currentCard.toString() ? 
                (<ViewableCard langA={lang} visibility={visibleClass} setCurrentCard={setCurrentCard} currentCard={currentCard} />) 
                    :
                    (<ViewableCard langA={lang} visibility={hiddenClass} />) 
            )) : "LOADING"}
            
        </Card>)
}

function StudyCard(){
    return(<TopBarWithAvatar childToPut={RestOfStudyCard()} />)
}


export default StudyCard;