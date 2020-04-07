import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import AboutPhoto1 from '~/assets/aboutPhoto1.png';
import AboutPhoto2 from '~/assets/aboutPhoto2.png';
import AboutPhoto3 from '~/assets/aboutPhoto3.png';

export default function AboutSection() {
  const iretiAbout = [
    {
      title: 'Quem somos',
      description:
        'Somos uma Startup sem fins lucrativos que surgiu no Hack For Good COVID-19 com o objetivo de mobilizar a sociedade brasileira para fortalecimento do nosso sistema de saúde.',
      img: AboutPhoto1,
    },
    {
      title: 'Propósito',
      description:
        'Facilitar a comunicação social visando a manutenção do sistema público de saúde',
      img: AboutPhoto2,
    },
    {
      title: 'Solução',
      description:
        'Conectar pessoas e empresas com o objetivo de captar recursos para os hospitais da rede pública de saúde.',
      img: AboutPhoto3,
    },
  ];

  return (
    <Container>
      <h1>Sobre a IRETI</h1>

      <ul>
        {iretiAbout.map((ireti) => (
          <li key={ireti.title}>
            <img src={ireti.img} alt={`IRETI - ${ireti.title}`} />
            <h2>{ireti.title}</h2>
            <p>{ireti.description}</p>
          </li>
        ))}
      </ul>

      <Link to="/signup">Cadastrar</Link>
    </Container>
  );
}
