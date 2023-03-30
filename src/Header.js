import { useEffect, useState } from 'react';
import {auth} from './firebase.js'

function Header(props){

    useEffect(() => {
        
    })

    function criarConta(e){
        e.preventDefault();
        let email = document.getElementById('email-cadastro').value;
        let username = document.getElementById('username-cadastro').value;
        let password = document.getElementById('senha-cadastro').value;
        
        //Criar conta firebase
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName:username
            })
            alert("Suceesso !");

            let modal = document.querySelector('.modalCriarConta');
            modal.style.display = "none"; 
        }).catch((error)=>{
            alert(error.message);
        });
    }

    function logar(e){
        e.preventDefault();
        let email = document.getElementById('email-login').value;
        let senha = document.getElementById('senha-login').value;

        // Login com firebase
        auth.signInWithEmailAndPassword(email, senha)
        .then((auth)=>{
            props.setUser(auth.user.displayName);
            alert('Sucesso !')
        }).catch((err)=>{
            alert(err.message);
        })
    }
    
    function abrirModalCriarConta(e){
        e.preventDefault();
        
        let modal = document.querySelector('.modalCriarConta');

        modal.style.display = "block";
    }

    function fecharModalCriar(){

        let modal = document.querySelector('.modalCriarConta');

        modal.style.display = "none";

    }

    return(
        <div className="header">

            <div className="modalCriarConta">
                <div className="formCriarConta">
                    <div onClick={()=>fecharModalCriar()} className="clsoe-modal-criar">X</div>
                    <h2>Criar conta</h2>
                    <form onSubmit={(e)=> criarConta(e)}> 
                        <input id="email-cadastro" type="text" placeholder="Seu email" />
                        <input id="username-cadastro" type="text" placeholder="Username" />
                        <input id="senha-cadastro" type="password" placeholder="Digite a senha" />
                        <input type="submit" value="Criar conta !" />
                        
                    </form>
                </div>
            </div>

            <div className="center">
                <div className="header_logo">
                    <a href='#'><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/></a>
                </div> 

                {
                    (props.user)?
                    <div className="header_logadoInfo">
                    <span>Hi, <b>{props.user}</b></span>
                    <a href="#">Postar</a>
                    </div>
                    :

                    <div className="header_loginForm">
                    <form onSubmit={(e)=>logar(e)}>
                        <input id="email-login" type="text" placeholder="Login.."/>
                        <input id="senha-login" type="password" placeholder="Senha.."/>
                        <input type="submit" name="acao" value="Logar!"/>
                    </form>

                    <div className="btn_criarConta">
                    <a onClick={(e)=> abrirModalCriarConta(e)} href='#'>Criar conta</a>
                    </div>
                    </div>
                }

            </div>
        </div> 
    )

}

export default Header;

