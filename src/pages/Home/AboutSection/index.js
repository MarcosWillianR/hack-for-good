import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function AboutSection() {
  const iretiAbout = [
    {
      title: 'Quem somos',
      description:
        'Somos uma Startup sem fins lucrativos que surgiu no Hack For Good COVID-19 com o objetivo de mobilizar a sociedade brasileira para fortalecimento do nosso sistema de saúde.',
    },
    {
      title: 'Propósito',
      description:
        'Facilitar a comunicação social visando a manutenção do sistema público de saúde',
    },
    {
      title: 'Solução',
      description:
        'Conectar pessoas e empresas com o objetivo de captar recursos para os hospitais da rede pública de saúde.',
    },
  ];

  return (
    <Container>
      <h1>Sobre a IRETI</h1>

      <ul>
        {iretiAbout.map((ireti) => (
          <li key={ireti.title}>
            <img
              src="https://api.adorable.io/avatars/90/abott@adorable.png"
              alt="IRETI"
            />
            <h2>{ireti.title}</h2>
            <p>{ireti.description}</p>
          </li>
        ))}
      </ul>

      <Link to="/signup">Cadastrar</Link>
    </Container>
  );
}
