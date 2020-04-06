import styled from 'styled-components';
import ReactSelect from 'react-select';
import { lighten } from 'polished';

export const Container = styled.div`
  width: calc(100% - 320px);
  position: fixed;
  top: 0;
  left: 320px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.16);
  padding: 8px 12px;

  button {
    margin: 0 12px;
    background: transparent;
    border: 0;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;

    margin: 0 22px;
  }
`;

export const SearchInputWrapper = styled.div`
  flex: 2;

  display: flex;
  align-items: center;

  div {
    flex: 1;

    ul li {
      span {
        color: #bcbccb;
      }
      border-radius: 20px;
      padding: 8px 32px;
      &:hover {
        background: ${lighten(0.1, '#fed308')};
        span {
          color: #4d4d4d;
        }
      }
    }
  }

  svg {
    display: none;
  }

  .search {
    display: block;
    position: relative;
    left: 32px;
    z-index: 999;
  }
`;

export const InputSelect = styled(ReactSelect)`
  span {
    display: none;
  }

  flex: 0 1 220px;
  min-width: 160px;
  margin: 0 12px;

  div {
    border: 0;
  }
`;
