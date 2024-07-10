import { CardActionArea, CardContent, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function ViewableCard({langA, visibility, setCurrentCard, currentCard}){
    function goToNextCard(){
        setCurrentCard(currentCard => currentCard + 1)
    }

    return(
    <CardActionArea key={langA['code']} className={visibility ? visibility.toString() : "inherit"}>
        <CardContent key={langA['code']} className={visibility ? visibility.toString() : "inherit"}>
            <Typography variant="h1" sx={{flexGrow: 1}} color="purple" background="black"> {langA['other-lang']}</Typography>
            {(<>
            <Typography variant="h5" sx={{flexGrow: 1}} color="green"> {"sounds like " + langA['english'].toString()}</Typography>
            <IconButton variant="contained" color="inherit" sx={{flexGrow: 1}} size="large" onClick={goToNextCard}>
                <ArrowForwardIcon fontSize="inherit"  color="inherit" />    
            </IconButton>
            </>)}
        </CardContent>
    </CardActionArea>
    )
}


export default ViewableCard;