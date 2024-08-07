import { useParams, useNavigate } from "react-router-dom";
import TopBarWithAvatar from './TopBarWithAvatar.js';
import { Card, Button, FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import { getDataFromCSV } from "./Utilities.js";
import ViewableCard from "./ViewableCard.js";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function RestOfStudyCard(){
    let { lang, letterFamily } = useParams();
    const navigate = useNavigate();
    const [langArray, setLangArray] = useState([]);
    const [randomizedArray, setRandomizedArray] = useState([])

    const[currentCard, setCurrentCard] = useState(0);
    const[finished, setFinished] = useState(false);
    

    
    useEffect(() => {
        let specificFilePath = "/lang_cards/study_data/" + lang.toString() + ".csv";
        getDataFromCSV(specificFilePath, setLangArray, letterFamily);
    }, [lang, letterFamily]);

    useEffect(() => {
        setRandomizedArray([].concat(langArray.sort(() => 0.5 - Math.random())))     
    },[langArray])

    useEffect(() => {
        setFinished(currentCard >= langArray.length);
    }, [currentCard, langArray])
    
    let visibleClass = "card-visible";
    let hiddenClass = "card-hidden";


    function resetStudy(){
        window.location.reload();
    }

    return(
    <>
    <Card sx={{ minWidth: 275 }} color="">
            {randomizedArray ? randomizedArray.map((lang, index) => (
                index.toString() === currentCard.toString() ? 
                (<ViewableCard langA={lang} visibility={visibleClass} setCurrentCard={setCurrentCard} currentCard={currentCard} key={index} />) 
                    :
                    (<ViewableCard langA={lang} visibility={hiddenClass} key={index} />) 
            )) : "LOADING"}

    </Card>
    
    {finished && <Card sx={{ minWidth: 275 }}>
            <Button onClick={resetStudy} color='secondary' variant="outlined" sx={{ mt: 20, mb: 20 }} style={{ textTransform: "none" }} endIcon={<RestartAltIcon />}>RESTART</Button>    
        </Card> 
    }
    </>
    )
}

function StudyCard(){
    return(<TopBarWithAvatar childToPut={RestOfStudyCard()} />)
}


export default StudyCard;