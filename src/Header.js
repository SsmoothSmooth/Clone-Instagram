import { useEffect, useState } from 'react';

function Header(props){

    useEffect(() => {
        
    })
    
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
                    <form>
                        <input type="text" placeholder="Seu email" />
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Digite a senha" />
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
                    <form>
                        <input type="text" placeholder="Login.."/>
                        <input type="password" placeholder="Senha.."/>
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

