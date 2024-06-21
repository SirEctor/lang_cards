import TopBar from "./TopBar.js";

function restOfRegisterPage(){
    return (
        <div>
            <p>This is the register div</p>
        </div>  
    )
}


function Register() {
    return(<TopBar childToPut={restOfRegisterPage()}/>)
}

export default Register;