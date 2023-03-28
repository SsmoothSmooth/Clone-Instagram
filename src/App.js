import logo from './logo.svg';
import './App.css';
import {db} from './firebase.js';
import { useEffect, useState } from 'react';

function App() {

  // Verificar em qual status o usuário se encontra logado ou não
  const [user, setUser] = useState(null);

  useEffect(()=>{
  
  },[])

  return (
    <div className="App">
      
      <div className="header">
        <div className="center">

          <div className="header_logo">
            <a href='#'><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/></a>
          </div> {/* header_logo */}

          {
            (user)?
            <div>Hi</div>
            :

            <div className="header_loginForm">
              <form>
                <input type="text" placeholder="Login.."/>
                <input type="password" placeholder="Senha.."/>
                <input type="submit" name="acao" value="Logar!"/>
              </form>
            </div>
          }

          

        </div> {/* center */}
      </div> {/* header */}

    </div>
  );
}

export default App;
