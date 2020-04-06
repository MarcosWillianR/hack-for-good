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
        'Captação de voluntariado para os hospitais e de equipamentos de proteção individual, por meio de doações de pessoas físicas e jurídicas. Nesse sentido, viabilizamos a comunicação entre empresas para estabelecimento de parcerias, de forma que eles possam contribuir de forma individual em cada etapa da cadeia produtiva dos EPI’s, colaborando para o bem estar coletivo e valorização de suas marcas, com custos divididos.',
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
