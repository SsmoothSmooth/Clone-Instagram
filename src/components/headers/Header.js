// Assets
import { useEffect, useState } from 'react';
import firebase from 'firebase';
import {auth, storage, db} from '../../firebase.js'

import Login from '../forms/Login.js';

// Modal
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
                        <span>Welcome, <b>{props.user}</b></span>
                        <a onClick={handleOpenModal} href="#">Postar</a>
                        { isModalOpen && <UploadModal onClose={handleCloseModal} />}
                        <a onClick={(e)=>deslogar(e)}>Deslogar</a>
                    </div>
                    :
                    <div className="header_loginForm">
                        <Login />    
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

