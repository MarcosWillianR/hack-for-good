import React from 'react';
import { Player, BigPlayButton } from 'video-react';

import {
  Container,
  TextContent,
  PlayerWrapper,
  HospitalWrapper,
} from './styles';
import { Wrapper } from '~/styles/default';

export default function HospitalSection() {
  return (
    <Container>
      <Wrapper>
        <HospitalWrapper>
          <TextContent>
            <h1>
              Os <strong>hospitais</strong> precisam da sua ajuda
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
            </p>
          </TextContent>

          <PlayerWrapper>
            <Player
              playsInline
              poster="https://lh3.googleusercontent.com/proxy/GsIXuzeOJR0h2CjUIiZXvNQ8fzidjp9OalO8r8gW3rRvtoLhQUYGuyK0cJqg0QkqppDnj-RuJwEmy7eFG0VMs6Km8PXHzkxaFMREEQoTW5O-wjHPZM-xCPpfk-ag"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            >
              <BigPlayButton position="center" />
            </Player>
          </PlayerWrapper>
        </HospitalWrapper>
      </Wrapper>
    </Container>
  );
}
