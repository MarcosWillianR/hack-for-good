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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. no
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
