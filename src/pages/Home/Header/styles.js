import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.div`
  padding: 20px 32px;

  background: #fed308;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.16);
  position: relative;
  z-index: 999;
`;

export const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 38px;
    font-weight: 300;
    text-transform: uppercase;
  }
`;

export const Sessions = styled.div`
  a {
    margin-right: 32px;
    color: #464646;

    transition: color 0.2s;
    &:hover {
      color: ${darken(0.3, '#464646')};
    }
  }
`;

export const LoginButton = styled.button`
  background: transparent;
  margin-right: 22px;
  padding: 8px 24px;
  border-radius: 50px;
  border: 1px solid #464646;
  color: #464646;
  font-weight: bold;

  transition: background-color 0.2s;
`;

export const RegiterButton = styled.button`
  background: #fff;
  padding: 10px 32px;
  border-radius: 50px;
  border: 0;
  color: #464646;
  font-weight: bold;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${darken(0.03, '#fff')};
  }
`;
