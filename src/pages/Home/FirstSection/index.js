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
} from './styles';

export default function FirstSection() {
  return (
    <Container>
      <RegisterBackground />
      <SusInformationBackground />

      <SectionContentWrapper>
        <Wrapper>
          <RegisterContent>
            <h1>
              A <strong>maneira</strong> mais fácil de ajudar
            </h1>

            <p>Hospitais a enfrentar a COVID-19.</p>

            <Link to="/signup">Cadastrar</Link>
          </RegisterContent>
        </Wrapper>

        <Wrapper>
          <SusInformationContent>
            <h2>Notícias do SUS</h2>
            <ul>
              <li>
                <strong>Lorem</strong>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero
                </p>
              </li>
              <li>
                <strong>Lorem</strong>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero
                </p>
              </li>
              <li>
                <strong>Lorem</strong>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero
                </p>
              </li>
              <li>
                <strong>Lorem</strong>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero
                </p>
              </li>
              <li>
                <strong>Lorem</strong>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero
                </p>
              </li>
            </ul>
          </SusInformationContent>
        </Wrapper>
      </SectionContentWrapper>
    </Container>
  );
}
