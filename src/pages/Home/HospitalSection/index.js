import React from 'react';
import { Player, BigPlayButton } from 'video-react';

import {
  Container,
  TextContent,
  PlayerWrapper,
  HospitalWrapper,
} from './styles';
import { Wrapper } from '~/styles/default';

import Video from '~/assets/video.mp4';
import VideoLogo from '~/assets/video-logo.png';

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
              Nesse vídeo falamos sobre o que é nosso projeto e ensinamos como
              navegar no nosso site.
            </p>
          </TextContent>

          <PlayerWrapper>
            <Player playsInline poster={VideoLogo} src={Video}>
              <BigPlayButton position="center" />
            </Player>
          </PlayerWrapper>
        </HospitalWrapper>
      </Wrapper>
    </Container>
  );
}
