import {auth, storage, db} from '../../firebase.js'

// Colacar essa função em utils
function logar(e){
    e.preventDefault();
    let email = document.getElementById('email-login').value;
    let senha = document.getElementById('senha-login').value;

    // Login com firebase
    auth.signInWithEmailAndPassword(email, senha)
    .then((auth)=>{
        props.setUser(auth.user.displayName);
        window.location.href = "/";
    }).catch((err)=>{
        console.log(err.message);
    })
}


function Login(){
    return (
        <form onSubmit={(e)=>logar(e)}>
            <input id="email-login" type="text" placeholder="Login.."/>
            <input id="senha-login" type="password" placeholder="Senha.."/>
            <input type="submit" name="acao" value="Logar!"/>
        </form>
    )
}

export default Login;