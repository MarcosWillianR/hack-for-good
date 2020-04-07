import React from 'react';
import {
  MdPersonAdd,
  MdSync,
  MdTimer,
  MdError,
  MdAssignment,
} from 'react-icons/md';

import {
  Container,
  VoluntariesContainer,
  FastDetailsContainer,
  FastDetailsIcon,
  FastDetailsContent,
  VoluntaryType,
  ItensDesc,
} from './styles';

import voluntaries from './mock';

export default function VoluntariesAndFastDetails() {
  return (
    <Container>
      <VoluntariesContainer>
        <strong>Voluntários</strong>
        <strong>Doação</strong>
        <strong>Tipo</strong>
        <strong>Total</strong>

        {voluntaries.map((voluntary) => (
          <ItensDesc>
            <span>{voluntary.name}</span>
            <span>{voluntary.donation}</span>
            <VoluntaryType color={voluntary.type_color}>
              <span>{voluntary.type}</span>
            </VoluntaryType>
            <span>{voluntary.total}</span>
          </ItensDesc>
        ))}
      </VoluntariesContainer>

      <FastDetailsContainer>
        <p>Detalhes Rápidos</p>

        <FastDetailsContent>
          <ul>
            <li>
              <FastDetailsIcon color="#7D93FF">
                <MdPersonAdd size={18} color="#7D93FF" />
              </FastDetailsIcon>
              <strong>290 Novos voluntários</strong>
            </li>
            <li>
              <FastDetailsIcon color="#69D992">
                <MdSync size={18} color="#69D992" />
              </FastDetailsIcon>
              <strong>490 Pedidos</strong>
            </li>
            <li>
              <FastDetailsIcon color="#B4B3C6">
                <MdTimer size={18} color="#B4B3C6" />
              </FastDetailsIcon>
              <strong>120 Materiais entregues</strong>
            </li>
            <li>
              <FastDetailsIcon color="#F2C983">
                <MdError size={18} color="#F2C983" />
              </FastDetailsIcon>
              <strong>490 Materiais em falta</strong>
            </li>
            <li>
              <FastDetailsIcon color="#EC84D3">
                <MdAssignment size={18} color="#EC84D3" />
              </FastDetailsIcon>
              <strong>42 Itens em estoque</strong>
            </li>
          </ul>
        </FastDetailsContent>
      </FastDetailsContainer>
    </Container>
  );
}
