import React from 'react';

import { Container, TextSection, RegionsWrapper, ImageWrapper } from './styles';

import { Wrapper } from '~/styles/default';

import Mapa from '~/assets/mapa.svg';

export default function RegionsSection() {
  return (
    <Container>
      <Wrapper>
        <RegionsWrapper>
          <TextSection>
            <h1>
              Regiões que <strong>necessitam</strong> mais da sua ajuda
            </h1>

            <p>
              se possível direciona sua doação para as regiões mais afetadas
            </p>
          </TextSection>

          <ImageWrapper>
            <img src={Mapa} alt="COVID-19 - Brazil map" />
          </ImageWrapper>
        </RegionsWrapper>
      </Wrapper>
    </Container>
  );
}
