import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.div`
  height: 80px;
  padding: 22px 32px;

  background: #fff;
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
      color: #fed308;
    }
  }
`;

export const LoginButton = styled.button`
  background: transparent;
  margin-right: 22px;
  padding: 6px 22px;
  border-radius: 50px;
  border: 1px solid #464646;
  color: #464646;
  font-weight: bold;

  transition: background-color 0.2s;

  &:hover {
    background-color: #fed308;
    border-color: transparent;
  }
`;

export const RegiterButton = styled.button`
  background: #fed308;
  padding: 8px 32px;
  border-radius: 50px;
  border: 0;
  color: #464646;
  font-weight: bold;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${darken(0.03, '#fed308')};
  }
`;
