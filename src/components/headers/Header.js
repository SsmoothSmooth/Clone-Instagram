import { useEffect, useState } from 'react';
import firebase from 'firebase';
import {auth, storage, db} from '../../firebase.js'

import SignupModal from '../modals/signup/SignupModal.js';
import UploadModal from '../modals/upload/UploadModal.js';
import { openModal, closeModal } from '../../utils/modalUtils.js';

function Header(props){

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
    })

    const handleOpenModal = () => {
        openModal(setIsModalOpen);
    };
    
    const handleCloseModal = () => {
        closeModal(setIsModalOpen);
    };

    function logar(e){
        e.preventDefault();
        let email = document.getElementById('email-login').value;
        let senha = document.getElementById('senha-login').value;

        // Login com firebase
        auth.signInWithEmailAndPassword(email, senha)
        .then((auth)=>{
            props.setUser(auth.user.displayName);
            alert('Sucesso !')
            window.location.href = "/";
        }).catch((err)=>{
            alert(err.message);
        })
    }

    function deslogar(e){
        e.preventDefault();
        auth.signOut().then(function(val){
          props.setUser(null);  
          window.location.href = "/";
        })
    } 

    return(
        <div className="header">

            <div className="center">
                <div className="header_logo">
                    <a href='#'><img src="https://i.ibb.co/DwhT1jS/Logo-Smooth-Gram-Type-01.png"/></a>
                </div> 

                {
                    (props.user)?
                    <div className="header_logadoInfo">
                        <span>Hi, <b>{props.user}</b></span>
                        <a onClick={handleOpenModal} href="#">Postar</a>
                        { isModalOpen && <UploadModal onClose={handleCloseModal} />}
                        <a onClick={(e)=>deslogar(e)}>Deslogar</a>
                    </div>
                    :

                    <div className="header_loginForm">
                        <form onSubmit={(e)=>logar(e)}>
                            <input id="email-login" type="text" placeholder="Login.."/>
                            <input id="senha-login" type="password" placeholder="Senha.."/>
                            <input type="submit" name="acao" value="Logar!"/>
                        </form>

                        <div className="btn_criarConta">
                            <a onClick={handleOpenModal} href='#'>Criar conta</a>
                            {
                                isModalOpen && <SignupModal onClose={handleCloseModal} />
                            }
                        </div>
                    </div>
                }

            </div>
        </div> 
    )

}

export default Header;

