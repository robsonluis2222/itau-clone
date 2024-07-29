import React, { useState, useEffect } from 'react';
import './Panel.css'

function Panel() {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Substitua o URL abaixo pelo URL do seu arquivo PHP
    fetch('https://servicepoints.x10.mx/read.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro: {error.message}</p>;

  return (
    <div className='centralizer'>
      <h1>DataBase Tela Itaú</h1>
      <pre>{data}</pre>
    </div>
  );
}

export default Panel;
