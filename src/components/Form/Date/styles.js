import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

export const DateInput = styled(ReactDatePicker)`
  width: 100%;
  max-width: ${(props) => props.styles?.width || '360'}px;
  height: ${(props) => props.styles?.height || '45'}px;

  border-radius: 150px;

  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
  border: 0;

  margin: 12px 0;

  padding: 4px 22px;
`;
