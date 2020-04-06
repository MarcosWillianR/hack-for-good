import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import {
  Sessions,
  Header,
  HeaderWrapper,
  LoginButton,
  RegiterButton,
} from './styles';

import { Wrapper } from '~/styles/default';

export default function HeaderComponent() {
  const history = useHistory();

  return (
    <Header>
      <Wrapper>
        <HeaderWrapper>
          <span>IRETI</span>

          <Sessions>
            <Link to="/teste">Quem somos</Link>
            <Link to="/teste">Nosso Propósito</Link>

            <LoginButton onClick={() => history.push('/login')}>
              Entrar
            </LoginButton>
            <RegiterButton onClick={() => history.push('/signup')}>
              Cadastrar
            </RegiterButton>
          </Sessions>
        </HeaderWrapper>
      </Wrapper>
    </Header>
  );
}
