import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div``;

export const MenuContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  max-width: 320px;

  background: #f2d20c;

  span {
    display: block;
    width: 100%;
    padding: 19px 22px;

    font-size: 22px;
    line-height: 1.4;
    font-weight: bold;

    background: ${lighten(0.02, '#e3bc07')};
  }
`;

export const MenuList = styled.ul`
  width: 100%;

  li {
    width: 100%;
    a {
      padding: 22px;
      display: flex;
      align-items: center;
      font-size: 18px;
      color: #464646;
    }

    svg {
      margin-right: 22px;
    }

    transition: background-color 0.2s;
    &:hover {
      background: #e3bc07;
    }
  }
`;
