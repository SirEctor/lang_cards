import { CardActionArea, CardContent, Typography, FormControl, TextField, Button, IconButton, Card } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from "react";


function ChangeableCard({langA, visibility, setCurrentCard, currentCard, mode, numCorrect, randomizedArray, setNumCorrect}){
    const [sound, setSound] = useState('');
    const [correctMatch, setCorrectMatch] = useState(undefined);
    const [percent, setPercent] = useState(0);
    const [oneTime, setOneTime] = useState(0);
    

    useEffect(() => {
        setPercent(Math.floor((numCorrect/randomizedArray.length) * 100));
    }, [numCorrect, randomizedArray]);

    function handleSound(event){
        setSound(event.target.value);
    }

    function checkMatch(event){
        event.preventDefault();
        if(mode.toString() === '0'){
            //eng to other lang
            setCorrectMatch(sound === langA['other-lang']);
            if(sound === langA['other-lang']){
                if(oneTime < 1){
                    setOneTime(oneTime => oneTime + 1);
                    setNumCorrect(numCorrect => numCorrect + 1);
                }
            }

            if(sound === langA['other-lang']){
                
                
            }
        }
        else{
            //other lang to eng
            setCorrectMatch(sound === langA['english']);
            if(sound === langA['english']){
                if(oneTime < 1){
                    setOneTime(oneTime => oneTime + 1);
                    setNumCorrect(numCorrect => numCorrect + 1);
                }
            }
        }
    }

    function goToNextCard(){
        setCurrentCard(currentCard => currentCard + 1)
    }

    if(mode.toString() === "0"){
        //eng to other lang
        return(
                <>
                    <CardContent key={langA['code']} className={visibility ? visibility.toString() : "inherit"}>
                        <CardActionArea key={langA['code']} className={visibility ? visibility.toString() : "inherit"}>
                         <Typography variant="h1" sx={{flexGrow: 1}} color="purple" background="black"> {langA['english']}</Typography>
                        </CardActionArea>
                        <form onSubmit={checkMatch} autoComplete="off">
                            <FormControl id={"sound-form-" + langA['code'].toString()} sx={{mt:2, flexGrow: 1, flexDirection: "row"}}>
                                <TextField id={"sound-username-" + langA['code'].toString()} sx={{mt:2}} variant="outlined" color="secondary" label={"Enter Sound"} onChange={handleSound} />
                                <Button variant="outlined" color="inherit" sx={{mt: 2}} type="submit">Submit</Button>
                            </FormControl>   
                        </form>
                        {typeof(correctMatch) !== 'undefined' && !(correctMatch) && <Typography variant="h5" sx={{flexGrow: 1}} color="red"> {"The correct answer is " + langA['other-lang'].toString()}</Typography>}
                        {typeof(correctMatch) !== 'undefined' && correctMatch && (<>
                        <Typography variant="h5" color="green"> {"CORRECT!"}</Typography>
                        <IconButton variant="contained" color="inherit" size="large" onClick={goToNextCard}>
                            <ArrowForwardIcon fontSize="inherit"  color="inherit" />    
                        </IconButton>
                        </>)}
                    </CardContent>
                
                    <Card sx={{ color:'white', mt:5,  minWidth: 25, background:"purple" }} className={visibility ? visibility.toString() : "inherit"}>
                    {numCorrect.toString() +"/" + randomizedArray.length +  " = "+ percent  +"%"}
                    </Card>
                </>
                
            )
    }else{
        //other lang to eng
        return(
            <>
                <CardActionArea key={langA['code']} className={visibility ? visibility.toString() : "inherit"}>
                    <CardContent key={langA['code']} className={visibility ? visibility.toString() : "inherit"}>
                        <Typography variant="h1" sx={{flexGrow: 1}} color="purple" background="black"> {langA['other-lang']}</Typography>
                        <form onSubmit={checkMatch} autoComplete="off">
                            <FormControl id={"sound-form-" + langA['code'].toString()} sx={{mt:2, flexGrow: 1, flexDirection: "row"}}>
                                <TextField id={"sound-username-" + langA['code'].toString()} sx={{mt:2}} variant="outlined" color="secondary" label={"Enter Sound"} onChange={handleSound} />
                                <Button variant="outlined" color="inherit" sx={{mt: 2}} type="submit">Submit</Button>
                            </FormControl>   
                        </form>
                        {typeof(correctMatch) !== 'undefined' && !(correctMatch) && <Typography variant="h5" sx={{flexGrow: 1}} color="red"> {"The correct answer is " + langA['english'].toString()}</Typography>}
                        {typeof(correctMatch) !== 'undefined' && correctMatch && (<>
                        <Typography variant="h5" sx={{flexGrow: 1}} color="green"> {"CORRECT!"}</Typography>
                        <IconButton variant="contained" color="inherit" sx={{ flexGrow: 1}} size="large" onClick={goToNextCard}>
                            <ArrowForwardIcon fontSize="inherit"  color="inherit" />    
                        </IconButton>
                        </>)}
                    </CardContent>
                </CardActionArea>

                <Card sx={{ color:'white', mt:5,  minWidth: 25, background:"purple" }} className={visibility ? visibility.toString() : "inherit"}>
                 {numCorrect.toString() +"/" + randomizedArray.length +  " = "+ percent  +"%"}
                </Card>
            </>
            
            )
    }
    
}


export default ChangeableCard;