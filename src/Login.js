import TopBar from "./TopBar.js";

function restOfLoginPage(){
    return (
        <div sx={{flexGrow: 1}}>   
            <p>This is the login div</p>
        </div>
    )
}


function Login() {
    return(<TopBar childToPut={restOfLoginPage()}/>)
}

export default Login;