import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  OverViewContainer,
  BoxWrapper,
  StatisticsContainer,
  HospitalAndRegionContainer,
  HospitalContainer,
  RegionContainer,
  ItensDesc,
  TopContent,
  BottomContent,
} from './styles';

import Statistics from '~/assets/Statistics.png';
import Map from '~/assets/mapa-dashboard.svg';

import VoluntariesAndFastDetails from './VoluntariesAndFastDetails';

const regions = [
  { state: 'São Paulo', value: '29.193' },
  { state: 'Rio de Janeiro', value: '18.832' },
  { state: 'Minas Gerais', value: '19.758' },
  { state: 'Espírito Santo', value: '23.078' },
  { state: 'Paraná', value: '29.193' },
  { state: 'Goiás', value: '37.760' },
];

const hospitals = [
  {
    localization: 'São Paulo',
    name: 'Hospital 1',
    lacking: '10k',
    donated: '0',
  },
  {
    localization: 'Belo Horizonte',
    name: 'Hospital 2',
    lacking: '50k',
    donated: '0',
  },
  {
    localization: 'São Paulo',
    name: 'Hospital 3',
    lacking: '10k',
    donated: '10k',
  },
  {
    localization: 'São Paulo',
    name: 'Hospital 4',
    lacking: '40k',
    donated: '0',
  },
  {
    localization: 'Curitiba',
    name: 'Hospital 5',
    lacking: '100k',
    donated: '0',
  },
  {
    localization: 'Rio de Janeiro',
    name: 'Hospital 6',
    lacking: '20k',
    donated: '0',
  },
  {
    localization: 'São Paulo',
    name: 'Hospital 7',
    lacking: '50k',
    donated: '0',
  },
  {
    localization: 'Curitiba',
    name: 'Hospital 8',
    lacking: '80k',
    donated: '0',
  },
  {
    localization: 'São Paulo',
    name: 'Hospital 9',
    lacking: '100k',
    donated: '0',
  },
  {
    localization: 'Goiânia',
    name: 'Hospital 10',
    lacking: '90k',
    donated: '0',
  },
  {
    localization: 'Rio de Janeiro',
    name: 'Hospital 11',
    lacking: '10k',
    donated: '0',
  },
];

export default function Dashboard() {
  return (
    <Container>
      <OverViewContainer>
        <h1>Overview</h1>

        <BoxWrapper>
          <div>
            <p>Total de doações</p>
            <strong>246</strong>
          </div>

          <div>
            <p>Total de recursos em falta</p>
            <strong>2.453</strong>
          </div>

          <div>
            <p>Total de hospitais abastecidos</p>
            <strong>39</strong>
          </div>
        </BoxWrapper>
      </OverViewContainer>

      <StatisticsContainer>
        <img src={Statistics} alt="Estatisticas" />
      </StatisticsContainer>

      <HospitalAndRegionContainer>
        <HospitalContainer>
          <strong>Localização</strong>
          <strong>Hospital</strong>
          <strong>Em falta</strong>
          <strong>Doados</strong>

          {hospitals.map((hospital) => (
            <ItensDesc>
              <span>{hospital.localization}</span>
              <span>{hospital.name}</span>
              <span>{hospital.lacking}</span>
              <span>{hospital.donated}</span>
            </ItensDesc>
          ))}
        </HospitalContainer>

        <RegionContainer>
          <TopContent>
            <p>Regiôes que necessitam de mais materiais</p>
            <Link to="/">Mostrar Lista</Link>
          </TopContent>

          <img src={Map} alt="Brasil - Map" />

          <BottomContent>
            <ul>
              {regions.map((region) => (
                <li>
                  <strong>
                    <span />
                    {region.state}
                  </strong>
                  <p>{region.value}</p>
                </li>
              ))}
            </ul>
          </BottomContent>
        </RegionContainer>
      </HospitalAndRegionContainer>

      <VoluntariesAndFastDetails />
    </Container>
  );
}
