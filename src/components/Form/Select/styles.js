import styled from 'styled-components';
import ReactSelect from 'react-select';

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
