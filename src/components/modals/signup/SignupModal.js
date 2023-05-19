


function SignupModal({ onClose }){

    // function criarConta(e){
    //     e.preventDefault();
    //     let email = document.getElementById('email-cadastro').value;
    //     let username = document.getElementById('username-cadastro').value;
    //     let password = document.getElementById('senha-cadastro').value;
        
    //     //Criar conta firebase
    //     auth.createUserWithEmailAndPassword(email, password)
    //     .then((authUser)=>{
    //         authUser.user.updateProfile({
    //             displayName:username
    //         })
    //         alert("Suceesso !");

    //         let modal = document.querySelector('.modalCriarConta');
    //         modal.style.display = "none"; 
    //     }).catch((error)=>{
    //         alert(error.message);
    //     });
    // }

    return (
        <div className="modalCriarConta">
            <div className="formCriarConta">
                <div onClick={onClose} className="close-modal-criar">X</div>
                <h2>Criar conta</h2>
                <form onSubmit={(e)=> criarConta(e)}> 
                    <input id="email-cadastro" type="text" placeholder="Seu email" />
                    <input id="username-cadastro" type="text" placeholder="Username" />
                    <input id="senha-cadastro" type="password" placeholder="Digite a senha" />
                    <input type="submit" value="Criar conta !" />
                </form>
            </div>
        </div>
    )
}

export default SignupModal;