import { useParams } from "react-router-dom";
import TopBarWithAvatar from './TopBarWithAvatar.js';
import { Card, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getDataFromCSV } from "./Utilities.js";
import ChangeableCard from "./ChangeableCard.js";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function RestOfQuizCard(){
    let { mode, lang, letterFamily } = useParams();
    console.log(mode);

    const [langArray, setLangArray] = useState([]);
    const [randomizedArray, setRandomizedArray] = useState([])

    const[numCorrect, setNumCorrect] = useState(0);
    const[currentCard, setCurrentCard] = useState(0);
    const[finished, setFinished] = useState(false);
    
    useEffect(() => {
        let specificFilePath = "/study_data/" + lang.toString() + ".csv";
        getDataFromCSV(specificFilePath, setLangArray, letterFamily);
    }, [lang, letterFamily])

    useEffect(() => {
        setRandomizedArray([].concat(langArray.sort(() => 0.5 - Math.random())))     
    },[langArray])

    useEffect(() => {
        setFinished(currentCard >= langArray.length);
    }, [currentCard, langArray])

    let visibleClass = "card-visible";
    let hiddenClass = "card-hidden";

    return( <>
                <Card sx={{ minWidth: 275 }} color="">
                    {randomizedArray ? randomizedArray.map((lang, index) => (
                        index.toString() === currentCard.toString() ? 
                        (<ChangeableCard langA={lang} visibility={visibleClass} setCurrentCard={setCurrentCard} currentCard={currentCard} mode={mode} numCorrect={numCorrect} randomizedArray={randomizedArray} setNumCorrect={setNumCorrect} />) 
                            :
                            (<ChangeableCard langA={lang} visibility={hiddenClass} setCurrentCard={setCurrentCard} currentCard={currentCard} mode={mode} numCorrect={numCorrect} randomizedArray={randomizedArray} setNumCorrect={setNumCorrect} />) 
                    )) : "LOADING"}
                </Card>
                {finished && <Card sx={{ minWidth: 275 }}>
                    <Button color="secondary" variant="outlined" href={"/quiz/"+ mode.toString() + "/"+ lang.toString() + "/" + letterFamily.toString()} sx={{ mt: 20, mb: 20 }} style={{ textTransform: "none" }} endIcon={<RestartAltIcon />}>RESTART</Button>
                </Card> 
                }
                
            </>)
}

function QuizCard() {
    return(<TopBarWithAvatar childToPut={RestOfQuizCard()} />)
}

export default QuizCard;