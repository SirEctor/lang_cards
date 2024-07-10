import { useParams } from "react-router-dom";
import TopBarWithAvatar from './TopBarWithAvatar.js';
import { Card} from "@mui/material";
import { useEffect, useState } from "react";
import { getDataFromCSV } from "./Utilities.js";
import ChangeableCard from "./ChangeableCard.js";


function RestOfEngToLang(){
    let { mode, lang } = useParams();

    const [langArray, setLangArray] = useState([]);

    const[currentCard, setCurrentCard] = useState(0);
    
    
    useEffect(() => {
        let specificFilePath = "/study_data/" + mode.toString() + "-" + lang.toString() + ".csv";
        getDataFromCSV(specificFilePath, setLangArray);
    }, [lang, mode])

    let visibleClass = "card-visible";
    let hiddenClass = "card-hidden";

    return(<Card sx={{ minWidth: 275 }} color="">
            {langArray ? langArray.map(lang => (
                lang['code'].toString() === currentCard.toString() ? 
                (<ChangeableCard langA={lang} visibility={visibleClass} setCurrentCard={setCurrentCard} currentCard={currentCard} />) 
                    :
                    (<ChangeableCard langA={lang} visibility={hiddenClass} />) 
            )) : "LOADING"}
            
        </Card>)
}

function EngToLang() {
    return(<TopBarWithAvatar childToPut={RestOfEngToLang()} />)
}

export default EngToLang;