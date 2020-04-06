import styled, { css } from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  ${(props) =>
    props.className === 'input__50'
      ? css`
          display: inline-block;
          @media screen and (max-width: 765px) {
            display: block;
            margin: 22px 0 !important;
          }
        `
      : css`
          display: block;
        `}

  margin: 12px 0;
`;

export const InputSelect = styled(ReactSelect)`
  width: 100%;
  max-width: ${(props) => props.styles?.width || '360'}px;

  .react-select__control {
    border-radius: 150px;
    padding: 4px 8px;
    box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
    border: 0;
  }

  div:nth-child(4) {
    border-radius: 0;
  }

  span {
    display: none !important;
  }

  svg {
    color: #333;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff2626;
  display: block;
  font-size: 14px !important;

  margin: 12px 0 12px 12px;
`;
