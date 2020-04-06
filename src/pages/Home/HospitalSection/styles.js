import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 60px 0;

  @media screen and (max-width: 1249px) {
    padding: 60px 32px;
  }

  margin-top: 60px;
  background: #fed308;
`;

export const HospitalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContent = styled.div`
  flex: 1 1 50%;

  h1 {
    font-weight: 400;
    font-size: 42px;
    color: #464646;
    max-width: 440px;
    margin: 22px 0;

    strong {
      font-weight: bold;
    }
  }

  p {
    color: #464646;
    font-size: 18px;
    max-width: 500px;
    line-height: 1.5;
  }
`;

export const PlayerWrapper = styled.div`
  flex: 1 1 50%;
  padding: 0 22px;
`;
