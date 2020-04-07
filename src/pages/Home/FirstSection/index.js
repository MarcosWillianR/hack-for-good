import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  RegisterBackground,
  SusInformationBackground,
  SectionContentWrapper,
  RegisterContent,
  SusInformationContent,
  Wrapper,
  WrapperRegister,
} from './styles';

const covidNews = [
  {
    title: 'Falta de epi preocupa OMS',
    link:
      'https://amb.org.br/noticias/falta-de-epi-e-teste-para-coronavirus-tambem-preocupam-a-oms/',
    text:
      'A Organização Mundial da Saúde (OMS) está preocupada e alerta em relação a falta de Equipamentos de Proteção Individual (EPIs) para os profissionais de saúde que estão na linha de frente em combate ao coronavírus.',
  },
  {
    title:
      'São Paulo tem 855 denúncias de falta de EPI em hospitais e unidades de saúde',
    link:
      'https://agora.folha.uol.com.br/sao-paulo/2020/04/sao-paulo-tem-855-denuncias-de-falta-de-epi-em-hospitais-e-unidades-de-saude.shtml',
    text:
      'A AMB (Associação Médica Brasileira) recebeu 855 denúncias de falta de EPI (Equipamento de Proteção Individual) para evitar o coronavírus em hospitais e demais unidades de saúde do estado de São Paulo. Entre essas queixas, 255 foram registradas por profissionais da capital.',
  },
  {
    title: '‘Em abril o sistema de saúde entrará em colapso’, diz Mandetta',
    link:
      'https://saude.estadao.com.br/noticias/geral,em-abril-o-sistema-de-saude-entrara-em-colapso-diz-mandetta,70003241718',
    text:
      'O ministro da Saúde, Luiz Henrique Mandetta, afirmou nesta sexta-feira, 20, que até o final de abril o sistema de saúde brasileiro vai entrar em colapso pela epidemia do novo coronavírus. "Claramente, em final de abril nosso sistema de saúde entra em colapso", afirmou, ao lado do presidente Jair Bolsonaro.',
  },
  {
    title: 'Professores criam simulador que prevê colapso do sistema de saúde',
    link:
      'https://exame.abril.com.br/ciencia/professores-criam-simulador-que-preve-colapso-do-sistema-de-saude/',
    text:
      'Por meio de um modelo matemático, cientistas realizaram um estudo para tentar prever em quanto tempo o sistema de saúde brasileiro pode sofrer um colapso devido ao número de casos do novo coronavírus.',
  },
];

export default function FirstSection() {
  return (
    <Container>
      <RegisterBackground />
      <SusInformationBackground />

      <SectionContentWrapper>
        <WrapperRegister>
          <RegisterContent>
            <h1>
              A maneira mais <strong>fácil</strong> de ajudar
            </h1>

            <p>Hospitais a enfrentar o COVID-19.</p>

            <Link to="/signup">Cadastrar</Link>
          </RegisterContent>
        </WrapperRegister>

        <Wrapper>
          <SusInformationContent>
            <h2>Notícias do COVID-19</h2>
            <ul>
              {covidNews.map((news) => (
                <li>
                  <a href={news.link} target="_blank" rel="noopener noreferrer">
                    <strong>{news.title}</strong>
                    <p>{news.text}</p>
                  </a>
                </li>
              ))}
            </ul>
          </SusInformationContent>
        </Wrapper>
      </SectionContentWrapper>
    </Container>
  );
}
