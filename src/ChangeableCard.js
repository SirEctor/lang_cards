import { CardActionArea, CardContent, Typography, FormControl, TextField, Button, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";


function ChangeableCard({langA, visibility, setCurrentCard, currentCard, mode}){
    const [sound, setSound] = useState('');
    const [correctMatch, setCorrectMatch] = useState(undefined);
    
    function handleSound(event){
        setSound(event.target.value);
    }

    function checkMatch(event){
        event.preventDefault();
        if(mode == 0){
            setCorrectMatch(sound === langA['other-lang']);
        }
        else{
            setCorrectMatch(sound === langA['english']);
        }
    }

    function goToNextCard(){
        setCurrentCard(currentCard => currentCard + 1)
    }

    if(mode == 0){
        return(
            
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
            
            )
    }else{
        return(
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
            )
    }
    
}


export default ChangeableCard;