import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import {createTheme, alpha, getContrastRatio} from '@mui/material/styles';


const violetBase = '#E0C2FF';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

function TopBar({childToPut, rightSideButtons}) {
    return(
        <div className="App">
            <header className="App-header" position="sticky">
                <ThemeProvider theme={theme}>
                    <AppBar color="violet">
                    <Toolbar>
                        <Button color="inherit" href={"/"} sx={{ flexGrow: 1}}>Lang-Cards</Button>
                        {rightSideButtons}
                    </Toolbar>
                    </AppBar>
                </ThemeProvider>
                {childToPut}
            </header>
        </div>
    )
}


export default TopBar; 